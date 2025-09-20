"use client";

import { HiOutlineCheckCircle } from "react-icons/hi";
import Chip from "./Chip";

export interface StepperStep {
  num: number;
  title: string;
  description: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface StepperProps {
  steps: StepperStep[];
  currentStep: number;
  title?: string;
  className?: string;
}

export function MobileStepper({ steps, currentStep, className = "" }: StepperProps) {
  const totalSteps = steps.length;
  const progressPercentage = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className={`lg:hidden mb-6 ${className}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.num} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                    currentStep === step.num
                      ? "bg-gray-900 text-white shadow-md"
                      : currentStep > step.num
                      ? "bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {currentStep > step.num ? <HiOutlineCheckCircle className="w-4 h-4" /> : step.num}
                </div>
                <div className="ml-2 hidden sm:block">
                  <p
                    className={`text-xs font-medium transition-colors duration-200 ${
                      currentStep >= step.num ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {step.title.split(" ")[0]}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-8 sm:w-12 h-0.5 mx-2 transition-colors duration-200 ${
                    currentStep > step.num ? "bg-gradient-to-r from-primary-400 to-primary-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-gray-800 to-gray-900 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-2 text-center font-medium">
          Step {currentStep} of {totalSteps}
        </p>
      </div>
    </div>
  );
}

export function DesktopStepper({
  steps,
  currentStep,
  title = "Progress",
  className = "",
}: StepperProps) {
  const totalSteps = steps.length;
  const progressPercentage = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className={`hidden lg:block lg:col-span-1 ${className}`}>
      <div className="sticky top-8">
        <h2 className="text-xl font-heading font-bold text-ink mb-6">{title}</h2>

        <div className="space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`flex items-start space-x-3 p-3 rounded-lg transition-colors border ${
                  currentStep === step.num
                    ? "bg-primary-50 border border-border-focus"
                    : currentStep > step.num
                    ? "bg-gradient-to-br from-primary-400 to-primary-600 border border-primary-500"
                    : "bg-neutral-50 border border-neutral-200"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === step.num
                      ? "bg-gray-900 text-white"
                      : currentStep > step.num
                      ? "bg-ink text-primary-500"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {currentStep > step.num ? (
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0 flex flex-col items-start gap-4">
                  <div className="flex-1 flex flex-col justify-start gap-1">
                    <p
                      className={`text-sm font-bold m-0 ${
                        currentStep >= step.num ? "text-ink" : "text-body/60"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-body/80 m-0">{step.description}</p>
                  </div>
                  {currentStep > step.num && (
                    <Chip size="sm" className="mt-2 bg-ink text-primary-50 self-end">
                      Complete
                    </Chip>
                  )}
                  {currentStep === step.num && (
                    <Chip
                      variant="default"
                      size="sm"
                      className="mt-2 bg-primary-500 text-ink self-end"
                    >
                      Current
                    </Chip>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-gray-200 rounded-full h-2">
          <div
            className="bg-gray-900 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-xs text-body/60 mt-2 text-center">
          Step {currentStep} of {totalSteps}
        </p>
      </div>
    </div>
  );
}
