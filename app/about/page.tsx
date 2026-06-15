import type { Metadata } from 'next'
import Image from 'next/image'
import { GraduationCap, Briefcase, Award, Globe } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'
import CertificationsSection from '@/components/sections/CertificationsSection'
// ❌ Removido: PeerReviewSection – ele fica só na página /peer-review

export const metadata: Metadata = {
  title: 'About',
  description:
    'Paulo Biao — Security & Cloud Engineer with over a decade securing systems for financial institutions in Brazil, now focused on the cloud. Creator of SecureBank™, HealthGuard™, and PhysiDigital™ frameworks. Open to US roles.',
  openGraph: {
    title: 'About Paulo Biao — Security & Cloud Engineer',
    description:
      'Over a decade securing systems for financial institutions in Brazil, now focused on the cloud. Creator of SecureBank™, HealthGuard™, and PhysiDigital™ frameworks. IEEE IoT Journal Peer Reviewer. Open to US opportunities.',
    url: 'https://biaotech.dev/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Paulo Biao' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Paulo Biao',
    description: 'Over a decade securing systems for financial institutions in Brazil, now focused on the cloud. Creator of SecureBank™, HealthGuard™, PhysiDigital™. IEEE IoT Peer Reviewer. Open to US roles.',
    images: ['https://www.biaotech.dev/og-image.png'],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wide text-blue-400 uppercase mb-2">
            About
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            Paulo Biao
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Security &amp; Cloud Engineer with a background protecting systems for financial institutions in Brazil, now focused on the cloud. Currently targeting US-based remote roles in cloud and security.
          </p>
        </AnimatedSection>

        {/* Profile Section */}
        <AnimatedSection className="grid lg:grid-cols-2 gap-12 mb-20">
          <div
            className="relative w-[280px] h-[380px] md:w-[300px] md:h-[400px] mx-auto my-4"

            style={{
              background:
                'radial-gradient(120% 120% at 30% 20%, #1e293b 0%, #0f172a 60%, #020617 100%)',
            }}
          >
            <div className="relative w-[320px] h-[420px] md:w-[360px] md:h-[480px]">
              <Image
                src="/pauloNN.jpg"
                alt="Paulo Biao"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
           
         

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-black text-white mb-6">Professional Overview</h2>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              Paulo Biao is a seasoned technology professional with a strong track record in systems architecture, security, and digital transformation. Throughout his career, he has designed and implemented solutions that connect complex technical environments with real business outcomes.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              His work on the SecureBank™, HealthGuard™, and PhysiDigital™ frameworks reflects a structured and strategic approach to solving challenges in banking, healthcare, and enterprise operations—always with a focus on resilience, scalability, and long-term impact.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">10+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">3</div>
                <div className="text-sm text-slate-400">Core Frameworks</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-xl">
                <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">10+</div>
                <div className="text-sm text-slate-400">Publications</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Background Sections */}
        <div className="space-y-20">
          {/* Education */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Education & Academic Background
                </h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bachelor&apos;s Degree – Analysis and Systems Development (Estácio)
                  </h3>
                  <p className="text-gray-700">
                    Paulo holds a Bachelor&apos;s degree in Analysis and Systems Development from
                    Estácio (2017–2020), where he built a strong technical base in software
                    engineering, systems design, and information technology. This foundation
                    supports a deep understanding of how architectures behave in real-world
                    operational environments.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Postgraduate Studies in Cloud Computing – PUC Minas
                  </h3>
                  <p className="text-gray-700">
                    He is currently pursuing a Postgraduate degree in Cloud Computing at PUC Minas
                    (expected completion Nov/2026). The program focuses on cloud solution
                    architecture, distributed systems, scalability, containerization, automation,
                    and information security—strengthening his ability to design cloud-native,
                    resilient, and highly scalable architectures.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Continuous Professional Development & Certifications
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Paulo maintains an ongoing commitment to professional development through
                    international certifications and advanced training, ensuring his work stays
                    aligned with emerging technologies and industry best practices, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>ISC2 – Certified in Cybersecurity (CC) <span className="text-amber-600 font-medium">(In Progress)</span></li>
                    <li>Scrum Alliance – Certified Scrum Master (CSM)</li>
                    <li>Oracle Cloud Infrastructure 2024 Foundations</li>
                    <li>Oracle Cloud Infrastructure 2024 Data Foundations</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications & Specializations */}
          <CertificationsSection />

          {/* Professional Experience */}
          <AnimatedSection>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
              </div>
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Technology Innovation & Framework Design
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Paulo has led the design of structured frameworks that organize complex
                    technology landscapes into clear, actionable architectures. His work brings
                    together security, compliance, and operational efficiency in a way that can be
                    consistently implemented and scaled across different industries.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      SecureBank™
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      HealthGuard™
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      PhysiDigital™
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Research & Thought Leadership
                  </h3>
                  <p className="text-gray-700">
                    Alongside practical work, Paulo has been structuring his knowledge into
                    articles, conceptual papers, and technical content focused on security, digital
                    transformation, and framework-based architecture—consolidating his positioning
                    as a reference in these areas.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Achievements */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Key Achievements</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Innovation Portfolio</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Conceptualization and architecture of the SecureBank™ framework for banking
                      security and compliance-aligned operations.
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Design of HealthGuard™, a protection model for healthcare data, clinical
                      systems, and critical workflows.
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Development of PhysiDigital™, a methodology to guide organizations through
                      structured digital transformation.
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Professional Recognition & Trajectory
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Long-standing career in technology, combining hands-on implementation with
                      architectural and strategic responsibilities.
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Contributions to technical discussions, presentations, and knowledge-sharing
                      initiatives focused on security and transformation.
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Ongoing pursuit of certifications, specialization, and structured
                      publications to strengthen international positioning.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Global Impact */}
          <AnimatedSection>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center shadow-xl">
              <Globe className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Global Impact & Vision</h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Paulo&apos;s vision goes beyond isolated projects: his frameworks are designed to
                be adaptable across countries, regulatory environments, and sectors. The focus is
                on creating secure, scalable, and sustainable architectures that support financial
                inclusion, healthcare reliability, and digital transformation worldwide.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
