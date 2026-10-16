'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import GlassCard from '@/components/ui/glass-card'

export type Credential = {
  id: string
  title: string
  subtitle: string
  image: string
  alt: string
  pdfUrl?: string
  verifyUrl?: string
  credentialId?: string
}

export default function CredentialCard({ item, index = 0 }: { item: Credential; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="h-full"
    >
      <GlassCard className="flex h-full flex-col p-5">
        <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-md bg-white/5">
          <Image src={item.image} alt={item.alt} fill sizes="280px" className="object-contain p-3" />
        </div>

        <h3 className="text-[13.5px] font-bold text-[var(--pb-ink)]">{item.title}</h3>
        <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--pb-ink-35)]">
          {item.subtitle}
        </p>
        {item.credentialId && (
          <p className="mt-1.5 font-mono text-[8.5px] text-[var(--pb-ink-35)]">ID: {item.credentialId}</p>
        )}

        {(item.pdfUrl || item.verifyUrl) && (
          <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--pb-border)] pt-3.5">
            {item.pdfUrl && (
              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-[var(--pb-ink-55)] transition hover:text-[var(--pb-cyan)]"
              >
                <ExternalLink className="h-3 w-3" />
                Certificate
              </a>
            )}
            {item.verifyUrl && (
              <a
                href={item.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-[var(--pb-ink-55)] transition hover:text-[var(--pb-cyan)]"
              >
                <ExternalLink className="h-3 w-3" />
                Verify
              </a>
            )}
          </div>
        )}
      </GlassCard>
    </motion.div>
  )
}
