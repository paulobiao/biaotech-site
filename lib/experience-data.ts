import type { Capability } from '@/components/capability-card'

export const experienceStages: Capability[] = [
  {
    id: 'field',
    icon: 'Camera',
    label: 'Physical Security',
    stat: '2005–2020 · Electronic security systems, Brazil',
    description:
      'Fifteen years installing, configuring and supporting electronic security systems in Brazil — CCTV, alarms and monitoring for bank branches, retail and corporate sites. This is where I learned how distributed equipment actually fails, and what it costs when a recording is not there when someone needs it.',
    tags: ['CCTV', 'Alarms & Monitoring', 'Banking Environments'],
    accent: '#7ea7e6',
  },
  {
    id: 'systems',
    icon: 'Network',
    label: 'Systems',
    stat: 'Within the same field work · Networked security systems',
    description:
      'Much of that work was systems work: getting cameras, recorders, alarm panels and network equipment to communicate over IP and GPRS links, configuring them remotely and diagnosing failures between them. It is where I started treating device reliability as a systems problem, not a hardware problem.',
    tags: ['IP Networking', 'GPRS', 'Remote Configuration'],
    accent: '#a18ff2',
  },
  {
    id: 'software',
    icon: 'Code2',
    label: 'Software',
    stat: 'Estácio · Technology degree in Systems Analysis & Development, 2017–2020',
    description:
      'A technology degree, followed by hands-on backend work: REST APIs, PostgreSQL, automated testing and CI/CD. The field experience gave me the questions; this gave me the tools to answer them in software.',
    tags: ['REST APIs', 'PostgreSQL', 'Testing', 'CI/CD'],
    accent: '#4d8dff',
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    label: 'Cloud',
    stat: 'PUC Minas · Postgraduate specialization in Cloud Computing, completed August 2026',
    description:
      'Solution architecture, distributed systems, scalability, containerization, automation, IT governance and information security — applied through a historically deployed AWS EC2 API with CI/CD, alongside a Terraform-defined AWS architecture validated without deployment.',
    tags: ['Cloud Architecture', 'Distributed Systems', 'AWS'],
    accent: '#3cc7df',
  },
  {
    id: 'intelligence',
    icon: 'Radar',
    label: 'Intelligent Infrastructure',
    stat: '2025 — Present · Independent engineering projects',
    description:
      'PSOP, a lab-validated platform for operational evidence about cameras, recorders and the infrastructure behind them — the problem I spent fifteen years handling by hand in the field, now approached as software.',
    tags: ['Observability', 'Telemetry', 'Evidence'],
    accent: '#3fcf9f',
  },
]

/** One-line labels for the compact Engineering Journey (same stages, same order). */
export const journeySummary: Record<string, string> = {
  field: 'CCTV, alarms and monitoring for banking sites in Brazil',
  systems: 'Networked devices, remote configuration, IP and GPRS links',
  software: 'Technology degree, REST APIs, testing and CI/CD',
  cloud: 'Postgraduate specialization, AWS deployment, Terraform design',
  intelligence: 'PSOP — operational evidence for physical infrastructure',
}
