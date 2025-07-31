import Link from 'next/link'
import FinancingForm from '@/components/FinancingForm'
import PageStartBanner from '@/components/PageStartBanner'
import PageEndBanner from '@/components/PageEndBanner'
import Chip from '@/components/Chip'
import { HiOutlineCurrencyDollar, HiOutlineCheckCircle, HiOutlineClock, HiOutlineShieldCheck } from 'react-icons/hi'

export default function FinancingPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageStartBanner
        title="Apply For Used Car Financing"
        description="We work with multiple banks and organizations to get you best possible solution for your financing needs. We have solutions for good and bad credit scores with market competitive interest rates."
      >
        <div className="flex flex-wrap gap-3">
          <Chip variant="overlay">
            <HiOutlineCurrencyDollar className="w-4 h-4" />
            Multiple Banks
          </Chip>
          <Chip variant="overlay">
            <HiOutlineCheckCircle className="w-4 h-4" />
            All Credit Scores
          </Chip>
          <Chip variant="overlay">
            <HiOutlineClock className="w-4 h-4" />
            Quick Approval
          </Chip>
          <Chip variant="overlay">
            <HiOutlineShieldCheck className="w-4 h-4" />
            Competitive Rates
          </Chip>
        </div>
        <p className="text-sm text-white/80 mt-4 max-w-2xl">
          Apply now by completing the below 4 steps. Our team will follow up with you instantly.
        </p>
      </PageStartBanner>

      {/* Financing Info Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Financing Benefits - Left Side */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-5">
                Why Choose Our Financing?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">All Credit Welcome</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Good credit, bad credit, or no credit - we work with all credit backgrounds.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiOutlineCurrencyDollar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">Competitive Rates</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Multiple bank partnerships ensure you get the best possible interest rates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiOutlineClock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">Quick Approval</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Fast processing with approvals often within 24 hours of application.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiOutlineShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">Flexible Terms</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Customize your loan terms with various payment options and lengths.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps - Right Side */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-5">
                Simple 4-Step Process
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">Vehicle Info</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Tell us about your desired car price and monthly payment preferences.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">Personal Details</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Provide your contact information and basic personal details.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">Employment Info</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Share your employment status and income information for assessment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">Final Details</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Complete with trade-in info and consent, then submit your application.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-green-600">
                  <HiOutlineCheckCircle className="w-3 h-3" />
                  <span className="text-xs font-medium">Average approval time: 24 hours</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Financing Form Component */}
      <FinancingForm />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <PageEndBanner 
          title="Ready to Drive Your Dream Car?"
          body="Explore our inventory of quality vehicles and schedule a test drive with your approved financing. Our team is here to help you every step of the way."
        />
      </div>
    </div>
  )
}
