'use client'

import Link from 'next/link'
import { BookOpen, ShieldCheck, FileText, Award } from 'lucide-react'

const credentials = [
  {
    icon: BookOpen,
    label: 'IEEE IoT Journal',
    sub: 'Invited Peer Reviewer',
    detail: 'Feb 2026 – present',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/30',
  },
  {
    icon: ShieldCheck,
    label: 'OWASP ASVS',
    sub: 'Contributor',
    detail: 'Application Security',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/30',
  },
  {
    icon: FileText,
    label: '10+ Publications',
    sub: 'Peer-Reviewed Research',
    detail: 'Zenodo · Figshare · arXiv',
    href: '/publications',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
  },
  {
    icon: Award,
    label: 'ISC2 CC',
    sub: 'Certified in Cybersecurity',
    detail: 'International standard',
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
                <Link key={cred.label} href={cred.href} className="block h-full">
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
