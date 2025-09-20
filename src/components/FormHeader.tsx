'use client'

import { StepperStep } from "./Stepper"

interface FormHeaderProps {
  steps: StepperStep[]
  currentStep: number
  showProgress?: boolean
  className?: string
}

export function FormHeader({ 
  steps, 
  currentStep, 
  showProgress = true, 
  className = "" 
}: FormHeaderProps) {
  const currentStepData = steps.find(step => step.num === currentStep)
  const totalSteps = steps.length
  const progressPercentage = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className={`px-4 sm:px-6 py-4 border-b border-border bg-neutral-50 rounded-t-xl ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-base sm:text-lg font-heading font-semibold text-ink">
            {currentStepData?.title || `Step ${currentStep}`}
          </h1>
          <p className="text-xs sm:text-sm text-body/80 mt-1">
            {currentStepData?.subtitle || currentStepData?.description}
          </p>
        </div>
        {showProgress && (
          <div className="hidden sm:block">
            <div className="bg-gray-100 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-ink">
                {progressPercentage}% Complete
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
