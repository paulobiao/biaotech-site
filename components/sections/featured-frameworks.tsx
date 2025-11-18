'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Shield, Heart, Zap, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

const frameworks = [
  {
    id: 'securebank',
    title: 'SecureBank™',
    subtitle: 'Banking Security Framework',
    description:
      'SecureBank™ is an advanced multi-layered security framework that protects digital banking channels and core financial systems while simplifying regulatory compliance and operational risk management.',
    image: 'https://static.abacusaicdn.net/images/cf8680fd-15e7-42fa-bdc1-8ba5d8e97589.jpg',
    icon: Shield,
    color: 'blue',
    features: [
      'Multi-layered security for core and digital channels',
      'Real-time monitoring and incident detection',
      'Compliance automation & audit readiness',
    ],
  },
  {
    id: 'healthguard',
    title: 'HealthGuard™',
    subtitle: 'Healthcare Protection System',
    description:
      'HealthGuard™ secures patient data, clinical systems, and healthcare workflows with an architecture designed for privacy, availability, and regulatory-grade protection.',
    image: 'https://static.abacusaicdn.net/images/c5a74abb-b427-4ace-9178-81d5d432e1d6.jpg',
    icon: Heart,
    color: 'green',
    features: [
      'End-to-end patient data protection',
      'Support for HIPAA and healthcare compliance',
      'Resilience for critical clinical operations',
    ],
  },
  {
    id: 'physi-digital',
    title: 'PhysiDigital™',
    subtitle: 'Digital Transformation Framework',
    description:
      'PhysiDigital™ connects physical operations and digital ecosystems through structured process mapping, integration, and automation to accelerate transformation with measurable impact.',
    image: 'https://static.abacusaicdn.net/images/d4efe466-ab21-4428-aaf8-5ba98b5a2fc6.jpg',
    icon: Zap,
    color: 'purple',
    features: [
      'End-to-end process and system integration',
      'Real-time analytics and performance visibility',
      'Automation for repetitive and manual workflows',
    ],
  },
]

export default function FeaturedFrameworks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Frameworks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three strategic frameworks designed to address critical challenges in banking
            security, healthcare protection, and digital transformation.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <AnimatedSection key={framework.id} delay={index * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-square mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={framework.image}
                    alt={framework.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Icon + title */}
                <div className="flex items-center mb-3">
                  <framework.icon className={`h-7 w-7 text-${framework.color}-600 mr-3`} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{framework.title}</h3>
                    <p className={`text-sm text-${framework.color}-600 font-semibold`}>
                      {framework.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-5 leading-relaxed">
                  {framework.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Key Highlights
                  </p>
                  <div className="space-y-2">
                    {framework.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div
                          className={`mt-1 h-2 w-2 bg-${framework.color}-600 rounded-full mr-3`}
                        ></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href={`/frameworks/${framework.id}`}
                    className={`inline-flex items-center text-${framework.color}-600 hover:text-${framework.color}-800 font-semibold group`}
                  >
                    {`Explore ${framework.title}`}
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View all CTA */}
        <AnimatedSection className="text-center mt-12">
          <Link
            href="/frameworks"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold shadow-md"
          >
            View All Frameworks
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
