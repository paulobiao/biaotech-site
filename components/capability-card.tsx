'use client'

import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '@/components/ui/glass-card'
import { icons, type IconName } from '@/lib/icon-registry'

export type Capability = {
  id: string
  icon: IconName
  label: string
  stat?: string
  description: string
  tags: string[]
  accent: string
}

/** Discipline icon: color carried by stroke, a faint border/tint and a restrained glow that lifts on card hover. */
export function StageIcon({ icon, accent, className = 'h-9 w-9', iconClassName = 'h-4 w-4' }: { icon: IconName; accent: string; className?: string; iconClassName?: string }) {
  const Icon = icons[icon]
  return (
    <span
      style={{ '--a': accent } as CSSProperties}
      className={`flex shrink-0 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--a)_28%,transparent)] bg-[color-mix(in_srgb,var(--a)_8%,transparent)] shadow-[0_0_14px_-6px_color-mix(in_srgb,var(--a)_45%,transparent)] transition-[border-color,box-shadow] duration-300 group-hover:border-[color-mix(in_srgb,var(--a)_45%,transparent)] group-hover:shadow-[0_0_16px_-5px_color-mix(in_srgb,var(--a)_55%,transparent)] ${className}`}
    >
      <Icon className={iconClassName} style={{ color: accent }} strokeWidth={1.7} />
    </span>
  )
}

export default function CapabilityCard({ item, index = 0 }: { item: Capability; index?: number }) {
  const accent = item.accent
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="h-full"
    >
      <GlassCard interactive className="flex h-full flex-col p-5">
        <div className="mb-4 flex items-center justify-between">
          <StageIcon icon={item.icon} accent={accent} />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-base font-black tracking-[-0.02em] text-[var(--pb-ink)]">{item.label}</h3>
        {item.stat && <p className="mt-1 text-[12px] font-bold text-[var(--pb-ink-55)]">{item.stat}</p>}
        <p className="mt-2 flex-1 text-[12.5px] leading-[1.65] text-[var(--pb-ink-55)]">{item.description}</p>

        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-[var(--pb-border)] pt-3.5">
          {item.tags.map((tag) => (
            <li key={tag} className="flex items-center gap-1.5">
              <span className="h-[3px] w-[3px] rounded-full" style={{ background: accent }} />
              <span className="font-mono text-[7.5px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-35)]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  )
}
