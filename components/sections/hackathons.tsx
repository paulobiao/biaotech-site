import Link from 'next/link'
import { ExternalLink, Trophy, Users } from 'lucide-react'

const hackathons = [
  {
    event: 'Gemini 3 Hackathon — Google DeepMind',
    project: 'SecureBank Copilot',
    period: 'Dec 2025 – Feb 2026',
    participants: '35,574 participants',
    description:
      'AI copilot using Gemini 3 to simulate cyber incidents and estimate financial and regulatory impact in simulated scenarios.',
    tags: ['Machine Learning/AI', 'Fintech'],
    link: 'https://devpost.com/software/securebank-copilot-gemini-3',
  },
  {
    event: 'Dev Season of Code (DSOC) 2026',
    project: 'BoardBrief AI',
    period: '2026',
    participants: '1,007 participants',
    description:
      'Transforms security incidents into clear executive decision briefs.',
    tags: ['Machine Learning/AI', 'Fintech'],
    link: 'https://devpost.com/software/boardbrief-ai-gemini-3',
  },
  {
    event: 'Elasticsearch Agent Builder — Elastic',
    project: 'Incident Triage Agent',
    period: 'Jan – Feb 2026',
    participants: '2,108 participants',
    description:
      'Real-time incident triage that classifies severity and indexes into Elasticsearch.',
    tags: ['Databases', 'Machine Learning/AI'],
    link: 'https://devpost.com/software/incident-triage-agent',
  },
  {
    event: 'Techinance Cyberhack 2',
    project: '"Should I Worry?" — AI Cyber Assistant',
    period: 'Jan – Feb 2026',
    participants: '70 participants',
    description:
      'Turns security alerts into clear, understandable incidents for non-technical users.',
    tags: ['Security', 'Health'],
    link: 'https://devpost.com/software/ai-cyber-awareness-incident-triage-agent',
  },
]

export default function Hackathons() {
  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
            <Trophy className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-semibold text-blue-400 tracking-wide uppercase">
              Competitions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Global Hackathons — 2025/2026
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Open-source projects built and submitted to global competitions.
            All submissions verifiable on Devpost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {hackathons.map((h) => (
            <div
              key={h.project}
              className="rounded-2xl border border-slate-700/60 bg-slate-900/80 p-6 flex flex-col hover:border-slate-600/80 transition-colors"
            >
              <div className="text-xs text-slate-500 mb-1">{h.event}</div>
              <h3 className="text-lg font-bold text-white mb-2">{h.project}</h3>
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span>{h.period}</span>
                <span className="inline-flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {h.participants}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                {h.description}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex gap-2 flex-wrap">
                  {h.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/50 text-xs text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={h.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  View on Devpost
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="https://devpost.com/paulo86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-cyan-400 underline underline-offset-4"
          >
            View full Devpost profile →
          </Link>
        </div>
      </div>
    </section>
  )
}