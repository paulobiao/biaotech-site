import type { Metadata } from 'next'
import PsopBody from '@/components/sections/psop-body'
import { getProject } from '@/lib/projects-data'

const project = getProject('psop')!

export const metadata: Metadata = {
  title: `${project.name} — ${project.fullName}`,
  description: project.description,
  openGraph: project.cover ? { images: [project.cover.src] } : undefined,
}

/** PSOP has its own case study (evidence model, status matrix, CI); other primary projects use /projects/[slug]. */
export default function PsopPage() {
  return <PsopBody project={project} />
}
