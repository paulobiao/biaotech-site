'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ExternalLink, RefreshCw, Wifi, WifiOff, Database, Clock, Server, Activity } from 'lucide-react'

interface HealthData {
  status: string
  database?: string
  uptime?: number
  environment?: string
  timestamp?: string
  [key: string]: unknown
}

function formatUptime(seconds: number): string {
  if (!seconds || seconds < 0) return '—'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

function formatTimestamp(ts: string): string {
  try {
    const d = new Date(ts)
    return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
  } catch {
    return ts
  }
}

export default function LiveInfrastructure() {
  const [data, setData] = useState<HealthData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null)
  const [countdown, setCountdown] = useState(30)

  const fetchHealth = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/health-proxy', { cache: 'no-store' })
      if (!res.ok) throw new Error('Non-OK response')
      const json = await res.json()
      setData(json)
      setLastRefresh(new Date())
      setCountdown(30)
    } catch {
      setError(true)
      setData(null)
      setLastRefresh(new Date())
      setCountdown(30)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchHealth()
  }, [fetchHealth])

  useEffect(() => {
    const interval = setInterval(fetchHealth, 30000)
    return () => clearInterval(interval)
  }, [fetchHealth])

  useEffect(() => {
    const tick = setInterval(() => {
      setCountdown((c) => (c > 0 ? c - 1 : 30))
    }, 1000)
    return () => clearInterval(tick)
  }, [lastRefresh])

  const isOk = !error && data?.status === 'ok'
  const dbConnected = data?.database === 'connected' || data?.database === 'ok'

  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Section header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">Live Infrastructure</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Production API — Real-Time Status
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            This API is live on AWS EC2, not a mock. Node.js · PostgreSQL · Docker · GitHub Actions CI/CD.
          </p>
        </div>

        {/* Terminal card */}
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/90 shadow-2xl shadow-black/40 overflow-hidden">
          {/* Terminal top bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-slate-800/80 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs text-slate-400 font-mono">api.biaotech.dev/api/health</span>
            </div>
            <button
              onClick={fetchHealth}
              disabled={loading}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors disabled:opacity-50"
              aria-label="Refresh status"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span className="font-mono">refresh in {countdown}s</span>
            </button>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm">
            {loading && !data && (
              <div className="flex items-center gap-3 text-slate-400 py-8 justify-center">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Fetching health data…</span>
              </div>
            )}

            {(data || error) && (
              <div className="space-y-4">
                {/* Status row */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Activity className="w-4 h-4" />
                    <span>STATUS</span>
                  </div>
                  {isOk ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      OK — operational
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-semibold">
                      <WifiOff className="w-3 h-3" />
                      {error ? 'unreachable' : data?.status ?? 'unknown'}
                    </span>
                  )}
                </div>

                <div className="border-t border-slate-800" />

                {/* Data grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Database */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/40">
                    <Database className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">DATABASE</div>
                      <div className={`text-sm font-semibold ${dbConnected ? 'text-emerald-400' : 'text-red-400'}`}>
                        {data?.database ?? (error ? 'unreachable' : '—')}
                      </div>
                    </div>
                  </div>

                  {/* Uptime */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/40">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">UPTIME</div>
                      <div className="text-sm font-semibold text-cyan-400">
                        {data?.uptime != null ? formatUptime(Number(data.uptime)) : '—'}
                      </div>
                    </div>
                  </div>

                  {/* Environment */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/40">
                    <Server className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">ENVIRONMENT</div>
                      <div className="text-sm font-semibold text-purple-400">
                        {String(data?.environment ?? '—')}
                      </div>
                    </div>
                  </div>

                  {/* Last checked */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/40">
                    <Wifi className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">LAST CHECKED</div>
                      <div className="text-sm font-semibold text-blue-400">
                        {data?.timestamp
                          ? formatTimestamp(String(data.timestamp))
                          : lastRefresh
                          ? lastRefresh.toLocaleTimeString('en-US', { hour12: false })
                          : '—'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Raw JSON preview */}
                {data && (
                  <div className="mt-2 p-3 rounded-lg bg-black/40 border border-slate-700/30 text-xs text-slate-400 overflow-x-auto">
                    <span className="text-slate-600">$ </span>
                    <span className="text-emerald-400/80">curl</span>
                    <span className="text-slate-300"> https://api.biaotech.dev/api/health</span>
                    <br />
                    <pre className="mt-1 text-slate-300/70 whitespace-pre-wrap break-all">
                      {JSON.stringify(data, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-800/40 border-t border-slate-700/50 flex-wrap gap-3">
            <div className="text-xs text-slate-500 font-mono">
              Stack: Node.js · PostgreSQL · Docker · AWS EC2 · Nginx · JWT · GitHub Actions
            </div>
            <Link
              href="https://api.biaotech.dev/api/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold transition-all shadow-lg shadow-blue-900/30"
            >
              View Swagger Docs
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
