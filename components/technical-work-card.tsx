import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { BiaoTechVisual, CloudLabVisual } from '@/components/project-visuals'
import { SignalDot } from '@/components/signal-node'
import { toneColor, type Project } from '@/lib/projects-data'

/** Secondary projects that get their own card; the rest stay in the Lab work line. */
export const technicalVisuals: Record<string, () => JSX.Element> = {
  'biaotech-api': BiaoTechVisual,
  'biaotech-cloud-lab': CloudLabVisual,
}
/** Compact horizontal card — deliberately smaller than the primary cover cards. */
export default function TechnicalWorkCard({ project }: { project: Project }) {
  const Visual = technicalVisuals[project.slug]
  const statusColor = toneColor[project.status.tone]
  // Projects without a detail page link straight to their repository.
  const repo = project.links?.[0]
  return (
    <Link
      href={repo ? repo.href : `/projects/${project.slug}`}
      {...(repo && { target: '_blank', rel: 'noopener noreferrer' })}
      aria-label={repo ? `View repository on GitHub — ${project.name}, ${project.fullName}` : `Explore project — ${project.name}, ${project.fullName}`}
      style={{ '--accent': project.accent } as CSSProperties}
      className="group grid max-w-[760px] overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] bg-[var(--pb-surface)] backdrop-blur-md transition-[border-color] duration-300 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:grid-cols-[250px_1fr]"
    >
      <div aria-hidden className="flex min-h-28 border-b border-[var(--pb-border)] sm:h-auto sm:border-b-0 sm:border-r">
        {Visual && <Visual />}
      </div>

      <div className="flex min-w-0 flex-col px-5 py-4">
        <h4 className="text-[17px] font-black leading-tight tracking-[-0.02em] text-[var(--pb-ink)]">{project.name}</h4>
        <p className="mt-0.5 text-[12px] font-semibold leading-snug text-[var(--pb-ink-70)]">{project.category}</p>
        <p className="mt-2 text-[12.5px] leading-[1.6] text-[var(--pb-ink-55)]">{project.description}</p>
        {project.note && <p className="mt-1.5 text-[11px] leading-[1.5] text-[var(--pb-ink-35)]">{project.note}</p>}

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[8.5px] font-bold uppercase tracking-[0.14em]" style={{ color: statusColor }}>
            <SignalDot accent={statusColor} size={5} active={!project.status.detail} />
            {project.status.label}
            {project.status.detail && <span className="text-[var(--pb-ink-35)]">· {project.status.detail}</span>}
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
          {repo ? (
            <>
              <SiGithub className="h-3.5 w-3.5" style={{ color: project.accent }} />
              View repository
            </>
          ) : (
            'Explore project'
          )}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" style={{ color: project.accent }} />
        </span>
      </div>
    </Link>
  )
}

