'use client'

import { motion } from 'framer-motion'
import { Camera, Network, Cloud, Radar } from 'lucide-react'
import { useSafeReducedMotion } from '@/components/signal-node'

// Literal hex (not CSS var()) — these values get an alpha suffix appended below,
// which only works with hex colors, not var() references.
const stages = [
  { id: 'field', label: 'Field', sub: 'CCTV · Access Control', icon: Camera, accent: '#94a3b8' },
  { id: 'systems', label: 'Systems', sub: 'Networks · Integration', icon: Network, accent: '#7c93c9' },
  { id: 'cloud', label: 'Cloud', sub: 'AWS · Distributed Systems', icon: Cloud, accent: '#2f6fed' },
  { id: 'observability', label: 'Observability', sub: 'Telemetry · Intelligence', icon: Radar, accent: '#22d3ee' },
]

export default function HeroPipeline() {
  const reduceMotion = useSafeReducedMotion()

  return (
    <div className="mx-auto w-full max-w-[320px] py-4 lg:mx-0">
      {stages.map((stage, i) => {
        const Icon = stage.icon
        const next = stages[i + 1]
        return (
          <div key={stage.id}>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center gap-4"
            >
              <span
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-[var(--pb-void)]"
                style={{ borderColor: `${stage.accent}45` }}
              >
                {!reduceMotion && i === stages.length - 1 && (
                  <motion.span
                    className="absolute inset-0 rounded-full border"
                    style={{ borderColor: `${stage.accent}55` }}
                    animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
                <Icon className="h-4.5 w-4.5" style={{ color: stage.accent }} strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[13.5px] font-bold text-[var(--pb-ink)]">{stage.label}</p>
                <p className="mt-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-[var(--pb-ink-35)]">
                  {stage.sub}
                </p>
              </div>
            </motion.div>

            {next && (
              <div className="relative flex h-8 w-12 shrink-0 items-center justify-center">
                <div
                  className="h-full w-px"
                  style={{ background: `linear-gradient(180deg, ${stage.accent}70, ${next.accent}70)` }}
                />
                {!reduceMotion && (
                  <motion.span
                    className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                    style={{ background: next.accent, boxShadow: `0 0 6px 1px ${next.accent}` }}
                    animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: 0.8 + i * 0.3, ease: 'easeInOut' }}
                  />
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
