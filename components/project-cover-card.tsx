import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { toneColor, type Project } from '@/lib/projects-data'
import { SignalDot } from '@/components/signal-node'

/** Vertical editorial card for a primary engineering project: full-width cover on top, project information below. */

/** Crop focus for the wide cover band, so each dashboard's key UI stays visible. */
const focus: Record<string, string> = { psop: '50% 42%', fsop: '50% 38%', dsop: '50% 30%' }

export default function ProjectCoverCard({ project }: { project: Project }) {
  const statusColor = toneColor[project.status.tone]
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`Explore project — ${project.name}, ${project.fullName}`}
      style={{ '--accent': project.accent, '--accent-soft': `${project.accent}66`, '--edge': `${project.accent}2e` } as CSSProperties}
      className="group flex flex-col overflow-hidden rounded-lg border border-[var(--edge)] bg-[var(--pb-surface)] backdrop-blur-md transition-[border-color] duration-300 hover:border-[var(--accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--pb-surface-solid)] md:aspect-[2.8/1]">
        <Image
          src={project.cover!.src}
          alt={project.cover!.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 500px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: focus[project.slug] }}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-5 pb-3.5 pt-3">
        <h3 className="text-[20px] font-black leading-tight tracking-[-0.02em] text-[var(--pb-ink)]">{project.name}</h3>
        <p className="mt-0.5 text-[12.5px] font-semibold leading-snug text-[var(--pb-ink-70)]">{project.fullName}</p>

        <span className="mt-2 inline-flex w-fit items-center gap-1.5 font-mono text-[8.5px] font-bold uppercase tracking-[0.14em]" style={{ color: statusColor }}>
          <SignalDot accent={statusColor} size={5} />
          {project.status.label}
        </span>

        {project.tags.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1" aria-label="Technologies">
            {project.tags.slice(0, 3).map((t) => (
              <li
                key={t}
                className="rounded-sm border border-[var(--pb-border)] px-1.5 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-[0.1em] text-[var(--pb-ink-55)]"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)]">
          Explore project
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" style={{ color: project.accent }} />
        </span>
      </div>
    </Link>
  )
}
