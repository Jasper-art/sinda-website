const reasons = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    desc: 'On time, every time',
    glowColor: 'rgba(234, 179, 8, 0.15)',
    borderColor: 'rgba(234, 179, 8, 0.3)',
  },
  {
    icon: '✦',
    title: 'Quality Work',
    desc: 'Professional & reliable',
    glowColor: 'rgba(34, 197, 94, 0.15)',
    borderColor: 'rgba(34, 197, 94, 0.3)',
  },
  {
    icon: '★',
    title: 'Customer Satisfaction',
    desc: 'Your satisfaction is our priority',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    borderColor: 'rgba(99, 102, 241, 0.3)',
  },
  {
    icon: '💰',
    title: 'Affordable Prices',
    desc: 'Quality services at fair prices',
    glowColor: 'rgba(249, 115, 22, 0.15)',
    borderColor: 'rgba(249, 115, 22, 0.3)',
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071d47 0%, #0A2A66 50%, #071d47 100%)' }}
    >
      {/* Subtle background glow blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', transform: 'translate(50%, 50%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#22C55E] font-semibold text-sm tracking-widest uppercase mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Fast, Affordable & Reliable Solutions</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderColor: r.borderColor,
              }}
            >
              {/* Icon in styled container with glow */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg"
                style={{ background: r.glowColor, border: `1px solid ${r.borderColor}` }}
              >
                {r.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-1">{r.title}</h3>
              <p className="text-gray-400 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}