const services = [
  {
    icon: '📄',
    color: 'bg-green-600',
    borderColor: 'hover:border-green-200',
    glowColor: 'hover:shadow-green-100',
    title: 'Document Services',
    badge: '🎓 Student Friendly',
    badgeColor: 'bg-green-50 text-green-700',
    items: ['CV Writing', 'Cover Letters', 'Business Proposals', 'Assignments', 'Reports & Essays', 'Proofreading & Editing'],
  },
  {
    icon: '📊',
    color: 'bg-blue-700',
    borderColor: 'hover:border-blue-200',
    glowColor: 'hover:shadow-blue-100',
    title: 'Excel & Business Services',
    badge: null,
    badgeColor: '',
    items: ['Excel Sheets (Basic & Advanced)', 'Data Entry', 'Data Analysis', 'Charts & Graphs', 'Business Record Systems', 'Financial Calculations'],
  },
  {
    icon: '📱',
    color: 'bg-purple-700',
    borderColor: 'hover:border-purple-200',
    glowColor: 'hover:shadow-purple-100',
    title: 'Phone Accessories & Services',
    badge: null,
    badgeColor: '',
    items: ['Gmail / Email Setup', 'App Installation', 'Data Transfer / Backup', 'Phone Optimization', 'Phone Setup & Guidance'],
  },
  {
    icon: '🔧',
    color: 'bg-orange-600',
    borderColor: 'hover:border-orange-200',
    glowColor: 'hover:shadow-orange-100',
    title: 'Tech Support',
    badge: '⚡ Fast Turnaround',
    badgeColor: 'bg-orange-50 text-orange-700',
    items: ['Troubleshooting Phones', 'Troubleshooting Computers', 'Fixing Common Issues', 'System Updates', 'General Tech Assistance'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#22C55E] font-semibold text-sm tracking-widest uppercase mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A66]">What We Offer</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            High quality services to help you achieve more and stress less.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`bg-white rounded-2xl border border-gray-100 ${s.borderColor} shadow-sm ${s.glowColor} hover:shadow-lg transition-all duration-300 p-6 flex flex-col`}
            >
              {/* Icon with subtle glow ring */}
              <div className={`w-14 h-14 ${s.color} rounded-xl flex items-center justify-center text-2xl mb-3 shadow-md`}>
                {s.icon}
              </div>

              {/* Badge */}
              {s.badge && (
                <span className={`text-[10px] font-semibold px-2 py-1 rounded-full w-fit mb-2 ${s.badgeColor}`}>
                  {s.badge}
                </span>
              )}

              <h3 className="font-bold text-[#0A2A66] text-base mb-3">{s.title}</h3>

              <ul className="flex-1 space-y-1.5 mb-5">
                {s.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    {/* Checkmark instead of bullet */}
                    <svg className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/260777298220?text=Hi%2C%20I%20need%20help%20with%20${encodeURIComponent(s.title)}`}
                target="_blank"
                rel="noreferrer"
                className="text-[#22C55E] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}