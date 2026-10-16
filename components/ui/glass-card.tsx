'use client'

import type { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react'

type GlassCardProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  interactive?: boolean
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

/** The site's one card surface — a precision instrument floating above the space environment. */
export default function GlassCard<T extends ElementType = 'div'>({
  as,
  children,
  interactive = false,
  className = '',
  ...rest
}: GlassCardProps<T>) {
  const Component = as || 'div'
  return (
    <Component
      className={`group relative overflow-hidden rounded-lg border border-[var(--pb-border)] bg-[var(--pb-surface)] backdrop-blur-md transition-all duration-300 ${
        interactive
          ? 'hover:-translate-y-0.5 hover:border-[var(--pb-cyan)]/35 hover:bg-[var(--pb-surface-strong)] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_20px_50px_-24px_rgba(34,211,238,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]'
          : ''
      } ${className}`}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: 'linear-gradient(155deg, rgba(255,255,255,0.05) 0%, transparent 40%)' }}
      />
      {children}
    </Component>
  )
}
