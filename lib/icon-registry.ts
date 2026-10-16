import { Camera, Network, Code2, Cloud, Radar } from 'lucide-react'

/**
 * Icons are referenced by name in data files (not as component functions) because
 * a Server Component can't hand a raw function reference to a Client Component —
 * only serializable data or already-instantiated JSX crosses that boundary.
 */
export const icons = { Camera, Network, Code2, Cloud, Radar }
export type IconName = keyof typeof icons
