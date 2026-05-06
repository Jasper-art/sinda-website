export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80"
              alt="About SINDA"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-[#22C55E] font-semibold text-sm tracking-widest uppercase mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A66] mb-4">
              Your Digital Partner <br /> For Success
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At SINDA AI Digital & Tech Services Hub, we are committed to providing high quality digital solutions
              that help students, professionals and businesses save time and achieve more.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Based in Zambia, we understand the local landscape and deliver services that are practical,
              affordable, and reliable — whether you need a polished CV, data management, or full tech support.
            </p>
            <div className="flex gap-8 mb-8">
              {[['100+', 'Clients Served'], ['4', 'Service Areas'], ['24/7', 'WhatsApp Support']].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-[#0A2A66]">{num}</div>
                  <div className="text-gray-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block bg-[#0A2A66] hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
