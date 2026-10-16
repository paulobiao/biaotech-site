import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/section-header'
import SkillCard from '@/components/skill-card'
import { allSkills, featuredSkillIds } from '@/lib/skills-data'

export default function SkillsPreview() {
  const featured = featuredSkillIds
    .map((id) => allSkills.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <section>
      <SectionHeader
        kicker="Technical Capabilities"
        title="Built across the physical and digital stack."
        description="From networked security hardware to cloud infrastructure and application development."
        action={
          <Link
            href="/skills"
            className="group flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:text-[var(--pb-cyan)]"
          >
            View all skills
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
        }
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {featured.map((skill, i) => (
          <SkillCard key={skill.id} skill={skill} index={i} />
        ))}
      </div>
    </section>
  )
}
