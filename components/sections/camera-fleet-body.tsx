'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Camera, Cloud, Database, Github, Radio } from 'lucide-react'
import { SignalTag, useSafeReducedMotion } from '@/components/signal-node'
import GlassCard from '@/components/ui/glass-card'

const stack = ['AWS IOT CORE', 'DYNAMODB', 'TERRAFORM', 'PYTHON']
const fleetCameras = [
  { id: 'cam-1', x: 8, y: 14 },
  { id: 'cam-2', x: 4, y: 34 },
  { id: 'cam-3', x: 7, y: 54 },
  { id: 'cam-4', x: 4, y: 74 },
  { id: 'cam-5', x: 8, y: 92 },
]
const fleetGateway = { x: 36, y: 55 }
const fleetCore = { x: 66, y: 30 }
const fleetDb = { x: 94, y: 55 }

export default function CameraFleetBody() {
  const reduceMotion = useSafeReducedMotion()

  return (
    <div className="mx-auto max-w-[1100px] px-6 pb-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <SignalTag accent="rgba(238,242,250,0.4)">Overview</SignalTag>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-[var(--pb-ink-70)]">
          Cloud-based monitoring experiment for IP camera fleets — applying
          field experience with physical security hardware to cloud
          architecture design. Early-stage lab work, not a production system.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10"
      >
        <GlassCard className="relative overflow-hidden bg-[var(--pb-navy)] p-6 md:p-10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(700px 400px at 50% 20%, rgba(124,92,255,0.12), transparent 65%)' }}
          />
          <div className="relative mx-auto h-[380px] max-w-[900px] sm:h-[360px]">
            <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
              {fleetCameras.map((c, i) => (
                <line key={`l-${i}`} x1={c.x} y1={c.y} x2={fleetGateway.x} y2={fleetGateway.y} stroke="white" strokeOpacity="0.08" strokeWidth="0.3" />
              ))}
              <line x1={fleetGateway.x} y1={fleetGateway.y} x2={fleetCore.x} y2={fleetCore.y} stroke="#7c5cff" strokeOpacity="0.22" strokeWidth="0.35" />
              <line x1={fleetCore.x} y1={fleetCore.y} x2={fleetDb.x} y2={fleetDb.y} stroke="#22d3ee" strokeOpacity="0.25" strokeWidth="0.35" />

              {!reduceMotion &&
                fleetCameras.map((c, i) => (
                  <motion.circle
                    key={`p-${i}`}
                    r={0.6}
                    fill="#c8beff"
                    initial={{ cx: c.x, cy: c.y, opacity: 0 }}
                    animate={{ cx: [c.x, fleetGateway.x], cy: [c.y, fleetGateway.y], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut', repeatDelay: fleetCameras.length * 0.7 - 1.8 + 0.8 }}
                    style={{ filter: 'drop-shadow(0 0 3px #8f7bff)' }}
                  />
                ))}
              {!reduceMotion && (
                <motion.circle
                  r={0.7}
                  fill="#bcefff"
                  initial={{ cx: fleetGateway.x, cy: fleetGateway.y, opacity: 0 }}
                  animate={{ cx: [fleetGateway.x, fleetCore.x, fleetDb.x], cy: [fleetGateway.y, fleetCore.y, fleetDb.y], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 1.2, ease: 'easeInOut', repeatDelay: fleetCameras.length * 0.7 - 1.8 + 0.6 }}
                  style={{ filter: 'drop-shadow(0 0 4px #22d3ee)' }}
                />
              )}
            </svg>

            {fleetCameras.map((c, i) => (
              <div key={c.id} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                  {!reduceMotion && (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-[#7c5cff]/50"
                      animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.7 * 0.6, ease: 'easeOut' }}
                    />
                  )}
                  <Camera size={16} color="#c8beff" strokeWidth={1.6} />
                </div>
                <span className="font-mono text-[8.5px] font-bold uppercase tracking-[0.14em] text-white/30">CAM-0{i + 1}</span>
              </div>
            ))}

            <div className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2" style={{ left: `${fleetGateway.x}%`, top: `${fleetGateway.y}%` }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7c5cff]/40 bg-white/[0.04]">
                <Radio size={17} color="#c8beff" strokeWidth={1.6} />
              </div>
              <span className="whitespace-nowrap font-mono text-[8.5px] font-bold uppercase tracking-[0.14em] text-white/35">Gateway</span>
            </div>

            <div className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2" style={{ left: `${fleetCore.x}%`, top: `${fleetCore.y}%` }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#7c5cff]/40" style={{ boxShadow: '0 0 24px 3px rgba(124,92,255,0.18)', background: 'rgba(124,92,255,0.06)' }}>
                <Cloud size={20} color="#c8beff" strokeWidth={1.6} />
              </div>
              <span className="whitespace-nowrap font-mono text-[8.5px] font-bold uppercase tracking-[0.14em] text-white/40">AWS IoT Core</span>
            </div>

            <div className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2" style={{ left: `${fleetDb.x}%`, top: `${fleetDb.y}%` }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#22d3ee]/40" style={{ boxShadow: '0 0 28px 4px rgba(34,211,238,0.2)', background: 'rgba(34,211,238,0.06)' }}>
                <Database size={19} color="#7fe3f2" strokeWidth={1.6} />
              </div>
              <span className="whitespace-nowrap font-mono text-[8.5px] font-bold uppercase tracking-[0.14em] text-[var(--pb-cyan)]">DynamoDB</span>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--pb-border)] pt-8">
        <div className="flex flex-wrap gap-2">
          {stack.map((t) => (
            <span key={t} className="rounded-sm border border-[var(--pb-border)] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-55)]">
              {t}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/paulobiao/camera-fleet-monitor"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:text-[var(--pb-cyan)]"
        >
          <Github className="h-3.5 w-3.5" />
          View repository
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  )
}
