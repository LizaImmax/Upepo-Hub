'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, AlertCircle, Play } from 'lucide-react'
import DarkModeToggle from '@/components/DarkModeToggle'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import VoiceSearch from '@/components/VoiceSearch'
import CalendarIntegration from '@/components/CalendarIntegration'
import { mockEvents } from '@/data/mockData'

type TestStatus = 'pending' | 'passed' | 'failed' | 'warning'

interface TestCase {
  id: string
  name: string
  description: string
  status: TestStatus
  component?: React.ReactNode
}

export default function ComponentTestPage() {
  const [testResults, setTestResults] = useState<Record<string, TestStatus>>({
    darkMode: 'pending',
    language: 'pending',
    voice: 'pending',
    calendar: 'pending',
  })

  const updateTestStatus = (testId: string, status: TestStatus) => {
    setTestResults((prev) => ({ ...prev, [testId]: status }))
  }

  const tests: TestCase[] = [
    {
      id: 'darkMode',
      name: 'Dark Mode Toggle',
      description: 'Click the toggle below to switch between light and dark modes. The entire page should update.',
      status: testResults.darkMode,
      component: (
        <div className="flex flex-col gap-4">
          <DarkModeToggle />
          <div className="flex gap-2">
            <button
              onClick={() => updateTestStatus('darkMode', 'passed')}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              ✓ Works
            </button>
            <button
              onClick={() => updateTestStatus('darkMode', 'failed')}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              ✗ Broken
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'language',
      name: 'Language Switcher',
      description: 'Click the language dropdown and select different languages. The flag emoji should update.',
      status: testResults.language,
      component: (
        <div className="flex flex-col gap-4">
          <LanguageSwitcher />
          <div className="flex gap-2">
            <button
              onClick={() => updateTestStatus('language', 'passed')}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              ✓ Works
            </button>
            <button
              onClick={() => updateTestStatus('language', 'failed')}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              ✗ Broken
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'voice',
      name: 'Voice Search',
      description: 'Click the microphone icon and say commands like "dashboard", "events", or "announcements". Browser must support Web Speech API.',
      status: testResults.voice,
      component: (
        <div className="flex flex-col gap-4">
          <VoiceSearch />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            💡 Tip: If the mic icon doesn't appear, your browser may not support the Web Speech API. Try Chrome or Edge.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => updateTestStatus('voice', 'passed')}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              ✓ Works
            </button>
            <button
              onClick={() => updateTestStatus('voice', 'failed')}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              ✗ Broken
            </button>
            <button
              onClick={() => updateTestStatus('voice', 'warning')}
              className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
            >
              ⚠ Not Supported
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'calendar',
      name: 'Calendar Integration',
      description: 'Click the calendar buttons below to test Google Calendar, Outlook, and ICS download functionality.',
      status: testResults.calendar,
      component: mockEvents[0] ? (
        <div className="flex flex-col gap-4">
          <CalendarIntegration event={mockEvents[0]} />
          <div className="flex gap-2">
            <button
              onClick={() => updateTestStatus('calendar', 'passed')}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              ✓ Works
            </button>
            <button
              onClick={() => updateTestStatus('calendar', 'failed')}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              ✗ Broken
            </button>
          </div>
        </div>
      ) : (
        <p className="text-red-600">No events available for testing</p>
      ),
    },
  ]

  const getStatusIcon = (status: TestStatus) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="w-6 h-6 text-green-600" />
      case 'failed':
        return <XCircle className="w-6 h-6 text-red-600" />
      case 'warning':
        return <AlertCircle className="w-6 h-6 text-yellow-600" />
      default:
        return <Play className="w-6 h-6 text-gray-400" />
    }
  }

  const getStatusBadge = (status: TestStatus) => {
    const badges = {
      passed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      failed: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      pending: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    }
    return badges[status]
  }

  const passedTests = Object.values(testResults).filter((s) => s === 'passed').length
  const totalTests = tests.length

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Component Testing Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Test all Phase 3 features to ensure they're working correctly
          </p>
        </div>

        {/* Progress Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Testing Progress
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(passedTests / totalTests) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {passedTests}/{totalTests}
            </span>
          </div>
        </div>

        {/* Test Cases */}
        <div className="space-y-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(test.status)}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {test.name}
                      </h3>
                      <span
                        className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                          test.status
                        )}`}
                      >
                        {test.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">{test.description}</p>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  {test.component}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-indigo-50 dark:bg-indigo-900 rounded-xl p-6">
          <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100 mb-2">
            Testing Instructions
          </h3>
          <ul className="space-y-2 text-indigo-800 dark:text-indigo-200 text-sm">
            <li>• Test each component by interacting with it</li>
            <li>• Mark as "Works" if the component functions correctly</li>
            <li>• Mark as "Broken" if you encounter any errors</li>
            <li>• Mark as "Not Supported" if your browser doesn't support the feature</li>
            <li>• All tests should pass for full Phase 3 completion</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
