import Hero from '@/components/sections/hero'
import AboutPreview from '@/components/sections/about-preview'
import ContactCTA from '@/components/sections/contact-cta'
import CertificationsSection from '@/components/sections/CertificationsSection'
import LiveProjects from '@/components/sections/live-projects'
import LiveInfrastructure from '@/components/sections/live-infrastructure'
import CurrentlyBuilding from '@/components/sections/currently-building'
import CredentialsStrip from '@/components/sections/credentials-strip'
import Hackathons from '@/components/sections/hackathons'
import Psop from '@/components/sections/psop'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CurrentlyBuilding />
      <LiveInfrastructure />
      <CredentialsStrip />
      <Hackathons />
      <Psop />
      <LiveProjects />
      <AboutPreview />
      <CertificationsSection />
      <ContactCTA />
    </div>
  )
}