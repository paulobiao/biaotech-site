'use client'

import { Server, ArrowRight, ExternalLink, GitBranch, CheckCircle2, Star, LayoutDashboard } from 'lucide-react'
import { motion } from 'framer-motion'

type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  liveUrl: string
  docsUrl?: string
  githubUrl: string
  liveLabel: string
  stack: string[]
  features: string[]
  gradient: string
  status: string
  icon: React.ElementType
}

const projects: Project[] = [
  {
    id: 'biaotech-api',
    title: 'BiaoTech API',
    subtitle: 'Production Backend · REST API · AWS EC2',
    description:
      'Production-ready REST API deployed on AWS EC2 with automated CI/CD via GitHub Actions, HTTPS on a custom domain, JWT authentication, containerized infrastructure using Docker and PostgreSQL, and live Swagger documentation.',
    liveUrl: 'https://api.biaotech.dev/api/health',
    docsUrl: 'https://api.biaotech.dev/api/docs',
    githubUrl: 'https://github.com/paulobiao',
    liveLabel: 'Live API',
    stack: ['Node.js', 'PostgreSQL', 'Docker', 'AWS EC2', 'Nginx', 'JWT', 'GitHub Actions', 'TypeScript'],
    features: [
      'Live HTTPS API on custom domain (api.biaotech.dev)',
      'Automated CI/CD pipeline with GitHub Actions',
      'JWT authentication & protected routes',
      'Interactive Swagger docs at /api/docs',
    ],
    gradient: 'from-cyan-600 to-blue-600',
    status: 'Live',
    icon: Server,
  },
  {
    id: 'biaotech-dashboard',
    title: 'BiaoTech Admin Dashboard',
    subtitle: 'Fullstack Application · React · AWS',
    description:
      'Production fullstack application with a secure admin dashboard. Features JWT authentication with automatic token refresh, role-based access control (RBAC) separating read-only and admin users, and a React + TypeScript frontend served over HTTPS. Connects to the BiaoTech API backend.',
    liveUrl: 'https://app.biaotech.dev',
    githubUrl: 'https://github.com/paulobiao/biaotech-api',
    liveLabel: 'Live Demo',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'JWT', 'Vite', 'AWS EC2', 'Nginx'],
    features: [
      'Live application over HTTPS at app.biaotech.dev',
      'JWT authentication with automatic token refresh',
      'Role-based access control (RBAC): demo and admin roles',
      'React + TypeScript + Tailwind frontend',
    ],
    gradient: 'from-violet-600 to-purple-600',
    status: 'Live',
    icon: LayoutDashboard,
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

      <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-700/60 hover:border-cyan-600/40 transition-all duration-300 overflow-hidden">
        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-3xl font-black text-white">{project.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.status}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                </div>
                <p className="text-slate-400 text-sm mt-0.5">{project.subtitle}</p>
              </div>
            </div>
          </div>

          <p className="text-slate-300 text-base leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-500 text-slate-200 hover:border-white hover:text-white hover:bg-slate-700/50 transition-all font-semibold text-sm"
            >
              <GitBranch className="w-4 h-4" />
              View GitHub
            </a>
            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/60 text-blue-300 hover:border-blue-400 hover:text-blue-200 hover:bg-blue-500/10 transition-all font-semibold text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Swagger Docs
              </a>
            )}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm hover:opacity-90 transition-all shadow-md`}
            >
              {project.liveLabel}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-slate-700/50">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Highlights</h4>
              <div className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-slate-700/80 text-slate-300 border border-slate-600/50 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function LiveProjects() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/8 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
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

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
