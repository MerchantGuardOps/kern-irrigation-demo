# Vercel + Next.js Routing: Best Practices & Common Pitfalls

## Why demo.kisag.co Wasn't Working - The Technical Story

### The Problem Architecture

Your original setup had **two competing routing mechanisms** trying to handle the same request:

```
Browser Request: demo.kisag.co/
       ↓
[Vercel Edge] vercel.json rewrites configured
       ↓
[Next.js Edge] middleware.ts also configured
       ↓
[Vercel Edge] CDN caches response
       ↓
[Browser] Receives cached wrong content
```

When multiple layers try to handle routing, the order matters:
1. Vercel rewrites/redirects (fastest, at edge)
2. Next.js middleware (edge runtime)
3. Next.js handlers/routes (server)
4. CDN caching (applies on ANY response)

**The bug:** If Vercel's rewrite triggers, but middleware also runs, both try to handle the routing. If CDN caches the intermediate response before middleware resolves it, subsequent requests get stale content.

---

## The Complete Solution Explained

### Part 1: Clean Middleware (Already in Place)

**File:** `/Users/soccer/Desktop/kern-irrigation-demo/middleware.ts`

```typescript
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  const isDemo = hostname.includes('demo.kisag.co') || hostname.startsWith('demo.');

  // REWRITE not REDIRECT - crucial difference
  if (isDemo && pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.rewrite(url);  // ← Not redirect()
  }

  return NextResponse.next();
}
```

**Why rewrite, not redirect:**
- **Redirect** (307/308): Browser sees the redirect, makes new request to /dashboard, user sees URL change
  - Pros: Simple, cacheable, works immediately
  - Cons: Browser history changes, visible to user, extra roundtrip
- **Rewrite**: Serves /dashboard content but URL stays demo.kisag.co
  - Pros: Clean URL, transparent to user, single roundtrip
  - Cons: Requires server to track rewrite (potential cache issues)

**Why this specific hostname check:**
```typescript
if (hostname.includes('demo.kisag.co') || hostname.startsWith('demo.'))
```
- Handles: demo.kisag.co, www.demo.kisag.co, etc.
- Avoids: matches requests to main domain or other subdomains

---

### Part 2: Dashboard Cache Control (NEW)

**File:** `/Users/soccer/Desktop/kern-irrigation-demo/app/dashboard/layout.tsx`

```typescript
export const dynamic = 'force-dynamic';
export const revalidate = 0;
```

**What these do:**

| Setting | Default | Our Value | Meaning |
|---------|---------|-----------|---------|
| `dynamic` | 'auto' | 'force-dynamic' | Never use static generation, always compute fresh |
| `revalidate` | (varies) | 0 | Revalidate every 0 seconds (always fresh, no stale-while-revalidate) |

**Why this matters:**
- Prevents Next.js from pre-rendering /dashboard as static
- Ensures every request to demo.kisag.co triggers fresh computation
- Bypasses ISR (Incremental Static Regeneration) which can cause stale content

**The problem it solves:**
Without these settings, Vercel might:
1. Build /dashboard as static HTML
2. Cache it at edge
3. Serve same cached version to all requests
4. If middleware fails or caching applies wrong condition, old content persists

---

### Part 3: Next.js Configuration (UPDATED)

**File:** `/Users/soccer/Desktop/kern-irrigation-demo/next.config.ts`

```typescript
const nextConfig: NextConfig = {
  experimental: {
    proxyPrefetch: 'flexible',
  },
};
```

**What proxyPrefetch does:**
- "flexible" = Middleware runs on demand, not precomputed
- Ensures middleware execution is synchronous with request
- Prevents race conditions between middleware and edge caching

**The old setting:**
- `middlewarePrefetch: 'flexible'` (deprecated)
- Same concept, different API
- Will be removed in Next.js 17+

---

## Comparison: Before vs After

### BEFORE (Broken)

```
Request to demo.kisag.co/
    ↓
vercel.json has rewrite rule
    ↓
Next.js middleware.ts also detects demo.kisag.co
    ↓ RACE CONDITION
Both try to handle routing simultaneously
    ↓
One wins (unpredictable)
    ↓
CDN caches response
    ↓
Subsequent requests get cached version
    ↓
If cache was wrong, you're stuck until TTL expires
```

### AFTER (Working)

```
Request to demo.kisag.co/
    ↓
middleware.ts (single source of truth)
    ↓
Detects demo.kisag.co, rewrites to /dashboard
    ↓
Next.js router serves /dashboard
    ↓
dashboard/layout.tsx enforces fresh content (force-dynamic)
    ↓
Response sent to CDN
    ↓
Next request: Same process (no stale cache)
    ↓
Reliable, predictable behavior
```

---

## Vercel's Request Processing Order

Understanding this prevents future bugs:

```
1. DNS Resolution (external)
2. ├─ Should resolve to Vercel's servers
3. │
4. Vercel Edge Network (geographical routing)
5. ├─ Picks nearest Vercel edge location
6. │
7. VERCEL.JSON PROCESSING ← Applied first
8. ├─ rewrites, redirects, middleware config
9. │
10. NEXT.JS MIDDLEWARE ← Applied second
11. ├─ middleware.ts execution
12. ├─ Can see results of vercel.json
13. │
14. NEXT.JS ROUTE HANDLERS ← Applied third
15. ├─ API routes, server components
16. │
17. Vercel Cache Layer ← Applied to response
18. ├─ Caches based on route and headers
19. │
20. CDN Response
21. └─ Sent to browser
```

**Key point:** Each layer sees output of previous layer. If previous layer already handled routing, this layer must respect it.

---

## Common Mistakes That Cause This Issue

### Mistake 1: Using BOTH vercel.json and middleware

```json
{
  "rewrites": [
    { "source": "/", "destination": "/dashboard" }
  ]
}
```

AND

```typescript
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/dashboard', request.url));
  }
}
```

**Problem:** Ambiguous. Which one takes precedence? Browser gets unpredictable behavior.

**Solution:** Pick ONE approach:
- Simple cases: Use vercel.json
- Complex cases: Use middleware

---

### Mistake 2: Using Redirect Without Understanding Cache

```typescript
return NextResponse.redirect(new URL('/dashboard', request.url));
```

**What happens:**
1. First request: 307 Redirect to /dashboard → 200 OK
2. CDN caches the 307 response
3. All subsequent requests: 307 again
4. Every user sees redirect, inefficient

**Better:**
```typescript
return NextResponse.rewrite(new URL('/dashboard', request.url));
```

Now CDN caches the already-rewritten content. Faster.

---

### Mistake 3: Not Setting Cache Headers on Dynamic Content

Without `export const dynamic = 'force-dynamic'`:

```
Request 1: /dashboard built as static, cached
Request 2: Served from cache
Request 3: Served from cache
(User sees stale content)
```

With `export const dynamic = 'force-dynamic'`:

```
Request 1: /dashboard computed fresh, cached short-term
Request 2: Computed fresh
Request 3: Computed fresh
(User always sees latest)
```

---

### Mistake 4: Forgetting About Middleware.ts Runtime Constraints

Middleware runs in **Edge Runtime**, not Node.js:

```typescript
// ✓ Works in middleware
const hostname = request.headers.get('host');

// ✗ Doesn't work in middleware (Node.js only)
const ip = require('ip').address();  // NOT available

// ✗ Doesn't work in middleware (too slow for edge)
const result = await fetch('http://slow-database.com');
```

**Best practice:**
- Keep middleware logic simple and fast
- No complex async operations
- No File system access
- No Node.js-only modules

---

## How to Debug Routing Issues

### Debug 1: Check What Middleware Sees

Add logging (temporary):

```typescript
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  console.log(`[MW] Host: ${hostname}, Path: ${pathname}`);  // ← Add this

  if (hostname.includes('demo.kisag.co') && pathname === '/') {
    console.log('[MW] Rewriting to /dashboard');  // ← And this
    return NextResponse.rewrite(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}
```

Then check Vercel Logs for console.log output.

### Debug 2: Check Response Headers

```bash
curl -i -H "Host: demo.kisag.co" https://your-vercel-domain.vercel.app/
```

Look for:
```
HTTP/2 200           ← Status code
cache-control: ...   ← Cache policy
x-middleware-rewrite ← Vercel header showing middleware ran
```

### Debug 3: Check Actual Served Content

```bash
curl -s -H "Host: demo.kisag.co" https://your-vercel-domain.vercel.app/ | head -50
```

Should show /dashboard HTML, not main site HTML.

### Debug 4: Test in Different Ways

```bash
# Test 1: Via CLI (no browser cache)
curl https://demo.kisag.co/

# Test 2: Via browser (with DevTools)
# Open https://demo.kisag.co in Chrome, check Network tab

# Test 3: In incognito mode (bypasses browser cache)
# Ctrl+Shift+N, then visit demo.kisag.co

# Test 4: Different browser completely
# Edge, Firefox, Safari, etc.

# Test 5: After clearing all caches
# Browser cache + Vercel cache + CloudFlare cache (if used)
```

If Test 1 works but Test 2 doesn't → Browser cache issue
If Test 1 fails → Configuration issue or DNS issue

---

## Performance Implications

### Impact of Using Rewrite vs Redirect

**Redirect approach:**
```
User → demo.kisag.co/ [307 Redirect to /dashboard] → User's browser makes new request → /dashboard [200]
Network requests: 2
Perceived latency: Higher (user sees redirect)
Cache efficiency: Lower (307 responses cached)
```

**Rewrite approach (our choice):**
```
User → demo.kisag.co/ [200 OK with /dashboard content] → Done
Network requests: 1
Perceived latency: Lower
Cache efficiency: Higher
```

**Performance win:** ~50ms faster per request (no redirect roundtrip)

### Impact of Force-Dynamic

**Without force-dynamic:**
```
Build time: /dashboard pre-rendered to static HTML
Deployment: Large HTML file pushed to CDN
Request time: Instant (just serve static file)
Stale content: Possible between deploys
```

**With force-dynamic:**
```
Build time: /dashboard kept dynamic
Deployment: Smaller, no pre-render
Request time: ~10-50ms (render on demand)
Stale content: Never (always fresh)
Tradeoff: Slightly higher latency for freshness
```

For an **admin dashboard**, fresh is more important than fast.

---

## Production Checklist

When deploying subdomain routing:

- [ ] Middleware is the only routing mechanism
- [ ] vercel.json has no conflicting rewrites/redirects
- [ ] Dynamic routes have `export const dynamic = 'force-dynamic'`
- [ ] Cache headers are explicit for your use case
- [ ] DNS points to correct Vercel deployment
- [ ] Tested in incognito window (browser cache bypass)
- [ ] Tested with curl (no cache involved)
- [ ] Verified different subdomains don't interfere
- [ ] Checked Vercel logs for errors
- [ ] Confirmed middleware runs (look for headers like x-middleware-rewrite)

---

## References

- [Vercel Rewrites & Redirects](https://vercel.com/docs/edge-network/rewrites-and-redirects)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Next.js Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/dynamic-rendering)
- [HTTP Caching Headers](https://web.dev/http-cache/)
