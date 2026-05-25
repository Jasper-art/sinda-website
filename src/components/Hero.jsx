export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16"
      style={{
        background: 'linear-gradient(135deg, #071d47 0%, #0A2A66 50%, #0d3a7a 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left: Text */}
          <div>
            <p className="text-[#22C55E] font-semibold text-base tracking-widest uppercase mb-3">
              Fast • Affordable • Reliable
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              AI Digital & Tech <br />
              <span className="text-[#22C55E]">Services Hub</span>
            </h1>
            <p className="text-gray-300 text-base mb-2">
              Professional solutions for documents, business, phones and tech support.
            </p>
            <p className="text-[#22C55E] font-semibold text-lg italic mb-8">
              We solve it. You succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://wa.me/260777298220"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.849L.057 23.5l5.806-1.522A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.368l-.36-.214-3.716.975.99-3.618-.234-.373A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="#services"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-[#0A2A66] font-semibold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5"
              >
                View Services
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              0777 298 220
            </div>
          </div>

          {/* Right: Image with floating badges */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-lg">

              {/* Floating badge top-left */}
              <div className="absolute -top-4 -left-4 z-10 bg-white rounded-xl px-3 py-2 shadow-xl flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <div>
                  <div className="text-[10px] text-gray-400 leading-none">Response</div>
                  <div className="text-xs font-bold text-[#0A2A66] leading-none">Fast & Reliable</div>
                </div>
              </div>

              {/* Floating badge bottom-right */}
              <div className="absolute -bottom-4 -right-4 z-10 bg-[#22C55E] rounded-xl px-3 py-2 shadow-xl flex items-center gap-2">
                <span className="text-lg">✓</span>
                <div>
                  <div className="text-[10px] text-white/80 leading-none">Clients</div>
                  <div className="text-xs font-bold text-white leading-none">100+ Served</div>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                    alt="AI Digital Tech Services in Zambia - professional working on laptop"
                    loading="eager"
                    className="w-full object-cover h-72"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-16"
                    style={{ background: 'linear-gradient(to top, #0A2A66, transparent)' }}
                  />
                </div>

                <div className="grid grid-cols-4 gap-2 mt-4">
                  {[
                    { icon: '📄', label: 'Document' },
                    { icon: '📊', label: 'Excel' },
                    { icon: '📱', label: 'Phone' },
                    { icon: '🔧', label: 'Tech' },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="bg-white/15 rounded-lg p-2 text-center transition-transform hover:-translate-y-1 cursor-default"
                    >
                      <div className="text-xl">{item.icon}</div>
                      <div className="text-white text-[10px] font-medium mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}