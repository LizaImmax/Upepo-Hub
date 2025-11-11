'use client'

import { useState } from 'react'
import { Users, Code, Palette, Briefcase, Search, Filter } from 'lucide-react'

// Mock collaboration requests
const collaborationRequests = [
  {
    id: 1,
    title: 'Looking for Full-Stack Developer for FinTech Startup',
    author: 'Michelle T.',
    avatar: '👩🏾‍💼',
    category: 'Development',
    skills: ['React', 'Node.js', 'PostgreSQL'],
    type: 'Paid',
    commitment: 'Full-time',
    postedDate: '2 days ago',
    applicants: 12,
  },
  {
    id: 2,
    title: 'UI/UX Designer needed for Educational Platform',
    author: 'Peter K.',
    avatar: '👨🏿‍🎨',
    category: 'Design',
    skills: ['Figma', 'User Research', 'Prototyping'],
    type: 'Volunteer',
    commitment: 'Part-time',
    postedDate: '1 week ago',
    applicants: 8,
  },
  {
    id: 3,
    title: 'Co-founder wanted for AgriTech Venture',
    author: 'Sarah M.',
    avatar: '🌾',
    category: 'Business',
    skills: ['Agriculture', 'Business Dev', 'Fundraising'],
    type: 'Equity',
    commitment: 'Full-time',
    postedDate: '3 days ago',
    applicants: 23,
  },
  {
    id: 4,
    title: 'Mobile App Developer for Health Tech Project',
    author: 'David O.',
    avatar: '👨🏽‍💻',
    category: 'Development',
    skills: ['React Native', 'Firebase', 'Healthcare'],
    type: 'Paid',
    commitment: 'Contract',
    postedDate: '1 day ago',
    applicants: 15,
  },
  {
    id: 5,
    title: 'Content Creator for YouTube Channel',
    author: 'Grace W.',
    avatar: '🎥',
    category: 'Content',
    skills: ['Video Editing', 'Storytelling', 'Social Media'],
    type: 'Revenue Share',
    commitment: 'Part-time',
    postedDate: '5 days ago',
    applicants: 19,
  },
  {
    id: 6,
    title: 'Data Scientist for AI Research Project',
    author: 'John M.',
    avatar: '🤖',
    category: 'Research',
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
    type: 'Volunteer',
    commitment: 'Part-time',
    postedDate: '4 days ago',
    applicants: 10,
  },
]

const categories = ['All', 'Development', 'Design', 'Business', 'Content', 'Research']
const types = ['All', 'Paid', 'Volunteer', 'Equity', 'Revenue Share']

export default function CollaborationRequests() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRequests = collaborationRequests.filter((request) => {
    const matchesCategory = selectedCategory === 'All' || request.category === selectedCategory
    const matchesType = selectedType === 'All' || request.type === selectedType
    const matchesSearch =
      searchQuery === '' ||
      request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesType && matchesSearch
  })

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Collaboration Opportunities
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find partners, join projects, and build something amazing together
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Category & Type Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Category:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Type:</span>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Showing {filteredRequests.length} of {collaborationRequests.length} opportunities
        </p>

        {/* Collaboration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map((request) => (
            <div
              key={request.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{request.avatar}</div>
                <div className="flex flex-col gap-1">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      request.type === 'Paid'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                        : request.type === 'Volunteer'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : request.type === 'Equity'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                    }`}
                  >
                    {request.type}
                  </span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold text-center">
                    {request.commitment}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                {request.title}
              </h3>

              {/* Meta Info */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span className="font-medium">{request.author}</span>
                <span>•</span>
                <span>{request.postedDate}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {request.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{request.applicants} applicants</span>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-semibold">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No opportunities match your filters. Try adjusting your search.
            </p>
          </div>
        )}

        {/* Post Opportunity CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg font-semibold">
            Post Your Opportunity
          </button>
        </div>
      </div>
    </section>
  )
}
