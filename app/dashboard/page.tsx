'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-emerald-700 shadow-2xl sticky top-0 z-50 border-b border-green-600/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <img src="/kern-logo.jpg" alt="Kern Irrigation" className="h-12 w-auto cursor-pointer" />
              </Link>
              <div className="hidden md:block border-l-2 border-white/30 pl-4">
                <h1 className="text-white text-xl font-bold">AI Dashboard</h1>
                <p className="text-green-200 text-xs">Real-Time Monitoring</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">All Systems Operational</span>
              </div>
              <div className="text-white text-sm font-mono bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          {/* Metric 1 - Acres Monitored */}
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>12%</span>
              </div>
            </div>
            <h3 className="text-blue-200 text-sm font-medium mb-2">Total Acres</h3>
            <p className="text-white text-4xl font-bold mb-1">30,442</p>
            <p className="text-blue-300 text-xs">3 California regions</p>
          </div>

          {/* Metric 2 - Water Saved */}
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
                </svg>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>8%</span>
              </div>
            </div>
            <h3 className="text-green-200 text-sm font-medium mb-2">Water Savings</h3>
            <p className="text-white text-4xl font-bold mb-1">12.4%</p>
            <p className="text-green-300 text-xs">vs industry average</p>
          </div>

          {/* Metric 3 - Yield Increase */}
          <div className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>5%</span>
              </div>
            </div>
            <h3 className="text-amber-200 text-sm font-medium mb-2">Yield Increase</h3>
            <p className="text-white text-4xl font-bold mb-1">8.2%</p>
            <p className="text-amber-300 text-xs">optimized nutrition</p>
          </div>

          {/* Metric 4 - AI Confidence */}
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Optimal</span>
              </div>
            </div>
            <h3 className="text-purple-200 text-sm font-medium mb-2">AI Confidence</h3>
            <p className="text-white text-4xl font-bold mb-1">94%</p>
            <p className="text-purple-300 text-xs">model accuracy</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* Water Usage Chart */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-xl font-bold">Water Usage Trends</h3>
              <select className="bg-white/10 text-white text-sm rounded-lg px-3 py-2 border border-white/20">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
              </select>
            </div>
            <div className="relative h-64">
              {/* Simple Bar Chart */}
              <div className="flex items-end justify-between h-full gap-2">
                {[65, 72, 58, 81, 69, 74, 63].map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all hover:from-blue-500 hover:to-blue-300"
                         style={{ height: `${value}%` }}>
                    </div>
                    <span className="text-slate-400 text-xs">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-slate-300">Acre-Feet</span>
              </div>
              <span className="text-green-400 font-semibold">-12% vs last week</span>
            </div>
          </div>

          {/* Soil Moisture Levels */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-xl font-bold">Soil Moisture Levels</h3>
              <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-xs font-semibold">LIVE</span>
              </div>
            </div>

            {/* Field Blocks */}
            <div className="space-y-4">
              {[
                { name: 'North Block', moisture: 85, status: 'Optimal' },
                { name: 'South Block', moisture: 72, status: 'Good' },
                { name: 'East Block', moisture: 68, status: 'Monitor' },
                { name: 'West Block', moisture: 91, status: 'Optimal' },
              ].map((field, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{field.name}</span>
                    <span className={`text-sm font-semibold ${
                      field.status === 'Optimal' ? 'text-green-400' :
                      field.status === 'Good' ? 'text-blue-400' : 'text-amber-400'
                    }`}>
                      {field.moisture}% · {field.status}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        field.status === 'Optimal' ? 'bg-gradient-to-r from-green-500 to-green-400' :
                        field.status === 'Good' ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
                        'bg-gradient-to-r from-amber-500 to-amber-400'
                      }`}
                      style={{ width: `${field.moisture}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Model Activity & Weather */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* AI Processing Status */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-white text-xl font-bold mb-6">AI Model Activity</h3>
            <div className="space-y-4">
              {[
                { name: 'Soil Analysis', progress: 78, color: 'blue', status: 'Processing' },
                { name: 'Weather Prediction', progress: 92, color: 'green', status: 'Complete' },
                { name: 'Yield Forecasting', progress: 85, color: 'amber', status: 'Processing' },
                { name: 'Water Optimization', progress: 67, color: 'cyan', status: 'Processing' },
              ].map((model, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-${model.color}-500/20 border border-${model.color}-400/30 rounded-lg flex items-center justify-center`}>
                        <svg className={`w-5 h-5 text-${model.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">{model.name}</p>
                        <p className="text-slate-400 text-xs">{model.status}</p>
                      </div>
                    </div>
                    <span className="text-white font-bold">{model.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-${model.color}-500 to-${model.color}-400 rounded-full animate-pulse`}
                      style={{ width: `${model.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Widget */}
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-white text-xl font-bold mb-4">Current Weather</h3>
            <div className="text-center mb-6">
              <div className="text-6xl mb-2">☀️</div>
              <p className="text-white text-5xl font-bold mb-1">78°F</p>
              <p className="text-blue-200">Partly Cloudy</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Humidity</span>
                <span className="text-white font-semibold">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Wind</span>
                <span className="text-white font-semibold">8 mph</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">ETo</span>
                <span className="text-white font-semibold">0.24 in/day</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <h3 className="text-white text-xl font-bold mb-4">Recent System Alerts</h3>
          <div className="space-y-3">
            {[
              { type: 'success', message: 'North Block irrigation completed successfully', time: '2 hours ago' },
              { type: 'warning', message: 'East Block moisture approaching threshold', time: '5 hours ago' },
              { type: 'info', message: 'Weather forecast updated: Hot and dry conditions expected', time: '8 hours ago' },
              { type: 'success', message: 'AI model training completed with 94% accuracy', time: '1 day ago' },
            ].map((alert, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className={`w-2 h-2 rounded-full ${
                  alert.type === 'success' ? 'bg-green-400' :
                  alert.type === 'warning' ? 'bg-amber-400' : 'bg-blue-400'
                }`}></div>
                <div className="flex-1">
                  <p className="text-white">{alert.message}</p>
                  <p className="text-slate-400 text-sm">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
