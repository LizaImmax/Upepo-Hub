import Link from 'next/link'
import { mockAnnouncements } from '@/data/mockData'
import { Bell, AlertCircle, Info } from 'lucide-react'

export default function AnnouncementsSection() {
  const recentAnnouncements = mockAnnouncements.slice(0, 4)

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      case 'medium':
        return <Bell className="w-5 h-5 text-yellow-500" />
      default:
        return <Info className="w-5 h-5 text-blue-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50 dark:bg-red-900/10'
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/10'
      default:
        return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/10'
    }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Latest Announcements
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Stay updated with the latest news and updates
            </p>
          </div>
          <Link
            href="/announcements"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="space-y-4">
          {recentAnnouncements.map((announcement, index) => (
            <div
              key={announcement.id}
              className={`border-l-4 rounded-lg p-6 ${getPriorityColor(announcement.priority)} animate-fadeIn`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">{getPriorityIcon(announcement.priority)}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {announcement.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                        {announcement.category}
                      </span>
                      <span>
                        {new Date(announcement.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{announcement.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
