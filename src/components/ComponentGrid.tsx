'use client'

import Link from 'next/link'
import { upepoComponents } from '@/config/upepo'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ComponentGrid() {
  const [filter, setFilter] = useState<string>('all')
  const { t } = useLanguage()

  const categories = ['all', 'core', 'education', 'community', 'innovation']

  const filteredComponents =
    filter === 'all'
      ? upepoComponents
      : upepoComponents.filter(comp => comp.category === filter)

  return (
    <section id="components" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('section.services')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('section.servicesDesc')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((component, index) => (
            <Link
              key={component.id}
              href={component.url}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden animate-fadeIn relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient Bar */}
              <div className={`h-2 bg-gradient-to-r ${component.color} group-hover:h-3 transition-all duration-300`}></div>
              
              <div className="p-6 relative">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${component.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{component.emoji}</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full uppercase font-semibold">
                    {component.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors relative z-10">
                  {component.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 relative z-10">{component.description}</p>
                
                {/* Quick Preview on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3 relative z-10">
                  <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Active</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium group-hover:translate-x-2 transition-transform relative z-10">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
