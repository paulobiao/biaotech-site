'use client'

import type { ComponentType, CSSProperties, ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowLeft, ArrowRight, KeyRound, ListChecks } from 'lucide-react'
import { FaAws } from 'react-icons/fa'
import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiGithubactions,
  SiNginx,
  SiPm2,
  SiPostgresql,
  SiReact,
} from 'react-icons/si'
import { SignalDot, SignalTag, useSafeReducedMotion } from '@/components/signal-node'
import GlassCard from '@/components/ui/glass-card'
import { toneColor, type Project } from '@/lib/projects-data'

/*
 * Every claim on this page is derived from github.com/paulobiao/biaotech-api
 * (backend/src, .github/workflows/deploy.yml, nginx/, tests/). The EC2 environment
 * is not running, so no live endpoint is linked or shown with a status.
 * Not established by the repo, and therefore never drawn: the API reverse-proxy/TLS
 * setup and where production PostgreSQL was hosted.
 */
const REPO = 'https://github.com/paulobiao/biaotech-api'
const CLOUD_LAB_REPO = 'https://github.com/paulobiao/biaotech-cloud-lab'
const BLUE = '#60a5fa'
const VIOLET = '#a78bfa'

type Icon = ComponentType<{ size?: string | number; className?: string }>

const stack = ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'AWS EC2', 'GitHub Actions', 'PM2']

/* ───────────────────────── Shared primitives ───────────────────────── */

export function Section({ id, index, kicker, title, intro, accent = 'var(--pb-blue)', children }: { id: string; index: string; kicker: string; title: string; intro?: string; accent?: string; children: ReactNode }) {
  return (
    <motion.section
      aria-labelledby={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mt-24 md:mt-32"
    >
      <SignalTag accent={accent} active={false}>
        {index} · {kicker}
      </SignalTag>
      <h2 id={id} className="mt-3 max-w-3xl text-[clamp(1.5rem,2.8vw,2.1rem)] font-black leading-[1.15] tracking-[-0.025em] text-[var(--pb-ink)]">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.75] text-[var(--pb-ink-55)]">{intro}</p>}
      <div className="mt-10">{children}</div>
    </motion.section>
  )
}

export type Step = { label: string; meta: string }

/** One connected progression: vertical on mobile, horizontal from md. */
export function Flow({ steps, accent = BLUE, numbered = false }: { steps: Step[]; accent?: string; numbered?: boolean }) {
  return (
    <ol
      className="relative grid gap-6 md:gap-4 md:[grid-template-columns:repeat(var(--n),minmax(0,1fr))]"
      style={{ '--n': steps.length } as CSSProperties}
    >
      <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px md:hidden" style={{ background: `color-mix(in srgb, ${accent} 30%, transparent)` }} />
      <span
        aria-hidden
        className="absolute left-0 right-0 top-[7px] hidden h-px md:block"
        style={{ background: `linear-gradient(90deg, color-mix(in srgb, ${accent} 45%, transparent) 70%, transparent)` }}
      />
      {steps.map((s, i) => (
        <li key={s.label} className="relative flex gap-4 md:block">
          <span className="relative z-10 mt-0.5 block h-[15px] w-[15px] shrink-0 rounded-full border-2 bg-[var(--pb-navy)] md:mt-0" style={{ borderColor: accent }} />
          <div className="md:mt-4 md:pr-2">
            {numbered && (
              <div className="font-mono text-[10px] font-bold tracking-[0.16em]" style={{ color: accent }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            )}
            <div className="text-[13.5px] font-bold leading-snug text-[var(--pb-ink)]">{s.label}</div>
            <div className="mt-1 text-[12px] leading-[1.5] text-[var(--pb-ink-55)]">{s.meta}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}

const kicker = 'font-mono text-[10px] font-bold uppercase tracking-[0.18em]'

/* ───────────────────────── Hero architecture ───────────────────────── */

const delivery: { Icon: Icon; label: string; meta: string }[] = [
  { Icon: SiGithub, label: 'GitHub', meta: 'push · main' },
  { Icon: SiGithubactions, label: 'Actions', meta: 'workflow' },
  { Icon: ListChecks, label: 'Validation', meta: 'types · lint · tests' },
  { Icon: KeyRound, label: 'SSH deploy', meta: 'needs: test' },
]

const ec2Groups: { title: string; nodes: { Icon: Icon; label: string; meta: string }[] }[] = [
  {
    title: 'Web',
    nodes: [
      { Icon: SiReact, label: 'React SPA', meta: 'built on deploy' },
      { Icon: SiNginx, label: 'Nginx', meta: 'serves the SPA' },
    ],
  },
  {
    title: 'API',
    nodes: [
      { Icon: SiExpress, label: 'Express · TS', meta: 'REST API' },
      { Icon: SiPm2, label: 'PM2', meta: 'process manager' },
    ],
  },
]

function NodeIcon({ Icon, size = 'md' }: { Icon: Icon; size?: 'sm' | 'md' }) {
  const box = size === 'md' ? 'h-10 w-10' : 'h-8 w-8'
  return (
    <span className={`relative z-10 flex ${box} shrink-0 items-center justify-center rounded-md border border-white/15 bg-[#0b1220] text-white/75`}>
      <Icon size={size === 'md' ? 16 : 14} />
    </span>
  )
}

function ArchitectureVisual() {
  const reduceMotion = useSafeReducedMotion()
  // A one-time draw-in of the delivery path — a deploy sequence, not live traffic.
  const draw = (axis: 'x' | 'y', delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { [axis === 'x' ? 'scaleX' : 'scaleY']: 0 },
          animate: { [axis === 'x' ? 'scaleX' : 'scaleY']: 1 },
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <figure aria-label="BiaoTech API deployment architecture, derived from the source repository">
      <GlassCard className="bg-[var(--pb-navy)] p-5 sm:p-7">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(620px 340px at 70% 0%, rgba(47,111,237,0.13), transparent 70%)' }}
        />

        {/* Source & delivery */}
        <div className="relative">
          <div className={kicker} style={{ color: BLUE }}>
            Source & delivery
          </div>
          <div className="relative mt-5 grid grid-cols-4">
            <motion.span
              aria-hidden
              {...draw('x', 0.3)}
              style={{ transformOrigin: 'left' }}
              className="absolute left-[12.5%] right-[12.5%] top-[19px] h-px bg-[#60a5fa]/40"
            />
            {delivery.map(({ Icon, label, meta }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <NodeIcon Icon={Icon} />
                <div className="mt-2.5 text-[12px] font-bold text-[var(--pb-ink)]">{label}</div>
                <div className="mt-0.5 font-mono text-[10px] leading-tight text-[var(--pb-ink-35)]">{meta}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SSH deploy lands on the instance */}
        <div className="relative grid h-9 grid-cols-4" aria-hidden>
          <motion.span {...draw('y', 0.9)} style={{ transformOrigin: 'top' }} className="col-start-4 mx-auto mt-1.5 h-full w-px bg-[#60a5fa]/40" />
        </div>

        {/* The deployed instance */}
        <div className="relative rounded-lg border border-[#FF9900]/40 bg-[#FF9900]/[0.035] p-3.5 shadow-[0_0_0_1px_rgba(255,153,0,0.05),0_18px_40px_-24px_rgba(255,153,0,0.35)] sm:p-4">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <FaAws size={18} className="translate-y-[3px] text-[#FF9900]/85" />
            <span className="text-[13px] font-bold text-[var(--pb-ink)]">AWS EC2</span>
            <span className="font-mono text-[10px] text-[var(--pb-ink-35)]">single instance · manually provisioned</span>
          </div>
          <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:gap-3">
            {ec2Groups.map((g) => (
              <div key={g.title} className="rounded-md border border-white/[0.09] bg-white/[0.02] p-2.5 sm:p-3">
                <div className="font-mono text-[9.5px] font-bold uppercase tracking-[0.18em] text-[var(--pb-ink-35)]">{g.title}</div>
                <ul className="mt-2.5 space-y-2.5">
                  {g.nodes.map(({ Icon, label, meta }) => (
                    <li key={label} className="flex items-center gap-2.5">
                      <NodeIcon Icon={Icon} size="sm" />
                      <div className="min-w-0">
                        <div className="text-[12px] font-bold leading-tight text-[var(--pb-ink)]">{label}</div>
                        <div className="text-[10.5px] leading-tight text-[var(--pb-ink-55)]">{meta}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* API → database: the relationship is verified, the hosting location is not */}
        <div className="relative grid grid-cols-2 gap-3">
          <div className="col-start-2 flex flex-col items-center">
            <span aria-hidden className="h-6 border-l border-dashed border-white/25" />
            <div className="flex items-center gap-2.5 rounded-md border border-white/[0.12] bg-white/[0.02] px-3 py-2">
              <NodeIcon Icon={SiPostgresql} size="sm" />
              <div>
                <div className="text-[12px] font-bold leading-tight text-[var(--pb-ink)]">PostgreSQL</div>
                <div className="text-[10.5px] leading-tight text-[var(--pb-ink-55)]">hosting not in repo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Outside production */}
        <div className="relative mt-6 flex flex-col gap-3 border-t border-dashed border-white/[0.12] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2 self-start rounded-sm border border-dashed border-white/20 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-35)]">
            <SiDocker size={12} /> Docker Compose · local dev
          </span>
          <span className="text-[11px] leading-snug text-[var(--pb-ink-35)] sm:text-right">API proxy / TLS config not preserved in repo</span>
        </div>
      </GlassCard>
    </figure>
  )
}

function Hero({ project }: { project: Project }) {
  const statusColor = toneColor[project.status.tone]
  return (
    <header className="pb-6 pt-14 md:pt-20">
      <Link
        href="/projects"
        className="group mb-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-35)] transition hover:text-[var(--pb-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        Projects
      </Link>

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-center xl:gap-14">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span
            className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.16em]"
            style={{ borderColor: `${statusColor}4d`, background: `${statusColor}14`, color: statusColor }}
          >
            <SignalDot accent={statusColor} size={5} active={false} />
            {project.status.label}
            {project.status.detail && <span className="text-[var(--pb-ink-55)]">· {project.status.detail}</span>}
          </span>

          <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-black leading-[0.98] tracking-[-0.03em] text-[var(--pb-ink)]">{project.name}</h1>
          <p className="mt-3 text-[16px] font-semibold text-[var(--pb-ink-70)]">{project.category}</p>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-[var(--pb-ink-55)]">
            A TypeScript/Express REST API built to take a backend through the complete engineering path — from
            authentication and database integration to automated testing, CI/CD and deployment on AWS EC2.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-md px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
              style={{ background: 'linear-gradient(120deg, var(--pb-blue), #1c8fae)' }}
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
            {stack.map((t) => (
              <li key={t} className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--pb-ink-55)]">
                <span aria-hidden className="h-[3px] w-[3px] rounded-full" style={{ background: BLUE }} />
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-xl text-[12px] leading-[1.6] text-[var(--pb-ink-35)]">
            The EC2 environment is offline, so no live endpoints are linked. Everything here is derived from the source
            repository.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }}>
          <ArchitectureVisual />
        </motion.div>
      </div>
    </header>
  )
}

/* ───────────────────────── Content ───────────────────────── */

const lifecycle: Step[] = [
  { label: 'API design', meta: 'Express 5 · REST · OpenAPI 3' },
  { label: 'Database', meta: 'PostgreSQL · SQL migrations' },
  { label: 'Auth & security', meta: 'JWT · RBAC · Helmet' },
  { label: 'Testing', meta: 'Jest · Supertest' },
  { label: 'CI/CD', meta: 'GitHub Actions' },
  { label: 'Cloud deploy', meta: 'AWS EC2 · PM2' },
]

type Access = 'Public' | 'Docs' | 'JWT' | 'JWT + Admin'
const accessColor: Record<Access, string> = {
  Public: 'rgba(238,242,250,0.55)',
  Docs: 'rgba(238,242,250,0.55)',
  JWT: BLUE,
  'JWT + Admin': VIOLET,
}

const apiGroups: { title: string; routes: { method: string; path: string; access: Access; note?: string }[] }[] = [
  {
    title: 'System',
    routes: [
      { method: 'GET', path: '/', access: 'Public' },
      { method: 'GET', path: '/api/health', access: 'Public', note: 'Database-aware health check' },
      { method: 'GET', path: '/api/docs', access: 'Docs', note: 'Swagger UI · OpenAPI 3.0' },
    ],
  },
  {
    title: 'Authentication',
    routes: [
      { method: 'POST', path: '/api/auth/login', access: 'Public' },
      { method: 'POST', path: '/api/auth/refresh', access: 'Public' },
      { method: 'GET', path: '/api/auth/me', access: 'JWT' },
    ],
  },
  {
    title: 'Users',
    routes: [
      { method: 'GET', path: '/api/users', access: 'JWT', note: '?page · limit · search' },
      { method: 'GET', path: '/api/users/:id', access: 'JWT' },
      { method: 'POST', path: '/api/users', access: 'JWT + Admin' },
      { method: 'PUT', path: '/api/users/:id', access: 'JWT + Admin' },
      { method: 'DELETE', path: '/api/users/:id', access: 'JWT + Admin' },
    ],
  },
]
const routeCount = apiGroups.reduce((n, g) => n + g.routes.length, 0)

const securityGroups = [
  {
    title: 'Authentication',
    items: ['JWT access tokens · 1h default', 'Refresh tokens · 7d default', 'Separate signing secrets', 'bcrypt password hashing'],
  },
  {
    title: 'Authorization',
    items: ['RBAC with admin and user roles', 'authorizeRoles("admin") on every user write', 'JWT required on all user reads'],
  },
  {
    title: 'API hardening',
    items: ['Helmet security headers', 'Rate limit · 100 req / 15 min', 'CORS allowlist from config', 'Zod request validation'],
  },
  {
    title: 'Operations',
    items: [
      'Health check runs SELECT 1 · HTTP 500 when the database is unreachable',
      'X-Request-Id on every response',
      'Pino structured request logs',
      'Centralized 404 and error handling',
      'Admin seed refuses to run without ADMIN_PASSWORD',
    ],
  },
]

const testStages: Step[] = [
  { label: 'Push to main', meta: 'Workflow trigger' },
  { label: 'Type check', meta: 'tsc --noEmit' },
  { label: 'Lint', meta: 'ESLint' },
  { label: 'Tests', meta: 'Jest + Supertest against a PostgreSQL 16 service container' },
]
const deployStages: Step[] = [
  { label: 'SSH', meta: 'appleboy/ssh-action' },
  { label: 'AWS EC2', meta: 'Reset to main · npm build' },
  { label: 'PM2', meta: 'Restart the backend process' },
  { label: 'Nginx', meta: 'SPA build copied · config test · reload' },
]

const testSuites = [
  { title: 'Auth', count: 2 },
  { title: 'Health', count: 1 },
  { title: 'Users', count: 8 },
]
const testCount = testSuites.reduce((n, s) => n + s.count, 0)
const selectedTests = [
  'Logs in and returns a JWT',
  'Denies access without a token',
  'Validates the user name',
  'Denies delete for the user role',
  'Allows delete for the admin role',
  'Reports API health',
]

type Direction = 'cloud-lab' | 'identified'
const decisions: { approach: string; detail: string; next: string; kind: Direction }[] = [
  { approach: 'Single EC2 instance', detail: 'One host, no horizontal scaling.', next: 'Reproducible infrastructure that can be recreated from code', kind: 'cloud-lab' },
  { approach: 'Manual provisioning', detail: 'The original deployment was not defined as Infrastructure as Code.', next: 'Terraform-defined AWS architecture', kind: 'cloud-lab' },
  { approach: 'SSH deployment', detail: 'CI held a long-lived SSH key in repository secrets.', next: 'OIDC-based, least-privilege delivery design', kind: 'cloud-lab' },
  { approach: 'PM2 host process', detail: 'Production ran as a PM2-managed Node process, not containers.', next: 'Container-oriented workloads', kind: 'cloud-lab' },
  { approach: 'Docker for local dev only', detail: 'Compose ran the API, PostgreSQL and Adminer locally — never the production runtime.', next: 'The container image as the deployable unit', kind: 'cloud-lab' },
  { approach: 'localStorage tokens', detail: 'Simple to build, but readable by any script on the page.', next: 'httpOnly, SameSite=Strict refresh cookie; access token in memory', kind: 'identified' },
]
const directionTag: Record<Direction, { label: string; color: string }> = {
  'cloud-lab': { label: 'Cloud Lab design', color: VIOLET },
  identified: { label: 'Identified · not implemented', color: 'rgba(238,242,250,0.5)' },
}

const evolution = {
  api: ['AWS EC2', 'GitHub Actions', 'SSH deploy', 'PM2', 'Manual provisioning'],
  lab: ['Terraform', 'Containers', 'GitHub OIDC', 'Least privilege', 'Zero-spend guardrails'],
}

/* ───────────────────────── Page ───────────────────────── */

export default function BiaotechBody({ project }: { project: Project }) {
  return (
    <div className="mx-auto max-w-[1320px] px-6 pb-24 md:px-10">
      <Hero project={project} />

      {/* 01 — Goal */}
      <Section
        id="goal"
        index="01"
        kicker="Engineering goal"
        title="A small scope, carried through the whole lifecycle"
        intro="An end-to-end backend and cloud-deployment exercise. The business scope is intentionally small — authentication, user management and administrative operations — so the engineering effort goes into everything around it."
      >
        <Flow steps={lifecycle} numbered />
      </Section>

      {/* 02 — API & security */}
      <Section
        id="api-security"
        index="02"
        kicker="API & security"
        title={`${routeCount} routes, three access levels, layered controls`}
        intro="Documented with swagger-jsdoc annotations and served as Swagger UI. Every user route requires a JWT; every write also requires the admin role."
      >
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:gap-14">
          {/* Route surface */}
          <GlassCard className="self-start p-5 md:p-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className={kicker} style={{ color: 'var(--pb-ink-70)' }}>
                Route surface
              </span>
              <span className="ml-auto flex flex-wrap gap-x-3 gap-y-1">
                {(['Public', 'JWT', 'JWT + Admin'] as Access[]).map((a) => (
                  <span key={a} className="flex items-center gap-1.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.1em]" style={{ color: accessColor[a] }}>
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: accessColor[a] }} />
                    {a}
                  </span>
                ))}
              </span>
            </div>
            {apiGroups.map((g) => (
              <div key={g.title} className="mt-6">
                <div className="font-mono text-[9.5px] font-bold uppercase tracking-[0.2em] text-[var(--pb-ink-35)]">{g.title}</div>
                <ul className="mt-1.5 divide-y divide-[var(--pb-border)]">
                  {g.routes.map((r) => (
                    <li key={r.method + r.path} className="py-2.5">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span className="w-[54px] font-mono text-[10.5px] font-bold tracking-[0.06em]" style={{ color: BLUE }}>
                          {r.method}
                        </span>
                        <span className="font-mono text-[13px] text-[var(--pb-ink)]">{r.path}</span>
                        <span
                          className="ml-auto rounded-sm border px-1.5 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.1em]"
                          style={{ color: accessColor[r.access], borderColor: `color-mix(in srgb, ${accessColor[r.access]} 35%, transparent)` }}
                        >
                          {r.access}
                        </span>
                      </div>
                      {r.note && <div className="mt-1 pl-[66px] text-[11.5px] text-[var(--pb-ink-35)]">{r.note}</div>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </GlassCard>

          {/* Controls */}
          <div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
              {securityGroups.map((g) => (
                <div key={g.title} className="border-t pt-4" style={{ borderColor: 'color-mix(in srgb, #60a5fa 35%, transparent)' }}>
                  <div className={kicker} style={{ color: BLUE }}>
                    {g.title}
                  </div>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((item) => (
                      <li key={item} className="text-[13px] leading-[1.5] text-[var(--pb-ink-70)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l-2 pl-4" style={{ borderColor: 'color-mix(in srgb, #60a5fa 55%, transparent)' }}>
              <div className={kicker} style={{ color: BLUE }}>
                Trade-off · token storage
              </div>
              <p className="mt-2 text-[13px] leading-[1.7] text-[var(--pb-ink-70)]">
                The React client keeps both tokens in <code className="font-mono text-[12px]">localStorage</code> — simple, and
                documented in the repository, but readable by any script on the page. The identified improvement is an{' '}
                <code className="font-mono text-[12px]">httpOnly</code> refresh cookie with the access token held in memory.
              </p>
            </div>

            <figure className="mt-8">
              <div className="rounded-md border border-[var(--pb-border)] bg-[var(--pb-navy)]/70">
                <div className="border-b border-[var(--pb-border)] px-4 py-2 font-mono text-[10.5px] text-[var(--pb-ink-35)]">/api/health · response shape</div>
                <pre className="overflow-x-auto px-4 py-3 font-mono text-[11.5px] leading-[1.65] text-[var(--pb-ink-55)]">
{`{ "success": true, "status": "ok",
  "service": "biaotech-api",
  "environment": <NODE_ENV>,
  "database": "connected",
  "uptime": <process.uptime()>,
  "timestamp": <ISO-8601> }`}
                </pre>
              </div>
              <figcaption className="mt-2 text-[11.5px] text-[var(--pb-ink-35)]">
                Response shape from healthController.ts — not a captured live response.
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* 03 — Testing & delivery */}
      <Section
        id="delivery"
        index="03"
        kicker="Testing & delivery"
        title="Deployment gated behind a real test suite"
        intro="One GitHub Actions workflow runs on every push to main. The deploy job declares needs: test — nothing reaches EC2 unless types, lint and the integration suite pass against a real PostgreSQL."
      >
        <GlassCard className="bg-[var(--pb-navy)] p-6 md:p-9">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(800px 360px at 20% 0%, rgba(47,111,237,0.1), transparent 70%)' }}
          />
          <div className="relative">
            <div className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-[13px] font-bold text-[var(--pb-ink)]">job: test</span>
              <span className="font-mono text-[10.5px] text-[var(--pb-ink-35)]">ubuntu-latest · Node.js 20</span>
            </div>
            <Flow steps={testStages} />

            <div className="my-8 flex items-center gap-3" aria-label="The deploy job runs only after the test job succeeds">
              <span aria-hidden className="h-px flex-1 border-t border-dashed border-[#60a5fa]/30" />
              <span className="flex items-center gap-2 rounded-full border border-[#60a5fa]/35 px-3 py-1 font-mono text-[10.5px] font-bold text-[#93c5fd]">
                <ArrowDown className="h-3.5 w-3.5" /> needs: test
              </span>
              <span aria-hidden className="h-px flex-1 border-t border-dashed border-[#60a5fa]/30" />
            </div>

            <div className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-[13px] font-bold text-[var(--pb-ink)]">job: deploy</span>
              <span className="font-mono text-[10.5px] text-[var(--pb-ink-35)]">SSH into the EC2 host</span>
            </div>
            <Flow steps={deployStages} />
          </div>

          {/* Test evidence */}
          <div className="relative mt-10 grid gap-8 border-t border-[var(--pb-border)] pt-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-[56px] font-black leading-none tracking-[-0.04em] text-[var(--pb-ink)]">{testCount}</span>
                <span className="text-[13px] font-semibold leading-tight text-[var(--pb-ink-70)]">
                  integration
                  <br />
                  tests
                </span>
              </div>
              <dl className="mt-5 flex gap-7">
                {testSuites.map((s) => (
                  <div key={s.title}>
                    <dt className="font-mono text-[9.5px] font-bold uppercase tracking-[0.18em] text-[var(--pb-ink-35)]">{s.title}</dt>
                    <dd className="mt-1 text-[20px] font-black" style={{ color: BLUE }}>
                      {s.count}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <div className={kicker} style={{ color: 'var(--pb-ink-35)' }}>
                Selected cases
              </div>
              <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {selectedTests.map((t) => (
                  <li key={t} className="flex gap-2.5 text-[13px] leading-[1.5] text-[var(--pb-ink-70)]">
                    <span aria-hidden className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-[#60a5fa]/60" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[12px] leading-[1.6] text-[var(--pb-ink-35)]">
                Run history is public in the repository&apos;s{' '}
                <a href={`${REPO}/actions`} target="_blank" rel="noopener noreferrer" className="underline decoration-[var(--pb-border-strong)] underline-offset-2 transition hover:text-[var(--pb-cyan)]">
                  Actions tab
                </a>
                ; no live pipeline status is shown here.
              </p>
            </div>
          </div>
        </GlassCard>
      </Section>

      {/* 04 — Decisions */}
      <Section
        id="decisions"
        index="04"
        kicker="Engineering decisions"
        title="Boundaries of the original approach"
        intro="The right column is direction, not retrofit — none of it was implemented in BiaoTech API."
      >
        <div className="border-b border-[var(--pb-border)]">
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 pb-3 md:grid">
            <span className={kicker} style={{ color: 'var(--pb-ink-35)' }}>
              Original approach
            </span>
            <span className={kicker} style={{ color: 'var(--pb-ink-35)' }}>
              Lesson / next step
            </span>
          </div>
          {decisions.map((d) => {
            const tag = directionTag[d.kind]
            return (
              <div key={d.approach} className="grid gap-3 border-t border-[var(--pb-border)] py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
                <div>
                  <div className="text-[15px] font-bold text-[var(--pb-ink)]">{d.approach}</div>
                  <p className="mt-1 text-[13px] leading-[1.6] text-[var(--pb-ink-55)]">{d.detail}</p>
                </div>
                <div className="flex gap-3 md:block">
                  <ArrowRight aria-hidden className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--pb-ink-35)] md:hidden" />
                  <div>
                    <div className="text-[14px] leading-[1.55] text-[var(--pb-ink-70)]">{d.next}</div>
                    <span className="mt-1.5 inline-block font-mono text-[9.5px] font-bold uppercase tracking-[0.14em]" style={{ color: tag.color }}>
                      {tag.label}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-5 max-w-3xl text-[12.5px] leading-[1.7] text-[var(--pb-ink-35)]">
          Evidence boundaries: the previously deployed AWS environment is currently offline, and the repository does not
          preserve the API reverse-proxy/TLS configuration or where production PostgreSQL was hosted.
        </p>
      </Section>

      {/* 05 — Evolution */}
      <Section
        id="evolution"
        index="05"
        kicker="Evolution"
        title="From deployment to reproducible infrastructure"
        intro="The limits of a manually provisioned, SSH-deployed server motivated the next infrastructure exercise."
      >
        <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
          <EvolutionPanel accent={BLUE} status="Deployed project" name="BiaoTech API" items={evolution.api} />
          <div aria-hidden className="flex items-center justify-center gap-2 py-1 font-mono text-[9.5px] font-bold uppercase tracking-[0.2em] text-[var(--pb-ink-35)] lg:flex-col">
            <ArrowDown className="h-4 w-4 lg:hidden" />
            <ArrowRight className="hidden h-4 w-4 lg:block" />
            Evolution
          </div>
          <EvolutionPanel
            accent={VIOLET}
            status="Design validated · not deployed"
            name="BiaoTech Cloud Lab"
            items={evolution.lab}
            statement="AWS architecture defined in Terraform — not deployed."
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={CLOUD_LAB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:text-[var(--pb-cyan)]"
          >
            <SiGithub className="h-3.5 w-3.5" style={{ color: VIOLET }} />
            BiaoTech Cloud Lab repository
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </a>
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

function EvolutionPanel({ accent, status, name, items, statement }: { accent: string; status: string; name: string; items: string[]; statement?: string }) {
  return (
    <div
      className="rounded-lg border p-6 md:p-7"
      style={{
        borderColor: `color-mix(in srgb, ${accent} 28%, transparent)`,
        background: `linear-gradient(160deg, color-mix(in srgb, ${accent} 7%, transparent), transparent 60%)`,
      }}
    >
      <div className={kicker} style={{ color: accent }}>
        {status}
      </div>
      <div className="mt-2 text-[22px] font-black tracking-[-0.02em] text-[var(--pb-ink)]">{name}</div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((i) => (
          <li
            key={i}
            className="rounded-sm border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--pb-ink-70)]"
            style={{ borderColor: `color-mix(in srgb, ${accent} 25%, transparent)` }}
          >
            {i}
          </li>
        ))}
      </ul>
      {statement && <p className="mt-5 text-[13px] leading-[1.6] text-[var(--pb-ink-55)]">{statement}</p>}
    </div>
  )
}
