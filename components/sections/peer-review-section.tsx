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

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-3">
              Peer Review & External Evaluation
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-50 mb-4">
              Independent technical evaluation in{' '}
              <span className="block text-cyan-300">
                Cybersecurity & Critical Infrastructure
              </span>
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Paulo Fernandes Bião is an independent cybersecurity architect and framework author,
              acting as a peer reviewer and external evaluator for technical papers,
              innovation submissions and architecture assessments in regulated and
              mission-critical environments.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-2 uppercase tracking-wide">
                  Areas of evaluation
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li>• Zero Trust Architecture (NIST 800-207)</li>
                  <li>• Financial & Open Finance Security</li>
                  <li>• API Security & Cloud Architectures</li>
                  <li>• Critical Infrastructure Protection</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-2 uppercase tracking-wide">
                  Evaluation scope
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li>• Academic & technical submissions</li>
                  <li>• Innovation and hackathon entries</li>
                  <li>• Security frameworks & reference architectures</li>
                  <li>• External advisory and judging panels</li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="bg-slate-900/60 border border-slate-700/70 rounded-2xl p-6 shadow-lg">
            <p className="text-sm font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
              Invite as external evaluator
            </p>

            <p className="text-sm text-slate-300 mb-4">
              Organizations, journals and innovation programs may invite Paulo
              to act as an independent peer reviewer or external evaluator.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-cyan-300" />
              <a
                href="mailto:paulo@biaotech.dev?subject=External%20Evaluation%20Invitation"
                className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
              >
                paulo@biaotech.dev
              </a>
            </div>

            <div className="mt-6">
              <Button
                asChild
                className="w-full justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
              >
                <a href="mailto:paulo@biaotech.dev?subject=External%20Evaluation%20Invitation">
                  <Mail className="w-4 h-4" />
                  Request Evaluation
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </AnimatedSection>
  )
}
