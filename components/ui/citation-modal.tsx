'use client'

import { useState } from 'react'
import { Copy, Check, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CitationModalProps {
  title: string
  authors: string
  year: string
  doi?: string
  journal?: string
  onClose: () => void
}

export function CitationModal({
  title,
  authors,
  year,
  doi,
  journal,
  onClose,
}: CitationModalProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null)

  const citations = {
    apa: `${authors} (${year}). ${title}. ${journal || 'Academic Repository'}.${doi ? ` https://doi.org/${doi.split('/').pop()}` : ''}`,
    mla: `${authors}. "${title}." ${journal || 'Academic Repository'}, ${year}.${doi ? ` DOI: ${doi}` : ''}`,
    chicago: `${authors}. "${title}." ${journal || 'Academic Repository'} (${year}).${doi ? ` Accessed via ${doi}` : ''}`,
    harvard: `${authors}, ${year}. ${title}. ${journal || 'Academic Repository'}.${doi ? ` Available at: ${doi}` : ''}`,
    vancouver: `${authors}. ${title}. ${journal || 'Academic Repository'}. ${year}.${doi ? ` doi: ${doi}` : ''}`,
    ieee: `[1] ${authors}, "${title}," ${journal || 'Academic Repository'}, ${year}.${doi ? ` doi: ${doi}` : ''}`,
    bibtex: `@article{${year.toLowerCase()}${authors.split(' ')[0].toLowerCase()},
  title={${title}},
  author={${authors}},
  year={${year}},
  journal={${journal || 'Academic Repository'}}${doi ? `,\n  doi={${doi}}` : ''}
}`,
  }

  const handleCopy = (format: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedFormat(format)
    setTimeout(() => setCopiedFormat(null), 2000)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Cite This Work</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Citation Formats */}
          <div className="space-y-6">
            {Object.entries(citations).map(([format, citation]) => (
              <div key={format} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                    {format}
                  </label>
                  <button
                    onClick={() => handleCopy(format, citation)}
                    className="flex items-center gap-2 px-3 py-1 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors"
                  >
                    {copiedFormat === format ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-sm text-slate-300 font-mono leading-relaxed whitespace-pre-wrap break-words">
                    {citation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <p className="text-xs text-slate-400">
              Select the citation format that best suits your academic or professional work.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
