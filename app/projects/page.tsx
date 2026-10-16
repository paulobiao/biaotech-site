import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/section-header'
import ProjectCoverCard from '@/components/project-cover-card'
import { ProjectIdentifier } from '@/components/featured-project'
import { DestinationsStrip, PerfectPlanetHero } from '@/components/perfect-planet-feature'
import { BiaoTechVisual } from '@/components/project-visuals'
import { SignalDot } from '@/components/signal-node'
import { labProjects, primaryProjects, toneColor, type Project } from '@/lib/projects-data'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Perfect Planet, a personal aerial photography project, plus engineering platforms across physical security infrastructure, field-service operations and digital safety — PSOP, FSOP and DSOP.',
}

/** Secondary projects that get their own card; the rest stay in the Lab work line. */
const technicalVisuals: Record<string, () => JSX.Element> = { 'biaotech-api': BiaoTechVisual }
const technicalWork = labProjects.filter((p) => p.slug in technicalVisuals)
const labWork = labProjects.filter((p) => !(p.slug in technicalVisuals))

/** Compact horizontal card — deliberately smaller than the primary cover cards. */
function TechnicalWorkCard({ project }: { project: Project }) {
  const Visual = technicalVisuals[project.slug]
  const statusColor = toneColor[project.status.tone]
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`Explore project — ${project.name}, ${project.fullName}`}
      style={{ '--accent': project.accent } as CSSProperties}
      className="group grid max-w-[600px] overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] bg-[var(--pb-surface)] backdrop-blur-md transition-[border-color] duration-300 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:grid-cols-[250px_1fr]"
    >
      <div aria-hidden className="h-28 border-b border-[var(--pb-border)] sm:h-auto sm:border-b-0 sm:border-r">
        {Visual && <Visual />}
      </div>

      <div className="flex min-w-0 flex-col px-5 py-4">
        <h4 className="text-[17px] font-black leading-tight tracking-[-0.02em] text-[var(--pb-ink)]">{project.name}</h4>
        <p className="mt-0.5 text-[12px] font-semibold leading-snug text-[var(--pb-ink-70)]">{project.category}</p>
        <p className="mt-2 text-[12.5px] leading-[1.6] text-[var(--pb-ink-55)]">{project.description}</p>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[8.5px] font-bold uppercase tracking-[0.14em]" style={{ color: statusColor }}>
            <SignalDot accent={statusColor} size={5} />
            {project.status.label}
          </span>
          <ul className="flex flex-wrap gap-1" aria-label="Technologies">
            {project.tags.map((t) => (
              <li key={t} className="rounded-sm border border-[var(--pb-border)] px-1.5 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-[0.1em] text-[var(--pb-ink-55)]">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)]">
          Explore project
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" style={{ color: project.accent }} />
        </span>
      </div>
    </Link>
  )
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1560px] px-6 py-10 md:px-8 md:py-12">
      <SectionHeader
        kicker="Selected Work"
        title="Projects & Exploration"
        description="A collection of engineering platforms, infrastructure experiments and aerial visual work — from operational systems to places seen from above."
      />

      <PerfectPlanetHero />

      <div className="mt-9">
        <DestinationsStrip />
      </div>

      <section aria-labelledby="engineering-title" className="mt-10">
        <ProjectIdentifier project={{ number: '03', category: 'Engineering', accent: '#22d3ee' }} className="mb-2" />
        <h2 id="engineering-title" className="mb-4 text-[13.5px] leading-[1.7] text-[var(--pb-ink-55)]">
          Systems built from field experience.
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {primaryProjects.map((p) => (
            <ProjectCoverCard key={p.slug} project={p} />
          ))}
        </div>

        {technicalWork.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--pb-ink-55)]">
              Selected technical work
            </h3>
            {technicalWork.map((p) => (
              <TechnicalWorkCard key={p.slug} project={p} />
            ))}
          </div>
        )}

        {/* Supporting lab work stays reachable without adding another large section. */}
        <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-35)]">
          Lab work
          {labWork.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="text-[var(--pb-ink-55)] transition hover:text-[var(--pb-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
            >
              {p.name} →
            </Link>
          ))}
        </p>
      </section>
    </div>
  )
}
