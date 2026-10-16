import type { Metadata } from 'next'
import ProjectHeader from '@/components/project-header'
import CameraFleetBody from '@/components/sections/camera-fleet-body'
import { getProject } from '@/lib/projects-data'

export const metadata: Metadata = {
  title: 'Camera Fleet Monitor — Cloud-based IP Camera Fleet Monitoring',
  description:
    'A lab experiment applying field experience with physical security hardware to cloud architecture and telemetry design.',
}

export default function CameraFleetMonitorPage() {
  const project = getProject('camera-fleet-monitor')!
  return (
    <div>
      <ProjectHeader project={project} />
      <CameraFleetBody />
    </div>
  )
}
