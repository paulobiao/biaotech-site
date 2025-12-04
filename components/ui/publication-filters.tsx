'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface PublicationFiltersProps {
  categories: string[]
  platforms: string[]
  onCategoryChange: (category: string | null) => void
  onPlatformChange: (platform: string | null) => void
  selectedCategory: string | null
  selectedPlatform: string | null
}

export function PublicationFilters({
  categories,
  platforms,
  onCategoryChange,
  onPlatformChange,
  selectedCategory,
  selectedPlatform,
}: PublicationFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)

  const hasActiveFilters = selectedCategory || selectedPlatform

  return (
    <div className="mb-8">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        🔍 Filter Publications
        {hasActiveFilters && (
          <span className="ml-2 px-2 py-1 bg-blue-800 rounded-full text-xs font-bold">
            {(selectedCategory ? 1 : 0) + (selectedPlatform ? 1 : 0)}
          </span>
        )}
      </button>

      {showFilters && (
        <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Category Filter */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">By Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => onCategoryChange(null)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    !selectedCategory
                      ? 'bg-blue-100 text-blue-900 font-medium'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      onCategoryChange(selectedCategory === category ? null : category)
                    }
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-900 font-medium'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Filter */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">By Platform</h3>
              <div className="space-y-2">
                <button
                  onClick={() => onPlatformChange(null)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    !selectedPlatform
                      ? 'bg-blue-100 text-blue-900 font-medium'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  All Platforms
                </button>
                {platforms.map((platform) => (
                  <button
                    key={platform}
                    onClick={() =>
                      onPlatformChange(selectedPlatform === platform ? null : platform)
                    }
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedPlatform === platform
                        ? 'bg-blue-100 text-blue-900 font-medium'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {selectedCategory && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    <span>Category: {selectedCategory}</span>
                    <button
                      onClick={() => onCategoryChange(null)}
                      className="hover:text-blue-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                {selectedPlatform && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    <span>Platform: {selectedPlatform}</span>
                    <button
                      onClick={() => onPlatformChange(null)}
                      className="hover:text-blue-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
