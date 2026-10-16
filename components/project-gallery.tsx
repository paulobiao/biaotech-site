'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import type { GalleryImage } from '@/lib/projects-data'

/** Selected image + thumbnails + native <dialog> lightbox. Works with 1..n images. */
export default function ProjectGallery({ images, accent }: { images: GalleryImage[]; accent: string }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const thumbsRef = useRef<HTMLDivElement>(null)
  const current = images[index]
  const many = images.length > 1

  const go = (next: number) => setIndex((next + images.length) % images.length)

  const onThumbKey = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const buttons = [...(thumbsRef.current?.querySelectorAll('button') ?? [])]
    const from = Math.max(0, buttons.indexOf(document.activeElement as HTMLButtonElement))
    const next = (from + (e.key === 'ArrowRight' ? 1 : -1) + images.length) % images.length
    setIndex(next)
    buttons[next]?.focus()
  }

  const onDialogKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(index + 1)
    if (e.key === 'ArrowLeft') go(index - 1)
  }

  return (
    <div>
      <figure className="overflow-hidden rounded-lg border border-[var(--pb-border)] bg-[var(--pb-surface-solid)]">
        <button
          type="button"
          onClick={() => {
            setOpen(true)
            dialogRef.current?.showModal()
          }}
          aria-label={`Open full-size view: ${current.caption}`}
          className="group relative block aspect-[4/3] w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain duration-300 animate-in fade-in"
          />
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/50 text-white/80 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 className="h-3.5 w-3.5" />
          </span>
        </button>
        <figcaption className="flex items-center justify-between gap-3 border-t border-[var(--pb-border)] px-4 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink-55)]">
          <span>{current.caption}</span>
          {many && (
            <span aria-hidden className="text-[var(--pb-ink-35)]">
              {index + 1} / {images.length}
            </span>
          )}
        </figcaption>
      </figure>

      {many && (
        <div
          ref={thumbsRef}
          role="group"
          aria-label="Screenshots"
          onKeyDown={onThumbKey}
          className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5"
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show screenshot: ${img.caption}`}
              aria-current={i === index}
              tabIndex={i === index ? 0 : -1}
              className="relative aspect-[4/3] overflow-hidden rounded-md border bg-[var(--pb-surface-solid)] transition-[border-color,opacity] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
              style={{
                borderColor: i === index ? accent : 'var(--pb-border)',
                opacity: i === index ? 1 : 0.6,
              }}
            >
              <Image src={img.src} alt="" fill sizes="160px" className="object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        onKeyDown={onDialogKey}
        onClose={() => setOpen(false)}
        aria-label={`${current.caption} — full-size view`}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        <div className="relative flex h-[100dvh] w-[100vw] items-center justify-center p-4 md:p-12" onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}>
          {open && (
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              loading="eager"
              unoptimized
              className="max-h-full w-auto max-w-full rounded-md object-contain"
            />
          )}
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close full-size view"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/60 text-white hover:bg-black/80"
          >
            <X className="h-4 w-4" />
          </button>
          {many && (
            <>
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-black/60 text-white hover:bg-black/80"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-black/60 text-white hover:bg-black/80"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </dialog>
    </div>
  )
}
