'use client'

import React, { useState } from 'react'
import PaymentCalculator from './PaymentCalculator'

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                step <= currentStep 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-300 text-gray-600'
              }`}>
                {step === 5 && isSubmitted ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step
                )}
              </div>
              {step < 5 && (
                <div className={`flex-1 h-1 mx-2 sm:mx-4 ${
                  step < currentStep ? 'bg-primary' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1 sm:gap-2 mt-4 text-xs sm:text-sm text-gray-600 text-center max-w-4xl mx-auto">
          <span>Vehicle Info</span>
          <span>Personal Info</span>
          <span>Employment</span>
          <span>Final Details</span>
          <span>Submitted</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 sm:p-8 mb-12">
        {/* Step 1: Vehicle & Payment Info */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Step 1: Vehicle & Payment Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price of the Car *
                </label>
                <input
                  type="number"
                  value={formData.carPrice}
                  onChange={(e) => handleInputChange('carPrice', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="$5,000"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Step 2: Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  pattern="[A-Za-z]\d{4}-\d{5}-\d{5}"
                  placeholder="A1234-12345-12345"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Employment Information */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Step 3: Employment Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Status *
                </label>
                <select
                  value={formData.employmentStatus}
                  onChange={(e) => handleInputChange('employmentStatus', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="$0"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Final Details */}
        {currentStep === 4 && (
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Step 4: Final Details
            </h2>
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
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tradeIn"
                      value="No"
                      checked={formData.tradeIn === 'No'}
                      onChange={(e) => handleInputChange('tradeIn', e.target.value)}
                      className="mr-2"
                    />
                    No
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
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="coApplicant"
                      value="No"
                      checked={formData.coApplicant === 'No'}
                      onChange={(e) => handleInputChange('coApplicant', e.target.value)}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.documentsAvailable}
                    onChange={(e) => handleInputChange('documentsAvailable', e.target.checked)}
                    className="mr-3 mt-1"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      I can provide all these documents for the application *
                    </span>
                    <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc">
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

              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange('consent', e.target.checked)}
                    className="mr-3 mt-1"
                  />
                  <span className="text-sm text-gray-700">
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
          </div>
        )}

        {/* Step 5: Success Screen */}
        {currentStep === 5 && isSubmitted && (
          <div className="text-center py-12">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Application Submitted Successfully!
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Thank you for your financing application. Our team has received your information and will contact you shortly to discuss your financing options.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-xl mx-auto">
                <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Our finance team will review your application within 24 hours</li>
                  <li>• We'll contact you to discuss financing options and rates</li>
                  <li>• We may request additional documentation if needed</li>
                  <li>• Once approved, we'll help you schedule a vehicle viewing</li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setCurrentStep(1)
                setIsSubmitted(false)
                setFormData({
                  carPrice: '',
                  desiredMonthlyPayment: '',
                  downPaymentAmount: '',
                  name: '',
                  phone: '',
                  email: '',
                  address: '',
                  province: '',
                  city: '',
                  postalCode: '',
                  driversLicenseNumber: '',
                  dateOfBirth: '',
                  employmentStatus: '',
                  employerName: '',
                  employerAddress: '',
                  workPhone: '',
                  jobTitle: '',
                  employmentLength: '',
                  grossIncome: '',
                  otherIncome: '',
                  tradeIn: '',
                  coApplicant: '',
                  documentsAvailable: false,
                  consent: false
                })
              }}
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Submit Another Application
            </button>
          </div>
        )}

        {/* Navigation Buttons - Hide on success step */}
        {currentStep < 5 && (
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-600 text-white hover:bg-gray-700 shadow-sm'
              }`}
              disabled={currentStep === 1}
            >
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  canProceedToNext() 
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-sm' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!canProceedToNext()}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  canProceedToNext() 
                    ? 'bg-accent text-primary hover:bg-accent/90 shadow-sm font-semibold' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!canProceedToNext()}
              >
                Submit Application
              </button>
            )}
          </div>
        )}
      </form>

      {/* Payment Calculator */}
      <PaymentCalculator className="mt-0" compact />
    </div>
  )
}
