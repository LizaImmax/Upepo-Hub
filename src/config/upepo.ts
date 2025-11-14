export interface UpepoComponent {
  id: string
  name: string
  emoji: string
  description: string
  url: string
  color: string
  category: 'core' | 'education' | 'community' | 'innovation'
  isHub?: boolean
}

export const upepoComponents: UpepoComponent[] = [
  {
    id: 'cloud',
    name: 'Upepo Cloud',
    emoji: '☁️',
    description: 'Cloud infrastructure and hosting solutions',
    url: '/components/cloud',
    color: 'from-blue-400 to-cyan-400',
    category: 'core',
  },
  {
    id: 'learn',
    name: 'Upepo Learn',
    emoji: '🎓',
    description: 'Educational resources and learning platform',
    url: 'https://upepo-learn.vercel.app/',
    color: 'from-green-400 to-emerald-400',
    category: 'education',
  },
  {
    id: 'voices',
    name: 'Upepo Voices',
    emoji: '🎙️',
    description: 'Podcast and audio content platform',
    url: 'https://upepo-voices.vercel.app/',
    color: 'from-purple-400 to-pink-400',
    category: 'community',
  },
  {
    id: 'labs',
    name: 'Upepo Labs',
    emoji: '🧪',
    description: 'Research and experimentation hub',
    url: 'https://upepo-labs-r166.vercel.app/',
    color: 'from-yellow-400 to-orange-400',
    category: 'innovation',
  },
  {
    id: 'foundation',
    name: 'Upepo Foundation',
    emoji: '❤️',
    description: 'Social impact and community support',
    url: 'https://upepo-foundation.vercel.app/',
    color: 'from-red-400 to-rose-400',
    category: 'community',
  },
  {
    id: 'network',
    name: 'Upepo Network',
    emoji: '🤝',
    description: 'Global community and connections',
    url: '/components/network',
    color: 'from-teal-400 to-cyan-400',
    category: 'community',
  },
  {
    id: 'studio',
    name: 'Upepo Studio',
    emoji: '🎬',
    description: 'Video production and creative content',
    url: 'https://upepo-studio.vercel.app/',
    color: 'from-indigo-400 to-purple-400',
    category: 'core',
  },
  {
    id: 'academy',
    name: 'Upepo Academy',
    emoji: '🧭',
    description: 'Professional training and certification',
    url: '/components/academy',
    color: 'from-amber-400 to-yellow-400',
    category: 'education',
  },
  {
    id: 'space',
    name: 'Upepo Space',
    emoji: '🌀',
    description: 'Innovation and collaboration workspace',
    url: '/components/space',
    color: 'from-violet-400 to-purple-400',
    category: 'innovation',
  },
  {
    id: 'insights',
    name: 'Upepo Insights',
    emoji: '💫',
    description: 'Data analytics and business intelligence',
    url: '/components/insights',
    color: 'from-sky-400 to-blue-400',
    category: 'core',
  },
  {
    id: 'ventures',
    name: 'Upepo Ventures',
    emoji: '🚀',
    description: 'Startup incubation and investment',
    url: '/components/ventures',
    color: 'from-orange-400 to-red-400',
    category: 'innovation',
  },
  {
    id: 'exchange',
    name: 'Upepo Exchange',
    emoji: '💼',
    description: 'Marketplace and trading platform',
    url: '/components/exchange',
    color: 'from-emerald-400 to-green-400',
    category: 'core',
  },
]

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  category: string
  attendees: number
  maxAttendees?: number
}

export interface Announcement {
  id: string
  title: string
  message: string
  date: string
  priority: 'low' | 'medium' | 'high'
  category: string
}

export interface DashboardStats {
  totalMembers: number
  activeProjects: number
  upcomingEvents: number
  recentAnnouncements: number
}
