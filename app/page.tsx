import Hero from '@/components/sections/hero'
import FeaturedFrameworks from '@/components/sections/featured-frameworks'
import AboutPreview from '@/components/sections/about-preview'
import CredentialsPreview from '@/components/sections/credentials-preview'
import ContactCTA from '@/components/sections/contact-cta'
import CertificationsSection from '@/components/sections/CertificationsSection'

// dentro do JSX:
// <CertificationsSection />


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedFrameworks />
      <AboutPreview />
      <CredentialsPreview />
      <ContactCTA />
    </div>
  )
}
