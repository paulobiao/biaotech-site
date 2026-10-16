import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { SignalTag } from '@/components/signal-node'
import { perfectPlanetAccent } from '@/components/perfect-planet-feature'
import PerfectPlanetCarousel, { OpenInViewer } from '@/components/perfect-planet-carousel'
import { perfectPlanet } from '@/lib/perfect-planet-data'

export const metadata: Metadata = {
  title: 'Perfect Planet — Aerial Photography',
  description: perfectPlanet.description,
}

const regions = Array.from(new Set(perfectPlanet.destinations.map((d) => d.region)))
const cover = perfectPlanet.destinations.find((d) => d.id === 'key-biscayne')!.photos[0]

export default function PerfectPlanetPage() {
  return (
    <article className="mx-auto max-w-[1200px] px-6 pb-20 pt-14 md:px-10 md:pt-20">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em]">
          <li>
            <Link href="/projects" className="text-[var(--pb-ink-55)] transition hover:text-[var(--pb-cyan)]">
              Projects
            </Link>
          </li>
          <li aria-hidden className="text-[var(--pb-ink-35)]">
            <ChevronRight className="h-3 w-3" />
          </li>
          <li aria-current="page" className="text-[var(--pb-ink)]">
            {perfectPlanet.name}
          </li>
        </ol>
      </nav>

      <header>
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: perfectPlanetAccent }}>
          Personal project · Aerial photography
        </p>
        <h1 className="mt-3 text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-[-0.03em] text-[var(--pb-ink)]">
          {perfectPlanet.name}
        </h1>
        <p className="mt-2 text-[clamp(1rem,2vw,1.25rem)] font-semibold text-[var(--pb-ink-70)]">{perfectPlanet.subtitle}</p>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[var(--pb-ink-55)]">{perfectPlanet.description}</p>
        {perfectPlanet.youtubeUrl && (
          <a
            href={perfectPlanet.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 rounded-md border border-[var(--pb-border)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink)] transition hover:border-[var(--pb-cyan)]/50"
          >
            YouTube channel
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </header>

      <PerfectPlanetCarousel initialSrc={cover.src} />

      <section aria-labelledby="places" className="mt-16 md:mt-24">
        <SignalTag accent={perfectPlanetAccent}>Gallery</SignalTag>
        <h2 id="places" className="mt-3 text-[clamp(1.75rem,3.6vw,2.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-[var(--pb-ink)]">
          Places from above
        </h2>

        {regions.map((region) => (
          <div key={region} className="mt-12">
            <h3 className="border-b border-[var(--pb-border)] pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--pb-ink-55)]">
              {region}
            </h3>

            {perfectPlanet.destinations
              .filter((d) => d.region === region)
              .map((d) => (
                <section key={d.id} id={d.id} aria-labelledby={`${d.id}-title`} className="mt-8 scroll-mt-24">
                  <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h4 id={`${d.id}-title`} className="text-lg font-black tracking-[-0.02em] text-[var(--pb-ink)]">
                      {d.name}
                    </h4>
                    <p className="text-[12px] text-[var(--pb-ink-55)]">{d.descriptor}</p>
                  </div>
                  {/* Natural aspect ratios in columns — photos are shown uncropped. */}
                  <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                    {d.photos.map((ph) => (
                      <OpenInViewer key={ph.src} src={ph.src} alt={ph.alt}>
                        <Image
                          src={ph.src}
                          alt={ph.alt}
                          width={ph.width}
                          height={ph.height}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
                          className="h-auto w-full rounded-lg border border-white/10"
                        />
                      </OpenInViewer>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        ))}
      </section>

      <section aria-labelledby="films" className="mt-16 border-t border-[var(--pb-border)] pt-12 md:mt-24">
        <SignalTag accent={perfectPlanetAccent}>Video</SignalTag>
        <h2 id="films" className="mt-3 text-[clamp(1.75rem,3.6vw,2.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-[var(--pb-ink)]">
          Films
        </h2>
        {perfectPlanet.films.length === 0 ? (
          <p className="mt-4 text-[14px] leading-[1.7] text-[var(--pb-ink-55)]">
            Films coming soon.
            <span className="block">Aerial films are currently being edited.</span>
          </p>
        ) : (
          <ul className="mt-6 flex flex-col gap-3">
            {perfectPlanet.films.map((f) => (
              <li key={f.youtubeUrl}>
                <a
                  href={f.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--pb-ink)] transition hover:text-[var(--pb-cyan)]"
                >
                  {f.title}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  <span className="sr-only">(opens YouTube in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  )
}
