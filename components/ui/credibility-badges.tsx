'use client'

import { CheckCircle2, Award, Star, BookOpen } from 'lucide-react'

interface CredibilityBadgesProps {
  peerReviewed?: boolean
  doiIndexed?: boolean
  featured?: boolean
  academicPublished?: boolean
}

export function CredibilityBadges({
  peerReviewed = false,
  doiIndexed = false,
  featured = false,
  academicPublished = false,
}: CredibilityBadgesProps) {
  const badges = [
    {
      show: peerReviewed,
      icon: CheckCircle2,
      label: 'Peer Reviewed',
      color: 'bg-green-100 text-green-800',
    },
    {
      show: doiIndexed,
      icon: BookOpen,
      label: 'DOI Indexed',
      color: 'bg-blue-100 text-blue-800',
    },
    {
      show: featured,
      icon: Star,
      label: 'Featured',
      color: 'bg-yellow-100 text-yellow-800',
    },
    {
      show: academicPublished,
      icon: Award,
      label: 'Academic Published',
      color: 'bg-purple-100 text-purple-800',
    },
  ]

  const visibleBadges = badges.filter((b) => b.show)

  if (visibleBadges.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {visibleBadges.map((badge, index) => {
        const Icon = badge.icon
        return (
          <div
            key={index}
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${badge.color}`}
          >
            <Icon className="h-3 w-3" />
            {badge.label}
          </div>
        )
      })}
    </div>
  )
}
