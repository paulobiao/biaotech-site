'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { toneColor, type Project } from '@/lib/projects-data'
import { SignalDot } from '@/components/signal-node'
import GlassCard from '@/components/ui/glass-card'

export default function ProjectCard({
  project,
  visual,
  index = 0,
  featured = false,
}: {
  project: Project
  visual: ReactNode
  index?: number
  featured?: boolean
}) {
  const statusColor = toneColor[project.status.tone]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <GlassCard
        as={Link}
        href={`/projects/${project.slug}`}
        aria-label={`View case study — ${project.name}`}
        interactive
        className="flex h-full flex-col"
      >
        <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-[16/7]'}`}>
          <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">{visual}</div>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(5,7,13,0.5) 100%)' }}
          />
        </div>

        <div className="relative flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.2em] text-[var(--pb-ink-35)]">
              {project.number} · {project.category}
            </span>
            <span className="flex shrink-0 items-center gap-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.14em]" style={{ color: statusColor }}>
              <SignalDot accent={statusColor} size={5} />
              {project.status.label}
            </span>
          </div>

          <h3 className={`font-black tracking-[-0.02em] text-[var(--pb-ink)] ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
            {project.name}
          </h3>
          <p className="mt-2 flex-1 text-[12.5px] leading-[1.6] text-[var(--pb-ink-55)]">{project.description}</p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--pb-border)] pt-3.5">
            <div className="flex flex-wrap gap-x-2.5 gap-y-1">
              {project.tags.slice(0, 3).map((t) => (
                <span key={t} className="font-mono text-[7.5px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-35)]">
                  {t}
                </span>
              ))}
            </div>
            <span className="flex shrink-0 items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink)] transition-[gap] duration-300 group-hover:gap-2.5">
              View
              <ArrowUpRight className="h-3.5 w-3.5 text-[var(--pb-cyan)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
