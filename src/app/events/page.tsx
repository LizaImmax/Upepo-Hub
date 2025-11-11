import { mockEvents } from '@/data/mockData'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'
import CalendarIntegration from '@/components/CalendarIntegration'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Events</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Join workshops, meetups, and community gatherings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map(event => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs font-medium">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time} EAT</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>
                      {event.attendees}
                      {event.maxAttendees && ` / ${event.maxAttendees}`} attending
                    </span>
                  </div>
                </div>

                <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <CalendarIntegration event={event} />
                </div>

                <button className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Register for Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
