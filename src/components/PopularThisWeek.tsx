'use client'

import { TrendingUp, Users, Activity } from 'lucide-react'
import { upepoComponents } from '@/config/upepo'

// Mock trending data
const trendingServices = [
  { id: 'learn', views: 2847, growth: 23 },
  { id: 'cloud', views: 2134, growth: 18 },
  { id: 'academy', views: 1956, growth: 31 },
  { id: 'studio', views: 1723, growth: 15 },
]

export default function PopularThisWeek() {
  const popularServices = trendingServices.map((trending) => ({
    ...upepoComponents.find((comp) => comp.id === trending.id)!,
    ...trending,
  }))

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Popular This Week
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See what's trending in the Upepo community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{service.emoji}</span>
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+{service.growth}%</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {service.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{service.views} views</span>
                  </div>
                  <div className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-semibold">
                    #{index + 1}
                  </div>
                </div>

                <a
                  href={service.url}
                  className="mt-4 block text-center py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Explore Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
            <Activity className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">12,847</span> active
              members this week
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
