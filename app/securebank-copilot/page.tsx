import Link from 'next/link'
import { ArrowRight, Github, Play } from 'lucide-react'

export default function SecureBankCopilotPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto max-w-6xl px-6 py-28">
          {/* 🔹 Headline ajustada */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            SecureBank Copilot
          </h1>

          <p className="mt-4 text-xl text-blue-100 max-w-3xl">
            From cyber alerts to <strong>board-ready financial decisions</strong> in minutes.
          </p>

          {/* 🔹 Subheadline com diferencial explícito */}
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
          “If this control fails, what will it actually cost us?”
        </div>

        <p className="mt-6 max-w-3xl text-gray-700 leading-relaxed">
          That uncertainty leads to delayed decisions, regulatory fines,
          capital loss, and board-level accountability — after it’s too late.
        </p>

        <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
          Existing tools focus on technical alerts, compliance checklists, or
          post-incident reports — not on decision-ready financial and regulatory insight.
        </p>
      </section>

      {/* 🔹 Why it matters (novo bloco) */}
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
            <li>• “What-if” decision support</li>
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
