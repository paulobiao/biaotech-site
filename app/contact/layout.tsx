import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Paulo Fernandes Bião — cybersecurity engineer open to US opportunities in banking security, cloud infrastructure, and IoT security.',
  openGraph: {
    title: 'Contact — Paulo Fernandes Bião',
    description:
      'Reach out for cybersecurity consulting, framework implementation, research collaboration, or US employment opportunities.',
    url: 'https://biaotech.dev/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Paulo Fernandes Bião' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Paulo Fernandes Bião',
    description: 'Available for remote cloud & security roles. Reach out for consulting, collaboration, or US employment opportunities.',
    images: ['https://www.biaotech.dev/og-image.png'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
