'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Github, Linkedin, BookOpen, Download, ArrowUpRight } from 'lucide-react'
import { navLinks, isNavLinkActive } from '@/components/shell/nav-links'
import { SignalDot } from '@/components/signal-node'

const social = [
  { label: 'GitHub', href: 'https://github.com/paulobiao', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/paulobiao', icon: Linkedin },
  { label: 'ORCID', href: 'https://orcid.org/0009-0008-6757-3766', icon: BookOpen },
]

export default function MobileHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="pb-shell-surface pb-shell-edge-b fixed inset-x-0 top-0 z-50 lg:hidden">
      <div className="flex h-16 items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md" style={{ boxShadow: 'inset 0 0 0 1px rgba(34,211,238,0.25)' }}>
            <Image src="/pauloNN.jpg" alt="Paulo Biao" fill sizes="32px" className="object-cover object-top" />
          </span>
          <span className="leading-none">
            <span className="block text-[13px] font-bold text-[var(--pb-ink)]">Paulo Biao</span>
            <span className="mt-0.5 block font-mono text-[8.5px] font-bold uppercase tracking-[0.14em] text-[var(--pb-cyan)]">
              Systems &amp; Cloud Analyst
            </span>
          </span>
        </Link>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--pb-border)] text-[var(--pb-ink)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--pb-border)] px-5 pb-6">
          <div className="flex items-center gap-2 pt-4">
            <SignalDot accent="#34d399" size={5} />
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-55)]">
              South Florida · Open to relocation
            </span>
          </div>

          <nav className="mt-2 flex flex-col" aria-label="Primary">
            {navLinks.map((link) => {
              const active = isNavLinkActive(pathname, link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className="border-b border-[var(--pb-border)] py-3.5 text-[15px] font-bold last:border-b-0"
                  style={{ color: active ? 'var(--pb-ink)' : 'var(--pb-ink-55)' }}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="mt-4 flex items-center gap-4">
            {social.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--pb-border)] text-[var(--pb-ink-35)]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              )
            })}
          </div>

          <a
            href="/Paulo_Fernandes_Biao_Resume_Final.pdf"
            download
            className="mt-4 flex items-center justify-between rounded-md border border-[var(--pb-border)] px-4 py-3 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--pb-ink)]"
          >
            Resume
            <Download className="h-3.5 w-3.5 text-[var(--pb-ink-35)]" />
          </a>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-between rounded-md px-4 py-3 text-[10.5px] font-bold uppercase tracking-[0.16em] text-white"
            style={{ background: 'linear-gradient(120deg, var(--pb-blue), #1c8fae)' }}
          >
            Let&rsquo;s talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </header>
  )
}
