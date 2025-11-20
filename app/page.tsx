export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Company Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Kern Irrigation Systems
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-green-100 mb-8">
          Professional Irrigation Management for California Tree Nuts
        </p>

        {/* Coming Soon */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            New Website Coming Soon
          </h2>
          <p className="text-lg text-green-100 mb-6">
            We're upgrading our online presence. Stay tuned for something special.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-100 font-medium">Under Construction</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-green-100">
          <p className="text-lg">
            <span className="font-semibold">Serving:</span> Bakersfield & San Joaquin Valley
          </p>
          <p className="text-lg">
            <span className="font-semibold">Specializing in:</span> Almonds, Pistachios & Tree Nut Irrigation
          </p>
          <p className="text-lg">
            <span className="font-semibold">Experience:</span> 50+ Years of Field Data & Expertise
          </p>
        </div>

        {/* Subtle AI Teaser */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-green-200 italic">
            Powered by decades of irrigation intelligence
          </p>
        </div>
      </div>
    </div>
  );
}
