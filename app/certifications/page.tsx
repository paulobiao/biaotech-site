import type { Metadata } from 'next'
import SectionHeader from '@/components/section-header'
import CredentialCard from '@/components/credential-card'
import { credentials } from '@/lib/credentials-data'

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Verified certifications in cybersecurity, cloud infrastructure and agile delivery — Paulo Biao.',
}

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
      <SectionHeader
        kicker="Verified Credentials"
        title="Certifications"
        description="Vendor and industry certifications supporting the cloud, security and delivery work in this portfolio."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {credentials.map((item, i) => (
          <CredentialCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}
