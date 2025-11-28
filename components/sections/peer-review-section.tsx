'use client'

import { Mail } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'
import { Button } from '@/components/ui/button'

export default function PeerReviewSection() {
  return (
    <AnimatedSection>
      <section
        id="peer-review"
        className="w-full max-w-5xl mx-auto py-16 lg:py-24 px-4"
      >
        <div className="grid gap-10 lg:grid-cols-[2fr,1.3fr] items-start">
          {/* Main text */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-3">
              Peer Review & Technical Advisory
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-50 mb-4">
              Available for independent technical evaluation in{' '}
              <span className="block text-cyan-300">
                Cybersecurity & Critical Infrastructure
              </span>
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Paulo Fernandes Bião is a cybersecurity architect and creator of the
              frameworks{' '}
              <span className="font-semibold text-slate-50">
                SecureBank™, HealthGuard™, PhysiDigital™ and SentinelEdge™
              </span>
              . With more than 17 years of experience in electronic security,
              critical infrastructures, Zero Trust and behavioral analytics, he
              acts as a peer reviewer and technical advisor for high-impact
              initiatives.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-2 uppercase tracking-wide">
                  Areas of expertise
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li>• Zero Trust Architecture (NIST 800-207 / CISA)</li>
                  <li>• API Security & Open Finance</li>
                  <li>• Behavioral & AI-driven Analytics</li>
                  <li>• Financial Sector Cybersecurity</li>
                  <li>• Cloud & Critical Infrastructure Security</li>
                  <li>• Operational Resilience & SOAR</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-2 uppercase tracking-wide">
                  Types of review
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li>• Academic and technical papers / whitepapers</li>
                  <li>• Security frameworks and reference architectures</li>
                  <li>• Financial and critical-sector digital products</li>
                  <li>• Innovation and award submissions</li>
                  <li>• Journal / conference submissions and abstracts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact side card */}
          <aside className="bg-slate-900/60 border border-slate-700/70 rounded-2xl p-6 shadow-lg shadow-cyan-500/10 backdrop-blur">
            <p className="text-sm font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
              Invite Paulo as a peer reviewer
            </p>
            <p className="text-sm text-slate-300 mb-4">
              Organizations interested in inviting Paulo to act as a technical
              reviewer, evaluation committee member or innovation panelist can
              reach out directly via e-mail.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-cyan-300" />
                <a
                  href="mailto:paulo@biaotech.dev?subject=Peer%20Review%20Invitation"
                  className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
                >
                  paulo@biaotech.dev
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Typical requests include: technical paper review, award
                submission evaluation, architecture assessment and conference
                abstract review.
              </p>
            </div>

            <div className="mt-6">
              <Button
                asChild
                className="w-full justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
              >
                <a href="mailto:paulo@biaotech.dev?subject=Peer%20Review%20Invitation">
                  <Mail className="w-4 h-4" />
                  Request Peer Review
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </AnimatedSection>
  )
}
