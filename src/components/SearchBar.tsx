'use client'

import { Search, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { upepoComponents } from '@/config/upepo'
import { mockEvents } from '@/data/mockData'

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: 'service' | 'event' | 'page'
  emoji?: string
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Predictive search
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      setIsOpen(false)
      return
    }

    const searchLower = query.toLowerCase()

    // Search services
    const serviceResults: SearchResult[] = upepoComponents
      .filter(
        comp =>
          comp.name.toLowerCase().includes(searchLower) ||
          comp.description.toLowerCase().includes(searchLower) ||
          comp.category.toLowerCase().includes(searchLower)
      )
      .map(comp => ({
        id: comp.id,
        title: comp.name,
        description: comp.description,
        url: comp.url,
        type: 'service' as const,
        emoji: comp.emoji,
      }))

    // Search events
    const eventResults: SearchResult[] = mockEvents
      .filter(
        event =>
          event.title.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower) ||
          event.category.toLowerCase().includes(searchLower)
      )
      .slice(0, 3)
      .map(event => ({
        id: event.id,
        title: event.title,
        description: event.description,
        url: `/events`,
        type: 'event' as const,
        emoji: '📅',
      }))

    // Add pages
    const pageResults: SearchResult[] = [
      {
        id: 'dashboard',
        title: 'Community Dashboard',
        description: 'View community stats and activity',
        url: '/dashboard',
        type: 'page',
        emoji: '📊',
      },
      {
        id: 'events',
        title: 'Events',
        description: 'Browse all upcoming events',
        url: '/events',
        type: 'page',
        emoji: '📅',
      },
      {
        id: 'announcements',
        title: 'Announcements',
        description: 'Latest news and updates',
        url: '/announcements',
        type: 'page',
        emoji: '📢',
      },
    ].filter(
      page =>
        page.title.toLowerCase().includes(searchLower) ||
        page.description.toLowerCase().includes(searchLower)
    )

    const allResults = [...serviceResults, ...eventResults, ...pageResults].slice(0, 8)
    setResults(allResults)
    setIsOpen(allResults.length > 0)
  }, [query])

  const handleClear = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search across all Upepo services..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          aria-label="Search"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-14 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors"
          aria-label="Search button"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto z-50">
          <div className="p-2">
            {results.map(result => (
              <Link
                key={result.id}
                href={result.url}
                onClick={() => {
                  setIsOpen(false)
                  setQuery('')
                }}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors group"
              >
                <span className="text-2xl flex-shrink-0">{result.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {result.title}
                    </p>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                      {result.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-1">{result.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No results */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50">
          <div className="text-center">
            <p className="text-gray-600">No results found for "{query}"</p>
            <p className="text-sm text-gray-500 mt-2">
              Try searching for services, events, or pages
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
