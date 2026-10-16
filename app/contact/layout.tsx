import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Paulo Biao, Systems & Cloud Analyst — cloud infrastructure, systems analysis and operational observability.',
  openGraph: {
    title: 'Contact — Paulo Biao',
    description: 'Reach out about cloud infrastructure, systems analysis or operational observability work.',
    url: 'https://biaotech.dev/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Paulo Biao' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Paulo Biao',
    description: 'Systems & Cloud Analyst — cloud infrastructure, systems analysis and operational observability.',
    images: ['/og-image.png'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
