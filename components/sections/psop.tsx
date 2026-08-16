import Image from 'next/image'
import { Activity, ShieldCheck, Server, Bell } from 'lucide-react'

const highlights = [
  { icon: Activity, text: 'Real-time device health: online / degraded / offline status with heartbeat and MTTR' },
  { icon: Bell, text: 'Incident detection, deduplication and alerting across sites' },
  { icon: ShieldCheck, text: 'RBAC, MFA, sessions and full audit trail' },
  { icon: Server, text: 'Multi-tenant, vendor-agnostic — built on the BiaoTech API (AWS)' },
]

export default function Psop() {
  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span className="text-xs font-semibold text-blue-400 tracking-wide uppercase">Flagship Project</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            PSOP — Physical Security Observability Platform
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            A cloud platform that monitors the operational health of connected physical-security
            devices — cameras, recorders, alarm panels and network equipment. In development,
            validated with real hardware in a lab environment.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-2 md:p-3 mb-8 shadow-2xl shadow-black/40">
          <Image
            src="/psop/dashboard.png"
            alt="PSOP dashboard showing real-time monitoring of cameras, recorders and network devices"
            width={1700}
            height={1280}
            className="rounded-xl w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <div key={h.text} className="flex items-start gap-3 p-4 rounded-xl border border-slate-700/50 bg-slate-900/50">
                <Icon className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-relaxed">{h.text}</span>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['5 devices monitored', 'Multi-vendor (Hikvision, Speco, Lorex)', 'ONVIF · PoE · firmware', 'Lab-validated'].map((s) => (
            <div key={s} className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700/40">
              <span className="text-xs text-slate-400">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}