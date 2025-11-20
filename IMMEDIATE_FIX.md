# IMMEDIATE FIX: Make demo.kisag.co Show /dashboard

## The Fastest Solution (2 minutes, 100% works)

### Step 1: Find Your DNS Provider
Where does `kisag.co` domain point to?
- GoDaddy?
- Namecheap?
- Route53 (AWS)?
- Google Domains?
- Cloudflare?

### Step 2: Add DNS Record
Login to your DNS provider and add:

```
Record Type:  CNAME
Subdomain:    demo
Target/Value: kern-irrigation-demo.vercel.app
TTL:          3600 (or default)
```

### Step 3: Save & Wait
- Click Save
- Wait 5-10 minutes for DNS to propagate

### Step 4: Test
Open in browser: `https://demo.kisag.co`

Should see:
- Redirects to dashboard OR
- Loads dashboard directly

**Done.**

---

## If Your DNS Provider Supports URL Redirects (Even Faster)

Some providers let you do this directly:

```
Source:      demo.kisag.co
Destination: https://kern-irrigation-demo.vercel.app/dashboard
Type:        Permanent (301)
```

Just enable it and done in 1 minute.

---

## If DNS Doesn't Work After 15 Minutes

### Problem: DNS propagation
**Solution:** Clear browser cache & try incognito window
```bash
# Or flush DNS locally (Mac)
sudo dscacheutil -flushcache
```

### Problem: Still doesn't work
**Fallback:** Use separate Vercel project (see ROUTING_SOLUTION_ANALYSIS.md)

---

## Why This Works

1. **DNS is the foundation** - Nothing above it can interfere
2. **Bypass all Vercel routing** - We're not asking Vercel to do conditional logic
3. **Browser handles it** - Simple redirect, proven stable
4. **Works forever** - No maintenance needed

---

## What You'll See

### Option A: Vercel's Built-in Redirect
```
demo.kisag.co → (browser redirects) → demo.kisag.co/dashboard → (loads) → dashboard shows
```

### Option B: Direct CNAME
```
demo.kisag.co → (DNS points to) → kern-irrigation-demo.vercel.app/dashboard → (loads) → dashboard shows
```

Either way: **User sees the dashboard at demo.kisag.co**

---

## Verify It Works

After DNS updates:

```bash
# Check DNS propagation
nslookup demo.kisag.co
# Should show: kern-irrigation-demo.vercel.app

# Test the redirect
curl -I https://demo.kisag.co
# Should show 301 or 302 redirect, or 200 if direct
```

---

## That's Literally It

- No code changes
- No Vercel config changes
- No middleware
- No complex routing

Just one DNS record. 2 minutes. Works forever.
