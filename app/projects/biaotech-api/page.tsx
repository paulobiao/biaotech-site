import type { Metadata } from 'next'
import BiaotechBody from '@/components/sections/biaotech-body'
import { getProject } from '@/lib/projects-data'

export const metadata: Metadata = {
  title: 'BiaoTech API — Cloud-Deployed REST API & CI/CD',
  description:
    'Case study: a TypeScript/Express REST API with JWT auth, RBAC and PostgreSQL, tested in CI and deployed to AWS EC2 through GitHub Actions.',
}

/** Uses its own hero (architecture visual) instead of the shared ProjectHeader. */
export default function BiaotechApiPage() {
  return <BiaotechBody project={getProject('biaotech-api')!} />
}
