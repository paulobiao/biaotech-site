import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Award,
  Users,
  FileText,
  Scale,
  Globe2,
  BadgeCheck,
  ExternalLink,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'Professional & Academic Engagement',
  description:
    'Independent technical advisory, peer review support, standards contributions, research dissemination, and framework development in cybersecurity and critical infrastructures.',
}

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Independent Technical Advisory',
    bullets: [
      'Architecture review for Zero Trust, cloud, and critical systems',
      'Security posture evaluation and gap analysis',
      'Control mapping aligned with common standards (e.g., NIST/ISO)',
      'Risk-based recommendations with implementation priorities',
    ],
  },
  {
    icon: BookOpen,
    title: 'Peer Review & Research Support',
    bullets: [
      'Technical peer review for manuscripts and whitepapers',
      'Methodology refinement and clarity improvements',
      'Reproducibility checks (experiments, metrics, simulations)',
      'Review-ready formatting and structured feedback',
    ],
  },
  {
    icon: FileText,
    title: 'Framework Authorship & Dissemination',
    bullets: [
      'SecureBank™ — financially-aware Zero Trust for banking systems',
      'HealthGuard™ — security architecture for healthcare environments',
      'PhysiDigital™ — digital transformation methods for resilient orgs',
      'Open research artifacts: code, datasets, and technical docs',
    ],
  },
]

const proofPoints = [
  {
    icon: Award,
    label: 'Credentials & Certifications',
    text: 'Selected certifications and training aligned with cybersecurity and cloud.',
  },
  {
    icon: Users,
    label: 'Professional Collaboration',
    text: 'Cross-functional work with engineers, stakeholders, and leadership teams.',
  },
  {
    icon: Scale,
    label: 'Evidence-Based Practice',
    text: 'Decisions grounded in risk, controls, and measurable outcomes.',
  },
  {
    icon: Globe2,
    label: 'International-Ready',
    text: 'Professional documentation in English for global audiences and formal review.',
  },
]

const standardsContributions = [
  {
    org: 'OWASP Application Security Verification Standard (ASVS)',
    date: 'January 2026',
    title: 'Public technical contribution on verification ambiguity for ASVS 3.2.2 in modern SPA frameworks',
    summary:
      'Focused on preserving the security intent (safe rendering of untrusted data) while clarifying that implementation functions listed are non-exhaustive examples, reducing misinterpretation during assessments.',
    href: 'https://github.com/OWASP/ASVS/issues/3224',
  },
]

export default function EngagementPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* HERO */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 mb-4">
            <ShieldCheck className="h-7 w-7 text-blue-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Professional & Academic Engagement
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            This page summarizes independent work related to cybersecurity frameworks, technical evaluation,
            peer review support, and research dissemination. No testimonials — only verifiable, structured
            contributions and capabilities.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/publications"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 hover:bg-gray-100 transition-colors font-semibold"
            >
              View Publications <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold"
            >
              Request Advisory / Review <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </AnimatedSection>

        {/* STANDARDS & COMMUNITY CONTRIBUTIONS (EB-1 critical proof block) */}
        <AnimatedSection className="mb-14">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <BadgeCheck className="h-6 w-6 text-blue-600" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h2 className="text-xl font-bold text-gray-900">
                    Standards & Community Contributions
                  </h2>
                  <div className="text-sm text-gray-500">Public, dated, verifiable contributions</div>
                </div>

                <div className="grid gap-4">
                  {standardsContributions.map((c) => (
                    <div
                      key={c.org}
                      className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <div className="font-semibold text-gray-900">{c.org}</div>
                          <div className="text-sm text-gray-600 mt-1">{c.title}</div>
                        </div>
                        <div className="text-sm text-gray-500 md:text-right">{c.date}</div>
                      </div>

                      <p className="text-sm text-gray-700 leading-relaxed mt-3">
                        {c.summary}
                      </p>

                      <div className="mt-3">
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800"
                        >
                          View public discussion <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 text-sm text-gray-600">
                  Note: Links are provided for direct verification of public contributions and timelines.
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* PROOF POINTS */}
        <AnimatedSection className="mb-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proofPoints.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.label}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{p.label}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{p.text}</div>
                </div>
              )
            })}
          </div>
        </AnimatedSection>

        {/* PILLARS */}
        <div className="grid lg:grid-cols-3 gap-8 mb-14">
          {pillars.map((p, idx) => {
            const Icon = p.icon
            return (
              <AnimatedSection key={p.title} delay={idx * 0.12}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-11 w-11 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{p.title}</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* CTA */}
        <AnimatedSection className="mb-6">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Need an independent review or advisory support?
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 max-w-3xl">
                  If you’re organizing a technical evaluation, preparing a paper, or need an architecture review,
                  send the context and goals. I’ll reply with scope, expected deliverables, and timelines.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
