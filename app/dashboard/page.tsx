'use client';

import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedBlock, setSelectedBlock] = useState('North Block');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const orchardBlocks = [
    { name: 'North Block', acres: 120, moisture: 38, swp: -12.4, status: 'optimal', crop: 'Almonds', stage: 'Hull Split' },
    { name: 'South Block', acres: 85, moisture: 32, swp: -15.8, status: 'monitor', crop: 'Pistachios', stage: 'Kernel Fill' },
    { name: 'East Block', acres: 95, moisture: 42, swp: -10.2, status: 'optimal', crop: 'Almonds', stage: 'Nut Development' },
    { name: 'West Block', acres: 110, moisture: 28, swp: -18.6, status: 'alert', crop: 'Pistachios', stage: 'Post-Harvest' },
  ];

  const selectedBlockData = orchardBlocks.find(b => b.name === selectedBlock) || orchardBlocks[0];

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      {/* Sunlight-Optimized Header - Pure White Background */}
      <header style={{
        background: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
        borderBottom: '3px solid #1B5E20',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 style={{ color: '#FFFFFF', fontSize: '28px', fontWeight: '700', lineHeight: '1.2' }}>
                Kern Irrigation AI Dashboard
              </h1>
              <p style={{ color: '#E8F5E9', fontSize: '14px', fontWeight: '500' }}>
                Real-Time Precision Irrigation Intelligence
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '12px',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  background: '#4CAF50',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px #4CAF50',
                  animation: 'pulse 2s infinite'
                }}></div>
                <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '600' }}>
                  All Systems Operational
                </span>
              </div>
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '12px',
                padding: '12px 20px',
                fontFamily: 'monospace',
                fontSize: '16px',
                fontWeight: '700',
                color: '#FFFFFF'
              }}>
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6" style={{ background: '#FFFFFF' }}>

        {/* Hero Metrics - High Contrast for Sunlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

          {/* Water Savings */}
          <div style={{
            background: '#FFFFFF',
            border: '3px solid #005599',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <div style={{
                width: '56px',
                height: '56px',
                background: '#005599',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg style={{ width: '32px', height: '32px', color: '#FFFFFF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
                </svg>
              </div>
              <div style={{
                background: '#4CAF50',
                borderRadius: '8px',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <svg style={{ width: '16px', height: '16px', color: '#FFFFFF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '700' }}>28%</span>
              </div>
            </div>
            <h3 style={{ color: '#121212', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
              WATER SAVINGS
            </h3>
            <p style={{ color: '#000000', fontSize: '40px', fontWeight: '700', lineHeight: '1', marginBottom: '4px' }}>
              26.4%
            </p>
            <p style={{ color: '#546E7A', fontSize: '14px', fontWeight: '500' }}>
              vs. traditional irrigation
            </p>
          </div>

          {/* Yield Increase */}
          <div style={{
            background: '#FFFFFF',
            border: '3px solid #FF6D00',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <div style={{
                width: '56px',
                height: '56px',
                background: '#FF6D00',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg style={{ width: '32px', height: '32px', color: '#FFFFFF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div style={{
                background: '#4CAF50',
                borderRadius: '8px',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <svg style={{ width: '16px', height: '16px', color: '#FFFFFF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '700' }}>18%</span>
              </div>
            </div>
            <h3 style={{ color: '#121212', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
              YIELD INCREASE
            </h3>
            <p style={{ color: '#000000', fontSize: '40px', fontWeight: '700', lineHeight: '1', marginBottom: '4px' }}>
              19.2%
            </p>
            <p style={{ color: '#546E7A', fontSize: '14px', fontWeight: '500' }}>
              optimized nutrition
            </p>
          </div>

          {/* AI Model Confidence */}
          <div style={{
            background: '#FFFFFF',
            border: '3px solid #2E7D32',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <div style={{
                width: '56px',
                height: '56px',
                background: '#2E7D32',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg style={{ width: '32px', height: '32px', color: '#FFFFFF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div style={{
                background: '#4CAF50',
                borderRadius: '8px',
                padding: '6px 12px'
              }}>
                <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '700' }}>XGBoost</span>
              </div>
            </div>
            <h3 style={{ color: '#121212', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
              AI CONFIDENCE
            </h3>
            <p style={{ color: '#000000', fontSize: '40px', fontWeight: '700', lineHeight: '1', marginBottom: '4px' }}>
              94.3%
            </p>
            <p style={{ color: '#546E7A', fontSize: '14px', fontWeight: '500' }}>
              model accuracy (R² &gt; 0.90)
            </p>
          </div>

          {/* ROI Tracker */}
          <div style={{
            background: '#FFFFFF',
            border: '3px solid #1B5E20',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <div style={{
                width: '56px',
                height: '56px',
                background: '#1B5E20',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: '#FFFFFF', fontSize: '28px', fontWeight: '700' }}>$</span>
              </div>
              <div style={{
                background: '#4CAF50',
                borderRadius: '8px',
                padding: '6px 12px'
              }}>
                <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '700' }}>8 mo ROI</span>
              </div>
            </div>
            <h3 style={{ color: '#121212', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
              COST SAVINGS
            </h3>
            <p style={{ color: '#000000', fontSize: '40px', fontWeight: '700', lineHeight: '1', marginBottom: '4px' }}>
              $8.2K
            </p>
            <p style={{ color: '#546E7A', fontSize: '14px', fontWeight: '500' }}>
              per 100 acres/season
            </p>
          </div>
        </div>

        {/* Map-Centric Interface & Orchard Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

          {/* Left: Orchard Map */}
          <div className="lg:col-span-2" style={{
            background: '#FFFFFF',
            border: '3px solid #121212',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)'
          }}>
            <h3 style={{ color: '#000000', fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>
              Orchard Block Status Map
            </h3>

            {/* Simple Grid Map */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {orchardBlocks.map((block) => (
                <button
                  key={block.name}
                  onClick={() => setSelectedBlock(block.name)}
                  style={{
                    background: '#FFFFFF',
                    border: `4px solid ${
                      block.status === 'optimal' ? '#2E7D32' :
                      block.status === 'monitor' ? '#FF6D00' : '#D50000'
                    }`,
                    borderRadius: '12px',
                    padding: '20px',
                    cursor: 'pointer',
                    boxShadow: selectedBlock === block.name ? '0 4px 12px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.15)',
                    transform: selectedBlock === block.name ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.2s'
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ color: '#000000', fontSize: '18px', fontWeight: '700' }}>
                      {block.name}
                    </span>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      background: block.status === 'optimal' ? '#2E7D32' :
                                 block.status === 'monitor' ? '#FF6D00' : '#D50000',
                      borderRadius: '50%',
                      boxShadow: `0 0 12px ${
                        block.status === 'optimal' ? '#2E7D32' :
                        block.status === 'monitor' ? '#FF6D00' : '#D50000'
                      }`
                    }}></div>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ color: '#546E7A', fontSize: '14px', marginBottom: '4px' }}>
                      {block.crop} · {block.acres} acres
                    </p>
                    <p style={{ color: '#000000', fontSize: '24px', fontWeight: '700' }}>
                      {block.moisture}%
                    </p>
                    <p style={{ color: '#546E7A', fontSize: '12px' }}>
                      Soil Moisture
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div style={{ width: '16px', height: '16px', background: '#2E7D32', borderRadius: '50%' }}></div>
                <span style={{ color: '#121212', fontSize: '14px', fontWeight: '600' }}>Optimal</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ width: '16px', height: '16px', background: '#FF6D00', borderRadius: '50%' }}></div>
                <span style={{ color: '#121212', fontSize: '14px', fontWeight: '600' }}>Monitor</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ width: '16px', height: '16px', background: '#D50000', borderRadius: '50%' }}></div>
                <span style={{ color: '#121212', fontSize: '14px', fontWeight: '600' }}>Alert</span>
              </div>
            </div>
          </div>

          {/* Right: Selected Block Details - FUEL GAUGE PATTERN */}
          <div style={{
            background: '#FFFFFF',
            border: '3px solid #121212',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)'
          }}>
            <h3 style={{ color: '#000000', fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
              {selectedBlockData.name}
            </h3>
            <p style={{ color: '#546E7A', fontSize: '14px', marginBottom: '20px' }}>
              {selectedBlockData.crop} · {selectedBlockData.stage}
            </p>

            {/* FUEL GAUGE - Soil Moisture */}
            <div style={{ marginBottom: '24px' }}>
              <p style={{ color: '#121212', fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
                SOIL MOISTURE LEVEL
              </p>
              <div style={{
                position: 'relative',
                height: '240px',
                background: 'linear-gradient(180deg, #E8F5E9 0%, #4CAF50 50%, #1B5E20 100%)',
                border: '3px solid #121212',
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                {/* Current Level Indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: `${selectedBlockData.moisture}%`,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: '#000000',
                  zIndex: 2
                }}>
                  <div style={{
                    position: 'absolute',
                    right: '8px',
                    top: '-16px',
                    background: '#000000',
                    color: '#FFFFFF',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontSize: '18px',
                    fontWeight: '700',
                    whiteSpace: 'nowrap'
                  }}>
                    {selectedBlockData.moisture}%
                  </div>
                </div>

                {/* Management Zone (30-40%) */}
                <div style={{
                  position: 'absolute',
                  bottom: '30%',
                  left: 0,
                  right: 0,
                  height: '10%',
                  background: 'rgba(255,255,255,0.3)',
                  border: '2px dashed #FFFFFF',
                  zIndex: 1
                }}></div>

                {/* Labels */}
                <div style={{ position: 'absolute', top: '8px', left: '8px', color: '#FFFFFF', fontSize: '12px', fontWeight: '700' }}>
                  Field Capacity (100%)
                </div>
                <div style={{ position: 'absolute', bottom: '8px', left: '8px', color: '#FFFFFF', fontSize: '12px', fontWeight: '700' }}>
                  Wilting Point (0%)
                </div>
              </div>
            </div>

            {/* SWP Gauge */}
            <div>
              <p style={{ color: '#121212', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                STEM WATER POTENTIAL (SWP)
              </p>
              <p style={{ color: '#000000', fontSize: '32px', fontWeight: '700', lineHeight: '1' }}>
                {selectedBlockData.swp} Bars
              </p>
              <p style={{ color: '#546E7A', fontSize: '12px', marginTop: '4px' }}>
                Target: -15 Bars ({selectedBlockData.stage})
              </p>

              {/* SWP Status Bar */}
              <div style={{
                marginTop: '12px',
                height: '12px',
                background: '#F5F5F5',
                border: '2px solid #121212',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${Math.abs(selectedBlockData.swp / 20 * 100)}%`,
                  height: '100%',
                  background: Math.abs(selectedBlockData.swp) < 15 ? '#2E7D32' :
                             Math.abs(selectedBlockData.swp) < 18 ? '#FF6D00' : '#D50000'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Model Stack & SHAP Explainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* PPO Deep RL Agent Status */}
          <div style={{
            background: '#FFFFFF',
            border: '3px solid #121212',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)'
          }}>
            <h3 style={{ color: '#000000', fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>
              AI Model Activity (Live)
            </h3>

            <div className="space-y-4">
              {[
                { name: 'PPO Deep RL Agent', desc: 'Irrigation decision engine', progress: 94, color: '#2E7D32' },
                { name: 'XGBoost Regressor', desc: 'Virtual SWP sensor', progress: 92, color: '#005599' },
                { name: 'Bi-LSTM Network', desc: 'Data imputation (temporal)', progress: 88, color: '#FF6D00' },
                { name: 'AquaCrop-OSPy', desc: 'Digital twin simulator', progress: 96, color: '#1B5E20' },
              ].map((model, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p style={{ color: '#000000', fontSize: '16px', fontWeight: '700' }}>
                        {model.name}
                      </p>
                      <p style={{ color: '#546E7A', fontSize: '12px' }}>
                        {model.desc}
                      </p>
                    </div>
                    <span style={{ color: '#000000', fontSize: '20px', fontWeight: '700' }}>
                      {model.progress}%
                    </span>
                  </div>
                  <div style={{
                    height: '12px',
                    background: '#F5F5F5',
                    border: '2px solid #121212',
                    borderRadius: '6px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${model.progress}%`,
                      height: '100%',
                      background: model.color,
                      transition: 'width 1s ease-in-out'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SHAP Explainability - Feature Attribution */}
          <div style={{
            background: '#FFFFFF',
            border: '3px solid #121212',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)'
          }}>
            <h3 style={{ color: '#000000', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
              Today's Recommendation Explained
            </h3>
            <p style={{ color: '#546E7A', fontSize: '14px', marginBottom: '16px' }}>
              SHAP Feature Attribution ({selectedBlockData.name})
            </p>

            {/* Irrigation Recommendation */}
            <div style={{
              background: '#E8F5E9',
              border: '3px solid #2E7D32',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '20px'
            }}>
              <p style={{ color: '#1B5E20', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
                RECOMMENDED ACTION
              </p>
              <p style={{ color: '#000000', fontSize: '32px', fontWeight: '700' }}>
                Apply 2.4 inches
              </p>
              <p style={{ color: '#2E7D32', fontSize: '14px' }}>
                Next irrigation: Tomorrow at 5:00 AM
              </p>
            </div>

            {/* SHAP Values */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span style={{ color: '#121212', fontSize: '14px', fontWeight: '600' }}>
                    High VPD Forecast
                  </span>
                  <span style={{ color: '#4CAF50', fontSize: '14px', fontWeight: '700' }}>
                    +0.8 in
                  </span>
                </div>
                <div style={{ height: '8px', background: '#F5F5F5', border: '2px solid #E0E0E0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '80%', height: '100%', background: '#4CAF50' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span style={{ color: '#121212', fontSize: '14px', fontWeight: '600' }}>
                    Hull Split Stage (RDI)
                  </span>
                  <span style={{ color: '#D50000', fontSize: '14px', fontWeight: '700' }}>
                    -0.4 in
                  </span>
                </div>
                <div style={{ height: '8px', background: '#F5F5F5', border: '2px solid #E0E0E0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '40%', height: '100%', background: '#D50000' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span style={{ color: '#121212', fontSize: '14px', fontWeight: '600' }}>
                    SGMA Water Budget
                  </span>
                  <span style={{ color: '#FF6D00', fontSize: '14px', fontWeight: '700' }}>
                    -0.2 in
                  </span>
                </div>
                <div style={{ height: '8px', background: '#F5F5F5', border: '2px solid #E0E0E0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '20%', height: '100%', background: '#FF6D00' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Water Budget & SGMA Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

          {/* SGMA Water Allocation Tracker */}
          <div className="lg:col-span-2" style={{
            background: '#FFFFFF',
            border: '3px solid #121212',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ color: '#000000', fontSize: '20px', fontWeight: '700' }}>
                SGMA Water Budget (2025 Season)
              </h3>
              <div style={{
                background: '#2E7D32',
                color: '#FFFFFF',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '700'
              }}>
                COMPLIANT
              </div>
            </div>

            {/* Water Budget Bar */}
            <div style={{ marginBottom: '20px' }}>
              <div className="flex items-center justify-between mb-2">
                <span style={{ color: '#121212', fontSize: '16px', fontWeight: '600' }}>
                  Seasonal Water Use: 3,242 acre-feet
                </span>
                <span style={{ color: '#121212', fontSize: '16px', fontWeight: '600' }}>
                  Allocation: 4,100 acre-feet
                </span>
              </div>
              <div style={{
                height: '32px',
                background: '#F5F5F5',
                border: '3px solid #121212',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  width: '79%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #2E7D32 0%, #4CAF50 100%)'
                }}></div>
                <span style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '700'
                }}>
                  79% Used · 858 acre-feet remaining
                </span>
              </div>
            </div>

            {/* Projected Days Remaining */}
            <div className="grid grid-cols-3 gap-4">
              <div style={{
                background: '#E8F5E9',
                border: '2px solid #2E7D32',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <p style={{ color: '#1B5E20', fontSize: '32px', fontWeight: '700' }}>
                  67
                </p>
                <p style={{ color: '#2E7D32', fontSize: '14px', fontWeight: '600' }}>
                  Days Remaining
                </p>
              </div>
              <div style={{
                background: '#FFF3E0',
                border: '2px solid #FF6D00',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <p style={{ color: '#E65100', fontSize: '32px', fontWeight: '700' }}>
                  $42K
                </p>
                <p style={{ color: '#FF6D00', fontSize: '14px', fontWeight: '600' }}>
                  Water Cost Saved
                </p>
              </div>
              <div style={{
                background: '#E3F2FD',
                border: '2px solid #005599',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <p style={{ color: '#01579B', fontSize: '32px', fontWeight: '700' }}>
                  3.2:1
                </p>
                <p style={{ color: '#005599', fontSize: '14px', fontWeight: '600' }}>
                  ROI Ratio
                </p>
              </div>
            </div>
          </div>

          {/* Current Weather + ETo */}
          <div style={{
            background: 'linear-gradient(135deg, #01579B 0%, #0277BD 100%)',
            border: '3px solid #01579B',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
            color: '#FFFFFF'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
              Current Conditions
            </h3>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '72px', marginBottom: '8px' }}>☀️</div>
              <p style={{ fontSize: '48px', fontWeight: '700', marginBottom: '4px' }}>
                82°F
              </p>
              <p style={{ fontSize: '16px', opacity: 0.9 }}>
                Partly Cloudy · Kern County
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span style={{ fontSize: '14px', fontWeight: '600' }}>ETo (FAO-56)</span>
                <span style={{ fontSize: '18px', fontWeight: '700' }}>0.28 in/day</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ fontSize: '14px', fontWeight: '600' }}>VPD</span>
                <span style={{ fontSize: '18px', fontWeight: '700' }}>2.4 kPa</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Wind</span>
                <span style={{ fontSize: '18px', fontWeight: '700' }}>6 mph NW</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Humidity</span>
                <span style={{ fontSize: '18px', fontWeight: '700' }}>38%</span>
              </div>
            </div>
          </div>
        </div>

        {/* System Alerts */}
        <div style={{
          background: '#FFFFFF',
          border: '3px solid #121212',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 6px 16px rgba(0,0,0,0.25)'
        }}>
          <h3 style={{ color: '#000000', fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>
            Recent System Alerts
          </h3>
          <div className="space-y-3">
            {[
              { type: 'success', msg: 'North Block irrigation completed successfully (2.4 inches applied)', time: '2 hours ago', icon: '✓' },
              { type: 'warning', msg: 'West Block approaching SWP threshold (-18.6 Bars)', time: '5 hours ago', icon: '⚠' },
              { type: 'info', msg: 'PPO Agent retrained with latest field data (R² improved to 0.943)', time: '1 day ago', icon: 'ℹ' },
              { type: 'success', msg: 'SGMA compliance verified - 21% below allocation cap', time: '1 day ago', icon: '✓' },
            ].map((alert, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                border: `3px solid ${
                  alert.type === 'success' ? '#2E7D32' :
                  alert.type === 'warning' ? '#FF6D00' : '#005599'
                }`,
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: alert.type === 'success' ? '#2E7D32' :
                             alert.type === 'warning' ? '#FF6D00' : '#005599',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  flexShrink: 0
                }}>
                  {alert.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#000000', fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>
                    {alert.msg}
                  </p>
                  <p style={{ color: '#546E7A', fontSize: '14px' }}>
                    {alert.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
