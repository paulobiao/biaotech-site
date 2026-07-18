'use client'

import { useState, useCallback, useEffect } from 'react'
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

  const fetchHealth = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/health-proxy', { cache: 'no-store' })
      if (!res.ok) throw new Error('Non-OK response')
      const json = await res.json()
      setData(json)
    } catch {
      setError(true)
      setData(null)
    } finally {
      setLastRefresh(new Date())
      setLoading(false)
    }
  }, [])

  // Single check on page load — no polling.
  useEffect(() => {
    fetchHealth()
  }, [fetchHealth])

  const isOk = !error && data?.status === 'ok'
  const dbConnected = data?.database === 'connected' || data?.database === 'ok'

  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Section header */}
        <div className="mb-10 text-center">
          {isOk ? (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">API Online</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/30 mb-4">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-400" />
              <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                {loading ? 'Checking…' : 'API Offline'}
              </span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Backend API — Status Check
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Backend API deployed on AWS EC2 — Node.js · PostgreSQL · Docker · GitHub Actions CI/CD.
            The instance runs on demand and may be stopped to save costs; status below is checked live.
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
              aria-label="Check status"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span className="font-mono">Check status</span>
            </button>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm">
            {loading && !data && !error && (
              <div className="flex items-center gap-3 text-slate-400 py-8 justify-center">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Checking API status…</span>
              </div>
            )}

            {error && (
              <div className="flex flex-col items-center gap-2 text-slate-400 py-8 text-center">
                <WifiOff className="w-5 h-5 text-slate-500" />
                <span className="text-slate-300">API offline — the EC2 instance is not currently running.</span>
                <span className="text-xs text-slate-500">
                  This is demo infrastructure started on demand. Use “Check status” to try again.
                </span>
              </div>
            )}

            {data && (
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
                      {data?.status ?? 'unknown'}
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
                        {data?.database ?? '—'}
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
                <div className="mt-2 p-3 rounded-lg bg-black/40 border border-slate-700/30 text-xs text-slate-400 overflow-x-auto">
                  <span className="text-slate-600">$ </span>
                  <span className="text-emerald-400/80">curl</span>
                  <span className="text-slate-300"> https://api.biaotech.dev/api/health</span>
                  <br />
                  <pre className="mt-1 text-slate-300/70 whitespace-pre-wrap break-all">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </div>
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