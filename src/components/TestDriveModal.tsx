'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Vehicle } from '@/types/vehicle'

interface TestDriveModalProps {
  isOpen: boolean
  onClose: () => void
  vehicle: Vehicle
}

export default function TestDriveModal({ isOpen, onClose, vehicle }: TestDriveModalProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Calendly configuration
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-username/test-drive'
  
  // Create vehicle-specific prefill data for Calendly
  const prefillData = useMemo(() => ({
    name: '',
    email: '',
    'custom_1': `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim || ''} - ${vehicle.stockNum}`, // Vehicle
  }), [vehicle.year, vehicle.make, vehicle.model, vehicle.trim, vehicle.stockNum])

  // Build Calendly URL with prefill data
  const buildCalendlyUrl = useCallback(() => {
    const url = new URL(calendlyUrl)
    
    // Add prefill parameters
    Object.entries(prefillData).forEach(([key, value]) => {
      if (value) {
        if (key.startsWith('custom_')) {
          url.searchParams.append(`prefill_${key}`, value)
        } else {
          url.searchParams.append(`prefill_${key}`, value)
        }
      }
    })
    
    // Add embed parameters
    url.searchParams.append('embed_domain', window.location.hostname)
    url.searchParams.append('embed_type', 'Inline')
    
    return url.toString()
  }, [calendlyUrl, prefillData])

  useEffect(() => {
    if (isOpen) {
      // Load Calendly widget script
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => setIsLoading(false)
      document.head.appendChild(script)

      return () => {
        // Cleanup script when modal closes
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
        if (existingScript) {
          document.head.removeChild(existingScript)
        }
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && !isLoading && window.Calendly) {
      const element = document.getElementById('calendly-inline-widget')
      if (element) {
        // Initialize Calendly widget
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window.Calendly as any).initInlineWidget({
          url: buildCalendlyUrl(),
          parentElement: element,
          prefill: {
            customAnswers: {
              a1: `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim || ''}`,
            }
          }
        })
      }
    }
  }, [isOpen, isLoading, vehicle, buildCalendlyUrl])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-heading font-bold text-gray-900">
              Schedule Test Drive
            </h2>
            <p className="text-gray-600 mt-1">
              {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim} (Stock #{vehicle.stockNum})
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 h-full overflow-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading scheduling calendar...</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Before Your Test Drive:</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Please bring a valid driver's license</li>
                  <li>• Proof of insurance is required</li>
                  <li>• Test drives are available during business hours</li>
                  <li>• Allow 30-45 minutes for your appointment</li>
                </ul>
              </div>
              
              {/* Calendly Widget Container */}
              <div 
                id="calendly-inline-widget" 
                style={{ minWidth: '320px', height: '600px' }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Calendly: unknown
  }
}
