'use client'

import { useState, useEffect, useCallback } from 'react'
import { Mic, MicOff, Volume2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { upepoComponents } from '@/config/upepo'

export default function VoiceSearch() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(false)
  const [recognition, setRecognition] = useState<any>(null)
  const router = useRouter()

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 1
      utterance.pitch = 1
      utterance.volume = 1
      window.speechSynthesis.speak(utterance)
    }
  }, [])

  const processVoiceCommand = useCallback((command: string) => {
    const lowerCommand = command.toLowerCase()
    
    // Navigate to pages
    if (lowerCommand.includes('dashboard') || lowerCommand.includes('dash board')) {
      speak('Opening dashboard')
      router.push('/dashboard')
    } else if (lowerCommand.includes('event')) {
      speak('Opening events')
      router.push('/events')
    } else if (lowerCommand.includes('announcement')) {
      speak('Opening announcements')
      router.push('/announcements')
    } else if (lowerCommand.includes('home')) {
      speak('Going to homepage')
      router.push('/')
    }
    // Search for services
    else {
      const matchedService = upepoComponents.find(comp => 
        lowerCommand.includes(comp.name.toLowerCase()) ||
        lowerCommand.includes(comp.category)
      )
      
      if (matchedService) {
        speak(`Opening ${matchedService.name}`)
        router.push(matchedService.url)
      } else {
        speak('Sorry, I did not understand that command. Try saying dashboard, events, or a service name.')
      }
    }
    
    setTranscript('')
  }, [router, speak])

  useEffect(() => {
    // Check if browser supports Web Speech API
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      
      if (SpeechRecognition) {
        setIsSupported(true)
        const recognitionInstance = new SpeechRecognition()
        recognitionInstance.continuous = false
        recognitionInstance.interimResults = true
        recognitionInstance.lang = 'en-US'

        recognitionInstance.onresult = (event: any) => {
          const current = event.resultIndex
          const transcriptText = event.results[current][0].transcript
          setTranscript(transcriptText)
          
          // Process final result
          if (event.results[current].isFinal) {
            processVoiceCommand(transcriptText)
          }
        }

        recognitionInstance.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error)
          setIsListening(false)
        }

        recognitionInstance.onend = () => {
          setIsListening(false)
        }

        setRecognition(recognitionInstance)
      }
    }
  }, [processVoiceCommand])

  const toggleListening = () => {
    if (!recognition) return

    if (isListening) {
      recognition.stop()
      setIsListening(false)
    } else {
      setTranscript('')
      recognition.start()
      setIsListening(true)
      speak('Listening...')
    }
  }

  if (!isSupported) {
    return null // Hide if browser doesn't support voice
  }

  return (
    <div className="relative">
      {/* Voice Search Button */}
      <button
        onClick={toggleListening}
        className={`p-3 rounded-full transition-all ${
          isListening
            ? 'bg-red-600 text-white animate-pulse shadow-lg'
            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
        }`}
        aria-label={isListening ? 'Stop listening' : 'Start voice search'}
      >
        {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
      </button>

      {/* Transcript Display */}
      {transcript && (
        <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 min-w-[250px] border border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-2">
            <Volume2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                You said:
              </p>
              <p className="text-sm text-gray-900 dark:text-white">{transcript}</p>
            </div>
          </div>
        </div>
      )}

      {/* Help Tooltip */}
      {isListening && (
        <div className="absolute top-full mt-2 right-0 bg-indigo-600 text-white rounded-lg shadow-xl p-4 min-w-[280px] animate-fadeIn">
          <p className="text-sm font-semibold mb-2">Voice Commands:</p>
          <ul className="text-xs space-y-1 text-white/90">
            <li>• &quot;Open dashboard&quot;</li>
            <li>• &quot;Show events&quot;</li>
            <li>• &quot;Find Upepo Learn&quot;</li>
            <li>• &quot;Go to announcements&quot;</li>
            <li>• Say any service name</li>
          </ul>
        </div>
      )}
    </div>
  )
}
