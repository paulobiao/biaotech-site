import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Paulo Fernandes Bião — cybersecurity engineer open to US opportunities in banking security, cloud infrastructure, and IoT security.',
  openGraph: {
    title: 'Contact — Paulo Fernandes Bião',
    description:
      'Reach out for cybersecurity consulting, framework implementation, research collaboration, or US employment opportunities.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
