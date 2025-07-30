'use client'

import { useState } from 'react'

interface PaymentCalculatorProps {
  className?: string
  compact?: boolean
}

export default function PaymentCalculator({ className = '', compact = false }: PaymentCalculatorProps) {
  const [calculatorValues, setCalculatorValues] = useState({
    price: '',
    downPayment: '',
    interestRate: '7.99',
    term: '60'
  })
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null)

  const calculatePayment = () => {
    const price = parseFloat(calculatorValues.price) || 0
    const down = parseFloat(calculatorValues.downPayment) || 0
    const rate = parseFloat(calculatorValues.interestRate) || 0
    const termMonths = parseInt(calculatorValues.term) || 60

    if (price > 0 && price > down) {
      const loanAmount = price - down
      const monthlyRate = rate / 100 / 12
      
      if (rate > 0) {
        const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                       (Math.pow(1 + monthlyRate, termMonths) - 1)
        setMonthlyPayment(Math.round(payment * 100) / 100)
      } else {
        setMonthlyPayment(loanAmount / termMonths)
      }
    } else {
      setMonthlyPayment(null)
    }
  }

  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${compact ? 'p-4' : 'p-6'} ${className}`}>
      <h3 className={`font-heading font-bold text-gray-900 mb-4 ${compact ? 'text-lg' : 'text-xl'}`}>
        Payment Calculator
      </h3>
      <div className={`grid gap-4 mb-4 ${compact ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-4'}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Price
          </label>
          <input
            type="number"
            value={calculatorValues.price}
            onChange={(e) => setCalculatorValues(prev => ({ ...prev, price: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="$25,000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Down Payment
          </label>
          <input
            type="number"
            value={calculatorValues.downPayment}
            onChange={(e) => setCalculatorValues(prev => ({ ...prev, downPayment: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="$5,000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Interest Rate (%)
          </label>
          <input
            type="number"
            value={calculatorValues.interestRate}
            onChange={(e) => setCalculatorValues(prev => ({ ...prev, interestRate: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            step="0.1"
            placeholder="7.99"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Term (Months)
          </label>
          <select
            value={calculatorValues.term}
            onChange={(e) => setCalculatorValues(prev => ({ ...prev, term: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="36">36</option>
            <option value="48">48</option>
            <option value="60">60</option>
            <option value="72">72</option>
            <option value="84">84</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={calculatePayment}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Calculate
        </button>
        {monthlyPayment && (
          <div className="text-right">
            <p className="text-sm text-gray-600">Estimated Monthly Payment</p>
            <p className={`font-bold text-primary ${compact ? 'text-xl' : 'text-2xl'}`}>
              ${monthlyPayment.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
