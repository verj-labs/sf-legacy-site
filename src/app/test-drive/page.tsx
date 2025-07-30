'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Vehicle } from '@/types/vehicle'
import { getVehicleById } from '@/lib/sanity/api'

function TestDrivePageContent() {
  const searchParams = useSearchParams()
  const vehicleId = searchParams.get('vehicleId')
  
  const [vehicle, setVehicle] = useState<Vehicle | null>(null)
  const [loading, setLoading] = useState(true)
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(true)

  useEffect(() => {
    const loadVehicleData = async () => {
      if (!vehicleId) {
        setLoading(false)
        return
      }

      try {
        const vehicleData = await getVehicleById(vehicleId)
        setVehicle(vehicleData)
      } catch (error) {
        console.error('Error loading vehicle data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadVehicleData()
  }, [vehicleId])

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      setIsCalendlyLoading(false)
    }
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  const initializeCalendly = useCallback(() => {
    if (window.Calendly && vehicle) {
      const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-username/test-drive'
      const element = document.getElementById('calendly-inline-widget')
      
      if (element) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window.Calendly as any).initInlineWidget({
          url: calendlyUrl,
          parentElement: element,
          prefill: {
            customAnswers: {
              a1: `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim || ''}`,
              a2: vehicle.stockNum,
              a3: vehicle._id
            }
          }
        })
      }
    }
  }, [vehicle])

  useEffect(() => {
    if (!isCalendlyLoading && vehicle) {
      initializeCalendly()
    }
  }, [isCalendlyLoading, vehicle, initializeCalendly])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Schedule Your Test Drive
          </h1>
          {vehicle ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <img
                  src={vehicle.images?.[0] || '/api/placeholder/200/150'}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <div className="text-left">
                  <h2 className="text-xl font-bold text-gray-900">
                    {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                  </h2>
                  <p className="text-gray-600">Stock #{vehicle.stockNum}</p>
                  <p className="text-lg font-bold text-primary">
                    ${vehicle.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 mb-6">
              Select a time that works best for you to test drive one of our vehicles.
            </p>
          )}
        </div>

        {/* Important Information */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Important Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div>
              <h4 className="font-medium mb-2">What to Bring:</h4>
              <ul className="space-y-1">
                <li>• Valid driver's license</li>
                <li>• Proof of insurance</li>
                <li>• Contact information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Test Drive Details:</h4>
              <ul className="space-y-1">
                <li>• Duration: 30-45 minutes</li>
                <li>• Available during business hours</li>
                <li>• Sales representative included</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Calendly Widget */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {isCalendlyLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading scheduling calendar...</p>
              </div>
            </div>
          ) : (
            <div 
              id="calendly-inline-widget" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          )}
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Questions? Contact Us
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>sales@sflegacyautos.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>123 Auto Row, SF, CA</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function TestDrivePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading test drive booking...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <TestDrivePageContent />
    </Suspense>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Calendly: unknown
  }
}
