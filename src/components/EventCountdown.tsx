'use client'

import { useEffect, useState } from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { mockEvents } from '@/data/mockData'

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Get the next upcoming event
  const nextEvent = mockEvents.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`)
    const dateB = new Date(`${b.date} ${b.time}`)
    return dateA.getTime() - dateB.getTime()
  })[0]

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date(`${nextEvent.date} ${nextEvent.time}`)
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [nextEvent])

  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 dark:from-indigo-800 dark:via-purple-800 dark:to-purple-900 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5" />
        <h3 className="text-lg font-semibold">Next Event</h3>
      </div>

      <h4 className="text-2xl font-bold mb-3">{nextEvent.title}</h4>

      <div className="grid grid-cols-4 gap-3 mb-4">
        <div className="text-center bg-white/10 rounded-lg p-3">
          <div className="text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-xs text-indigo-200 uppercase">Days</div>
        </div>
        <div className="text-center bg-white/10 rounded-lg p-3">
          <div className="text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs text-indigo-200 uppercase">Hours</div>
        </div>
        <div className="text-center bg-white/10 rounded-lg p-3">
          <div className="text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs text-indigo-200 uppercase">Min</div>
        </div>
        <div className="text-center bg-white/10 rounded-lg p-3">
          <div className="text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs text-indigo-200 uppercase">Sec</div>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>
            {nextEvent.date} at {nextEvent.time}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{nextEvent.location}</span>
        </div>
      </div>

      <button className="mt-4 w-full bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors">
        Register Now
      </button>
    </div>
  )
}
