
import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Quote } from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Professional endorsements and testimonials for Paulo Fernandes Bião.',
}

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Chief Technology Officer',
    organization: 'SecureFinancial Solutions',
    content: 'Paulo\'s SecureBank™ framework has revolutionized our approach to banking security. The comprehensive nature of the solution and its practical implementation has significantly enhanced our security posture while maintaining operational efficiency.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    title: 'Director of Healthcare IT',
    organization: 'Metropolitan Health System',
    content: 'The HealthGuard™ framework implemented by Paulo has been instrumental in protecting our patient data while ensuring compliance with healthcare regulations. His expertise in healthcare technology is unparalleled.',
    rating: 5
  },
  {
    name: 'Dr. Elena Rodriguez',
    title: 'VP of Digital Transformation',
    organization: 'Global Enterprise Solutions',
    content: 'Paulo\'s PhysiDigital™ methodology provided us with a clear roadmap for our digital transformation journey. His innovative approach bridged the gap between our physical operations and digital aspirations.',
    rating: 5
  },
  {
    name: 'Robert Williams',
    title: 'Chief Information Security Officer',
    organization: 'TechSecure Banking',
    content: 'Working with Paulo on implementing advanced security frameworks has been transformative for our organization. His deep understanding of both technical requirements and business needs is exceptional.',
    rating: 5
  },
  {
    name: 'Dr. Amanda Foster',
    title: 'Research Director',
    organization: 'Innovation Institute',
    content: 'Paulo\'s research contributions and practical implementations have advanced the field significantly. His ability to translate complex theoretical concepts into practical solutions is remarkable.',
    rating: 5
  },
  {
    name: 'James Martinez',
    title: 'CTO',
    organization: 'Digital Health Innovations',
    content: 'The collaboration with Paulo on healthcare protection systems has exceeded our expectations. His frameworks are not only technically sound but also highly practical for real-world implementation.',
    rating: 5
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <Quote className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What industry leaders and collaborators say about working with Paulo Fernandes Bião
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-blue-600/20 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>

                {/* Author */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-600 font-medium">{testimonial.title}</p>
                  <p className="text-gray-600 text-sm">{testimonial.organization}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Professional Recognition</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Professional Collaborations</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Industry Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Successful Implementations</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the growing list of satisfied clients and partners. Let's discuss how these 
              innovative frameworks can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-center">
                Start a Conversation
              </Link>
              <Link href="/frameworks" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-semibold text-center">
                View Case Studies
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
