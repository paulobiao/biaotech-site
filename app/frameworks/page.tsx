import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Heart, Zap, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'Frameworks',
  description:
    "Explore Paulo Fernandes Bião's revolutionary frameworks: SecureBank™, HealthGuard™, and PhysiDigital™.",
}

const frameworks = [
  {
    id: 'securebank',
    title: 'SecureBank™',
    subtitle: 'Banking Security Framework',
    description:
      'SecureBank™ is an advanced multi-layered security framework engineered to protect digital banking channels, core financial systems, and regulatory workflows. It combines real-time threat intelligence, compliance automation, and risk analytics to strengthen institutional resilience and reduce operational vulnerabilities.',
    image: 'https://static.abacusaicdn.net/images/cf8680fd-15e7-42fa-bdc1-8ba5d8e97589.jpg',
    icon: Shield,
    color: 'blue',
    features: [
      'Multi-layered security architecture',
      'Compliance automation & audit readiness',
      'Real-time threat detection and alerting',
      'Integrated risk assessment tools',
      'Behavioral analytics for fraud prevention',
      'Secure API and transaction monitoring',
    ],
    benefits: [
      'Enhanced institutional resilience',
      'Reduced security incidents and fraud attempts',
      'Faster regulatory compliance and audit processes',
      'Improved operational efficiency',
      'Greater trust across digital banking channels',
      'Scalable protection for high-volume financial operations',
    ],
  },
  {
    id: 'healthguard',
    title: 'HealthGuard™',
    subtitle: 'Healthcare Protection System',
    description:
      'HealthGuard™ is a comprehensive protection framework for healthcare organizations, ensuring end-to-end security of patient data, clinical systems, and critical healthcare workflows while supporting strict regulatory requirements.',
    image: 'https://static.abacusaicdn.net/images/c5a74abb-b427-4ace-9178-81d5d432e1d6.jpg',
    icon: Heart,
    color: 'green',
    features: [
      'End-to-end patient data encryption',
      'Role-based access & identity management',
      'Secure integration with EHR/EMR and medical devices',
      'Built-in HIPAA and healthcare compliance tooling',
      'High-availability architecture for critical services',
      'Monitoring and audit trails for clinical activity',
    ],
    benefits: [
      'Stronger patient privacy and trust',
      'Reduced risk of data breaches and regulatory fines',
      'Continuous alignment with healthcare regulations',
      'Greater resilience of clinical operations',
      'Improved visibility across healthcare systems',
      'Secure foundation for digital health innovation',
    ],
  },
  {
    id: 'physi-digital',
    title: 'PhysiDigital™',
    subtitle: 'Digital Transformation Framework',
    description:
      'PhysiDigital™ is a structured methodology that bridges physical operations and digital ecosystems, aligning processes, data, and technology to accelerate transformation and organizational innovation.',
    image: 'https://static.abacusaicdn.net/images/d4efe466-ab21-4428-aaf8-5ba98b5a2fc6.jpg',
    icon: Zap,
    color: 'purple',
    features: [
      'Process mapping and digitization blueprints',
      'Integration patterns for legacy and cloud systems',
      'Real-time analytics and performance dashboards',
      'Automation workflows and orchestration',
      'IoT and edge connectivity for physical assets',
      'Change management and adoption playbooks',
    ],
    benefits: [
      'Faster time-to-value for digital initiatives',
      'Higher operational visibility and control',
      'Reduction of manual work and process errors',
      'Scalable foundation for continuous innovation',
      'Better alignment between business and technology',
      'Improved experience for customers and teams',
    ],
  },
]

export default function FrameworksPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">
            Strategic Innovation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Innovation Frameworks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three specialized frameworks designed by Paulo Fernandes Bião to address critical
            challenges in banking security, healthcare protection, and digital transformation.
          </p>
        </AnimatedSection>

        {/* Frameworks Grid */}
        <div className="space-y-20">
          {frameworks.map((framework, index) => (
            <AnimatedSection key={framework.id}>
              <section
                id={framework.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-square bg-gradient-to-br from-${framework.color}-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <Image
                    src={framework.image}
                    alt={framework.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center mb-4">
                    <framework.icon className={`h-8 w-8 text-${framework.color}-600 mr-3`} />
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{framework.title}</h2>
                      <p className={`text-lg text-${framework.color}-600 font-medium`}>
                        {framework.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {framework.description}
                  </p>

                  {/* Features + Benefits in two columns */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Key Features
                      </h3>
                      <div className="space-y-2">
                        {framework.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div
                              className={`mt-1 h-2 w-2 bg-${framework.color}-600 rounded-full mr-3`}
                            ></div>
                            <span className="text-gray-700 text-sm md:text-base">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h3>
                      <div className="space-y-2">
                        {framework.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <div
                              className={`mt-1 h-2 w-2 bg-${framework.color}-600 rounded-full mr-3`}
                            ></div>
                            <span className="text-gray-700 text-sm md:text-base">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/frameworks/${framework.id}`}
                    className={`inline-flex items-center px-6 py-3 bg-${framework.color}-600 text-white rounded-xl hover:bg-${framework.color}-700 transition-colors group shadow-md`}
                  >
                    {`Explore ${framework.title}`}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </section>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Implement These Frameworks?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch to discuss how these frameworks can be tailored to your
              organization&apos;s architecture, regulatory landscape, and strategic objectives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-colors font-semibold shadow-md"
            >
              Contact Paulo
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
