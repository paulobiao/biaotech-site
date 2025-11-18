
'use client'

import Link from 'next/link'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

export default function ContactCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 h-32 w-32 border border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 h-24 w-24 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 h-16 w-16 border border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <MessageCircle className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Organization?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover how SecureBank™, HealthGuard™, and PhysiDigital™ frameworks can 
                address your organization's challenges and drive innovation forward.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Start a Conversation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <Link 
                  href="/frameworks"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all font-semibold text-lg"
                >
                  Explore Frameworks
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
