'use client'

import { useState, useEffect } from 'react'
import { Vehicle } from '@/types/vehicle'
import { getAllVehicles } from '@/lib/sanity/api'
import { VehicleCardSkeleton } from '@/components/Skeleton'

interface TestDriveFlowProps {}

export default function TestDriveFlow({}: TestDriveFlowProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(false)

  // Load vehicles on component mount
  useEffect(() => {
    const loadVehicles = async () => {
      try {
        setLoading(true)
        const vehicleData = await getAllVehicles()
        setVehicles(vehicleData)
      } catch (error) {
        console.error('Error loading vehicles:', error)
      } finally {
        setLoading(false)
      }
    }

    loadVehicles()
  }, [])

  // Load Calendly script when vehicle is selected
  useEffect(() => {
    if (selectedVehicle && step === 2) {
      setIsCalendlyLoading(true)
      
      // Check if Calendly script is already loaded
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      
      if (existingScript) {
        // Script already exists, just initialize
        setIsCalendlyLoading(false)
        setTimeout(() => {
          initializeCalendly()
        }, 100)
      } else {
        // Load the script
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        script.onload = () => {
          setIsCalendlyLoading(false)
          setTimeout(() => {
            initializeCalendly()
          }, 100)
        }
        script.onerror = () => {
          console.error('Failed to load Calendly script')
          setIsCalendlyLoading(false)
        }
        document.head.appendChild(script)
      }
    }
  }, [selectedVehicle, step])

  const initializeCalendly = () => {
    console.log('Initializing Calendly...', { selectedVehicle, windowCalendly: !!window.Calendly })
    
    if (typeof window !== 'undefined' && window.Calendly && selectedVehicle) {
      const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-username/test-drive'
      const element = document.getElementById('calendly-inline-widget')
      
      console.log('Calendly elements found:', { calendlyUrl, element: !!element })
      
      if (element) {
        // Clear any existing content
        element.innerHTML = ''
        
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window.Calendly as any).initInlineWidget({
            url: calendlyUrl,
            parentElement: element,
            prefill: {
              name: '',
              email: '',
              customAnswers: {
                a1: `${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model} ${selectedVehicle.trim || ''}`,
                a2: selectedVehicle.stockNum,
                a3: selectedVehicle._id
              }
            }
          })
          console.log('Calendly initialized successfully')
        } catch (error) {
          console.error('Error initializing Calendly:', error)
          // Fallback: show a message with link to Calendly
          element.innerHTML = `
            <div class="text-center p-8">
              <p class="text-gray-600 mb-4">Unable to load the calendar widget.</p>
              <a href="${calendlyUrl}" target="_blank" class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Schedule on Calendly
              </a>
            </div>
          `
        }
      }
    } else {
      console.warn('Calendly not available:', { 
        window: typeof window !== 'undefined', 
        Calendly: !!window?.Calendly, 
        selectedVehicle: !!selectedVehicle 
      })
    }
  }

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle)
    setStep(2)
    // Scroll to calendly section after a brief delay
    setTimeout(() => {
      const calendlySection = document.getElementById('calendly-section')
      if (calendlySection) {
        calendlySection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleBackToStep1 = () => {
    setStep(1)
    setSelectedVehicle(null)
    setIsCalendlyLoading(false)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Vertical Step Layout */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start space-x-8">
          {/* Left Side - Vertical Step Indicator */}
          <div className="flex flex-col items-center space-y-4 pt-1 sticky top-24 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
              step >= 1 ? 'bg-primary border-primary text-white' : 'border-gray-300 text-gray-400'
            }`}>
              {step > 1 && selectedVehicle ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className="text-lg font-semibold">1</span>
              )}
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <span className={`text-sm font-medium text-center ${step >= 1 ? 'text-primary' : 'text-gray-500'}`}>
                Choose<br />Vehicle
              </span>
            </div>
            
            {/* Connecting Line */}
            <div className={`w-0.5 h-12 ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
            
            <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
              step >= 2 ? 'bg-primary border-primary text-white' : 'border-gray-300 text-gray-400'
            }`}>
              <span className="text-lg font-semibold">2</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <span className={`text-sm font-medium text-center ${step >= 2 ? 'text-primary' : 'text-gray-500'}`}>
                Book<br />Appointment
              </span>
            </div>
          </div>

          {/* Right Side - Content Area */}
          <div className="flex-1">
            {/* Step 1: Vehicle Selection */}
            <div className="mb-12">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                  Choose Your Vehicle
                </h2>
                <p className="text-lg text-gray-600">
                  Select the vehicle you'd like to test drive from our current inventory.
                </p>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <VehicleCardSkeleton key={index} />
                  ))}
                </div>
              ) : vehicles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vehicles.map((vehicle) => (
                    <div 
                      key={vehicle._id}
                      onClick={() => handleVehicleSelect(vehicle)}
                      className={`group bg-white rounded-lg border-2 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer ${
                        selectedVehicle?._id === vehicle._id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-200 hover:border-primary'
                      }`}
                    >
                      <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                        <img
                          src={vehicle.images?.[0] || "/api/placeholder/400/300"}
                          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                        </h3>
                        
                        <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                          <span>{formatMileage(vehicle.odometer)} miles</span>
                          <span>•</span>
                          <span>{vehicle.transmission}</span>
                          <span>•</span>
                          <span className="capitalize">{vehicle.bodyType}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            {vehicle.salePrice && vehicle.salePrice < vehicle.price ? (
                              <div>
                                <span className="text-xl font-bold text-primary">
                                  {formatPrice(vehicle.salePrice)}
                                </span>
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  {formatPrice(vehicle.price)}
                                </span>
                              </div>
                            ) : (
                              <span className="text-xl font-bold text-primary">
                                {formatPrice(vehicle.price)}
                              </span>
                            )}
                          </div>
                          {selectedVehicle?._id === vehicle._id ? (
                            <span className="text-primary font-medium text-sm flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Selected
                            </span>
                          ) : (
                            <span className="text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                              Select →
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      No Vehicles Available
                    </h3>
                    <p className="text-gray-600">
                      We're currently updating our inventory. Please check back soon or contact us directly.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Calendly Booking - Shows below vehicle selection */}
            {step === 2 && selectedVehicle && (
              <div id="calendly-section" className="mt-12 pt-8 border-t border-gray-200">
                <div className="mb-8">
                  <button
                    onClick={handleBackToStep1}
                    className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Change vehicle selection
                  </button>
                  
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                    Schedule Your Test Drive
                  </h2>
                  
                  {/* Selected Vehicle Summary */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedVehicle.images?.[0] || "/api/placeholder/100/75"}
                        alt={`${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`}
                        className="w-24 h-18 object-cover rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-lg text-gray-900">
                          {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model} {selectedVehicle.trim}
                        </h3>
                        <div className="text-gray-600 text-sm">
                          Stock #{selectedVehicle.stockNum} • {formatMileage(selectedVehicle.odometer)} miles
                        </div>
                        <div className="text-primary font-bold text-lg mt-1">
                          {formatPrice(selectedVehicle.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calendly Widget */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                  {isCalendlyLoading ? (
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading scheduling calendar...</p>
                        <p className="mt-2 text-xs text-gray-500">
                          If this takes too long, please try refreshing the page
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div 
                        id="calendly-inline-widget" 
                        style={{ minWidth: '320px', height: '700px' }}
                        className="calendly-inline-widget"
                      ></div>
                      {/* Fallback Calendly Link */}
                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600 mb-3">
                          Calendar not loading? 
                        </p>
                        <a
                          href={`${process.env.NEXT_PUBLIC_CALENDLY_URL}?prefill_custom_1=${encodeURIComponent(`${selectedVehicle?.year} ${selectedVehicle?.make} ${selectedVehicle?.model} ${selectedVehicle?.trim || ''}`)}&prefill_custom_2=${selectedVehicle?.stockNum}`}
                          target="_blank"
                          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Open Calendly in New Tab
                        </a>
                      </div>
                      {/* Debug info - remove in production */}
                      <div className="mt-4 text-xs text-gray-500 border-t pt-2">
                        Debug: Vehicle selected - {selectedVehicle?.year} {selectedVehicle?.make} {selectedVehicle?.model}
                        <br />
                        Calendly URL: {process.env.NEXT_PUBLIC_CALENDLY_URL}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-16 bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            Need Help?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Have questions about scheduling a test drive or need assistance with vehicle selection? 
            Our team is here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="tel:+19057494061"
              className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (905) 749-4061
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Us
            </a>
          </div>
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
