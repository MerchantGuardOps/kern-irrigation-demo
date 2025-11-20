# DNS Setup Instructions by Provider

## How to Find Your Provider

1. Where is `kisag.co` registered?
   - Try: https://whois.com
   - Search: `kisag.co`
   - Look for "Registrar"

2. Go to that registrar's control panel

---

## PROVIDER 1: Namecheap (Most Common)

### Steps:
1. Login to https://www.namecheap.com
2. Dashboard → Domains → kisag.co → Manage
3. Advanced DNS tab
4. Find "Add New Record"
5. Fill in:
   - Type: CNAME Record
   - Host: `demo`
   - Value: `kern-irrigation-demo.vercel.app`
   - TTL: 3600 (or default)
6. Click Green Checkmark ✓
7. Wait 5-10 minutes

### Visual:
```
Type:     [ CNAME Record ▼ ]
Host:     [ demo ]
Value:    [ kern-irrigation-demo.vercel.app ]
TTL:      [ 3600 ]
         [ Save ✓ ]
```

---

## PROVIDER 2: GoDaddy

### Steps:
1. Login to https://www.godaddy.com
2. My Products → Domains
3. Find kisag.co → Manage DNS
4. Records tab
5. Click "Add"
6. Fill in:
   - Type: CNAME
   - Name: `demo`
   - Data: `kern-irrigation-demo.vercel.app`
7. Click Save
8. Wait 5-10 minutes

---

## PROVIDER 3: AWS Route53

### Steps:
1. Login to AWS Console
2. Route53 → Hosted Zones
3. Find kisag.co
4. Click "Create record"
5. Fill in:
   - Name: `demo.kisag.co`
   - Type: CNAME
   - Value: `kern-irrigation-demo.vercel.app`
   - TTL: 300
6. Click Create records
7. Wait 2-5 minutes (AWS is faster)

---

## PROVIDER 4: Cloudflare

### Steps:
1. Login to https://dash.cloudflare.com
2. Select kisag.co domain
3. DNS Management → Records
4. Click "Add record"
5. Fill in:
   - Type: CNAME
   - Name: `demo`
   - Target: `kern-irrigation-demo.vercel.app`
   - TTL: Auto (or 3600)
   - Proxy status: DNS only (gray cloud, not orange)
6. Click Save
7. Wait 1-3 minutes (Cloudflare is very fast)

### Important:
⚠️ Make sure "Proxy status" is "DNS only" (gray cloud)
- If it's orange (proxied), Cloudflare might interfere

---

## PROVIDER 5: Google Domains

### Steps:
1. Login to https://domains.google.com
2. Select kisag.co
3. DNS tab
4. Custom records section → Add
5. Fill in:
   - Type: CNAME
   - Name: `demo`
   - TTL: 3600
   - Data: `kern-irrigation-demo.vercel.app`
6. Click Create
7. Wait 5-10 minutes

---

## PROVIDER 6: BlueHost / EasyWP

### Steps:
1. Login to cPanel
2. Zone Editor (or DNS Zone Manager)
3. Find kisag.co
4. Add DNS Record
5. Fill in:
   - Type: CNAME
   - Name: `demo`
   - CNAME: `kern-irrigation-demo.vercel.app`
6. Click Add Record
7. Wait 5-10 minutes

---

## PROVIDER 7: 1&1 / IONOS

### Steps:
1. Login to https://www.ionos.com
2. Domains → kisag.co → Manage Domain
3. DNS Records tab
4. Add DNS Record → CNAME
5. Fill in:
   - Subdomain: `demo`
   - Destination: `kern-irrigation-demo.vercel.app`
6. Click Save
7. Wait 5-10 minutes

---

## STILL NOT SURE?

### Quick Check
```bash
# Test if record exists
nslookup demo.kisag.co
# Should return: kern-irrigation-demo.vercel.app

# Or use:
dig demo.kisag.co CNAME
```

### Verify After Setup
1. Open browser: `https://demo.kisag.co`
2. Should either:
   - Show dashboard directly, OR
   - Redirect to /dashboard and show dashboard
3. Address bar should show: `demo.kisag.co` or `demo.kisag.co/dashboard`

---

## Common Issues

### Issue: Still showing old page after 15 minutes
**Solution:**
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Delete)
- Try incognito window
- Wait another 5 minutes

### Issue: Shows "This domain is for sale"
**Solution:**
- You added the record to wrong domain
- Check spelling: `demo.kisag.co` NOT `kisag.co`
- CNAME should be on `demo` subdomain, not root

### Issue: Shows 404 error
**Solution:**
- DNS resolved correctly ✓
- But Vercel doesn't have the domain configured
- In Vercel project settings → Domains → add `demo.kisag.co`

### Issue: Says DNS can't find it
**Solution:**
- DNS propagation takes 5-30 minutes
- Try again in 10 minutes
- Check you typed it correctly

---

## Quick Reference

| Provider | Time to Setup | Where to Login |
|----------|--------------|---|
| Namecheap | 2 min | namecheap.com/dashboard |
| GoDaddy | 2 min | godaddy.com/manage |
| AWS Route53 | 3 min | console.aws.amazon.com |
| Cloudflare | 1 min | dash.cloudflare.com |
| Google Domains | 2 min | domains.google.com |
| BlueHost | 2 min | cpanel |
| IONOS | 2 min | ionos.com |

---

## Still Stuck?

Try this command to see what YOUR DNS is pointing to right now:

```bash
# Mac/Linux
nslookup kisag.co
dig kisag.co NS

# Windows
nslookup kisag.co

# Find who manages DNS:
whois kisag.co | grep "Name Server"
```

Then find that provider above.

Or use https://whois.com to find your provider instantly.

---

## Final Checklist

- [ ] Found DNS provider
- [ ] Logged in
- [ ] Added CNAME record:
  - Name: `demo`
  - Value: `kern-irrigation-demo.vercel.app`
- [ ] Saved
- [ ] Waited 5 minutes
- [ ] Tested: `https://demo.kisag.co`
- [ ] See dashboard ✓

**That's it. You're done.**
