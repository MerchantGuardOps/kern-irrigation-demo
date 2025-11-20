'use client';

export default function AnimatedHero() {
  return (
    <>
      {/* Animated Field Background Hero */}
      <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
        {/* Animated Gradient Background - Field Colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 animate-gradient-shift"></div>

        {/* Field Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 95%, rgba(255,255,255,0.1) 95%),
              linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.1) 95%)
            `,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Animated Water Droplets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400/20"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: '-20px',
                animation: `droplet ${Math.random() * 3 + 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* AI Data Flow Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-green-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft"></div>
              <span className="text-green-100 font-medium text-sm md:text-base">
                Powered by 50 Years of Irrigation Intelligence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Professional Irrigation Management for California Tree Nuts
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-green-100 mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Trusted by almond and pistachio growers across Bakersfield and the San Joaquin Valley since 1984.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#contact"
                className="group relative bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 min-h-[48px] w-full sm:w-auto text-center overflow-hidden"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 min-h-[48px] w-full sm:w-auto text-center hover:-translate-y-1"
              >
                Our Services
              </a>
            </div>

            {/* Stats Grid with Animated Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse-number">50+</div>
                <div className="text-green-100 text-sm md:text-base">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse-number" style={{ animationDelay: '0.5s' }}>10K+</div>
                <div className="text-green-100 text-sm md:text-base">Acres Managed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse-number" style={{ animationDelay: '1s' }}>14%</div>
                <div className="text-green-100 text-sm md:text-base">Avg Water Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse-number" style={{ animationDelay: '1.5s' }}>100%</div>
                <div className="text-green-100 text-sm md:text-base">Local & Family Owned</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
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

          {/* EPIC Animated Field Visualization */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 max-w-7xl mx-auto">
            {/* Left: Animated Agricultural Field */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full max-w-lg mx-auto bg-gradient-to-br from-green-800 via-green-700 to-green-900 rounded-3xl p-8 shadow-2xl overflow-hidden" style={{ minHeight: '400px' }}>
                {/* Field Rows Pattern */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`row-${i}`}
                      className="absolute w-full h-2 bg-green-600"
                      style={{
                        top: `${(i + 1) * 11}%`,
                        animation: `shimmer ${3 + i * 0.3}s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>

                {/* Tree Icons - Almond/Pistachio Orchard */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`tree-${i}`}
                    className="absolute"
                    style={{
                      left: `${15 + (i % 4) * 22}%`,
                      top: `${20 + Math.floor(i / 4) * 25}%`,
                    }}
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-green-300 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C9.24 2 7 4.24 7 7c0 1.82.98 3.41 2.44 4.28-.08.23-.14.47-.14.72 0 1.1.9 2 2 2h1v7h-1c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-1v-7h1c1.1 0 2-.9 2-2 0-.25-.06-.49-.14-.72C16.02 10.41 17 8.82 17 7c0-2.76-2.24-5-5-5z"/>
                    </svg>
                  </div>
                ))}

                {/* AI Processing Center - Bottom Center */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-xl shadow-blue-500/50 backdrop-blur-sm border-2 border-blue-300/30 animate-pulse-glow">
                    <div className="text-center">
                      <svg className="w-10 h-10 text-white mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <div className="text-white text-xs font-bold">AI</div>
                    </div>
                  </div>
                </div>

                {/* Field Sensors - Strategically Placed */}
                {/* Top Left - Soil Sensor */}
                <div className="absolute top-6 left-6 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-500 rounded-xl shadow-lg shadow-amber-500/50 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-opacity-90 border-2 border-amber-300/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                    <div className="text-white text-[10px] font-semibold">Soil</div>
                  </div>
                  <div className="absolute inset-0 bg-amber-400 rounded-xl animate-ping opacity-30"></div>
                </div>

                {/* Top Right - Weather Sensor */}
                <div className="absolute top-6 right-6 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/50 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-opacity-90 border-2 border-blue-300/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div className="text-white text-[10px] font-semibold">Weather</div>
                  </div>
                  <div className="absolute inset-0 bg-blue-400 rounded-xl animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Middle Left - Water Sensor */}
                <div className="absolute top-1/2 left-6 transform -translate-y-1/2 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-500 rounded-xl shadow-lg shadow-cyan-500/50 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-opacity-90 border-2 border-cyan-300/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
                    </svg>
                    <div className="text-white text-[10px] font-semibold">Water</div>
                  </div>
                  <div className="absolute inset-0 bg-cyan-400 rounded-xl animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Middle Right - Yield Sensor */}
                <div className="absolute top-1/2 right-6 transform -translate-y-1/2 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/50 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-opacity-90 border-2 border-emerald-300/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div className="text-white text-[10px] font-semibold">Yield</div>
                  </div>
                  <div className="absolute inset-0 bg-emerald-400 rounded-xl animate-ping opacity-30" style={{ animationDelay: '1.5s' }}></div>
                </div>

                {/* Data Flow Lines to AI Center */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="15" y1="10" x2="50" y2="85" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-pulse-flow" />
                  <line x1="85" y1="10" x2="50" y2="85" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-pulse-flow" style={{ animationDelay: '0.3s' }} />
                  <line x1="15" y1="50" x2="50" y2="85" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-pulse-flow" style={{ animationDelay: '0.6s' }} />
                  <line x1="85" y1="50" x2="50" y2="85" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-pulse-flow" style={{ animationDelay: '0.9s' }} />
                </svg>

                {/* Floating Data Particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`data-${i}`}
                    className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 40}%`,
                      animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
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
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white">Real-time field monitoring</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-white">Predictive irrigation schedules</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-white">Water savings optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid with Enhanced Animations */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {/* Connecting Lines Animation */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-amber-500 opacity-30 animate-pulse"></div>

            {/* Feature 1 - Data Collection */}
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-2 border border-white/20 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-blue-500/50">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                {/* Orbiting Dots */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full animate-orbit"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-300 rounded-full animate-orbit" style={{ animationDelay: '1s' }}></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Real-Time Data</h3>
              <p className="text-green-100 leading-relaxed mb-4">
                Weather stations, soil sensors, and satellite imagery continuously monitoring your fields
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2 mb-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-progress" style={{ width: '85%' }}></div>
              </div>

              <div className="flex items-center gap-2 text-blue-300 font-semibold group-hover:gap-4 transition-all">
                <span>Learn more</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Feature 2 - AI Processing (CENTER - HERO CARD) */}
            <div className="group bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 shadow-2xl hover:shadow-green-500/50 transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-2 border-green-400/50 relative overflow-hidden">
              {/* Animated Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Pulsing Glow */}
              <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl animate-pulse-glow"></div>

              <div className="relative mb-6">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border-2 border-white/30 shadow-xl">
                  <svg className="w-12 h-12 text-white animate-pulse-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                {/* Rotating Ring */}
                <div className="absolute inset-0 border-2 border-white/30 rounded-2xl animate-spin-slow"></div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-3">AI Analysis</h3>
              <p className="text-green-50 leading-relaxed mb-4">
                Machine learning models trained on 50 years of historical irrigation patterns and outcomes
              </p>

              {/* AI Confidence Indicator */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-semibold">Model Confidence</span>
                  <span className="text-green-200 text-sm font-bold">94%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-300 to-green-100 rounded-full animate-confidence-fill" style={{ width: '94%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                <span>How it works</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Feature 3 - Smart Recommendations */}
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2 border border-white/20 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-amber-500/50">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {/* Check Animation */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Precise Schedules</h3>
              <p className="text-green-100 leading-relaxed mb-4">
                Weekly irrigation recommendations optimized for your soil type, crop variety, and weather forecast
              </p>

              {/* Efficiency Indicator */}
              <div className="w-full bg-white/10 rounded-full h-2 mb-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full animate-progress" style={{ width: '92%' }}></div>
              </div>

              <div className="flex items-center gap-2 text-amber-300 font-semibold group-hover:gap-4 transition-all">
                <span>See demo</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Enhanced Data Flow Visualization */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <span className="text-blue-300 font-semibold flex items-center gap-2">
                  <span className="w-4 h-4 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></span>
                  Sensors
                </span>
                <svg className="w-6 h-6 text-green-400 animate-pulse-flow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-green-300 font-semibold flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" style={{ animationDelay: '0.3s' }}></span>
                  AI Model
                </span>
                <svg className="w-6 h-6 text-amber-400 animate-pulse-flow" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.3s' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-amber-300 font-semibold flex items-center gap-2">
                  <span className="w-4 h-4 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50" style={{ animationDelay: '0.6s' }}></span>
                  Irrigation
                </span>
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
