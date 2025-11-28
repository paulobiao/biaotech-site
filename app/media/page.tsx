import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Media & Press',
  description:
    "Selected news articles and media features highlighting Paulo Fernandes Bião's work in cybersecurity, banking security, and digital transformation.",
}

type MediaItem = {
  title: string
  outlet: string
  year: string
  language: string
  summary: string
  link: string
}

const mediaItems: MediaItem[] = [
  {
    title:
      'Leadership in Cybersecurity: Paulo Fernandes Bião, the Specialist Protecting the Future of Financial Institutions',
    outlet: 'PicNews',
    year: '2020',
    language: 'Portuguese (BR)',
    summary:
      'News article highlighting Paulo Fernandes Bião’s leadership in large-scale security projects for major Brazilian financial institutions.',
    link: 'https://exemplo.com/picnews-artigo', // TODO: troque pelo link real
  },
  {
    title:
      'Paulo Fernandes Bião: The Cybersecurity Expert Who Is Revolutionizing Data Protection',
    outlet: 'Celefu Notícias',
    year: '2023',
    language: 'Portuguese (BR)',
    summary:
      'Profile article presenting Paulo Fernandes Bião as a reference in cybersecurity and data protection, featuring the SecureBank™, HealthGuard™ and PhysiDigital™ frameworks.',
    link: 'https://exemplo.com/celefu-artigo', // TODO: troque pelo link real
  },
  {
    title:
      'Behind the Scenes of Banking Security: How Paulo Fernandes Bião Worked on Systems that Protect Large-Scale Financial Operations',
    outlet: 'Agência Informa',
    year: '2025',
    language: 'Portuguese (BR)',
    summary:
      'Article focusing on the “behind the scenes” of large-scale banking security, detailing Paulo’s work with CCTV, alarms and integrated protection platforms.',
    link: 'https://exemplo.com/agencia-artigo', // TODO
  },
  {
    title:
      'From Electronic Security to Advanced Architectures: How Paulo Bião Connects the Physical and Digital Worlds in the Era of Mega Cyber Attacks',
    outlet: 'PautaPop – Faixa Cultural',
    year: '2025',
    language: 'Portuguese (BR)',
    summary:
      'Feature article showing the evolution from electronic security to advanced cyber architectures, highlighting frameworks such as SecureBank™, HealthGuard™ and PhysiDigital™.',
    link: 'https://exemplo.com/pautapop-artigo', // TODO
  },
]

export default function MediaPage() {
  return (
    <div className="min-h-screen py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Media &amp; Press
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Selected news articles and media features highlighting Paulo Fernandes Bião&apos;s
            work in cybersecurity, banking security, and data protection.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {mediaItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-7 hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <div className="flex flex-wrap items-center text-xs text-gray-500 gap-2 mb-3">
                <span className="font-medium text-blue-600">{item.outlet}</span>
                <span>•</span>
                <span>{item.year}</span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded-full bg-gray-100">
                  {item.language}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-4">{item.summary}</p>

              <Link
                href={item.link}
                target="_blank"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Read full article
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
