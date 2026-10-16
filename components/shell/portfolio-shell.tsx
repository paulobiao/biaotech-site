import type { ReactNode } from 'react'
import SpaceBackground from '@/components/shell/space-background'
import IdentityPanel from '@/components/shell/identity-panel'
import MobileHeader from '@/components/shell/mobile-header'

export default function PortfolioShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SpaceBackground />
      <IdentityPanel />
      <MobileHeader />
      <main className="relative min-h-screen pt-16 lg:pl-72 lg:pt-0">{children}</main>
    </>
  )
}
