# Kern Irrigation Systems: Ag-Tech Design Guidelines
**Actionable Design Framework for 2025**

---

## Executive Summary

This guide synthesizes research from leading ag-tech platforms (Climate FieldView, Semios, CropX, Trimble, FarmLogs) and applies proven design patterns to California's permanent crop sector. These guidelines prioritize **sunlight readability**, **glove-friendly interaction**, **offline functionality**, and **trust-building** for farmers aged 35-65.

---

## 1. Design for the Field Environment

### 1.1 Sunlight Readability (Critical Priority)

**The Problem:** Central Valley farmers work under 100,000+ lux during irrigation season (May-Oct). Standard UI palettes become invisible.

**Solutions:**

#### Color Palette for Outdoor Use
```css
/* Primary Colors */
--background-primary: #FFFFFF;        /* Pure white for max reflection */
--text-primary: #121212;              /* Near-black, 15:1 contrast ratio */
--action-primary: #005599;            /* Deep azure blue */
--status-good: #2E7D32;               /* Dark foliage green */
--status-warning: #FF6D00;            /* Safety orange (not red!) */
--status-critical: #D50000;           /* High-vis red */

/* Supporting Colors */
--background-card: #F5F5F5;           /* Subtle card separation */
--text-secondary: #546E7A;            /* Slate grey for labels */
```

**Why Orange Instead of Red for Warnings?**
- Red appears brown/dark in bright sunlight
- Orange maintains vibrancy and visibility
- Distinguishes warnings from critical errors

#### Typography Scale
```css
/* Minimum Font Sizes */
--font-body: 16px;           /* Never smaller */
--font-label: 14px;          /* Form labels */
--font-metric: 32px;         /* Critical numbers (soil moisture %) */
--font-heading: 24px;        /* Section headers */

/* Typeface */
font-family: 'Inter', 'Roboto', system-ui, sans-serif;
/* High x-height, open counters for distance reading */
```

**Design Rule:** If you can't read it while holding your phone at arm's length in sunlight, it's too small.

---

### 1.2 Touch Targets for Gloved Use

**The Reality:** Farmers wear leather work gloves, nitrile gloves, or have muddy hands.

#### Touch Target Specifications
- **Minimum size:** 48x48dp (not 44x44dp standard)
- **Spacing:** 8dp padding between interactive elements
- **Button height:** 56dp for primary actions

#### Button Design Pattern
```jsx
// Primary Action Button (React/Tailwind)
<button className="
  w-full              /* Full width for max hit area */
  h-14                /* 56px height */
  bg-[#005599]        /* Deep blue */
  text-white
  text-lg             /* 18px */
  font-semibold
  rounded-lg
  active:bg-[#004477] /* Darker on press */
  shadow-lg
">
  Start Irrigation
</button>
```

#### The "Thumb Zone"
Place primary actions in the **bottom third** of mobile screens:
- Navigation: Bottom tab bar (not hamburger menu)
- Primary CTA: Bottom sticky button
- Quick actions: Bottom-right floating action button

**Avoid:** Swipe gestures, hamburger menus, pinch-to-zoom reliance

---

### 1.3 Simplified Gestures

**Use These:**
- Single tap (primary interaction)
- Vertical scroll (natural, one-handed)
- Large swipe left/right (dismiss alerts, navigate cards)

**Avoid These:**
- Multi-touch pinch/zoom (use +/- buttons instead)
- Long-press (unreliable with gloves)
- Double-tap (too easy to accidentally trigger)

---

## 2. Navigation Patterns That Work

### 2.1 Mobile Navigation: Bottom Tab Bar

**Why:** Farmers aged 50+ don't intuitively understand hamburger menus. Bottom tabs are always visible.

#### Recommended Structure
```
┌─────────────────────────┐
│                         │
│    Content Area         │
│                         │
└─────────────────────────┘
┌──────┬──────┬──────┬────┐
│ Home │Fields│Alerts│ Me  │
└──────┴──────┴──────┴────┘
```

**3-4 tabs maximum:**
1. **Overview** (Dashboard with status cards)
2. **Fields** (Map view or list)
3. **Alerts** (Bell icon with badge count)
4. **Settings/Profile**

**Design Rule:** Icon + Text Label (never icon alone)

---

### 2.2 Desktop Navigation: Sidebar + Map

For office use (desktop/laptop):
```
┌────────┬────────────────────┐
│ Logo   │  Top Menu Bar      │
├────────┼────────────────────┤
│        │                    │
│ Side   │   Map View or      │
│ Nav    │   Dashboard        │
│        │                    │
└────────┴────────────────────┘
```

**Key Difference from Mobile:**
- Can show more data density
- Multi-column layouts
- Hover states (for mouse users)
- Detailed analytics/reports

---

### 2.3 Hierarchical Organization (From Semios)

**Structure:** Ranch → Block → Zone

```
California Ranch (1,200 acres)
├── North Block - Nonpareil (400 acres)
│   ├── Zone A1 (Sensor #1234)
│   └── Zone A2 (Sensor #1235)
└── South Block - Carmel (800 acres)
    ├── Zone B1 (Sensor #1236)
    └── Zone B2 (Sensor #1237)
```

**UI Implementation:**
- Breadcrumb trail at top: "Ranch > North Block > Zone A1"
- Allow quick switching between blocks (dropdown)
- Remember last viewed location

---

## 3. Data Visualization: From Numbers to Decisions

### 3.1 The "Fuel Gauge" Pattern (From CropX)

**Problem:** Raw soil moisture data (e.g., "25 centibars") is abstract.

**Solution:** Visual gauge showing water status.

#### Soil Moisture Gauge Component
```
     FIELD CAPACITY
    ┌───────────────┐
    │               │
    │   ░░░░░░░░    │  ← Current Level (58%)
    │   ████████    │
    │   ████████    │  ← Green "Management Zone"
    │   ████████    │
    │   ▓▓▓▓▓▓▓▓    │  ← Red "Refill Zone"
    └───────────────┘
   PERMANENT WILTING POINT

   CURRENT: 58% | OPTIMAL: 50-80%
   Last Irrigated: 2 days ago
```

**Implementation Tips:**
- Use vertical gauge (easier to read at a glance)
- Color-code zones: Green (good), Amber (watch), Red (irrigate)
- Show "days until irrigation needed" calculation
- Tap gauge to see detailed line graph (progressive disclosure)

---

### 3.2 Map-Centric Dashboard (From FieldView)

**Insight:** Farmers think spatially ("The North 40," not "Field ID 47").

#### Map View Features
1. **Default View:** Satellite imagery with field boundaries
2. **Color Coding:** Fields colored by status
   - Green: Optimal moisture
   - Yellow: Monitor closely
   - Red: Needs irrigation
3. **Toggle Layers:**
   - Soil moisture overlay
   - ET (evapotranspiration) zones
   - Sensor locations (clickable pins)

#### Split-Screen Comparison (FieldView Pattern)
```
┌──────────────┬──────────────┐
│  Moisture    │  Salinity    │
│  Map         │  Map         │
│              │              │
└──────────────┴──────────────┘
        [Slide to Compare]
```

**Use Case:** Compare before/after irrigation, or correlate moisture with salinity.

---

### 3.3 Subsurface Profile Visualization

**For Almonds:** Deep moisture (3-4 feet) is critical.

#### Soil Profile Chart
```
Depth    Moisture %
12"   ████████████░░░░ 75%
24"   ██████████░░░░░░ 65%
36"   ████████░░░░░░░░ 55%  ← Wetting front reached here
48"   ███░░░░░░░░░░░░░ 30%  ← Needs deeper push
```

**Insight:** Shows if irrigation pushed water deep enough for root reservoir.

---

### 3.4 Weather Integration: Traffic Light Timeline

Instead of generic forecast, show actionable spray/frost windows:

```
Next 48 Hours:
┌────┬────┬────┬────┬────┬────┐
│ 6AM│12PM│ 6PM│12AM│ 6AM│12PM│
│ 🟢 │ 🟢 │ 🔴 │ 🟢 │ 🟢 │ 🟢 │
└────┴────┴────┴────┴────┴────┘
    Safe to spray  │ High wind risk (15mph)
```

**Color Meaning:**
- Green: Safe conditions
- Red: Drift risk / frost risk / thermal inversion

---

## 4. Offline-First Architecture (Critical for Rural Areas)

### 4.1 The Connectivity Problem

**Reality:** Growers move between high-speed LTE and complete dead zones deep in orchards.

**Solution:** Offline-first architecture where app works 100% offline, syncs when connected.

#### Technical Implementation
```javascript
// Local Database Choice
// Option 1: RxDB (React Native)
// Option 2: Dexie.js (Web)
// Option 3: WatermelonDB (React Native)

// Core Pattern: Optimistic UI
async function logIrrigation(blockId, hours) {
  // 1. Update UI immediately (no spinner)
  dispatch({ type: 'ADD_IRRIGATION_LOG', payload: { blockId, hours } });

  // 2. Save to local database
  await localDB.irrigationLogs.add({ blockId, hours, synced: false });

  // 3. Queue for sync when online
  syncQueue.enqueue({ endpoint: '/api/logs', method: 'POST', data: { blockId, hours } });

  // 4. Background sync handles upload when connected
}
```

#### Offline Indicator UI
```jsx
{!isOnline && (
  <div className="bg-amber-100 border-l-4 border-amber-500 p-3">
    <p className="text-sm">
      📡 Offline Mode - Changes will sync when connected
    </p>
  </div>
)}
```

---

### 4.2 Map Caching Strategy

**Problem:** Maps are data-heavy.

**Solution:** Pre-cache specific ranch areas.

#### Implementation (Mapbox)
```javascript
// Allow users to download their ranch offline
<button onClick={() => {
  const bounds = getRanchBoundary();
  offlineManager.downloadRegion({
    bounds: bounds,
    minZoom: 14,
    maxZoom: 18,
    stylePack: 'satellite-streets'
  });
}}>
  Download Ranch Map for Offline Use
</button>
```

**UX Flow:**
1. User clicks "Download for Offline"
2. Progress bar: "Downloading... 2.3 MB"
3. Confirmation: "Ready for offline use"
4. Map works in field with zero connectivity

---

## 5. Building Trust with Farmers

### 5.1 Social Proof & ROI

**Why It Matters:** Farmers are skeptical of tech until proven.

#### Testimonial Pattern
```jsx
<div className="bg-white p-6 rounded-lg shadow">
  <p className="text-lg italic mb-4">
    "Saved 20% on water costs after one season.
     The soil moisture sensors caught a leak I didn't know about."
  </p>
  <div className="flex items-center">
    <img src="/john-doe.jpg" className="w-12 h-12 rounded-full" />
    <div className="ml-3">
      <p className="font-semibold">John Martinez</p>
      <p className="text-sm text-gray-600">
        1,200 acres | Almonds | Fresno, CA
      </p>
    </div>
  </div>
</div>
```

**Key Elements:**
- Specific outcome ("20% savings")
- Real name + photo (authenticity)
- Similar operation size (relatability)
- Same crop/region

---

### 5.2 ROI Dashboard

**Pattern:** Show cumulative savings prominently.

```
┌────────────────────────────────┐
│  Your Water Savings            │
│  ════════════════════════       │
│                                 │
│   This Season: 127 acre-feet   │
│   Cost Saved: $38,100           │
│                                 │
│   vs. Traditional: -18% usage  │
└────────────────────────────────┘
```

---

### 5.3 Hardware Status Transparency (From Semios)

**Trust Signal:** Always show sensor health.

```
Block 4 - North
├─ Sensor #1234 ✅ 87% battery
├─ Sensor #1235 ⚠️ 12% battery (replace soon)
└─ Sensor #1236 🔴 Offline (check connection)
```

**Why This Matters:** If sensor is down, grower knows data is stale (prevents bad decisions).

---

### 5.4 Data Ownership & Privacy

**Display Prominently in Footer:**
```
✓ Your data is never sold
✓ You own your farm data
✓ Export data anytime
✓ SOC 2 Certified
```

**Settings Page:**
```
Data Sharing Preferences:
□ Share with Crop Consultant
□ Share with Water District (for SGMA reporting)
□ Share anonymized data for research
```

---

## 6. Component Library: Ready-to-Use Patterns

### 6.1 Status Card (Dashboard)

```jsx
<div className="bg-white rounded-lg shadow-md p-4 mb-4">
  {/* Status Indicator */}
  <div className="flex items-center mb-2">
    <div className="w-6 h-6 rounded-full bg-green-600 mr-3" />
    <h3 className="text-lg font-bold">Block 4 - Nonpareil</h3>
  </div>

  {/* Key Metric (Large) */}
  <div className="text-center my-6">
    <p className="text-5xl font-bold">58%</p>
    <p className="text-gray-600">Soil Moisture</p>
  </div>

  {/* Secondary Info */}
  <div className="text-sm text-gray-600 mb-4">
    Last Irrigated: 2 days ago
  </div>

  {/* Action Button */}
  <button className="w-full h-14 bg-[#005599] text-white text-lg font-semibold rounded-lg">
    View Details
  </button>
</div>
```

---

### 6.2 Alert Banner (Critical)

```jsx
{alerts.length > 0 && (
  <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-4">
    <div className="flex items-start">
      <span className="text-2xl mr-3">⚠️</span>
      <div>
        <p className="font-bold text-red-800">Low Moisture - Block 4</p>
        <p className="text-sm text-red-700">
          Soil moisture at 28% (below 30% threshold).
          Recommend irrigating 2 inches today.
        </p>
        <button className="mt-2 text-red-800 underline font-semibold">
          View Irrigation Plan →
        </button>
      </div>
    </div>
  </div>
)}
```

**Key:** Make alerts actionable ("Recommend irrigating 2 inches"), not just informational.

---

### 6.3 Form Input: Stepper (Not Keyboard)

**Why:** Easier to tap +/- 5 times than type "5" with gloves.

```jsx
<div className="flex items-center justify-between">
  <label className="text-lg font-semibold">Hours to Run:</label>

  <div className="flex items-center space-x-4">
    {/* Minus Button */}
    <button
      onClick={() => setHours(h => Math.max(0, h - 1))}
      className="w-16 h-16 bg-gray-200 rounded-lg text-3xl font-bold"
    >
      −
    </button>

    {/* Value Display */}
    <div className="text-4xl font-bold w-20 text-center">
      {hours}
    </div>

    {/* Plus Button */}
    <button
      onClick={() => setHours(h => h + 1)}
      className="w-16 h-16 bg-[#005599] text-white rounded-lg text-3xl font-bold"
    >
      +
    </button>
  </div>
</div>

{/* Immediate Feedback */}
<p className="text-gray-600 mt-2">
  Total Application: {(hours * 0.4).toFixed(1)} acre-inches
</p>
```

---

## 7. Responsive Breakpoints

### Mobile (360px - 768px)
- Single column layout
- Bottom tab navigation
- Full-width cards
- Stacked charts (one per screen)
- Map full-screen with overlay controls

### Tablet (768px - 1024px)
- Two-column layout (list + details)
- Side navigation or top tabs
- Map + data panel side-by-side (landscape)
- Larger touch targets maintained

### Desktop (1024px+)
- Multi-column dashboard (3-4 widgets across)
- Sidebar navigation
- Map + analytics split screen
- Hover states enabled
- Detailed data tables

**Tailwind Example:**
```jsx
<div className="
  w-full               /* Mobile: full width */
  md:w-1/2             /* Tablet: half width */
  lg:w-1/3             /* Desktop: third width */
  p-4
">
  {/* Content */}
</div>
```

---

## 8. Recommended Tech Stack

### Frontend
```javascript
// Framework
- Next.js 14+ (App Router)
- React 18+
- TypeScript

// Styling
- Tailwind CSS 3+
- Headless UI (accessible components)

// Charts
- Recharts (simple, responsive)
- Or Nivo (more polished)

// Maps
- Mapbox GL JS (offline support)
- react-map-gl wrapper

// State Management
- Zustand (lightweight)
- Or React Query (for server state)

// Offline Database
- Dexie.js (IndexedDB wrapper)
- Or RxDB (for complex sync)

// PWA
- next-pwa plugin
- Workbox (service worker)
```

### Backend
```javascript
// API
- Next.js API Routes
- Or Node.js + Express
- GraphQL (minimize data transfer)

// Database
- PostgreSQL + PostGIS (geospatial)
- Redis (caching)

// Real-time
- Supabase (if using)
- Or Socket.io
```

---

## 9. Performance Budgets

### Mobile (3G Connection)
- **Initial Load:** < 3 seconds
- **Time to Interactive:** < 5 seconds
- **Bundle Size:** < 200KB (critical JS/CSS)
- **Lighthouse Score:** 90+ (Performance)

### Optimization Checklist
- [ ] Code splitting (route-based)
- [ ] Lazy load images
- [ ] Pre-cache critical assets (service worker)
- [ ] Compress images (WebP format)
- [ ] Tree-shake unused libraries
- [ ] Use CDN for static assets

---

## 10. Accessibility & SGMA Compliance

### Accessibility (WCAG AA)
- [ ] Contrast ratio: 4.5:1 minimum (we use 15:1)
- [ ] All buttons have aria-labels
- [ ] Keyboard navigation works
- [ ] Forms have visible labels (not just placeholders)
- [ ] Error messages are clear

### SGMA Compliance Features
- [ ] Export groundwater usage reports (CSV)
- [ ] Integration with DWR reporting portal
- [ ] Flow meter data tracking
- [ ] Historical usage charts (monthly/yearly)
- [ ] Automated report generation

**UI Pattern:**
```jsx
<button className="bg-blue-600 text-white px-6 py-3 rounded">
  Export SGMA Report (CSV)
</button>

// Generates:
// Date, Block, Gallons Used, Acre-Feet, Source (Well ID)
```

---

## 11. Voice Interface (Future-Ready)

### Voice Commands (Optional Enhancement)
```javascript
// Example: AgVoice-style interaction
"Show me Block 4"          → Navigate to Block 4
"Turn on Pump 3"           → Remote pump control
"Log irrigation, 5 hours"  → Add log entry
"What's my moisture level?" → Read current status
```

**Implementation:**
- Web Speech API (built into browsers)
- Multimodal feedback (audio + visual + haptic)
- Train on ag vocabulary ("fertigation", "centibar", "acre-feet")

---

## 12. Quick Start Implementation Plan

### Week 1: Foundation
1. Set up Next.js project with Tailwind
2. Implement color system (sunlight-readable palette)
3. Create base components (Button, Card, Input)
4. Build bottom tab navigation

### Week 2: Core Features
1. Dashboard with status cards
2. Map view with Mapbox integration
3. Offline database setup (Dexie.js)
4. Service worker for PWA

### Week 3: Data Visualization
1. Soil moisture gauge component
2. Time-series charts (Recharts)
3. Weather integration (OpenWeather API)
4. Alert system

### Week 4: Testing & Refinement
1. Test on actual devices in sunlight
2. Test with gloves (or thick finger stylus)
3. Performance optimization
4. User testing with 2-3 farmers

---

## 13. Example Code Snippets

### Next.js Page Structure
```tsx
// app/dashboard/page.tsx
import { StatusCard } from '@/components/StatusCard';
import { MapView } from '@/components/MapView';

export default async function DashboardPage() {
  // Server-side data fetch
  const blocks = await fetchBlocks();

  return (
    <div className="p-4 pb-20"> {/* pb-20 for bottom nav */}
      <h1 className="text-2xl font-bold mb-4">Your Ranch</h1>

      {/* Map View */}
      <div className="h-64 rounded-lg overflow-hidden mb-4">
        <MapView blocks={blocks} />
      </div>

      {/* Status Cards */}
      <div className="space-y-4">
        {blocks.map(block => (
          <StatusCard key={block.id} block={block} />
        ))}
      </div>
    </div>
  );
}
```

### Offline Sync Hook
```tsx
// hooks/useOfflineSync.ts
import { useEffect } from 'react';
import { db } from '@/lib/db';

export function useOfflineSync() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Listen for online/offline events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', () => setIsOnline(false));

    async function handleOnline() {
      setIsOnline(true);

      // Sync queued changes
      const pending = await db.syncQueue.toArray();
      for (const item of pending) {
        try {
          await fetch(item.endpoint, {
            method: item.method,
            body: JSON.stringify(item.data)
          });
          await db.syncQueue.delete(item.id);
        } catch (err) {
          console.error('Sync failed:', err);
        }
      }
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', () => setIsOnline(false));
    };
  }, []);

  return { isOnline };
}
```

---

## 14. Testing Checklist

### Device Testing
- [ ] iPhone SE (small screen)
- [ ] iPad 10.2" (tablet, landscape & portrait)
- [ ] Samsung Galaxy A-series (mid-range Android)
- [ ] Desktop 1920x1080

### Environmental Testing
- [ ] Direct sunlight (take phone outside at noon)
- [ ] Wearing work gloves (leather or nitrile)
- [ ] While driving (passenger seat, bumpy roads)
- [ ] In airplane mode (complete offline)

### User Scenarios
- [ ] New user onboarding (blank slate)
- [ ] Check moisture while in field
- [ ] Log irrigation event offline, sync later
- [ ] Respond to low moisture alert
- [ ] Export SGMA report for water district

---

## 15. Resources & Tools

### Design Tools
- **Figma:** UI design & prototyping
- **Tailwind UI:** Component patterns
- **Coolors.co:** Color palette generator
- **WebAIM:** Contrast checker

### Development Tools
- **Lighthouse:** Performance auditing
- **Chrome DevTools:** Offline testing (Network tab → Offline)
- **React Native Debugger:** (if building mobile app)

### Research Sources
- UC Davis Cooperative Extension (irrigation best practices)
- Almond Board of California (water guidelines)
- SGMA Portal (regulatory requirements)

---

## Conclusion: Design Principles Summary

1. **Sunlight-First:** High contrast (15:1), pure white backgrounds, large text (16px minimum)
2. **Glove-Friendly:** 48x48dp touch targets, 8dp spacing, bottom-zone navigation
3. **Offline-First:** Local database, optimistic UI, background sync
4. **Map-Centric:** Spatial thinking, color-coded fields, satellite imagery
5. **Decision-Focused:** Fuel gauges over raw data, actionable alerts, ROI visibility
6. **Trust-Building:** Social proof, hardware status, data ownership clarity
7. **Age-Appropriate:** Simple navigation, labeled icons, minimal gestures
8. **Mobile-First:** Bottom tabs, single column, thumb zone optimization

---

**Build for the field, not the boardroom. Every design decision should answer: "Can a 55-year-old farmer use this with gloves on, in the sun, while standing next to a running pump?"**

If yes, you're building the right product.
