import FinancingForm from '@/components/FinancingForm'
import PaymentCalculator from '@/components/PaymentCalculator'
import PageStartBanner from '@/components/PageStartBanner'
import PageEndBanner from '@/components/PageEndBanner'
import Chip from '@/components/Chip'
import { 
  HiOutlineCurrencyDollar, 
  HiOutlineCheckCircle, 
  HiOutlineClock, 
  HiOutlineShieldCheck 
} from 'react-icons/hi2'

export default function FinancingPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageStartBanner
        title="Used Car Financing"
        description="Get approved for financing with competitive rates. We work with multiple lenders to find the best solution for your credit situation."
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
          Apply now by completing the application below. Our team will follow up with you instantly.
        </p>
      </PageStartBanner>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4">
        {/* Payment Calculator Section */}
        <section className="">
          <PaymentCalculator />
        </section>

        {/* Financing Form Section */}
        <section className="">
          <FinancingForm />
        </section>

        {/* Compact Info Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Benefits */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">
                Why Choose Our Financing?
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-gray-100 rounded">
                    <HiOutlineCheckCircle className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">All Credit Welcome</h3>
                    <p className="text-gray-600 text-xs">Good, bad, or no credit accepted</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-gray-100 rounded">
                    <HiOutlineCurrencyDollar className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Competitive Rates</h3>
                    <p className="text-gray-600 text-xs">Multiple bank partnerships</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-gray-100 rounded">
                    <HiOutlineClock className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Quick Approval</h3>
                    <p className="text-gray-600 text-xs">Often within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-gray-100 rounded">
                    <HiOutlineShieldCheck className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Flexible Terms</h3>
                    <p className="text-gray-600 text-xs">Various payment options</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">
                Simple Application Process
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Vehicle & Payment Info</h3>
                    <p className="text-gray-600 text-xs">Price and payment preferences</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Personal Details</h3>
                    <p className="text-gray-600 text-xs">Contact and identification</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Employment Info</h3>
                    <p className="text-gray-600 text-xs">Income and employment details</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Submit & Review</h3>
                    <p className="text-gray-600 text-xs">Final details and consent</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-emerald-600">
                  <HiOutlineCheckCircle className="w-3 h-3" />
                  <span className="text-xs font-medium">Average approval: 24 hours</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <PageEndBanner 
          title="Ready to Drive Your Dream Car?"
          body="Explore our inventory of quality vehicles and schedule a test drive with your approved financing."
        />
      </div>
    </div>
  )
}
