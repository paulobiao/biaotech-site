import type { Metadata } from 'next'
import PublicationsClient from '@/app/publications/publications-client'

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Academic publications, technical whitepapers, and media features by Paulo Fernandes Bião in cybersecurity, banking security, healthcare technology, and digital transformation.',
  openGraph: {
    title: 'Publications — Paulo Fernandes Bião',
    description:
      'Academic papers, technical whitepapers, and media features on cybersecurity, banking security, healthcare technology, and digital transformation.',
    url: 'https://biaotech.dev/publications',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Publications by Paulo Fernandes Bião' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publications — Paulo Fernandes Bião',
    description: 'Academic papers, whitepapers, and media features on cybersecurity, banking security, and digital transformation.',
    images: ['https://www.biaotech.dev/og-image.png'],
  },
}

export default function PublicationsPage() {
  return <PublicationsClient />
}

