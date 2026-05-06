const apps = [
  {
    name: 'RankIt ZM',
    desc: 'School management & student ranking system for Zambian schools. Offline-first design for rural use.',
    badge: 'Coming Soon',
    icon: '🎓',
    color: 'border-blue-200 bg-blue-50',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'QuickTap Pro',
    desc: 'Point-of-sale system for Zambian tuckshops & small businesses. Fast, simple, works offline.',
    badge: 'Coming Soon',
    icon: '🛒',
    color: 'border-green-200 bg-green-50',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    name: 'ZedCourier',
    desc: 'Courier & logistics management for Eastern Province. Track parcels and manage deliveries.',
    badge: 'Coming Soon',
    icon: '📦',
    color: 'border-orange-200 bg-orange-50',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
];

export default function Apps() {
  return (
    <section id="apps" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#22C55E] font-semibold text-sm tracking-widest uppercase mb-2">Our Apps</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A66]">Powerful Tools, Coming Soon</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We're building software solutions tailored for Zambia — schools, businesses, and logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {apps.map(app => (
            <div key={app.name} className={`border-2 ${app.color} rounded-2xl p-6 hover:shadow-md transition-shadow`}>
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{app.icon}</div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${app.badgeColor}`}>{app.badge}</span>
              </div>
              <h3 className="font-bold text-[#0A2A66] text-lg mb-2">{app.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10 italic">
          Want to be notified when our apps launch?{' '}
          <a href="https://wa.me/260777298220" className="text-[#22C55E] font-semibold">Message us on WhatsApp</a>
        </p>
      </div>
    </section>
  );
}
