# 🚀 Deploy Multi-Domain Setup to Vercel

## ✅ What's Been Fixed

Your middleware now uses **`NextResponse.rewrite()`** instead of redirect:
- `demo.kisag.co` → Shows `/dashboard` content at root URL
- `kisag.co` → Shows main marketing site
- URL stays clean: `demo.kisag.co` (not `demo.kisag.co/dashboard`)

## 📋 Deployment Checklist

### 1. Commit & Push Changes
```bash
git add .
git commit -m "Fix: Use rewrite instead of redirect for demo.kisag.co"
git push origin main
```

### 2. Configure Domains in Vercel

Go to your Vercel project → **Settings** → **Domains**

Add both domains:
1. **Main domain:** `kisag.co`
   - Type: Production
   - Auto-assigned on push

2. **Demo subdomain:** `demo.kisag.co`
   - Type: Production
   - Points to same deployment

### 3. DNS Configuration

In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

```dns
# Main domain
A     @              76.76.21.21
A     www            76.76.21.21

# Demo subdomain
CNAME demo           cname.vercel-dns.com
```

**OR** if you're using Cloudflare:
```dns
CNAME demo           your-project.vercel.app
```

### 4. Wait for DNS Propagation
- Usually takes 5-15 minutes
- Can take up to 48 hours in rare cases
- Check status: `dig demo.kisag.co`

### 5. Verify SSL Certificates

Vercel auto-provisions SSL. Check in dashboard:
- ✅ `kisag.co` - SSL Active
- ✅ `demo.kisag.co` - SSL Active

## 🧪 Testing

### Test Locally (Before Deploy)

1. **Edit `/etc/hosts`:**
```bash
sudo nano /etc/hosts
```

Add:
```
127.0.0.1 demo.kisag.localhost
127.0.0.1 kisag.localhost
```

2. **Run dev server:**
```bash
npm run dev
```

3. **Test URLs:**
- http://kisag.localhost:3000 → Main site
- http://demo.kisag.localhost:3000 → Dashboard

### Test Production (After Deploy)

```bash
# Check DNS
dig demo.kisag.co
nslookup demo.kisag.co

# Test endpoints
curl -I https://kisag.co
curl -I https://demo.kisag.co

# Check what middleware sees
curl -H "Host: demo.kisag.co" https://your-project.vercel.app
```

## 🔍 Debugging

### Issue: "demo.kisag.co still redirects"

**Solution:** Clear browser cache or test in incognito
```bash
# Chrome
Cmd+Shift+Delete → Clear cached images

# Or test with curl
curl -L https://demo.kisag.co
```

### Issue: "404 on demo.kisag.co"

**Check:**
1. Is domain added in Vercel? ✓
2. Is DNS pointing to Vercel? ✓
3. Did you deploy latest code? ✓

```bash
# Force new deployment
git commit --allow-empty -m "Trigger deploy"
git push
```

### Issue: "Works locally, not in production"

**Check middleware logs in Vercel:**
1. Go to Vercel Dashboard
2. Click on your project
3. Go to **Deployments** → Click latest
4. Click **Functions** tab
5. Look for middleware logs

**Add debug logging:**
```typescript
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  console.log('🔍 Middleware:', { hostname, pathname: request.nextUrl.pathname });
  // ... rest of code
}
```

### Issue: "Infinite redirect loop"

This happens if you use `redirect()` instead of `rewrite()`.

**Fix:** Make sure you're using:
```typescript
return NextResponse.rewrite(url);  // ✅ Correct
// NOT
return NextResponse.redirect(url); // ❌ Wrong
```

## 📊 Expected Results

After deployment:

| URL | Shows | URL Bar Displays |
|-----|-------|------------------|
| `kisag.co` | Marketing site | `kisag.co` |
| `kisag.co/dashboard` | Dashboard | `kisag.co/dashboard` |
| `demo.kisag.co` | Dashboard | `demo.kisag.co` |
| `demo.kisag.co/dashboard` | Dashboard | `demo.kisag.co/dashboard` |

## 🎯 Current Files

### `/middleware.ts`
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  const isDemo = hostname.includes('demo.kisag.co') || hostname.startsWith('demo.');

  if (isDemo && pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
```

### `/vercel.json`
```json
{
  "cleanUrls": true
}
```

## 🆘 Still Not Working?

1. **Check Vercel deployment logs**
   - Look for middleware errors
   - Verify both domains are in "Domains" section

2. **Test with Vercel preview URL**
   ```bash
   curl -H "Host: demo.kisag.co" https://your-project-abc123.vercel.app
   ```

3. **Contact Vercel support**
   - They can check DNS propagation
   - Verify SSL certificate provisioning

## ✅ Success Indicators

You'll know it's working when:
- ✅ `demo.kisag.co` shows dashboard at root
- ✅ URL bar stays `demo.kisag.co` (no `/dashboard` in URL)
- ✅ `kisag.co` shows main site
- ✅ Both have valid SSL (🔒 in browser)
- ✅ No console errors

## 📚 Resources

- [Next.js Middleware Docs](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Vercel Multi-Domain Setup](https://vercel.com/docs/concepts/projects/domains)
- [DNS Propagation Checker](https://www.whatsmydns.net/)

---

**Last Updated:** November 20, 2025
**Status:** ✅ Ready to deploy
