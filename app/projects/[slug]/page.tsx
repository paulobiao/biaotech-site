import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudy from '@/components/case-study'
import { getProject, primaryProjects } from '@/lib/projects-data'

export const dynamicParams = false

export function generateStaticParams() {
  return primaryProjects.map((p) => ({ slug: p.slug }))
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
