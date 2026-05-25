const apps = [
  {
    name: 'BizTracker',
    desc: 'All-in-one business bookkeeping for Zambian SMEs. Track sales, expenses, income and profits — works offline.',
    badge: 'Live Now',
    icon: '📊',
    color: 'border-indigo-300 bg-indigo-50',
    badgeColor: 'bg-indigo-600 text-white',
    link: 'https://biztracker-1ac9d.web.app',
  },
  {
    name: 'RankIt ZM',
    desc: 'School management & student ranking system for Zambian schools. Offline-first design for rural use.',
    badge: 'Coming Soon',
    icon: '🎓',
    color: 'border-blue-200 bg-blue-50',
    badgeColor: 'bg-blue-100 text-blue-700',
    link: null,
  },
  {
    name: 'QuickTap Pro',
    desc: 'Point-of-sale system for Zambian tuckshops & small businesses. Fast, simple, works offline.',
    badge: 'Coming Soon',
    icon: '🛒',
    color: 'border-green-200 bg-green-50',
    badgeColor: 'bg-green-100 text-green-700',
    link: null,
  },
  {
    name: 'ZedCourier',
    desc: 'Courier & logistics management for Eastern Province. Track parcels and manage deliveries.',
    badge: 'Coming Soon',
    icon: '📦',
    color: 'border-orange-200 bg-orange-50',
    badgeColor: 'bg-orange-100 text-orange-700',
    link: null,
  },
]

export default function Apps() {
  return (
    <section id="apps" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-[#22C55E] font-semibold text-sm tracking-widest uppercase mb-2">Our Apps</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A66]">Powerful Tools for Zambia</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We're building software solutions tailored for Zambia — schools, businesses, and logistics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map(app => (
            <div
              key={app.name}
              className={`border-2 ${app.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-200 flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{app.icon}</div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${app.badgeColor}`}>
                  {app.badge}
                </span>
              </div>

              <h3 className="font-bold text-[#0A2A66] text-lg mb-2">{app.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{app.desc}</p>

              {app.link ? (
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block text-center bg-indigo-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all duration-150"
                >
                  Open App →
                </a>
              ) : (
                <div className="mt-5 text-center text-xs text-gray-400 italic py-2">
                  Launching soon
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10 italic">
          Want to be notified when our apps launch?{' '}
          <a href="https://wa.me/260777298220" className="text-[#22C55E] font-semibold hover:underline">
            Message us on WhatsApp
          </a>
        </p>

      </div>
    </section>
  )
}