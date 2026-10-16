'use client'

import { motion } from 'framer-motion'
import { Camera, Cloud, Terminal } from 'lucide-react'
import { SignalDot, useSafeReducedMotion } from '@/components/signal-node'

export function BiaoTechVisual() {
  const reduceMotion = useSafeReducedMotion()
  return (
    <div className="relative flex h-full w-full flex-col justify-center bg-[#0d1424] px-6">
      <div className="mb-4 flex items-center gap-2">
        <Terminal size={12} className="text-white/30" />
        <span className="font-mono text-[9px] text-white/30">api.biaotech.dev</span>
      </div>
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-3 font-mono text-[12px]">
        <span className="text-white/45">
          GET /api/health
          {!reduceMotion && (
            <motion.span
              className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-white/40"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.51, 1] }}
            />
          )}
        </span>
        <span className="flex items-center gap-2 text-emerald-400">
          <SignalDot accent="#34d399" size={5} />
          200 OK
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[11px]">
        <span className="text-white/40">Deploy</span>
        <span className="text-white/50">GitHub Actions · CI/CD</span>
      </div>
    </div>
  )
}

const fleetMini = [
  { x: 14, y: 22 },
  { x: 10, y: 52 },
  { x: 16, y: 82 },
]
const fleetMiniCloud = { x: 82, y: 52 }

export function CameraFleetVisual() {
  const reduceMotion = useSafeReducedMotion()
  return (
    <div className="relative h-full w-full overflow-hidden bg-[var(--pb-navy)]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {fleetMini.map((c, i) => (
          <line key={i} x1={c.x} y1={c.y} x2={fleetMiniCloud.x} y2={fleetMiniCloud.y} stroke="#7c5cff" strokeOpacity="0.2" strokeWidth="0.4" />
        ))}
        {!reduceMotion &&
          fleetMini.map((c, i) => (
            <motion.circle
              key={`p-${i}`}
              r={0.8}
              fill="#c8beff"
              initial={{ cx: c.x, cy: c.y, opacity: 0 }}
              animate={{ cx: [c.x, fleetMiniCloud.x], cy: [c.y, fleetMiniCloud.y], opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut', repeatDelay: 1.4 }}
              style={{ filter: 'drop-shadow(0 0 3px #8f7bff)' }}
            />
          ))}
      </svg>
      {fleetMini.map((c, i) => (
        <div key={i} className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
          <Camera size={12} color="#c8beff" strokeWidth={1.6} />
        </div>
      ))}
      <div className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#22d3ee]/40" style={{ left: `${fleetMiniCloud.x}%`, top: `${fleetMiniCloud.y}%`, boxShadow: '0 0 20px 3px rgba(34,211,238,0.18)', background: 'rgba(34,211,238,0.06)' }}>
        <Cloud size={16} color="#7fe3f2" strokeWidth={1.6} />
      </div>
    </div>
  )
}

export const projectVisualComponents: Record<string, React.ComponentType> = {
  'biaotech-api': BiaoTechVisual,
  'camera-fleet-monitor': CameraFleetVisual,
}
