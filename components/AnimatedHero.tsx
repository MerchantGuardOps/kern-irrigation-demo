'use client';

export default function AnimatedHero() {
  return (
    <>
      {/* Professional Hero Section */}
      <section className="relative min-h-[700px] md:min-h-[800px] overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Messaging */}
            <div>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/30 rounded-full px-5 py-2 mb-6">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-emerald-300 font-semibold text-sm">Certified Crop Advisors</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                AI-Powered<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Irrigation Intelligence</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                50 years of Kern County field data meets advanced machine learning. Maximize yields, minimize water waste, ensure SGMA compliance.
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium">Real-time soil & weather monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium">Predictive irrigation scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium">10-15% average water savings</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 min-h-[48px] text-center flex items-center justify-center gap-2"
                >
                  <span>Schedule Consultation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="tel:6618093151"
                  className="bg-white/5 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 min-h-[48px] text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(661) 809-3151</span>
                </a>
              </div>
            </div>

            {/* Right: Stats Dashboard */}
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-white font-semibold">Live System Status</span>
                  </div>
                  <span className="text-green-400 text-sm font-medium">All Systems Operational</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/30 rounded-xl p-4">
                    <div className="text-blue-300 text-sm font-medium mb-2">Acres Monitored</div>
                    <div className="text-3xl font-bold text-white">30,442</div>
                    <div className="text-xs text-blue-300 mt-1">↑ 3 California regions</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-400/30 rounded-xl p-4">
                    <div className="text-green-300 text-sm font-medium mb-2">Water Saved</div>
                    <div className="text-3xl font-bold text-white">12.4%</div>
                    <div className="text-xs text-green-300 mt-1">↑ vs industry avg</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-400/30 rounded-xl p-4">
                    <div className="text-amber-300 text-sm font-medium mb-2">Yield Increase</div>
                    <div className="text-3xl font-bold text-white">8.2%</div>
                    <div className="text-xs text-amber-300 mt-1">↑ optimized nutrition</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/30 rounded-xl p-4">
                    <div className="text-purple-300 text-sm font-medium mb-2">Experience</div>
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-xs text-purple-300 mt-1">Years of data</div>
                  </div>
                </div>

                {/* AI Activity Indicator */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-300 text-sm font-medium">AI Model Activity</span>
                    <span className="text-green-400 text-xs">Processing</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-progress" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-xs text-slate-400 w-12">Soil</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full animate-progress" style={{ width: '92%', animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-slate-400 w-12">Weather</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full animate-progress" style={{ width: '85%', animationDelay: '0.4s' }}></div>
                      </div>
                      <span className="text-xs text-slate-400 w-12">Yield</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl shadow-xl border border-green-400/50">
                <div className="text-xs font-medium">SGMA Compliant</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-xl shadow-xl border border-blue-400/50">
                <div className="text-xs font-medium">Since 1984</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* AI Intelligence Teaser Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles Network */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={`network-${i}`}
              className="absolute w-1 h-1 bg-green-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `networkFloat ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Irrigation Intelligence
            </h2>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered decision support system trained on 50 years of proprietary Kern County field data
            </p>
          </div>

          {/* BADASS AI Field Visualization with Data Pulses */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 max-w-7xl mx-auto">
            {/* Left: Animated Field with Data Streams */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full max-w-lg mx-auto bg-gradient-to-br from-green-800 via-green-700 to-green-900 rounded-3xl p-8 shadow-2xl overflow-hidden" style={{ minHeight: '450px' }}>

                {/* Realistic Tree Orchard */}
                {[...Array(20)].map((_, i) => {
                  const row = Math.floor(i / 5);
                  const col = i % 5;
                  return (
                    <div
                      key={`tree-${i}`}
                      className="absolute transition-opacity duration-1000"
                      style={{
                        left: `${10 + col * 18}%`,
                        top: `${15 + row * 20}%`,
                      }}
                    >
                      <svg className="w-10 h-10 md:w-12 md:h-12 text-green-400 opacity-80" viewBox="0 0 64 64" fill="currentColor">
                        <ellipse cx="32" cy="28" rx="14" ry="16" fill="#2d5016" opacity="0.7"/>
                        <ellipse cx="28" cy="24" rx="12" ry="14" fill="#3a6b1f"/>
                        <ellipse cx="36" cy="24" rx="12" ry="14" fill="#3a6b1f"/>
                        <ellipse cx="32" cy="20" rx="10" ry="12" fill="#4a8028"/>
                        <rect x="30" y="36" width="4" height="14" fill="#5d4037" rx="1"/>
                        <rect x="29" y="38" width="6" height="2" fill="#6d4c41" opacity="0.5"/>
                      </svg>
                    </div>
                  );
                })}

                {/* AI Processing Center with Subtle Glow */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-40"></div>
                    <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-2xl backdrop-blur-sm border-2 border-blue-300/50">
                      <div className="text-center">
                        <svg className="w-10 h-10 text-white mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <div className="text-white text-xs font-bold">AI</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Field Sensors with Subtle Indicators */}
                {/* Top Left - Soil Sensor */}
                <div className="absolute top-6 left-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-400 rounded-xl blur-md opacity-30"></div>
                    <div className="relative w-16 h-16 bg-amber-500 rounded-xl shadow-xl flex flex-col items-center justify-center backdrop-blur-sm bg-opacity-95 border-2 border-amber-300/50">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                      </svg>
                      <div className="text-white text-[10px] font-semibold mt-1">Soil</div>
                    </div>
                  </div>
                </div>

                {/* Top Right - Weather Sensor */}
                <div className="absolute top-6 right-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400 rounded-xl blur-md opacity-30"></div>
                    <div className="relative w-16 h-16 bg-blue-500 rounded-xl shadow-xl flex flex-col items-center justify-center backdrop-blur-sm bg-opacity-95 border-2 border-blue-300/50">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                      <div className="text-white text-[10px] font-semibold mt-1">Weather</div>
                    </div>
                  </div>
                </div>

                {/* Middle Left - Water Sensor */}
                <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-md opacity-30"></div>
                    <div className="relative w-16 h-16 bg-cyan-500 rounded-xl shadow-xl flex flex-col items-center justify-center backdrop-blur-sm bg-opacity-95 border-2 border-cyan-300/50">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
                      </svg>
                      <div className="text-white text-[10px] font-semibold mt-1">Water</div>
                    </div>
                  </div>
                </div>

                {/* Middle Right - Yield Sensor */}
                <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-400 rounded-xl blur-md opacity-30"></div>
                    <div className="relative w-16 h-16 bg-emerald-500 rounded-xl shadow-xl flex flex-col items-center justify-center backdrop-blur-sm bg-opacity-95 border-2 border-emerald-300/50">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="text-white text-[10px] font-semibold mt-1">Yield</div>
                    </div>
                  </div>
                </div>

                {/* Animated Data Streams - Smooth pulses along lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Static connection lines */}
                  <line x1="15" y1="10" x2="50" y2="85" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                  <line x1="85" y1="10" x2="50" y2="85" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                  <line x1="15" y1="50" x2="50" y2="85" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="0.5" />
                  <line x1="85" y1="50" x2="50" y2="85" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.5" />

                  {/* Animated data pulses traveling along lines */}
                  <circle r="1.5" fill="#3B82F6" opacity="0.8">
                    <animateMotion dur="3s" repeatCount="indefinite">
                      <mpath href="#path1"/>
                    </animateMotion>
                  </circle>
                  <circle r="1.5" fill="#3B82F6" opacity="0.8">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                      <mpath href="#path2"/>
                    </animateMotion>
                  </circle>
                  <circle r="1.5" fill="#06B6D4" opacity="0.8">
                    <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.5s">
                      <mpath href="#path3"/>
                    </animateMotion>
                  </circle>
                  <circle r="1.5" fill="#10B981" opacity="0.8">
                    <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.5s">
                      <mpath href="#path4"/>
                    </animateMotion>
                  </circle>

                  {/* Define paths for motion */}
                  <path id="path1" d="M15,10 L50,85" fill="none" />
                  <path id="path2" d="M85,10 L50,85" fill="none" />
                  <path id="path3" d="M15,50 L50,85" fill="none" />
                  <path id="path4" d="M85,50 L50,85" fill="none" />
                </svg>
              </div>
            </div>

            {/* Right: System Description */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                50 Years of Irrigation Data<br />
                <span className="text-green-400">Powered by AI</span>
              </h3>
              <p className="text-lg text-green-100 mb-8 leading-relaxed">
                Our AI continuously analyzes data from soil sensors, weather stations, satellite imagery, and historical yields to provide precise irrigation recommendations for your specific field conditions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white">Real-time field monitoring</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-white">Predictive irrigation schedules</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="text-white">Water savings optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Feature Grid - No Animations */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">

            {/* Feature 1 - Data Collection */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Real-Time Data</h3>
              <p className="text-green-100 leading-relaxed mb-4">
                Weather stations, soil sensors, and satellite imagery continuously monitoring your fields
              </p>
              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex items-center gap-2 text-blue-300 font-semibold">
                <span>Learn more</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Feature 2 - AI Analysis */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 shadow-2xl border-2 border-green-400/50">
              <div className="mb-6">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30 shadow-xl">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">AI Analysis</h3>
              <p className="text-green-50 leading-relaxed mb-4">
                Machine learning models trained on 50 years of historical irrigation patterns and outcomes
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-semibold">Model Confidence</span>
                  <span className="text-green-200 text-sm font-bold">94%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="h-full bg-gradient-to-r from-green-300 to-green-100 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold">
                <span>How it works</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Feature 3 - Precise Schedules */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Precise Schedules</h3>
              <p className="text-green-100 leading-relaxed mb-4">
                Weekly irrigation recommendations optimized for your soil type, crop variety, and weather forecast
              </p>
              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <span>See demo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Styles for Custom Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes droplet {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          50% {
            transform: translate(20px, -20px);
            opacity: 0.8;
          }
        }

        @keyframes networkFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(30px, -30px) scale(1.5);
            opacity: 0.6;
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(30px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(30px) rotate(-360deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes confidence-fill {
          0% {
            width: 0%;
          }
          100% {
            width: 94%;
          }
        }

        @keyframes pulse-flow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes pulse-number {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }

        .animate-pulse-number {
          animation: pulse-number 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-orbit {
          animation: orbit 3s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-progress {
          animation: progress 2s ease-out forwards;
        }

        .animate-confidence-fill {
          animation: confidence-fill 2s ease-out forwards;
        }

        .animate-pulse-flow {
          animation: pulse-flow 1.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-shift,
          .animate-fade-in-up,
          .animate-pulse-soft,
          .animate-pulse-number,
          .animate-float,
          .animate-spin-slow,
          .animate-orbit,
          .animate-pulse-glow,
          .animate-progress,
          .animate-confidence-fill,
          .animate-pulse-flow {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
