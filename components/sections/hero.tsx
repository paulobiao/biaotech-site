'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Heart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/animated-section'

const heroFrameworks = [
  {
    icon: Shield,
    label: 'SecureBank™',
    href: '/frameworks/securebank',
    colorClasses:
      'bg-blue-500/15 text-blue-100 ring-blue-300/40 hover:bg-blue-500/25',
  },
  {
    icon: Heart,
    label: 'HealthGuard™',
    href: '/frameworks/healthguard',
    colorClasses:
      'bg-emerald-500/15 text-emerald-100 ring-emerald-300/40 hover:bg-emerald-500/25',
  },
  {
    icon: Zap,
    label: 'PhysiDigital™',
    href: '/frameworks/physi-digital',
    colorClasses:
      'bg-purple-500/15 text-purple-100 ring-purple-300/40 hover:bg-purple-500/25',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-50">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content - Asymmetric Layout */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text & CTA */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 backdrop-blur-sm w-fit"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Innovation in Security & Digital Transformation</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Frameworks for Extraordinary Security</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
                Innovative security architectures designed to protect critical infrastructures. SecureBank™, HealthGuard™, and PhysiDigital™ deliver Zero Trust security aligned with NIST, ISO 27001, and industry standards.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 py-8"
            >
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-400">25+</div>
                <div className="text-sm text-slate-400">Years in Technology</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400">3</div>
                <div className="text-sm text-slate-400">Core Frameworks</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-400">25+</div>
                <div className="text-sm text-slate-400">Publications</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/frameworks"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Explore Frameworks
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-slate-400 hover:border-slate-300 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-slate-700/50 backdrop-blur-sm"
              >
                About Me
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Floating Card with Gradient Border */}
            <div className="relative">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              
              {/* Card Content */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                <div className="space-y-6">
                  {/* Framework Cards */}
                  {heroFrameworks.map((framework, index) => {
                    const Icon = framework.icon
                    return (
                      <motion.div
                        key={framework.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="group"
                      >
                        <Link
                          href={framework.href}
                          className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${framework.colorClasses} border border-current/20 hover:border-current/40`}
                        >
                          <div className="p-3 rounded-lg bg-current/10 group-hover:bg-current/20 transition-colors">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white">{framework.label}</div>
                            <div className="text-sm opacity-75">Discover more</div>
                          </div>
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Mobile Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:hidden space-y-4"
        >
          {heroFrameworks.map((framework) => {
            const Icon = framework.icon
            return (
              <Link
                key={framework.label}
                href={framework.href}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${framework.colorClasses} border border-current/20 hover:border-current/40`}
              >
                <Icon className="w-6 h-6" />
                <span className="font-semibold">{framework.label}</span>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </Link>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
