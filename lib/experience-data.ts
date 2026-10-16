import type { Capability } from '@/components/capability-card'

export const experienceStages: Capability[] = [
  {
    id: 'field',
    icon: 'Camera',
    label: 'Field',
    stat: '10+ Years · Physical security operations',
    description:
      'Over a decade installing, configuring and maintaining CCTV, alarm and monitoring infrastructure for bank branches, retail and corporate sites across Brazil — network configuration, remote monitoring, fault diagnosis and equipment integration. This is where I learned how distributed equipment actually fails in the real world.',
    tags: ['CCTV', 'Alarms', 'Access Control'],
    accent: '#7ea7e6',
  },
  {
    id: 'systems',
    icon: 'Network',
    label: 'Systems',
    stat: '2018–2021 · Integration engineering',
    description:
      'Connecting physical devices to networks — troubleshooting where a camera, a recorder and a network switch all have to agree with each other. It is where I started thinking about device reliability as a systems problem, not a hardware problem.',
    tags: ['Networking', 'Integration', 'Middleware'],
    accent: '#a18ff2',
  },
  {
    id: 'software',
    icon: 'Code2',
    label: 'Software',
    stat: 'Estácio · Systems Analysis & Development, 2017–2020',
    description:
      'A technology degree, followed by hands-on backend work: REST APIs, PostgreSQL, Docker, CI/CD and deployment on AWS. The field experience gave me the questions; this gave me the tools to answer them in software.',
    tags: ['REST APIs', 'PostgreSQL', 'Docker', 'CI/CD'],
    accent: '#4d8dff',
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    label: 'Cloud',
    stat: 'PUC Minas · Cloud Computing postgraduate · completed Aug 2026, certified Oct 2026',
    description:
      'Solution architecture, distributed systems, scalability, containerization, automation, IT governance and information security. My work now sits at the intersection of both worlds: cloud architecture applied to the reliability of distributed devices.',
    tags: ['Cloud Architecture', 'Distributed Systems', 'Containerization'],
    accent: '#3cc7df',
  },
  {
    id: 'intelligence',
    icon: 'Radar',
    label: 'Intelligent Infrastructure',
    stat: '2024 — Present · Platform engineering',
    description:
      'Building the BiaoTech API — a production backend on AWS EC2 — and PSOP, a lab-validated platform for cloud-based health monitoring of IP camera fleets. The same problem I spent a decade solving by hand in the field, now approached as software.',
    tags: ['Observability', 'Telemetry', 'AWS'],
    accent: '#3fcf9f',
  },
]
