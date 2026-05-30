import Hero from '@/components/sections/hero'
import FeaturedFrameworks from '@/components/sections/featured-frameworks'
import AboutPreview from '@/components/sections/about-preview'
import CredentialsPreview from '@/components/sections/credentials-preview'
import ContactCTA from '@/components/sections/contact-cta'
import CertificationsSection from '@/components/sections/CertificationsSection'
import PublicationsSection from '@/components/sections/PublicationsSection'
import LiveProjects from '@/components/sections/live-projects'
import LiveInfrastructure from '@/components/sections/live-infrastructure'
import CurrentlyBuilding from '@/components/sections/currently-building'
import CredentialsStrip from '@/components/sections/credentials-strip'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CurrentlyBuilding />
      <LiveInfrastructure />
      <CredentialsStrip />
      <FeaturedFrameworks />
      <LiveProjects />
      <AboutPreview />

      <PublicationsSection />

      <CredentialsPreview />
      <CertificationsSection />
      <ContactCTA />
    </div>
  )
}
