import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import HomeHero from '@/components/sections/home-hero'
import FeaturedProject from '@/components/featured-project'
import SkillsPreview from '@/components/sections/skills-preview'
import SectionHeader from '@/components/section-header'
import GlassCard from '@/components/ui/glass-card'
import { getProject } from '@/lib/projects-data'

const psop = getProject('psop')!
const fsop = getProject('fsop')!
const dsop = getProject('dsop')!

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
      <section>
        <HomeHero />
      </section>

      <section className="mt-20 md:mt-28">
        <SectionHeader
          kicker="Featured Work"
          title="Systems for the real world"
          description="Engineering projects across physical infrastructure, field operations and digital safety."
          action={
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:text-[var(--pb-cyan)]"
            >
              All projects
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          }
        />
        {/* Staggered editorial layout on xl; natural PSOP → FSOP → DSOP sequence below. */}
        <div className="grid grid-cols-1 gap-y-16 xl:grid-cols-12 xl:gap-x-14 xl:gap-y-20">
          <FeaturedProject project={psop} priority className="xl:col-span-7" />
          <FeaturedProject project={fsop} className="xl:col-span-5 xl:row-span-2 xl:mt-32" />
          <FeaturedProject project={dsop} compact className="xl:col-span-7" />
        </div>
      </section>

      <section className="mt-20 md:mt-28">
        <SkillsPreview />
      </section>

      <section className="mt-20 md:mt-28">
        <GlassCard className="flex flex-col items-start justify-between gap-6 p-7 md:flex-row md:items-center md:p-9">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--pb-violet)]/40 bg-[var(--pb-violet)]/10">
              <BookOpen className="h-5 w-5" style={{ color: 'var(--pb-violet)' }} strokeWidth={1.8} />
            </span>
            <div>
              <p className="font-mono text-[8.5px] font-bold uppercase tracking-[0.2em] text-[var(--pb-ink-35)]">
                Peer review
              </p>
              <h3 className="text-lg font-black tracking-[-0.02em] text-[var(--pb-ink)]">
                IEEE — Internet of Things Journal
              </h3>
            </div>
          </div>
          <Link
            href="/about"
            className="group flex shrink-0 items-center gap-2 rounded-md border border-[var(--pb-border)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)] transition hover:border-[var(--pb-cyan)]/40"
          >
            Full story
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
        </GlassCard>
      </section>

      <section className="mt-20 md:mt-28">
        <GlassCard className="flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-[var(--pb-ink)]">
              Let&rsquo;s build the{' '}
              <span style={{ color: 'var(--pb-cyan)' }}>next system.</span>
            </h2>
            <p className="mt-3 max-w-md text-[13px] leading-[1.7] text-[var(--pb-ink-55)]">
              Available for senior cloud infrastructure, security observability
              and intelligent systems roles.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex shrink-0 items-center gap-2.5 rounded-md px-7 py-4 text-[10.5px] font-bold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            style={{ background: 'linear-gradient(120deg, var(--pb-blue), #1c8fae)' }}
          >
            Reach out
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
        </GlassCard>
      </section>
    </div>
  )
}
