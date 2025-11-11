import Hero from '@/components/Hero'
import ComponentGrid from '@/components/ComponentGrid'
import StatsOverview from '@/components/StatsOverview'
import Testimonials from '@/components/Testimonials'
import SmartRecommendations from '@/components/SmartRecommendations'
import PopularThisWeek from '@/components/PopularThisWeek'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <StatsOverview />
      <ComponentGrid />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SmartRecommendations />
          <PopularThisWeek />
        </div>
      </div>
      <Testimonials />
    </div>
  )
}
