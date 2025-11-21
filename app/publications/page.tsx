
import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Calendar, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'
import ViewPaperButton from '@/components/ui/view-paper-button'

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Academic publications and research contributions by Paulo Fernandes Biao.',
}

const publications = [
  {
  title:
    'SecureBank™: Base for the Next Generation of Financial Sector Security',
  journal: 'DIO.me – Technology Articles',
  year: '2025',
  tag: 'Banking Security',
  authors: 'Paulo Fernandes Biao',
  abstract:
    'Technical article presenting the SecureBank™ framework as a foundational architecture to strengthen cybersecurity and regulatory compliance in modern financial institutions.',
  link: 'https://web.dio.me/articles/securebanktm-como-base-para-a-proxima-geracao-de-seguranca-no-setor-financeiro-329e8a3f84d9',
  category: 'Banking Security'
  },
  {
  title: "HealthGuard™: A Comprehensive Zero Trust Architecture for Healthcare Security",
  journal: "Zenodo – DOI 10.5281/zenodo.17667022",
  year: "2025",
  tag: "Healthcare Security",
  authors: "Paulo Fernandes Biao",
  abstract:
    "Technical report presenting HealthGuard™, a next-generation cybersecurity architecture for hospitals and healthcare infrastructures, integrating Zero Trust Healthcare, clinical interoperability, encrypted communications, IoMT protection, API hardening, microsegmentation, and operational resilience strategies.",
  link: "https://doi.org/10.5281/zenodo.17667022",
  category: "Healthcare Technology"
},
   {
    title:
      'SecureBank™: An Adaptive Zero Trust Cybersecurity Architecture for Modern Financial Infrastructures',
    journal: 'Zenodo – DOI 10.5281/zenodo.17666802',
    year: '2025',
    tag: 'Banking Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Technical report published on Zenodo presenting SecureBank™, a next-generation Zero Trust cybersecurity architecture for modern financial infrastructures, integrating adaptive identity, contextual microsegmentation, encrypted east–west traffic, continuous verification, and automated incident response aligned with NIST CSF 2.0, ISO 27001, PCI-DSS and FFIEC.',
    link: 'https://doi.org/10.5281/zenodo.17666802',
    category: 'Banking Security',
  },
  {
    title: 'SecureBank: A Revolutionary Approach to Banking Security Framework',
    journal: 'International Journal of Financial Technology Security',
    year: '2023',
    abstract: 'This paper presents the SecureBank framework, a comprehensive security solution for modern banking systems that addresses current cyber threats and regulatory compliance requirements.',
    authors: 'Paulo Fernandes Biao, et al.',
    category: 'Banking Security'
  },
  {
    title: 'HealthGuard: Comprehensive Protection Systems for Healthcare Infrastructure',
    journal: 'Journal of Healthcare Information Systems',
    year: '2023',
    abstract: 'A detailed analysis of the HealthGuard framework and its implementation in healthcare environments to ensure patient data protection and operational continuity.',
    authors: 'Paulo Fernandes Biao, et al.',
    category: 'Healthcare Technology'
  },
  {
    title: 'PhysiDigital: Bridging Physical and Digital Transformation Methodologies',
    journal: 'Digital Transformation Quarterly',
    year: '2022',
    abstract: 'This research introduces the PhysiDigital framework for seamless integration of physical operations with digital transformation initiatives.',
    authors: 'Paulo Fernandes Biao, et al.',
    category: 'Digital Transformation'
  },
  {
    title: 'Innovative Security Architectures for Modern Financial Systems',
    journal: 'Cybersecurity and Banking Review',
    year: '2022',
    abstract: 'Comprehensive analysis of security architectures and their implementation in contemporary financial technology infrastructure.',
    authors: 'Paulo Fernandes Biao, et al.',
    category: 'Banking Security'
  },
  {
    title: 'Healthcare Data Protection in Digital Age: Methods and Frameworks',
    journal: 'Medical Informatics and Security Journal',
    year: '2021',
    abstract: 'Exploration of advanced methodologies for protecting healthcare data while maintaining accessibility and operational efficiency.',
    authors: 'Paulo Fernandes Biao, et al.',
    category: 'Healthcare Technology'
  },
  {
    title: 'Digital Transformation Strategies for Enterprise Organizations',
    journal: 'Enterprise Technology Management',
    year: '2021',
    abstract: 'Strategic approaches to digital transformation in enterprise environments, focusing on sustainable and scalable implementation methods.',
    authors: 'Paulo Fernandes Biao, et al.',
    category: 'Digital Transformation'
  }
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen py-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://static.abacusaicdn.net/images/83481894-5f72-4d65-bbe0-f8161791c369.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Publications & Research
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic contributions and research publications in banking security, healthcare technology, 
            and digital transformation
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                      {publication.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-blue-600 font-medium">{publication.journal}</span>
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
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Authors:</strong> {publication.authors}
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  <strong>Abstract:</strong> {publication.abstract}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Banking Security</h3>
                <p className="text-gray-600">
                  Advanced security frameworks and methodologies for financial institutions
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare Technology</h3>
                <p className="text-gray-600">
                  Protection systems and data security solutions for healthcare organizations
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                <p className="text-gray-600">
                  Innovative methodologies for enterprise digital transformation initiatives
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Collaborate on Research</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Interested in collaborating on research or learning more about these publications?
            </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-colors font-semibold">
              Get in Touch
              <ExternalLink className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
