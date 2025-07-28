'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FinancingPage() {
  const [calculatorValues, setCalculatorValues] = useState({
    price: '',
    downPayment: '',
    interestRate: '',
    term: '60'
  })
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null)
  const [applicationData, setApplicationData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    ssn: '',
    // Address
    street: '',
    city: '',
    state: '',
    zipCode: '',
    timeAtAddress: '',
    housingStatus: '',
    monthlyRent: '',
    // Employment
    employerName: '',
    jobTitle: '',
    workPhone: '',
    monthlyIncome: '',
    timeAtJob: '',
    // Vehicle Interest
    interestedVehicle: '',
    desiredDownPayment: '',
    tradeInVehicle: '',
    // Additional
    coApplicant: false,
    comments: ''
  })

  const calculatePayment = () => {
    const price = parseFloat(calculatorValues.price) || 0
    const down = parseFloat(calculatorValues.downPayment) || 0
    const rate = parseFloat(calculatorValues.interestRate) || 0
    const term = parseInt(calculatorValues.term) || 60

    if (price <= 0 || rate < 0 || term <= 0) {
      setMonthlyPayment(null)
      return
    }

    const loanAmount = price - down
    const monthlyRate = rate / 100 / 12
    const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    
    setMonthlyPayment(payment)
  }

  const handleCalculatorChange = (field: string, value: string) => {
    setCalculatorValues(prev => ({ ...prev, [field]: value }))
  }

  const handleApplicationChange = (field: string, value: string | boolean) => {
    setApplicationData(prev => ({ ...prev, [field]: value }))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const financingOptions = [
    {
      title: 'New Car Financing',
      description: 'Competitive rates for new vehicles with terms up to 84 months',
      features: ['Rates as low as 2.99% APR', 'Terms up to 84 months', '100% financing available', 'Quick approval process'],
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Used Car Financing',
      description: 'Flexible financing for pre-owned vehicles with extended warranties',
      features: ['Rates starting at 3.99% APR', 'Terms up to 72 months', 'Extended warranty options', 'Trade-in credit available'],
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Credit Rebuild Program',
      description: 'Special financing for customers rebuilding their credit history',
      features: ['Second chance financing', 'Credit building opportunities', 'Lower down payments', 'Flexible terms'],
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]

  const financeSteps = [
    {
      step: 1,
      title: 'Get Pre-Approved',
      description: 'Fill out our simple online application to get pre-approved in minutes.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.072M6.343 6.343L17.657 17.657" />
        </svg>
      )
    },
    {
      step: 2,
      title: 'Choose Your Vehicle',
      description: 'Browse our inventory and select the perfect vehicle for your needs.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      step: 3,
      title: 'Finalize Terms',
      description: 'Work with our finance team to finalize your loan terms and rate.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      step: 4,
      title: 'Drive Away',
      description: 'Complete the paperwork and drive away in your new vehicle!',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    }
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
              <span>Financing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Auto Financing Made Simple
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Get competitive rates and flexible terms on your next vehicle purchase. 
              Our finance experts work with all credit situations to find the perfect solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Apply Now
              </button>
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Calculate Payment
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Financing Options */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Financing Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a variety of financing solutions to meet your needs, regardless of your credit situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {option.icon}
                  <h3 className="text-xl font-heading font-semibold text-gray-900 ml-3">
                    {option.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Finance Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting financed for your next vehicle is easier than you think. Here's how it works:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financeSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Loan Calculator */}
        <section id="calculator" className="mb-20">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Payment Calculator
              </h2>
              <p className="text-lg text-gray-600">
                Estimate your monthly payment with our easy-to-use calculator
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Price</label>
                  <input
                    type="number"
                    placeholder="25,000"
                    value={calculatorValues.price}
                    onChange={(e) => handleCalculatorChange('price', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment</label>
                  <input
                    type="number"
                    placeholder="5,000"
                    value={calculatorValues.downPayment}
                    onChange={(e) => handleCalculatorChange('downPayment', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                  <input
                    type="number"
                    placeholder="4.5"
                    step="0.1"
                    value={calculatorValues.interestRate}
                    onChange={(e) => handleCalculatorChange('interestRate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term (months)</label>
                  <select
                    value={calculatorValues.term}
                    onChange={(e) => handleCalculatorChange('term', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                    <option value="60">60 months</option>
                    <option value="72">72 months</option>
                    <option value="84">84 months</option>
                  </select>
                </div>

                <button
                  onClick={calculatePayment}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Calculate Payment
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
                {monthlyPayment !== null ? (
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Estimated Monthly Payment</div>
                    <div className="text-4xl font-heading font-bold text-primary mb-4">
                      {formatCurrency(monthlyPayment)}
                    </div>
                    <div className="text-sm text-gray-500">
                      *This is an estimate. Actual terms may vary based on credit approval.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p>Enter your loan details above to calculate your estimated monthly payment</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application" className="mb-20">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Financing Application
              </h2>
              <p className="text-lg text-gray-600">
                Complete our secure application form to get pre-approved for financing
              </p>
            </div>

            <form className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.firstName}
                      onChange={(e) => handleApplicationChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.lastName}
                      onChange={(e) => handleApplicationChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={applicationData.email}
                      onChange={(e) => handleApplicationChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicationData.phone}
                      onChange={(e) => handleApplicationChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={applicationData.dateOfBirth}
                      onChange={(e) => handleApplicationChange('dateOfBirth', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Social Security Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="XXX-XX-XXXX"
                      required
                      value={applicationData.ssn}
                      onChange={(e) => handleApplicationChange('ssn', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Address Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.street}
                      onChange={(e) => handleApplicationChange('street', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.city}
                      onChange={(e) => handleApplicationChange('city', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={applicationData.state}
                      onChange={(e) => handleApplicationChange('state', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select State</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                      {/* Add more states as needed */}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.zipCode}
                      onChange={(e) => handleApplicationChange('zipCode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time at Address
                    </label>
                    <select
                      value={applicationData.timeAtAddress}
                      onChange={(e) => handleApplicationChange('timeAtAddress', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select Duration</option>
                      <option value="less-than-1">Less than 1 year</option>
                      <option value="1-2">1-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="more-than-5">More than 5 years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Employment Information */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Employment Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employer Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.employerName}
                      onChange={(e) => handleApplicationChange('employerName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.jobTitle}
                      onChange={(e) => handleApplicationChange('jobTitle', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Phone
                    </label>
                    <input
                      type="tel"
                      value={applicationData.workPhone}
                      onChange={(e) => handleApplicationChange('workPhone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Income <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      value={applicationData.monthlyIncome}
                      onChange={(e) => handleApplicationChange('monthlyIncome', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button
                  type="button"
                  className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Save & Continue Later
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Submit Application
                </button>
              </div>

              <div className="text-center text-sm text-gray-500 pt-4">
                <p>Your information is secure and protected. We use bank-level encryption to keep your data safe.</p>
              </div>
            </form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Questions About Financing?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our finance experts are here to help you find the perfect loan solution. 
            Contact us today to discuss your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Contact Finance Team
            </Link>
            <a
              href="tel:555-123-4567"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Call (555) 123-4567
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
