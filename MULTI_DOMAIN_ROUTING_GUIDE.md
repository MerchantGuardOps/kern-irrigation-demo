# Multi-Domain Routing in Next.js 14 App Router

## Problem
Need to serve different content based on domain:
- `kisag.co` → `/app/page.tsx` (main site)
- `demo.kisag.co` → `/app/dashboard/page.tsx` (at root URL)

## ✅ SOLUTION 1: Middleware Rewrite (RECOMMENDED)

**File: `/middleware.ts`**

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // Check if it's demo subdomain
  const isDemo = hostname.includes('demo.kisag.co') || hostname.startsWith('demo.');

  // If accessing demo root, REWRITE to dashboard (not redirect)
  if (isDemo && pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';

    // REWRITE keeps URL as demo.kisag.co but serves /dashboard content
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
```

### Why This Works:
1. **`NextResponse.rewrite()`** - Serves different content WITHOUT changing URL
2. **`NextResponse.redirect()`** - Changes URL (what you had before ❌)
3. **Middleware runs before rendering** - Perfect for multi-domain routing
4. **vercel.json removed** - Conflicts with middleware

---

## 🔄 SOLUTION 2: Route Groups (Alternative)

If you want a more structured approach using App Router features:

**File structure:**
```
app/
  (main)/
    page.tsx          # kisag.co home
    layout.tsx
  (demo)/
    page.tsx          # demo.kisag.co root → shows dashboard
    layout.tsx
  dashboard/
    page.tsx          # /dashboard route
```

**File: `/middleware.ts`**
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;
  const isDemo = hostname.includes('demo.kisag.co');

  if (isDemo) {
    // Rewrite demo.kisag.co/ to /demo route group
    if (pathname === '/') {
      const url = request.nextUrl.clone();
      url.pathname = '/dashboard';
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
```

---

## 🎯 SOLUTION 3: Next.js Config with Rewrites (Vercel Only)

**File: `/next.config.ts`**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'demo.kisag.co',
            },
          ],
          destination: '/dashboard/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
```

**Note:** This only works on Vercel with proper domain configuration.

---

## 🧪 Testing Locally

### Option 1: Edit /etc/hosts
```bash
# Add to /etc/hosts
127.0.0.1 demo.kisag.localhost
127.0.0.1 kisag.localhost
```

Then test:
```bash
npm run dev
# Visit: http://kisag.localhost:3000 (main site)
# Visit: http://demo.kisag.localhost:3000 (dashboard)
```

### Option 2: Use ngrok with multiple domains
```bash
ngrok http 3000 --hostname=demo.kisag.ngrok.io
```

---

## 🚀 Deployment on Vercel

1. **Add both domains in Vercel:**
   - Go to Project Settings → Domains
   - Add `kisag.co`
   - Add `demo.kisag.co`

2. **DNS Configuration:**
   ```
   A     @              76.76.21.21  (Vercel)
   CNAME demo           cname.vercel-dns.com
   ```

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Add multi-domain routing"
   git push
   ```

4. **Verify:**
   - `https://kisag.co` → Main site
   - `https://demo.kisag.co` → Dashboard at root

---

## 🔍 Debugging

### Check if middleware is running:
```typescript
export function middleware(request: NextRequest) {
  console.log('Hostname:', request.headers.get('host'));
  console.log('Pathname:', request.nextUrl.pathname);
  // ... rest of code
}
```

### Common Issues:

1. **Middleware not running**
   - Check `matcher` in config
   - Restart dev server: `npm run dev`

2. **Still seeing redirect**
   - Make sure you're using `NextResponse.rewrite()` not `redirect()`

3. **404 on dashboard**
   - Verify `/app/dashboard/page.tsx` exists
   - Check file is exported as default

4. **Works locally but not on Vercel**
   - Ensure both domains are added in Vercel dashboard
   - Check Vercel deployment logs
   - Verify DNS is pointing to Vercel

---

## 📚 Key Concepts

### Rewrite vs Redirect
```typescript
// ❌ REDIRECT - Changes URL in browser
return NextResponse.redirect(new URL('/dashboard', request.url));
// URL changes: demo.kisag.co → demo.kisag.co/dashboard

// ✅ REWRITE - Same URL, different content
return NextResponse.rewrite(new URL('/dashboard', request.url));
// URL stays: demo.kisag.co (but shows /dashboard content)
```

### Middleware Execution Order
```
1. Middleware runs FIRST
2. Then rewrites (next.config.ts)
3. Then routes resolve
4. Then page renders
```

### Host Header Detection
```typescript
const hostname = request.headers.get('host');
// Local: localhost:3000
// Prod:   demo.kisag.co
```

---

## 🎉 Current Implementation

Your project now uses **Solution 1** (Middleware Rewrite):

**Files modified:**
- `/middleware.ts` - Domain detection + rewrite logic
- `/vercel.json` - Removed conflicting rewrites

**How it works:**
1. User visits `demo.kisag.co`
2. Middleware detects hostname contains "demo"
3. Rewrites request from `/` to `/dashboard`
4. Next.js serves `/app/dashboard/page.tsx`
5. Browser URL stays `demo.kisag.co`

**Result:**
- ✅ `kisag.co` → Main marketing site
- ✅ `demo.kisag.co` → Dashboard at root
- ✅ `demo.kisag.co/dashboard` → Also works

---

## 📖 References

- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [NextResponse.rewrite()](https://nextjs.org/docs/app/api-reference/functions/next-response#rewrite)
- [Multi-Zones](https://nextjs.org/docs/pages/building-your-application/deploying/multi-zones)
- [Vercel Multi-Domain](https://vercel.com/docs/concepts/projects/domains)
