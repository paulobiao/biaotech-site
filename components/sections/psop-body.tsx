'use client'

import type { ComponentType } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowLeft, ArrowRight, Database, LayoutDashboard, Radio, Server, Video } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { SignalDot } from '@/components/signal-node'
import GlassCard from '@/components/ui/glass-card'
import ProjectGallery from '@/components/project-gallery'
import { Flow, Section, type Step } from '@/components/sections/biaotech-body'
import { toneColor, type Project } from '@/lib/projects-data'

/*
 * Every claim here is taken from github.com/paulobiao/psop: the Prisma schema (EvidenceLevel,
 * roles, sessions, MFA), docs/VIDEO_ASSURANCE_FOUNDATION.md (E5/E6 lab results via the Speco NVR),
 * docs/EB2_NIW_EVIDENCE_MATRIX.md (items marked "Available") and .github/workflows/ci.yml.
 * Test-file counts were counted from the repository, not estimated.
 */
const REPO = 'https://github.com/paulobiao/psop'
const CYAN = '#22d3ee'
const TEAL = '#2dd4bf'

type Icon = ComponentType<{ className?: string; size?: string | number }>
const kicker = 'font-mono text-[10px] font-bold uppercase tracking-[0.18em]'

const architecture: { Icon: Icon; label: string; tech: string; detail: string }[] = [
  { Icon: Video, label: 'Lab site', tech: 'Real hardware', detail: 'A recorder, IP cameras and a gateway-managed device group on a lab network' },
  { Icon: Radio, label: 'Edge gateway', tech: 'Python', detail: 'Recorder adapter, ONVIF/RTSP probes and a stream scheduler collect observations' },
  { Icon: Server, label: 'PSOP API', tech: 'NestJS · TypeScript', detail: 'Authenticated ingestion, organization-scoped devices, sites and alerts' },
  { Icon: Database, label: 'Evidence ledger', tech: 'PostgreSQL · Prisma', detail: 'Each observation stored with its source, confidence, level and time' },
  { Icon: LayoutDashboard, label: 'Operator dashboard', tech: 'React · Vite', detail: 'Fleet health, site topology, incidents, activity, sessions and audit' },
]

const signals = [
  { label: 'Connectivity', detail: 'Can the collector reach the device?' },
  { label: 'Observed function', detail: 'Is the device doing the job an operator depends on?' },
  { label: 'Freshness', detail: 'Is the observation still recent enough to describe the site?' },
]

const ladder = [
  {
    state: 'Defined & ingested',
    note: 'Direct-camera discovery still pending',
    color: 'rgba(238,242,250,0.6)',
    levels: ['E0 · Unknown', 'E1 · Endpoint reachable', 'E2 · Identity observed', 'E3 · Profile discovered', 'E4 · Stream URI obtained'],
  },
  {
    state: 'Lab validated',
    note: 'Through the Speco NVR, three Hikvision channels',
    color: CYAN,
    levels: ['E5 · Session negotiated', 'E6 · Media received'],
  },
  {
    state: 'Defined, not yet collected',
    note: 'Next evidence to produce',
    color: 'rgba(238,242,250,0.4)',
    levels: ['E7 · Recording proven', 'E8 · Retrieval proven'],
  },
]

const status = [
  {
    title: 'Implemented',
    color: TEAL,
    items: [
      'Organization-scoped API — NestJS, PostgreSQL, Prisma',
      'Roles: Admin, Operator and Viewer',
      'TOTP MFA with recovery codes; mandatory first-login password change',
      'Refresh-token rotation, session revocation and replay protection',
      'Audit log of administrative activity',
      'Sites, devices, telemetry and connectivity events',
      'Alerts with a resolution workflow and email notifications',
      'Evidence ledger with source, confidence and level',
      'Gateway-derived status for gateway-managed devices',
      'Site topology, incident rail and activity stream',
    ],
  },
  {
    title: 'Lab validated',
    color: CYAN,
    items: [
      'RTSP session negotiation (E5) and received RTP video packets (E6) on three Hikvision channels through a Speco NVR',
      'Speco watcher recovery path running against real lab telemetry',
    ],
  },
  {
    title: 'Pending & planned',
    color: 'rgba(238,242,250,0.45)',
    items: [
      'Direct-camera hardware validation',
      'Sustained periodic-scheduler operation',
      'Recording and retrieval proof (E7–E8)',
      'Dependency-aware operational topology and incident analysis',
      'Additional documented vendor adapters',
      'Deployment readiness: delivery, supervision and installation guidance',
    ],
  },
]

const ciSteps: Step[] = [
  { label: 'Prisma schema', meta: 'Schema validation' },
  { label: 'Migrations', meta: 'Applied to a PostgreSQL 16 service' },
  { label: 'Unit tests', meta: 'API · Jest' },
  { label: 'Integration tests', meta: 'API e2e suites, including security' },
  { label: 'Builds', meta: 'API build · dashboard type-check & build' },
]

const testInventory = [
  { count: 17, label: 'API unit test files', where: 'Run in CI' },
  { count: 6, label: 'API integration suites', where: 'Run in CI against PostgreSQL' },
  { count: 17, label: 'Python gateway test files', where: 'Run locally' },
]
const e2eSuites = ['security', 'fleet', 'telemetry-ingestion', 'device-availability', 'device-intelligence', 'site-fleet-reliability']

const boundaries = [
  'Runs in a lab environment — not deployed as a production service',
  'Validated hardware: one Speco NVR and three Hikvision cameras',
  'E5/E6 results are authenticated probe attestations, not independent packet captures',
  'The data model covers more device types (access controllers, sensors, intercoms, switches) than the lab has validated',
]

export default function PsopBody({ project }: { project: Project }) {
  const statusColor = toneColor[project.status.tone]

  return (
    <div className="mx-auto max-w-[1320px] px-6 pb-24 md:px-10">
      {/* Hero */}
      <header className="pb-6 pt-14 md:pt-20">
        <Link
          href="/projects"
          className="group mb-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-35)] transition hover:text-[var(--pb-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Projects
        </Link>

        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:items-center xl:gap-14">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span
              className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.16em]"
              style={{ borderColor: `${statusColor}4d`, background: `${statusColor}14`, color: statusColor }}
            >
              <SignalDot accent={statusColor} size={5} active={false} />
              {project.status.label}
            </span>
            <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-black leading-[0.98] tracking-[-0.03em] text-[var(--pb-ink)]">{project.name}</h1>
            <p className="mt-3 text-[16px] font-semibold text-[var(--pb-ink-70)]">{project.fullName}</p>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-[var(--pb-ink-55)]">
              Operational visibility for cameras, recorders and the infrastructure behind them. PSOP keeps device
              connectivity, observed function and the freshness of each observation as separate, inspectable evidence.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-md px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#05202a] transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
                style={{ background: `linear-gradient(120deg, ${CYAN}, ${TEAL})` }}
              >
                <SiGithub className="h-3.5 w-3.5" />
                View source on GitHub
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-md border border-[var(--pb-border)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:border-[var(--pb-cyan)]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
              >
                All projects
              </Link>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2" aria-label="Technologies">
              {project.tags.map((t) => (
                <li key={t} className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--pb-ink-55)]">
                  <span aria-hidden className="h-[3px] w-[3px] rounded-full" style={{ background: CYAN }} />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.figure initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }}>
            <div className="overflow-hidden rounded-lg border border-[#22d3ee]/20 shadow-[0_30px_80px_-40px_rgba(34,211,238,0.35)]">
              <Image
                src="/psop/dashboard.png"
                alt="PSOP operations dashboard for the lab site: device health, active alerts and recent events"
                width={1694}
                height={1294}
                priority
                sizes="(min-width: 1280px) 640px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-2.5 text-[11.5px] text-[var(--pb-ink-35)]">
              Real screenshot — the operations dashboard running against the lab site.
            </figcaption>
          </motion.figure>
        </div>
      </header>

      {/* 01 — Problem */}
      <Section
        id="problem"
        index="01"
        kicker="The problem"
        accent={CYAN}
        title="“Online” is not the same as working"
        intro="Collapsing everything into a single online indicator hides the difference between device connectivity and the function an operator actually depends on."
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <ul className="space-y-5">
            {[
              'A camera can answer on the network without producing usable video.',
              'A stream session can be negotiated and still deliver no video packets.',
              'A check that passed earlier may no longer describe the site.',
            ].map((t) => (
              <li key={t} className="border-l-2 pl-4 text-[15px] font-semibold leading-[1.55] text-[var(--pb-ink-70)]" style={{ borderColor: `${CYAN}55` }}>
                {t}
              </li>
            ))}
          </ul>
          <div>
            <div className={kicker} style={{ color: CYAN }}>
              Why it exists
            </div>
            <p className="mt-3 text-[14px] leading-[1.75] text-[var(--pb-ink-55)]">
              Fifteen years of field work with CCTV, alarms and monitoring in Brazil showed the gap firsthand: a
              recorder reported as online is not proof that a recording exists. PSOP turns that field question into
              software:
            </p>
            <p className="mt-4 text-[16px] font-bold leading-[1.5] text-[var(--pb-ink)]">
              What evidence do we have that this part of the security system is working — and how recent is it?
            </p>
          </div>
        </div>
      </Section>

      {/* 02 — Architecture */}
      <Section id="architecture" index="02" kicker="Architecture" accent={CYAN} title="From the device to inspectable evidence">
        <GlassCard className="bg-[var(--pb-navy)] p-6 md:p-9">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(800px 360px at 50% 0%, rgba(34,211,238,0.09), transparent 70%)' }}
          />
          <ol className="relative grid gap-4 xl:grid-cols-5 xl:gap-3">
            {architecture.map(({ Icon, label, tech, detail }, i) => (
              <li key={label} className="relative">
                <div className="flex h-full gap-4 rounded-md border border-white/[0.09] bg-white/[0.02] p-4 xl:flex-col xl:gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#22d3ee]/30 bg-[#22d3ee]/[0.06] text-[#7fe3f2]">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[14px] font-bold text-[var(--pb-ink)]">{label}</div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: CYAN }}>
                      {tech}
                    </div>
                    <p className="mt-2 text-[12px] leading-[1.55] text-[var(--pb-ink-55)]">{detail}</p>
                  </div>
                </div>
                {i < architecture.length - 1 && (
                  <span aria-hidden className="flex justify-center py-1 text-[#22d3ee]/50 xl:absolute xl:-right-[11px] xl:top-1/2 xl:z-10 xl:-translate-y-1/2 xl:py-0">
                    <ArrowDown className="h-4 w-4 xl:hidden" />
                    <ArrowRight className="hidden h-4 w-4 xl:block" />
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="relative mt-8 grid gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-3">
            {signals.map((s) => (
              <div key={s.label}>
                <div className={kicker} style={{ color: CYAN }}>
                  {s.label}
                </div>
                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[var(--pb-ink-55)]">{s.detail}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </Section>

      {/* 03 — Evidence model */}
      <Section
        id="evidence"
        index="03"
        kicker="Evidence model"
        accent={CYAN}
        title="A ladder of proof, not a status light"
        intro="Every observation records how far up this ladder it reaches. The levels are defined in PSOP's data model; how far each has been proven is stated explicitly."
      >
        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr_1fr]">
          {ladder.map((tier) => (
            <div key={tier.state} className="rounded-lg border p-5" style={{ borderColor: `color-mix(in srgb, ${tier.color} 30%, transparent)` }}>
              <div className={kicker} style={{ color: tier.color }}>
                {tier.state}
              </div>
              <p className="mt-1 text-[11.5px] text-[var(--pb-ink-35)]">{tier.note}</p>
              <ol className="mt-4 space-y-2">
                {tier.levels.map((l) => (
                  <li key={l} className="flex items-center gap-2.5 font-mono text-[12px] text-[var(--pb-ink-70)]">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: tier.color }} />
                    {l}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-[12px] leading-[1.6] text-[var(--pb-ink-35)]">
          E5/E6 were first measured through the recorder&apos;s own RTSP service, with a stream URI taken from the recorder UI.
          They are authenticated probe attestations, stored with OBSERVED confidence — never promoted automatically.
        </p>
      </Section>

      {/* 04 — What's built */}
      <Section id="status" index="04" kicker="What has been built" accent={CYAN} title="Implemented, validated and planned — kept apart">
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-3">
          {status.map((col) => (
            <div key={col.title} className="border-t-2 pt-4" style={{ borderColor: `color-mix(in srgb, ${col.color} 60%, transparent)` }}>
              <div className={kicker} style={{ color: col.color }}>
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="text-[13px] leading-[1.55] text-[var(--pb-ink-70)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 05 — Engineering evidence */}
      <Section
        id="engineering"
        index="05"
        kicker="Engineering evidence"
        accent={CYAN}
        title="Tested against a real database, on every change"
        intro="The PSOP CI workflow runs on pull requests and pushes to main. Migrations and the integration suites run against a PostgreSQL 16 service container."
      >
        <GlassCard className="bg-[var(--pb-navy)] p-6 md:p-9">
          <div className="relative">
            <div className="mb-6 font-mono text-[13px] font-bold text-[var(--pb-ink)]">PSOP CI</div>
            <Flow steps={ciSteps} accent={CYAN} />
          </div>

          <div className="relative mt-10 grid gap-8 border-t border-[var(--pb-border)] pt-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14">
            <dl className="flex flex-wrap gap-x-10 gap-y-5">
              {testInventory.map((t) => (
                <div key={t.label}>
                  <dd className="text-[40px] font-black leading-none tracking-[-0.03em] text-[var(--pb-ink)]">{t.count}</dd>
                  <dt className="mt-2 text-[12.5px] font-semibold text-[var(--pb-ink-70)]">{t.label}</dt>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--pb-ink-35)]">{t.where}</div>
                </div>
              ))}
            </dl>
            <div>
              <div className={kicker} style={{ color: 'var(--pb-ink-35)' }}>
                Integration suites
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {e2eSuites.map((s) => (
                  <li key={s} className="rounded-sm border border-[#22d3ee]/25 px-2 py-1 font-mono text-[11px] text-[var(--pb-ink-70)]">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[12px] leading-[1.6] text-[var(--pb-ink-35)]">
                Run history is public in the repository&apos;s{' '}
                <a href={`${REPO}/actions`} target="_blank" rel="noopener noreferrer" className="underline decoration-[var(--pb-border-strong)] underline-offset-2 transition hover:text-[var(--pb-cyan)]">
                  Actions tab
                </a>
                .
              </p>
            </div>
          </div>
        </GlassCard>

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-10">
            <div className={kicker} style={{ color: 'var(--pb-ink-55)' }}>
              Real screens from the lab site
            </div>
            <div className="mt-4">
              <ProjectGallery images={project.gallery} accent={project.accent} />
            </div>
          </div>
        )}
      </Section>

      {/* 06 — Boundaries */}
      <Section
        id="boundaries"
        index="06"
        kicker="Engineering boundaries"
        accent={CYAN}
        title="Lab-stage work, stated as such"
        intro="PSOP is not a deployed commercial platform. Lab validation describes specific hardware observations — not general manufacturer compatibility or production readiness."
      >
        <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
          {boundaries.map((b) => (
            <li key={b} className="flex gap-3 text-[13.5px] leading-[1.6] text-[var(--pb-ink-70)]">
              <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#22d3ee]/70" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:text-[var(--pb-cyan)]"
          >
            <SiGithub className="h-3.5 w-3.5" style={{ color: CYAN }} />
            PSOP repository
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </a>
          <Link
            href="/projects/fsop"
            className="group inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-55)] transition hover:text-[var(--pb-cyan)]"
          >
            Next: FSOP
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-55)] transition hover:text-[var(--pb-cyan)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to projects
          </Link>
        </div>
      </Section>
    </div>
  )
}
