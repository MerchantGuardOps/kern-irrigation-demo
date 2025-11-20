import Link from 'next/link';
import AnimatedHero from '@/components/AnimatedHero';

export default function AIDemo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
              <Link href="/">
                <img src="/kern-logo.jpg" alt="Kern Irrigation Scheduling" className="h-16 md:h-20 w-auto object-contain cursor-pointer" />
              </Link>
              <div className="hidden lg:block border-l-2 border-white/30 pl-4">
                <p className="text-green-100 text-xs uppercase tracking-wider font-semibold">AI Demo</p>
              </div>
            </div>
            <a
              href="tel:6618093151"
              className="bg-white text-green-700 px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center text-sm md:text-base flex-shrink-0"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* AI-Powered Hero with Live Dashboard */}
      <AnimatedHero />

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to See AI-Powered Irrigation in Action?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a consultation to learn how our AI system can help your operation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6618093151"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              (661) 809-3151
            </a>
            <Link
              href="/"
              className="bg-white text-green-700 border-2 border-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition-all duration-300"
            >
              Back to Main Site
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
