import Link from 'next/link';
import { mockBlocks, mockRecommendations } from '@/lib/mockData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">KIS Irrigation Intelligence</h1>
              <p className="text-sm text-gray-600">Powered by 50 years of field data</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Demo Ranch</p>
              <p className="text-xs text-gray-500">Bakersfield, CA • 183 acres</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Total Blocks</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{mockBlocks.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Total Acres</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {mockBlocks.reduce((sum, block) => sum + block.acres, 0)}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Water Applied (Season)</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {mockBlocks.reduce((sum, block) => sum + block.seasonalApplied, 0).toFixed(1)} ac-ft
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">AI Confidence</p>
            <p className="text-3xl font-bold text-green-600 mt-2">91%</p>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <span className="font-medium">Heat wave forecast:</span> 105-110°F expected next week. Block 2 (South Valley) showing mild stress - recommend pre-irrigation.
              </p>
            </div>
          </div>
        </div>

        {/* Block Cards */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ranch Blocks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockBlocks.map((block) => {
              const recommendation = mockRecommendations.find(r => r.blockId === block.id);

              // Status badge styling
              const statusColors = {
                'optimal': 'bg-green-100 text-green-800 border-green-200',
                'mild-deficit': 'bg-yellow-100 text-yellow-800 border-yellow-200',
                'severe-deficit': 'bg-red-100 text-red-800 border-red-200',
              };

              const statusIcons = {
                'optimal': '✓',
                'mild-deficit': '⚠',
                'severe-deficit': '✕',
              };

              return (
                <Link
                  key={block.id}
                  href={`/block/${block.id}`}
                  className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{block.name}</h3>
                        <p className="text-sm text-gray-600">{block.crop} • {block.variety} • {block.acres} acres</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[block.status]}`}>
                        {statusIcons[block.status]} {block.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Current SWP</p>
                        <p className="text-lg font-semibold text-gray-900">{block.currentSWP} bars</p>
                        <p className="text-xs text-gray-500">Target: {block.targetSWP} bars</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Weekly ETc</p>
                        <p className="text-lg font-semibold text-gray-900">{block.weeklyETc}"</p>
                        <p className="text-xs text-gray-500">Applied: {block.weeklyApplied}"</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Seasonal Applied</p>
                        <p className="text-lg font-semibold text-blue-600">{block.seasonalApplied} ac-ft</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Projected Yield</p>
                        <p className="text-lg font-semibold text-green-600">{block.projectedYield.toLocaleString()} lb/ac</p>
                      </div>
                    </div>

                    {/* Recommendation Preview */}
                    {recommendation && (
                      <div className={`mt-4 p-3 rounded border ${
                        recommendation.status === 'optimal' ? 'bg-green-50 border-green-200' :
                        recommendation.status === 'mild-deficit' ? 'bg-yellow-50 border-yellow-200' :
                        'bg-red-50 border-red-200'
                      }`}>
                        <p className="text-sm font-medium text-gray-900">{recommendation.message}</p>
                        <p className="text-xs text-gray-600 mt-1">
                          Next irrigation: {block.nextRecommended} • {recommendation.suggestedAmount}" recommended
                        </p>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <p className="text-xs text-gray-500">
                        Planted {block.plantYear} • {block.soilType}
                      </p>
                      <span className="text-sm text-blue-600 font-medium">View Details →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Pilot Report Link */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">2024 Pilot Season Results</h3>
              <p className="text-blue-100 mb-4">
                AI recommendations vs actual management • 3 blocks • 135 acres
              </p>
              <div className="flex gap-6">
                <div>
                  <p className="text-2xl font-bold">-14%</p>
                  <p className="text-sm text-blue-100">Water Savings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">+1.2%</p>
                  <p className="text-sm text-blue-100">Yield Increase</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">$19K</p>
                  <p className="text-sm text-blue-100">Total Savings</p>
                </div>
              </div>
            </div>
            <Link
              href="/pilot-report"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Full Report
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
