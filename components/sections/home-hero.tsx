'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, Github, FileCode2, ArrowRight } from 'lucide-react'
import { SignalTag } from '@/components/signal-node'
import HeroPipeline from '@/components/sections/hero-pipeline'

const quickLinks = [
  { label: 'GitHub', href: 'https://github.com/paulobiao', icon: Github },
  { label: 'API Source', href: 'https://github.com/paulobiao/biaotech-api', icon: FileCode2 },
]

export default function HomeHero() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
      <div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <SignalTag accent="var(--pb-blue)">Paulo Biao · Systems &amp; Cloud Analyst</SignalTag>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-black leading-[1.08] tracking-[-0.025em]"
        >
          <span style={{ color: '#dce3f0' }}>Physical systems.</span>
          <br />
          <span
            className="mt-1 inline-block"
            style={{
              background: 'linear-gradient(100deg, #2f6fed 0%, #22d3ee 55%, #2dd4bf 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Cloud intelligence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-5 max-w-md text-[14px] leading-[1.7] text-[var(--pb-ink-55)]"
        >
          Fifteen years with electronic security systems in Brazil. Now building
          the software and cloud platforms that make that kind of infrastructure
          observable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/projects"
            className="group flex items-center gap-2.5 rounded-md px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:opacity-90"
            style={{ background: 'linear-gradient(120deg, var(--pb-blue), #1c8fae)' }}
          >
            View Projects
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
          <a
            href="/Paulo_Fernandes_Biao_Resume_Final.pdf"
            download
            className="group flex items-center gap-2.5 rounded-md border border-[var(--pb-border)] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pb-ink)] transition-all duration-200 hover:border-[var(--pb-cyan)]/40"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          {quickLinks.map((l) => {
            const Icon = l.icon
            return (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-35)] transition hover:text-[var(--pb-cyan)]"
              >
                <Icon className="h-3 w-3" />
                {l.label}
              </a>
            )
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="hidden lg:block"
      >
        <HeroPipeline />
      </motion.div>
    </div>
  )
}
