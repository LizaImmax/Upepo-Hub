'use client'

import SearchBar from './SearchBar'
import HubLogo from './HubLogo'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-900 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 flex flex-col items-center gap-4">
            <span>{t('hero.welcome')}</span>
            <span className="flex items-center gap-4">
              {t('hero.title')} <HubLogo size="lg" />
            </span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#components"
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t('hero.explore')}
            </a>
            <a
              href="/dashboard"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition-colors"
            >
              {t('hero.dashboard')}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">☁️</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-pulse delay-100">
        🚀
      </div>
    </section>
  )
}
