import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/section-header'
import ProjectCoverCard from '@/components/project-cover-card'
import { ProjectIdentifier } from '@/components/featured-project'
import { DestinationsStrip, PerfectPlanetHero } from '@/components/perfect-planet-feature'
import TechnicalWorkCard, { technicalVisuals } from '@/components/technical-work-card'
import { labProjects, primaryProjects } from '@/lib/projects-data'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Perfect Planet, a personal aerial photography project, plus engineering platforms across physical security infrastructure, field-service operations and digital safety — PSOP, FSOP and DSOP.',
}

const technicalWork = labProjects.filter((p) => p.slug in technicalVisuals)
const labWork = labProjects.filter((p) => !(p.slug in technicalVisuals))

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
            <div className="grid gap-4 xl:grid-cols-2">
              {technicalWork.map((p) => (
                <TechnicalWorkCard key={p.slug} project={p} />
              ))}
            </div>
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
