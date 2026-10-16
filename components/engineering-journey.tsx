import { StageIcon } from '@/components/capability-card'
import { experienceStages, journeySummary } from '@/lib/experience-data'

/**
 * The career progression as one connected line: horizontal from xl, vertical below.
 * The connector blends each stage's accent into the next, so it reads as one evolution, not five badges.
 */
export default function EngineeringJourney() {
  const stops = experienceStages.map((s) => `${s.accent}80`).join(', ')

  return (
    <ol className="relative grid gap-7 xl:grid-cols-5 xl:gap-5" aria-label="Engineering journey">
      <span aria-hidden className="absolute bottom-5 left-[19px] top-5 w-px xl:hidden" style={{ background: `linear-gradient(180deg, ${stops})` }} />
      <span aria-hidden className="absolute left-5 right-[10%] top-[19px] hidden h-px xl:block" style={{ background: `linear-gradient(90deg, ${stops})` }} />
      {experienceStages.map((stage, i) => (
        <li key={stage.id} className="relative flex gap-4 xl:block">
          <span className="relative z-10 block h-10 w-10 shrink-0 rounded-md bg-[var(--pb-navy)]">
            <StageIcon icon={stage.icon} accent={stage.accent} className="h-10 w-10" iconClassName="h-4 w-4" />
          </span>
          <div className="xl:mt-4 xl:pr-3">
            <div className="font-mono text-[10px] font-bold tracking-[0.16em]" style={{ color: stage.accent }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="mt-1 text-[15px] font-black leading-tight tracking-[-0.01em] text-[var(--pb-ink)]">{stage.label}</div>
            <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[var(--pb-ink-55)]">{journeySummary[stage.id]}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
