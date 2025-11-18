
'use client'

import { Mail, MessageCircle, Globe, Clock } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Communication',
    description: 'Professional inquiries and detailed discussions',
    action: 'Send an email',
    color: 'blue'
  },
  {
    icon: MessageCircle,
    title: 'Project Collaboration',
    description: 'Framework implementation and consulting',
    action: 'Discuss your project',
    color: 'green'
  },
  {
    icon: Globe,
    title: 'Academic Partnerships',
    description: 'Research collaboration and academic initiatives',
    action: 'Explore partnerships',
    color: 'purple'
  }
]

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you're interested in implementing innovative frameworks, exploring research 
          collaborations, or discussing how these solutions can benefit your organization, 
          I'm here to help.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
            <div className="flex items-start">
              <div className={`h-12 w-12 bg-${method.color}-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                <method.icon className={`h-6 w-6 text-${method.color}-600`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <a href={`mailto:contact@example.com?subject=${encodeURIComponent(method.title)}`} className={`text-${method.color}-600 hover:text-${method.color}-800 font-medium text-sm`}>
                  {method.action} →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Response Time */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-center mb-3">
          <Clock className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
        </div>
        <p className="text-gray-700">
          I typically respond to professional inquiries within 24-48 hours during business days. 
          For urgent matters or time-sensitive projects, please indicate the priority in your message.
        </p>
      </div>

      {/* Areas of Interest */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas of Interest</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
            <span className="text-gray-700">Banking security framework implementation</span>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-green-600 rounded-full mr-3"></div>
            <span className="text-gray-700">Healthcare protection system consulting</span>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-purple-600 rounded-full mr-3"></div>
            <span className="text-gray-700">Digital transformation methodology</span>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-orange-600 rounded-full mr-3"></div>
            <span className="text-gray-700">Academic research collaboration</span>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></div>
            <span className="text-gray-700">Technology innovation partnerships</span>
          </div>
        </div>
      </div>
    </div>
  )
}
