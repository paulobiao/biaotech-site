'use client'

import { ExternalLink } from 'lucide-react'

interface ViewPaperButtonProps {
  title: string
  link?: string
}

export default function ViewPaperButton({ title, link }: ViewPaperButtonProps) {
  const handleClick = () => {
    if (!link) {
      alert(`Paper link not available yet for "${title}".`)
      return
    }

    // English warning message
    alert(
      "This publication is hosted on the DIO.me platform.\n\nTo access the full article, you must be logged in (free account).\n\nAfter logging in, the paper will open normally."
    )

    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full text-sm font-medium transition-colors"
    >
      <ExternalLink className="h-4 w-4 mr-2" />
      View Paper
    </button>
  )
}
