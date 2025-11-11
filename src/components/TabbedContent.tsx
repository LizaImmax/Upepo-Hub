'use client'

import { useState } from 'react'
import { Home, Users, Briefcase, Trophy, Calendar, Bell } from 'lucide-react'
import PopularThisWeek from './PopularThisWeek'
import CommunitySpotlight from './CommunitySpotlight'
import DiscussionForumPreview from './DiscussionForumPreview'
import CollaborationRequests from './CollaborationRequests'
import RecognitionWall from './RecognitionWall'
import EventsSection from './EventsSection'
import AnnouncementsSection from './AnnouncementsSection'
import SmartRecommendations from './SmartRecommendations'

type TabId = 'overview' | 'community' | 'collaborate' | 'recognition' | 'events'

interface Tab {
  id: TabId
  label: string
  icon: React.ComponentType<{ className?: string }>
  badge?: number
}

export default function TabbedContent() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'community', label: 'Community', icon: Users, badge: 5 },
    { id: 'collaborate', label: 'Collaborate', icon: Briefcase, badge: 12 },
    { id: 'recognition', label: 'Recognition', icon: Trophy },
    { id: 'events', label: 'Events & News', icon: Calendar, badge: 3 },
  ]

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                    transition-colors duration-200
                    ${
                      isActive
                        ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon
                    className={`
                      -ml-0.5 mr-2 h-5 w-5
                      ${
                        isActive
                          ? 'text-indigo-500 dark:text-indigo-400'
                          : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                      }
                    `}
                  />
                  {tab.label}
                  {tab.badge && (
                    <span
                      className={`
                        ml-2 py-0.5 px-2 rounded-full text-xs font-medium
                        ${
                          isActive
                            ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300'
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                        }
                      `}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'overview' && (
            <div className="space-y-12 animate-fadeIn">
              <SmartRecommendations />
              <PopularThisWeek />
            </div>
          )}

          {activeTab === 'community' && (
            <div className="space-y-12 animate-fadeIn">
              <CommunitySpotlight />
              <DiscussionForumPreview />
            </div>
          )}

          {activeTab === 'collaborate' && (
            <div className="animate-fadeIn">
              <CollaborationRequests />
            </div>
          )}

          {activeTab === 'recognition' && (
            <div className="animate-fadeIn">
              <RecognitionWall />
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-12 animate-fadeIn">
              <EventsSection />
              <AnnouncementsSection />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
