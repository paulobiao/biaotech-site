'use client'

import { motion } from 'framer-motion'
import { Camera, Cloud, KeyRound } from 'lucide-react'
import { SiDocker, SiGithub, SiGithubactions, SiTerraform } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { useSafeReducedMotion } from '@/components/signal-node'

/** Cover signature echoing the case-study hero: CI delivers to one EC2 host. Docker sits apart — local dev only. */
export function BiaoTechVisual() {
  return (
    <div className="relative flex h-full min-h-[210px] w-full flex-col overflow-hidden bg-[#0d1424] px-5 py-4 font-mono">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(240px 180px at 50% 58%, rgba(47,111,237,0.16), transparent 70%)' }}
      />
      <div className="relative flex items-center gap-1.5 text-[8.5px] font-bold uppercase tracking-[0.14em] text-[#60a5fa]/85">
        <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]/85" />
        Deployed project <span className="text-white/35">· offline</span>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center py-3">
        <div className="flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-white/65">
          <SiGithubactions size={12} /> GitHub Actions
        </div>
        <span className="h-5 w-px bg-[#60a5fa]/45" />
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-[#FF9900]/35 bg-[#FF9900]/[0.05] shadow-[0_0_28px_-6px_rgba(255,153,0,0.35)]">
          <FaAws size={28} className="text-[#FF9900]/85" />
        </div>
        <span className="mt-1.5 text-[11px] font-bold text-white/80">AWS EC2</span>
        <div className="mt-2.5 flex flex-wrap justify-center gap-1">
          {['Express', 'PM2', 'PostgreSQL'].map((t) => (
            <span key={t} className="rounded-sm border border-white/12 px-1.5 py-0.5 text-[9px] text-white/50">
              {t}
            </span>
          ))}
        </div>
      </div>

      <span className="relative self-end rounded-sm border border-dashed border-white/15 px-1.5 py-0.5 text-[8px] uppercase tracking-[0.12em] text-white/30">
        Docker · local dev
      </span>
    </div>
  )
}

/**
 * Cover for a Terraform-defined design that is NOT deployed: the AWS block is dashed and
 * labelled planned, with no live/green states. Docker and the VPC breakdown drop below sm.
 */
const cloudLabFlow = [
  { Icon: SiGithub, label: 'GitHub', mobile: true },
  { Icon: SiGithubactions, label: 'Actions', mobile: true },
  { Icon: SiDocker, label: 'Docker', mobile: false },
  { Icon: SiTerraform, label: 'Terraform', mobile: true },
]

export function CloudLabVisual() {
  return (
    <div className="relative flex h-full min-h-[210px] w-full flex-col overflow-hidden bg-[#0b1020] px-5 py-4 font-mono">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(240px 180px at 50% 30%, rgba(124,92,255,0.14), transparent 70%)' }}
      />
      <div className="relative flex items-center gap-1.5 text-[8.5px] font-bold uppercase tracking-[0.14em] text-[#a78bfa]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
        Design validated
      </div>

      {/* Delivery chain */}
      <div className="relative mt-4 flex justify-between">
        <span aria-hidden className="absolute left-3.5 right-3.5 top-3.5 h-px bg-[#7c5cff]/35" />
        {cloudLabFlow.map(({ Icon, label, mobile }) => (
          <div key={label} className={`${mobile ? 'flex' : 'hidden sm:flex'} relative flex-col items-center gap-1`}>
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-md border bg-[#0b1020] ${label === 'Terraform' ? 'border-[#7c5cff]/60 text-[#c4b5fd]' : 'border-white/15 text-white/65'}`}
            >
              <Icon size={12} />
            </span>
            <span className="text-[8.5px] text-white/50">{label}</span>
          </div>
        ))}
      </div>

      {/* Terraform defines the AWS design */}
      <div className="relative flex justify-end pr-3.5" aria-hidden>
        <span className="h-4 border-l border-dashed border-[#7c5cff]/45" />
      </div>

      {/* Planned AWS architecture */}
      <div className="relative rounded-md border border-dashed border-[#FF9900]/30 px-3 pb-3 pt-2.5">
        <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white/45">
          <FaAws size={13} className="text-[#FF9900]/60" />
          AWS · planned · not deployed
        </div>
        <div className="mt-2.5 hidden sm:block">
          <div className="rounded-sm border border-dashed border-[#7c5cff]/35 px-2 py-2">
            <span className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-[#a78bfa]/75">VPC</span>
            <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-white/70">
              <span className="rounded-sm border border-white/15 px-1.5 py-0.5">ALB</span>
              <span aria-hidden className="h-px w-2 bg-white/25" />
              <span className="rounded-sm border border-white/15 px-1.5 py-0.5">ECS Fargate</span>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-white/60">
            <span className="rounded-sm border border-white/12 px-1.5 py-0.5">ECR</span>
            <span className="rounded-sm border border-white/12 px-1.5 py-0.5">CloudWatch</span>
            <span className="flex items-center gap-1 rounded-sm border border-[#7c5cff]/30 px-1.5 py-0.5 text-[#c4b5fd]/70">
              <KeyRound size={9} /> GitHub OIDC
            </span>
          </div>
        </div>
      </div>

      <span className="relative mt-2.5 self-start rounded-sm border border-white/12 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white/45">
        $0 spend guardrail
      </span>
    </div>
  )
}

const fleetMini = [
  { x: 14, y: 22 },
  { x: 10, y: 52 },
  { x: 16, y: 82 },
]
const fleetMiniCloud = { x: 82, y: 52 }

export function CameraFleetVisual() {
  const reduceMotion = useSafeReducedMotion()
  return (
    <div className="relative h-full w-full overflow-hidden bg-[var(--pb-navy)]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {fleetMini.map((c, i) => (
          <line key={i} x1={c.x} y1={c.y} x2={fleetMiniCloud.x} y2={fleetMiniCloud.y} stroke="#7c5cff" strokeOpacity="0.2" strokeWidth="0.4" />
        ))}
        {!reduceMotion &&
          fleetMini.map((c, i) => (
            <motion.circle
              key={`p-${i}`}
              r={0.8}
              fill="#c8beff"
              initial={{ cx: c.x, cy: c.y, opacity: 0 }}
              animate={{ cx: [c.x, fleetMiniCloud.x], cy: [c.y, fleetMiniCloud.y], opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut', repeatDelay: 1.4 }}
              style={{ filter: 'drop-shadow(0 0 3px #8f7bff)' }}
            />
          ))}
      </svg>
      {fleetMini.map((c, i) => (
        <div key={i} className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
          <Camera size={12} color="#c8beff" strokeWidth={1.6} />
        </div>
      ))}
      <div className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#22d3ee]/40" style={{ left: `${fleetMiniCloud.x}%`, top: `${fleetMiniCloud.y}%`, boxShadow: '0 0 20px 3px rgba(34,211,238,0.18)', background: 'rgba(34,211,238,0.06)' }}>
        <Cloud size={16} color="#7fe3f2" strokeWidth={1.6} />
      </div>
    </div>
  )
}

export const projectVisualComponents: Record<string, React.ComponentType> = {
  'biaotech-api': BiaoTechVisual,
  'camera-fleet-monitor': CameraFleetVisual,
}
