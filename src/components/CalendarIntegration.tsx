'use client'

import { Calendar, Download, Plus } from 'lucide-react'
import { Event } from '@/config/upepo'

interface CalendarIntegrationProps {
  event: Event
}

export default function CalendarIntegration({ event }: CalendarIntegrationProps) {
  // Generate Google Calendar link
  const generateGoogleCalendarLink = () => {
    const startDate = new Date(`${event.date} ${event.time}`)
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000) // 2 hours duration
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '')
    }
    
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.title,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
      details: event.description,
      location: event.location,
    })
    
    return `https://calendar.google.com/calendar/render?${params.toString()}`
  }

  // Generate Outlook Calendar link
  const generateOutlookCalendarLink = () => {
    const startDate = new Date(`${event.date} ${event.time}`)
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000)
    
    const params = new URLSearchParams({
      path: '/calendar/action/compose',
      rru: 'addevent',
      subject: event.title,
      startdt: startDate.toISOString(),
      enddt: endDate.toISOString(),
      body: event.description,
      location: event.location,
    })
    
    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`
  }

  // Generate ICS file for download
  const downloadICSFile = () => {
    const startDate = new Date(`${event.date} ${event.time}`)
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000)
    
    const formatICSDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '')
    }
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Upepo Hub//Events//EN
BEGIN:VEVENT
UID:${event.id}@upepohub.com
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${event.title.replace(/\s+/g, '_')}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-wrap gap-3">
      {/* Google Calendar */}
      <a
        href={generateGoogleCalendarLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
      >
        <Calendar className="w-4 h-4" />
        <span className="text-sm font-medium">Google Calendar</span>
      </a>

      {/* Outlook Calendar */}
      <a
        href={generateOutlookCalendarLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
      >
        <Calendar className="w-4 h-4" />
        <span className="text-sm font-medium">Outlook</span>
      </a>

      {/* Download ICS */}
      <button
        onClick={downloadICSFile}
        className="flex items-center gap-2 px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors shadow-md"
      >
        <Download className="w-4 h-4" />
        <span className="text-sm font-medium">Download (.ics)</span>
      </button>
    </div>
  )
}

// Bulk add all events component
export function BulkCalendarAdd() {
  const addAllToGoogleCalendar = () => {
    window.open('https://calendar.google.com/calendar/u/0/r/settings/addbyurl', '_blank')
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
      <div className="flex items-start gap-4">
        <Calendar className="w-10 h-10 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Stay Updated with Upepo Events</h3>
          <p className="text-white/90 mb-4">
            Sync all upcoming events to your calendar and never miss an opportunity to connect
            and learn.
          </p>
          <button
            onClick={addAllToGoogleCalendar}
            className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
          >
            <Plus className="w-5 h-5" />
            <span>Subscribe to Upepo Calendar</span>
          </button>
        </div>
      </div>
    </div>
  )
}
