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

// Counts what /projects documents, each with its own status — not deployed systems.
const facts = [
  { label: '15 Years', sub: 'Security systems field work' },
  { label: `${projects.length} Projects`, sub: 'Documented, with status' },
  { label: `${credentials.length} Credentials`, sub: 'Certifications & courses' },
  { label: 'IEEE', sub: 'IoT Journal reviewer' },
]

const asides: Record<string, { text: string; href?: string }> = {
  cloud: { text: 'Currently studying for AWS certifications' },
}

// Devpost URLs and tags carried over from the retired /securebank-copilot page. Participation only —
// no placements, prizes or participant counts are claimed.
const hackathons = [
  {
    project: 'BoardBrief AI',
    context: 'Dev Season of Code (DSOC) 2026',
    purpose: 'Turns cybersecurity incidents into clear executive decision briefs.',
    tags: ['Applied AI', 'Fintech'],
    accent: '#a78bfa',
    url: 'https://devpost.com/software/boardbrief-ai-gemini-3',
  },
  {
    project: 'SecureBank Copilot',
    context: 'Gemini 3 Hackathon · Google DeepMind',
    purpose: 'Uses Gemini 3 to simulate cyber incidents and estimate their financial and regulatory impact.',
    tags: ['Gemini 3', 'Banking security'],
    accent: '#60a5fa',
    url: 'https://devpost.com/software/securebank-copilot-gemini-3',
  },
  {
    project: 'Incident Triage Agent',
    context: 'Elasticsearch Agent Builder · Elastic',
    purpose: 'Classifies incident severity and indexes the triage results into Elasticsearch.',
    tags: ['Elasticsearch', 'AI agents'],
    accent: '#2dd4bf',
    url: 'https://devpost.com/software/incident-triage-agent',
  },
  {
    project: '“Should I Worry?” — AI Cyber Assistant',
    context: 'Techinance Cyberhack 2',
    purpose: 'Explains security alerts in plain language for non-technical users.',
    tags: ['Cybersecurity', 'Applied AI'],
    accent: '#f5b454',
    url: 'https://devpost.com/software/ai-cyber-awareness-incident-triage-agent',
  },
]

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[1000px] px-6 py-14 md:px-10 md:py-20">
      <SectionHeader
        kicker="2005 — 2026"
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
                      <span className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: stage.accent }}>
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
                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--pb-ink-35)]">
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

      {/* A separate body of external evidence — set apart from the career timeline in its own panel. */}
      <section id="hackathons" aria-labelledby="hackathons-title" className="mt-24 scroll-mt-24 md:mt-28">
        <GlassCard className="bg-[var(--pb-navy)] p-6 sm:p-8 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(700px 320px at 15% 0%, rgba(124,92,255,0.12), transparent 70%), radial-gradient(600px 300px at 100% 100%, rgba(45,212,191,0.08), transparent 70%)' }}
          />
          <div className="relative flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <div className="max-w-xl">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--pb-ink-55)]">2025 — 2026</p>
              <h2 id="hackathons-title" className="mt-3 text-[clamp(1.6rem,3.4vw,2.3rem)] font-black leading-[1.08] tracking-[-0.03em] text-[var(--pb-ink)]">
                Global hackathons &amp; applied AI
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-[var(--pb-ink-55)]">
                Four applied-AI projects built and submitted through international technical competitions.
              </p>
            </div>
            <a
              href="https://devpost.com/paulo86"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-[var(--pb-border-strong)] px-4 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:border-[var(--pb-cyan)]/45 hover:text-[var(--pb-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
            >
              View Devpost profile
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <ul className="relative mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {hackathons.map((h, i) => (
              <li key={h.url}>
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${h.project} — ${h.context} (Devpost, opens in a new tab)`}
                  className="group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-lg border p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-7"
                  style={{
                    borderColor: `color-mix(in srgb, ${h.accent} 24%, transparent)`,
                    background: `linear-gradient(155deg, color-mix(in srgb, ${h.accent} 9%, transparent) 0%, rgba(13,20,36,0.55) 55%)`,
                    outlineColor: h.accent,
                  }}
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${h.accent}, transparent 70%)` }} />
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[13px] font-bold" style={{ color: h.accent }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-55)]">{h.context}</span>
                  </div>
                  <h3 className="mt-5 text-[clamp(1.2rem,2.2vw,1.45rem)] font-black leading-[1.15] tracking-[-0.02em] text-[var(--pb-ink)]">{h.project}</h3>
                  <p className="mt-2.5 flex-1 text-[13.5px] leading-[1.65] text-[var(--pb-ink-55)]">{h.purpose}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
                      {h.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-sm border px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.1em] text-[var(--pb-ink-70)]"
                          style={{ borderColor: `color-mix(in srgb, ${h.accent} 30%, transparent)` }}
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition-colors group-hover:text-[var(--pb-cyan)]">
                      View on Devpost
                      <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: h.accent }} />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      <div className="mt-14 flex justify-center">
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
