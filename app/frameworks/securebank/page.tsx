import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Activity, Lock, Server } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'SecureBank™ Framework',
  description:
    'SecureBank™ is a next-generation multi-layered security framework for modern financial institutions, combining real-time threat intelligence, compliance automation, and resilient architecture.',
}

export default function SecureBankPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* HERO */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 mb-4">
            <ShieldCheck className="h-7 w-7 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">SecureBank™</h1>
          <p className="text-lg md:text-xl text-blue-600 font-medium mb-4">
            Revolutionary Banking Security Framework
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A next-generation multi-layered security framework engineered for financial
            institutions seeking resilience against evolving cyber threats. SecureBank™
            delivers real-time protection, compliance automation, and seamless integration
            with core banking operations.
          </p>
        </AnimatedSection>

        {/* IMAGE */}
        <AnimatedSection className="mb-16">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-blue-900">
            <Image
              src="https://static.abacusaicdn.net/images/cf8680fd-15e7-42fa-bdc1-8ba5d8e97589.jpg"
              alt="SecureBank banking security framework illustration"
              fill
              className="object-cover"
            />
          </div>
        </AnimatedSection>

        {/* OVERVIEW */}
        <AnimatedSection className="mb-16">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Framework Overview
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                SecureBank™ represents a paradigm shift in banking security, moving beyond
                traditional perimeter-based protection to deliver a comprehensive and
                adaptive security ecosystem. The framework addresses the unique challenges
                faced by financial institutions in today&apos;s rapidly evolving threat
                landscape.
              </p>
              <p>
                Built on proven security principles and enhanced with cutting-edge
                technology, SecureBank™ provides banks with the tools they need to protect
                customer assets, maintain regulatory compliance, and preserve institutional
                reputation while enabling digital innovation and growth.
              </p>
              <p>
                Its modular architecture allows customized implementation based on
                institutional size, regulatory requirements, and risk tolerance, ensuring
                optimal protection without compromising operational efficiency or customer
                experience.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* FEATURES + BENEFITS */}
        <AnimatedSection className="mb-16 grid md:grid-cols-2 gap-8">
          {/* Key Features */}
          <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Lock className="h-6 w-6 text-blue-600 mr-2" />
              Key Features
            </h3>
            <ul className="space-y-3 text-gray-800 text-base md:text-lg">
              <li>• Multi-layered security architecture for core and digital channels</li>
              <li>• Real-time threat detection, correlation, and response workflows</li>
              <li>• Automated compliance monitoring and regulatory reporting support</li>
              <li>• Advanced encryption protocols for data in transit and at rest</li>
              <li>• Risk assessment and management tools across systems and users</li>
              <li>• Seamless integration with existing banking platforms and APIs</li>
            </ul>
          </div>

          {/* Business Benefits */}
          <div className="bg-green-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Activity className="h-6 w-6 text-green-600 mr-2" />
              Business Benefits
            </h3>
            <ul className="space-y-3 text-gray-800 text-base md:text-lg">
              <li>• Enhanced institutional trust, brand reputation, and client confidence</li>
              <li>• Significant reduction in security incidents, fraud, and downtime</li>
              <li>• Streamlined regulatory compliance and audit-readiness</li>
              <li>• Improved operational efficiency and cost optimization</li>
              <li>• Consistent security posture across digital and physical channels</li>
              <li>• Scalable protection framework for high-volume financial operations</li>
            </ul>
          </div>
        </AnimatedSection>

        {/* TECHNICAL SPECS */}
        <AnimatedSection className="mb-16">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
              <Server className="h-6 w-6 text-blue-300 mr-2" />
              Technical Specifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <ul className="space-y-2">
                <li>• Multi-factor authentication integration</li>
                <li>• End-to-end encryption for all transactions</li>
                <li>• Automated incident response orchestration</li>
                <li>• Machine-learning–based anomaly detection</li>
              </ul>
              <ul className="space-y-2">
                <li>• Real-time monitoring dashboards and alerts</li>
                <li>• API-first architecture for system integration</li>
                <li>• Zero-trust network segmentation strategies</li>
                <li>• Secure audit logging with tamper detection</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* IMPLEMENTATION PROCESS */}
        <AnimatedSection className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Implementation Process
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            A structured, collaborative approach ensures secure deployment tailored to each
            financial institution&apos;s risk profile, regulatory landscape, and strategic
            objectives.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Assessment & Profiling',
                text: 'Comprehensive security audit, threat modeling, and risk evaluation.',
              },
              {
                step: '02',
                title: 'Architecture & Design',
                text: 'Custom framework blueprint aligned with systems, compliance, and goals.',
              },
              {
                step: '03',
                title: 'Deployment & Integration',
                text: 'Phased rollout with minimal disruption and validated security controls.',
              },
              {
                step: '04',
                title: 'Monitoring & Optimization',
                text: 'Continuous monitoring, tuning, and periodic security posture reviews.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center"
              >
                <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mb-3">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA FINAL */}
        <AnimatedSection className="mb-10">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Secure Your Banking Infrastructure?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Let&apos;s discuss how SecureBank™ can be tailored to your institution&apos;s
              architecture, compliance needs, and digital strategy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-xl hover:bg-gray-100 transition-colors font-semibold shadow-md"
            >
              Talk to Paulo About SecureBank™
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
