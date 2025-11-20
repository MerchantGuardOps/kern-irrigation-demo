# Quick Fix Steps for demo.kisag.co Not Working

## Status Check
- Middleware: ✓ Already updated to use rewrite instead of redirect
- vercel.json: ✓ Already clean (just has cleanUrls: true)
- next.config.ts: ✓ Updated with proxyPrefetch experimental flag
- Dashboard Layout: ✓ Created with force-dynamic and revalidate: 0

---

## Deployment Steps (Do These NOW)

### Step 1: Commit the Changes
```bash
cd /Users/soccer/Desktop/kern-irrigation-demo

git add next.config.ts app/dashboard/layout.tsx

git commit -m "Fix demo.kisag.co caching and routing - add dynamic dashboard layout and proxy prefetch config

- Add app/dashboard/layout.tsx with force-dynamic and revalidate: 0 to prevent CDN caching
- Update next.config.ts to use proxyPrefetch instead of deprecated middlewarePrefetch
- Ensures demo.kisag.co always serves fresh /dashboard content
- Middleware already configured correctly to rewrite (not redirect) requests"
```

### Step 2: Push to Trigger Vercel Deployment
```bash
git push origin main
```

### Step 3: Monitor Vercel Deployment
1. Go to https://vercel.com/dashboard
2. Select "kern-irrigation-demo" project
3. Watch the deployment logs in real-time
4. Deployment should complete in 1-3 minutes

**Look for these in the logs:**
```
✓ Build completed successfully
✓ Deployment created and assigned to demo.kisag.co
ƒ Proxy (Middleware)  # Shows middleware is running
```

**DO NOT look for:**
```
✗ Build failed
ERROR: Rewrite or redirect failed
⚠ The "middleware" file convention is deprecated (this is just a warning, not critical)
```

---

## Testing After Deployment (Verify It Works)

### Test 1: DNS Resolution
```bash
# Verify demo.kisag.co resolves to Vercel
nslookup demo.kisag.co

# Expected: Should show Vercel's servers
# If it doesn't resolve, DNS setup is the issue (contact domain provider)
```

### Test 2: Browser Test (Important!)
**OPEN INCOGNITO/PRIVATE MODE** - This bypasses browser cache:

1. Visit: https://demo.kisag.co/
2. Check what happens:
   - ✓ CORRECT: Shows dashboard content, URL stays as demo.kisag.co
   - ✗ WRONG: Shows main site, or redirects to different URL
   - ✗ WRONG: 404 or error page

3. Check browser Developer Tools (F12):
   - Open Network tab
   - Reload page
   - Find request to demo.kisag.co
   - Check Response Status: Should be **200 OK** (not 307/308)
   - Check Response Headers: Should have cache-control headers

### Test 3: Direct API Check
```bash
# Make direct request to demo.kisag.co
curl -i -H "Host: demo.kisag.co" https://demo.kisag.co/

# Should show:
# HTTP/2 200
# Content-Type: text/html
# (not 307 or 308 redirects)
```

### Test 4: Check Middleware is Running
Visit the main domain (not demo): https://kisag.co or your main domain
- Should show main site normally
- Confirms middleware doesn't interfere with main domain

---

## If Still Not Working - Troubleshooting

### Issue: Still shows main site on demo.kisag.co

**Check 1: DNS Not Pointed Correctly**
```bash
dig demo.kisag.co
# Should show CNAME pointing to Vercel (like cname.vercel-dns.com)
# If it doesn't, update DNS in your domain provider settings
```

**Check 2: Vercel Cache Not Cleared**
- Go to Vercel Dashboard
- Select project
- Go to Settings → Git Integration → Deployments
- Find latest deployment
- Click "Redeploy" button
- Wait for new deployment to finish

**Check 3: Browser Cache**
- Clear browser cache completely
- Or test in completely different browser
- Or test with curl (doesn't use browser cache):
```bash
curl -H "Host: demo.kisag.co" https://your-vercel-domain/
```

**Check 4: Middleware Not Triggering**
- Go to Vercel Logs
- Check if middleware is being invoked
- Look for console.log output if you added debug logging
- Verify hostname matches exactly in middleware

### Issue: Getting 404 on demo.kisag.co

**Possible causes:**
1. Dashboard page doesn't exist (shouldn't be the case)
2. Middleware is broken (would show error, not 404)
3. Vercel deployment failed

**Fix:**
- Check Vercel deployment logs for errors
- Verify app/dashboard/page.tsx exists
- Rebuild locally: `npm run build`

### Issue: Seeing redirect loop (keeps redirecting)

**This means:**
- Middleware is routing to /dashboard
- But then something is redirecting away from /dashboard
- Usually means main site has a catch-all redirect

**Fix:**
- Check app/page.tsx for redirects
- Check root middleware configuration
- Ensure middleware matcher isn't too broad

---

## Files Changed and Why

| File | Change | Impact |
|------|--------|--------|
| `next.config.ts` | Added proxyPrefetch config | Ensures middleware runs reliably |
| `app/dashboard/layout.tsx` | NEW file with force-dynamic | Prevents CDN caching of wrong content |
| `middleware.ts` | Already using rewrite | Serves dashboard without redirect |
| `vercel.json` | Already clean | No routing conflicts |

---

## Vercel Cache Clearing (If Needed)

If demo.kisag.co still shows old content after deployment:

**Option A: Via Dashboard**
1. Go to https://vercel.com/dashboard
2. Select kern-irrigation-demo project
3. Settings → Deployments
4. Find latest deployment
5. Click "..." menu → Redeploy

**Option B: Via Vercel CLI**
```bash
vercel --prod --force
```

**Option C: Via manual purge**
1. Settings → Caching
2. Click "Clear Cache"
3. Wait 30 seconds

**Option D: Force deployment rebuild**
```bash
git commit --allow-empty -m "Force Vercel rebuild - clear cache"
git push origin main
```

---

## Expected Timeline

1. Push changes: Done immediately
2. Vercel receives webhook: 10-30 seconds
3. Vercel builds project: 1-2 minutes
4. Deployment goes live: Another 30 seconds
5. CDN caches response: 1-5 minutes
6. Visible in all regions: 5-10 minutes

**Total: 10-15 minutes maximum**

---

## Verification Checklist After Fix

- [ ] Changes committed and pushed to main
- [ ] Vercel shows "Deployment successful" (green checkmark)
- [ ] Visit demo.kisag.co in incognito window
- [ ] See dashboard content (not main site)
- [ ] Browser DevTools shows 200 OK response
- [ ] URL stays as demo.kisag.co (not redirected)
- [ ] Main domain still works normally
- [ ] Can visit demo.kisag.co multiple times (not cached incorrectly)

---

## Why This Works

The fix addresses all three root causes:

1. **Middleware correctly configured**
   - Uses rewrite (not redirect)
   - Keeps URL clean in browser
   - Prevents redirect loops

2. **Dashboard always fresh**
   - force-dynamic ensures no static generation
   - revalidate: 0 prevents any caching
   - Every request gets live content

3. **No routing conflicts**
   - Only middleware handling demo routing
   - vercel.json is clean (just cleanUrls)
   - No ambiguous configuration

---

## When to Worry

These are normal:
- ✓ Build warning about middleware being deprecated (it still works)
- ✓ First request takes slightly longer (middleware setup)
- ✓ High cache-control headers on dashboard (that's what we want)

These mean something is wrong:
- ✗ Deployment shows red "X" in Vercel
- ✗ Build error in Vercel logs
- ✗ Getting 500 errors on demo.kisag.co
- ✗ Getting infinite redirect loops

---

## Quick Support

If something isn't working after following these steps:

1. **Check Vercel Logs**
   - Click latest deployment in Vercel
   - Scroll to "Build Logs"
   - Look for error messages

2. **Test with curl**
   ```bash
   curl -v -H "Host: demo.kisag.co" https://[YOUR_VERCEL_URL]/
   ```

3. **Check DNS**
   ```bash
   dig demo.kisag.co +short
   ```

4. **Clear everything**
   - Vercel cache (via dashboard)
   - Browser cache (Ctrl+Shift+Del)
   - Test in new incognito window
   - Try different browser
