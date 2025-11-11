import { Event, Announcement, DashboardStats } from '@/config/upepo'

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Upepo Hub Launch Event',
    date: '2025-11-15',
    time: '14:00',
    location: 'Virtual - Zoom',
    description: 'Join us for the official launch of Upepo Hub, the central platform connecting all Upepo services.',
    category: 'Launch',
    attendees: 247,
    maxAttendees: 500,
  },
  {
    id: '2',
    title: 'Cloud Architecture Workshop',
    date: '2025-11-20',
    time: '10:00',
    location: 'Upepo Space - Nairobi',
    description: 'Deep dive into cloud architecture patterns and best practices with Upepo Cloud team.',
    category: 'Workshop',
    attendees: 42,
    maxAttendees: 50,
  },
  {
    id: '3',
    title: 'Voices Podcast Recording Session',
    date: '2025-11-22',
    time: '16:00',
    location: 'Upepo Studio',
    description: 'Open recording session featuring community leaders and innovators.',
    category: 'Recording',
    attendees: 15,
    maxAttendees: 20,
  },
  {
    id: '4',
    title: 'Academy Q4 Graduation Ceremony',
    date: '2025-12-10',
    time: '18:00',
    location: 'Virtual & In-Person',
    description: 'Celebrate the achievements of our latest cohort of certified professionals.',
    category: 'Ceremony',
    attendees: 156,
    maxAttendees: 300,
  },
]

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Welcome to Upepo Hub!',
    message: 'We are excited to announce the launch of Upepo Hub - your central access point to all Upepo services.',
    date: '2025-11-10',
    priority: 'high',
    category: 'Platform',
  },
  {
    id: '2',
    title: 'New Features Coming to Upepo Learn',
    message: 'Upepo Learn is getting AI-powered course recommendations and interactive coding environments.',
    date: '2025-11-08',
    priority: 'medium',
    category: 'Update',
  },
  {
    id: '3',
    title: 'Ventures Program Applications Open',
    message: 'Applications are now open for the Q1 2026 cohort. Apply by December 15th.',
    date: '2025-11-05',
    priority: 'high',
    category: 'Opportunity',
  },
  {
    id: '4',
    title: 'Foundation Community Meetup',
    message: 'Join us for monthly community meetups. Next session: November 18th at 17:00 EAT.',
    date: '2025-11-03',
    priority: 'medium',
    category: 'Event',
  },
]

export const mockDashboardStats: DashboardStats = {
  totalMembers: 12847,
  activeProjects: 342,
  upcomingEvents: 18,
  recentAnnouncements: 7,
}

export const mockActivityFeed = [
  {
    id: '1',
    user: 'Sarah M.',
    action: 'completed',
    target: 'Cloud Architecture Certification',
    time: '2 hours ago',
    avatar: '👩‍💻',
  },
  {
    id: '2',
    user: 'James K.',
    action: 'joined',
    target: 'Upepo Ventures Cohort Q1',
    time: '4 hours ago',
    avatar: '👨‍🚀',
  },
  {
    id: '3',
    user: 'Maya P.',
    action: 'published',
    target: 'New episode on Voices',
    time: '6 hours ago',
    avatar: '🎙️',
  },
  {
    id: '4',
    user: 'Alex T.',
    action: 'launched',
    target: 'Project on Upepo Labs',
    time: '1 day ago',
    avatar: '🧪',
  },
]
