const apps = [
  {
    name: 'BizTracker',
    desc: 'All-in-one business bookkeeping for Zambian SMEs. Track sales, expenses, income and profits — works offline.',
    badge: 'Live Now',
    icon: '📊',
    color: 'border-slate-400 bg-gradient-to-br from-slate-800 to-slate-900',
    badgeColor: 'bg-emerald-500 text-white font-bold',
    link: 'https://biztracker-1ac9d.web.app',
    isExternal: true,
    textClass: 'text-white',
    btnColor: 'bg-slate-700 hover:bg-slate-600',
  },
  {
    name: 'RankIt ZM',
    desc: 'School management & student ranking system for Zambian schools. Offline-first design for rural use.',
    badge: 'Download APK',
    icon: '🎓',
    color: 'border-emerald-400 bg-gradient-to-br from-emerald-900 to-emerald-950',
    badgeColor: 'bg-amber-400 text-emerald-900 font-bold',
    link: '/downloads/rankitzm.apk',
    isDownload: true,
    textClass: 'text-white',
    btnColor: 'bg-emerald-600 hover:bg-emerald-700',
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

              <h3 className={`font-bold text-lg mb-2 ${app.textClass ? 'text-white' : 'text-[#0A2A66]'}`}>{app.name}</h3>
              <p className={`text-sm leading-relaxed flex-1 ${app.textClass ? 'text-gray-300' : 'text-gray-600'}`}>{app.desc}</p>

              {app.link ? (
                <a
                  href={app.link}
                  target={app.isExternal ? "_blank" : undefined}
                  rel={app.isExternal ? "noopener noreferrer" : undefined}
                  download={app.isDownload ? "rankitzm.apk" : undefined}
                  className={`mt-5 block text-center text-white text-sm font-semibold py-2.5 rounded-xl active:scale-95 transition-all duration-150 ${app.btnColor || 'bg-indigo-600 hover:bg-indigo-700'}`}
                >
                  {app.isExternal ? 'Open App →' : app.isDownload ? 'Download APK ↓' : 'View'}
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