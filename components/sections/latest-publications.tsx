'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

interface Publication {
  title: string
  platform: string
  year: string
  category: string
  link?: string
}

interface LatestPublicationsProps {
  publications: Publication[]
}

export function LatestPublications({ publications }: LatestPublicationsProps) {
  const latestPubs = publications.slice(0, 3)

  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full mb-4">
            <BookOpen className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Latest Publications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Academic Work
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover the latest publications and research from Paulo Fernandes Biao in
            cybersecurity, banking security, and digital transformation.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {latestPubs.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-blue-500 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-t-xl" />

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-white leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {pub.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded">
                    {pub.platform}
                  </span>
                  <span className="px-2 py-1 bg-slate-600 text-slate-300 text-xs font-semibold rounded">
                    {pub.year}
                  </span>
                </div>

                <p className="text-sm text-slate-400">{pub.category}</p>

                {/* Link */}
                {pub.link && (
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors pt-2"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
          >
            View All Publications
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}
