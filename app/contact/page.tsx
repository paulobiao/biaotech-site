'use client'

import { useState, useEffect } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import {
  Mail,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Github,
  Linkedin,
  Send,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SignalTag, SignalDot } from '@/components/signal-node'
import GlassCard from '@/components/ui/glass-card'

type FormData = {
  name: string
  email: string
  company?: string
  phone?: string
  subject?: string
  message: string
}

const fieldClass =
  'w-full rounded-md border border-[var(--pb-border)] bg-[var(--pb-surface)] px-3.5 py-3 text-[13px] text-[var(--pb-ink)] placeholder-[var(--pb-ink-35)] outline-none transition focus:border-[var(--pb-cyan)]/40 focus:ring-2 focus:ring-[var(--pb-cyan)]/10'
const labelClass = 'mb-1.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--pb-ink-55)]'

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Success clears itself; a delivery error stays visible because it carries the fallback address.
  useEffect(() => {
    if (!success) return
    const timer = setTimeout(() => setSuccess(null), 6000)
    return () => clearTimeout(timer)
  }, [success])

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccess(null)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error('Error sending message')
      }

      setSuccess('Message sent. I will reply by email.')
      setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setError('Your message could not be sent. Please email contact@biaotech.dev directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-10 md:py-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 max-w-2xl">
        <div className="mb-5">
          <SignalTag accent="var(--pb-blue)">Contact</SignalTag>
        </div>
        <h1 className="text-[clamp(2.25rem,4.8vw,3.75rem)] font-black leading-[0.98] tracking-[-0.03em] text-[var(--pb-ink)]">
          Let&rsquo;s talk about{' '}
          <span
            style={{
              background: 'linear-gradient(100deg, #2f6fed 0%, #22d3ee 55%, #2dd4bf 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            the next system.
          </span>
        </h1>
        <p className="mt-5 text-[14px] leading-[1.75] text-[var(--pb-ink-55)]">
          Cloud infrastructure, systems analysis and operational observability —
          reach out using the form below or directly by email.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <GlassCard className="p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black tracking-[-0.02em] text-[var(--pb-ink)]">Send a message</h2>
                <p className="mt-1 text-[12px] text-[var(--pb-ink-55)]">I usually respond within 1–2 business days.</p>
              </div>
              <div
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md md:flex"
                style={{ background: 'linear-gradient(120deg, var(--pb-blue), #1c8fae)' }}
              >
                <Send className="h-4 w-4 text-white" />
              </div>
            </div>

            <AnimatePresence>
              {success && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-5 flex items-start gap-3 border border-emerald-200 bg-emerald-50 px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <p className="text-[13px] text-emerald-800">{success}</p>
                </motion.div>
              )}
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-5 flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  <p className="text-[13px] text-red-800">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} className={fieldClass} placeholder="Your full name" />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} className={fieldClass} placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>Company / Organization</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} className={fieldClass} placeholder="Your organization" />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={fieldClass} placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label className={labelClass}>Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} className={fieldClass} placeholder="Brief subject of your inquiry" />
              </div>

              <div>
                <label className={labelClass}>Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Please share details about your inquiry, project, or collaboration interest..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2.5 rounded-md px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50 md:w-auto"
                style={{ background: 'linear-gradient(120deg, var(--pb-blue), #1c8fae)' }}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </button>
            </form>
          </GlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="space-y-4">
          <GlassCard className="p-5">
            <div className="mb-3 flex items-center gap-2">
              <SignalDot accent="var(--pb-blue)" size={5} />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--pb-ink-35)]">Direct email</span>
            </div>
            <a href="mailto:contact@biaotech.dev" className="group flex items-center gap-2 text-[13px] font-bold text-[var(--pb-ink)] transition hover:text-[var(--pb-cyan)]">
              <Mail className="h-3.5 w-3.5" />
              contact@biaotech.dev
            </a>
          </GlassCard>

          <GlassCard className="p-5">
            <h3 className="text-[13px] font-bold text-[var(--pb-ink)]">Project collaboration</h3>
            <p className="mt-2 text-[12.5px] leading-[1.7] text-[var(--pb-ink-55)]">
              Cloud infrastructure, systems analysis and operational visibility for
              physical security and distributed device environments.
            </p>
          </GlassCard>

          <GlassCard className="p-5">
            <h3 className="flex items-center gap-2 text-[13px] font-bold text-[var(--pb-ink)]">
              <GraduationCap className="h-3.5 w-3.5 text-[var(--pb-violet)]" />
              Academic & research
            </h3>
            <p className="mt-2 text-[12.5px] leading-[1.7] text-[var(--pb-ink-55)]">
              Open to collaboration on research and publications related to cloud
              infrastructure, IoT reliability and observability.
            </p>
          </GlassCard>

          <GlassCard className="p-5">
            <h3 className="mb-3 text-[13px] font-bold text-[var(--pb-ink)]">Find me online</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/paulobiao"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5 text-[12.5px] font-semibold text-[var(--pb-ink-55)] transition hover:text-[var(--pb-cyan)]"
              >
                <Linkedin className="h-3.5 w-3.5 shrink-0 text-[var(--pb-ink-35)] transition group-hover:text-[var(--pb-cyan)]" />
                LinkedIn — /in/paulobiao
              </a>
              <a
                href="https://github.com/paulobiao"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5 text-[12.5px] font-semibold text-[var(--pb-ink-55)] transition hover:text-[var(--pb-ink)]"
              >
                <Github className="h-3.5 w-3.5 shrink-0 text-[var(--pb-ink-35)] transition group-hover:text-[var(--pb-ink)]" />
                GitHub — /paulobiao
              </a>
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-[10.5px] text-[var(--pb-ink-35)]">
              <SignalDot accent="#34d399" size={5} />
              Response time: within 2 business days
            </p>
          </GlassCard>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8"
      >
        <GlassCard className="p-6 md:p-8">
          <h2 className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--pb-ink-55)]">Technical foundation</h2>
          <dl className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {[
              { value: '15 Years', detail: 'Physical & electronic security systems · Brazil · 2005–2020', accent: 'var(--pb-blue)' },
              { value: 'Software + Cloud', detail: 'APIs, testing, CI/CD, AWS and infrastructure design', accent: 'var(--pb-cyan)' },
              { value: 'IEEE', detail: 'Internet of Things Journal · Peer reviewer', accent: 'var(--pb-violet)' },
            ].map((item) => (
              <div key={item.value} className="border-l-2 pl-4" style={{ borderColor: item.accent }}>
                <dt className="text-[17px] font-black tracking-[-0.02em] text-[var(--pb-ink)]">{item.value}</dt>
                <dd className="mt-1 text-[12.5px] leading-[1.6] text-[var(--pb-ink-55)]">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </GlassCard>
      </motion.div>
    </div>
  )
}
