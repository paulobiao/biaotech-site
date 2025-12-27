import type { Metadata } from "next"
import Link from "next/link"
import { ShieldCheck, ClipboardCheck, LineChart, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Evaluation Methodology",
  description:
    "Independent, vendor-agnostic methodology to evaluate Zero Trust architectures using the SecureBank™ scorecard and metrics.",
}

export default function EvalutionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="container mx-auto px-4 max-w-6xl py-16 md:py-20 space-y-10">
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-wide text-blue-400 uppercase">
            Evaluation
          </p>
          <h1 className="text-4xl md:text-5xl font-black">
            SecureBank™ Evaluation Methodology
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            A vendor-agnostic framework to evaluate Zero Trust architectures in
            financial environments using a transparent scorecard and measurable
            security + cost metrics.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/40 px-4 py-2 text-sm hover:bg-slate-900/70 transition"
            >
              <FileText className="h-4 w-4" />
              Read the paper
            </Link>
            <a
              href="/SecureBank_V2.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600/20 px-4 py-2 text-sm hover:bg-blue-600/30 transition"
            >
              <ShieldCheck className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </header>

        <section className="grid md:grid-cols-3 gap-4">
          <Card
            icon={<ClipboardCheck className="h-5 w-5" />}
            title="Scorecard"
            text="Structured criteria to evaluate architectures consistently and fairly."
          />
          <Card
            icon={<LineChart className="h-5 w-5" />}
            title="Metrics"
            text="TII, SAE, ITAL and related indicators to quantify trade-offs."
          />
          <Card
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Independent Review"
            text="Designed for third-party evaluation, peer review and advisory use."
          />
        </section>

        <section className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 md:p-8 space-y-5">
          <h2 className="text-2xl font-bold">How evaluations are performed</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2 leading-relaxed">
            <li>
              Define the environment scope (banking workflows, threat model, compliance context).
            </li>
            <li>
              Apply the SecureBank™ scorecard to assess architecture controls and gaps.
            </li>
            <li>
              Quantify outcomes using security + cost metrics (risk, resilience, operational impact).
            </li>
            <li>
              Produce a short technical report with findings, deltas and prioritized recommendations.
            </li>
          </ol>
        </section>

        <section className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold">Reviewer availability</h2>
          <p className="text-slate-300 leading-relaxed">
            I am available for peer review, technical evaluation and advisory panels in:
            Zero Trust, security architecture, financial systems security, and framework-based assessments.
          </p>
          <p className="text-slate-300">
            Contact:{" "}
            <span className="font-semibold text-slate-100">
              paulo@biaotech.dev
            </span>
          </p>
        </section>
      </div>
    </main>
  )
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-5 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-slate-700/60 bg-slate-950/40 p-2">
          {icon}
        </div>
        <div className="text-lg font-bold">{title}</div>
      </div>
      <p className="mt-3 text-slate-300 leading-relaxed">{text}</p>
    </div>
  )
}
