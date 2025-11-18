'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BadgeCheck, X } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

type Certification = {
  id: string
  title: string
  subtitle: string
  image: string
  alt: string
}

const certifications: Certification[] = [
  {
    id: 'isc2-cc',
    title: 'ISC2 – Certified in Cybersecurity (CC)',
    subtitle: 'Cybersecurity Fundamentals',
    image: '/certifications/isc2-cc.png',
    alt: 'ISC2 Certified in Cybersecurity (CC) certificate',
  },
  {
    id: 'scrum-csm',
    title: 'Scrum Alliance – Certified Scrum Master (CSM)',
    subtitle: 'Agile Delivery & Team Leadership',
    image: '/certifications/scrum-master-csm.png',
    alt: 'Scrum Alliance Certified Scrum Master (CSM) certificate',
  },
  {
    id: 'oci-foundations',
    title: 'Oracle Cloud Infrastructure 2024 Foundations',
    subtitle: 'Cloud Architecture & Services',
    image: '/certifications/oci-foundations.png',
    alt: 'Oracle Cloud Infrastructure 2024 Foundations certificate',
  },
  {
    id: 'oci-data-foundations',
    title: 'Oracle Cloud Infrastructure 2024 Data Foundations',
    subtitle: 'Data Management in the Cloud',
    image: '/certifications/oci-data-foundations.png',
    alt: 'Oracle Cloud Infrastructure 2024 Data Foundations certificate',
  },
]

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  // 🔥 Fecha o modal com ESC
  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedCert(null)
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <section className="py-4">
      <AnimatedSection>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <BadgeCheck className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Certifications & Specializations
            </h2>
          </div>

          <p className="text-gray-700 mb-8 max-w-3xl">
            These certifications reinforce Paulo&apos;s practical expertise in cybersecurity,
            agile delivery, and cloud infrastructure.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="bg-gray-50 rounded-xl p-4 shadow-sm flex flex-col items-center text-center hover:shadow-md transition cursor-pointer"
              >
                <div className="relative w-24 h-24 mb-3">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{cert.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{cert.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Modal de zoom */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full bg-black/60 text-white p-1.5 hover:bg-black/80 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative w-full aspect-[4/3]">
              <Image
                src={selectedCert.image}
                alt={selectedCert.alt}
                fill
                className="object-contain rounded-xl"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {selectedCert.title}
              </h3>
              <p className="text-sm text-gray-600">{selectedCert.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
