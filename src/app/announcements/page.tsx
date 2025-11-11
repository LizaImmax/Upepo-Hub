import { mockAnnouncements } from '@/data/mockData'
import { Bell, AlertCircle, Info } from 'lucide-react'

export default function AnnouncementsPage() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Announcements
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Stay updated with the latest news and updates from Upepo
          </p>
        </div>

        <div className="space-y-4">
          {mockAnnouncements.map(announcement => (
            <div
              key={announcement.id}
              className={`border-l-4 rounded-lg p-6 ${getPriorityColor(announcement.priority)}`}
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
                          year: 'numeric',
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
    </div>
  )
}
