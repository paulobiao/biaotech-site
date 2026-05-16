'use client'

import Link from 'next/link'
import { Server, ArrowRight, ExternalLink, GitBranch, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 'biaotech-api',
    title: 'BiaoTech API',
    subtitle: 'Production Backend Project',
    description:
      'Production-ready REST API deployed on AWS EC2 with automated CI/CD, HTTPS, JWT authentication, and containerized infrastructure using Docker and PostgreSQL.',
    liveUrl: 'https://api.biaotech.dev/api/health',
    docsUrl: 'https://api.biaotech.dev/api/docs',
    githubUrl: 'https://github.com/paulobiao/aws-ec2-nginx-deploy',
    stack: ['Node.js', 'PostgreSQL', 'Docker', 'AWS EC2', 'Nginx', 'GitHub Actions', 'JWT', 'TypeScript'],
    features: [
      'Live API with HTTPS on custom domain',
      'Automated CI/CD with GitHub Actions',
      'JWT authentication & protected routes',
      'Swagger documentation at /api/docs',
    ],
    gradient: 'from-cyan-600 to-blue-600',
    status: 'Live',
  },
]

export default function LiveProjects() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/8 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Live
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real projects deployed in production — not just code, but running infrastructure.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />

              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-black text-white">{project.title}</h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          ● {project.status}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-all text-sm font-medium"
                    >
                      <GitBranch className="w-4 h-4" />
                      GitHub
                    </Link>
                    <Link
                      href={project.docsUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-all text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Swagger Docs
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm hover:opacity-90 transition-all`}
                    >
                      Live API
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6 pt-6 border-t border-slate-700/50">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-slate-700/80 text-slate-300 border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}