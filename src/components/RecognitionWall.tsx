'use client'

import { Trophy, Heart, Zap, Star, TrendingUp } from 'lucide-react'

// Mock recognition data
const recognitions = [
  {
    id: 1,
    type: 'achievement',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-500',
    recipient: 'Emmanuel K.',
    avatar: '🏆',
    title: 'Community Champion',
    description: 'Helped 100+ members get started on Upepo Hub',
    date: 'Today',
    likes: 234,
  },
  {
    id: 2,
    type: 'milestone',
    icon: Star,
    color: 'from-blue-400 to-indigo-500',
    recipient: 'TechHub Lagos',
    avatar: '🚀',
    title: 'First Cohort Graduated!',
    description: '50 students completed the coding bootcamp',
    date: '2 days ago',
    likes: 189,
  },
  {
    id: 3,
    type: 'contribution',
    icon: Heart,
    color: 'from-pink-400 to-rose-500',
    recipient: 'Amina S.',
    avatar: '❤️',
    title: 'Outstanding Contributor',
    description: 'Shared 25+ resources with the community',
    date: '1 week ago',
    likes: 156,
  },
  {
    id: 4,
    type: 'innovation',
    icon: Zap,
    color: 'from-purple-400 to-pink-500',
    recipient: 'GreenTech Solutions',
    avatar: '⚡',
    title: 'Innovation Award',
    description: 'Launched solar-powered IoT platform',
    date: '3 days ago',
    likes: 201,
  },
  {
    id: 5,
    type: 'growth',
    icon: TrendingUp,
    color: 'from-green-400 to-teal-500',
    recipient: 'DataScience Club',
    avatar: '📊',
    title: 'Fastest Growing Community',
    description: 'Reached 500 members in 3 months',
    date: '5 days ago',
    likes: 178,
  },
  {
    id: 6,
    type: 'achievement',
    icon: Trophy,
    color: 'from-orange-400 to-red-500',
    recipient: 'Linda M.',
    avatar: '🎓',
    title: 'Certified Mentor',
    description: 'Mentored 30+ entrepreneurs through Upepo Ventures',
    date: '1 week ago',
    likes: 143,
  },
]

const recognitionTypes = [
  { name: 'All', icon: Star },
  { name: 'Achievement', icon: Trophy },
  { name: 'Milestone', icon: Star },
  { name: 'Contribution', icon: Heart },
  { name: 'Innovation', icon: Zap },
  { name: 'Growth', icon: TrendingUp },
]

export default function RecognitionWall() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Recognition Wall
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Celebrating wins, achievements, and contributions from our amazing community
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {recognitionTypes.map((type) => {
            const IconComponent = type.icon
            return (
              <button
                key={type.name}
                className="flex items-center gap-2 px-6 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 text-gray-700 dark:text-gray-300"
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-medium">{type.name}</span>
              </button>
            )
          })}
        </div>

        {/* Recognition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recognitions.map((recognition, index) => {
            const IconComponent = recognition.icon
            return (
              <div
                key={recognition.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${recognition.color}`}></div>

                <div className="p-6">
                  {/* Icon & Avatar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-5xl">{recognition.avatar}</div>
                    <div className={`p-3 rounded-full bg-gradient-to-r ${recognition.color}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {recognition.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {recognition.description}
                  </p>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    {recognition.recipient}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {recognition.date}
                    </span>
                    <div className="flex items-center gap-1 text-pink-600 dark:text-pink-400">
                      <Heart className="w-4 h-4 fill-current" />
                      <span className="font-semibold">{recognition.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Nominate CTA */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white shadow-2xl">
          <Star className="w-12 h-12 mx-auto mb-4 fill-white" />
          <h3 className="text-2xl font-bold mb-3">Know someone who deserves recognition?</h3>
          <p className="text-lg mb-6 text-white/90">
            Nominate a community member or project that has made an impact
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg">
            Nominate Someone
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <p className="text-3xl font-bold text-gray-900 dark:text-white">342</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Recognitions</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
            <Heart className="w-8 h-8 mx-auto mb-2 text-pink-500" />
            <p className="text-3xl font-bold text-gray-900 dark:text-white">8.2K</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Community Loves</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
            <Star className="w-8 h-8 mx-auto mb-2 text-indigo-500" />
            <p className="text-3xl font-bold text-gray-900 dark:text-white">156</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
            <Zap className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Today</p>
          </div>
        </div>
      </div>
    </section>
  )
}
