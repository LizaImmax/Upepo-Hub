'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'fr' | 'sw' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.dashboard': 'Dashboard',
    'nav.community': 'Community',
    'nav.collaborate': 'Collaborate',
    'nav.recognition': 'Recognition',
    'nav.events': 'Events',
    'nav.announcements': 'Announcements',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.title': 'Upepo Hub',
    'hero.subtitle': 'Your unified gateway to the entire Upepo ecosystem. Connect, learn, innovate, and grow with our community.',
    'hero.explore': 'Explore Services',
    'hero.dashboard': 'Go to Dashboard',
    
    // Stats
    'stats.activeUsers': 'Active Users',
    'stats.communities': 'Communities',
    'stats.projects': 'Active Projects',
    'stats.events': 'Events This Month',
    
    // Sections
    'section.services': 'Explore Upepo Services',
    'section.servicesDesc': 'Discover our ecosystem of integrated services designed to empower you',
    'section.recommendations': 'Recommended for You',
    'section.popular': 'Popular This Week',
    'section.testimonials': 'What Our Community Says',
    
    // Common
    'common.learnMore': 'Learn more',
    'common.viewAll': 'View All',
    'common.search': 'Search...',
    'common.loading': 'Loading...',
    'common.readMore': 'Read More',
    'common.getStarted': 'Get Started',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.dashboard': 'Tableau de bord',
    'nav.community': 'Communauté',
    'nav.collaborate': 'Collaborer',
    'nav.recognition': 'Reconnaissance',
    'nav.events': 'Événements',
    'nav.announcements': 'Annonces',
    
    // Hero
    'hero.welcome': 'Bienvenue à',
    'hero.title': 'Upepo Hub',
    'hero.subtitle': 'Votre passerelle unifiée vers l\'ensemble de l\'écosystème Upepo. Connectez-vous, apprenez, innovez et grandissez avec notre communauté.',
    'hero.explore': 'Explorer les services',
    'hero.dashboard': 'Aller au tableau de bord',
    
    // Stats
    'stats.activeUsers': 'Utilisateurs actifs',
    'stats.communities': 'Communautés',
    'stats.projects': 'Projets actifs',
    'stats.events': 'Événements ce mois',
    
    // Sections
    'section.services': 'Explorer les services Upepo',
    'section.servicesDesc': 'Découvrez notre écosystème de services intégrés conçus pour vous autonomiser',
    'section.recommendations': 'Recommandé pour vous',
    'section.popular': 'Populaire cette semaine',
    'section.testimonials': 'Ce que dit notre communauté',
    
    // Common
    'common.learnMore': 'En savoir plus',
    'common.viewAll': 'Voir tout',
    'common.search': 'Rechercher...',
    'common.loading': 'Chargement...',
    'common.readMore': 'Lire la suite',
    'common.getStarted': 'Commencer',
  },
  sw: {
    // Navigation
    'nav.home': 'Nyumbani',
    'nav.dashboard': 'Dashibodi',
    'nav.community': 'Jamii',
    'nav.collaborate': 'Shirikiana',
    'nav.recognition': 'Utambulisho',
    'nav.events': 'Matukio',
    'nav.announcements': 'Matangazo',
    
    // Hero
    'hero.welcome': 'Karibu',
    'hero.title': 'Upepo Hub',
    'hero.subtitle': 'Lango lako la pamoja kwa mfumo wote wa Upepo. Unganisha, jifunze, buni, na kua na jamii yetu.',
    'hero.explore': 'Gundua Huduma',
    'hero.dashboard': 'Nenda kwa Dashibodi',
    
    // Stats
    'stats.activeUsers': 'Watumiaji hai',
    'stats.communities': 'Jamii',
    'stats.projects': 'Miradi hai',
    'stats.events': 'Matukio mwezi huu',
    
    // Sections
    'section.services': 'Gundua Huduma za Upepo',
    'section.servicesDesc': 'Gundua mfumo wetu wa huduma zilizounganishwa zilizobuniwa kukuwezesha',
    'section.recommendations': 'Inapendekezwa kwako',
    'section.popular': 'Maarufu wiki hii',
    'section.testimonials': 'Jamii yetu inasema nini',
    
    // Common
    'common.learnMore': 'Jifunze zaidi',
    'common.viewAll': 'Tazama Zote',
    'common.search': 'Tafuta...',
    'common.loading': 'Inapakia...',
    'common.readMore': 'Soma zaidi',
    'common.getStarted': 'Anza',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.dashboard': 'Painel',
    'nav.community': 'Comunidade',
    'nav.collaborate': 'Colaborar',
    'nav.recognition': 'Reconhecimento',
    'nav.events': 'Eventos',
    'nav.announcements': 'Anúncios',
    
    // Hero
    'hero.welcome': 'Bem-vindo ao',
    'hero.title': 'Upepo Hub',
    'hero.subtitle': 'Sua porta de entrada unificada para todo o ecossistema Upepo. Conecte-se, aprenda, inove e cresça com nossa comunidade.',
    'hero.explore': 'Explorar Serviços',
    'hero.dashboard': 'Ir para o Painel',
    
    // Stats
    'stats.activeUsers': 'Usuários ativos',
    'stats.communities': 'Comunidades',
    'stats.projects': 'Projetos ativos',
    'stats.events': 'Eventos este mês',
    
    // Sections
    'section.services': 'Explorar Serviços Upepo',
    'section.servicesDesc': 'Descubra nosso ecossistema de serviços integrados projetados para capacitá-lo',
    'section.recommendations': 'Recomendado para você',
    'section.popular': 'Popular esta semana',
    'section.testimonials': 'O que nossa comunidade diz',
    
    // Common
    'common.learnMore': 'Saiba mais',
    'common.viewAll': 'Ver Tudo',
    'common.search': 'Pesquisar...',
    'common.loading': 'Carregando...',
    'common.readMore': 'Leia mais',
    'common.getStarted': 'Começar',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && ['en', 'fr', 'sw', 'pt'].includes(savedLang)) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Update HTML lang attribute
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
