import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { primaryProjects, toneColor, type Project } from '@/lib/projects-data'
import { SignalDot } from '@/components/signal-node'
import ProjectGallery from '@/components/project-gallery'

function TechTags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-sm border border-[var(--pb-border)] bg-[var(--pb-surface)] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--pb-ink-70)]"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

/** Data-driven case study for a primary project — every section comes from lib/projects-data. */
export default function CaseStudy({ project }: { project: Project }) {
  const statusColor = toneColor[project.status.tone]
  const i = primaryProjects.findIndex((p) => p.slug === project.slug)
  const next = primaryProjects[(i + 1) % primaryProjects.length]

  return (
    <article className="mx-auto max-w-[1100px] overflow-x-clip px-6 pb-20 pt-14 md:px-10 md:pt-20">
      <Link
        href="/projects"
        className="group mb-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-55)] transition hover:text-[var(--pb-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        Back to projects
      </Link>

      <header>
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: project.accent }}>
          {project.number} — {project.category}
        </p>
        <h1 className="mt-3 text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-[-0.03em] text-[var(--pb-ink)]">
          {project.name}
        </h1>
        <p className="mt-2 text-[clamp(1rem,2vw,1.25rem)] font-semibold text-[var(--pb-ink-70)]">{project.fullName}</p>
        {project.positioning && (
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[var(--pb-ink-55)]">{project.positioning}</p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span
            className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em]"
            style={{ borderColor: `${statusColor}4d`, background: `${statusColor}1a`, color: statusColor }}
          >
            <SignalDot accent={statusColor} size={5} />
            {project.status.label}
          </span>
          {project.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--pb-border)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink)] transition hover:border-[var(--pb-cyan)]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
            >
              {l.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>
        {project.tags.length > 0 && (
          <div className="mt-5">
            <TechTags tags={project.tags} />
          </div>
        )}
      </header>

      {project.cover && (
        <figure className="relative isolate mt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 opacity-40 blur-3xl"
            style={{ background: `radial-gradient(60% 60% at 50% 50%, ${project.accent}33, transparent 70%)` }}
          />
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[var(--pb-border)] bg-[var(--pb-surface-solid)]">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 1020px"
              className="object-cover"
            />
          </div>
          {project.cover.caption && (
            <figcaption className="mt-3 font-mono text-[9.5px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-55)]">
              {project.cover.caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="mt-14 md:mt-20">
        {project.sections?.map((s, n) => (
          <section
            key={s.title}
            aria-labelledby={`${project.slug}-${n}`}
            className="grid grid-cols-1 gap-4 border-t border-[var(--pb-border)] py-10 md:grid-cols-[200px_1fr] md:gap-10 md:py-12"
          >
            <h2 id={`${project.slug}-${n}`} className="flex items-baseline gap-3 md:flex-col md:gap-1.5">
              <span className="font-mono text-[10px] font-bold tracking-[0.2em]" style={{ color: project.accent }}>
                {String(n + 1).padStart(2, '0')}
              </span>
              <span className="text-lg font-black tracking-[-0.02em] text-[var(--pb-ink)] md:text-xl">{s.title}</span>
            </h2>

            <div className="min-w-0">
              {s.body?.map((p) => (
                <p key={p} className="mb-4 max-w-2xl text-[14.5px] leading-[1.75] text-[var(--pb-ink-70)] last:mb-0">
                  {p}
                </p>
              ))}
              {s.points && (
                <ul className={`grid max-w-3xl grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 ${s.body ? 'mt-6' : ''}`}>
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-[var(--pb-ink-70)]">
                      <span aria-hidden className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full" style={{ background: project.accent }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
              {s.show === 'gallery' && project.gallery && project.gallery.length > 0 && (
                <div className="mt-8">
                  <ProjectGallery images={project.gallery} accent={project.accent} />
                </div>
              )}
              {s.show === 'technologies' && <TechTags tags={project.tags} />}
            </div>
          </section>
        ))}
      </div>

      <nav aria-label="Case studies" className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--pb-border)] pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-55)] transition hover:text-[var(--pb-cyan)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All projects
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="group inline-flex items-center gap-2 text-right text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:text-[var(--pb-cyan)]"
        >
          <span>
            <span className="block text-[var(--pb-ink-55)]">Next project</span>
            {next.name} — {next.fullName}
          </span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" style={{ color: next.accent }} />
        </Link>
      </nav>
    </article>
  )
}
