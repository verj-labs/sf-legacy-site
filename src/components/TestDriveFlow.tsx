'use client'

import { useState, useEffect } from 'react'
import { Vehicle } from '@/types/vehicle'
import { getAllVehicles } from '@/lib/sanity/api'
import { VehicleCardSkeleton } from '@/components/Skeleton'
import VehicleCard from '@/components/VehicleCard'
import Chip from '@/components/Chip'
import { HiOutlineCheckCircle, HiOutlineArrowLeft, HiOutlineExternalLink, HiOutlineCalendar, HiOutlineTruck } from 'react-icons/hi'


export default function TestDriveFlow() {
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
    // console.log('Initializing Calendly...', { selectedVehicle, windowCalendly: !!window.Calendly })
    
    if (typeof window !== 'undefined' && window.Calendly && selectedVehicle) {
      const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-username/test-drive'
      const element = document.getElementById('calendly-inline-widget')

      // console.log('Calendly elements found:', { calendlyUrl, element: !!element })

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
          // console.log('Calendly initialized successfully')
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
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Step Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Vertical Step Indicator */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-sm border border-border p-6">
                <h3 className="text-h5 font-heading font-bold text-ink mb-6">Booking Process</h3>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 flex-shrink-0 ${
                      step >= 1 ? 'bg-brand border-brand text-white' : 'border-border text-body'
                    }`}>
                      {step > 1 && selectedVehicle ? (
                        <HiOutlineCheckCircle className="w-5 h-5" />
                      ) : (
                        <span className="text-sm font-bold">1</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-body-m font-medium ${step >= 1 ? 'text-brand' : 'text-body'}`}>
                        Choose Vehicle
                      </h4>
                      <p className="text-body-s text-body mt-1">
                        Select from our inventory
                      </p>
                    </div>
                  </div>
                  
                  {/* Connecting Line */}
                  <div className="flex justify-start ml-5">
                    <div className={`w-0.5 h-8 ${step >= 2 ? 'bg-brand' : 'bg-border'}`}></div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 flex-shrink-0 ${
                      step >= 2 ? 'bg-brand border-brand text-white' : 'border-border text-body'
                    }`}>
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-body-m font-medium ${step >= 2 ? 'text-brand' : 'text-body'}`}>
                        Schedule Time
                      </h4>
                      <p className="text-body-s text-body mt-1">
                        Pick your preferred slot
                      </p>
                    </div>
                  </div>
                </div>

                {/* Selected Vehicle Info */}
                {selectedVehicle && (
                  <div className="mt-8 p-4 bg-brand/5 rounded-lg border border-brand/20">
                    <h4 className="text-body-m font-medium text-brand mb-2">Selected Vehicle</h4>
                    <div className="text-body-s text-ink">
                      <div className="font-medium">
                        {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}
                      </div>
                      <div className="text-body mt-1">
                        Stock #{selectedVehicle.stockNum}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            {/* Step 1: Vehicle Selection */}
            <div className={`${step === 2 ? 'mb-16' : ''}`}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                    <HiOutlineTruck className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h2 className="text-h3 font-heading font-bold text-ink">
                      Choose Your Vehicle
                    </h2>
                    <p className="text-body-m text-body">
                      Select the vehicle you'd like to test drive from our current inventory
                    </p>
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <VehicleCardSkeleton key={index} />
                  ))}
                </div>
              ) : vehicles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {vehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle._id}
                      vehicle={vehicle}
                      variant="selectable"
                      isSelected={selectedVehicle?._id === vehicle._id}
                      onSelect={handleVehicleSelect}
                      showActions={false}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-border p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="w-20 h-20 bg-background-muted rounded-full flex items-center justify-center mx-auto mb-6">
                      <HiOutlineTruck className="w-10 h-10 text-body" />
                    </div>
                    <h3 className="text-h4 font-heading font-bold text-ink mb-3">
                      No Vehicles Available
                    </h3>
                    <p className="text-body-m text-body">
                      We're currently updating our inventory. Please check back soon or contact us directly.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Calendly Booking */}
            {step === 2 && selectedVehicle && (
              <div id="calendly-section" className="pt-8 border-t border-border">
                <div className="mb-8">
                  <button
                    onClick={handleBackToStep1}
                    className="inline-flex items-center gap-2 text-brand hover:text-brand-dark transition-colors mb-6"
                  >
                    <HiOutlineArrowLeft className="w-4 h-4" />
                    <span className="text-body-m font-medium">Change vehicle selection</span>
                  </button>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                      <HiOutlineCalendar className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h2 className="text-h3 font-heading font-bold text-ink">
                        Schedule Your Test Drive
                      </h2>
                      <p className="text-body-m text-body">
                        Choose your preferred date and time for the test drive
                      </p>
                    </div>
                  </div>
                  
                  {/* Selected Vehicle Summary */}
                  <div className="bg-white rounded-xl border border-border shadow-sm p-6 mb-8">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-18 bg-background-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={selectedVehicle.images?.[0] || "/api/placeholder/100/75"}
                          alt={`${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-h5 font-heading font-bold text-ink mb-2">
                          {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model} {selectedVehicle.trim}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Chip variant="secondary">Stock #{selectedVehicle.stockNum}</Chip>
                          <Chip variant="secondary">{formatMileage(selectedVehicle.odometer)} miles</Chip>
                        </div>
                        <div className="text-h5 font-bold text-brand">
                          {formatPrice(selectedVehicle.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calendly Widget */}
                <div className="bg-white rounded-xl border border-border shadow-sm p-8">
                  {isCalendlyLoading ? (
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto"></div>
                        <p className="mt-4 text-body-m text-body">Loading scheduling calendar...</p>
                        <p className="mt-2 text-body-s text-body">
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
                      <div className="mt-6 p-4 bg-background-muted rounded-lg text-center">
                        <p className="text-body-s text-body mb-3">
                          Calendar not loading? 
                        </p>
                        <a
                          href={`${process.env.NEXT_PUBLIC_CALENDLY_URL}?prefill_custom_1=${encodeURIComponent(`${selectedVehicle?.year} ${selectedVehicle?.make} ${selectedVehicle?.model} ${selectedVehicle?.trim || ''}`)}&prefill_custom_2=${selectedVehicle?.stockNum}`}
                          target="_blank"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors"
                        >
                          <HiOutlineExternalLink className="w-4 h-4" />
                          <span className="text-body-s font-medium">Open Calendly in New Tab</span>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
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
