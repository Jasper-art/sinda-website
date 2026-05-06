export default function Footer() {
  return (
    <>
      {/* WhatsApp CTA Banner */}
      <section id="contact" className="bg-[#22C55E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-[#22C55E]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.849L.057 23.5l5.806-1.522A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.368l-.36-.214-3.716.975.99-3.618-.234-.373A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
              </div>
              <div>
                <p className="text-white/80 text-sm">Need Help or Have a Question?</p>
                <h3 className="text-white font-bold text-xl">Let's Chat on WhatsApp</h3>
                <p className="text-white/70 text-sm">We are ready to assist you.</p>
              </div>
            </div>
            <a
              href="https://wa.me/260777298220"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#22C55E] hover:bg-gray-50 font-bold px-8 py-3 rounded-lg transition-colors shadow flex-shrink-0"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071d47] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold text-white mb-1">SINDA</div>
              <div className="text-[#22C55E] text-xs tracking-widest uppercase mb-3">AI Digital & Tech Services Hub</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your digital partner for fast, affordable & reliable solutions in Zambia.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-[#22C55E] mb-4 tracking-wide uppercase text-sm">Contact Information</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span>📞</span> 0777 298 220
                </div>
                <div className="flex items-center gap-2">
                  <span>✉️</span> pearjasper@outlook.com
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span> Zambia, Eastern Province
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-bold text-[#22C55E] mb-4 tracking-wide uppercase text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { label: 'f', href: '#', color: 'bg-blue-600' },
                  { label: 'W', href: 'https://wa.me/260777298220', color: 'bg-green-600' },
                  { label: 'ig', href: '#', color: 'bg-pink-600' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    className={`w-9 h-9 ${s.color} rounded-full flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
            <p className="text-gray-500">© 2026 SINDA AI Digital & Tech Services Hub. All Rights Reserved.</p>
            <p className="text-[#22C55E] italic font-medium">We solve it. You succeed.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
