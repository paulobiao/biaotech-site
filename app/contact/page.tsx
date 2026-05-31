'use client'

import { useState, useEffect } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import {
  Mail,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Send,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type FormData = {
  name: string
  email: string
  company?: string
  phone?: string
  subject?: string
  message: string
}

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

  // clears messages after a few seconds
  useEffect(() => {
    if (!success && !error) return
    const timer = setTimeout(() => {
      setSuccess(null)
      setError(null)
    }, 5000)
    return () => clearTimeout(timer)
  }, [success, error])

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
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

      setSuccess('Message sent successfully! I will get back to you soon.')
      setForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      setError('Could not send your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-20 pb-12">
      <div className="container mx-auto px-4 max-w-[900px]">
        {/* HEADER */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            Contact
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
            If you&apos;re interested in implementing frameworks, exploring
            collaborations, or discussing security and digital transformation
            projects, feel free to reach out using the form below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 items-start">
          {/* FORM */}
          <motion.div
            className="bg-slate-900/70 border border-slate-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6 md:p-8 backdrop-blur"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-1">
                  Send a Message
                </h2>
                <p className="text-sm text-slate-400">
                  I usually respond within 1–2 business days.
                </p>
              </div>
              <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/90">
                <Send className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Feedback de sucesso/erro */}
            <AnimatePresence>
              {success && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-4 flex items-start gap-3 rounded-xl border border-emerald-700/60 bg-emerald-900/40 px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <p className="text-sm text-emerald-100">{success}</p>
                </motion.div>
              )}

              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-4 flex items-start gap-3 rounded-xl border border-red-700/60 bg-red-900/40 px-4 py-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-300 mt-0.5" />
                  <p className="text-sm text-red-100">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Company + Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please share details about your inquiry, project, or collaboration interest..."
                />
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* INFO LATERAL */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Email direto */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Email Communication
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Prefer to write directly? You can also reach me via email:
              </p>
              <div className="inline-flex items-center rounded-full bg-slate-800/70 px-3 py-2">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <a
                  href="mailto:contact@biaotech.dev"
                  className="text-sm text-blue-300 hover:text-blue-200"
                >
                  contact@biaotech.dev
                </a>
              </div>
            </div>

            {/* Project Collaboration */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Project Collaboration
              </h3>
              <p className="text-sm text-slate-300">
                Security architectures, framework implementation, and digital
                transformation initiatives for banking, healthcare, and critical
                enterprise environments.
              </p>
            </div>

            {/* Academic / Research */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Academic & Research
              </h3>
              <p className="text-sm text-slate-300 flex items-start">
                <GraduationCap className="h-4 w-4 text-blue-400 mr-2 mt-0.5" />
                Collaboration on research, publications, and speaking
                engagements related to security frameworks, critical
                infrastructure, and digital transformation.
              </p>
            </div>

            {/* Social / Connect */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Find Me Online</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/paulobiao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-300 hover:bg-blue-600/20 hover:text-blue-200 transition-all text-sm font-medium"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn — /in/paulobiao
                </a>
                <a
                  href="https://github.com/paulobiao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-700/40 border border-slate-600/40 text-slate-300 hover:bg-slate-700/70 hover:text-white transition-all text-sm font-medium"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  GitHub — /paulobiao
                </a>
                <a
                  href="https://devpost.com/paulo86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-300 hover:bg-orange-500/20 hover:text-orange-200 transition-all text-sm font-medium"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 16.526l-3.801-6.131 3.801-6.13h8.81l3.8 6.13-3.8 6.131z"/></svg>
                  Devpost — /paulo86
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-500 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Response time: within 2 business days
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why work with me */}
        <motion.div
          className="mt-12 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-white mb-5">Why work with me?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="text-slate-300">8+ years securing critical infrastructure in banking, healthcare, and cloud environments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
              <span className="text-slate-300">Production API live on AWS — not just portfolio code, but running infrastructure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="text-slate-300">Open to remote US roles immediately — authorized to work, no visa sponsorship required</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}