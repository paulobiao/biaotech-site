import {
  SiDocker,
  SiTerraform,
  SiNginx,
  SiGithubactions,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPython,
  SiPrisma,
  SiLinux,
  SiJavascript,
  SiJson,
  SiSupabase,
  SiHtml5,
  SiPostman,
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa'
import { TbBrandCSharp, TbBrandCss3, TbSql } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import {
  Webhook,
  Database,
  Camera,
  ShieldCheck,
  Radio,
  Network,
  Radar,
  Activity,
  KeyRound,
  Server,
  Archive,
  Boxes,
  Video,
  HardDrive,
  Waypoints,
  PlugZap,
  Infinity as InfinityIcon,
} from 'lucide-react'
import type { IconType } from 'react-icons'
import type { LucideIcon } from 'lucide-react'

/** Brand icons where one genuinely exists; a plain Lucide glyph everywhere else — never a fabricated logo. */
const brandIcons: Record<string, IconType> = {
  aws: FaAws,
  docker: SiDocker,
  terraform: SiTerraform,
  nginx: SiNginx,
  githubactions: SiGithubactions,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  postgresql: SiPostgresql,
  nextjs: SiNextdotjs,
  react: SiReact,
  tailwind: SiTailwindcss,
  git: SiGit,
  github: SiGithub,
  python: SiPython,
  prisma: SiPrisma,
  java: FaJava,
  csharp: TbBrandCSharp,
  linux: SiLinux,
  javascript: SiJavascript,
  json: SiJson,
  sql: TbSql,
  supabase: SiSupabase,
  html5: SiHtml5,
  css3: TbBrandCss3,
  postman: SiPostman,
  vscode: VscVscode,
}

const glyphIcons: Record<string, LucideIcon> = {
  rest: Webhook,
  dynamodb: Database,
  cctv: Camera,
  access: ShieldCheck,
  onvif: Radio,
  network: Network,
  iot: Radar,
  observability: Activity,
  iam: KeyRound,
  ec2: Server,
  s3: Archive,
  compose: Boxes,
  rtsp: Video,
  recorder: HardDrive,
  tcpip: Waypoints,
  poe: PlugZap,
  cicd: InfinityIcon,
}

export default function SkillIcon({ icon, className }: { icon: string; className?: string }) {
  const Brand = brandIcons[icon]
  if (Brand) return <Brand className={className} />
  const Glyph = glyphIcons[icon] ?? Activity
  return <Glyph className={className} strokeWidth={1.7} />
}
