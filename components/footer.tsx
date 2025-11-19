import Link from 'next/link'
import { Mail, Globe, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Paulo Fernandes Bião</h3>
            <p className="text-gray-400 mb-4">
              Innovation in technology frameworks for banking security, healthcare protection, 
              and digital transformation.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Globe className="h-4 w-4" />
              <span className="text-sm">Professional Portfolio</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/frameworks" className="block text-gray-400 hover:text-white transition-colors">
                Frameworks
              </Link>
              <Link href="/publications" className="block text-gray-400 hover:text-white transition-colors">
                Publications
              </Link>
            </nav>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">

              {/* Contact link */}
              <Link 
                href="/contact" 
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </Link>

              <Link 
                href="/testimonials"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Testimonials
              </Link>

              {/* GitHub */}
              <a 
                href="https://github.com/paulobiao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/paulobiao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Paulo Fernandes Bião. Professional Portfolio.
          </p>
        </div>
      </div>
    </footer>
  )
}
