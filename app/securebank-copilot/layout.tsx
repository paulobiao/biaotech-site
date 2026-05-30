import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SecureBank Copilot — AI-Powered Banking Security',
  description:
    'SecureBank Copilot translates cybersecurity incidents into financial and regulatory impact using Gemini AI — giving banking executives decision-ready intelligence before damage occurs.',
  openGraph: {
    title: 'SecureBank Copilot — AI-Powered Banking Security Decision System',
    description:
      'From cyber alerts to board-ready financial decisions in minutes. Built on the SecureBank™ framework with Gemini AI.',
  },
}

export default function SecureBankCopilotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
