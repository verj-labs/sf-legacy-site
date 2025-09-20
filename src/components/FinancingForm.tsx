'use client'

import React, { useState } from 'react'
import Chip from './Chip'
import { MobileStepper, DesktopStepper, StepperStep } from './Stepper'
import { 
  HiOutlineCheckCircle, 
  HiOutlineUser, 
  HiOutlineBriefcase, 
  HiOutlineCreditCard,
  HiOutlineTruck 
} from 'react-icons/hi2'

interface FormData {
  // Step 1 - Personal Information
  firstName: string
  lastName: string
  email: string
  mobile: string
  dobMonth: string
  dobDay: string
  dobYear: string
  socialInsurance: string
  maritalStatus: string
  
  // Current Address
  currentStreetAddress: string
  currentApt: string
  currentCity: string
  currentProvince: string
  currentPostalCode: string
  currentDurationYears: string
  currentDurationMonths: string
  propertyType: string
  monthlyRent: string
  
  // Previous Address (conditional)
  previousStreetAddress: string
  previousApt: string
  previousCity: string
  previousProvince: string
  previousPostalCode: string
  previousDurationYears: string
  previousDurationMonths: string
  
  // Employment Information (Step 2)
  employmentType: string
  occupation: string
  presentEmployer: string
  employerAddress: string
  monthlyGrossIncome: string
  employerPhone: string
  employmentYears: string
  employmentMonths: string
  otherMonthlyIncome: string
  otherIncomeSource: string
  
  // Previous Employment Information (conditional)
  previousEmploymentType: string
  previousOccupation: string
  previousEmployerName: string
  previousEmployerPhone: string
  previousEmploymentYears: string
  previousEmploymentMonths: string
  
  // Step 3 - Credit History & Finance Variables
  bankruptcyHistory: string
  vehicleRepossessed: string
  hasCoSigner: string
  creditRating: string
  downPaymentAmount: string
  purchaseTimeframe: string
  
  // Step 4 - Vehicle Information
  hasTradeIn: string
  tradeInYear: string
  tradeInMake: string
  tradeInModel: string
  tradeInMileage: string
  desiredYear: string
  desiredMake: string
  desiredModel: string
  desiredTrim: string
  desiredColor: string
  specificVehicleInMind: string
  financing: boolean
  lease: boolean
  
  // Validation and completion tracking
  firstStepComplete: boolean
  secondStepComplete: boolean
  thirdStepComplete: boolean
}

export default function FinancingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  
  const [formData, setFormData] = useState<FormData>({
    // Step 1 - Personal Information
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    dobMonth: '',
    dobDay: '',
    dobYear: '',
    socialInsurance: '',
    maritalStatus: '',
    
    // Current Address
    currentStreetAddress: '',
    currentApt: '',
    currentCity: '',
    currentProvince: '',
    currentPostalCode: '',
    currentDurationYears: '',
    currentDurationMonths: '',
    propertyType: '',
    monthlyRent: '',
    
    // Previous Address (conditional)
    previousStreetAddress: '',
    previousApt: '',
    previousCity: '',
    previousProvince: '',
    previousPostalCode: '',
    previousDurationYears: '',
    previousDurationMonths: '',
    
    // Step 2 - Employment Information
    employmentType: '',
    occupation: '',
    presentEmployer: '',
    employerAddress: '',
    monthlyGrossIncome: '',
    employerPhone: '',
    employmentYears: '',
    employmentMonths: '',
    otherMonthlyIncome: '',
    otherIncomeSource: '',
    
    // Previous Employment (conditional)
    previousEmploymentType: '',
    previousOccupation: '',
    previousEmployerName: '',
    previousEmployerPhone: '',
    previousEmploymentYears: '',
    previousEmploymentMonths: '',
    
    // Step 3 - Credit History & Finance Variables
    bankruptcyHistory: '',
    vehicleRepossessed: '',
    hasCoSigner: '',
    creditRating: '',
    downPaymentAmount: '',
    purchaseTimeframe: '',
    
    // Step 4 - Vehicle Information
    hasTradeIn: '',
    tradeInYear: '',
    tradeInMake: '',
    tradeInModel: '',
    tradeInMileage: '',
    desiredYear: '',
    desiredMake: '',
    desiredModel: '',
    desiredTrim: '',
    desiredColor: '',
    specificVehicleInMind: '',
    financing: false,
    lease: false,
    
    // Validation and completion tracking
    firstStepComplete: false,
    secondStepComplete: false,
    thirdStepComplete: false
  })

  const canadianProvinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
    'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island',
    'Quebec', 'Saskatchewan', 'Yukon'
  ]

  const maritalStatuses = [
    'Single', 'Married', 'Common Law', 'Separated', 'Divorced', 'Widowed'
  ]

  const employmentTypes = [
    'Full Time', 'Part Time', 'Self Employed'
  ]

  const propertyTypes = [
    'Own with mortgage', 'Own free and clear', 'Rent', 'Live with family', 'Other'
  ]

  const creditRatings = [
    'Good', 'Bad', 'None'
  ]

  const purchaseTimeframes = [
    '1 Week', '1 Month', '3 Months'
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
      // Submit to Formspree
      const response = await fetch(process.env.NEXT_PUBLIC_FINANCING_FORM_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Application submitted successfully!')
        // Reset form or redirect
      } else {
        alert('Error submitting application. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error submitting application. Please try again.')
    }
  }

  const handleNext = () => {
    if (canProceedToNext(currentStep)) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceedToNext = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.mobile && 
               formData.dobMonth && formData.dobDay && formData.dobYear && formData.currentStreetAddress && 
               formData.currentCity && formData.currentProvince && formData.currentPostalCode && 
               formData.currentDurationYears && formData.currentDurationMonths && formData.propertyType
      case 2:
        // Base employment validation
        const hasBasicEmployment = formData.employmentType && formData.occupation && formData.presentEmployer &&
               formData.employerAddress && formData.monthlyGrossIncome
        
        // Check if previous employment section should be shown and is required
        const totalCurrentEmploymentMonths = (parseInt(formData.employmentYears) * 12) + parseInt(formData.employmentMonths)
        const needsPreviousEmployment = totalCurrentEmploymentMonths < 24
        
        // If previous employment is needed, validate those fields too
        if (needsPreviousEmployment) {
          const hasPreviousEmployment = formData.previousEmploymentType && formData.previousOccupation && 
                                       formData.previousEmployerName
          return hasBasicEmployment && hasPreviousEmployment
        }
        
        return hasBasicEmployment
      case 3:
        return formData.creditRating && formData.downPaymentAmount && formData.purchaseTimeframe
      case 4:
        return formData.desiredYear && formData.desiredMake && formData.desiredModel
      default:
        return false
    }
  }

  const isStepComplete = (step: number) => {
    return canProceedToNext(step)
  }

  const steps: StepperStep[] = [
    { 
      num: 1, 
      icon: HiOutlineUser, 
      title: "Personal Information",
      description: "Personal details and address"
    },
    { 
      num: 2, 
      icon: HiOutlineBriefcase, 
      title: "Employment Information",
      description: "Employment and income details"
    },
    { 
      num: 3, 
      icon: HiOutlineCreditCard, 
      title: "Credit History",
      description: "Credit and financing information"
    },
    { 
      num: 4, 
      icon: HiOutlineTruck, 
      title: "Vehicle Information",
      description: "Vehicle preferences and trade-in"
    }
  ]

  return (
    <form onSubmit={handleSubmit} className="p-0 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-8">
        {/* Mobile Stepper */}
        <MobileStepper steps={steps} currentStep={currentStep} />

        {/* Desktop Stepper */}
        <DesktopStepper 
          steps={steps} 
          currentStep={currentStep} 
          title="Application Progress" 
        />

        {/* Form Content */}
        <div className="lg:col-span-3 bg-surface rounded-xl border border-border-subtle" >
          <div className="bg-surface-raised rounded-xl p-6 lg:p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-text-ink mb-2">Personal Information</h3>
                  <p className="text-text-muted">Please provide your personal details and address information.</p>
                </div>
                
                <div className="space-y-6">
                  {/* Personal Information Section */}
                  <div>
                    <h4 className="text-lg font-medium text-text-ink mb-4 border-b border-border-primary pb-2">
                      Personal Information (As per your Driver Licence)
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Mobile Phone *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter your mobile phone number"
                          value={formData.mobile}
                          onChange={(e) => handleInputChange('mobile', e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Date of Birth *
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <select
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              value={formData.dobMonth}
                              onChange={(e) => handleInputChange('dobMonth', e.target.value)}
                            >
                              <option value="">Month</option>
                              {Array.from({ length: 12 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                              ))}
                            </select>
                            <p className="text-xs text-text-muted mt-1">MM</p>
                          </div>
                          
                          <div>
                            <select
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              value={formData.dobDay}
                              onChange={(e) => handleInputChange('dobDay', e.target.value)}
                            >
                              <option value="">Day</option>
                              {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                              ))}
                            </select>
                            <p className="text-xs text-text-muted mt-1">DD</p>
                          </div>
                          
                          <div>
                            <select
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              value={formData.dobYear}
                              onChange={(e) => handleInputChange('dobYear', e.target.value)}
                            >
                              <option value="">Year</option>
                              {Array.from({ length: 80 }, (_, i) => {
                                const year = new Date().getFullYear() - 18 - i
                                return <option key={year} value={year}>{year}</option>
                              })}
                            </select>
                            <p className="text-xs text-text-muted mt-1">YYYY</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Social Insurance Number
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter your social insurance number (optional)"
                          value={formData.socialInsurance}
                          onChange={(e) => handleInputChange('socialInsurance', e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Marital Status
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          value={formData.maritalStatus}
                          onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                        >
                          <option value="">Select Marital Status</option>
                          {maritalStatuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Current Address Section */}
                  <div>
                    <h4 className="text-lg font-medium text-text-ink mb-4 border-b border-border-primary pb-2">
                      Current Address
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-3">
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Street Address *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter your street address"
                            value={formData.currentStreetAddress}
                            onChange={(e) => handleInputChange('currentStreetAddress', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Apt
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Apt #"
                            value={formData.currentApt}
                            onChange={(e) => handleInputChange('currentApt', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter your city"
                            value={formData.currentCity}
                            onChange={(e) => handleInputChange('currentCity', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Province *
                          </label>
                          <select
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            value={formData.currentProvince}
                            onChange={(e) => handleInputChange('currentProvince', e.target.value)}
                          >
                            <option value="">Select Province</option>
                            {canadianProvinces.map((province) => (
                              <option key={province} value={province}>{province}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Postal Code *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter your postal code"
                            value={formData.currentPostalCode}
                            onChange={(e) => handleInputChange('currentPostalCode', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Duration (Years) *
                          </label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="0"
                            value={formData.currentDurationYears}
                            onChange={(e) => handleInputChange('currentDurationYears', e.target.value)}
                          />
                          <p className="text-xs text-text-muted mt-1">Years at this address. If less than a year, type 0</p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Duration (Months) *
                          </label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="0"
                            value={formData.currentDurationMonths}
                            onChange={(e) => handleInputChange('currentDurationMonths', e.target.value)}
                          />
                          <p className="text-xs text-text-muted mt-1">Months at this address</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Property Type *
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          value={formData.propertyType}
                          onChange={(e) => handleInputChange('propertyType', e.target.value)}
                        >
                          <option value="">Select Property Type</option>
                          {propertyTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Monthly Rent
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter monthly rent (if applicable)"
                          value={formData.monthlyRent}
                          onChange={(e) => handleInputChange('monthlyRent', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Previous Address Section - Conditional */}
                  {(parseInt(formData.currentDurationYears) < 2 || (parseInt(formData.currentDurationYears) === 0 && parseInt(formData.currentDurationMonths) < 24)) && (
                    <div>
                      <h4 className="text-lg font-medium text-text-ink mb-4 border-b border-border-primary pb-2">
                        Previous Address
                      </h4>
                      <p className="text-sm text-text-muted mb-4 bg-yellow-50 p-3 rounded-md">
                        PLEASE COMPLETE THIS SECTION IF DURATION AT CURRENT ADDRESS IS LESS THAN TWO(2) YEARS.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-4 gap-4">
                          <div className="col-span-3">
                            <label className="block text-sm font-medium text-text-ink mb-2">
                              Street Address *
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Enter your previous street address"
                              value={formData.previousStreetAddress}
                              onChange={(e) => handleInputChange('previousStreetAddress', e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-text-ink mb-2">
                              Apt
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Apt #"
                              value={formData.previousApt}
                              onChange={(e) => handleInputChange('previousApt', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-text-ink mb-2">
                              City *
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Enter your previous city"
                              value={formData.previousCity}
                              onChange={(e) => handleInputChange('previousCity', e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-text-ink mb-2">
                              Province *
                            </label>
                            <select
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              value={formData.previousProvince}
                              onChange={(e) => handleInputChange('previousProvince', e.target.value)}
                            >
                              <option value="">Select Province</option>
                              {canadianProvinces.map((province) => (
                                <option key={province} value={province}>{province}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-text-ink mb-2">
                              Postal Code *
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Enter your previous postal code"
                              value={formData.previousPostalCode}
                              onChange={(e) => handleInputChange('previousPostalCode', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-text-ink mb-2">
                              Duration (Years) *
                            </label>
                            <input
                              type="number"
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="0"
                              value={formData.previousDurationYears}
                              onChange={(e) => handleInputChange('previousDurationYears', e.target.value)}
                            />
                            <p className="text-xs text-text-muted mt-1">Years at this address. If less than a year, type 0</p>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-text-ink mb-2">
                              Duration (Months) *
                            </label>
                            <input
                              type="number"
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="0"
                              value={formData.previousDurationMonths}
                              onChange={(e) => handleInputChange('previousDurationMonths', e.target.value)}
                            />
                            <p className="text-xs text-text-muted mt-1">Months at this address</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-text-ink mb-2">Employment Information</h3>
                  <p className="text-text-muted">Please provide your employment and income details.</p>
                </div>
                
                <div className="space-y-6">
                  {/* Employment Section */}
                  <div>
                    <h4 className="text-lg font-medium text-text-ink mb-4 border-b border-border-primary pb-2">
                      Employment
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Employment Type *
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          value={formData.employmentType}
                          onChange={(e) => handleInputChange('employmentType', e.target.value)}
                        >
                          <option value="">Select Employment Type</option>
                          {employmentTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Occupation *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter your occupation"
                          value={formData.occupation}
                          onChange={(e) => handleInputChange('occupation', e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Present Employer *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter your current employer"
                          value={formData.presentEmployer}
                          onChange={(e) => handleInputChange('presentEmployer', e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Employer Address *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter your employer's address"
                          value={formData.employerAddress}
                          onChange={(e) => handleInputChange('employerAddress', e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Monthly Gross Income *
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter your monthly gross income"
                          value={formData.monthlyGrossIncome}
                          onChange={(e) => handleInputChange('monthlyGrossIncome', e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Employer Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter your employer's phone number"
                          value={formData.employerPhone}
                          onChange={(e) => handleInputChange('employerPhone', e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Employment Years
                          </label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="0"
                            value={formData.employmentYears}
                            onChange={(e) => handleInputChange('employmentYears', e.target.value)}
                          />
                          <p className="text-xs text-text-muted mt-1">Years at this job. If less than a year, type 0</p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Employment Months
                          </label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="0"
                            value={formData.employmentMonths}
                            onChange={(e) => handleInputChange('employmentMonths', e.target.value)}
                          />
                          <p className="text-xs text-text-muted mt-1">Months at this job</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Other Monthly Gross Income
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter any other monthly income"
                          value={formData.otherMonthlyIncome}
                          onChange={(e) => handleInputChange('otherMonthlyIncome', e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Other Income Source
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter source of other income"
                          value={formData.otherIncomeSource}
                          onChange={(e) => handleInputChange('otherIncomeSource', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Previous Employment Section - Conditional */}
                  {(parseInt(formData.employmentYears) < 2 || (parseInt(formData.employmentYears) === 0 && parseInt(formData.employmentMonths) < 24)) && (
                    <div>
                      <h4 className="text-lg font-medium text-text-ink mb-4 border-b border-border-primary pb-2">
                        Previous Employment
                      </h4>
                      <p className="text-sm text-text-muted mb-4 bg-yellow-50 p-3 rounded-md">
                        PLEASE COMPLETE THIS SECTION IF DURATION AT CURRENT JOB IS LESS THAN TWO(2) YEARS.
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Employment Type *
                          </label>
                          <select
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            value={formData.previousEmploymentType}
                            onChange={(e) => handleInputChange('previousEmploymentType', e.target.value)}
                          >
                            <option value="">Select Employment Type</option>
                            {employmentTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Occupation *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter your previous occupation"
                            value={formData.previousOccupation}
                            onChange={(e) => handleInputChange('previousOccupation', e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Previous Employer Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter your previous employer name"
                            value={formData.previousEmployerName}
                            onChange={(e) => handleInputChange('previousEmployerName', e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Employer Phone
                          </label>
                          <input
                            type="tel"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter your previous employer's phone number"
                            value={formData.previousEmployerPhone}
                            onChange={(e) => handleInputChange('previousEmployerPhone', e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-text-ink mb-2">
                              Employment Years
                            </label>
                            <input
                              type="number"
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="0"
                              value={formData.previousEmploymentYears}
                              onChange={(e) => handleInputChange('previousEmploymentYears', e.target.value)}
                            />
                            <p className="text-xs text-text-muted mt-1">Years at this job. If less than a year, type 0</p>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-text-ink mb-2">
                              Employment Months
                            </label>
                            <input
                              type="number"
                              className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="0"
                              value={formData.previousEmploymentMonths}
                              onChange={(e) => handleInputChange('previousEmploymentMonths', e.target.value)}
                            />
                            <p className="text-xs text-text-muted mt-1">Months at this job</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-text-ink mb-2">Credit History</h3>
                  <p className="text-text-muted">Please provide your credit and financing information.</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-ink mb-2">
                      Credit Rating *
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      value={formData.creditRating}
                      onChange={(e) => handleInputChange('creditRating', e.target.value)}
                    >
                      <option value="">Select Credit Rating</option>
                      {creditRatings.map((rating) => (
                        <option key={rating} value={rating}>{rating}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-ink mb-2">
                      Down Payment Amount *
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Enter down payment amount"
                      value={formData.downPaymentAmount}
                      onChange={(e) => handleInputChange('downPaymentAmount', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-ink mb-2">
                      Purchase Timeframe *
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      value={formData.purchaseTimeframe}
                      onChange={(e) => handleInputChange('purchaseTimeframe', e.target.value)}
                    >
                      <option value="">Select Purchase Timeframe</option>
                      {purchaseTimeframes.map((timeframe) => (
                        <option key={timeframe} value={timeframe}>{timeframe}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-ink mb-2">
                      Have you ever declared bankruptcy?
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      value={formData.bankruptcyHistory}
                      onChange={(e) => handleInputChange('bankruptcyHistory', e.target.value)}
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-ink mb-2">
                      Have you ever had a vehicle repossessed?
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      value={formData.vehicleRepossessed}
                      onChange={(e) => handleInputChange('vehicleRepossessed', e.target.value)}
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-text-ink mb-2">Vehicle Information</h3>
                  <p className="text-text-muted">Tell us about the vehicle you're interested in.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-ink mb-2">
                        Desired Year *
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter year"
                        value={formData.desiredYear}
                        onChange={(e) => handleInputChange('desiredYear', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text-ink mb-2">
                        Desired Make *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter make"
                        value={formData.desiredMake}
                        onChange={(e) => handleInputChange('desiredMake', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text-ink mb-2">
                        Desired Model *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter model"
                        value={formData.desiredModel}
                        onChange={(e) => handleInputChange('desiredModel', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-ink mb-2">
                      Do you have a trade-in vehicle?
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      value={formData.hasTradeIn}
                      onChange={(e) => handleInputChange('hasTradeIn', e.target.value)}
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  {formData.hasTradeIn === 'yes' && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="text-md font-medium text-text-ink">Trade-in Vehicle Details</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Trade-in Year
                          </label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter year"
                            value={formData.tradeInYear}
                            onChange={(e) => handleInputChange('tradeInYear', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Trade-in Make
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter make"
                            value={formData.tradeInMake}
                            onChange={(e) => handleInputChange('tradeInMake', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-text-ink mb-2">
                            Trade-in Model
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter model"
                            value={formData.tradeInModel}
                            onChange={(e) => handleInputChange('tradeInModel', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-ink mb-2">
                          Mileage
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Enter mileage"
                          value={formData.tradeInMileage}
                          onChange={(e) => handleInputChange('tradeInMileage', e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-text-ink mb-2">
                      Financing Options (select all that apply)
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.financing}
                          onChange={(e) => handleInputChange('financing', e.target.checked)}
                        />
                        <span className="text-sm">Financing</span>
                      </label>
                      
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.lease}
                          onChange={(e) => handleInputChange('lease', e.target.checked)}
                        />
                        <span className="text-sm">Lease</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border-primary">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-md transition-all duration-200 border border-blackContrast ${
                  currentStep === 1
                    ? 'bg-surface-secondary text-text-muted cursor-not-allowed'
                    : 'bg-surface-secondary text-text-ink hover:bg-surface-tertiary'
                }`}
              >
                Previous
              </button>
              
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceedToNext(currentStep)}
                  className={`px-6 py-2 rounded-md transition-all duration-200 border ${
                    canProceedToNext(currentStep)
                      ? 'bg-brand-500 text-ink hover:bg-brand-600 font-bold border-border-focus'
                      : 'bg-surface-secondary text-text-muted cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceedToNext(currentStep)}
                  className={`px-6 py-2 rounded-md transition-all duration-200 border ${
                    canProceedToNext(currentStep)
                      ? 'bg-brand-yellow text-ink hover:bg-brand-yellow-dark bg-primary-500 font-bold border-border-focus'
                      : 'bg-surface-secondary text-text-muted cursor-not-allowed'
                  }`}
                >
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
