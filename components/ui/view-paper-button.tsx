
'use client'

import { ExternalLink } from 'lucide-react'

interface ViewPaperButtonProps {
  title: string
}

export default function ViewPaperButton({ title }: ViewPaperButtonProps) {
  const handleClick = () => {
    alert(`Paper access requires academic credentials. Please contact for more information about "${title}".`)
  }

  return (
    <button 
      onClick={handleClick}
      className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
    >
      <ExternalLink className="h-4 w-4 mr-2" />
      View Paper
    </button>
  )
}
