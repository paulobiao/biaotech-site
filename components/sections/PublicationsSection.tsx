'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PublicationsSection() {
  const publications = [
    {
      title: "SecureBank™: A Foundation for the Next Generation of Financial-Sector Security",
      platform: "DIO.me – Technology Articles",
      year: "2025",
      link: "https://web.dio.me/articles/securebanktm-como-base-para-a-proxima-geracao-de-seguranca-no-setor-financeiro-329e8a3f84d9",
      summary:
        "A technical exploration of the rising complexity of modern financial infrastructures and how the SecureBank™ Architecture introduces a scalable, resilient, and Zero-Trust-based framework tailored for next-generation banking security.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Publications
        </motion.h2>

        <motion.p
          className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Research articles and technical writings that explore cybersecurity,
          modern digital architectures, secure-by-design engineering, and
          next-generation frameworks for banking and enterprise systems.
        </motion.p>

        {/* Articles List */}
        <div className="grid gap-10 md:grid-cols-1">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700 backdrop-blur-xl text-left shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {pub.title}
              </h3>

              <p className="text-sm text-slate-400 mb-3">
                {pub.platform} • {pub.year}
              </p>

              <p className="text-slate-300 mb-6 text-base leading-relaxed">
                {pub.summary}
              </p>

              <Link
                href={pub.link}
                target="_blank"
                className="inline-block text-blue-300 font-semibold hover:text-blue-200 transition underline underline-offset-4"
              >
                Read full article →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
