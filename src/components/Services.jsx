const services = [
  {
    icon: '📄',
    color: 'bg-green-600',
    title: 'Document Services',
    items: ['CV Writing', 'Cover Letters', 'Business Proposals', 'Assignments', 'Reports & Essays', 'Proofreading & Editing'],
  },
  {
    icon: '📊',
    color: 'bg-blue-700',
    title: 'Excel & Business Services',
    items: ['Excel Sheets (Basic & Advanced)', 'Data Entry', 'Data Analysis', 'Charts & Graphs', 'Business Record Systems', 'Financial Calculations'],
  },
  {
    icon: '📱',
    color: 'bg-purple-700',
    title: 'Phone Accessories & Services',
    items: ['Gmail / Email Setup', 'App Installation', 'Data Transfer / Backup', 'Phone Optimization', 'Phone Setup & Guidance'],
  },
  {
    icon: '🔧',
    color: 'bg-orange-600',
    title: 'Tech Support',
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
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              <div className={`w-14 h-14 ${s.color} rounded-xl flex items-center justify-center text-2xl mb-4 shadow`}>
                {s.icon}
              </div>
              <h3 className="font-bold text-[#0A2A66] text-base mb-3">{s.title}</h3>
              <ul className="flex-1 space-y-1.5 mb-5">
                {s.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-[#22C55E] font-bold mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/260777298220"
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
