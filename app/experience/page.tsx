import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SectionHeader from '@/components/section-header'
import GlassCard from '@/components/ui/glass-card'
import { SignalDot } from '@/components/signal-node'
import { experienceStages } from '@/lib/experience-data'
import { projects } from '@/lib/projects-data'
import { credentials } from '@/lib/credentials-data'
import { StageIcon } from '@/components/capability-card'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'The professional evolution from physical security field work to systems, software, cloud and intelligent infrastructure — Paulo Biao.',
}

const facts = [
  { label: '10+ Years', sub: 'Field experience' },
  { label: `${projects.length} Systems`, sub: 'Built end to end' },
  { label: `${credentials.length} Credentials`, sub: 'Verified certifications' },
  { label: 'IEEE', sub: 'IoT Journal reviewer' },
]

const asides: Record<string, { text: string; href?: string }> = {
  software: { text: 'Along the way — 4 global hackathons on Devpost', href: 'https://devpost.com/paulo86' },
  cloud: { text: 'AWS certification path — current study' },
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[1000px] px-6 py-14 md:px-10 md:py-20">
      <SectionHeader
        kicker="2012 — 2026"
        title="Professional evolution"
        description="Physical security field work becoming systems, software, cloud and intelligent infrastructure — one continuous line, not a career change."
      />

      <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="rounded-md border border-[var(--pb-border)] bg-[var(--pb-surface)] px-4 py-3.5">
            <p className="text-base font-black tracking-[-0.02em] text-[var(--pb-ink)]">{f.label}</p>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pb-ink-35)]">{f.sub}</p>
          </div>
        ))}
      </div>

      <div className="relative flex flex-col gap-5">
        {experienceStages.map((stage, i) => {
          const aside = asides[stage.id]
          return (
            <GlassCard key={stage.id} className="p-6 md:p-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[auto_1fr] sm:gap-6">
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3">
                  <StageIcon icon={stage.icon} accent={stage.accent} className="h-10 w-10" iconClassName="h-4.5 w-4.5" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--pb-ink-35)] sm:hidden">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-black tracking-[-0.02em] text-[var(--pb-ink)]">{stage.label}</h3>
                    {stage.id === 'intelligence' && (
                      <span className="flex items-center gap-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.2em]" style={{ color: stage.accent }}>
                        <SignalDot accent={stage.accent} size={5} />
                        Now
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[12px] font-bold" style={{ color: stage.accent }}>
                    {stage.stat}
                  </p>
                  <p className="mt-2.5 text-[13px] leading-[1.75] text-[var(--pb-ink-55)]">{stage.description}</p>

                  <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                    {stage.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5">
                        <span className="h-[3px] w-[3px] rounded-full" style={{ background: stage.accent }} />
                        <span className="font-mono text-[7.5px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-35)]">
                          {tag}
                        </span>
                      </span>
                    ))}
                  </div>

                  {aside && (
                    <div className="mt-3">
                      {aside.href ? (
                        <a
                          href={aside.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[var(--pb-ink-35)] transition hover:text-[var(--pb-cyan)]"
                        >
                          {aside.text}
                          <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ) : (
                        <span className="text-[11.5px] font-semibold text-[var(--pb-ink-35)]">{aside.text}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          )
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/certifications"
          className="group flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:text-[var(--pb-cyan)]"
        >
          View certifications
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  )
}
