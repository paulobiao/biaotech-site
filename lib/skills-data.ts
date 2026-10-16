export type Skill = {
  id: string
  name: string
  context: string
  icon: string
  /** Technology-specific accent — the real/official brand color where one exists. */
  accent: string
}

export type SkillGroup = {
  id: string
  label: string
  accent: string
  skills: Skill[]
}

/**
 * Every entry here is traceable to the resume (public/Paulo_Fernandes_Biao_Resume_Final.pdf),
 * package.json, or a project's documented tech stack (lib/projects-data.ts and the
 * project body sections) — except entries Paulo listed directly (e.g. Java, C#).
 * ECS, ECR and CloudWatch are deliberately absent until validated hands-on in BiaoTech Cloud Lab.
 * Breadth only: no proficiency labels or years for languages; projects carry the depth.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'cloud',
    label: 'Cloud & Infrastructure',
    accent: 'var(--pb-blue)',
    skills: [
      { id: 'aws', name: 'AWS', context: 'EC2, S3, IAM, VPC, IoT Core', icon: 'aws', accent: '#FF9900' },
      { id: 'ec2', name: 'Amazon EC2', context: 'Compute infrastructure', icon: 'ec2', accent: '#FF9900' },
      { id: 's3', name: 'Amazon S3', context: 'Object storage', icon: 's3', accent: '#569A31' },
      { id: 'iam', name: 'AWS IAM', context: 'Identity & access management', icon: 'iam', accent: '#DD344C' },
      { id: 'linux', name: 'Linux', context: 'Systems & server environments', icon: 'linux', accent: '#FCC624' },
      { id: 'docker', name: 'Docker', context: 'Containerized services', icon: 'docker', accent: '#2496ED' },
      { id: 'docker-compose', name: 'Docker Compose', context: 'Multi-container environments', icon: 'compose', accent: '#2496ED' },
      { id: 'terraform', name: 'Terraform', context: 'Infrastructure as Code', icon: 'terraform', accent: '#844FBA' },
      { id: 'nginx', name: 'Nginx', context: 'Web server · SPA hosting', icon: 'nginx', accent: '#14B8A6' },
      { id: 'githubactions', name: 'GitHub Actions', context: 'CI/CD pipelines', icon: 'githubactions', accent: '#8250DF' },
    ],
  },
  {
    id: 'programming',
    label: 'Programming & Backend',
    accent: 'var(--pb-cyan)',
    skills: [
      { id: 'typescript', name: 'TypeScript', context: 'Application & API layer', icon: 'typescript', accent: '#3178C6' },
      { id: 'javascript', name: 'JavaScript', context: 'Web & application development', icon: 'javascript', accent: '#F7DF1E' },
      { id: 'nodejs', name: 'Node.js', context: 'REST APIs', icon: 'nodejs', accent: '#3C873A' },
      { id: 'python', name: 'Python', context: 'Automation, tooling & data workflows', icon: 'python', accent: '#4B8BBE' },
      { id: 'sql', name: 'SQL', context: 'Queries & relational data', icon: 'sql', accent: '#60A5FA' },
      { id: 'json', name: 'JSON', context: 'APIs & structured data', icon: 'json', accent: '#CBD5E1' },
      { id: 'restapis', name: 'REST APIs', context: 'API design & integration', icon: 'rest', accent: '#0D9488' },
    ],
  },
  {
    id: 'data',
    label: 'Data & Storage',
    accent: '#5D6FE0',
    skills: [
      { id: 'postgresql', name: 'PostgreSQL', context: 'Relational data', icon: 'postgresql', accent: '#4A90C4' },
      { id: 'supabase', name: 'Supabase', context: 'Backend & PostgreSQL platform', icon: 'supabase', accent: '#3ECF8E' },
      { id: 'prisma', name: 'Prisma', context: 'ORM & data access', icon: 'prisma', accent: '#5A67D8' },
      { id: 'dynamodb', name: 'DynamoDB', context: 'Telemetry storage / lab', icon: 'dynamodb', accent: '#5D6FE0' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    accent: 'var(--pb-violet)',
    skills: [
      { id: 'nextjs', name: 'Next.js', context: 'Web applications', icon: 'nextjs', accent: '#E5E7EB' },
      { id: 'react', name: 'React', context: 'Component architecture', icon: 'react', accent: '#61DAFB' },
      { id: 'tailwind', name: 'Tailwind CSS', context: 'Design systems', icon: 'tailwind', accent: '#38BDF8' },
      { id: 'html5', name: 'HTML5', context: 'Semantic web structure', icon: 'html5', accent: '#E34F26' },
      { id: 'css3', name: 'CSS3', context: 'Responsive interfaces', icon: 'css3', accent: '#2965F1' },
    ],
  },
  {
    id: 'physical',
    label: 'Physical Security & IoT',
    accent: '#94a3b8',
    skills: [
      { id: 'cctv', name: 'CCTV', context: '2005–2020 · banking sites', icon: 'cctv', accent: '#F0596E' },
      { id: 'nvr-dvr', name: 'NVR / DVR', context: 'Video recording systems', icon: 'recorder', accent: '#F87171' },
      { id: 'onvif', name: 'ONVIF', context: 'Camera integration protocol', icon: 'onvif', accent: '#2DD4BF' },
      { id: 'rtsp', name: 'RTSP', context: 'IP video streaming', icon: 'rtsp', accent: '#F472B6' },
      { id: 'access-control', name: 'Alarm & Access Control', context: 'Field-installed systems', icon: 'access', accent: '#FB7185' },
      { id: 'ip-networks', name: 'IP Networks', context: 'Remote monitoring', icon: 'network', accent: '#5EA8E5' },
      { id: 'tcpip', name: 'TCP/IP', context: 'Network communications', icon: 'tcpip', accent: '#60A5FA' },
      { id: 'poe', name: 'PoE', context: 'Network device infrastructure', icon: 'poe', accent: '#FBBF24' },
      { id: 'awsiot', name: 'AWS IoT Core', context: 'Device fleet telemetry', icon: 'iot', accent: '#F5A524' },
    ],
  },
  {
    id: 'tooling',
    label: 'Engineering & Tooling',
    accent: '#34d399',
    skills: [
      { id: 'git', name: 'Git', context: 'Version control', icon: 'git', accent: '#F05033' },
      { id: 'github', name: 'GitHub', context: 'Source & CI/CD', icon: 'github', accent: '#E5E7EB' },
      { id: 'cicd', name: 'CI/CD', context: 'Automated build & delivery', icon: 'cicd', accent: '#2DD4BF' },
      { id: 'vscode', name: 'VS Code', context: 'Development environment', icon: 'vscode', accent: '#23A9F2' },
      { id: 'postman', name: 'Postman', context: 'API testing', icon: 'postman', accent: '#FF6C37' },
      { id: 'observability', name: 'Observability', context: 'Device health & telemetry', icon: 'observability', accent: '#34D399' },
    ],
  },
]

export const allSkills: Skill[] = skillGroups.flatMap((g) => g.skills)

/** Homepage preview — the strongest, most representative subset. */
export const featuredSkillIds = [
  'aws',
  'docker',
  'terraform',
  'nodejs',
  'typescript',
  'nextjs',
  'react',
  'postgresql',
  'cctv',
  'onvif',
  'awsiot',
  'githubactions',
]
