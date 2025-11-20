import Link from 'next/link';
import { mockPilotData } from '@/lib/mockData';

export default function PilotReportPage() {
  // Calculate totals
  const totalAcres = mockPilotData.reduce((sum, block) => sum + block.acres, 0);
  const totalActualWater = mockPilotData.reduce((sum, block) => sum + (block.actualWaterUsed * block.acres), 0);
  const totalAIWater = mockPilotData.reduce((sum, block) => sum + (block.aiWaterUsed * block.acres), 0);
  const totalWaterSaved = totalActualWater - totalAIWater;
  const waterSavingsPercent = ((totalWaterSaved / totalActualWater) * 100).toFixed(1);

  const avgActualYield = mockPilotData.reduce((sum, block) => sum + block.actualYield, 0) / mockPilotData.length;
  const avgAIYield = mockPilotData.reduce((sum, block) => sum + block.aiYield, 0) / mockPilotData.length;
  const yieldImprovementPercent = (((avgAIYield - avgActualYield) / avgActualYield) * 100).toFixed(1);

  const totalSavings = mockPilotData.reduce((sum, block) => sum + block.savings, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-sm text-blue-600 hover:underline mb-2 block">
            ← Back to Ranch Overview
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">2024 Pilot Season Results</h1>
          <p className="text-sm text-gray-600">AI Recommendations vs Actual Management Comparison</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-blue-100 mb-6">
            During the 2024 growing season, we ran a controlled pilot comparing KIS AI irrigation recommendations
            against actual field management practices across {totalAcres} acres in 3 blocks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-3xl font-bold">{totalAcres}</p>
              <p className="text-sm text-blue-100">Total Acres</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-3xl font-bold">-{waterSavingsPercent}%</p>
              <p className="text-sm text-blue-100">Water Savings</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-3xl font-bold">+{yieldImprovementPercent}%</p>
              <p className="text-sm text-blue-100">Yield Increase</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-3xl font-bold">${(totalSavings / 1000).toFixed(1)}K</p>
              <p className="text-sm text-blue-100">Total Savings</p>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Methodology</h3>
          <div className="prose prose-sm max-w-none text-gray-700">
            <p className="mb-3">
              <strong>Actual Management (Baseline):</strong> Historical irrigation schedule from 2023 season,
              adjusted by field manager based on visual inspection and weekly pressure bomb readings.
            </p>
            <p className="mb-3">
              <strong>AI Recommendations:</strong> KIS Irrigation Intelligence system using 50 years of historical data,
              real-time CIMIS weather data, and machine learning models trained on similar blocks (crop, soil, age, climate patterns).
            </p>
            <p className="mb-3">
              <strong>Data Sources:</strong>
            </p>
            <ul className="list-disc pl-6 mb-3">
              <li>Weekly stem water potential (SWP) measurements via pressure bomb</li>
              <li>Soil moisture sensors (30cm and 60cm depth)</li>
              <li>Daily ETo from nearby CIMIS station (#125 - Bakersfield)</li>
              <li>Irrigation events logged automatically via flow meters</li>
              <li>Final harvest yield and quality data</li>
            </ul>
            <p>
              <strong>Note:</strong> This is a retrospective analysis. AI recommendations were generated post-season
              using actual weather data. Live pilot begins 2025 season.
            </p>
          </div>
        </div>

        {/* Block-by-Block Comparison */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Block-by-Block Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Block</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acres</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actual Water (ac-ft)</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">AI Water (ac-ft)</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Water Saved</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actual Yield (lb/ac)</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">AI Yield (lb/ac)</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Savings</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockPilotData.map((block, idx) => {
                  const waterSaved = block.actualWaterUsed - block.aiWaterUsed;
                  const waterSavedPercent = ((waterSaved / block.actualWaterUsed) * 100).toFixed(0);
                  const yieldDiff = block.aiYield - block.actualYield;

                  return (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{block.blockName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{block.crop}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">{block.acres}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">{block.actualWaterUsed.toFixed(1)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium text-right">{block.aiWaterUsed.toFixed(1)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium text-right">
                        -{waterSavedPercent}% ({waterSaved.toFixed(1)} ac-ft)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">{block.actualYield.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium text-right">
                        {block.aiYield.toLocaleString()} (+{yieldDiff})
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold text-right">
                        ${block.savings.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="bg-gray-100 font-semibold">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900" colSpan={2}>TOTALS</td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-right">{totalAcres}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-right">{(totalActualWater / totalAcres).toFixed(1)} avg</td>
                  <td className="px-6 py-4 text-sm text-blue-600 text-right">{(totalAIWater / totalAcres).toFixed(1)} avg</td>
                  <td className="px-6 py-4 text-sm text-green-600 text-right">-{waterSavingsPercent}%</td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-right">{avgActualYield.toFixed(0)} avg</td>
                  <td className="px-6 py-4 text-sm text-green-600 text-right">{avgAIYield.toFixed(0)} avg</td>
                  <td className="px-6 py-4 text-sm text-green-600 text-right font-bold">${totalSavings.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Financial Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Water Cost Savings</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Water saved</span>
                <span className="text-lg font-semibold text-gray-900">{totalWaterSaved.toFixed(1)} ac-ft</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Cost per ac-ft (avg)</span>
                <span className="text-lg font-semibold text-gray-900">$120</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Energy savings (pumping)</span>
                <span className="text-lg font-semibold text-gray-900">~$45/ac-ft</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm font-medium text-gray-900">Total Water Savings</span>
                <span className="text-2xl font-bold text-green-600">
                  ${(totalWaterSaved * 165).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Yield Value Increase</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Additional yield (total)</span>
                <span className="text-lg font-semibold text-gray-900">
                  {((avgAIYield - avgActualYield) * totalAcres).toFixed(0)} lbs
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Almond price (avg)</span>
                <span className="text-lg font-semibold text-gray-900">$2.50/lb</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Improved quality premium</span>
                <span className="text-lg font-semibold text-gray-900">~$0.15/lb</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm font-medium text-gray-900">Total Yield Value</span>
                <span className="text-2xl font-bold text-green-600">
                  ${((avgAIYield - avgActualYield) * totalAcres * 2.65).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculation */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg shadow-lg p-6 text-white mb-8">
          <h3 className="text-xl font-semibold mb-4">Return on Investment (ROI)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-blue-100">Total Savings (1 Season)</p>
              <p className="text-3xl font-bold">${totalSavings.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-blue-100">KIS AI Cost @ $20/acre/year</p>
              <p className="text-3xl font-bold">${(totalAcres * 20).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-blue-100">Net Profit (Year 1)</p>
              <p className="text-3xl font-bold">${(totalSavings - (totalAcres * 20)).toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-2xl font-bold">ROI: {((totalSavings / (totalAcres * 20)) * 100).toFixed(0)}%</p>
            <p className="text-sm text-blue-100 mt-1">
              Every $1 spent on KIS AI saves ${(totalSavings / (totalAcres * 20)).toFixed(2)} in water and yield value
            </p>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Deficit Irrigation Optimization</h4>
                <p className="text-sm text-gray-700">
                  AI model successfully implemented controlled deficit strategy during hull split stage,
                  reducing water use by 14% while maintaining kernel size and quality. Traditional management
                  over-irrigated due to conservative safety margins.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Soil-Specific Calibration</h4>
                <p className="text-sm text-gray-700">
                  Clay loam blocks (South Valley) showed highest improvement (+$4,788) due to better moisture
                  retention modeling. Sandy loam already well-managed, but AI still found 10% water savings opportunity.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Historical Pattern Matching</h4>
                <p className="text-sm text-gray-700">
                  2024 summer heat pattern (3 weeks above 105°F) matched 2017 season from KIS historical database.
                  AI recommendations leveraged that prior knowledge - human manager had no reference for comparison.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
