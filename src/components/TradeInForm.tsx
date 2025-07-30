'use client'

import { useState } from 'react'

interface TradeInFormProps {
  compact?: boolean
}

export default function TradeInForm({ compact = false }: TradeInFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [vehicleData, setVehicleData] = useState({
    // Step 1: Basic Info
    year: '',
    make: '',
    model: '',
    mileage: '',
    condition: '',
    // Step 2: Contact
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  })
  const [estimatedValue, setEstimatedValue] = useState<{ low: number; high: number } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string | string[]) => {
    setVehicleData(prev => ({ ...prev, [field]: value }))
  }

  const calculateEstimate = () => {
    // Simple estimation logic - in real app, this would call an API
    const baseValue = parseInt(vehicleData.year) > 2015 ? 15000 : 8000
    const mileageAdjustment = Math.max(0, (200000 - parseInt(vehicleData.mileage)) / 10000) * 1000
    const conditionMultiplier = 
      vehicleData.condition === 'excellent' ? 1.2 :
      vehicleData.condition === 'good' ? 1.0 :
      vehicleData.condition === 'fair' ? 0.8 : 0.6

    const estimated = (baseValue + mileageAdjustment) * conditionMultiplier
    setEstimatedValue({
      low: Math.round(estimated * 0.9),
      high: Math.round(estimated * 1.1)
    })
  }

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    } else if (currentStep === 2) {
      calculateEstimate()
      setCurrentStep(3)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleSubmit = async () => {
    if (!process.env.NEXT_PUBLIC_TRADE_IN_FORM_URL) {
      alert('Trade-in form URL not configured. Please contact support.')
      return
    }

    setIsSubmitting(true)
    
    try {
      const formData = new FormData()
      formData.append('year', vehicleData.year)
      formData.append('make', vehicleData.make)
      formData.append('model', vehicleData.model)
      formData.append('mileage', vehicleData.mileage)
      formData.append('condition', vehicleData.condition)
      formData.append('firstName', vehicleData.firstName)
      formData.append('lastName', vehicleData.lastName)
      formData.append('email', vehicleData.email)
      formData.append('phone', vehicleData.phone)
      formData.append('comments', vehicleData.comments)
      formData.append('estimatedValue', estimatedValue ? `${formatCurrency(estimatedValue.low)} - ${formatCurrency(estimatedValue.high)}` : 'Not calculated')

      const response = await fetch(process.env.NEXT_PUBLIC_TRADE_IN_FORM_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        alert('Thank you! Your trade-in request has been submitted successfully. We\'ll contact you within 24 hours.')
        // Reset form
        setCurrentStep(1)
        setVehicleData({
          year: '',
          make: '',
          model: '',
          mileage: '',
          condition: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          comments: ''
        })
        setEstimatedValue(null)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Sorry, there was an error submitting your request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Nissan', 'Hyundai', 'Kia', 'Volkswagen', 'Subaru']
  const years = Array.from({ length: 25 }, (_, i) => (new Date().getFullYear() - i).toString())

  const steps = [
    { number: 1, title: 'Vehicle Info', description: 'Basic vehicle details' },
    { number: 2, title: 'Contact', description: 'Your contact information' },
    { number: 3, title: 'Quote', description: 'Your trade-in estimate' }
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Progress Indicator */}
      <div className="bg-gray-50 px-8 py-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                currentStep >= step.number 
                  ? 'bg-primary border-primary text-white' 
                  : 'bg-white border-gray-300 text-gray-500'
              }`}>
                {currentStep > step.number ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-4 ${
                  currentStep > step.number ? 'bg-primary' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-heading font-semibold text-gray-900">
            {steps[currentStep - 1]?.title}
          </h3>
          <p className="text-gray-600">
            {steps[currentStep - 1]?.description}
          </p>
        </div>
      </div>

      <div className="p-8">
        {/* Step 1: Vehicle Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year <span className="text-red-500">*</span>
                </label>
                <select
                  value={vehicleData.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">Select Year</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Make <span className="text-red-500">*</span>
                </label>
                <select
                  value={vehicleData.make}
                  onChange={(e) => handleInputChange('make', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">Select Make</option>
                  {makes.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Model <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={vehicleData.model}
                  onChange={(e) => handleInputChange('model', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., Camry, Accord, F-150"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mileage <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={vehicleData.mileage}
                  onChange={(e) => handleInputChange('mileage', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 50000"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Overall Condition <span className="text-red-500">*</span>
                </label>
                <select
                  value={vehicleData.condition}
                  onChange={(e) => handleInputChange('condition', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">Select Condition</option>
                  <option value="excellent">Excellent - Like new, no visible wear</option>
                  <option value="good">Good - Minor wear, well maintained</option>
                  <option value="fair">Fair - Noticeable wear, some issues</option>
                  <option value="poor">Poor - Significant damage or mechanical issues</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Contact Information */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={vehicleData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={vehicleData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={vehicleData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={vehicleData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Comments
                </label>
                <textarea
                  value={vehicleData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={4}
                  placeholder="Any additional information about your vehicle or trade-in preferences..."
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Your Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Vehicle Details</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium">Vehicle:</span> {vehicleData.year} {vehicleData.make} {vehicleData.model}</p>
                    <p><span className="font-medium">Mileage:</span> {vehicleData.mileage} miles</p>
                    <p><span className="font-medium">Condition:</span> {vehicleData.condition}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium">Name:</span> {vehicleData.firstName} {vehicleData.lastName}</p>
                    <p><span className="font-medium">Email:</span> {vehicleData.email}</p>
                    <p><span className="font-medium">Phone:</span> {vehicleData.phone}</p>
                  </div>
                </div>
              </div>
              
              {vehicleData.comments && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-700 mb-2">Additional Comments</h4>
                  <p className="text-sm text-gray-600">{vehicleData.comments}</p>
                </div>
              )}
              
              <div className="mt-6 p-4 bg-primary bg-opacity-10 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Estimated Trade-In Value</h4>
                <p className="text-2xl font-bold text-primary">
                  {estimatedValue ? `${formatCurrency(estimatedValue.low)} - ${formatCurrency(estimatedValue.high)}` : 'Calculating...'}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  This is a preliminary estimate. Final value will be determined after inspection.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-8 border-t border-gray-200">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={currentStep === 3 ? handleSubmit : nextStep}
            disabled={isSubmitting}
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : currentStep === 3 ? 'Submit Trade-In Request' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}
