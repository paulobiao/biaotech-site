'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Shield, Heart, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/animated-section'

const frameworks = [
  {
    id: 'securebank',
    title: 'SecureBank™',
    subtitle: 'Banking Security Framework',
    description:
      'Multi-layered security framework that protects digital banking channels and core financial systems, simplifying regulatory compliance and operational risk management.',
    image: 'https://static.abacusaicdn.net/images/cf8680fd-15e7-42fa-bdc1-8ba5d8e97589.jpg',
    icon: Shield,
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-600',
    features: [
      'Zero Trust Architecture for digital banking',
      'Real-time detection with adaptive AI',
      'Regulatory compliance automation',
      'NIST & PCI-DSS Alignment',
    ],
  },
  {
    id: 'healthguard',
    title: 'HealthGuard™',
    subtitle: 'Healthcare Protection System',
    description:
      'Protects patient data, clinical systems, and healthcare workflows with an architecture designed for privacy, availability, and regulatory-grade protection.',
    image: 'https://static.abacusaicdn.net/images/c5a74abb-b427-4ace-9178-81d5d432e1d6.jpg',
    icon: Heart,
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-600',
    features: [
      'End-to-end patient data protection',
      'Integrated HIPAA compliance',
      'Resilience for critical clinical operations',
      'Secure clinical interoperability',
    ],
  },
  {
    id: 'physi-digital',
    title: 'PhysiDigital™',
    subtitle: 'Digital Transformation Framework',
    description:
      'Connects physical operations and digital ecosystems through structured process mapping, integration, and automation to accelerate transformation with measurable impact.',
    image: 'https://static.abacusaicdn.net/images/d4efe466-ab21-4428-aaf8-5ba98b5a2fc6.jpg',
    icon: Zap,
    color: 'purple',
    gradient: 'from-purple-600 to-pink-600',
    features: [
      'End-to-end process and system integration',
      'Real-time analytics and performance visibility',
      'Automation of repetitive workflows',
      'Integrated cyber-physical security',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function FeaturedFrameworks() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Frameworks
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Three strategic frameworks designed to solve critical challenges in banking security, healthcare protection, and digital transformation.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {frameworks.map((framework, index) => {
            const Icon = framework.icon
            return (
              <motion.div
                key={framework.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${framework.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Card */}
                <Link href={`/frameworks/${framework.id}`}>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-slate-900/50">
                    {/* Top Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${framework.gradient} bg-opacity-10 border border-current/20 w-fit mb-6`}>
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-semibold">{framework.subtitle}</span>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-video mb-8 rounded-xl overflow-hidden bg-slate-700/50 border border-slate-600/50 group-hover:border-slate-500/50 transition-colors">
                      <Image
                        src={framework.image}
                        alt={framework.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40`} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl md:text-3xl font-black text-white mb-3 flex items-center gap-3 group-hover:text-transparent group-hover:bg-gradient-to-r ${framework.gradient} group-hover:bg-clip-text transition-all`}>
                      {framework.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 mb-8 leading-relaxed flex-grow">
                      {framework.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8 pt-6 border-t border-slate-700/50">
                      {framework.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r ${framework.gradient} text-white font-semibold group-hover:shadow-lg group-hover:shadow-slate-900/50 transition-all w-fit`}>
                      Explore Framework
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            href="/frameworks"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Frameworks
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
