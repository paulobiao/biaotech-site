'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function PeerReviewForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      area: (form.elements.namedItem('area') as HTMLSelectElement).value,
      details: (form.elements.namedItem('details') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/peer-review-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="mt-10 md:mt-14">
      <div className="max-w-3xl rounded-2xl border border-slate-800 bg-slate-950/60 p-6 md:p-8 shadow-lg shadow-cyan-500/10">
        <h3 className="text-xl font-semibold text-slate-50 mb-2">
          Request a Peer Review or Technical Evaluation
        </h3>
        <p className="text-sm text-slate-300 mb-6">
          Use the form below to briefly describe your request. You will receive a direct
          reply from Paulo with availability, scope and next steps.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm text-slate-200 mb-1">
                Name <span className="text-cyan-400">*</span>
              </label>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-200 mb-1">
                Organization / Institution
              </label>
              <input
                name="organization"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-200 mb-1">
              E-mail <span className="text-cyan-400">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-200 mb-1">
              Main area of interest
            </label>
            <select
              name="area"
              className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
            >
              <option value="">Select an option</option>
              <option>Financial Sector Cybersecurity / SecureBank™</option>
              <option>Healthcare Security / HealthGuard™</option>
              <option>Digital Transformation / PhysiDigital™</option>
              <option>Zero Trust & Critical Infrastructure</option>
              <option>Other (describe below)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-200 mb-1">
              Short description of what you need reviewed
            </label>
            <textarea
              name="details"
              rows={4}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400"
              placeholder="Example: research paper on Zero Trust in banking, award submission draft, architecture for Open Finance APIs..."
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <Button
              type="submit"
              disabled={status === 'sending'}
              className={cn(
                'inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold',
                status === 'sending' && 'opacity-80 cursor-wait'
              )}
            >
              <Send className="w-4 h-4" />
              {status === 'sending' ? 'Sending...' : 'Submit Request'}
            </Button>

            {status === 'success' && (
              <p className="text-xs text-emerald-400">
                Request sent successfully. You will receive a reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-xs text-rose-400">
                There was an error sending your request. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
