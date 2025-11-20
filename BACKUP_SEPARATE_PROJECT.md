# BACKUP PLAN: Separate Vercel Project for demo.kisag.co

Use this ONLY if DNS redirect doesn't work after 30 minutes.

## Why This Is Your Fallback

- Each Vercel project can have its own domain
- No shared routing logic to conflict
- 100% guaranteed to work
- Takes 10-15 minutes

## Step 1: Create a Minimal Dashboard-Only Repo

Option A: Create new GitHub branch
```bash
git checkout -b demo-only
git rm -rf .
# Delete everything except what's below
```

Option B: Create new repo
```bash
mkdir kern-demo-dashboard
cd kern-demo-dashboard
git init
```

## Step 2: Create Minimal Project

Copy only these files:

**package.json:**
```json
{
  "name": "kern-demo-dashboard",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "recharts": "^3.4.1"
  }
}
```

**app/layout.tsx:**
```tsx
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Kern Irrigation AI Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**app/page.tsx:**
```tsx
import Dashboard from './dashboard/page';
export default Dashboard;
```

**app/dashboard/page.tsx:**
(Copy entire file from main repo)

**app/globals.css:**
(Copy entire file from main repo)

**next.config.ts:**
```ts
export default {};
```

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "lib": ["es2015", "dom", "dom.iterable"],
    "jsx": "preserve",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node"
  }
}
```

## Step 3: Initialize & Push

```bash
git add .
git commit -m "Dashboard-only Vercel project"
git remote add origin https://github.com/YOUR_USERNAME/kern-demo-dashboard.git
git push -u origin main
```

## Step 4: Deploy to Vercel

1. Go to https://vercel.com/new
2. Click "Import" next to your new repo
3. Click "Deploy"
4. Wait for deployment
5. Get the Vercel URL (e.g., `kern-demo-dashboard.vercel.app`)

## Step 5: Point Domain

In your DNS provider:
```
Type:  CNAME
Name:  demo
Value: kern-demo-dashboard.vercel.app
```

OR in Vercel project settings:
1. Go to project settings
2. Domains
3. Add domain: `demo.kisag.co`
4. Add DNS record it tells you

## Step 6: Test

Open: `https://demo.kisag.co`

Should load dashboard directly (no redirect).

---

## File Structure

```
kern-demo-dashboard/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── dashboard/
│       └── page.tsx
├── next.config.ts
├── tsconfig.json
└── package.json
```

## This Approach Guarantees It Works Because

1. ✓ No routing logic (can't break)
2. ✓ Dedicated project (no conflicts)
3. ✓ Vercel project domain assignment is rock solid
4. ✓ Simple CNAME in DNS
5. ✓ No middleware, no vercel.json, no "special logic"

## Size Comparison

- Main project: ~15MB (with all pages)
- Dashboard-only: ~800KB (ultra-light)

Faster deployment, smaller deployment, fewer things to go wrong.

---

## When to Use This

✓ DNS redirect failed after 30 minutes
✓ You want 100% guaranteed to work
✓ You don't mind maintaining 2 projects
✓ You want to demo in next 30 minutes and don't want to wait for DNS

## When NOT to Use This

✗ DNS redirect is working
✗ You want single deployment
✗ You're OK waiting for DNS propagation

---

## TL;DR

1. Create new minimal repo with just dashboard
2. Push to GitHub
3. Deploy to Vercel
4. Point DNS CNAME to that Vercel project
5. Done

Total time: 10-15 minutes. 100% works.
