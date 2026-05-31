'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Calendar, ExternalLink, Quote } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'
import ViewPaperButton from '@/components/ui/view-paper-button'
import { CitationModal } from '@/components/ui/citation-modal'

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
  peerReviewed?: boolean
  doiIndexed?: boolean
  academicPublished?: boolean

  // ✅ NEW
  isScientificArticle?: boolean
  publicationType?: string

  // ✅ NEW (ordering)
  priority?: number
}

const publications: Publication[] = [
  // ✅ SCIENTIFIC ARTICLE (TOP) — arXiv (HIGHEST)
  {
    title: 'SecureBank: A Financially-Aware Zero Trust Architecture for High-Assurance Banking Systems',
    journal: 'arXiv – Preprint',
    platform: 'arXiv',
    year: '2025',
    tag: 'arXiv Preprint',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Financial institutions increasingly rely on distributed architectures, open banking APIs, cloud native infrastructures, and high frequency digital transactions. These transformations expand the attack surface and expose limitations in traditional perimeter based security models. While Zero Trust architectures provide essential security principles, most existing frameworks do not explicitly incorporate transactional semantics, financial risk modeling, adaptive identity trust, or automation weighted by economic impact.\n\nThis paper introduces SecureBank, a financially aware and context adaptive Zero Trust architecture designed specifically for high assurance banking systems. The proposed framework integrates Financial Zero Trust, Adaptive Identity Scoring, Contextual Micro Segmentation, and Impact Driven Security Automation. A Monte Carlo simulation evaluates SecureBank against a representative rule based baseline architecture using metrics such as the Transactional Integrity Index (TII), Identity Trust Adaptation Level (ITAL), and Security Automation Efficiency (SAE).\n\nThe results demonstrate that SecureBank significantly improves automated attack handling and accelerates identity trust adaptation while preserving conservative and regulator aligned levels of transactional integrity. Beyond experimental validation, SecureBank is intended to serve as a reference architecture and evaluation baseline for financially aware Zero Trust systems in regulated financial environments.',
    link: 'https://arxiv.org/abs/2512.23124',
    doi: 'https://doi.org/10.48550/arXiv.2512.23124',
    category: 'Cryptography and Security (cs.CR)',
    doiIndexed: true,
    academicPublished: true,
    peerReviewed: false,
    isScientificArticle: true,
    publicationType: 'Scientific Article (arXiv Preprint)',
    priority: 3, // ✅ TOP
  },

  // ✅ NEW — OSF Registration (SECOND, right below arXiv)
  {
    title: 'SecureBank™: A Financially-Aware Zero-Trust Architecture for High-Assurance Banking Systems (OSF Registration)',
    journal: 'OSF Registries – Open-Ended Registration',
    platform: 'OSF',
    year: '2025',
    tag: 'OSF Registration',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'This registration documents the research artifacts, LaTeX source files, figures, tables, and bibliographic references supporting the preprint “SecureBank™: A Financially-Aware Zero-Trust Architecture for High-Assurance Banking Systems.” It provides a permanent, timestamped scholarly record designed to ensure transparency, reproducibility, and public accessibility of the supporting materials.',
    // ✅ Use the public project link you have on the right side (Associated Project)
    link: 'https://osf.io/56jk2',
    // ✅ Registration DOI (shown on the right)
    doi: 'https://doi.org/10.17605/OSF.IO/U6BN7',
    category: 'Open Science / Registered Research Artifacts',
    doiIndexed: true,
    academicPublished: true,
    peerReviewed: false,
    isScientificArticle: true,
    publicationType: 'Scientific Record (OSF Registration)',
    priority: 2, // ✅ SECOND
  },

  // ✅ SCIENTIFIC ARTICLE (THIRD) — Zenodo DOI (AFTER OSF)
  {
    title: 'SecureBank™: A Financially-Aware Zero-Trust Architecture for High-Assurance Banking Systems',
    journal: 'Zenodo – Preprint (Scientific Article)',
    platform: 'Zenodo',
    year: '2025',
    tag: 'Scientific Article',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'This record provides the preprint of “SecureBank™: A Financially-Aware Zero-Trust Architecture for High-Assurance Banking Systems.” The paper introduces SecureBank™, a financially-aware and context-adaptive Zero Trust architecture designed for modern banking environments. The framework integrates Financial Zero Trust, Adaptive Identity Scoring, Contextual Micro-Segmentation, and Impact-Driven Security Automation. The evaluation uses a Monte Carlo simulation and reports key metrics including Transactional Integrity Index (TII), Identity Trust Adaptation Level (ITAL), and Security Automation Efficiency (SAE).',
    link: 'https://zenodo.org/records/18071268',
    category: 'Banking Security',
    doi: 'https://doi.org/10.5281/zenodo.18071268',
    doiIndexed: true,
    academicPublished: true,
    peerReviewed: false,
    isScientificArticle: true,
    publicationType: 'Scientific Article (Zenodo Preprint)',
    priority: 1, // ✅ THIRD
  },

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
    doiIndexed: true,
    academicPublished: true,
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
    doiIndexed: true,
    academicPublished: true,
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
    doiIndexed: true,
    academicPublished: true,
  },

  // ========= Figshare – DOIs =========
  {
    title:
      'SecureBank™: A Next-Generation Cybersecurity Architecture for Modern Financial Institutions',
    journal: 'Figshare – DOI 10.6084/m9.figshare.30690095',
    platform: 'Figshare',
    year: '2025',
    tag: 'Banking Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Whitepaper on Figshare presenting SecureBank™, a next-generation cybersecurity framework for modern financial institutions, integrating Zero Trust Financial Architecture, adaptive identity, contextual microsegmentation and impact-driven automation to enhance operational resilience and regulatory compliance.',
    link: 'https://doi.org/10.6084/m9.figshare.30690095',
    category: 'Banking Security',
    doi: 'https://doi.org/10.6084/m9.figshare.30690095',
  },
  {
    title:
      'PhysiDigital™: A Cyber-Physical Security Framework for Medical, Biometric and IoT-Enabled Healthcare Systems',
    journal: 'Figshare – DOI 10.6084/m9.figshare.30690146',
    platform: 'Figshare',
    year: '2025',
    tag: 'Healthcare Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Whitepaper on Figshare describing PhysiDigital™, a cyber-physical security framework for medical devices, biometric systems and IoT-enabled healthcare infrastructures, integrating Zero Trust Healthcare, device integrity verification, real-time risk scoring and secure clinical workflows.',
    link: 'https://doi.org/10.6084/m9.figshare.30690146',
    category: 'Healthcare Technology',
    doi: 'https://doi.org/10.6084/m9.figshare.30690146',
  },
  {
    title:
      'HealthGuard™: An Integrated Cybersecurity and Data Protection Architecture for Digital Healthcare Ecosystems',
    journal: 'Figshare – DOI 10.6084/m9.figshare.30690155',
    platform: 'Figshare',
    year: '2025',
    tag: 'Healthcare Security',
    authors: 'Paulo Fernandes Biao',
    abstract:
      'Whitepaper on Figshare presenting HealthGuard™, an integrated cybersecurity and data protection architecture for digital healthcare ecosystems, combining adaptive access control, behavior-based threat detection, clinical data governance and secure medical workflows to strengthen resilience across healthcare environments.',
    link: 'https://doi.org/10.6084/m9.figshare.30690155',
    category: 'Healthcare Technology',
    doi: 'https://doi.org/10.6084/m9.figshare.30690155',
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
]

// ========================================================================
// MEDIA ITEMS (Media & Press)
// ========================================================================
type MediaItem = {
  title: string
  outlet: string
  year: string
  language: string
  summary: string
  link: string
}

const mediaItems: MediaItem[] = [
  {
    title:
      'Leadership in Cybersecurity: Paulo Fernandes Biao, the Specialist Protecting the Future of Financial Institutions',
    outlet: 'PicNews',
    year: '2020',
    language: 'Portuguese (BR)',
    summary:
      'News article highlighting Paulo Fernandes Biao’s leadership in large-scale security projects for major Brazilian financial institutions such as Banco do Brasil, Banco Central do Brasil, HSBC and Banco Safra.',
    link: 'https://picnews.com.br/lideranca-em-ciberseguranca-paulo-fernandes-biao-o-especialista-que-protege-o-futuro-das-instituicoes-financeiras/',
  },
  {
    title:
      'Paulo Fernandes Biao: The Cybersecurity Expert Who Is Revolutionizing Data Protection',
    outlet: 'Celefu News',
    year: '2023',
    language: 'Portuguese (BR)',
    summary:
      'Profile article presenting Paulo Fernandes Biao as a reference in cybersecurity and data protection, featuring the SecureBank™, HealthGuard™ and PhysiDigital™ frameworks and his international work.',
    link: 'https://celefu.com.br/paulo-fernandes-biao-o-especialista-em-ciberseguranca-que-esta-revolucionando-a-protecao-de-dados/',
  },
  {
    title:
      'Behind the Scenes of Banking Security: How Paulo Fernandes Biao Worked on Systems that Protect Large-Scale Financial Operations',
    outlet: 'Informa Agency',
    year: '2025',
    language: 'Portuguese (BR)',
    summary:
      'Article focusing on the “behind the scenes” of large-scale banking security, detailing Paulo Fernandes Biao’s work in CCTV, alarms and integrated platforms that protect high-volume financial operations across Brazil.',
    link: 'https://agenciainforma.app.br/os-bastidores-da-seguranca-bancaria-como-paulo-fernandes-biao-atuou-em-sistemas-que-protegem-operacoes-financeiras-de-grande-porte/',
  },
  {
    title:
      'From Electronic Security to Advanced Architectures: How Paulo Biao Connects the Physical and Digital Worlds in the Era of Mega Cyber Attacks',
    outlet: 'PautaPop – Cultural Section',
    year: '2025',
    language: 'Portuguese (BR)',
    summary:
      'Feature article showing the evolution from electronic security to advanced cyber architectures, highlighting how Paulo Biao bridges physical infrastructures and digital systems using frameworks such as SecureBank™, HealthGuard™ and PhysiDigital™.',
    link: 'https://pautapop.faixacultural.com.br/2025/05/da-seguranca-eletronica-as-arquiteturas.html',
  },
  {
    title:
      'The Brazilian Modernizing Critical Infrastructure Security: Who Is Paulo Fernandes Biao?',
    outlet: 'São Paulo Gazette – Cultural Section',
    year: '2023',
    language: 'Portuguese (BR)',
    summary:
      'In-depth profile presenting Paulo Fernandes Biao as a Brazilian specialist modernizing critical-infrastructure security, combining experience in physical security, banking systems and next-generation cybersecurity.',
    link: 'https://gazetasp.faixacultural.com.br/2023/01/o-brasileiro-que-esta-modernizando.html',
  },
  {
    title:
      'Interview with Paulo Fernandes Biao: From Electronic Security to Critical Infrastructure Cybersecurity',
    outlet: 'O DIA – TanaRede',
    year: '2025',
    language: 'Portuguese (BR)',
    summary:
      'Interview in O DIA where Paulo Fernandes Biao talks about his trajectory from electronic security and CCTV to advanced cybersecurity architectures for banking systems and critical infrastructures, highlighting his international work and frameworks.',
    link: 'https://odia.tanarede.com.br/entrevista-com-paulo-fernandes-biao/',
  },
]

// ========================================================
// GROUPING FUNCTION
// ========================================================
function groupByPlatform(items: Publication[]) {
  return items.reduce<Record<string, Publication[]>>((acc, pub) => {
    const key = pub.platform || 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(pub)
    return acc
  }, {})
}

// ========================================================
// CLIENT COMPONENT
// ========================================================
export default function PublicationsClient() {
  const [citationModal, setCitationModal] = useState<{
    title: string
    authors: string
    year: string
    doi?: string
    journal?: string
  } | null>(null)

  // ✅ ORDER: arXiv first, then OSF, then Zenodo scientific (via priority)
  const scientificPublications = publications
    .filter((p) => p.isScientificArticle)
    .sort((a, b) => {
      const ap = a.priority ?? 0
      const bp = b.priority ?? 0
      if (bp !== ap) return bp - ap
      return Number(b.year) - Number(a.year)
    })

  const featuredPublications = publications.filter((p) => p.featured && !p.isScientificArticle)
  const nonFeaturedPublications = publications.filter((p) => !p.featured && !p.isScientificArticle)
  const grouped = groupByPlatform(nonFeaturedPublications)

  const platformOrder = ['Zenodo', 'Figshare', 'Academia.edu', 'DIO.me', 'Journals & Legacy']

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
      {/* Background */}
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
            Publications &amp; Media
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic and technical publications, plus selected media coverage highlighting Paulo
            Fernandes Biao&apos;s work in cybersecurity, banking security, healthcare technology,
            and digital transformation.
          </p>
        </AnimatedSection>

        {/* Academic & Technical */}
        <AnimatedSection className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-left">
            Academic &amp; Technical Publications
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Core frameworks such as SecureBank™, HealthGuard™ and PhysiDigital™ are documented in
            DOIs, whitepapers and technical reports across Zenodo, Figshare and Academia.edu.
          </p>
        </AnimatedSection>

        {/* ✅ Scientific Article (Top / Explicit) */}
        {scientificPublications.length > 0 && (
          <AnimatedSection className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Scientific Article (Preprint)
            </h3>
            <p className="text-gray-600 mb-6">
              Peer-facing scientific manuscript and supporting scholarly records with DOI for citation.
            </p>

            <div className="space-y-4">
              {scientificPublications.map((publication, index) => {
                const isArxiv = publication.platform === 'arXiv'
                const isOSF = publication.platform === 'OSF'

                const cardTheme = isArxiv
                  ? {
                      bg: 'from-rose-50 to-amber-50',
                      border: 'border-rose-400 hover:border-rose-500',
                      badge: 'from-rose-600 to-amber-600',
                      accentBtn: 'bg-rose-600 hover:bg-rose-700',
                      accentLink: 'text-rose-700 hover:text-rose-900',
                      badgeText: 'arXiv',
                    }
                  : isOSF
                  ? {
                      bg: 'from-indigo-50 to-sky-50',
                      border: 'border-indigo-400 hover:border-indigo-500',
                      badge: 'from-indigo-600 to-sky-600',
                      accentBtn: 'bg-indigo-600 hover:bg-indigo-700',
                      accentLink: 'text-indigo-700 hover:text-indigo-900',
                      badgeText: 'OSF',
                    }
                  : {
                      bg: 'from-emerald-50 to-cyan-50',
                      border: 'border-emerald-400 hover:border-emerald-500',
                      badge: 'from-emerald-600 to-teal-600',
                      accentBtn: 'bg-emerald-600 hover:bg-emerald-700',
                      accentLink: 'text-emerald-700 hover:text-emerald-900',
                      badgeText: 'Scientific Article',
                    }

                return (
                  <div
                    key={`scientific-${index}`}
                    className={`relative bg-gradient-to-r ${cardTheme.bg} backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${cardTheme.border} group`}
                  >
                    <div
                      className={`absolute -top-3 -right-3 bg-gradient-to-r ${cardTheme.badge} text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg`}
                    >
                      {cardTheme.badgeText}
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-[15px] font-bold text-gray-900 mb-2 leading-tight">
                          {publication.title}
                        </h4>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className={`${isArxiv ? 'text-rose-700' : isOSF ? 'text-indigo-700' : 'text-emerald-700'} font-medium`}>
                            {publication.publicationType ?? publication.journal}
                          </span>

                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            {publication.year}
                          </div>

                          <span
                            className={`px-3 py-1 ${isArxiv ? 'bg-rose-100 text-rose-800' : isOSF ? 'bg-indigo-100 text-indigo-800' : 'bg-emerald-100 text-emerald-800'} rounded-full text-sm`}
                          >
                            {publication.category}
                          </span>

                          {publication.peerReviewed === false && (
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                              Preprint / Record (not peer-reviewed)
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex-shrink-0 mt-4 lg:mt-0 flex gap-2">
                        <ViewPaperButton title={publication.title} link={publication.link} />
                        <button
                          onClick={() =>
                            setCitationModal({
                              title: publication.title,
                              authors: publication.authors,
                              year: publication.year,
                              doi: publication.doi,
                              journal: publication.journal,
                            })
                          }
                          className={`flex items-center gap-2 px-4 py-2 ${cardTheme.accentBtn} text-white font-medium rounded-lg transition-colors`}
                        >
                          <Quote className="w-4 h-4" />
                          Cite
                        </button>
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
                          className={`${cardTheme.accentLink} underline`}
                        >
                          {publication.doi}
                        </a>
                      </p>
                    )}

                    <p className="text-gray-700 leading-relaxed line-clamp-2">
                      <strong>Abstract:</strong> {publication.abstract}
                    </p>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>
        )}

        {/* Featured Zenodo */}
        {featuredPublications.length > 0 && (
          <AnimatedSection className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Zenodo – DOI Publications
            </h3>
            <p className="text-gray-600 mb-6">
              Highlighted Zenodo reports indexed with DOIs, focusing on financial, healthcare and
              digital health critical infrastructures.
            </p>

            <div className="space-y-6">
              {featuredPublications.map((publication, index) => (
                <div
                  key={`featured-${index}`}
                  className="relative bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-400 hover:border-blue-500 group"
                >
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Featured
                  </div>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-[15px] font-bold text-gray-900 mb-2 leading-tight">
                        {publication.title}
                      </h4>
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
                    <div className="flex-shrink-0 mt-4 lg:mt-0 flex gap-2">
                      <ViewPaperButton title={publication.title} link={publication.link} />
                      <button
                        onClick={() =>
                          setCitationModal({
                            title: publication.title,
                            authors: publication.authors,
                            year: publication.year,
                            doi: publication.doi,
                            journal: publication.journal,
                          })
                        }
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                      >
                        <Quote className="w-4 h-4" />
                        Cite
                      </button>
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

                  <p className="text-gray-700 leading-relaxed line-clamp-2">
                    <strong>Abstract:</strong> {publication.abstract}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Grouped by platform */}
        <div className="space-y-10">
          {sortedPlatforms.map((platform) => {
            const list = grouped[platform]
            if (!list || list.length === 0) return null

            return (
              <AnimatedSection key={platform}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{platform}</h3>
                <div className="space-y-4">
                  {list.map((publication, index) => (
                    <div
                      key={`${platform}-${index}`}
                      className="relative bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-300 hover:border-blue-400 group"
                    >
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 relative">
                        <div className="flex-1">
                          <h4 className="text-[15px] font-bold text-gray-900 mb-2 leading-tight">
                            {publication.title}
                          </h4>
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

                      <p className="text-gray-700 leading-relaxed line-clamp-2">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Banking Security</h3>
                <p className="text-gray-600">
                  Advanced cybersecurity architectures and methodologies for financial
                  institutions and payment ecosystems.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare Technology</h3>
                <p className="text-gray-600">
                  Protection of clinical data, medical devices and digital healthcare workflows,
                  with a focus on Zero Trust Healthcare.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                <p className="text-gray-600">
                  Frameworks and methodologies that guide organizations through secure and
                  resilient digital transformation initiatives.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Media & Press */}
        <AnimatedSection className="mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Media &amp; Press</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-center">
              Selected news articles and content highlighting Paulo Fernandes Biao&apos;s work.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col justify-between bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-300 hover:border-blue-400 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-gray-600">
                      <span className="font-medium text-blue-700">{item.outlet}</span>
                      <span>• {item.year}</span>
                      <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs">
                        {item.language}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.summary}</p>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Read full article
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA final */}
        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Collaborate on Research</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Interested in collaborating on research, co-authoring future whitepapers, or
              exploring how these frameworks can be applied to your organization?
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

      {/* Citation Modal */}
      {citationModal && (
        <CitationModal
          title={citationModal.title}
          authors={citationModal.authors}
          year={citationModal.year}
          doi={citationModal.doi}
          journal={citationModal.journal}
          onClose={() => setCitationModal(null)}
        />
      )}
    </div>
  )
}
