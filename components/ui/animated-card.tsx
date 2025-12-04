'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
  featured?: boolean
}

export function AnimatedCard({
  children,
  delay = 0,
  className = '',
  featured = false,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      className={`${className} ${
        featured
          ? 'relative bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-400 hover:border-blue-500 group'
          : 'relative bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-300 hover:border-blue-400 group'
      }`}
    >
      {children}
    </motion.div>
  )
}
