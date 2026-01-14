import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, Globe2, ExternalLink } from 'lucide-react'

import PeerReviewSection from '@/components/sections/peer-review-section'
import PeerReviewForm from '@/components/sections/peer-review-form'

export const metadata: Metadata = {
  title: 'Independent Peer Review & External Evaluation',
  description:
    'Independent peer review, external evaluation and judging in cybersecurity, Zero Trust architectures and critical infrastructures.',
}

export default function PeerReviewPage() {
  return (
    <div className="min-h-screen py-16 md:py-20 bg-gray-950 text-slate-50">
      <div className="container mx-auto px-4 max-w-6xl space-y-14">

        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-slate-400 gap-1">
          <Link href="/" className="hover:text-slate-100 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/about" className="hover:text-slate-100 transition-colors">About</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-200">Peer Review & External Evaluation</span>
        </nav>

        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-[2fr,1.4fr] items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">
              Peer Review · External Evaluation · Judging
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Independent Peer Reviewer & External Evaluator in{' '}
              <span className="text-cyan-300">
                Cybersecurity, Zero Trust & Critical Infrastructure
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6">
              Paulo Fernandes Bião acts as an independent peer reviewer and external evaluator
              for cybersecurity architectures, technical papers, innovation programs and
              open innovation calls, with a focus on mission-critical and financial sector systems.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-cyan-300" />
                Zero Trust & Financial Cybersecurity
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700">
                <Globe2 className="w-4 h-4 text-cyan-300" />
                International & remote evaluation
              </span>
            </div>
          </div>

          {/* Methodology */}
          <aside className="bg-slate-900/50 border border-slate-700/70 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-slate-50 mb-2">
              Evaluation methodology
            </h2>
            <p className="text-sm text-slate-300 mb-3">
              All evaluations are conducted using structured, vendor-agnostic and
              documented criteria to ensure consistency, transparency and fairness.
            </p>
            <Link
              href="/evalution"
              className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
            >
              View SecureBank™ Evaluation Methodology →
            </Link>
          </aside>
        </section>

        {/* STANDARDS & COMMUNITY CONTRIBUTIONS (OWASP) */}
        <section className="bg-slate-900/60 border border-slate-700/70 rounded-2xl p-6 md:p-7">
          <h2 className="text-lg font-semibold text-slate-50 mb-1">
            Standards & Community Contributions
          </h2>
          <p className="text-sm text-slate-400 mb-4">
            Public, dated, verifiable contributions
          </p>

          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
            <div className="flex justify-between gap-2">
              <div className="font-semibold text-slate-100">
                OWASP Application Security Verification Standard (ASVS)
              </div>
              <div className="text-sm text-slate-400">January 2026</div>
            </div>

            <div className="text-sm text-slate-300 mt-2">
              Public technical contribution on verification ambiguity for ASVS 3.2.2 in modern SPA frameworks
            </div>

            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              Focused on preserving the security intent (safe rendering of untrusted data)
              while clarifying that listed implementation functions are non-exhaustive examples,
              reducing misinterpretation during security assessments.
            </p>

            <a
              href="https://github.com/OWASP/ASVS/issues/3224"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center mt-3 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              View public discussion <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-4">
            Note: Links are provided for direct verification of public contributions and timelines.
          </p>
        </section>

        {/* EXTERNAL EVALUATION & JUDGING — EB-1 CORE */}
        <section className="bg-slate-900/60 border border-slate-700/70 rounded-2xl p-6 md:p-7">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">
            External Evaluation & Judging
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Paulo Fernandes Bião serves as an independent evaluator and judge for
            cybersecurity-related submissions, frameworks and innovation initiatives.
            Evaluations focus on technical merit, security rigor, architectural soundness
            and real-world applicability.
          </p>

          <ul className="text-sm text-slate-300 space-y-1.5">
            <li>• Independent judge for international hackathons and open innovation programs</li>
            <li>• External evaluator of cybersecurity architectures, frameworks and prototypes</li>
            <li>• Reviewer of innovation, research and award submissions in digital trust</li>
            <li>• No employment, equity or financial interest in submitting entities</li>
          </ul>

          <p className="text-xs text-slate-400 mt-4">
            Evaluation activities are documented through public listings, invitations,
            submission platforms and formal correspondence.
          </p>
        </section>

        {/* DETAILED SCOPE + CONTACT */}
        <PeerReviewSection />
        <PeerReviewForm />

      </div>
    </div>
  )
}
