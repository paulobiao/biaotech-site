import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react'
import { SignalTag } from '@/components/signal-node'
import SectionHeader from '@/components/section-header'
import CapabilityCard from '@/components/capability-card'
import GlassCard from '@/components/ui/glass-card'
import { experienceStages } from '@/lib/experience-data'

// Dates as stated on each document. Estácio link serves a web copy with personal identifiers redacted.
const education = [
  {
    credential: 'Postgraduate · Lato Sensu Specialization',
    institution: 'PUC Minas',
    institutionFull: 'Pontifícia Universidade Católica de Minas Gerais',
    program: 'Postgraduate Degree in Cloud Computing',
    dates: 'Completed August 2026 · Certificate issued October 2026',
    href: '/documents/education/paulo-biao-cloud-computing-postgraduate-puc-minas.pdf',
    accent: 'var(--pb-blue)',
  },
  {
    credential: 'Undergraduate · Technology Degree',
    institution: 'Estácio',
    institutionFull: 'Centro Universitário Estácio de Belo Horizonte',
    program: 'Technology Degree in Systems Analysis and Development',
    dates: 'Completed July 2020 · Degree conferred November 2020',
    href: '/documents/education/paulo-biao-systems-analysis-development-estacio.pdf',
    accent: '#2dd4bf',
    note: 'Personal identifiers redacted',
  },
]

export const metadata: Metadata = {
  title: 'About',
  description:
    'Paulo Biao — systems analyst with a decade of field experience in electronic security systems (CCTV, alarms, monitoring) for banking environments, now focused on cloud computing. Postgraduate in Cloud Computing (PUC Minas). Peer reviewer, IEEE Internet of Things Journal.',
  openGraph: {
    title: 'About Paulo Biao — Systems Analyst | Cloud Computing',
    description:
      'A decade maintaining CCTV, alarm and monitoring systems for banks in Brazil, now building in the cloud. Postgraduate in Cloud Computing (PUC Minas). Peer reviewer, IEEE Internet of Things Journal.',
    url: 'https://biaotech.dev/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Paulo Biao' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Paulo Biao',
    description:
      'A decade in electronic security systems for banking environments, now focused on cloud computing. Peer reviewer, IEEE Internet of Things Journal.',
    images: ['https://www.biaotech.dev/og-image.png'],
  },
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
        <div>
          <SignalTag accent="var(--pb-blue)">About</SignalTag>
          <h1 className="mt-5 text-[clamp(2.25rem,4.8vw,3.75rem)] font-black leading-[1.02] tracking-[-0.03em] text-[var(--pb-ink)]">
            A decade in the field.
            <br />
            Now building the{' '}
            <span style={{ background: 'linear-gradient(100deg, #2f6fed 0%, #22d3ee 55%, #2dd4bf 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              cloud that watches over it.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-[13.5px] leading-[1.75] text-[var(--pb-ink-55)]">
            I spent over ten years installing, monitoring and maintaining CCTV, alarm and
            access systems across bank branches and corporate sites in Brazil — the kind of
            work where you learn how distributed equipment actually fails, and what it
            costs when a recording isn&rsquo;t there when someone needs it. That experience
            now shapes how I build cloud systems.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 rounded-md px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              style={{ background: 'linear-gradient(120deg, var(--pb-blue), #1c8fae)' }}
            >
              Get in touch
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/experience"
              className="group flex items-center gap-2.5 rounded-md border border-[var(--pb-border)] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pb-ink)] transition hover:border-[var(--pb-cyan)]/40"
            >
              Full experience
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-lg border border-[var(--pb-border)] lg:mx-0">
          <Image src="/pauloNN.jpg" alt="Paulo Biao" fill sizes="(max-width: 1024px) 260px, 22vw" className="object-cover" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(160deg, transparent 55%, rgba(5,7,13,0.4) 100%)' }}
          />
        </div>
      </div>

      <section className="mt-20 md:mt-28">
        <SectionHeader
          kicker="Field — Systems — Software — Cloud — Intelligent Infrastructure"
          title="The evolution"
          description="Five disciplines, one continuous line — physical infrastructure becoming digital infrastructure."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {experienceStages.map((item, i) => (
            <CapabilityCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>

      <section className="mt-20 md:mt-28">
        <SectionHeader kicker="Academic credentials" title="Education" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {education.map((e) => (
            <GlassCard key={e.institution} className="flex flex-col p-6 md:p-7">
              <span aria-hidden className="absolute inset-y-0 left-0 w-[2px]" style={{ background: e.accent }} />
              <p className="font-mono text-[8.5px] font-bold uppercase tracking-[0.2em]" style={{ color: e.accent }}>
                {e.credential}
              </p>
              <h3 className="mt-3 text-xl font-black tracking-[-0.02em] text-[var(--pb-ink)]">{e.institution}</h3>
              <p className="mt-0.5 text-[11.5px] text-[var(--pb-ink-35)]">{e.institutionFull}</p>
              <p className="mt-4 text-[14px] font-semibold leading-[1.5] text-[var(--pb-ink-70)]">{e.program}</p>
              <p className="mt-1.5 text-[12px] leading-[1.6] text-[var(--pb-ink-55)]">{e.dates}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-[var(--pb-border)] pt-4">
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View diploma — ${e.program}, ${e.institution} (PDF, opens in a new tab)`}
                  className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:text-[var(--pb-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
                >
                  View diploma
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" style={{ color: e.accent }} />
                </a>
                {e.note && <span className="text-[10.5px] text-[var(--pb-ink-35)]">{e.note}</span>}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mt-20 md:mt-28">
        <GlassCard className="flex flex-col items-start justify-between gap-6 p-7 md:flex-row md:items-center md:p-9">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--pb-violet)]/40 bg-[var(--pb-violet)]/10">
              <BookOpen className="h-5 w-5" style={{ color: 'var(--pb-violet)' }} strokeWidth={1.8} />
            </span>
            <div>
              <p className="font-mono text-[8.5px] font-bold uppercase tracking-[0.2em] text-[var(--pb-ink-35)]">Peer review</p>
              <h3 className="text-lg font-black tracking-[-0.02em] text-[var(--pb-ink)]">
                IEEE — Internet of <span style={{ color: 'var(--pb-violet)' }}>Things Journal</span>
              </h3>
              <p className="mt-2 max-w-md text-[12.5px] leading-[1.65] text-[var(--pb-ink-55)]">
                Invited peer reviewer for IoT and communication-reliability manuscripts —
                voluntary academic service, verified through Web of Science.
              </p>
            </div>
          </div>
          <a
            href="https://orcid.org/0009-0008-6757-3766"
            target="_blank"
            rel="noreferrer"
            className="group flex shrink-0 items-center gap-2 rounded-md border border-[var(--pb-border)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:border-[var(--pb-cyan)]/40"
          >
            View ORCID record
            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </GlassCard>
      </section>
    </div>
  )
}
