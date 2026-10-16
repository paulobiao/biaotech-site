import type { Metadata } from 'next'
import SectionHeader from '@/components/section-header'
import SkillCard from '@/components/skill-card'
import { skillGroups } from '@/lib/skills-data'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical capabilities spanning physical security infrastructure, backend and cloud engineering — Paulo Biao.',
}

/** 5 per row when that leaves full or near-full rows (5, 9, 10); otherwise 4 (4 → 4, 6 → 4+2). */
const fiveCols = (n: number) => n > 4 && (n % 5 === 0 || n % 5 === 4)

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-10 md:py-20">
      <SectionHeader
        kicker="Technical Capabilities"
        title="Built across the physical and digital stack."
        description="From networked security hardware to cloud infrastructure and application development — verified against real project work, not a checklist."
      />

      <div className="flex flex-col gap-7">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-[5px] w-[5px] rounded-full" style={{ background: group.accent }} />
              <h2 className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-[var(--pb-ink-55)]">
                {group.label}
              </h2>
            </div>
            <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${fiveCols(group.skills.length) ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
              {group.skills.map((skill, i) => (
                <SkillCard key={skill.id} skill={skill} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
