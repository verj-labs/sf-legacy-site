'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TradeInPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [vehicleData, setVehicleData] = useState({
    // Step 1: Basic Info
    year: '',
    make: '',
    model: '',
    trim: '',
    mileage: '',
    // Step 2: Condition
    exteriorCondition: '',
    interiorCondition: '',
    mechanicalCondition: '',
    accidents: '',
    serviceRecords: '',
    // Step 3: Features
    transmission: '',
    engine: '',
    drivetrain: '',
    fuelType: '',
    features: [] as string[],
    // Step 4: Contact
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: '',
    comments: ''
  })
  const [estimatedValue, setEstimatedValue] = useState<{ low: number; high: number } | null>(null)

  const handleInputChange = (field: string, value: string | string[]) => {
    setVehicleData(prev => ({ ...prev, [field]: value }))
  }

  const handleFeatureToggle = (feature: string) => {
    setVehicleData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const calculateEstimate = () => {
    // Simple estimation logic - in real app, this would call an API
    const baseValue = parseInt(vehicleData.year) > 2015 ? 15000 : 8000
    const mileageAdjustment = Math.max(0, (200000 - parseInt(vehicleData.mileage)) / 10000) * 1000
    const conditionMultiplier = 
      vehicleData.exteriorCondition === 'excellent' ? 1.2 :
      vehicleData.exteriorCondition === 'good' ? 1.0 :
      vehicleData.exteriorCondition === 'fair' ? 0.8 : 0.6

    const estimated = (baseValue + mileageAdjustment) * conditionMultiplier
    setEstimatedValue({
      low: Math.round(estimated * 0.9),
      high: Math.round(estimated * 1.1)
    })
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else if (currentStep === 4) {
      calculateEstimate()
      setCurrentStep(5)
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

  const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Nissan', 'Hyundai', 'Kia', 'Volkswagen', 'Subaru']
  const years = Array.from({ length: 25 }, (_, i) => (new Date().getFullYear() - i).toString())
  
  const availableFeatures = [
    'Leather Seats', 'Sunroof', 'Navigation System', 'Backup Camera', 'Bluetooth',
    'Heated Seats', 'Premium Audio', 'Keyless Entry', 'Remote Start', 'Apple CarPlay',
    'Android Auto', 'Blind Spot Monitoring', 'Lane Keep Assist', 'Adaptive Cruise Control'
  ]

  const benefits = [
    {
      title: 'Instant Online Quote',
      description: 'Get an estimated trade-in value in minutes with our online tool',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Competitive Values',
      description: 'We offer some of the best trade-in values in the San Francisco area',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'All Makes Welcome',
      description: 'We accept vehicles from all manufacturers, regardless of age or condition',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Hassle-Free Process',
      description: 'Simple paperwork and quick transaction to get you on the road faster',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  const steps = [
    { number: 1, title: 'Vehicle Info', description: 'Basic vehicle details' },
    { number: 2, title: 'Condition', description: 'Vehicle condition assessment' },
    { number: 3, title: 'Features', description: 'Equipment and options' },
    { number: 4, title: 'Contact', description: 'Your contact information' },
    { number: 5, title: 'Quote', description: 'Your trade-in estimate' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center text-sm text-white/80 justify-center mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>Trade-In</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Get Your Trade-In Quote
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Turn your current vehicle into cash or credit toward your next purchase. 
              Get an instant estimate with our easy online valuation tool.
            </p>
            <button 
              onClick={() => document.getElementById('valuation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Start My Quote
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Trade With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We make trading in your vehicle simple, fast, and rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Valuation Form */}
        <section id="valuation-form" className="mb-20">
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
                        Trim/Style
                      </label>
                      <input
                        type="text"
                        value={vehicleData.trim}
                        onChange={(e) => handleInputChange('trim', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="e.g., LE, EX, XLT"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
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
                  </div>
                </div>
              )}

              {/* Step 2: Condition */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Exterior Condition <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={vehicleData.exteriorCondition}
                        onChange={(e) => handleInputChange('exteriorCondition', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select Condition</option>
                        <option value="excellent">Excellent - Like new</option>
                        <option value="good">Good - Minor wear</option>
                        <option value="fair">Fair - Noticeable wear</option>
                        <option value="poor">Poor - Significant damage</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interior Condition <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={vehicleData.interiorCondition}
                        onChange={(e) => handleInputChange('interiorCondition', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select Condition</option>
                        <option value="excellent">Excellent - Like new</option>
                        <option value="good">Good - Minor wear</option>
                        <option value="fair">Fair - Noticeable wear</option>
                        <option value="poor">Poor - Significant damage</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mechanical Condition <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={vehicleData.mechanicalCondition}
                        onChange={(e) => handleInputChange('mechanicalCondition', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select Condition</option>
                        <option value="excellent">Excellent - Runs perfectly</option>
                        <option value="good">Good - Minor issues</option>
                        <option value="fair">Fair - Some repairs needed</option>
                        <option value="poor">Poor - Major repairs needed</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Accident History <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={vehicleData.accidents}
                        onChange={(e) => handleInputChange('accidents', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select</option>
                        <option value="none">No accidents</option>
                        <option value="minor">Minor accident(s)</option>
                        <option value="major">Major accident(s)</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Records
                      </label>
                      <select
                        value={vehicleData.serviceRecords}
                        onChange={(e) => handleInputChange('serviceRecords', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option value="complete">Complete service records</option>
                        <option value="partial">Partial service records</option>
                        <option value="none">No service records</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Features */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Transmission
                      </label>
                      <select
                        value={vehicleData.transmission}
                        onChange={(e) => handleInputChange('transmission', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select Transmission</option>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                        <option value="cvt">CVT</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fuel Type
                      </label>
                      <select
                        value={vehicleData.fuelType}
                        onChange={(e) => handleInputChange('fuelType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select Fuel Type</option>
                        <option value="gasoline">Gasoline</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                        <option value="diesel">Diesel</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Select All Features That Apply
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {availableFeatures.map((feature) => (
                        <label key={feature} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={vehicleData.features.includes(feature)}
                            onChange={() => handleFeatureToggle(feature)}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="ml-2 text-sm text-gray-700">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
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
                        Email Address <span className="text-red-500">*</span>
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
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        value={vehicleData.preferredContact}
                        onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select Preference</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="text">Text Message</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Comments
                      </label>
                      <textarea
                        value={vehicleData.comments}
                        onChange={(e) => handleInputChange('comments', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Any additional information about your vehicle..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Quote Results */}
              {currentStep === 5 && estimatedValue && (
                <div className="text-center space-y-8">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                      Your Trade-In Estimate
                    </h3>
                    <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-white">
                      <div className="text-4xl font-heading font-bold mb-2">
                        {formatCurrency(estimatedValue.low)} - {formatCurrency(estimatedValue.high)}
                      </div>
                      <p className="text-white/90">
                        Estimated trade-in value for your {vehicleData.year} {vehicleData.make} {vehicleData.model}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-heading font-semibold text-gray-900 mb-4">What's Next?</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">A member of our team will contact you within 24 hours</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Schedule an in-person appraisal for a final offer</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Use your trade-in value toward a new vehicle purchase</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/inventory"
                      className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Shop Our Inventory
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 5 && (
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
                    onClick={nextStep}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    {currentStep === 4 ? 'Get My Quote' : 'Continue'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Trade-In FAQ
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm divide-y divide-gray-200">
            <details className="p-6">
              <summary className="font-medium text-gray-900 cursor-pointer">
                How accurate is the online estimate?
              </summary>
              <p className="mt-3 text-gray-600">
                Our online estimate provides a good starting point based on market data and the information you provide. 
                The final offer will be determined after a physical inspection of your vehicle.
              </p>
            </details>
            
            <details className="p-6">
              <summary className="font-medium text-gray-900 cursor-pointer">
                What documents do I need to bring?
              </summary>
              <p className="mt-3 text-gray-600">
                Please bring your vehicle title, registration, driver's license, and any service records you have. 
                If you're still financing the vehicle, bring your loan information.
              </p>
            </details>
            
            <details className="p-6">
              <summary className="font-medium text-gray-900 cursor-pointer">
                Do I have to buy a car to trade in my vehicle?
              </summary>
              <p className="mt-3 text-gray-600">
                No, we purchase vehicles outright even if you're not buying from us. However, you may get a better 
                value if you use your trade-in toward a purchase.
              </p>
            </details>
            
            <details className="p-6">
              <summary className="font-medium text-gray-900 cursor-pointer">
                How long does the trade-in process take?
              </summary>
              <p className="mt-3 text-gray-600">
                The appraisal process typically takes 30-45 minutes. If you accept our offer, we can complete 
                the paperwork the same day.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Trade In Your Vehicle?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get started with our online valuation tool or visit our dealership for an in-person appraisal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setCurrentStep(1)
                setEstimatedValue(null)
                document.getElementById('valuation-form')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Start New Quote
            </button>
            <Link
              href="/contact"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Visit Our Dealership
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
