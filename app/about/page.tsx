import type { Metadata } from 'next'
import Image from 'next/image'
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Code2,
  CircleCheck,
  ShieldCheck,
  RefreshCw,
  Cloud,
  Database,
  Lock,
  CircleDashed,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/animated-section'
import CertificationsSection from '@/components/sections/CertificationsSection'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Paulo Biao — systems analyst with a decade of field experience in electronic security systems (CCTV, alarms, monitoring) for banking environments, now focused on cloud computing. Postgraduate in Cloud Computing (PUC Minas). Peer reviewer, IEEE Internet of Things Journal.',
  openGraph: {
    title: 'About Paulo Biao — Systems Analyst | Cloud Computing',
    description:
      'A decade maintaining CCTV, alarm and monitoring systems for banks in Brazil, now building in the cloud. Postgraduate in Cloud Computing (PUC Minas). Peer reviewer, IEEE Internet of Things Journal.',
    url: 'https://biaotech.dev/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Paulo Biao' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Paulo Biao',
    description:
      'A decade in electronic security systems for banking environments, now focused on cloud computing. Peer reviewer, IEEE Internet of Things Journal.',
    images: ['https://www.biaotech.dev/og-image.png'],
  },
}

const certifications = [
  { icon: ShieldCheck, color: 'text-purple-400', label: 'ISC² — Certified in Cybersecurity (CC)' },
  { icon: RefreshCw, color: 'text-sky-400', label: 'Scrum Master (CSM)' },
  { icon: Cloud, color: 'text-amber-400', label: 'Oracle Cloud 2024 Foundations' },
  { icon: Database, color: 'text-amber-400', label: 'Oracle Cloud 2024 Data Foundations' },
  { icon: Lock, color: 'text-red-400', label: 'Fortinet — Fundamentals & Associate' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wide text-blue-400 uppercase mb-2">About</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">Paulo Biao</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Systems analyst with a decade of field experience in electronic security systems for
            banking environments, now focused on cloud computing. Open to US-based cloud and
            technology roles.
          </p>
        </AnimatedSection>

        <AnimatedSection className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] mx-auto">
            <Image src="/pauloNN.jpg" alt="Paulo Biao" fill className="object-cover rounded-xl" priority />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-black text-white mb-6">Professional Overview</h2>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              I spent over ten years in the field installing, monitoring and maintaining CCTV,
              alarm and access systems across bank branches and corporate sites in Brazil — the
              kind of work where you learn how distributed equipment actually fails, and what it
              costs when a recording is not there when someone needs it.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              I then moved into software: a bachelor&apos;s degree in Systems Analysis and
              Development, backend and cloud engineering, and a completed postgraduate degree in
              Cloud Computing. My current work sits at the intersection of both worlds — cloud
              architecture applied to the reliability of distributed devices.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  10+
                </div>
                <div className="text-sm text-slate-400">Years Field Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 border border-cyan-500/30 rounded-xl">
                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-1">
                  4
                </div>
                <div className="text-sm text-slate-400">Global Hackathons 2025-26</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  IEEE
                </div>
                <div className="text-sm text-slate-400">IoT Journal Peer Reviewer</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-20">
          <AnimatedSection>
            <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Career Path</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Electronic security systems — field operations
                  </h3>
                  <p className="text-slate-300">
                    Over a decade installing, configuring and maintaining CCTV, alarm and
                    monitoring infrastructure for bank branches, retail and corporate sites,
                    including network configuration, remote monitoring, fault diagnosis and
                    equipment integration across multiple locations.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Transition into software and cloud
                  </h3>
                  <p className="text-slate-300">
                    Bachelor&apos;s degree in Systems Analysis and Development, followed by hands-on
                    backend and infrastructure work: REST APIs, PostgreSQL, Docker, CI/CD pipelines
                    and deployment on AWS.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Current work</h3>
                  <p className="text-slate-300">
                    Building the BiaoTech API — a production backend running on AWS EC2 with
                    Docker, Nginx, JWT authentication and GitHub Actions CI/CD — and developing a
                    lab project on cloud-based health monitoring for IP camera fleets, applying
                    field experience to cloud architecture.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Education</h2>
              </div>

              <div className="border-2 border-emerald-500 rounded-xl p-6 bg-emerald-950/30 mb-4">
                <div className="flex justify-between items-start flex-wrap gap-3">
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-emerald-300 mb-1.5">
                      Postgraduate degree
                    </div>
                    <div className="text-xl font-semibold text-white">Cloud Computing — PUC Minas</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500 text-emerald-300 text-sm font-medium px-3 py-1.5 rounded-full">
                    <CircleCheck className="w-4 h-4" />
                    Completed · Aug 2026
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mt-4 mb-3">
                  Cloud solution architecture, distributed systems, scalability, containerization,
                  automation, IT governance and information security.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Cloud architecture', 'Distributed systems', 'Containerization', 'Information security'].map(
                    (t) => (
                      <span key={t} className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="border border-slate-700 rounded-xl p-5 bg-slate-900/50 mb-8">
                <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-1.5">
                  Bachelor&apos;s degree
                </div>
                <div className="text-base font-semibold text-white">
                  Systems Analysis and Development — Estácio
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  2017–2020 · software engineering, systems design, information technology
                </p>
              </div>

              <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">
                Certifications
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => {
                  const Icon = c.icon
                  return (
                    <span
                      key={c.label}
                      className="inline-flex items-center gap-1.5 text-sm bg-slate-800 text-slate-300 px-3.5 py-1.5 rounded-lg border border-slate-700"
                    >
                      <Icon className={`w-4 h-4 ${c.color}`} />
                      {c.label}
                    </span>
                  )
                })}
                <span className="inline-flex items-center gap-1.5 text-sm bg-slate-900/50 text-slate-500 px-3.5 py-1.5 rounded-lg border border-dashed border-slate-700">
                  <CircleDashed className="w-4 h-4" />
                  Studying toward AWS
                </span>
              </div>
            </div>
          </AnimatedSection>

          <CertificationsSection />

          <AnimatedSection>
            <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Academic Activity</h2>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Invited peer reviewer for the{' '}
                <span className="text-white font-medium">IEEE Internet of Things Journal</span>,
                reviewing manuscripts on IoT and communication reliability in distributed systems.
                This is voluntary, unpaid academic service; reviews are verified through Web of
                Science.
              </p>
              <a href="https://orcid.org/0009-0008-6757-3766" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300">View ORCID record →</a>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Code2 className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Current Focus</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                Reliability of distributed device fleets — cameras, recorders and networked
                equipment — using cloud architecture: telemetry, health monitoring, alerting and
                observability. It is the problem I spent a decade solving by hand in the field, now
                approached as software.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
