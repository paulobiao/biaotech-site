import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudy from '@/components/case-study'
import { getProject, primaryProjects } from '@/lib/projects-data'

export const dynamicParams = false

// Projects with a dedicated route (app/projects/<slug>/page.tsx) are excluded here.
const dedicatedPages = new Set(['psop'])

export function generateStaticParams() {
  return primaryProjects.filter((p) => !dedicatedPages.has(p.slug)).map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: `${project.name} — ${project.fullName}`,
    description: project.description,
    openGraph: project.cover ? { images: [project.cover.src] } : undefined,
  }
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project?.primary) notFound()
  return <CaseStudy project={project} />
}
