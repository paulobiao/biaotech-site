import Hero from '@/components/sections/hero'
import FeaturedFrameworks from '@/components/sections/featured-frameworks'
import AboutPreview from '@/components/sections/about-preview'
import CredentialsPreview from '@/components/sections/credentials-preview'
import ContactCTA from '@/components/sections/contact-cta'
import CertificationsSection from '@/components/sections/CertificationsSection'
import PublicationsSection from '@/components/sections/PublicationsSection'


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedFrameworks />
      <AboutPreview />

      {/* 🔵 New Publications Section */}
      <PublicationsSection />

      <CredentialsPreview />
      <CertificationsSection />
      <ContactCTA />
    </div>
  )
}
