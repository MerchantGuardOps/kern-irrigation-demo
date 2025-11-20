# Demo.kisag.co Deployment & Caching Issue - Complete Diagnostic & Fix Guide

## Problem Summary
demo.kisag.co is showing the main site instead of redirecting to /dashboard despite multiple deployments and configuration changes.

---

## ROOT CAUSE ANALYSIS

### Issue 1: Mixed Routing Strategies (Critical)
**Location:** `vercel.json` and `middleware.ts`

Current setup uses BOTH:
- **vercel.json:** Vercel-level rewrites with `host` condition matching
- **middleware.ts:** Next.js Edge middleware with hostname detection

**Problem:** These can conflict or race condition depending on Vercel's processing order.

```
Vercel rewrites (server-side)
        ↓
Next.js middleware (edge runtime)
        ↓
Route handlers
```

### Issue 2: Deprecated Middleware Pattern
**Build Warning Detected:**
```
⚠ The "middleware" file convention is deprecated.
Please use "proxy" instead. Learn more: https://nextjs.org/docs/messages/middleware-to-proxy
```

Next.js 16+ moved away from middleware.ts for this use case. Using deprecated patterns can cause:
- Inconsistent behavior across deployments
- CDN/Edge caching issues
- Slower resolution times

### Issue 3: vercel.json Host Matching May Not Work
Current vercel.json:
```json
{
  "rewrites": [{
    "source": "/",
    "has": [{
      "type": "host",
      "value": "demo.kisag.co"
    }],
    "destination": "/dashboard"
  }]
}
```

**Problems with this approach:**
1. Host conditions in vercel.json have lower priority than middleware
2. May not trigger if middleware processes request first
3. CDN might cache response before rewrites apply
4. Doesn't account for request headers variations (www prefix, ports, etc.)

### Issue 4: No Cache-Control Headers on Dashboard
The /dashboard page has no explicit cache-busting headers, so Vercel's CDN might cache the wrong response.

---

## QUICK FIX STEPS (Recommended Order)

### Step 1: Remove Conflicting Configuration
**Delete vercel.json** - it's creating ambiguity. Middleware will handle this.

```bash
rm vercel.json
```

### Step 2: Update middleware.ts with Proxy Pattern
Replace `/Users/soccer/Desktop/kern-irrigation-demo/middleware.ts` with:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // Demo subdomain routing - all requests go to /dashboard
  if (
    hostname.includes('demo.kisag.co') ||
    hostname === 'demo.kisag.co' ||
    hostname.startsWith('demo.kisag.co')
  ) {
    // Rewrite (don't change URL in browser) to dashboard
    if (pathname === '/' || pathname === '') {
      return NextResponse.rewrite(new URL('/dashboard', request.url));
    }
    // All other paths on demo subdomain also go to dashboard
    if (!pathname.startsWith('/dashboard')) {
      return NextResponse.rewrite(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
```

### Step 3: Add Cache Control to Dashboard
Create/update `/Users/soccer/Desktop/kern-irrigation-demo/app/dashboard/page.tsx` with cache headers:

```typescript
// Add this at the top of the file, before the component
export const metadata = {
  title: 'Kern Irrigation AI Dashboard',
  description: 'Real-Time Precision Irrigation Intelligence',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0; // No caching - always fresh
```

### Step 4: Force Vercel to Rebuild
```bash
# Option A: Push empty commit
git commit --allow-empty -m "Force Vercel rebuild - fix demo.kisag.co routing"
git push origin main

# Option B: Use Vercel CLI to redeploy
vercel --prod

# Option C: Clear Vercel cache manually
# Go to Vercel dashboard → Project Settings → Caching → Clear Cache
```

### Step 5: Verify DNS is Pointing Correctly
Check that demo.kisag.co DNS resolves to your Vercel project:

```bash
# Check DNS resolution
nslookup demo.kisag.co

# Expected output: Should point to Vercel's nameservers
# If it doesn't, update DNS records in your domain provider
```

### Step 6: Add to next.config.ts for Explicit Routing
Update `/Users/soccer/Desktop/kern-irrigation-demo/next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure middleware runs on all paths
  experimental: {
    middlewarePrefetch: 'flexible',
  },
};

export default nextConfig;
```

---

## WHY THESE ISSUES HAPPEN

### Vercel Rewrites vs Middleware Conflict
- **Vercel rewrites** are applied at the edge, BEFORE middleware
- **Middleware** runs in the Next.js runtime
- When both exist, behavior becomes unpredictable
- **Solution:** Use ONE approach consistently

### CDN Caching Issue
- First request to demo.kisag.co gets cached at Vercel's edge
- If request was served as error/redirect, subsequent requests hit that cached response
- **Solution:** Clear cache or force revalidate

### Deprecated Middleware Pattern
- Next.js 16+ recommends `proxy` for this use case
- But middleware still works, just shows a warning
- **Solution:** Suppress warning or migrate to proxy (if available in your version)

---

## VERIFICATION CHECKLIST

After applying fixes:

```bash
# 1. Build locally
npm run build

# 2. Check for build warnings
# Should NOT see deprecation warning about middleware

# 3. Test locally (if possible)
npm run dev
# Visit http://localhost:3000 and check middleware behavior

# 4. Push changes
git add middleware.ts next.config.ts
git commit -m "Fix demo.kisag.co routing - remove conflicting vercel.json, update middleware to proxy pattern"
git push origin main

# 5. Monitor Vercel deployment
# Go to Vercel dashboard and watch deployment logs
```

### What to Look For in Logs
✓ Successful build with no middleware warnings
✓ No rewrite/redirect conflicts
✓ Middleware shows as "Proxy (Middleware)" in output

### Test in Browser
1. Visit `https://demo.kisag.co/`
2. Should show `/dashboard` content
3. URL bar should show `https://demo.kisag.co/` (rewrite, not redirect)
4. Inspect Network tab - response should be 200 OK (not 307/308)

---

## ADVANCED TROUBLESHOOTING

### If Still Not Working - Enable Debug Logging
Add to middleware.ts:

```typescript
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  console.log(`[MIDDLEWARE] Host: ${hostname}, Path: ${pathname}`);

  if (hostname.includes('demo.kisag.co') && pathname === '/') {
    console.log('[MIDDLEWARE] Rewriting to /dashboard');
    return NextResponse.rewrite(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}
```

### Check Vercel Edge Function Logs
1. Go to Vercel Dashboard → Deployments → Latest Deployment → Logs
2. Look for middleware execution logs
3. Verify hostname matches correctly

### Check DNS Propagation
```bash
# Detailed DNS check
dig demo.kisag.co
dig demo.kisag.co +trace

# If using Vercel, should resolve to:
# cname.vercel-dns.com or similar
```

### Bypass CDN Cache Temporarily
For testing, add cache-busting query param:
```
https://demo.kisag.co/?bust=12345
```

---

## FILE CHANGES SUMMARY

| File | Action | Why |
|------|--------|-----|
| `vercel.json` | DELETE | Conflicts with middleware, causes ambiguity |
| `middleware.ts` | UPDATE | Use proxy pattern, explicit hostname matching |
| `next.config.ts` | UPDATE | Enable middleware prefetch, ensure it runs |
| `app/dashboard/page.tsx` | UPDATE | Add cache headers to force fresh responses |

---

## DEPLOYMENT CHECKLIST

```
[ ] Delete vercel.json
[ ] Update middleware.ts with proxy pattern
[ ] Add cache control headers to dashboard
[ ] Update next.config.ts
[ ] Test local build: npm run build
[ ] Verify no deprecation warnings
[ ] Commit all changes
[ ] Push to main branch
[ ] Wait for Vercel deployment (2-3 min)
[ ] Clear Vercel cache in dashboard (if needed)
[ ] Test demo.kisag.co in incognito/private mode
[ ] Verify DNS resolution
[ ] Check browser dev tools Network tab for response code
```

---

## EXPECTED OUTCOME

After applying these fixes:

1. ✓ demo.kisag.co/ → Shows /dashboard content (URL stays the same)
2. ✓ Response code: 200 OK (not 307/308)
3. ✓ Build warning about middleware gone
4. ✓ Consistent behavior across all requests
5. ✓ No CDN cache conflicts
6. ✓ Works in all browsers (even with cache)

---

## KEY LEARNING: Vercel Deployment Best Practices

When using Next.js with Vercel:

1. **Don't mix routing strategies** - Use either:
   - Middleware (for complex logic)
   - vercel.json (for simple redirects)
   - NOT both at same time

2. **Prefer middleware in Next.js 16+** - It's more powerful and runs closer to the request

3. **Always set cache headers** - Especially for dynamic content or rewrites

4. **Use rewrite not redirect** - Keeps URL clean, users don't see intermediate URLs

5. **Test with incognito** - Avoids browser cache hiding issues

6. **Monitor deprecation warnings** - Next.js warnings point to coming breaking changes
