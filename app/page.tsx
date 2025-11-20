import Link from 'next/link';
import AnimatedHero from '@/components/AnimatedHero';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-optimized header with 48x48px touch targets */}
      <header className="bg-gradient-to-r from-green-700 to-green-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Kern Irrigation Systems</h1>
              <p className="text-green-100 text-sm md:text-base">50+ Years Serving California Agriculture</p>
            </div>
            <a
              href="tel:6618093151"
              className="bg-white text-green-700 px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center text-sm md:text-base"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* BADASS Animated Hero with AI Intelligence */}
      <AnimatedHero />

      {/* Stats Section - REMOVED (now in hero) */}
      <section className="py-0 hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600 text-sm md:text-base">Acres Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">14%</div>
              <div className="text-gray-600 text-sm md:text-base">Avg Water Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm md:text-base">Local & Family Owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive irrigation management for almonds, pistachios, and tree nut operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 - Irrigation Scheduling */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Irrigation Scheduling</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Scientific irrigation scheduling programs with weekly soil depletion reporting. Data-driven decisions for optimal water use.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Weekly soil depletion reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Water needs analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Crop demand assessment</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 - Fertility Management */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Fertility Management</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Custom nutrient management programs and crop amendment strategies to maintain plant and soil health.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Custom nutrient programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Crop amendment strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Soil & plant health maintenance</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 - System Evaluations */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">System Evaluations</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Comprehensive irrigation system assessments to evaluate performance and identify optimization opportunities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Performance evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Efficiency optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>System diagnostics</span>
                </li>
              </ul>
            </div>

            {/* Service Card 4 - System Designs */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Weather Monitoring</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Real-time weather data and forecasts specific to Kern County growing conditions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>CIMIS station integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Frost & heat wave alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>7-day ETo forecasting</span>
                </li>
              </ul>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">SGMA Compliance</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Documentation and reporting to help you meet California's Sustainable Groundwater Management Act requirements.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Water usage tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Compliance reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Water efficiency audits</span>
                </li>
              </ul>
            </div>

            {/* Service Card 6 - Soil Moisture Monitoring */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Soil Moisture Monitoring</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Professional soil moisture probe installation and monitoring equipment setup for precise data collection.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Professional probe installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Monitoring equipment setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Data collection systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact on California Agriculture</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Delivering measurable results across 30,000+ acres of California farmland
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">30K+</div>
              <div className="text-green-100 font-semibold text-lg mb-2">Acres Under Management</div>
              <p className="text-green-200 text-sm">Across San Joaquin Valley, Ventura County & Imperial Valley</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">10-15%</div>
              <div className="text-green-100 font-semibold text-lg mb-2">Average Water Savings</div>
              <p className="text-green-200 text-sm">Through precision irrigation scheduling & monitoring</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">40+</div>
              <div className="text-green-100 font-semibold text-lg mb-2">Years of Field Data</div>
              <p className="text-green-200 text-sm">Historical irrigation intelligence since 1984</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">100%</div>
              <div className="text-green-100 font-semibold text-lg mb-2">SGMA Compliance</div>
              <p className="text-green-200 text-sm">Meeting California's groundwater sustainability goals</p>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">CCAs</div>
              <div className="text-green-100 text-sm">Certified Crop Advisors on Staff</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">6+</div>
              <div className="text-green-100 text-sm">Crop Types Managed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Weekly</div>
              <div className="text-green-100 text-sm">Soil Depletion Reporting</div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>Since 1984</strong>, Kern Irrigation Systems has been helping California farmers make informed irrigation and fertilization decisions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              As California agriculture has evolved, we've adapted while staying true to our original mission: providing service that helps produce large yields and high-quality fruit in the most agronomic and cost-effective way.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-green-900 font-semibold">Certified Crop Advisors on Staff</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">40+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">30K+</div>
              <div className="text-gray-600 font-medium">Acres Managed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600 font-medium">California Regions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Local & Family Owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KIS Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Growers Choose KIS</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by some of the biggest and most established companies in California agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Deep knowledge of San Joaquin Valley, Ventura County, and Imperial Valley microclimates, soil types, and growing conditions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Scientific Approach</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Certified Crop Advisors using data-driven analysis and weekly reporting to optimize every decision.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                40+ years of delivering increased yields, improved quality, and cost-effective solutions for commercial growers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crops We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Crops We Specialize In</h2>
            <p className="text-lg text-gray-600">Expert irrigation and fertility management for California's high-value crops</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Citrus */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Citrus</h3>
              <p className="text-gray-600 text-sm mb-4">Our specialty crop with deep expertise in California citrus production</p>
            </div>

            {/* Nuts */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Nuts</h3>
              <p className="text-gray-600 text-sm mb-3">Comprehensive management for:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Pistachios</li>
                <li>• Almonds</li>
                <li>• Pecans</li>
                <li>• Walnuts</li>
              </ul>
            </div>

            {/* Stone Fruits */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Stone Fruits</h3>
              <p className="text-gray-600 text-sm mb-3">Expert care for:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Peaches</li>
                <li>• Plums</li>
                <li>• Nectarines</li>
                <li>• Apricots</li>
              </ul>
            </div>

            {/* Grapes */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Grapes</h3>
              <p className="text-gray-600 text-sm mb-3">Specialized programs for:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Wine grapes</li>
                <li>• Table grapes</li>
              </ul>
            </div>

            {/* Avocados */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Avocados</h3>
              <p className="text-gray-600 text-sm">Premium irrigation management for California avocado groves</p>
            </div>

            {/* Pomegranates */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 shadow-lg border border-red-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pomegranates</h3>
              <p className="text-gray-600 text-sm">Specialized scheduling for emerging California pomegranate operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Ready to optimize your irrigation? Let's talk about your operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <a href="tel:6618093151" className="text-green-600 hover:text-green-700 text-lg">(661) 809-3151</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a href="mailto:info@kisag.co" className="text-blue-600 hover:text-blue-700">info@kisag.co</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">2100 Old Farm Road<br />Bakersfield, CA 93312</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Service Areas</div>
                      <div className="text-gray-600">San Joaquin Valley<br />Ventura County<br />Imperial Valley</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Schedule a Consultation</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Call us to schedule a free initial consultation. We'll discuss your operation and how we can help optimize your irrigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Contact Form Placeholder */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Acres</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                    placeholder="Size of operation"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                    placeholder="Tell us about your irrigation needs..."
                  />
                </div>
                <button className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors min-h-[48px] text-base">
                  Send Message
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Or call us directly at (661) 809-3151
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kern Irrigation Systems</h3>
              <p className="text-gray-400 leading-relaxed">
                Professional irrigation management for California tree nut growers since 1984.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="tel:6618093151" className="hover:text-white transition-colors">Call Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Service Area</h4>
              <p className="text-gray-400">
                Bakersfield<br />
                San Joaquin Valley<br />
                Kern County, CA
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Kern Irrigation Systems. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-500">
              Powered by 50+ years of irrigation intelligence
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Call Button - Sticky Bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:hidden shadow-lg z-50">
        <a
          href="tel:6618093151"
          className="block w-full bg-green-600 text-white text-center px-6 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors min-h-[48px] flex items-center justify-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call (661) 809-3151
        </a>
      </div>
    </div>
  );
}
