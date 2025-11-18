
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, BookOpen, Users } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

export default function AboutPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection>
          <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
            style={{
              background: "#ffffff",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            <Image
              src="/paulo.jpg"
              alt="Paulo Fernandes Bião"
              fill
              className="object-contain"
              priority
            />
          </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Paulo Fernandes Bião
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A distinguished technology innovator and academic leader dedicated to developing 
              revolutionary frameworks that address critical challenges in banking security, 
              healthcare protection, and digital transformation.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With extensive expertise in developing comprehensive solutions, Paulo has positioned 
              himself as a thought leader in the intersection of technology, security, and innovation.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">25+</div>
                <div className="text-sm text-gray-600">Publications</div>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Collaborations</div>
              </div>
            </div>

            {/* CTA */}
            <Link 
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
            >
              Learn More About Paulo
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
