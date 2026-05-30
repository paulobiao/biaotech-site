
'use client'

import Link from 'next/link'
import { BookOpen, ShieldCheck, Trophy, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

const credentials = [
  {
    category: 'Recent Publications',
    items: [
      'SecureBank™: Revolutionary Banking Security Framework (2023)',
      'HealthGuard™: Healthcare Protection Systems (2023)',
      'PhysiDigital™: Digital Transformation Methodologies (2022)'
    ],
    icon: BookOpen,
    color: 'blue',
    link: '/publications'
  },
  {
    category: 'Credentials & Affiliations',
    items: [
      'IEEE IoT Journal — Invited Peer Reviewer since Feb 2026',
      'OWASP ASVS — Active Contributor',
      'ISC2 Certified in Cybersecurity (CC)'
    ],
    icon: ShieldCheck,
    color: 'blue',
    link: '/about'
  },
  {
    category: 'Research & Competitions',
    items: [
      '3 original frameworks with DOI on Zenodo & Figshare',
      '4 projects submitted to global competitions on Devpost',
      '10+ peer-reviewed publications'
    ],
    icon: Trophy,
    color: 'green',
    link: '/publications'
  }
]

export default function CredentialsPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic achievements, professional recognition, and industry contributions
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => (
            <AnimatedSection key={credential.category} delay={index * 0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className={`h-12 w-12 bg-${credential.color}-100 rounded-full flex items-center justify-center mr-4`}>
                    <credential.icon className={`h-6 w-6 text-${credential.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{credential.category}</h3>
                </div>

                <div className="space-y-3 mb-8">
                  {credential.items.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`h-2 w-2 bg-${credential.color}-600 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={credential.link}
                  className={`inline-flex items-center text-${credential.color}-600 hover:text-${credential.color}-800 font-medium group`}
                >
                  View Details
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
