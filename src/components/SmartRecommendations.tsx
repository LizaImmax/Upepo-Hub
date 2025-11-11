'use client'

import { useState } from 'react'
import { Sparkles, TrendingUp, Heart, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { upepoComponents } from '@/config/upepo'

// Mock user interest data
const userInterests = ['education', 'innovation', 'community']

// Smart recommendation algorithm
function getRecommendations() {
  // Simulate AI-powered recommendations based on user interests
  const recommendations = []
  
  // Category-based recommendations
  userInterests.forEach(interest => {
    const matching = upepoComponents.filter(comp => comp.category === interest)
    recommendations.push(...matching)
  })
  
  // Add trending items
  const trending = [
    { ...upepoComponents.find(c => c.id === 'learn')!, reason: 'Most popular this week', score: 95 },
    { ...upepoComponents.find(c => c.id === 'academy')!, reason: 'Based on your interests', score: 88 },
    { ...upepoComponents.find(c => c.id === 'ventures')!, reason: 'Trending in your network', score: 82 },
  ]
  
  // Add personalized picks
  const personalized = [
    { ...upepoComponents.find(c => c.id === 'studio')!, reason: 'You might like this', score: 78 },
    { ...upepoComponents.find(c => c.id === 'labs')!, reason: 'Similar to what you viewed', score: 75 },
  ]
  
  return {
    trending,
    personalized,
    all: [...trending, ...personalized]
  }
}

export default function SmartRecommendations() {
  const [activeTab, setActiveTab] = useState<'trending' | 'personalized' | 'all'>('trending')
  const recommendations = getRecommendations()
  
  const currentRecommendations = recommendations[activeTab]

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Recommended For You
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            AI-powered suggestions tailored to your interests and activity
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('trending')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'trending'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span>Trending</span>
          </button>
          <button
            onClick={() => setActiveTab('personalized')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'personalized'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            <Heart className="w-5 h-5" />
            <span>For You</span>
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span>All Picks</span>
          </button>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentRecommendations.map((item, index) => (
            <Link
              key={item.id}
              href={item.url}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Score Badge */}
              <div className="relative">
                <div className={`h-3 bg-gradient-to-r ${item.color}`}></div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-700 rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      {item.score}% Match
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Emoji & Category */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-semibold uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Reason Badge */}
                <div className="flex items-center gap-2 mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                    {item.reason}
                  </span>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform flex items-center gap-2">
                    Explore Now
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* AI Insights */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="flex items-start gap-4">
            <Sparkles className="w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-3">How we personalize your experience</h3>
              <p className="text-white/90 mb-4">
                Our AI analyzes your interests, browsing patterns, and community interactions to suggest
                the most relevant services. The more you engage, the better our recommendations become.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-bold mb-1">Your Interests</p>
                  <p className="text-sm text-white/80">Education, Innovation, Community</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-bold mb-1">Match Accuracy</p>
                  <p className="text-sm text-white/80">87% based on your activity</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-bold mb-1">Updated</p>
                  <p className="text-sm text-white/80">Real-time as you explore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
