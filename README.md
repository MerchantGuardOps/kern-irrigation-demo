# KIS Irrigation Intelligence - Demo Dashboard

**Transform 50 years of irrigation data into AI-powered recommendations for California tree nut growers.**

![Demo Status](https://img.shields.io/badge/status-demo-blue)
![Built with Next.js](https://img.shields.io/badge/Next.js-16-black)
![License](https://img.shields.io/badge/license-Proprietary-red)

---

## Overview

This demo showcases what Kern Irrigation Systems' 40-50 years of proprietary field data looks like when turned into an intelligent decision support system.

**Target Market:** Almond & Pistachio growers in Kern County, CA
**Value Proposition:** 14% water savings + 1.2% yield increase = $140/acre/year savings
**Revenue Model:** $20-30/acre/year SaaS

---

## Demo Features

### 1. Ranch Overview (`/`)
- Live dashboard showing 4 blocks (183 acres total)
- Real-time status indicators (Optimal, Mild Deficit, Severe Deficit)
- Summary stats: Total water applied, AI confidence, projected yields
- Alert system: Weather forecasts + stress warnings

### 2. Block Detail Pages (`/block/[id]`)
- **ET vs Applied Water Chart:** 12-week timeline showing crop demand vs actual irrigation
- **SWP History Chart:** Stem water potential measurements (pressure bomb data)
- **AI Recommendations:** Weekly irrigation schedule with 87-94% confidence scores
- **Rationale:** Plain-English explanations pulling from 50 years of historical patterns

### 3. Pilot Report (`/pilot-report`)
- **Retrospective Analysis:** AI vs Actual management (2024 season)
- **Results:** -14% water, +1.2% yield, $19K savings on 135 acres
- **ROI Calculation:** 700%+ return on investment
- **Methodology:** Explains data sources and validation approach

---

## Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Recharts (data visualization)

**Data (Production):**
- Supabase (Postgres database)
- BigQuery (data warehouse)
- Google Cloud Run (ML model deployment)
- CIMIS API (California weather data)

**ML Models (V1):**
- XGBoost (yield prediction)
- LightGBM (irrigation efficiency)
- Prophet (seasonal forecasting)

---

## Quick Start

### Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

**Quick deploy:**
```bash
npx vercel login
npx vercel --yes --prod
```

---

## Project Structure

```
kern-irrigation-demo/
├── app/
│   ├── page.tsx                    # Ranch Overview (homepage)
│   ├── block/[id]/page.tsx         # Block Detail (dynamic route)
│   └── pilot-report/page.tsx       # Pilot Season Results
├── lib/
│   └── mockData.ts                 # Realistic dummy data (Kern County patterns)
├── DEPLOY.md                       # Deployment guide + pitch talking points
└── README.md                       # This file
```

---

## Mock Data

All dummy data matches real-world Kern County irrigation patterns:

**Crops:**
- Almonds: Nonpareil, Butte varieties
- Pistachios: Kerman, Golden Hills varieties

**Metrics:**
- ETo: 1.2-2.2 inches/week (May-July typical range)
- SWP: -10 to -18 bars (pressure bomb readings)
- Crop Coefficient (Kc): 0.4-0.6 (phenology-dependent)
- Yields: 2,650-3,100 lbs/acre (mature orchards)

**Soil Types:**
- Sandy Loam (fast drainage, frequent light irrigation)
- Clay Loam (moisture retention, deeper watering cycles)

---

## Business Model

### Pricing Tiers

**B2C (Farmers):**
- **Free:** Basic IrrigationScore calculator
- **Premium:** $20/acre/year (AI recommendations, unlimited access)
- **Enterprise:** $200K-300K/year (10K+ acre operations, white-label API)

**B2B (Equipment/Seed/Insurance):**
- Equipment intelligence: $25K-50K/month
- Crop performance data: $20K-35K/month
- Insurance risk scoring: $30K-60K/month

### Revenue Projections

| Year | Farms | ARR       | Notes                              |
|------|-------|-----------|-------------------------------------|
| 1    | 10    | $200K     | Pilot customers + 1 ex-client      |
| 2    | 40    | $800K     | Regional expansion (San Joaquin)   |
| 3    | 100   | $2M+      | + B2B partnerships (equipment)     |

---

## Why This Works

### The Data Moat

**What KIS has that no one else does:**
- 40-50 years of irrigation management logs (water applied, SWP, yields)
- Pre-tech-boom data (before startups existed in this space)
- San Joaquin Valley microclimates + soil variations
- Deficit irrigation strategies across multiple drought cycles

**Competitive rebuild time:** 5-8 years (if starting today)

### The Science

**Stem Water Potential (SWP):**
- Gold standard metric for plant water stress
- More accurate than soil moisture alone
- Requires manual pressure bomb readings (labor-intensive)
- **KIS AI:** Virtual SWP Sensor predicts readings without field labor

**Regulated Deficit Irrigation (RDI):**
- Intentional mild stress during specific growth stages
- Improves nut quality without sacrificing yield
- Requires decades of experience to calibrate correctly
- **KIS AI:** Encodes 50 years of RDI trial-and-error into ML model

### The Exit Strategy

**Comparable Ag-Tech Acquisitions:**
- Climate Corp → Monsanto (2013): **$930M** (weather + yield data platform)
- Blue River → John Deere (2017): **$305M** (computer vision for precision spraying)
- Semios: **$100M+** raised (pest + irrigation sensors)

**Our thesis:** Tree nut irrigation data moat > single-season crop data

---

## Next Steps (Post-Demo)

### Week 1: Legal + Data
1. Attorney review of data ownership (~$1K, 1 week)
2. Inventory historical data (what's digitized? what condition?)
3. Finalize equity split (10% + 5% revenue share first 3 years?)

### Month 1: MVP with Real Data
1. Replace mock data with actual block data
2. Integrate CIMIS API (auto-pull ETo, weather forecasts)
3. Set up Supabase database
4. Deploy production v1

### Month 2-3: Pilot Launch
1. Install soil moisture sensors (10-20 units, ~$5K)
2. A/B test: AI recommendations vs current method (50/50 split)
3. Weekly check-ins + pressure bomb readings
4. Collect feedback, iterate on model

### Month 3-6: Prove ROI
1. Measure water savings (target: 10-15% reduction)
2. Measure yield impact (target: maintain or increase 2-5%)
3. Calculate dollar savings (water cost + energy + yield value)
4. Generate case study for sales

---

## Contact

**Project Lead:** [Your Name]
**Technical Partner:** Nick, Kern Irrigation Systems
**Status:** Demo ready for investor/partner pitch

---

## License

Proprietary. All rights reserved. Not for public distribution without written permission.

---

**Built in 48 hours. Ready to transform California agriculture.**
