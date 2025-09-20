"use client";

import { useState } from "react";
import Chip from "./Chip";
import { MobileStepper, DesktopStepper, StepperStep } from "./Stepper";
import { FormHeader } from "./FormHeader";
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
      case 3:
        // Step 3 is review & submit - all required data should be complete
        return vehicleData.year && vehicleData.make && vehicleData.model && 
               vehicleData.mileage && vehicleData.condition &&
               vehicleData.firstName && vehicleData.lastName && 
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

  const isStepComplete = () => {
    return canProceedToNext()
  }

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

  const steps: StepperStep[] = [
    {
      num: 1,
      title: "Vehicle Details",
      description: "Basic vehicle information",
      subtitle: "Tell us about your vehicle to get started",
      icon: HiOutlineTruck
    },
    {
      num: 2,
      title: "Contact Information", 
      description: "Your contact details",
      subtitle: "We need your contact details to provide the quote",
      icon: HiOutlineUser
    },
    {
      num: 3,
      title: "Get Your Quote",
      description: "Review and get estimate",
      subtitle: "Review your information and get your trade-in estimate",
      icon: HiOutlineCalculator
    }
  ];

  return (
    <div className="max-w-6xl mx-auto lg:px-4">
      {/* Mobile Stepper */}
      <MobileStepper steps={steps} currentStep={currentStep} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Stepper */}
        <DesktopStepper 
          steps={steps} 
          currentStep={currentStep} 
          title="Trade-In Progress" 
        />

        {/* Main Form Content */}
        <div className="col-span-1 lg:col-span-3">
          <div className="bg-surface rounded-xl border border-border shadow-xs">
            {/* Form Header */}
            <FormHeader steps={steps} currentStep={currentStep} />

            {/* Form Content */}
            <div className="p-4 sm:p-6">
              {/* Step 1: Vehicle Information */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-body mb-2">
                      Year <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={vehicleData.year}
                      onChange={(e) =>
                        handleInputChange("year", e.target.value)
                      }
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm bg-white appearance-none cursor-pointer"
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm bg-white appearance-none cursor-pointer"
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="e.g., 50000"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-body mb-2">
                      Overall Condition{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={vehicleData.condition}
                      onChange={(e) =>
                        handleInputChange("condition", e.target.value)
                      }
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm bg-white appearance-none cursor-pointer"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-body mb-2">
                      Additional Comments
                    </label>
                    <textarea
                      value={vehicleData.comments}
                      onChange={(e) =>
                        handleInputChange("comments", e.target.value)
                      }
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      rows={4}
                      placeholder="Any additional information about your vehicle or trade-in preferences..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Review & Submit */}
              {currentStep === 3 && (
                <div className="space-y-4 sm:space-y-6">
                  {/* Vehicle Summary Card */}
                  <div className="bg-neutral-50 p-4 rounded-lg border border-border">
                    <h3 className="text-base sm:text-lg font-heading font-medium text-ink mb-4 flex items-center">
                      <HiOutlineTruck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-body" />
                      Vehicle Summary
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
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
                      <div className="sm:col-span-2">
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
                  {/* DON'T NEED IT RIGHT NOW, COULD NEED IT LATER */}
                  {/* <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg border border-gray-200">
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
                  </div> */}
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="px-4 sm:px-6 py-4 bg-neutral-50 border-t border-border rounded-b-xl flex justify-between items-center">
              <button
                type="button"
                onClick={prevStep}
                className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-md transition-colors border ${
                  currentStep === 1
                    ? " text-gray-400 cursor-not-allowed"
                    : " text-body border border-gray-300 hover:bg-gray-50"
                }`}
                disabled={currentStep === 1}
              >
                Previous
              </button>

              <button
                type="button"
                onClick={currentStep === 3 ? handleSubmit : nextStep}
                className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-md transition-all border ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : currentStep === 3
                    ? isStepComplete()
                      ? "bg-brand-500 text-ink hover:bg-brand-600  border-border-focus  font-black "
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : isStepComplete()
                      ? "bg-brand-500 text-ink hover:bg-brand-600  border-border-focus  font-black "
                      : " text-gray-400 cursor-not-allowed"
                }`}
                disabled={isSubmitting || !isStepComplete()}
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
