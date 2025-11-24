import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Calendar, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'
import ViewPaperButton from '@/components/ui/view-paper-button'

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Academic publications and research contributions by Paulo Fernandes Biao.',
}

type Publication = {
  title: string
  journal: string
  platform: string
  year: string
  tag?: string
  authors: string
  abstract: string
  link?: string
  category: string
  doi?: string
  featured?: boolean
}

const publications: Publication[] = [
  // ========= DIO.me =========
  {
    title: 'SecureBank™: Base for the Next Generation of Financial Sector Security',
    journal: 'DIO.me – Technology Articles',
    platform: 'DIO.me',
    year: '2025',
    tag: 'Banking Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Technical article presenting the SecureBank™ framework as a foundational architecture to strengthen cybersecurity and regulatory compliance in modern financial institutions.',
    link: 'https://web.dio.me/articles/securebanktm-como-base-para-a-proxima-geracao-de-seguranca-no-setor-financeiro-329e8a3f84d9',
    category: 'Banking Security',
  },

  // ========= Zenodo (DOI) – principais frameworks =========
  {
    title:
      'SecureBank™: An Adaptive Zero Trust Cybersecurity Architecture for Modern Financial Infrastructures',
    journal: 'Zenodo – DOI 10.5281/zenodo.17666802',
    platform: 'Zenodo',
    year: '2025',
    tag: 'Banking Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Technical report published on Zenodo presenting SecureBank™, a next-generation Zero Trust cybersecurity architecture for modern financial infrastructures, integrating adaptive identity, contextual microsegmentation, encrypted east–west traffic, continuous verification, and automated incident response aligned with NIST CSF 2.0, ISO 27001, PCI-DSS and FFIEC.',
    link: 'https://doi.org/10.5281/zenodo.17666802',
    category: 'Banking Security',
    doi: 'https://doi.org/10.5281/zenodo.17666802',
    featured: true,
  },
  {
    title:
      'HealthGuard™: A Comprehensive Zero Trust Architecture for Healthcare Security',
    journal: 'Zenodo – DOI 10.5281/zenodo.17667022',
    platform: 'Zenodo',
    year: '2025',
    tag: 'Healthcare Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Technical report presenting HealthGuard™, a next-generation cybersecurity architecture for hospitals and healthcare infrastructures, integrating Zero Trust Healthcare, clinical interoperability, encrypted communications, IoMT protection, API hardening, microsegmentation, and operational resilience strategies.',
    link: 'https://doi.org/10.5281/zenodo.17667022',
    category: 'Healthcare Technology',
    doi: 'https://doi.org/10.5281/zenodo.17667022',
    featured: true,
  },
  {
    title:
      'PhysiDigital™: A Secure and Interoperable Digital Ecosystem for Telerehabilitation and Smart Physiotherapy',
    journal: 'Zenodo – DOI 10.5281/zenodo.17685536',
    platform: 'Zenodo',
    year: '2025',
    tag: 'Digital Transformation',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'PhysiDigital™ introduces a unified ecosystem integrating Zero Trust cybersecurity, operational risk management, IoT/OT protection, cloud-edge interoperability, and automated governance to support telerehabilitation workflows, physiotherapy devices, and hybrid clinical operations.',
    link: 'https://doi.org/10.5281/zenodo.17685536',
    category: 'Digital Transformation',
    doi: 'https://doi.org/10.5281/zenodo.17685536',
    featured: true,
  },

  // ========= OSF Preprints – MetaArXiv =========
  {
    title:
      'HealthGuard™: An Adaptive Zero Trust Cybersecurity and Clinical Interoperability Architecture for Modern Healthcare Systems',
    journal: 'OSF Preprints – MetaArXiv',
    platform: 'OSF Preprints – MetaArXiv',
    year: '2025',
    tag: 'Healthcare Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Technical report presenting HealthGuard™, a next-generation cybersecurity and clinical interoperability architecture for modern healthcare systems. The framework integrates Health Zero Trust, real-time clinical behavioral analytics, API/FHIR-based access control, IoMT risk segmentation, interoperability enforcement, and automated governance aligned with NIST CSF 2.0, Zero Trust maturity models, HIPAA, and FDA guidelines.',
    link: 'https://osf.io/preprints/metaarxiv/hxqwr_v1',
    category: 'Healthcare Security',
    doi: 'https://doi.org/10.5281/zenodo.17667022',
  },
  {
    title:
      'SecureBank™: An Adaptive Zero Trust Cybersecurity Architecture for Modern Financial Infrastructures',
    journal: 'OSF Preprints – MetaArXiv',
    platform: 'OSF Preprints – MetaArXiv',
    year: '2025',
    tag: 'Banking Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Technical report published on OSF presenting SecureBank™, a next-generation Zero Trust cybersecurity architecture for modern financial infrastructures, integrating adaptive identity, contextual microsegmentation, encrypted east-west traffic, continuous verification, and automated incident response aligned with NIST CSF 2.0, PCI-DSS, and FFIEC.',
    link: 'https://osf.io/preprints/metaarxiv/q3cma_v1',
    category: 'Banking Security',
    doi: 'https://doi.org/10.5281/zenodo.17666802',
  },
  {
    title:
      'PhysiDigital™: Bridging Physical and Digital Transformation Through Hybrid Integration Frameworks',
    journal: 'OSF Preprints – MetaArXiv',
    platform: 'OSF Preprints – MetaArXiv',
    year: '2025',
    tag: 'Digital Health',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Technical report published on OSF describing PhysiDigital™, a hybrid architecture connecting physical environments and digital ecosystems for healthcare, telerehabilitation, and clinical operations. The model integrates Zero Trust Healthcare, IoT/OT segmentation, automated governance, cloud interoperability, and secure physiotherapy workflows.',
    link: 'https://osf.io/preprints/metaarxiv/xgcfw_v1',
    category: 'Digital Transformation',
  },

  // ========= Academia.edu =========
  {
    title:
      'HealthGuard™: An Integrated Zero Trust Cybersecurity Framework for Healthcare Environments',
    journal: 'Academia.edu',
    platform: 'Academia.edu',
    year: '2025',
    tag: 'Healthcare Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Publication on Academia.edu presenting HealthGuard™ as an integrated Zero Trust cybersecurity framework for healthcare environments, addressing clinical data protection, interoperability, and operational resilience.',
    link: 'https://www.academia.edu/145108865/HealthGuard_An_Integrated_Zero_Trust_Cybersecurity_Framework_for_Healthcare_Environments',
    category: 'Healthcare Security',
  },
  {
    title:
      'SecureBank™: A Zero Trust, Adaptive Intelligence and Operational Resilience Architecture for Financial Infrastructures',
    journal: 'Academia.edu',
    platform: 'Academia.edu',
    year: '2025',
    tag: 'Banking Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Publication on Academia.edu detailing SecureBank™, a Zero Trust, adaptive intelligence and operational resilience architecture for financial infrastructures, focusing on fraud reduction and regulatory compliance.',
    link: 'https://www.academia.edu/145108790/SecureBank_A_Zero_Trust_Adaptive_Intelligence_and_Operational_Resilience_Architecture_for_Financial_Infrastructures',
    category: 'Banking Security',
  },
  {
    title:
      'PhysiDigital™: A Secure and Interoperable Digital Ecosystem for Telerehabilitation and Smart Physiotherapy',
    journal: 'Academia.edu',
    platform: 'Academia.edu',
    year: '2025',
    tag: 'Digital Health',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Publication on Academia.edu presenting PhysiDigital™ as a secure and interoperable ecosystem for telerehabilitation and smart physiotherapy, connecting devices, platforms, and clinical workflows.',
    link: 'https://www.academia.edu/145108207/PhysiDigital_A_Secure_and_Interoperable_Digital_Ecosystem_for_Telerehabilitation_and_Smart_Physiotherapy',
    category: 'Digital Transformation',
  },

  // ========= Journals & Legacy =========
  {
    title: 'Innovative Security Architectures for Modern Financial Systems',
    journal: 'Cybersecurity and Banking Review',
    platform: 'Journals & Legacy',
    year: '2022',
    abstract:
      'Comprehensive analysis of security architectures and their implementation in contemporary financial technology infrastructure.',
    authors: 'Paulo Fernandes Biao, et al.',
    category: 'Banking Security',
  },
]

// util simples para agrupar por plataforma
function groupByPlatform(items: Publication[]) {
  return items.reduce<Record<string, Publication[]>>((acc, pub) => {
    const key = pub.platform || 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(pub)
    return acc
  }, {})
}

export default function PublicationsPage() {
  const featuredPublications = publications.filter((p) => p.featured)
  const nonFeaturedPublications = publications.filter((p) => !p.featured)
  const grouped = groupByPlatform(nonFeaturedPublications)

  // ordena plataformas em uma ordem lógica
  const platformOrder = ['Zenodo', 'OSF Preprints – MetaArXiv', 'Academia.edu', 'DIO.me', 'Journals & Legacy']

  const sortedPlatforms = Object.keys(grouped).sort((a, b) => {
    const ia = platformOrder.indexOf(a)
    const ib = platformOrder.indexOf(b)
    if (ia === -1 && ib === -1) return a.localeCompare(b)
    if (ia === -1) return 1
    if (ib === -1) return -1
    return ia - ib
  })

  return (
    <div className="min-h-screen py-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://static.abacusaicdn.net/images/83481894-5f72-4d65-bbe0-f8161791c369.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Publications & Research
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic contributions and research publications in banking security, healthcare technology, and digital transformation.
          </p>
        </AnimatedSection>

        {/* Featured */}
        {featuredPublications.length > 0 && (
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Featured DOI Publications
            </h2>
            <p className="text-gray-600 mb-6">
              The core frameworks developed by Paulo Fernandes Biao, indexed with DOIs and focused on critical infrastructures in banking, healthcare, and digital health.
            </p>

            <div className="space-y-6">
              {featuredPublications.map((publication, index) => (
                <div
                  key={`featured-${index}`}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        {publication.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-blue-600 font-medium">
                          {publication.journal}
                        </span>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          {publication.year}
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {publication.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-4 lg:mt-0">
                      <ViewPaperButton title={publication.title} link={publication.link} />
                    </div>
                  </div>

                  <p className="text-gray-700 mb-2 leading-relaxed">
                    <strong>Authors:</strong> {publication.authors}
                  </p>

                  {publication.doi && (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>DOI:</strong>{' '}
                      <a
                        href={publication.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {publication.doi}
                      </a>
                    </p>
                  )}

                  <p className="text-gray-700 leading-relaxed">
                    <strong>Abstract:</strong> {publication.abstract}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Seções por plataforma */}
        <div className="space-y-10">
          {sortedPlatforms.map((platform) => {
            const list = grouped[platform]
            if (!list || list.length === 0) return null

            return (
              <AnimatedSection key={platform}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {platform}
                </h2>
                <div className="space-y-6">
                  {list.map((publication, index) => (
                    <div
                      key={`${platform}-${index}`}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                            {publication.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="text-blue-600 font-medium">
                              {publication.journal}
                            </span>
                            <div className="flex items-center text-gray-600">
                              <Calendar className="h-4 w-4 mr-1" />
                              {publication.year}
                            </div>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {publication.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 mt-4 lg:mt-0">
                          <ViewPaperButton title={publication.title} link={publication.link} />
                        </div>
                      </div>

                      <p className="text-gray-700 mb-2 leading-relaxed">
                        <strong>Authors:</strong> {publication.authors}
                      </p>

                      {publication.doi && (
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          <strong>DOI:</strong>{' '}
                          <a
                            href={publication.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            {publication.doi}
                          </a>
                        </p>
                      )}

                      <p className="text-gray-700 leading-relaxed">
                        <strong>Abstract:</strong> {publication.abstract}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Research Areas */}
        <AnimatedSection className="mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Research Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Banking Security
                </h3>
                <p className="text-gray-600">
                  Advanced security frameworks and methodologies for financial institutions.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Healthcare Technology
                </h3>
                <p className="text-gray-600">
                  Protection systems and data security solutions for healthcare organizations.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digital Transformation
                </h3>
                <p className="text-gray-600">
                  Innovative methodologies for enterprise digital transformation initiatives.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Collaborate on Research</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Interested in collaborating on research or learning more about these publications?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
            >
              Get in Touch
              <ExternalLink className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
