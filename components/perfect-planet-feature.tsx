import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { ProjectIdentifier } from '@/components/featured-project'
import { perfectPlanet } from '@/lib/perfect-planet-data'

const href = '/projects/perfect-planet'

/** Crop focus for the 16:9 destination cards (previews are 3:2). */
const focus: Record<string, string> = { seattle: '50% 60%', oregon: '55% 40%', 'key-biscayne': '60% 35%' }
export const perfectPlanetAccent = '#38bdf8'

/** 01 — the primary project on /projects: a large horizontal card where the photograph dominates. */
export function PerfectPlanetHero() {
  return (
    <section aria-labelledby="perfect-planet-title">
      <ProjectIdentifier project={{ number: '01', category: 'Personal project · Aerial photography', accent: perfectPlanetAccent }} className="mb-3" />

      <Link
        href={href}
        aria-label={`Explore ${perfectPlanet.name} — ${perfectPlanet.subtitle}`}
        className="group grid overflow-hidden rounded-xl border border-[var(--pb-border)] bg-[var(--pb-surface)] transition-[border-color] duration-300 hover:border-[#38bdf8]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--pb-cyan)] xl:min-h-[320px] xl:grid-cols-[62fr_38fr]"
      >
        <div className="relative aspect-[2/1] overflow-hidden xl:aspect-auto">
          <Image
            src={perfectPlanet.hero.src}
            alt={perfectPlanet.hero.alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 940px"
            className="object-cover object-[30%_55%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-7 xl:px-8 xl:py-6">
          <h2
            id="perfect-planet-title"
            className="text-[clamp(1.75rem,2.6vw,2.4rem)] font-black leading-[0.98] tracking-[-0.035em] text-[var(--pb-ink)]"
          >
            {perfectPlanet.name}
          </h2>
          <p className="mt-1.5 text-[14px] font-semibold text-[var(--pb-ink-70)]">{perfectPlanet.subtitle}</p>
          <p className="mt-3 text-[13px] leading-[1.65] text-[var(--pb-ink-55)]">{perfectPlanet.description}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
            {perfectPlanet.tags.map((t) => (
              <li
                key={t}
                className="rounded-sm border border-[var(--pb-border)] px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-[0.12em] text-[var(--pb-ink-55)]"
              >
                {t}
              </li>
            ))}
          </ul>

          <span className="mt-5 inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)]">
            Explore Perfect Planet
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: perfectPlanetAccent }}
            />
          </span>
        </div>
      </Link>
    </section>
  )
}

/** 02 — photo-first destination strip; each card links to that place on the Perfect Planet page. */
export function DestinationsStrip() {
  return (
    <section aria-labelledby="destinations-title">
      <ProjectIdentifier project={{ number: '02', category: 'Destinations', accent: perfectPlanetAccent }} className="mb-2" />
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <h2 id="destinations-title" className="text-[13.5px] leading-[1.7] text-[var(--pb-ink-55)]">
          Explore the places captured in this project.
        </h2>
        <Link
          href={href}
          className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-70)] transition hover:text-[var(--pb-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
        >
          View all destinations
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <ul className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {perfectPlanet.destinations.map((d) => (
          <li key={d.id}>
            <Link
              href={`${href}#${d.id}`}
              className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--pb-cyan)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[var(--pb-border)]">
                <Image
                  src={d.preview.src}
                  alt={d.preview.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 300px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: focus[d.id] }}
                />
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-[12.5px] font-bold text-[var(--pb-ink)]">
                <MapPin aria-hidden className="h-3 w-3 shrink-0" style={{ color: perfectPlanetAccent }} strokeWidth={1.8} />
                {d.name}
              </p>
              <p className="mt-0.5 pl-[18px] text-[11px] leading-[1.5] text-[var(--pb-ink-55)]">{d.descriptor}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
