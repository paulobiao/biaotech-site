import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, Globe2 } from 'lucide-react'

import PeerReviewSection from '@/components/sections/peer-review-section'
import PeerReviewForm from '@/components/sections/peer-review-form'

export const metadata: Metadata = {
  title: 'Peer Review & Technical Advisory',
  description:
    'Peer review, technical evaluation and expert advisory in cybersecurity, Zero Trust, financial sector security and critical infrastructures.',
}

export default function PeerReviewPage() {
  return (
    <div className="min-h-screen py-16 md:py-20 bg-gray-950 text-slate-50">
      <div className="container mx-auto px-4 max-w-6xl space-y-10 md:space-y-14">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-slate-400 gap-1">
          <Link href="/" className="hover:text-slate-100 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/about" className="hover:text-slate-100 transition-colors">
            About
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-200">Peer Review & Technical Advisory</span>
        </nav>

        {/* Hero / Banner */}
        <section className="grid gap-8 md:grid-cols-[2fr,1.4fr] items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">
              Peer Review · Technical Advisory · Cybersecurity
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Independent Peer Review in{' '}
              <span className="text-cyan-300">
                Cybersecurity, Zero Trust & Critical Infrastructure
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6">
              Paulo Fernandes Bião is available to act as an independent technical reviewer
              for cybersecurity architectures, research articles, innovation awards and
              high-impact digital transformation initiatives in finance, healthcare and
              critical infrastructures.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-cyan-300" />
                Zero Trust & Financial Cybersecurity
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700">
                <Globe2 className="w-4 h-4 text-cyan-300" />
                Global, remote-first collaboration
              </span>
            </div>
          </div>

          {/* Highlight Box */}
          <aside className="bg-slate-900/80 border border-slate-700/70 rounded-2xl p-6 md:p-7 shadow-lg shadow-cyan-500/10">
            <h2 className="text-lg font-semibold mb-3 text-slate-50">
              Now accepting peer review invitations for 2025
            </h2>

            <p className="text-sm text-slate-300 mb-4">
              Institutions, journals, award committees and organizations looking for
              expert evaluation in cybersecurity, financial sector security or
              mission-critical architectures can invite Paulo as a peer reviewer or
              technical advisor.
            </p>

            <ul className="text-sm text-slate-300 space-y-1.5 mb-5">
              <li>• Technical and scientific articles (cybersecurity & architecture)</li>
              <li>• Frameworks and reference architectures (Zero Trust, SOAR, API Security)</li>
              <li>• Award and innovation submissions in cybersecurity and digital trust</li>
              <li>• Cloud, banking and healthcare security initiatives</li>
            </ul>

            {/* ✅ mailto deve ser <a>, não next/link */}
            <a
              href="mailto:contact@biaotech.dev?subject=Peer%20Review%20Request"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition-colors"
            >
              Request Peer Review via Email
            </a>
          </aside>
        </section>

        <PeerReviewSection />
        <PeerReviewForm />
      </div>
    </div>
  )
}
