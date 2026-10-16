'use client'

import ProjectCard from '@/components/project-card'
import { projectVisualComponents } from '@/components/project-visuals'
import { labProjects, type Project } from '@/lib/projects-data'

export default function ProjectGrid({ items = labProjects }: { items?: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {items.map((project, i) => {
        const Visual = projectVisualComponents[project.slug]
        return (
          <ProjectCard
            key={project.slug}
            project={project}
            visual={<Visual />}
            index={i}
          />
        )
      })}
    </div>
  )
}
