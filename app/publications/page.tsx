import type { Metadata } from 'next'
import PublicationsClient from '@/app/publications/publications-client'

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Academic publications, technical whitepapers, and media features by Paulo Fernandes Biao in cybersecurity, banking security, healthcare technology, and digital transformation.',
}

export default function PublicationsPage() {
  return <PublicationsClient />
}

