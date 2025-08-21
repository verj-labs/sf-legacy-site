"use client";

import { useState } from "react";
import Chip from "./Chip";
import {
  HiOutlineCheckCircle,
  HiOutlineTruck,
  HiOutlineUser,
  HiOutlineCalculator,
} from "react-icons/hi";

interface TradeInFormProps {
  compact?: boolean;
}

export default function TradeInForm({ compact = false }: TradeInFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicleData, setVehicleData] = useState({
    year: "",
    make: "",
    model: "",
    mileage: "",
    condition: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [estimatedValue, setEstimatedValue] = useState<{
    low: number;
    high: number;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | string[]) => {
    setVehicleData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateEstimate = () => {
    const baseValue = parseInt(vehicleData.year) > 2015 ? 15000 : 8000;
    const mileageAdjustment =
      Math.max(0, (200000 - parseInt(vehicleData.mileage)) / 10000) * 1000;
    const conditionMultiplier =
      vehicleData.condition === "excellent"
        ? 1.2
        : vehicleData.condition === "good"
        ? 1.0
        : vehicleData.condition === "fair"
        ? 0.8
        : 0.6;

    const estimated = (baseValue + mileageAdjustment) * conditionMultiplier;
    setEstimatedValue({
      low: Math.round(estimated * 0.9),
      high: Math.round(estimated * 1.1),
    });
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 2) {
      calculateEstimate();
      setCurrentStep(3);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return vehicleData.year && vehicleData.make && vehicleData.model && 
               vehicleData.mileage && vehicleData.condition;
      case 2:
        return vehicleData.firstName && vehicleData.lastName && 
               vehicleData.email && vehicleData.phone;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!process.env.NEXT_PUBLIC_TRADE_IN_FORM_URL) {
      alert("Trade-in form URL not configured. Please contact support.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("year", vehicleData.year);
      formData.append("make", vehicleData.make);
      formData.append("model", vehicleData.model);
      formData.append("mileage", vehicleData.mileage);
      formData.append("condition", vehicleData.condition);
      formData.append("firstName", vehicleData.firstName);
      formData.append("lastName", vehicleData.lastName);
      formData.append("email", vehicleData.email);
      formData.append("phone", vehicleData.phone);
      formData.append("comments", vehicleData.comments);
      formData.append(
        "estimatedValue",
        estimatedValue
          ? `${formatCurrency(estimatedValue.low)} - ${formatCurrency(
              estimatedValue.high
            )}`
          : "Not calculated"
      );

      const response = await fetch(process.env.NEXT_PUBLIC_TRADE_IN_FORM_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setCurrentStep(1);
        setVehicleData({
          year: "",
          make: "",
          model: "",
          mileage: "",
          condition: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          comments: "",
        });
        setEstimatedValue(null);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Sorry, there was an error submitting your request. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const makes = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Nissan",
    "Hyundai",
    "Kia",
    "Volkswagen",
    "Subaru",
  ];

  const years = Array.from({ length: 25 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Vertical Stepper Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-xl font-heading font-bold text-ink mb-6">
              Trade-In Progress
            </h2>

            <div className="space-y-4">
              {/* Step 1 */}
              <div
                className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                  currentStep === 1
                    ? "bg-gray-100 border border-gray-200"
                    : currentStep > 1
                    ? "bg-green-50 border border-green-200"
                    : "bg-neutral-50 border border-neutral-200"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 1
                      ? "bg-gray-900 text-white"
                      : currentStep > 1
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {currentStep > 1 ? (
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  ) : (
                    <HiOutlineTruck className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium ${
                      currentStep >= 1 ? "text-ink" : "text-body/60"
                    }`}
                  >
                    Vehicle Details
                  </p>
                  <p className="text-xs text-body/60 mt-1">
                    Basic vehicle information
                  </p>
                  {currentStep > 1 && (
                    <Chip variant="success" size="sm" className="mt-2">
                      Complete
                    </Chip>
                  )}
                  {currentStep === 1 && (
                    <Chip variant="default" size="sm" className="mt-2">
                      Current
                    </Chip>
                  )}
                </div>
              </div>

              {/* Step 2 */}
              <div
                className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                  currentStep === 2
                    ? "bg-gray-100 border border-gray-200"
                    : currentStep > 2
                    ? "bg-green-50 border border-green-200"
                    : "bg-neutral-50 border border-neutral-200"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 2
                      ? "bg-gray-900 text-white"
                      : currentStep > 2
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {currentStep > 2 ? (
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  ) : (
                    <HiOutlineUser className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium ${
                      currentStep >= 2 ? "text-ink" : "text-body/60"
                    }`}
                  >
                    Contact Information
                  </p>
                  <p className="text-xs text-body/60 mt-1">
                    Your contact details
                  </p>
                  {currentStep > 2 && (
                    <Chip variant="success" size="sm" className="mt-2">
                      Complete
                    </Chip>
                  )}
                  {currentStep === 2 && (
                    <Chip variant="default" size="sm" className="mt-2">
                      Current
                    </Chip>
                  )}
                </div>
              </div>

              {/* Step 3 */}
              <div
                className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                  currentStep === 3
                    ? "bg-gray-100 border border-gray-200"
                    : "bg-neutral-50 border border-neutral-200"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 3
                      ? "bg-gray-900 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  <HiOutlineCalculator className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium ${
                      currentStep >= 3 ? "text-ink" : "text-body/60"
                    }`}
                  >
                    Get Your Quote
                  </p>
                  <p className="text-xs text-body/60 mt-1">
                    Review and get estimate
                  </p>
                  {currentStep === 3 && (
                    <Chip variant="default" size="sm" className="mt-2">
                      Current
                    </Chip>
                  )}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 bg-gray-200 rounded-full h-2">
              <div
                className="bg-gray-900 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
            <p className="text-xs text-body/60 mt-2 text-center">
              Step {currentStep} of 3
            </p>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="lg:col-span-3">
          <div className="bg-surface rounded-xl border border-border shadow-xs">
            {/* Form Header */}
            <div className="px-6 py-4 border-b border-border bg-neutral-50 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-heading font-semibold text-ink">
                    {currentStep === 1 && "Vehicle Information"}
                    {currentStep === 2 && "Contact Information"}
                    {currentStep === 3 && "Your Quote"}
                  </h1>
                  <p className="text-sm text-body/80 mt-1">
                    {currentStep === 1 &&
                      "Tell us about your vehicle to get started"}
                    {currentStep === 2 &&
                      "We need your contact details to provide the quote"}
                    {currentStep === 3 &&
                      "Review your information and get your trade-in estimate"}
                  </p>
                </div>
                <div className="hidden sm:block">
                  <div className="bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-ink">
                      {Math.round((currentStep / 3) * 100)}% Complete
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {/* Step 1: Vehicle Information */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-body mb-2">
                      Year <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={vehicleData.year}
                      onChange={(e) =>
                        handleInputChange("year", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      required
                    >
                      <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-body mb-2">
                      Make <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={vehicleData.make}
                      onChange={(e) =>
                        handleInputChange("make", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      required
                    >
                      <option value="">Select Make</option>
                      {makes.map((make) => (
                        <option key={make} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-body mb-2">
                      Model <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={vehicleData.model}
                      onChange={(e) =>
                        handleInputChange("model", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="e.g., Camry, Accord, F-150"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-body mb-2">
                      Mileage <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={vehicleData.mileage}
                      onChange={(e) =>
                        handleInputChange("mileage", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="e.g., 50000"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-body mb-2">
                      Overall Condition{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={vehicleData.condition}
                      onChange={(e) =>
                        handleInputChange("condition", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      required
                    >
                      <option value="">Select Condition</option>
                      <option value="excellent">
                        Excellent - Like new, no visible wear
                      </option>
                      <option value="good">
                        Good - Minor wear, well maintained
                      </option>
                      <option value="fair">
                        Fair - Noticeable wear, some issues
                      </option>
                      <option value="poor">
                        Poor - Significant damage or mechanical issues
                      </option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-body mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={vehicleData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-body mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={vehicleData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-body mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={vehicleData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-body mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={vehicleData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-body mb-2">
                      Additional Comments
                    </label>
                    <textarea
                      value={vehicleData.comments}
                      onChange={(e) =>
                        handleInputChange("comments", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      rows={4}
                      placeholder="Any additional information about your vehicle or trade-in preferences..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Review & Submit */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  {/* Vehicle Summary Card */}
                  <div className="bg-neutral-50 p-4 rounded-lg border border-border">
                    <h3 className="text-lg font-heading font-medium text-ink mb-4 flex items-center">
                      <HiOutlineTruck className="w-5 h-5 mr-2 text-body" />
                      Vehicle Summary
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-body">
                          Vehicle:
                        </span>
                        <span className="ml-2 text-ink">
                          {vehicleData.year} {vehicleData.make}{" "}
                          {vehicleData.model}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-body">
                          Mileage:
                        </span>
                        <span className="ml-2 text-ink">
                          {vehicleData.mileage} miles
                        </span>
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-body">
                          Condition:
                        </span>
                        <span className="ml-2 capitalize text-ink">
                          {vehicleData.condition}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Summary Card */}
                  <div className="bg-neutral-50 p-4 rounded-lg border border-border">
                    <h3 className="text-lg font-heading font-medium text-ink mb-4 flex items-center">
                      <HiOutlineUser className="w-5 h-5 mr-2 text-body" />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-body">
                          Name:
                        </span>
                        <span className="ml-2 text-ink">
                          {vehicleData.firstName} {vehicleData.lastName}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-body">
                          Email:
                        </span>
                        <span className="ml-2 text-ink">{vehicleData.email}</span>
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-body">
                          Phone:
                        </span>
                        <span className="ml-2 text-ink">{vehicleData.phone}</span>
                      </div>
                    </div>
                    {vehicleData.comments && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="font-medium text-body">
                          Additional Comments:
                        </span>
                        <p className="text-sm text-body/80 mt-1">
                          {vehicleData.comments}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Estimated Value Card */}
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-heading font-semibold text-ink mb-2 flex items-center">
                      <HiOutlineCalculator className="w-5 h-5 mr-2" />
                      Estimated Trade-In Value
                    </h3>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-ink mb-2">
                        {estimatedValue
                          ? `${formatCurrency(
                              estimatedValue.low
                            )} - ${formatCurrency(estimatedValue.high)}`
                          : "Calculating..."}
                      </p>
                      <p className="text-sm text-body/70">
                        This is a preliminary estimate. Final value will be
                        determined after inspection.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="px-6 py-4 bg-neutral-50 border-t border-border rounded-b-xl flex justify-between items-center">
              <button
                type="button"
                onClick={prevStep}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentStep === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-body border border-gray-300 hover:bg-gray-50"
                }`}
                disabled={currentStep === 1}
              >
                Previous
              </button>

              <button
                type="button"
                onClick={currentStep === 3 ? handleSubmit : nextStep}
                className={`px-6 py-2 text-sm font-medium text-white rounded-md transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : currentStep === 3
                    ? "bg-green-600 hover:bg-green-700"
                    : canProceedToNext() 
                      ? "bg-gray-900 hover:bg-gray-800" 
                      : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={isSubmitting || (currentStep < 3 && !canProceedToNext())}
              >
                {isSubmitting
                  ? "Submitting..."
                  : currentStep === 3
                  ? "Submit Trade-In Request"
                  : "Next Step"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
