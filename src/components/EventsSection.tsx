import Link from 'next/link'
import { mockEvents } from '@/data/mockData'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'

export default function EventsSection() {
  const upcomingEvents = mockEvents.slice(0, 3)

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Upcoming Events
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Join us for workshops, meetups, and community gatherings
            </p>
          </div>
          <Link
            href="/events"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View All Events
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-medium">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
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

                <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
