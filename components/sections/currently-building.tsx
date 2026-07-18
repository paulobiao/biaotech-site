'use client'

export default function CurrentlyBuilding() {
  const items = [
    'Studying toward AWS certifications',
    'Cloud Computing Postgraduate — PUC Minas (exp. Nov 2026)',
    'Peer reviewer — IEEE Internet of Things Journal',
    'Open to US cloud and technology roles',
  ]

  return (
    <div className="bg-slate-900 border-y border-slate-700/60 py-3 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        {/* Label */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Currently</span>
        </div>

        {/* Items */}
        <div className="flex flex-wrap items-center gap-y-1 gap-x-0">
          {items.map((item, i) => (
            <span key={i} className="flex items-center">
              {i > 0 && <span className="text-slate-600 mx-3 hidden sm:inline" aria-hidden="true">·</span>}
              <span className="text-xs text-slate-300">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}