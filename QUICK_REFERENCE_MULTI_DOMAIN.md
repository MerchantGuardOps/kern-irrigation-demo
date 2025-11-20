# 🚀 Multi-Domain Routing - Quick Reference

## The Problem You Had

```typescript
// ❌ WRONG - This redirects (changes URL)
return NextResponse.redirect(new URL('/dashboard', request.url));
// Result: demo.kisag.co → demo.kisag.co/dashboard (URL changes)
```

## The Solution

```typescript
// ✅ CORRECT - This rewrites (keeps URL same)
return NextResponse.rewrite(new URL('/dashboard', request.url));
// Result: demo.kisag.co → shows /dashboard content, URL stays demo.kisag.co
```

---

## Key Concepts

### 🔄 Rewrite vs Redirect

| Method | URL Changes? | Use Case |
|--------|--------------|----------|
| `rewrite()` | ❌ No | Serve different content at same URL |
| `redirect()` | ✅ Yes | Send user to different URL |

### Example:
```typescript
// User visits: demo.kisag.co

// With redirect():
// Browser shows: demo.kisag.co/dashboard ❌

// With rewrite():
// Browser shows: demo.kisag.co ✅
// Content shown: /dashboard page
```

---

## Your Working Middleware

**File: `/Users/soccer/Desktop/kern-irrigation-demo/middleware.ts`**

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // Detect demo subdomain
  const isDemo = hostname.includes('demo.kisag.co') || hostname.startsWith('demo.');

  // Serve dashboard at root for demo subdomain
  if (isDemo && pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.rewrite(url); // ← KEY: rewrite, not redirect
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|css|js)).*)',
  ],
};
```

---

## How It Works

```
1. User types: demo.kisag.co
                ↓
2. Middleware checks hostname
                ↓
3. Detects "demo" in hostname
                ↓
4. Rewrites / → /dashboard
                ↓
5. Serves /app/dashboard/page.tsx
                ↓
6. Browser URL stays: demo.kisag.co ✅
```

---

## Testing Commands

### Local Testing
```bash
# 1. Add to /etc/hosts
sudo nano /etc/hosts
# Add: 127.0.0.1 demo.kisag.localhost

# 2. Run dev server
npm run dev

# 3. Test
open http://demo.kisag.localhost:3000
```

### Production Testing
```bash
# Check if middleware is deployed
curl -I https://demo.kisag.co

# Check what content is served
curl https://demo.kisag.co | grep -i "dashboard"

# Test with host header
curl -H "Host: demo.kisag.co" https://your-project.vercel.app
```

---

## Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| URL changes to `/dashboard` | Using `redirect()` | Use `rewrite()` instead |
| 404 on demo.kisag.co | Domain not configured | Add domain in Vercel |
| Works locally, not prod | Middleware not deployed | Rebuild and redeploy |
| Infinite loop | Bad matcher config | Use provided matcher regex |

---

## File Structure

```
/Users/soccer/Desktop/kern-irrigation-demo/
├── middleware.ts          ← Domain routing logic
├── vercel.json           ← Vercel config (minimal)
├── app/
│   ├── page.tsx          ← Main site (kisag.co)
│   └── dashboard/
│       └── page.tsx      ← Dashboard (demo.kisag.co)
```

---

## Deployment Steps

```bash
# 1. Commit changes
git add .
git commit -m "Fix: Use rewrite for multi-domain routing"
git push

# 2. Add domains in Vercel dashboard
# - kisag.co
# - demo.kisag.co

# 3. Configure DNS
# CNAME demo → cname.vercel-dns.com

# 4. Wait 5-15 minutes for DNS propagation

# 5. Test
curl https://demo.kisag.co
```

---

## Expected Behavior

| URL | Content Shown | URL Bar Displays |
|-----|---------------|------------------|
| `kisag.co` | Marketing site | `kisag.co` |
| `demo.kisag.co` | Dashboard | `demo.kisag.co` ✅ |
| `demo.kisag.co/dashboard` | Dashboard | `demo.kisag.co/dashboard` |

---

## Alternative Approaches

### 1. Route Groups (More Complex)
```
app/
  (main)/page.tsx
  (demo)/page.tsx
```

### 2. Next.js Config Rewrites (Vercel Only)
```typescript
// next.config.ts
async rewrites() {
  return {
    beforeFiles: [
      {
        source: '/',
        has: [{ type: 'host', value: 'demo.kisag.co' }],
        destination: '/dashboard',
      },
    ],
  };
}
```

**Recommendation:** Stick with middleware (current solution) ✅

---

## Debug Mode

Add logging to middleware:

```typescript
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  console.log('🔍 Middleware Debug:', {
    hostname,
    pathname,
    isDemo: hostname.includes('demo'),
  });

  // ... rest of code
}
```

Check logs in Vercel → Deployments → Functions tab

---

## Resources

- **Next.js 14 Middleware:** https://nextjs.org/docs/app/building-your-application/routing/middleware
- **NextResponse.rewrite:** https://nextjs.org/docs/app/api-reference/functions/next-response#rewrite
- **Vercel Multi-Domain:** https://vercel.com/docs/concepts/projects/domains

---

## Summary

✅ **What Changed:**
- `NextResponse.redirect()` → `NextResponse.rewrite()`
- Removed conflicting vercel.json rewrites
- Updated middleware matcher for better performance

✅ **Result:**
- `demo.kisag.co` serves dashboard at root
- URL stays clean (no `/dashboard` in address bar)
- Both domains work independently

✅ **Status:** Ready to deploy 🚀
