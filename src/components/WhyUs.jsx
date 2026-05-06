const reasons = [
  { icon: '⚡', title: 'Fast Delivery', desc: 'On time, every time' },
  { icon: '✦', title: 'Quality Work', desc: 'Professional & reliable' },
  { icon: '★', title: 'Customer Satisfaction', desc: 'Your satisfaction is our priority' },
  { icon: '💰', title: 'Affordable Prices', desc: 'Quality services at fair prices' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-[#0A2A66]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#22C55E] font-semibold text-sm tracking-widest uppercase mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Fast, Affordable & Reliable Solutions</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="flex flex-col items-center text-center p-6 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-white font-bold text-base mb-1">{r.title}</h3>
              <p className="text-gray-300 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
