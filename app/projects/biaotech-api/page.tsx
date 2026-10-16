import type { Metadata } from 'next'
import ProjectHeader from '@/components/project-header'
import BiaotechBody from '@/components/sections/biaotech-body'
import { getProject } from '@/lib/projects-data'

export const metadata: Metadata = {
  title: 'BiaoTech API — Production REST API & Cloud Infrastructure',
  description:
    'A production REST API deployed on AWS EC2 with automated CI/CD, JWT authentication and live Swagger documentation.',
}

export default function BiaotechApiPage() {
  const project = getProject('biaotech-api')!
  return (
    <div>
      <ProjectHeader project={project} />
      <BiaotechBody />
    </div>
  )
}
