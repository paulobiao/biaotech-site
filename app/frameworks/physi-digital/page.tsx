import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Activity, Layers, Network } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'PhysiDigital™ Framework',
  description:
    'PhysiDigital™ is a digital transformation framework that connects physical operations and digital ecosystems through structured integration, analytics, and automation.',
}

export default function PhysiDigitalPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* HERO */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-purple-100 mb-4">
            <Zap className="h-7 w-7 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">PhysiDigital™</h1>
          <p className="text-lg md:text-xl text-purple-600 font-medium mb-4">
            Digital Transformation Framework
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            PhysiDigital™ is a structured framework that connects physical operations, people,
            and digital systems. It guides organizations in redesigning processes, integrating
            data, and deploying technology to achieve sustainable, measurable digital
            transformation.
          </p>
        </AnimatedSection>

        {/* IMAGE */}
        <AnimatedSection className="mb-16">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-purple-900">
            <Image
              src="https://static.abacusaicdn.net/images/d4efe466-ab21-4428-aaf8-5ba98b5a2fc6.jpg"
              alt="PhysiDigital digital transformation framework illustration"
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
                Many organizations struggle to turn digital initiatives into real, sustained
                impact. PhysiDigital™ was designed to close this gap by providing a clear,
                actionable transformation blueprint that aligns strategy, processes, and
                technology.
              </p>
              <p>
                The framework focuses on understanding how work is done today, identifying
                opportunities for digitization and automation, and designing integrated
                solutions that improve efficiency, visibility, and experience.
              </p>
              <p>
                PhysiDigital™ applies to industries where physical and digital realities intersect
                — such as logistics, manufacturing, retail, healthcare, and services — helping
                teams move from fragmented tools to connected, data-driven ecosystems.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* FEATURES + BENEFITS */}
        <AnimatedSection className="mb-16 grid md:grid-cols-2 gap-8">
          {/* Key Features */}
          <div className="bg-purple-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Layers className="h-6 w-6 text-purple-600 mr-2" />
              Key Features
            </h3>
            <ul className="space-y-3 text-gray-800 text-base md:text-lg">
              <li>• End-to-end process mapping and digitization blueprints</li>
              <li>• Integration patterns for legacy, on-premise, and cloud systems</li>
              <li>• Real-time dashboards for operational and business performance</li>
              <li>• Automation workflows for repetitive and manual tasks</li>
              <li>• Support for IoT and edge devices in physical environments</li>
              <li>• Governance models for sustainable digital transformation</li>
            </ul>
          </div>

          {/* Business Benefits */}
          <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Activity className="h-6 w-6 text-blue-600 mr-2" />
              Business Benefits
            </h3>
            <ul className="space-y-3 text-gray-800 text-base md:text-lg">
              <li>• Reduced operational friction and manual handoffs</li>
              <li>• Faster and more reliable decision-making with unified data</li>
              <li>• Lower costs through automation and process optimization</li>
              <li>• Stronger alignment between business, IT, and operations</li>
              <li>• Improved customer and employee experience</li>
              <li>• Scalable foundation for future innovation and new services</li>
            </ul>
          </div>
        </AnimatedSection>

        {/* TECHNICAL SPECS */}
        <AnimatedSection className="mb-16">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
              <Network className="h-6 w-6 text-purple-300 mr-2" />
              Technical Specifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <ul className="space-y-2">
                <li>• API-first approach for system and platform integration</li>
                <li>• Support for event-driven architectures and data streaming</li>
                <li>• Connectors for databases, ERPs, CRMs, and custom systems</li>
                <li>• Role-based access and audit logging for transformation tools</li>
              </ul>
              <ul className="space-y-2">
                <li>• Integration with analytics, BI, and data warehouse solutions</li>
                <li>• Monitoring of process KPIs and automation health</li>
                <li>• Cloud-native and hybrid deployment options</li>
                <li>• Extensible architecture for new capabilities and integrations</li>
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
            PhysiDigital™ follows a clear, iterative journey that balances strategy, delivery,
            and adoption — ensuring that transformation is both technically sound and embraced
            by people.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery & Mapping',
                text: 'Understand current processes, systems, and pain points across the organization.',
              },
              {
                step: '02',
                title: 'Blueprint & Design',
                text: 'Define target-state architecture, integrations, and automation opportunities.',
              },
              {
                step: '03',
                title: 'Build & Deploy',
                text: 'Implement solutions, integrate systems, and migrate workflows in phases.',
              },
              {
                step: '04',
                title: 'Adopt & Evolve',
                text: 'Measure impact, refine, and expand the transformation across new areas.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center"
              >
                <div className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold mb-3">
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Accelerate Your Digital Transformation?
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
              Let&apos;s discuss how PhysiDigital™ can help your organization connect physical
              operations and digital ecosystems with clarity and impact.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 rounded-xl hover:bg-gray-100 transition-colors font-semibold shadow-md"
            >
              Talk to Paulo About PhysiDigital™
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
