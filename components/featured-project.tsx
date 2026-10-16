import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { toneColor, type Project } from '@/lib/projects-data'

/** Project number + discipline + accent rule — sits outside the project so each entry reads as its own world. */
export function ProjectIdentifier({
  project,
  className = '',
}: {
  project: Pick<Project, 'number' | 'category' | 'accent'>
  className?: string
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-[26px] font-black leading-none tracking-[-0.04em]" style={{ color: project.accent }}>
        {project.number}
      </span>
      <span className="font-mono text-[9px] font-bold uppercase leading-[1.5] tracking-[0.2em] text-[var(--pb-ink-55)]">
        {project.category}
      </span>
      <span
        aria-hidden
        className="h-px min-w-6 flex-1"
        style={{ background: `linear-gradient(90deg, ${project.accent}66, transparent)` }}
      />
    </div>
  )
}

/** Homepage entry: open editorial layout (no box). `compact` gives a smaller side-by-side cover for concept work. */
export default function FeaturedProject({
  project,
  compact = false,
  priority = false,
  className = '',
}: {
  project: Project
  compact?: boolean
  priority?: boolean
  className?: string
}) {
  const statusColor = toneColor[project.status.tone]
  return (
    <article className={className} style={{ '--accent': project.accent } as CSSProperties}>
      <ProjectIdentifier project={project} className="mb-5" />
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${compact ? 'Explore concept' : 'Explore project'} — ${project.name}, ${project.fullName}`}
        className={`group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
          compact ? 'sm:grid sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:items-center sm:gap-6' : ''
        }`}
      >
        <div
          className="relative aspect-[16/9] overflow-hidden rounded-lg border transition-[border-color,box-shadow] duration-300 group-hover:shadow-[0_20px_50px_-30px_var(--accent)]"
          style={{ borderColor: `${project.accent}33` }}
        >
          <Image
            src={project.cover!.src}
            alt={project.cover!.alt}
            fill
            priority={priority}
            sizes={compact ? '(max-width: 640px) 100vw, 280px' : '(max-width: 1280px) 100vw, 640px'}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-lg border opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ borderColor: `${project.accent}80` }}
          />
        </div>

        <div className={compact ? 'mt-4 sm:mt-0' : 'mt-5'}>
          <h3 className={`font-black tracking-[-0.02em] text-[var(--pb-ink)] ${compact ? 'text-lg' : 'text-2xl'}`}>
            {project.name}
            <span className={`block font-semibold tracking-normal text-[var(--pb-ink-70)] ${compact ? 'mt-0.5 text-[12.5px]' : 'mt-1 text-[14px]'}`}>
              {project.fullName}
            </span>
          </h3>
          <p className={`mt-2.5 max-w-xl leading-[1.65] text-[var(--pb-ink-55)] ${compact ? 'text-[12.5px]' : 'text-[13px]'}`}>
            {project.teaser ?? project.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2 font-mono text-[8.5px] font-bold uppercase tracking-[0.16em]" style={{ color: statusColor }}>
              <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: statusColor }} />
              {project.status.label}
            </span>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)]">
              {compact ? 'Explore concept' : 'Explore project'}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" style={{ color: project.accent }} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
