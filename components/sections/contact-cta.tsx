
'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Download } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

export default function ContactCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 h-32 w-32 border border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 h-24 w-24 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 h-16 w-16 border border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                Available for new opportunities
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Open to US Opportunities
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Available for remote cloud &amp; security roles. Let&apos;s talk.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get in Touch
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <a
                  href="/Paulo_Fernandes_Biao_Resume.pdf"
                  download
                  className="inline-flex items-center px-8 py-4 border border-slate-500 text-slate-200 rounded-xl hover:border-white hover:text-white transition-all font-semibold text-lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
