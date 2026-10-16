'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, BookOpen, Download, ArrowUpRight } from 'lucide-react'
import { navLinks, isNavLinkActive } from '@/components/shell/nav-links'
import { SignalDot } from '@/components/signal-node'

const social = [
  { label: 'GitHub', href: 'https://github.com/paulobiao', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/paulobiao', icon: Linkedin },
  { label: 'ORCID', href: 'https://orcid.org/0009-0008-6757-3766', icon: BookOpen },
]

export default function IdentityPanel() {
  const pathname = usePathname()

  return (
    <aside className="pb-shell-surface pb-shell-edge-r fixed inset-y-0 left-0 z-40 hidden w-72 flex-col overflow-y-auto lg:flex">
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden">
        <Image
          src="/pauloNN.jpg"
          alt="Paulo Biao"
          fill
          priority
          sizes="288px"
          className="object-cover object-top"
          style={{ filter: 'contrast(1.05) saturate(1.05) brightness(0.94)' }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(8,13,26,0.05) 0%, transparent 35%, rgba(8,13,26,0.55) 78%, rgba(8,13,26,0.92) 100%)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(34,211,238,0.18)' }}
        />
        <Link
          href="/"
          className="absolute left-4 top-4 flex items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)]"
        >
          <span
            className="flex h-8 w-8 items-center justify-center text-[10px] font-black tracking-tight text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, var(--pb-blue), var(--pb-violet))' }}
          >
            PB
          </span>
        </Link>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
        <h1 className="text-[15px] font-bold tracking-[-0.01em] text-[var(--pb-ink)]">Paulo Biao</h1>
        <p className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--pb-cyan)]">
          Systems · Cloud · Physical Security
        </p>

        <p className="mt-3 text-[13px] leading-[1.6] text-[var(--pb-ink-55)]">
          Physical security experience evolving into cloud, software and
          intelligent infrastructure.
        </p>

        <div className="mt-3 flex items-center gap-2">
          <SignalDot accent="#34d399" size={5} />
          <span className="font-mono text-[9.5px] font-bold uppercase leading-[1.5] tracking-[0.14em] text-[var(--pb-ink-55)]">
            Deerfield Beach, FL · Open to Relocation
          </span>
        </div>

        <nav className="mt-6 flex flex-col gap-0.5" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isNavLinkActive(pathname, link.href)
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`group relative flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pb-cyan)] ${
                  active
                    ? 'bg-[rgba(34,211,238,0.06)] text-[var(--pb-ink)]'
                    : 'text-[var(--pb-ink-55)] hover:bg-[rgba(34,211,238,0.015)] hover:text-[var(--pb-ink-70)] focus-visible:text-[var(--pb-ink-70)]'
                }`}
              >
                {/* Indicator light: on (active) > dim glow (hover/focus) > off */}
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 shrink-0 rounded-full border transition-[background-color,border-color,box-shadow] duration-200 ${
                    active
                      ? 'border-transparent bg-[var(--pb-cyan)] shadow-[0_0_8px_1px_rgba(34,211,238,0.6)]'
                      : 'border-[var(--pb-border-strong)] group-hover:border-transparent group-hover:bg-[rgba(34,211,238,0.55)] group-hover:shadow-[0_0_5px_0_rgba(34,211,238,0.3)] group-focus-visible:border-transparent group-focus-visible:bg-[rgba(34,211,238,0.55)]'
                  }`}
                />
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t border-[var(--pb-border)] pt-5">
          <div className="flex items-center gap-3">
            {social.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--pb-border)] text-[var(--pb-ink-35)] transition hover:border-[var(--pb-cyan)]/40 hover:text-[var(--pb-cyan)]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              )
            })}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="/Paulo_Fernandes_Biao_Resume.pdf"
              download
              className="group flex items-center justify-center gap-1.5 rounded-md border border-[var(--pb-border)] px-2 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--pb-ink)] transition hover:border-[var(--pb-cyan)]/40"
            >
              Resume
              <Download className="h-3 w-3 text-[var(--pb-ink-35)] transition group-hover:text-[var(--pb-cyan)]" />
            </a>

            <Link
              href="/contact"
              className="group flex items-center justify-center gap-1.5 rounded-md px-2 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:opacity-90"
              style={{ background: 'linear-gradient(120deg, var(--pb-blue), #1c8fae)' }}
            >
              Let&rsquo;s talk
              <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <span className="font-mono text-[7.5px] text-[var(--pb-ink-35)]">© {new Date().getFullYear()} Paulo Biao</span>
        </div>
      </div>
    </aside>
  )
}
