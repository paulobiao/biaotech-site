'use client'

import Link from 'next/link'
import { BookOpen, GraduationCap, Trophy, Award, type LucideIcon } from 'lucide-react'

type Credential = {
  icon: LucideIcon
  label: string
  sub: string
  detail: string
  href?: string
  external?: boolean
  color: string
  bg: string
}

const credentials: Credential[] = [
  {
    icon: BookOpen,
    label: 'IEEE IoT Journal',
    sub: 'Invited Peer Reviewer',
    detail: 'Verified via Web of Science',
    href: 'https://orcid.org/0009-0008-6757-3766',
    external: true,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/30',
  },
  {
    icon: GraduationCap,
    label: 'PUC Minas',
    sub: 'Cloud Computing Postgraduate',
    detail: 'Completed · Aug 2026',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
  },
  {
    icon: Trophy,
    label: '4 Global Hackathons',
    sub: 'Devpost Submissions',
    detail: 'Google DeepMind · Elastic · 2025–26',
    href: 'https://devpost.com/paulo86',
    external: true,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/30',
  },
  {
    icon: Award,
    label: 'Oracle Certified',
    sub: 'Agentic AI Foundations Associate',
    detail: 'Oracle University · 2026',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/30',
  },
]

export default function CredentialsStrip() {
  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Credentials &amp; Affiliations
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((cred) => {
            const Icon = cred.icon
            const inner = (
              <div
                className={`flex items-start gap-3 p-4 rounded-xl border ${cred.bg} transition-all duration-200 hover:scale-[1.02] h-full`}
              >
                <div className={`p-2 rounded-lg bg-current/5 shrink-0 ${cred.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className={`text-sm font-bold ${cred.color}`}>{cred.label}</div>
                  <div className="text-xs text-white font-medium mt-0.5">{cred.sub}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{cred.detail}</div>
                </div>
              </div>
            )

            if (cred.href) {
              return (
                <Link
                  key={cred.label}
                  href={cred.href}
                  target={cred.external ? '_blank' : undefined}
                  rel={cred.external ? 'noopener noreferrer' : undefined}
                  className="block h-full"
                >
                  {inner}
                </Link>
              )
            }

            return <div key={cred.label}>{inner}</div>
          })}
        </div>
      </div>
    </section>
  )
}