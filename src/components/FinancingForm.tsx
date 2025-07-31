'use client'

import React, { useState } from 'react'
import PaymentCalculator from './PaymentCalculator'
import Chip from './Chip'
import { 
  HiOutlineCheckCircle, 
  HiOutlineCurrencyDollar, 
  HiOutlineUser, 
  HiOutlineBriefcase, 
  HiOutlineClipboardCheck 
} from 'react-icons/hi'

interface FormData {
  // Step 1 - Vehicle & Payment Info
  carPrice: string
  desiredMonthlyPayment: string
  downPaymentAmount: string
  
  // Step 2 - Personal Info
  name: string
  phone: string
  email: string
  address: string
  province: string
  city: string
  postalCode: string
  driversLicenseNumber: string
  dateOfBirth: string
  
  // Step 3 - Employment Info
  employmentStatus: string
  employerName: string
  employerAddress: string
  workPhone: string
  jobTitle: string
  employmentLength: string
  grossIncome: string
  otherIncome: string
  
  // Step 4 - Additional Info
  tradeIn: string
  coApplicant: string
  documentsAvailable: boolean
  consent: boolean
}

export default function FinancingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    // Step 1 - Vehicle & Payment Info
    carPrice: '',
    desiredMonthlyPayment: '',
    downPaymentAmount: '',
    
    // Step 2 - Personal Info
    name: '',
    phone: '',
    email: '',
    address: '',
    province: '',
    city: '',
    postalCode: '',
    driversLicenseNumber: '',
    dateOfBirth: '',
    
    // Step 3 - Employment Info
    employmentStatus: '',
    employerName: '',
    employerAddress: '',
    workPhone: '',
    jobTitle: '',
    employmentLength: '',
    grossIncome: '',
    otherIncome: '',
    
    // Step 4 - Additional Info
    tradeIn: '',
    coApplicant: '',
    documentsAvailable: false,
    consent: false
  })

  const canadianProvinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
    'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island',
    'Quebec', 'Saskatchewan', 'Yukon'
  ]

  const employmentStatuses = [
    'Full-Time', 'Part-Time', 'Self-Employed', 'Contract', 'Seasonal/Temporary', 'Retired', 'Unemployed'
  ]

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Formspree submission using environment variable
      const response = await fetch(process.env.NEXT_PUBLIC_FINANCING_FORM_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Used Car Financing Application',
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setCurrentStep(5) // Move to success step
      } else {
        alert('There was an error submitting your application. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error submitting your application. Please try again.')
    }
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return formData.carPrice && formData.desiredMonthlyPayment && formData.downPaymentAmount
      case 2:
        return formData.name && formData.phone && formData.email && formData.address && 
               formData.province && formData.city && formData.postalCode && 
               formData.driversLicenseNumber && formData.dateOfBirth
      case 3:
        return formData.employmentStatus && formData.employerName && formData.jobTitle && 
               formData.employmentLength && formData.grossIncome
      case 4:
        return formData.tradeIn && formData.coApplicant && formData.documentsAvailable && formData.consent
      default:
        return false
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Vertical Stepper Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Application Progress</h2>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                currentStep === 1 ? 'bg-primary/10 border border-primary/20' : 
                currentStep > 1 ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === 1 ? 'bg-primary text-white' :
                  currentStep > 1 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > 1 ? (
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  ) : (
                    <HiOutlineCurrencyDollar className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${
                    currentStep >= 1 ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    Vehicle & Payment
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Car price and payment details
                  </p>
                  {currentStep > 1 && (
                    <Chip variant="success" size="sm" className="mt-2">
                      Complete
                    </Chip>
                  )}
                  {currentStep === 1 && (
                    <Chip variant="primary" size="sm" className="mt-2">
                      Current
                    </Chip>
                  )}
                </div>
              </div>

              {/* Step 2 */}
              <div className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                currentStep === 2 ? 'bg-primary/10 border border-primary/20' : 
                currentStep > 2 ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === 2 ? 'bg-primary text-white' :
                  currentStep > 2 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > 2 ? (
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  ) : (
                    <HiOutlineUser className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${
                    currentStep >= 2 ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    Personal Information
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Your personal details
                  </p>
                  {currentStep > 2 && (
                    <Chip variant="success" size="sm" className="mt-2">
                      Complete
                    </Chip>
                  )}
                  {currentStep === 2 && (
                    <Chip variant="primary" size="sm" className="mt-2">
                      Current
                    </Chip>
                  )}
                </div>
              </div>

              {/* Step 3 */}
              <div className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                currentStep === 3 ? 'bg-primary/10 border border-primary/20' : 
                currentStep > 3 ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === 3 ? 'bg-primary text-white' :
                  currentStep > 3 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > 3 ? (
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  ) : (
                    <HiOutlineBriefcase className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${
                    currentStep >= 3 ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    Employment
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Work and income details
                  </p>
                  {currentStep > 3 && (
                    <Chip variant="success" size="sm" className="mt-2">
                      Complete
                    </Chip>
                  )}
                  {currentStep === 3 && (
                    <Chip variant="primary" size="sm" className="mt-2">
                      Current
                    </Chip>
                  )}
                </div>
              </div>

              {/* Step 4 */}
              <div className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                currentStep === 4 ? 'bg-primary/10 border border-primary/20' : 
                currentStep > 4 ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === 4 ? 'bg-primary text-white' :
                  currentStep > 4 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > 4 ? (
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  ) : (
                    <HiOutlineClipboardCheck className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${
                    currentStep >= 4 ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    Final Details
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Terms and conditions
                  </p>
                  {currentStep > 4 && (
                    <Chip variant="success" size="sm" className="mt-2">
                      Complete
                    </Chip>
                  )}
                  {currentStep === 4 && (
                    <Chip variant="primary" size="sm" className="mt-2">
                      Current
                    </Chip>
                  )}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((currentStep / 4) * 100, 100)}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Step {Math.min(currentStep, 4)} of 4
            </p>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 shadow-sm">
            {/* Form Header */}
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">
                    {currentStep === 1 && 'Vehicle & Payment Information'}
                    {currentStep === 2 && 'Personal Information'}
                    {currentStep === 3 && 'Employment Information'}
                    {currentStep === 4 && 'Final Details'}
                    {currentStep === 5 && 'Application Complete'}
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    {currentStep === 1 && 'Tell us about the car you want and your payment preferences'}
                    {currentStep === 2 && 'We need your personal details for the financing application'}
                    {currentStep === 3 && 'Your employment information helps us determine your financing options'}
                    {currentStep === 4 && 'Review your information and agree to our terms'}
                    {currentStep === 5 && 'Thank you for submitting your financing application'}
                  </p>
                </div>
                <div className="hidden sm:block">
                  <div className="bg-primary/10 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-primary">
                      {Math.min(Math.round((currentStep / 4) * 100), 100)}% Complete
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {/* Step 1: Vehicle & Payment Info */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price of the Car *
                    </label>
                    <input
                      type="number"
                      value={formData.carPrice}
                      onChange={(e) => handleInputChange('carPrice', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      placeholder="$25,000"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Desired Monthly Payment *
                    </label>
                    <input
                      type="number"
                      value={formData.desiredMonthlyPayment}
                      onChange={(e) => handleInputChange('desiredMonthlyPayment', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      placeholder="$450"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Down Payment Amount *
                    </label>
                    <input
                      type="number"
                      value={formData.downPaymentAmount}
                      onChange={(e) => handleInputChange('downPaymentAmount', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      placeholder="$5,000"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Province *
                    </label>
                    <select
                      value={formData.province}
                      onChange={(e) => handleInputChange('province', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    >
                      <option value="">Select Province</option>
                      {canadianProvinces.map((province) => (
                        <option key={province} value={province}>{province}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}  
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      pattern="[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d"
                      placeholder="A1A 1A1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Driver's License Number *
                    </label>
                    <input
                      type="text"
                      value={formData.driversLicenseNumber}
                      onChange={(e) => handleInputChange('driversLicenseNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Employment Information */}
              {currentStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employment Status *
                    </label>
                    <select
                      value={formData.employmentStatus}
                      onChange={(e) => handleInputChange('employmentStatus', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    >
                      <option value="">Select Employment Status</option>
                      {employmentStatuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employer Name *
                    </label>
                    <input
                      type="text"
                      value={formData.employerName}
                      onChange={(e) => handleInputChange('employerName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employer Address *
                    </label>
                    <input
                      type="text"
                      value={formData.employerAddress}
                      onChange={(e) => handleInputChange('employerAddress', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.workPhone}
                      onChange={(e) => handleInputChange('workPhone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employment Length (Years) *
                    </label>
                    <input
                      type="number"
                      value={formData.employmentLength}
                      onChange={(e) => handleInputChange('employmentLength', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      step="0.5"
                      min="0"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gross Income (Monthly) *
                    </label>
                    <input
                      type="number"
                      value={formData.grossIncome}
                      onChange={(e) => handleInputChange('grossIncome', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      placeholder="$4,500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Other Income (Optional)
                    </label>
                    <input
                      type="number"
                      value={formData.otherIncome}
                      onChange={(e) => handleInputChange('otherIncome', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      placeholder="$0"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Final Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Will you Trade-In? *
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="tradeIn"
                          value="Yes"
                          checked={formData.tradeIn === 'Yes'}
                          onChange={(e) => handleInputChange('tradeIn', e.target.value)}
                          className="mr-2 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="tradeIn"
                          value="No"
                          checked={formData.tradeIn === 'No'}
                          onChange={(e) => handleInputChange('tradeIn', e.target.value)}
                          className="mr-2 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Is there a Co-Applicant? *
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="coApplicant"
                          value="Yes"
                          checked={formData.coApplicant === 'Yes'}
                          onChange={(e) => handleInputChange('coApplicant', e.target.value)}
                          className="mr-2 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="coApplicant"
                          value="No"
                          checked={formData.coApplicant === 'No'}
                          onChange={(e) => handleInputChange('coApplicant', e.target.value)}
                          className="mr-2 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={formData.documentsAvailable}
                        onChange={(e) => handleInputChange('documentsAvailable', e.target.checked)}
                        className="mr-3 mt-1 text-primary focus:ring-primary"
                      />
                      <div>
                        <span className="text-sm font-medium text-gray-700">
                          I can provide all these documents for the application *
                        </span>
                        <ul className="text-xs text-gray-600 mt-2 ml-4 list-disc space-y-1">
                          <li>Proof of ID</li>
                          <li>Proof of Residence</li>
                          <li>SIN</li>
                          <li>Three Paystubs</li>
                          <li>Work letter</li>
                          <li>Bank statement</li>
                          <li>Three references (One from family)</li>
                        </ul>
                      </div>
                    </label>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => handleInputChange('consent', e.target.checked)}
                        className="mr-3 mt-1 text-primary focus:ring-primary"
                      />
                      <span className="text-xs text-gray-700 leading-relaxed">
                        By submitting this, I consent to the collection, use and disclosure of my personal information as described in this paragraph. 
                        I agree that the personal information provided above may be used and disclosed by SF Legacy Motors and/or its agents or service 
                        providers (collectively, the "Dealer") as necessary to obtain credit, financial and related personal information (including a 
                        credit or consumer information report) about me from any credit bureau or credit reporting agency, and to advise me on credit 
                        availability in connection with product and/or service purchase financing. I further agree that the personal information provided 
                        above may be disclosed to the provider of Dealer's website hosting or related services for the purpose of enabling Dealer to access 
                        my personal information for marketing purposes. Personal information I provide and credit information obtained may also be retained 
                        by Dealer and used to facilitate the application process should I subsequently choose to apply for credit through Dealer. *
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Success Screen */}
              {currentStep === 5 && isSubmitted && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiOutlineCheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Application Submitted Successfully!
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                    Thank you for your financing application. Our team will contact you shortly to discuss your financing options.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                    <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
                    <ul className="text-blue-800 text-sm space-y-1 text-left">
                      <li>• Review within 24 hours</li>
                      <li>• Contact for financing options</li>
                      <li>• Request additional docs if needed</li>
                      <li>• Schedule vehicle viewing</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg flex justify-between items-center">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentStep === 1 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className={`px-6 py-2 text-sm font-medium text-white rounded-md transition-colors ${
                      canProceedToNext() 
                        ? 'bg-primary hover:bg-primary-dark' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!canProceedToNext()}
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`px-6 py-2 text-sm font-medium text-white rounded-md transition-colors ${
                      canProceedToNext() 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!canProceedToNext()}
                  >
                    Submit Application
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Payment Calculator */}
      <div className="mt-8">
        <PaymentCalculator className="mt-0" compact />
      </div>
    </div>
  )
}
