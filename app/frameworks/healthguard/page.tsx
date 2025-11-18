import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HeartPulse, Activity, ShieldCheck, Stethoscope } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'HealthGuard™ Framework',
  description:
    'HealthGuard™ is a comprehensive protection framework for healthcare environments, securing patient data, clinical workflows, and critical infrastructure with regulatory-grade controls.',
}

export default function HealthGuardPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* HERO */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-green-100 mb-4">
            <HeartPulse className="h-7 w-7 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">HealthGuard™</h1>
          <p className="text-lg md:text-xl text-green-600 font-medium mb-4">
            Healthcare Protection System
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            HealthGuard™ is a comprehensive security framework designed for hospitals, clinics,
            and digital health platforms. It protects patient data, secures clinical workflows,
            and supports regulatory compliance while enabling safe digital transformation in
            healthcare.
          </p>
        </AnimatedSection>

        {/* IMAGE */}
        <AnimatedSection className="mb-16">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-green-900">
            <Image
              src="https://static.abacusaicdn.net/images/c5a74abb-b427-4ace-9178-81d5d432e1d6.jpg"
              alt="HealthGuard healthcare protection system illustration"
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
                HealthGuard™ was created to address the unique security and privacy challenges of
                healthcare environments, where patient safety, data sensitivity, and uptime are
                mission-critical. Traditional security tools are often not enough to protect
                interconnected clinical systems and hybrid infrastructures.
              </p>
              <p>
                The framework unifies data protection, identity and access management, device
                security, and regulatory alignment into a single, structured approach. It supports
                hospitals, clinics, laboratories, and telemedicine platforms in securely scaling
                care delivery.
              </p>
              <p>
                By combining strong technical controls with clear governance and monitoring,
                HealthGuard™ helps healthcare organizations reduce risk while enabling innovation
                in digital health, remote care, and interoperable medical systems.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* FEATURES + BENEFITS */}
        <AnimatedSection className="mb-16 grid md:grid-cols-2 gap-8">
          {/* Key Features */}
          <div className="bg-green-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <ShieldCheck className="h-6 w-6 text-green-600 mr-2" />
              Key Features
            </h3>
            <ul className="space-y-3 text-gray-800 text-base md:text-lg">
              <li>• End-to-end encryption for patient and clinical data</li>
              <li>• Role-based access and identity management for staff</li>
              <li>• Secure integration with EHR/EMR systems and medical devices</li>
              <li>• Built-in support for HIPAA and healthcare privacy regulations</li>
              <li>• Continuous monitoring of clinical systems and endpoints</li>
              <li>• Segmentation of critical healthcare networks and services</li>
            </ul>
          </div>

          {/* Business Benefits */}
          <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Activity className="h-6 w-6 text-blue-600 mr-2" />
              Business Benefits
            </h3>
            <ul className="space-y-3 text-gray-800 text-base md:text-lg">
              <li>• Stronger patient privacy, trust, and institutional reputation</li>
              <li>• Reduced risk of data breaches, ransomware, and service disruption</li>
              <li>• Greater confidence in regulatory audits and compliance reviews</li>
              <li>• Higher resilience of critical clinical operations and workflows</li>
              <li>• Secure foundation for telemedicine and remote care expansion</li>
              <li>• Better visibility and control across healthcare systems and data flows</li>
            </ul>
          </div>
        </AnimatedSection>

        {/* TECHNICAL SPECS */}
        <AnimatedSection className="mb-16">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
              <Stethoscope className="h-6 w-6 text-green-300 mr-2" />
              Technical Specifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <ul className="space-y-2">
                <li>• Support for encryption at rest and in transit</li>
                <li>• Integration with major EHR/EMR platforms</li>
                <li>• Secure onboarding for medical IoT and smart devices</li>
                <li>• Centralized logging of clinical and security events</li>
              </ul>
              <ul className="space-y-2">
                <li>• Policy-based access control for clinical roles</li>
                <li>• API-level security for health data exchange</li>
                <li>• High-availability and failover options for critical systems</li>
                <li>• Audit trails designed for healthcare regulations</li>
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
            HealthGuard™ is implemented through a guided process that respects the realities of
            clinical operations, regulatory deadlines, and existing technology investments.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Clinical Risk Assessment',
                text: 'Evaluate systems, workflows, and data flows across the healthcare environment.',
              },
              {
                step: '02',
                title: 'Security & Privacy Design',
                text: 'Align controls with clinical needs, risk appetite, and regulatory obligations.',
              },
              {
                step: '03',
                title: 'Deployment & Integration',
                text: 'Integrate HealthGuard™ with EHR, devices, and infrastructure with minimal disruption.',
              },
              {
                step: '04',
                title: 'Monitoring & Governance',
                text: 'Establish dashboards, alerts, and governance routines for ongoing protection.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center"
              >
                <div className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold mb-3">
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
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Protect Your Healthcare Environment?
            </h2>
            <p className="text-lg md:text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              Let&apos;s explore how HealthGuard™ can secure your clinical systems, protect
              patient data, and support your digital health strategy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-xl hover:bg-gray-100 transition-colors font-semibold shadow-md"
            >
              Talk to Paulo About HealthGuard™
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
