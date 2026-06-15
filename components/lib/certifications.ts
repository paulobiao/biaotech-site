// TIPOS (se ainda não tiver assim, adapta só os campos que você usa hoje)
export type CertificationCategory =
  | 'Cybersecurity'
  | 'Cloud'
  | 'Agile & Methods'

export type CertificationItem = {
  id: string
  title: string
  provider: string
  issuer?: string
  category: CertificationCategory
  level: 'Certification'
  date?: string
  hours?: number
  location?: string
  credentialId?: string
  verifyUrl?: string
  certificateUrl?: string // PDF interno, se quiser
  imageUrl?: string       // thumb em /public/certifications
  highlight?: boolean
  notes?: string
  inProgress?: boolean
}

// 🔹 SOMENTE CERTIFICAÇÕES OFICIAIS (exames / badges)
export const officialCertifications: CertificationItem[] = [
  {
    id: 'fortinet-fca',
    title: 'Fortinet Certified Associate in Cybersecurity (FCA)',
    provider: 'Fortinet Training Institute',
    issuer: 'Fortinet',
    category: 'Cybersecurity',
    level: 'Certification',
    date: '2025-05-31',
    credentialId: '3659948882PB',
    verifyUrl:
      'https://training.fortinet.com/local/cert/my/certificate.php?badge=85',
    // você vai salvar a imagem e o PDF com esses nomes (ou ajusta aqui)
    imageUrl: '/certifications/fortinet-fca.jpg',
    certificateUrl: '/certificates/fortinet-fca.pdf',
    highlight: true,
    notes: 'Associate-level vendor certification focused on core cybersecurity concepts.',
  },
  {
    id: 'fortinet-fcf',
    title: 'Fortinet Certified Fundamentals in Cybersecurity (FCF)',
    provider: 'Fortinet Training Institute',
    issuer: 'Fortinet',
    category: 'Cybersecurity',
    level: 'Certification',
    date: '2025-05-29',
    credentialId: '2612923193PB',
    verifyUrl:
      'https://training.fortinet.com/local/cert/my/certificate.php?badge=84',
    imageUrl: '/certifications/fortinet-fcf.jpg',
    certificateUrl: '/certificates/fortinet-fcf.pdf',
    highlight: true,
    notes: 'Foundational certification in the Fortinet cybersecurity learning path.',
  },
  {
    id: 'isc2-cc',
    title: 'ISC2 – Certified in Cybersecurity (CC)',
    provider: 'ISC2',
    issuer: 'ISC2',
    category: 'Cybersecurity',
    level: 'Certification',
    highlight: true,
    inProgress: true,
    notes: 'Entry-level certification from ISC2 — currently studying for the exam.',
  },
  {
    id: 'scrum-csm',
    title: 'Certified ScrumMaster® (CSM)',
    provider: 'Scrum Alliance',
    issuer: 'Scrum Alliance',
    category: 'Agile & Methods',
    level: 'Certification',
    date: '2024-10-03',
    credentialId: '001692248',
    // você pediu "só PDF", então não coloquei verifyUrl aqui
    imageUrl: '/certifications/scrum-csm.jpg',
    certificateUrl: '/certificates/scrum-csm.pdf',
    highlight: true,
    notes: 'Professional agile certification focused on Scrum Mastery and team facilitation.',
  },
  {
    id: 'oracle-oci-foundations',
    title: 'Oracle Cloud Infrastructure 2024 Certified Foundations Associate',
    provider: 'Oracle University',
    issuer: 'Oracle',
    category: 'Cloud',
    level: 'Certification',
    date: '2024-09-10',
    credentialId: '314009349OCI2024FNDCFA',
    verifyUrl:
      'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5229550&trackId=OCI2024FNDCFA&key=58e2d2c083df10b3d109943fa01c09282daa7759',
    imageUrl: '/certifications/oracle-oci-foundations.jpg',
    certificateUrl: '/certificates/oracle-oci-foundations.pdf',
    highlight: true,
    notes: 'Cloud foundations certification covering OCI core services and architectures.',
  },
  {
    id: 'oracle-oci-data-foundations',
    title: 'Oracle Cloud Infrastructure 2024 Data Certified Foundations Associate',
    provider: 'Oracle University',
    issuer: 'Oracle',
    category: 'Cloud',
    level: 'Certification',
    date: '2024-09-10',
    credentialId: '314009349OCI2024DCFA',
    // você disse "só pdf", então sem verifyUrl aqui
    imageUrl: '/certifications/oracle-oci-data-foundations.jpg',
    certificateUrl: '/certificates/oracle-oci-data-foundations.pdf',
    highlight: false,
    notes: 'Foundational certification focused on data services and analytics on OCI.',
  },
  {
    id: 'cisco-intro-cyber',
    title: 'Cisco Networking Academy – Introduction to Cybersecurity',
    provider: 'Cisco Networking Academy',
    issuer: 'Cisco',
    category: 'Cybersecurity',
    level: 'Certification',
    date: '2025-05-27',
    imageUrl: '/certifications/cisco-intro-cyber.jpg',
    certificateUrl: '/certificates/cisco-intro-cyber.pdf',
    highlight: false,
    notes: 'Introductory cybersecurity credential from Cisco Networking Academy.',
  },
  {
    id: 'ibm-cyber-fundamentals',
    title: 'IBM SkillsBuild – Cybersecurity Fundamentals',
    provider: 'IBM SkillsBuild',
    issuer: 'IBM',
    category: 'Cybersecurity',
    level: 'Certification',
    date: '2025-05-20',
    credentialId: 'Cybersecurity Fundamentals',
    verifyUrl:
      'https://www.credly.com/badges/3431e190-d118-4621-af22-1d03ccd53223',
    imageUrl: '/certifications/ibm-cyber-fundamentals.jpg',
    certificateUrl: '/certificates/ibm-cyber-fundamentals.pdf',
    highlight: false,
    notes: 'Digital badge validating fundamental cybersecurity skills through IBM SkillsBuild.',
  },
]
