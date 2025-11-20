'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { mockBlocks, mockRecommendations, generateIrrigationHistory } from '@/lib/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BlockDetailPage() {
  const params = useParams();
  const blockId = params.id as string;

  const block = mockBlocks.find(b => b.id === blockId);
  const recommendation = mockRecommendations.find(r => r.blockId === blockId);
  const history = generateIrrigationHistory(blockId);

  if (!block) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Block Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">← Back to Ranch Overview</Link>
        </div>
      </div>
    );
  }

  // Status badge styling
  const statusColors = {
    'optimal': 'bg-green-100 text-green-800 border-green-200',
    'mild-deficit': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'severe-deficit': 'bg-red-100 text-red-800 border-red-200',
  };

  // Format chart data for ETo vs Applied
  const chartData = history.map(event => ({
    date: new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    'ETo': event.eto,
    'ETc (Crop Demand)': event.etc,
    'Applied Water': event.applied,
  }));

  // Format SWP data
  const swpData = history.filter(e => e.swp !== undefined).map(event => ({
    date: new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    'SWP (bars)': event.swp,
    'Target': block.targetSWP,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/" className="text-sm text-blue-600 hover:underline mb-2 block">
                ← Back to Ranch Overview
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">{block.name}</h1>
              <p className="text-sm text-gray-600">{block.crop} • {block.variety} • {block.acres} acres</p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-medium border ${statusColors[block.status]}`}>
              {block.status.replace('-', ' ').toUpperCase()}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Block Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Current SWP</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{block.currentSWP}</p>
            <p className="text-xs text-gray-500 mt-1">bars (Target: {block.targetSWP})</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Weekly ETc</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">{block.weeklyETc}"</p>
            <p className="text-xs text-gray-500 mt-1">Applied: {block.weeklyApplied}"</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Seasonal Water</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">{block.seasonalApplied}</p>
            <p className="text-xs text-gray-500 mt-1">acre-feet</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Projected Yield</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{block.projectedYield.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">lbs/acre</p>
          </div>
        </div>

        {/* AI Recommendation Card */}
        {recommendation && (
          <div className="bg-white rounded-lg shadow-lg border-2 border-blue-200 p-6 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">AI Recommendation</h2>
                <p className="text-sm text-gray-600">Week of {recommendation.week}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Confidence</p>
                <p className="text-2xl font-bold text-green-600">{recommendation.confidence}%</p>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${
              recommendation.status === 'optimal' ? 'bg-green-50 border-green-500' :
              recommendation.status === 'mild-deficit' ? 'bg-yellow-50 border-yellow-500' :
              'bg-red-50 border-red-500'
            }`}>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{recommendation.message}</h3>
              <p className="text-sm text-gray-700 mb-3">{recommendation.rationale}</p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-600">Suggested Amount</p>
                  <p className="text-2xl font-bold text-blue-600">{recommendation.suggestedAmount}"</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Next Irrigation</p>
                  <p className="text-lg font-semibold text-gray-900">{block.nextRecommended}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Apply Recommendation
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Historical Similar Seasons
              </button>
            </div>
          </div>
        )}

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* ET vs Applied Water Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Water Balance (Last 12 Weeks)</h3>
            <p className="text-sm text-gray-600 mb-4">
              Blue line = weather-driven demand (ETc), Orange line = actual irrigation applied
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis label={{ value: 'Inches', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ETo" stroke="#94a3b8" strokeWidth={1} dot={false} />
                <Line type="monotone" dataKey="ETc (Crop Demand)" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="Applied Water" stroke="#f97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-500 mt-4">
              <strong>Key insight:</strong> Applied water tracking below ETc = intentional deficit irrigation strategy.
              KIS AI monitors stem water potential to ensure stress stays in optimal range.
            </p>
          </div>

          {/* SWP Timeline Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stem Water Potential (SWP) History</h3>
            <p className="text-sm text-gray-600 mb-4">
              More negative = more plant stress. Target zone shown as green line.
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={swpData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis domain={[-20, -8]} label={{ value: 'Bars (more negative = stress)', angle: -90, position: 'insideLeft', fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="SWP (bars)" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Target" stroke="#22c55e" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-500 mt-4">
              <strong>What this means:</strong> Pressure bomb readings every 7 days show plant stress level.
              KIS AI predicts future SWP based on weather forecasts and recommends irrigation timing to keep you in the green zone.
            </p>
          </div>
        </div>

        {/* Block Metadata */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Block Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-600">Planted</p>
              <p className="text-lg font-semibold text-gray-900">{block.plantYear}</p>
              <p className="text-xs text-gray-500">({new Date().getFullYear() - block.plantYear} years old)</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Soil Type</p>
              <p className="text-lg font-semibold text-gray-900">{block.soilType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Last Irrigation</p>
              <p className="text-lg font-semibold text-gray-900">
                {new Date(block.lastIrrigation).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Current Stage</p>
              <p className="text-lg font-semibold text-gray-900">Hull Split</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
