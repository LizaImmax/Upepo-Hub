'use client'

import { MessageSquare, TrendingUp, Clock, Users } from 'lucide-react'
import Link from 'next/link'

// Mock discussion data
const discussions = [
  {
    id: 1,
    title: 'Best practices for cloud deployment on Upepo Cloud?',
    author: 'Alex M.',
    avatar: '👨🏽‍💻',
    category: 'Cloud',
    replies: 23,
    views: 156,
    lastActive: '2 hours ago',
    isHot: true,
  },
  {
    id: 2,
    title: 'Looking for mentors in AI/ML - Upepo Academy',
    author: 'Grace K.',
    avatar: '👩🏿‍🎓',
    category: 'Education',
    replies: 15,
    views: 89,
    lastActive: '4 hours ago',
    isHot: false,
  },
  {
    id: 3,
    title: 'Startup funding opportunities through Upepo Ventures',
    author: 'Samuel O.',
    avatar: '🚀',
    category: 'Ventures',
    replies: 31,
    views: 234,
    lastActive: '1 hour ago',
    isHot: true,
  },
  {
    id: 4,
    title: 'Community meetup in Nairobi - Who\'s attending?',
    author: 'Lisa N.',
    avatar: '🎉',
    category: 'Community',
    replies: 42,
    views: 312,
    lastActive: '30 mins ago',
    isHot: true,
  },
  {
    id: 5,
    title: 'Tips for creating engaging content on Upepo Studio',
    author: 'James W.',
    avatar: '🎬',
    category: 'Studio',
    replies: 18,
    views: 127,
    lastActive: '5 hours ago',
    isHot: false,
  },
]

export default function DiscussionForumPreview() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Community Discussions
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Join the conversation and connect with fellow members
            </p>
          </div>
          <Link
            href="/forum"
            className="hidden md:block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View All Discussions
          </Link>
        </div>

        {/* Discussion List */}
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="text-4xl flex-shrink-0">{discussion.avatar}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {discussion.title}
                      {discussion.isHot && (
                        <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-bold bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 rounded-full">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Hot
                        </span>
                      )}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{discussion.author}</span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-semibold">
                      {discussion.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{discussion.replies} replies</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{discussion.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{discussion.lastActive}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <Link
          href="/forum"
          className="md:hidden mt-6 block w-full text-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View All Discussions
        </Link>

        {/* Forum Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1,247</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Active Topics</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">8,934</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Posts</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">3,456</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Members</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">542</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Online Now</p>
          </div>
        </div>
      </div>
    </section>
  )
}
