'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

/**
 * Framer Motion's own `useReducedMotion` reads `matchMedia` synchronously on the
 * client's first render, while the server always renders the no-preference case —
 * a guaranteed hydration mismatch for anyone with OS-level reduced motion enabled.
 * This mirrors the API but only resolves the real value after mount.
 */
export function useSafeReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

type Tone = 'light' | 'dark'

const toneColor: Record<Tone, string> = {
  light: 'rgba(238,242,250,0.4)',
  dark: 'rgba(255,255,255,0.7)',
}

/** The site's recurring signature: a small pulsing telemetry dot. Same DNA everywhere it appears. */
export function SignalDot({
  accent = 'var(--pb-cyan)',
  size = 6,
  active = true,
  className = '',
}: {
  accent?: string
  size?: number
  active?: boolean
  className?: string
}) {
  return (
    <span className={`relative inline-flex shrink-0 ${className}`} style={{ width: size, height: size }}>
      {active && (
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50"
          style={{ background: accent }}
        />
      )}
      <span className="relative inline-flex rounded-full" style={{ width: size, height: size, background: accent }} />
    </span>
  )
}

/** Dot + mono uppercase label — the recurring kicker used to mark a signal/stage/status across the page. */
export function SignalTag({
  children,
  status,
  tone = 'light',
  accent = 'var(--pb-cyan)',
  active = true,
  className = '',
}: {
  children: ReactNode
  status?: string
  tone?: Tone
  accent?: string
  active?: boolean
  className?: string
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <SignalDot accent={accent} active={active} />
      <span
        className="font-mono text-[9px] font-bold uppercase tracking-[0.26em]"
        style={{ color: toneColor[tone] }}
      >
        {children}
      </span>
      {status && (
        <span className="font-mono text-[8.5px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
          · {status}
        </span>
      )}
    </div>
  )
}

/** A vertical trace that draws itself in on scroll — chains adjacent stages together in timelines. */
export function SignalLine({
  tone = 'light',
  active = false,
  className = '',
}: {
  tone?: Tone
  active?: boolean
  className?: string
}) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transformOrigin: 'top',
        background: active ? 'var(--pb-cyan)' : toneColor[tone],
        opacity: active ? 0.5 : 1,
      }}
      className={`w-px ${className}`}
    />
  )
}
