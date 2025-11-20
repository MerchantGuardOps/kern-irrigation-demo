// Mock data for KIS Irrigation Demo
// Realistic patterns for Kern County almonds/pistachios

export interface Block {
  id: string;
  name: string;
  crop: 'Almonds' | 'Pistachios';
  variety: string;
  acres: number;
  plantYear: number;
  soilType: string;
  status: 'optimal' | 'mild-deficit' | 'severe-deficit';
  lastIrrigation: string;
  nextRecommended: string;
  currentSWP: number; // bars (more negative = more stress)
  targetSWP: number;
  weeklyETc: number; // inches
  weeklyApplied: number; // inches
  seasonalApplied: number; // acre-feet
  projectedYield: number; // lbs/acre
}

export interface IrrigationEvent {
  date: string;
  eto: number; // inches
  etc: number; // inches (ETc = ETo × Kc)
  applied: number; // inches
  swp?: number; // bars (only measured weekly)
  phenologyStage: string;
}

export interface Recommendation {
  blockId: string;
  week: string;
  status: 'optimal' | 'mild-deficit' | 'severe-deficit';
  message: string;
  rationale: string;
  suggestedAmount: number; // inches
  confidence: number; // 0-100
}

// Mock blocks for demo ranch
export const mockBlocks: Block[] = [
  {
    id: 'block-1',
    name: 'North 40 - Nonpareil',
    crop: 'Almonds',
    variety: 'Nonpareil',
    acres: 42,
    plantYear: 2015,
    soilType: 'Sandy Loam',
    status: 'optimal',
    lastIrrigation: '2025-07-15',
    nextRecommended: '2025-07-22',
    currentSWP: -12.5,
    targetSWP: -14.0,
    weeklyETc: 1.8,
    weeklyApplied: 1.9,
    seasonalApplied: 3.2,
    projectedYield: 2850,
  },
  {
    id: 'block-2',
    name: 'South Valley - Butte',
    crop: 'Almonds',
    variety: 'Butte',
    acres: 38,
    plantYear: 2012,
    soilType: 'Clay Loam',
    status: 'mild-deficit',
    lastIrrigation: '2025-07-12',
    nextRecommended: '2025-07-19',
    currentSWP: -16.2,
    targetSWP: -14.0,
    weeklyETc: 1.9,
    weeklyApplied: 1.6,
    seasonalApplied: 2.9,
    projectedYield: 2650,
  },
  {
    id: 'block-3',
    name: 'East Ridge - Kerman',
    crop: 'Pistachios',
    variety: 'Kerman',
    acres: 55,
    plantYear: 2010,
    soilType: 'Sandy Loam',
    status: 'optimal',
    lastIrrigation: '2025-07-14',
    nextRecommended: '2025-07-21',
    currentSWP: -13.8,
    targetSWP: -15.0,
    weeklyETc: 2.1,
    weeklyApplied: 2.0,
    seasonalApplied: 3.5,
    projectedYield: 3100,
  },
  {
    id: 'block-4',
    name: 'West Field - Golden Hills',
    crop: 'Pistachios',
    variety: 'Golden Hills',
    acres: 48,
    plantYear: 2018,
    soilType: 'Loam',
    status: 'optimal',
    lastIrrigation: '2025-07-16',
    nextRecommended: '2025-07-23',
    currentSWP: -14.2,
    targetSWP: -15.0,
    weeklyETc: 1.7,
    weeklyApplied: 1.8,
    seasonalApplied: 2.8,
    projectedYield: 2900,
  },
];

// Generate realistic irrigation timeline for a block (last 12 weeks)
export const generateIrrigationHistory = (blockId: string): IrrigationEvent[] => {
  const events: IrrigationEvent[] = [];
  const startDate = new Date('2025-05-01');

  // Phenology stages for almonds/pistachios
  const stages = [
    'Bloom',
    'Fruit Set',
    'Early Nut Fill',
    'Peak Nut Fill',
    'Hull Split',
    'Post-Harvest',
  ];

  for (let week = 0; week < 12; week++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + (week * 7));

    // Realistic ETo pattern for Kern County (May-July)
    // Starts around 1.2"/week in May, peaks at 2.0-2.2"/week in July
    const baseETo = 1.2 + (week * 0.08);
    const eto = Number((baseETo + (Math.random() * 0.15 - 0.075)).toFixed(2));

    // Kc ranges from 0.4 (early) to 0.6 (peak demand)
    const kc = 0.4 + (week * 0.017);
    const etc = Number((eto * kc).toFixed(2));

    // Applied water (sometimes under, sometimes over ETc - realistic variance)
    const applied = Number((etc + (Math.random() * 0.3 - 0.15)).toFixed(2));

    // SWP measured weekly (gets more negative = more stress as season progresses)
    const swp = week % 1 === 0 ? Number((-10 - (week * 0.5) + (Math.random() * 2)).toFixed(1)) : undefined;

    // Determine phenology stage based on week
    const stageIndex = Math.min(Math.floor(week / 2), stages.length - 1);

    events.push({
      date: date.toISOString().split('T')[0],
      eto,
      etc,
      applied,
      swp,
      phenologyStage: stages[stageIndex],
    });
  }

  return events;
};

// Mock recommendations
export const mockRecommendations: Recommendation[] = [
  {
    blockId: 'block-1',
    week: '2025-07-22',
    status: 'optimal',
    message: 'Maintain current schedule',
    rationale: 'SWP at -12.5 bars is within optimal range for hull split stage. ETo forecast shows moderate demand (1.8"/week). Current deficit strategy is producing target kernel size.',
    suggestedAmount: 1.9,
    confidence: 92,
  },
  {
    blockId: 'block-2',
    week: '2025-07-19',
    status: 'mild-deficit',
    message: 'Increase irrigation by 0.3 inches',
    rationale: 'SWP at -16.2 bars exceeds target of -14.0 for mature Butte variety. Clay loam soil holding capacity requires adjustment. Forecast shows heat wave next week - pre-irrigate to avoid severe stress.',
    suggestedAmount: 1.9,
    confidence: 87,
  },
  {
    blockId: 'block-3',
    week: '2025-07-21',
    status: 'optimal',
    message: 'Maintain current schedule',
    rationale: 'Pistachios at -13.8 bars showing excellent response to RDI strategy. Historical data (2010-2024) shows this block performs best with mild deficit during peak fill. Yield projection on track for 3,100 lbs/acre.',
    suggestedAmount: 2.0,
    confidence: 94,
  },
  {
    blockId: 'block-4',
    week: '2025-07-23',
    status: 'optimal',
    message: 'Maintain current schedule',
    rationale: 'Young Golden Hills orchard responding well to conservative strategy. SWP stable at -14.2 bars. Sandy loam requires more frequent, lighter applications - current 7-day cycle optimal.',
    suggestedAmount: 1.8,
    confidence: 89,
  },
];

// Pilot comparison data (AI vs Actual from 2024 season)
export interface PilotComparison {
  blockName: string;
  crop: string;
  acres: number;
  actualWaterUsed: number; // acre-feet
  aiWaterUsed: number; // acre-feet
  actualYield: number; // lbs/acre
  aiYield: number; // lbs/acre
  savings: number; // dollars
}

export const mockPilotData: PilotComparison[] = [
  {
    blockName: 'North 40 - Nonpareil',
    crop: 'Almonds',
    acres: 42,
    actualWaterUsed: 3.7,
    aiWaterUsed: 3.2,
    actualYield: 2820,
    aiYield: 2850,
    savings: 3570, // (0.5 ac-ft × $120/ac-ft × 42 acres) + (30 lbs × $2.50/lb × 42 acres)
  },
  {
    blockName: 'South Valley - Butte',
    crop: 'Almonds',
    acres: 38,
    actualWaterUsed: 3.5,
    aiWaterUsed: 3.1,
    actualYield: 2580,
    aiYield: 2650,
    savings: 4788,
  },
  {
    blockName: 'East Ridge - Kerman',
    crop: 'Pistachios',
    acres: 55,
    actualWaterUsed: 4.1,
    aiWaterUsed: 3.5,
    actualYield: 3050,
    aiYield: 3100,
    savings: 10725,
  },
];
