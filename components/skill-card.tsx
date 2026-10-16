'use client'

import { motion } from 'framer-motion'
import SkillIcon from '@/components/skill-icon'
import type { Skill } from '@/lib/skills-data'

export default function SkillCard({ skill, index = 0 }: { skill: Skill; index?: number }) {
  const accent = skill.accent
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
      tabIndex={0}
      className="group relative flex items-center gap-3 overflow-hidden rounded-md border px-3.5 py-3 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--sc-border)] hover:shadow-[0_10px_28px_-16px_var(--sc-glow)] focus-visible:-translate-y-0.5 focus-visible:border-[var(--sc-border)] focus-visible:shadow-[0_10px_28px_-16px_var(--sc-glow)]"
      style={{
        background: `linear-gradient(155deg, ${accent}14 0%, var(--pb-surface) 55%)`,
        borderColor: 'var(--pb-border)',
        ['--sc-border' as string]: `${accent}55`,
        ['--sc-glow' as string]: `${accent}66`,
      }}
    >
      <span className="absolute inset-x-0 top-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-all duration-300"
        style={{ borderColor: `${accent}45`, background: `${accent}16`, color: accent }}
      >
        <SkillIcon icon={skill.icon} className="h-3.5 w-3.5" />
      </span>
      <div className="min-w-0">
        <p className="text-[12.5px] font-bold leading-snug text-[var(--pb-ink)]">{skill.name}</p>
        <p className="text-[10px] leading-[1.4] text-[var(--pb-ink-35)]">{skill.context}</p>
      </div>
    </motion.div>
  )
}
