'use client'

import { useState, useEffect } from 'react'
import { Star, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'

// Mock spotlight data
const spotlightData = [
  {
    id: 1,
    type: 'member',
    name: 'Sarah Kimani',
    title: 'Community Leader & Educator',
    avatar: '👩🏾‍💼',
    achievement: 'Trained 500+ students through Upepo Academy',
    impact: '15 courses created, 4.9/5 rating',
    location: 'Nairobi, Kenya',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    type: 'project',
    name: 'AgriTech Connect',
    title: 'Agricultural Innovation Platform',
    avatar: '🌾',
    achievement: 'Connecting 1,000+ farmers with modern farming techniques',
    impact: '30% increase in crop yields',
    location: 'Pan-African Initiative',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    type: 'member',
    name: 'David Omondi',
    title: 'Tech Entrepreneur',
    avatar: '👨🏿‍💻',
    achievement: 'Built 3 successful startups through Upepo Ventures',
    impact: '$2M in funding raised, 50 jobs created',
    location: 'Lagos, Nigeria',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    type: 'project',
    name: 'EduStream Africa',
    title: 'Educational Content Platform',
    avatar: '📚',
    achievement: 'Democratizing education across 12 African countries',
    impact: '100,000+ students reached',
    location: 'Multi-country',
    color: 'from-orange-500 to-red-500',
  },
]

export default function CommunitySpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const current = spotlightData[currentIndex]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % spotlightData.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + spotlightData.length) % spotlightData.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % spotlightData.length)
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Community Spotlight
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Celebrating outstanding members and projects in the Upepo ecosystem
          </p>
        </div>

        {/* Spotlight Card */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className={`bg-gradient-to-br ${current.color} rounded-2xl shadow-2xl p-8 text-white transition-all duration-500`}
          >
            {/* Type Badge */}
            <div className="flex items-center gap-2 mb-6">
              {current.type === 'member' ? (
                <Award className="w-5 h-5" />
              ) : (
                <TrendingUp className="w-5 h-5" />
              )}
              <span className="text-sm font-semibold uppercase tracking-wider">
                {current.type === 'member' ? 'Member of the Month' : 'Project Spotlight'}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="text-8xl bg-white/20 rounded-full p-8 backdrop-blur-sm">
                {current.avatar}
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">{current.name}</h3>
                <p className="text-xl text-white/90 mb-4">{current.title}</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-lg">{current.achievement}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold">{current.impact}</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{current.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
                aria-label="Previous spotlight"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {spotlightData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                    aria-label={`Go to spotlight ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
                aria-label="Next spotlight"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">142</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Active Contributors</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">68</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Featured Projects</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">$8.5M</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Community Impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
