'use client'

import { motion } from 'framer-motion'
import { Terminal, Github, FileCode2, Activity } from 'lucide-react'
import { SignalTag, SignalDot, useSafeReducedMotion } from '@/components/signal-node'
import GlassCard from '@/components/ui/glass-card'

const apiStack = ['NODE.JS', 'POSTGRESQL', 'DOCKER', 'AWS EC2', 'NGINX', 'JWT', 'TYPESCRIPT']
const apiLinks = [
  { label: 'API Status', href: 'https://api.biaotech.dev/api/health', icon: Activity },
  { label: 'Swagger', href: 'https://api.biaotech.dev/api/docs', icon: FileCode2 },
  { label: 'GitHub', href: 'https://github.com/paulobiao', icon: Github },
]

export default function BiaotechBody() {
  const reduceMotion = useSafeReducedMotion()

  return (
    <div className="mx-auto max-w-[1100px] px-6 pb-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <SignalTag accent="var(--pb-blue)">Overview</SignalTag>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-[var(--pb-ink-70)]">
          A production REST API deployed on AWS EC2 with automated CI/CD via
          GitHub Actions, HTTPS on a custom domain, JWT authentication,
          containerized infrastructure with Docker and PostgreSQL, and live
          Swagger documentation.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="mx-auto w-full max-w-[520px] overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/[0.07] px-5 py-3">
              <Terminal size={13} className="text-white/30" />
              <span className="font-mono text-[10px] text-white/30">api.biaotech.dev</span>
            </div>
            <div className="space-y-4 p-6 font-mono text-[12.5px] leading-relaxed">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="text-white/45">
                  GET /api/health
                  {!reduceMotion && (
                    <motion.span
                      className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-white/40"
                      animate={{ opacity: [1, 1, 0, 0] }}
                      transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.51, 1] }}
                    />
                  )}
                </span>
                <span className="flex items-center gap-2 text-emerald-400">
                  <SignalDot accent="#34d399" size={6} />
                  200 OK
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="text-white/45">GET /api/docs</span>
                <span className="text-white/50">Swagger UI</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/45">Deploy</span>
                <span className="text-white/50">GitHub Actions · CI/CD</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-5 flex flex-wrap gap-2">
            {apiStack.map((t) => (
              <span key={t} className="rounded-sm border border-[var(--pb-border)] px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-35)]">
                {t}
              </span>
            ))}
          </div>
          <div className="mb-5 flex items-center gap-2">
            <SignalDot accent="#34d399" size={6} />
            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-emerald-400">Live</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {apiLinks.map((l) => {
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
          </div>
        </motion.div>
      </div>

      <p className="mt-10 border-t border-[var(--pb-border)] pt-8 text-[11.5px] font-semibold text-[var(--pb-ink-35)]">
        The backend behind PSOP and the platforms built on top of it.
      </p>
    </div>
  )
}
