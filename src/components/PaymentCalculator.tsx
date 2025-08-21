"use client";

import { useState, useEffect } from "react";

interface PaymentCalculatorProps {
  className?: string;
  compact?: boolean;
}

interface CalculationResults {
  payment: number;
  vehiclePrice: number;
  hst: number;
  interestPaid: number;
  totalLoanAmount: number;
}

export default function PaymentCalculator({
  className = "",
  compact = false,
}: PaymentCalculatorProps) {
  const [calculatorValues, setCalculatorValues] = useState({
    paymentFreq: "monthly",
    vehiclePrice: 25000,
    downPayment: 0,
    interestRate: "7.99",
    termLength: "60",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  // Interest rate options with credit score ranges
  const interestRateOptions = [
    { value: "7.99", label: "7.99% (Credit Score 780+)" },
    { value: "8.99", label: "8.99% (Credit Score 681-780)" },
    { value: "9.99", label: "9.99% (Credit Score 601-680)" },
  ];

  // Term length options
  const termOptions = [
    { value: "24", label: "24 months" },
    { value: "36", label: "36 months" },
    { value: "48", label: "48 months" },
    { value: "60", label: "60 months" },
    { value: "72", label: "72 months" },
    { value: "84", label: "84 months" },
    { value: "96", label: "96 months" },
  ];

  // Calculate payment whenever values change
  useEffect(() => {
    calculatePayment();
  }, [calculatorValues]);

  const calculatePayment = () => {
    const { vehiclePrice, downPayment, interestRate, termLength, paymentFreq } =
      calculatorValues;

    if (vehiclePrice <= 0) {
      setResults(null);
      return;
    }

    // HST calculation (13% for Ontario)
    const hstRate = 0.13;
    const hst = vehiclePrice * hstRate;

    // Amount financed (principal)
    const principal = vehiclePrice + hst - downPayment;

    if (principal <= 0) {
      setResults(null);
      return;
    }

    const annualRate = parseFloat(interestRate) / 100;
    const termMonths = parseInt(termLength);

    // Calculate periodic rate and number of payments
    let periodicRate: number;
    let numberOfPayments: number;

    if (paymentFreq === "biweekly") {
      periodicRate = annualRate / 26; // APR / 26 for bi-weekly
      numberOfPayments = (termMonths / 12) * 26; // term_years × 26
    } else {
      periodicRate = annualRate / 12; // APR / 12 for monthly
      numberOfPayments = termMonths;
    }

    // Calculate payment using standard amortization formula
    let payment: number;
    if (periodicRate > 0) {
      payment =
        (principal * periodicRate) /
        (1 - Math.pow(1 + periodicRate, -numberOfPayments));
    } else {
      payment = principal / numberOfPayments;
    }

    // Calculate totals
    const totalLoanAmount = payment * numberOfPayments;
    const interestPaid = totalLoanAmount - principal;

    setResults({
      payment: Math.round(payment * 100) / 100,
      vehiclePrice,
      hst: Math.round(hst * 100) / 100,
      interestPaid: Math.round(interestPaid * 100) / 100,
      totalLoanAmount: Math.round(totalLoanAmount * 100) / 100,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleSliderChange = (field: string, value: number) => {
    setCalculatorValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (field: string, value: string | number) => {
    setCalculatorValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex gap-8">
      <div
        className={`bg-neutral-50 rounded-lg border border-gray-200  flex-[2] ${
          compact ? "p-4" : "p-6"
        } ${className}`}
      >
        <h3
          className={`font-heading font-bold text-gray-900 mb-6 ${
            compact ? "text-lg" : "text-xl"
          }`}
        >
          Payment Calculator
        </h3>

        <div className="space-y-4">
          {/* Payment Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Payment Frequency
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleInputChange("paymentFreq", "monthly")}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                  calculatorValues.paymentFreq === "monthly"
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => handleInputChange("paymentFreq", "biweekly")}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                  calculatorValues.paymentFreq === "biweekly"
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                }`}
              >
                Bi-weekly
              </button>
            </div>
          </div>

          {/* Vehicle Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Vehicle Price
            </label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="range"
                  min="10000"
                  max="80000"
                  step="1000"
                  value={calculatorValues.vehiclePrice}
                  onChange={(e) =>
                    handleSliderChange("vehiclePrice", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$10K</span>
                  <span>$80K</span>
                </div>
              </div>
              <input
                type="number"
                value={calculatorValues.vehiclePrice}
                onChange={(e) =>
                  handleInputChange(
                    "vehiclePrice",
                    parseFloat(e.target.value) || 0
                  )
                }
                className="w-24 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                min="0"
                max="100000"
                step="1000"
              />
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Down Payment <span className="text-gray-500">(Optional)</span>
            </label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max={Math.min(calculatorValues.vehiclePrice * 0.5, 20000)}
                  step="500"
                  value={calculatorValues.downPayment}
                  onChange={(e) =>
                    handleSliderChange("downPayment", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$0</span>
                  <span>
                    $
                    {Math.min(
                      calculatorValues.vehiclePrice * 0.5,
                      20000
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
              <input
                type="number"
                value={calculatorValues.downPayment}
                onChange={(e) =>
                  handleInputChange(
                    "downPayment",
                    parseFloat(e.target.value) || 0
                  )
                }
                className="w-24 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                min="0"
                max={calculatorValues.vehiclePrice * 0.5}
                step="500"
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Interest Rate
            </label>
            <div className="flex flex-wrap gap-2">
              {interestRateOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleInputChange("interestRate", option.value)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all ${
                    calculatorValues.interestRate === option.value
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {option.value}%
                </button>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {interestRateOptions.find(opt => opt.value === calculatorValues.interestRate)?.label.split('(')[1]?.replace(')', '')}
            </div>
          </div>

          {/* Term Length */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Term Length
            </label>
            <div className="flex flex-wrap gap-2">
              {termOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleInputChange("termLength", option.value)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all ${
                    calculatorValues.termLength === option.value
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {option.value}mo
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Results */}
      </div>

      <div
        className={`bg-neutral-50 rounded-xl border border-neutral-200 flex-1 p-8 flex flex-col justify-center`}
      >
        {/* <div className="lg:pl-6 lg:border-l border-gray-200"> */}
          {results ? (
            <div className="flex flex-col gap-4 justify-center ">
              {/* Main Payment Display */}
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">
                  {calculatorValues.paymentFreq === "monthly"
                    ? "Monthly"
                    : "Bi-weekly"}{" "}
                  Payment
                </div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 font-heading ">
                  {formatCurrency(results.payment)}
                </div>
              </div>

              <div className="h-[2px] bg-neutral-300"/>

              {/* Detailed Breakdown */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Vehicle Price</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(results.vehiclePrice)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">HST (13%)</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(results.hst)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Interest Paid</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(results.interestPaid)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-t-2 border-gray-300">
                  <span className="text-base font-medium text-gray-900">
                    Total Loan Amount
                  </span>
                  <span className="text-base font-bold text-gray-900">
                    {formatCurrency(results.totalLoanAmount)}
                  </span>
                </div>
              </div>

              {/* Additional Info */}
              {/* <div className=" "> */}
                <p className="text-xs text-gray-500">
                  * Estimates based on Ontario HST (13%). Actual rates may vary
                  based on creditworthiness and lender requirements.
                </p>
              {/* </div> */}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-500">
              <div className="text-center">
                <div className="text-sm">
                  Enter a vehicle price to see payment estimates
                </div>
              </div>
            </div>
          )}
        {/* </div> */}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #1f2937;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #1f2937;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
