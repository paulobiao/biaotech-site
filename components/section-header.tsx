import type { ReactNode } from 'react'
import { SignalTag } from '@/components/signal-node'

export default function SectionHeader({
  kicker,
  title,
  description,
  accent,
  action,
}: {
  kicker: string
  title: ReactNode
  description?: string
  accent?: string
  action?: ReactNode
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
      <div>
        <SignalTag accent={accent}>{kicker}</SignalTag>
        <h2 className="mt-3 text-[clamp(1.75rem,3.6vw,2.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-[var(--pb-ink)]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-lg text-[13.5px] leading-[1.7] text-[var(--pb-ink-55)]">{description}</p>
        )}
      </div>
      {action}
    </div>
  )
}
