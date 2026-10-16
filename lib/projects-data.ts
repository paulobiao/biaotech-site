export type ProjectStatus = {
  label: string
  tone: 'cyan' | 'blue' | 'violet' | 'emerald' | 'teal' | 'neutral'
}

export type GalleryImage = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export type CaseStudySection = {
  title: string
  body?: string[]
  points?: string[]
  /** Renders the project's gallery / technology list inside this section. */
  show?: 'gallery' | 'technologies'
}

export type Project = {
  slug: string
  number: string
  name: string
  /** Primary projects get a cover card and a data-driven case study at /projects/[slug]. */
  primary: boolean
  fullName: string
  category: string
  description: string
  /** Shorter line for compact previews; falls back to description. */
  teaser?: string
  tags: string[]
  status: ProjectStatus
  accent: string
  positioning?: string
  cover?: { src: string; alt: string; caption?: string }
  links?: { label: string; href: string }[]
  gallery?: GalleryImage[]
  sections?: CaseStudySection[]
}

export const toneColor: Record<ProjectStatus['tone'], string> = {
  cyan: '#22d3ee',
  blue: '#60a5fa',
  violet: '#7c5cff',
  emerald: '#34d399',
  teal: '#2dd4bf',
  neutral: '#94a3b8',
}

export const projects: Project[] = [
  {
    slug: 'psop',
    number: '01',
    name: 'PSOP',
    primary: true,
    fullName: 'Physical Security Observability Platform',
    category: 'Physical Security · Operational Observability',
    description:
      'Operational visibility for cameras, recorders and sites — keeping device connectivity, observed function and the freshness of each observation as separate, inspectable evidence.',
    positioning: 'Operational evidence for cameras, recorders and the infrastructure behind them.',
    tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Python', 'Turborepo'],
    status: { label: 'In development · Lab validated', tone: 'cyan' },
    accent: '#22d3ee',
    cover: {
      src: '/projects/psop-cover.png',
      alt: 'PSOP security operations dashboard showing fleet condition, operational priorities, a site topology of recorders and cameras, and an activity stream',
    },
    links: [{ label: 'GitHub', href: 'https://github.com/paulobiao/psop' }],
    gallery: [
      {
        src: '/psop/dashboard.png',
        alt: 'PSOP dashboard with device health, incidents and telemetry for the lab site',
        caption: 'Operations dashboard',
        width: 1694,
        height: 1294,
      },
      {
        src: '/psop/sessions.png',
        alt: 'PSOP administration view of user sessions and audit trail',
        caption: 'Sessions & audit trail',
        width: 1689,
        height: 1277,
      },
      {
        src: '/psop/login.png',
        alt: 'PSOP secure sign-in screen',
        caption: 'Authentication',
        width: 1614,
        height: 1279,
      },
    ],
    sections: [
      {
        title: 'Overview',
        body: [
          'PSOP is an operational observability platform for physical security infrastructure. It brings device telemetry, recorder channel observations and bounded stream measurements into an evidence-based view of how the system is actually operating.',
          'It starts with cameras and network video recorders. The longer-term direction is a vendor-neutral platform for heterogeneous physical infrastructure, with explicit provenance, asset relationships and incident analysis.',
        ],
      },
      {
        title: 'Problem',
        body: [
          'A camera or recorder can respond on the network without providing usable video. A stream session can be negotiated and still receive no video packets. A measurement that succeeded earlier can become too old to describe the current situation.',
          'Collapsing all of this into a single “online” indicator hides the difference between device connectivity and the function an operator actually depends on.',
        ],
      },
      {
        title: 'Approach',
        body: [
          'PSOP treats connectivity, observed function and freshness as separate signals, each with its own meaning. Every observation carries where it came from and how recent it is, so an operator can answer one practical question:',
          'What evidence do we have that this part of the security system is working — and how recent is that evidence?',
        ],
        points: [
          'Can the collector reach the device? — connectivity observations',
          'What does the recorder report about a channel? — recorder-reported observations',
          'Can a stream session be established? — RTSP negotiation outcome',
          'Did video packets arrive during the check? — bounded RTP packet measurement',
          'Is the observation still current? — observation time, expiration and freshness',
        ],
      },
      {
        title: 'System',
        body: ['Real screenshots from the PSOP dashboard running against the lab site.'],
        points: [
          'Heartbeat-based device health across sites and recorders',
          'Incident detection, alerting and an activity stream',
          'Role-based access, sessions and an audit trail',
        ],
        show: 'gallery',
      },
      {
        title: 'Architecture',
        body: [
          'Recorder telemetry adapters, direct ONVIF/RTSP probes and a periodic scheduler deliver evidence to the PSOP API, which persists it in an operational evidence ledger. The operator dashboard queries devices and evidence through the API.',
        ],
        points: [
          'Dashboard — React, TypeScript, Vite',
          'API — NestJS, TypeScript: device operations, authenticated ingestion, evidence queries',
          'Persistence — PostgreSQL, Prisma: device data and evidence ledger',
          'Gateways & probes — Python: device communication, stream checks, scheduling',
          'Workspace — pnpm, Turborepo',
        ],
      },
      { title: 'Technology', show: 'technologies' },
      {
        title: 'Current status',
        body: [
          'In active development with hardware-backed lab validation. Real recorder-mediated RTSP checks succeeded on three Hikvision channels through a Speco NVR, and the Speco watcher recovery path runs against real lab telemetry.',
          'Direct-camera hardware validation and sustained periodic-scheduler operation remain pending. Lab validation describes specific hardware observations — not general manufacturer compatibility or production readiness.',
        ],
      },
      {
        title: 'Next direction',
        body: ['Planned milestones from the project roadmap — not delivery commitments.'],
        points: [
          'Sustained stream assurance across repeated cycles and multiple recorders',
          'Asset intelligence: declared versus observed identity, with provenance',
          'Operational topology linking physical and logical dependencies',
          'Incident analysis built on dependency and observation history',
          'Integration expansion with additional documented vendor adapters',
          'Deployment readiness: delivery strategy, supervision and installation guidance',
        ],
      },
    ],
  },
  {
    slug: 'fsop',
    number: '02',
    name: 'FSOP',
    primary: true,
    fullName: 'Field Service Operations Platform',
    category: 'Field Operations · Business Software',
    description:
      'A configurable field-service platform connecting customers, estimates, jobs, scheduling, expenses, payments and the business website in one workspace.',
    positioning: 'One workspace for the work a field-service business runs on — from the first request to the final payment.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vitest'],
    status: { label: 'Building', tone: 'blue' },
    accent: '#3b82f6',
    cover: {
      src: '/projects/fsop-cover.png',
      alt: 'FSOP public website and operations workspace dashboard with customers, estimates, jobs, payments and a weekly agenda',
    },
    gallery: [
      {
        src: '/projects/bluewave/estimates.png',
        alt: 'FSOP owner portal (BlueWave implementation) — estimates list with totals, profit and margin per estimate',
        caption: 'Estimates & profitability',
        width: 1713,
        height: 1302,
      },
      {
        src: '/projects/bluewave/customer.png',
        alt: 'FSOP owner portal (BlueWave implementation) — customer record with contact details, visits and job history',
        caption: 'Customer record',
        width: 1682,
        height: 1228,
      },
      {
        src: '/projects/bluewave/website-desktop.png',
        alt: 'BlueWave Plumbing public website built on FSOP — homepage with services and a Request an Estimate call to action',
        caption: 'Public business website',
        width: 1704,
        height: 1293,
      },
      {
        src: '/projects/bluewave/estimate-pdf.png',
        alt: 'Customer-facing estimate document — scope of work, line items, total and payment schedule, without internal cost data',
        caption: 'Customer-facing estimate',
        width: 796,
        height: 1048,
      },
    ],
    sections: [
      {
        title: 'Overview',
        body: [
          'FSOP is a multi-tenant field-service operations platform built as two connected products: a public business website where customers request work, and an authenticated owner portal where that work is priced, scheduled, invoiced and tracked through to payment.',
          'The platform grew out of a real-world implementation for BlueWave Plumbing, a plumbing-services business. That first implementation shaped the workflows against a working business; FSOP generalizes them into a configurable platform.',
        ],
      },
      {
        title: 'Problem',
        body: [
          'For a small field-service business, a request, its estimate, the job, the visits, the expenses and the payment are one piece of work — but they usually live in separate places. That makes it hard for the owner to know which jobs are worth taking before work starts, and whether they were worth it afterwards.',
        ],
      },
      {
        title: 'Approach',
        points: [
          'One connected flow: request → estimate → job → invoice → payment',
          'Every estimate carries its own total, profit and margin; jobs track actual costs',
          'Internal profitability stays internal — customer documents show scope, line items, total and payment schedule only',
          'Owner and assistant roles, with financial data restricted to the owner',
          'Company data isolated with Postgres row-level security on every table',
        ],
      },
      {
        title: 'Product',
        body: [
          'Screenshots from the first real-world implementation, BlueWave Plumbing.',
        ],
        points: [
          'Customers and price book',
          'Estimates with profitability, plus professional estimate PDFs',
          'Jobs with actual costs and profitability tracking',
          'Scheduling and visits',
          'Expenses, payments and invoices',
          'Public website in English, Portuguese and Spanish with Request an Estimate',
        ],
        show: 'gallery',
      },
      {
        title: 'Architecture',
        body: [
          'A Next.js App Router application in strict TypeScript on top of Supabase Postgres and Auth. Multi-tenancy is enforced in the database: every policy resolves the signed-in user’s company, and sensitive transitions — such as converting an estimate into a job — run as database functions rather than client-side logic.',
          'The design system is implemented as first-party components with centralized design tokens, without a third-party component framework.',
        ],
      },
      { title: 'Technology', show: 'technologies' },
      {
        title: 'Current status',
        body: [
          'Building. Customers, price book, estimates, jobs, scheduling, expenses, payments and invoices are implemented and verified, along with the multilingual public website and lead capture.',
        ],
      },
      {
        title: 'Next direction',
        points: [
          'Reports — scoped first to the metrics current data can support accurately',
          'A company settings page for business details that are not yet editable in the UI',
        ],
      },
    ],
  },
  {
    slug: 'dsop',
    number: '03',
    name: 'DSOP',
    primary: true,
    fullName: 'Digital Safety & Online Protection',
    category: 'Digital Safety · Product Concept',
    description:
      'A product concept exploring how people and families could review a suspicious message, link or screenshot, understand possible warning signals and choose a safer next step.',
    teaser: 'A concept for pausing to review a suspicious message, link or screenshot before acting on it.',
    positioning: 'Check before you trust — a calm, human-centered concept for pausing before acting on a suspicious message.',
    tags: [],
    status: { label: 'Concept / Early development', tone: 'teal' },
    accent: '#2dd4bf',
    cover: {
      src: '/projects/dsop-cover.png',
      alt: 'DSOP concept preview — a five-step flow to review a message, look for warning signals, follow verification steps, decide a safer next step and involve someone you trust',
      caption: 'Concept preview — illustrates the planned experience, not a working application.',
    },
    sections: [
      {
        title: 'Overview',
        body: [
          'DSOP is a product concept under development — not a completed application. It is designed to explore how ordinary people and families could review suspicious messages, links or screenshots before acting on them.',
          'The visual material on this page is a concept preview of the planned experience.',
        ],
      },
      {
        title: 'Problem',
        body: [
          'Suspicious messages often rely on urgency — an account about to be closed, details that must be confirmed today. People are asked to decide quickly, often alone, and without a simple way to check first.',
        ],
      },
      {
        title: 'Approach',
        body: [
          'The concept proposes slowing that moment down: helping someone notice common warning signs, follow practical verification steps and, if they choose, ask a trusted person for a second opinion before they act.',
          'Warning signals are framed as common signs to look for — not a verdict on whether something is safe or unsafe.',
        ],
      },
      {
        title: 'Planned workflow',
        body: ['The workflow shown in the concept preview:'],
        points: [
          'Message — paste, type or upload a suspicious message, link or screenshot',
          'Review — look at possible warning signals',
          'Verify — follow practical verification steps',
          'Safer next step — decide what to do',
          'Involve someone — optionally get a second opinion from a trusted person',
        ],
      },
      {
        title: 'Current status',
        body: [
          'Concept and early development. The planned workflow has not been implemented as a working application, and no detection or analysis capability is claimed.',
        ],
      },
    ],
  },
  {
    slug: 'biaotech-api',
    number: '05',
    name: 'BiaoTech API',
    primary: false,
    fullName: 'Production REST API & Cloud Infrastructure',
    category: 'Production REST API & Cloud Infrastructure',
    description:
      'A production REST API on AWS EC2 with automated CI/CD, JWT auth and live Swagger documentation.',
    tags: ['NODE.JS', 'POSTGRESQL', 'DOCKER', 'AWS EC2'],
    status: { label: 'Live', tone: 'emerald' },
    accent: 'var(--pb-blue)',
  },
  {
    slug: 'camera-fleet-monitor',
    number: '06',
    name: 'Camera Fleet Monitor',
    primary: false,
    fullName: 'Cloud-based IP Camera Fleet Monitoring',
    category: 'Cloud-based IP Camera Fleet Monitoring',
    description:
      'A lab experiment applying field experience with physical security hardware to cloud architecture and telemetry design.',
    tags: ['AWS IOT CORE', 'DYNAMODB', 'TERRAFORM', 'PYTHON'],
    status: { label: 'Lab / Experiment', tone: 'neutral' },
    accent: 'rgba(255,255,255,0.6)',
  },
]

export const primaryProjects = projects.filter((p) => p.primary)
export const labProjects = projects.filter((p) => !p.primary)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
