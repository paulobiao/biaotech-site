'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/animated-section'

const heroFrameworks = [
  {
    icon: Shield,
    label: 'SecureBank™',
    href: '/frameworks/securebank',
    colorClasses: 'bg-blue-500/15 text-blue-100 ring-blue-300/40 hover:bg-blue-500/25',
  },
  {
    icon: Heart,
    label: 'HealthGuard™',
    href: '/frameworks/healthguard',
    colorClasses: 'bg-emerald-500/15 text-emerald-100 ring-emerald-300/40 hover:bg-emerald-500/25',
  },
  {
    icon: Zap,
    label: 'PhysiDigital™',
    href: '/frameworks/physi-digital',
    colorClasses: 'bg-purple-500/15 text-purple-100 ring-purple-300/40 hover:bg-purple-500/25',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photo-1498050108023-c5249f4df085.avif" // imagem em /public
          alt="Professional technology background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay azul escuro translúcido para destacar texto */}
        <div className="absolute inset-0 bg-blue-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl text-center text-white">
        <AnimatedSection>
          {/* Pill de contexto */}
          <motion.div
            className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 text-xs font-medium tracking-wide uppercase mb-6 border border-white/15 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Technology Innovation • Security • Digital Transformation
          </motion.div>

          {/* Título */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Innovation in
            <span className="block text-blue-200">
              Technology Frameworks
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Paulo Fernandes Bião designs next-generation security and digital transformation
            frameworks that solve critical challenges in banking, healthcare, and enterprise
            systems. By combining deep technical expertise with strategic vision, he delivers
            resilient, scalable, and future-ready solutions.
          </motion.p>

          {/* Framework Icons – 1 de cada cor + clicáveis */}
          <motion.div
            className="mt-10 mb-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {heroFrameworks.map(({ icon: Icon, label, href, colorClasses }) => (
              <Link key={label} href={href} className="group">
                <motion.div
                  whileHover={{ scale: 1.07, y: -2 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <div
                    className={`
                      h-16 w-16 rounded-full flex items-center justify-center mb-2
                      border border-white/25 ring-2 ring-offset-0 ring-offset-transparent
                      backdrop-blur-sm transition-all duration-300
                      ${colorClasses}
                    `}
                  >
                    <Icon className="h-8 w-8 text-current" />
                  </div>
                  <span className="text-sm font-medium text-blue-50 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              href="/frameworks"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition duration-300 font-semibold text-lg"
            >
              Explore Frameworks
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition duration-300 font-semibold text-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
