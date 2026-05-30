import Link from 'next/link'
import { ArrowRight, Github, Play, ExternalLink } from 'lucide-react'

const competitions = [
  {
    project: 'SecureBank Copilot (Gemini 3)',
    competition: 'Gemini 3 Hackathon — Google DeepMind',
    date: 'Dec 17, 2025 – Feb 9, 2026',
    participants: '35,574',
    prize: '$100,000',
    description:
      'AI copilot using Gemini 3 to simulate cyber incidents and quantify financial and regulatory impact before they happen.',
    url: 'https://devpost.com/software/securebank-copilot-gemini-3',
    tags: ['Machine Learning/AI', 'Social Good'],
    accent: 'from-blue-600 to-cyan-600',
    tagColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  },
  {
    project: 'BoardBrief AI',
    competition: 'Dev Season of Code (DSOC) 2026',
    date: '2026',
    participants: '1,007',
    prize: '$5,450',
    description:
      'Transforms cybersecurity incidents into clear executive decision briefs.',
    url: 'https://devpost.com/software/boardbrief-ai-gemini-3',
    tags: ['Machine Learning/AI', 'Fintech'],
    accent: 'from-purple-600 to-pink-600',
    tagColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  },
  {
    project: 'Incident Triage Agent',
    competition: 'Elasticsearch Agent Builder — Elastic',
    date: 'Jan 22 – Feb 27, 2026',
    participants: '2,108',
    prize: '$20,000',
    description:
      'Real-time incident triage that classifies severity and indexes into Elasticsearch.',
    url: 'https://devpost.com/software/incident-triage-agent',
    tags: ['Databases', 'Machine Learning/AI'],
    accent: 'from-emerald-600 to-teal-600',
    tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  },
  {
    project: '"Should I Worry?" — AI Cyber Assistant',
    competition: 'Techinance Cyberhack 2',
    date: 'Jan 31 – Feb 10, 2026',
    participants: '70',
    prize: null,
    description:
      'Transforms security alerts into clear understandable incidents for non-technical users.',
    url: 'https://devpost.com/software/ai-cyber-awareness-incident-triage-agent',
    tags: ['Cybersecurity', 'Health'],
    accent: 'from-orange-600 to-red-600',
    tagColor: 'bg-orange-500/10 text-orange-300 border-orange-500/30',
  },
]

export default function SecureBankCopilotPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Competition Projects ─────────────────────────────────── */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto max-w-6xl px-6">

          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              Devpost · Global Competitions
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Projects &amp; Competitions
            </h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed mb-6">
              Open-source projects built and submitted to global hackathons — 2025/2026
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300">
              <span className="font-semibold text-white">4 Projects</span>
              <span className="text-slate-600">·</span>
              <span>38,000+ global participants competed</span>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {competitions.map((c) => (
              <div
                key={c.project}
                className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-colors duration-200"
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${c.accent}`} />

                <div className="p-6">
                  {/* Competition name */}
                  <p className="text-xs text-slate-500 font-medium mb-2">{c.competition}</p>

                  {/* Project title */}
                  <h2 className="text-lg font-bold text-white mb-3 leading-snug">{c.project}</h2>

                  {/* Meta row */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mb-4">
                    <span>{c.date}</span>
                    <span className="text-slate-600">·</span>
                    <span>{c.participants} participants</span>
                    {c.prize && (
                      <>
                        <span className="text-slate-600">·</span>
                        <span className="text-emerald-400 font-medium">{c.prize} prize pool</span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">{c.description}</p>

                  {/* Footer row */}
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2.5 py-0.5 rounded-full border ${c.tagColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Devpost link */}
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      View on Devpost
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Devpost profile link */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://devpost.com/paulo86"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all text-sm font-medium"
            >
              View full Devpost profile — devpost.com/paulo86
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="bg-slate-900 border-y border-slate-700/60 py-8 px-6 text-center">
        <p className="text-sm font-bold text-white mb-1">
          Featured Project — SecureBank Copilot
        </p>
        <p className="text-sm text-slate-400">
          Full case study of the project submitted to Gemini 3 Hackathon by Google DeepMind
        </p>
      </div>

      {/* ── Existing SecureBank Copilot content (unchanged) ──────── */}

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto max-w-6xl px-6 py-28">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            SecureBank Copilot
          </h2>

          <p className="mt-4 text-xl text-blue-100 max-w-3xl">
            From cyber alerts to <strong>board-ready financial decisions</strong> in minutes.
          </p>

          <p className="mt-4 max-w-3xl text-blue-200">
            Unlike traditional security tools, SecureBank Copilot outputs executive briefings,
            control gaps, and risk register entries — not raw alerts.
          </p>

          <p className="mt-4 max-w-3xl text-blue-300">
            Powered by <strong>Gemini 3</strong>, the system simulates cyber incidents and
            quantifies financial, operational, and regulatory impact <strong>before</strong> damage occurs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="https://youtu.be/8ub0tqwIt5U"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium hover:bg-blue-500 transition"
            >
              <Play size={18} />
              Watch demo
            </Link>

            <Link
              href="https://github.com/paulobiao/securebank-copilot-gemini3"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <Github size={18} />
              View source code
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="container mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          The problem
        </h2>

        <p className="mt-6 max-w-3xl text-gray-700 leading-relaxed">
          Financial institutions invest billions in cybersecurity, yet executives
          still struggle to answer a fundamental question:
        </p>

        <div className="mt-6 max-w-3xl rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4 text-lg font-semibold text-gray-900">
          "If this control fails, what will it actually cost us?"
        </div>

        <p className="mt-6 max-w-3xl text-gray-700 leading-relaxed">
          That uncertainty leads to delayed decisions, regulatory fines,
          capital loss, and board-level accountability — after it's too late.
        </p>

        <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
          Existing tools focus on technical alerts, compliance checklists, or
          post-incident reports — not on decision-ready financial and regulatory insight.
        </p>
      </section>

      {/* Why it matters */}
      <section className="bg-white border-t">
        <div className="container mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why it matters
          </h2>

          <ul className="mt-8 grid gap-4 max-w-3xl text-gray-700">
            <li>• CISOs struggle to translate incidents into financial and regulatory language</li>
            <li>• Executives delay decisions due to unclear impact</li>
            <li>• Control gaps are discovered <strong>after</strong> incidents, not before</li>
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            The solution
          </h2>

          <p className="mt-6 max-w-3xl text-gray-700 leading-relaxed">
            SecureBank Copilot turns cybersecurity from a reactive technical function
            into a <strong>proactive financial and regulatory decision system</strong>.
          </p>

          <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
            Using Gemini 3 as a multi-layer reasoning engine, the system simulates
            realistic cyber incidents and translates them into quantified loss,
            regulatory exposure, and operational impact — before damage occurs.
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-2 text-gray-700">
            <li>• Pre-incident scenario simulation</li>
            <li>• Financial and regulatory impact quantification</li>
            <li>• Executive-ready summaries</li>
            <li>• "What-if" decision support</li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          How it works
          <p className="mt-4 max-w-3xl text-gray-600 text-sm">
            Designed for financial-sector environments (banking, payments, regulated institutions).
          </p>
        </h2>

        <p className="mt-6 max-w-3xl text-gray-700 leading-relaxed">
          SecureBank Copilot uses Gemini 3 as a multi-layer reasoning engine
          to connect identity, transaction, control, and regulatory domains
          into a single decision graph — something traditional rule-based
          security tools cannot do.
        </p>

        <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
          The output is not alerts or raw metrics, but{' '}
          <span className="font-semibold">
            clear decision paths executives can act on
          </span>.
        </p>
      </section>

      {/* Footer */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-lg text-blue-100">
            Built with <strong>Gemini 3</strong> · Google AI Studio · SecureBank™ Framework
          </p>
        </div>
      </section>
    </div>
  )
}
