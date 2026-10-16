'use client'

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { perfectPlanet } from '@/lib/perfect-planet-data'

/** Every photo in destination order — navigation runs across destinations. */
const slides = perfectPlanet.destinations.flatMap((d) =>
  d.photos.map((p) => ({
    ...p,
    title: d.name,
    detail: p.place ? `${p.place} · ${d.region}` : d.descriptor,
  })),
)

const OPEN_EVENT = 'perfect-planet:open'
const pad = (n: number) => String(n).padStart(2, '0')

/** Gallery photo that opens itself in the large viewer. */
export function OpenInViewer({ src, alt, children }: { src: string; alt: string; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: src }))}
      aria-label={`View in carousel: ${alt}`}
      className="mb-4 block w-full break-inside-avoid rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
    >
      {children}
    </button>
  )
}

const control =
  'flex items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/85 backdrop-blur-sm transition duration-300 hover:border-[var(--pb-cyan)]/60 hover:text-[var(--pb-cyan)] focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)] motion-reduce:transition-none'
/** Faint on touch screens, hidden until hover on pointer devices. */
const reveal = 'opacity-70 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100'

export default function PerfectPlanetCarousel({ initialSrc }: { initialSrc: string }) {
  const start = Math.max(0, slides.findIndex((s) => s.src === initialSrc))
  const [index, setIndex] = useState(start)
  const [prev, setPrev] = useState<number | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const touchX = useRef<number | null>(null)
  const slide = slides[index]

  const show = (next: number) => {
    const i = (next + slides.length) % slides.length
    if (i === index) return
    setPrev(index)
    setIndex(i)
  }

  useEffect(() => {
    const onOpen = (e: Event) => {
      const i = slides.findIndex((s) => s.src === (e as CustomEvent<string>).detail)
      if (i < 0) return
      setIndex((cur) => {
        if (cur !== i) setPrev(cur)
        return i
      })
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      rootRef.current?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' })
      rootRef.current?.focus({ preventScroll: true })
    }
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOpen)
  }, [])

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    show(index + (e.key === 'ArrowRight' ? 1 : -1))
  }

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Perfect Planet photographs"
      tabIndex={0}
      onKeyDown={onKey}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        touchX.current = null
        if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1))
      }}
      className="group relative mt-10 aspect-[16/9] scroll-mt-24 overflow-hidden rounded-xl border border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--pb-cyan)]"
    >
      {/* Previous slide stays underneath so the new one cross-fades over it. */}
      {prev !== null && (
        <Image
          key={`under-${slides[prev].src}`}
          src={slides[prev].src}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 1280px) 100vw, 1120px"
          className="object-cover"
        />
      )}
      <Image
        key={slide.src}
        src={slide.src}
        alt={slide.alt}
        fill
        priority={index === start}
        sizes="(max-width: 1280px) 100vw, 1120px"
        className="object-cover duration-700 ease-out animate-in fade-in motion-reduce:animate-none"
      />

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      <p aria-live="polite" className="pointer-events-none absolute bottom-3 left-4 max-w-[60%] sm:bottom-5 sm:left-6">
        <span className="block text-[13px] font-semibold tracking-[-0.01em] text-white drop-shadow sm:text-[15px]">{slide.title}</span>
        <span className="mt-0.5 block font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-white/65 sm:text-[9px]">
          {slide.detail}
        </span>
      </p>

      <span aria-hidden className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] font-bold tracking-[0.16em] text-white/65 sm:bottom-5 sm:right-6">
        {pad(index + 1)} / {pad(slides.length)}
      </span>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 md:flex">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => show(i)}
            aria-label={`Photo ${i + 1} of ${slides.length}: ${s.title}`}
            aria-current={i === index}
            tabIndex={-1}
            className="h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none"
            style={{
              width: i === index ? 16 : 6,
              background: i === index ? 'var(--pb-cyan)' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>

      <button type="button" onClick={() => show(index - 1)} aria-label="Previous photo" className={`absolute left-3 top-1/2 h-10 w-10 -translate-y-1/2 sm:left-4 ${control} ${reveal}`}>
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button type="button" onClick={() => show(index + 1)} aria-label="Next photo" className={`absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 sm:right-4 ${control} ${reveal}`}>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
