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

  // limpa mensagens após alguns segundos
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
        throw new Error('Erro ao enviar mensagem')
      }

      setSuccess('Mensagem enviada com sucesso! Vou retornar em breve.')
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
      setError('Não foi possível enviar sua mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
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

              {/* Botão */}
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
                  href="mailto:paulobiaousa@gmail.com"
                  className="text-sm text-blue-300 hover:text-blue-200"
                >
                  paulobiaousa@gmail.com
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}
