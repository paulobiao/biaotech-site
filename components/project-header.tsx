'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { toneColor, type Project } from '@/lib/projects-data'
import { SignalDot } from '@/components/signal-node'

export default function ProjectHeader({ project }: { project: Project }) {
  const statusColor = toneColor[project.status.tone]
  return (
    <header className="mx-auto max-w-[1100px] px-6 pb-10 pt-14 md:px-10 md:pt-20">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Link
          href="/projects"
          className="group mb-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-35)] transition hover:text-[var(--pb-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Projects
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.06 }}
        className="flex flex-wrap items-start justify-between gap-6"
      >
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            {project.tags.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <span className="h-[3px] w-[3px] rounded-full" style={{ background: project.accent }} />
                <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-35)]">
                  {t}
                </span>
              </span>
            ))}
          </div>
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-black leading-[0.98] tracking-[-0.03em] text-[var(--pb-ink)]">
            {project.name}
          </h1>
          <p className="mt-2.5 max-w-lg text-[14px] leading-[1.6] text-[var(--pb-ink-55)]">{project.category}</p>
        </div>
        <span
          className="flex shrink-0 items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em]"
          style={{ borderColor: `${statusColor}4d`, background: `${statusColor}1a`, color: statusColor }}
        >
          <SignalDot accent={statusColor} size={5} />
          {project.status.label}
        </span>
      </motion.div>
    </header>
  )
}
