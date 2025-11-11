import { mockActivityFeed, mockDashboardStats } from '@/data/mockData'
import { Users, TrendingUp, Activity } from 'lucide-react'
import Link from 'next/link'
import HowItWorks from '@/components/HowItWorks'
import GettingStarted from '@/components/GettingStarted'
import EventCountdown from '@/components/EventCountdown'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Community Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening in the Upepo community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Members</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {mockDashboardStats.totalMembers.toLocaleString()}
                </p>
                <p className="text-sm text-green-600 mt-2 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12% this month
                </p>
              </div>
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                <Users className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Active Projects</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {mockDashboardStats.activeProjects}
                </p>
                <p className="text-sm text-green-600 mt-2 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +8% this week
                </p>
              </div>
              <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                <Activity className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Upcoming Events</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {mockDashboardStats.upcomingEvents}
                </p>
                <Link href="/events" className="text-sm text-purple-600 mt-2 inline-block">
                  View all events →
                </Link>
              </div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Announcements</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {mockDashboardStats.recentAnnouncements}
                </p>
                <Link
                  href="/announcements"
                  className="text-sm text-purple-600 mt-2 inline-block"
                >
                  View all →
                </Link>
              </div>
              <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed & Event Countdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {mockActivityFeed.map(activity => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="text-3xl">{activity.avatar}</div>
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white">
                      <span className="font-semibold">{activity.user}</span>{' '}
                      <span className="text-gray-600 dark:text-gray-400">{activity.action}</span>{' '}
                      <span className="font-semibold">{activity.target}</span>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Countdown & Quick Links Column */}
          <div className="space-y-6">
            <EventCountdown />
            
            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Links</h2>
            <div className="space-y-3">
              <Link
                href="/"
                className="block p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                🪩 Upepo Hub Home
              </Link>
              <Link
                href="/components/learn"
                className="block p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                🎓 Upepo Learn
              </Link>
              <Link
                href="/components/cloud"
                className="block p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                ☁️ Upepo Cloud
              </Link>
              <Link
                href="/components/ventures"
                className="block p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                🚀 Upepo Ventures
              </Link>
              <Link
                href="/components/labs"
                className="block p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                🧪 Upepo Labs
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <GettingStarted />

      {/* How It Works Section */}
      <HowItWorks />
    </div>
  )
}
