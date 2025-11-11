'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { CheckCircle, Globe } from 'lucide-react'

export default function LanguageTestPage() {
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', demo: 'Hello, World!' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', demo: 'Bonjour, le monde!' },
    { code: 'sw', name: 'Kiswahili', flag: '🇰🇪', demo: 'Habari, Dunia!' },
    { code: 'pt', name: 'Português', flag: '🇵🇹', demo: 'Olá, Mundo!' },
  ] as const

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Language Switcher Test
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Click any language below to see the content update in real-time
          </p>
        </div>

        {/* Current Language Display */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mb-8 text-center">
          <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Currently Selected</p>
          <div className="text-6xl mb-4">
            {languages.find((l) => l.code === language)?.flag}
          </div>
          <h2 className="text-3xl font-bold mb-2">
            {languages.find((l) => l.code === language)?.name}
          </h2>
          <p className="text-xl opacity-90">
            {languages.find((l) => l.code === language)?.demo}
          </p>
        </div>

        {/* Language Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`p-6 rounded-xl border-2 transition-all ${
                language === lang.code
                  ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:border-indigo-500'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-400 dark:hover:border-indigo-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{lang.flag}</span>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 dark:text-white text-lg">
                      {lang.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{lang.demo}</p>
                  </div>
                </div>
                {language === lang.code && (
                  <CheckCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Translation Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Live Translation Examples
          </h3>
          
          <div className="space-y-6">
            {/* Navigation Translations */}
            <div className="border-l-4 border-indigo-600 pl-4">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Navigation Menu
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Home:</span>{' '}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('nav.home')}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Dashboard:</span>{' '}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('nav.dashboard')}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Events:</span>{' '}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('nav.events')}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Announcements:</span>{' '}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('nav.announcements')}
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Translations */}
            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Hero Section
              </h4>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Welcome Message:</span>{' '}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('hero.welcome')}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Subtitle:</span>{' '}
                  <p className="font-medium text-gray-900 dark:text-white mt-1">
                    {t('hero.subtitle')}
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {t('hero.explore')}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                    {t('hero.dashboard')}
                  </span>
                </div>
              </div>
            </div>

            {/* Common Translations */}
            <div className="border-l-4 border-pink-600 pl-4">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Common Phrases
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Learn More:</span>{' '}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('common.learnMore')}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">View All:</span>{' '}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('common.viewAll')}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Search:</span>{' '}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('common.search')}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Loading:</span>{' '}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t('common.loading')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-2">
            ✨ How to Test Language Switching
          </h4>
          <ol className="space-y-2 text-blue-800 dark:text-blue-300 text-sm">
            <li>1. Click any language card above to switch languages</li>
            <li>2. Watch the translations update in real-time below</li>
            <li>3. Check the navigation bar at the top - it should also update</li>
            <li>4. Visit the homepage to see the Hero section in the selected language</li>
            <li>5. The language preference is saved in localStorage (persists on refresh)</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
