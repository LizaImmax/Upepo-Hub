'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Amara Okafor',
      role: 'Founder, TechStart Nigeria',
      avatar: '👩‍💼',
      quote:
        'Upepo Hub transformed how we access resources. From cloud hosting to mentorship, everything we needed was in one place. Our startup scaled 10x in 6 months!',
      service: 'Upepo Ventures',
    },
    {
      name: 'David Kimani',
      role: 'Software Engineer',
      avatar: '👨‍💻',
      quote:
        'The learning resources on Upepo Learn helped me transition from junior to senior developer. The certifications from Upepo Academy opened doors I never imagined.',
      service: 'Upepo Learn',
    },
    {
      name: 'Fatima Hassan',
      role: 'Community Leader',
      avatar: '👩‍🏫',
      quote:
        'Upepo Foundation gave us the tools to make real impact in our community. The network we built through Upepo Hub is invaluable.',
      service: 'Upepo Foundation',
    },
    {
      name: 'James Mwangi',
      role: 'Content Creator',
      avatar: '🎙️',
      quote:
        'Upepo Voices and Studio gave me the platform to share stories that matter. The production support and community engagement are unmatched.',
      service: 'Upepo Studio',
    },
  ]

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-700 to-purple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Community Success Stories</h2>
          <p className="text-xl text-indigo-100">
            Hear from members who are building, learning, and growing with Upepo
          </p>
        </div>

        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Testimonial Content */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-6">{testimonials[currentIndex].avatar}</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {testimonials[currentIndex].role}
              </p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-2">
                via {testimonials[currentIndex].service}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-indigo-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">12,847+</div>
            <div className="text-indigo-100">Active Members</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">342+</div>
            <div className="text-indigo-100">Projects Launched</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">18+</div>
            <div className="text-indigo-100">Events Monthly</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">12</div>
            <div className="text-indigo-100">Integrated Services</div>
          </div>
        </div>
      </div>
    </section>
  )
}
