'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BadgeCheck, X, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

type Certification = {
  id: string
  title: string
  subtitle: string
  image: string
  alt: string
  pdfUrl?: string
  verifyUrl?: string
  credentialId?: string
}

const certifications: Certification[] = [
  // 🔹 Fortinet
  {
    id: 'fortinet-fca',
    title: 'Fortinet Certified Associate in Cybersecurity (FCA)',
    subtitle: 'Fortinet Training Institute • Cybersecurity',
    image: '/certifications/fortinet-fca.png',
    alt: 'Fortinet Certified Associate in Cybersecurity (FCA) certificate',
    pdfUrl: '/certificates/fortinet-fca.pdf',
    verifyUrl:
      'https://training.fortinet.com/local/cert/my/certificate.php?badge=85',
    credentialId: '3659948882PB',
  },
  {
    id: 'fortinet-fcf',
    title: 'Fortinet Certified Fundamentals in Cybersecurity (FCF)',
    subtitle: 'Fortinet Training Institute • Cybersecurity',
    image: '/certifications/fortinet-fcf.png',
    alt: 'Fortinet Certified Fundamentals in Cybersecurity (FCF) certificate',
    pdfUrl: '/certificates/fortinet-fcf.pdf',
    verifyUrl:
      'https://training.fortinet.com/local/cert/my/certificate.php?badge=84',
    credentialId: '2612923193PB',
  },

  // 🔹 ISC2
  {
    id: 'isc2-cc',
    title: 'ISC2 – Certified in Cybersecurity (CC)',
    subtitle: 'ISC2 • Cybersecurity Fundamentals',
    image: '/certifications/isc2-cc.png',
    alt: 'ISC2 Certified in Cybersecurity (CC) certificate',
    pdfUrl: '/certificates/isc2-cc.pdf',
    verifyUrl:
      'https://isc2.obrizum.io/org/cc/certificate/488aa94a-29ce-4ccd-b060-ebb49c4c3ef8',
    credentialId: '82f7d5ae-7051-420d-b6c8-4d5d465686cd',
  },

  // 🔹 Scrum
  {
    id: 'scrum-csm',
    title: 'Certified ScrumMaster® (CSM)',
    subtitle: 'Scrum Alliance • Agile Delivery',
    image: '/certifications/scrum-master-csm.png',
    alt: 'Scrum Alliance Certified Scrum Master (CSM) certificate',
    pdfUrl: '/certificates/scrum-csm.pdf',
    credentialId: '001692248',
  },

  // 🔹 Oracle OCI
  {
    id: 'oci-foundations',
    title: 'Oracle Cloud Infrastructure 2024 – Foundations Associate',
    subtitle: 'Oracle University • Cloud',
    image: '/certifications/oci-foundations.png',
    alt: 'Oracle Cloud Infrastructure 2024 Foundations certificate',
    pdfUrl: '/certificates/oci-foundations.pdf',
    credentialId: '314009349OCI2024FNDCFA',
  },
  {
    id: 'oci-data-foundations',
    title: 'Oracle Cloud Infrastructure 2024 – Data Foundations Associate',
    subtitle: 'Oracle University • Cloud Data',
    image: '/certifications/oci-data-foundations.png',
    alt: 'Oracle Cloud Infrastructure 2024 Data Foundations certificate',
    pdfUrl: '/certificates/oci-data-foundations.pdf',
    credentialId: '314009349OCI2024DCFA',
  },

  // 🔹 Cisco
  {
    id: 'cisco-intro-cyber',
    title: 'Cisco Networking Academy – Introduction to Cybersecurity',
    subtitle: 'Cisco Networking Academy • Cybersecurity',
    image: '/certifications/cisco-intro-cyber.png',
    alt: 'Cisco Introduction to Cybersecurity certificate',
    pdfUrl: '/certificates/cisco-intro-cyber.pdf',
  },

  // 🔹 IBM
  {
    id: 'ibm-cyber-fundamentals',
    title: 'IBM SkillsBuild – Cybersecurity Fundamentals',
    subtitle: 'IBM SkillsBuild • Cybersecurity',
    image: '/certifications/ibm-cyber-fundamentals.png',
    alt: 'IBM Cybersecurity Fundamentals certificate',
    pdfUrl: '/certificates/ibm-cyber-fundamentals.pdf',
    // se tiver o link do badge, coloca aqui:
    // verifyUrl: 'https://www.credly.com/...'
  },
]

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  // Fecha modal com ESC
  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelectedCert(null)
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
              Professional Certifications
            </h2>
          </div>

          <p className="text-gray-700 mb-8 max-w-3xl">
            These industry-recognized certifications validate Paulo&apos;s
            competencies in cybersecurity, cloud infrastructure, and agile
            delivery.
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
                <h3 className="text-sm font-semibold text-gray-900">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{cert.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Modal */}
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
              aria-label="Close certification preview"
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

            <div className="mt-4 text-center space-y-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {selectedCert.title}
              </h3>
              <p className="text-sm text-gray-600">{selectedCert.subtitle}</p>

              {selectedCert.credentialId && (
                <p className="text-xs text-gray-500">
                  Credential ID: {selectedCert.credentialId}
                </p>
              )}

              <div className="mt-3 flex justify-center gap-3">
                {selectedCert.pdfUrl && (
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Open PDF
                  </a>
                )}

                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Verify credential
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
