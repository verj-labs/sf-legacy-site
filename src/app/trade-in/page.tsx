import Link from 'next/link'
import TradeInForm from '@/components/TradeInForm'
import ScrollToFormButton from '@/components/ScrollToFormButton'
import PageStartBanner from '@/components/PageStartBanner'
import PageEndBanner from '@/components/PageEndBanner'
import Chip from '@/components/Chip'
import { 
  HiOutlineClock, 
  HiOutlineCurrencyDollar, 
  HiOutlineCheckCircle, 
  HiOutlineBolt 
} from 'react-icons/hi2'

export default function TradeInPage() {
  const benefits = [
    {
      title: 'Instant Online Quote',
      description: 'Get an estimated trade-in value in minutes with our online tool',
      icon: <HiOutlineClock className="w-6 h-6 text-neutral-200" />
    },
    {
      title: 'Competitive Values',
      description: 'We offer some of the best trade-in values in the Ontario area',
      icon: <HiOutlineCurrencyDollar className="w-6 h-6 text-neutral-200" />
    },
    {
      title: 'All Makes Welcome',
      description: 'We accept vehicles from all manufacturers, regardless of age or condition',
      icon: <HiOutlineCheckCircle className="w-6 h-6 text-neutral-200" />
    },
    {
      title: 'Hassle-Free Process',
      description: 'Simple paperwork and quick transaction to get you on the road faster',
      icon: <HiOutlineBolt className="w-6 h-6 text-neutral-200" />
    }
  ]

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 pointer-events-none" />
      
      {/* Page Start Banner */}
      <PageStartBanner
        title="Get Your Trade-In Quote"
        description="Turn your current vehicle into cash or credit toward your next purchase. Get an instant estimate with our easy online valuation tool."
      >
        <div className="flex flex-wrap gap-3 mb-4">
          <Chip variant="overlay">
            <HiOutlineClock className="w-4 h-4" />
            Instant Quote
          </Chip>
          <Chip variant="overlay">
            <HiOutlineCurrencyDollar className="w-4 h-4" />
            Best Values
          </Chip>
          <Chip variant="overlay">
            <HiOutlineCheckCircle className="w-4 h-4" />
            All Makes
          </Chip>
          <Chip variant="overlay">
            <HiOutlineBolt className="w-4 h-4" />
            Quick Process
          </Chip>
        </div>
      </PageStartBanner>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4">
        {/* Benefits */}
        <section className="mb-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-ink mb-4 tracking-tight">
              Why Trade With Us?
            </h2>
            <p className="text-sm sm:text-base text-body/80 max-w-3xl mx-auto">
              Simple, fast, and rewarding vehicle trade-ins with transparent pricing and expert service.
            </p>
            <div className="mt-4 sm:mt-6 w-32 sm:w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative bg-surface rounded-xl border border-border shadow-xs p-4 sm:p-6 text-center hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden"
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5" />
                <div className="relative flex justify-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-ink text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-heading font-semibold text-neutral-800 mb-2 group-hover:text-brand transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-body/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Valuation Form */}
        <section id="valuation-form" className="mb-8 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-ink mb-4 tracking-tight">
              Get Your Vehicle Quote
            </h2>
            <p className="text-sm sm:text-base text-body/80 max-w-3xl mx-auto">
              Fill out our simple form to get an instant estimate of your vehicle's trade-in value.
            </p>
            <div className="mt-4 sm:mt-6 w-32 sm:w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>
          
          <TradeInForm />
        </section>

        {/* Compact Info Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Benefits */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-heading font-bold text-gray-900 mb-4">
                Trade-In Benefits
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-gray-100 rounded">
                    <HiOutlineCheckCircle className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">All Makes Welcome</h3>
                    <p className="text-gray-600 text-xs">Any brand, age, or condition</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-gray-100 rounded">
                    <HiOutlineCurrencyDollar className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Best Market Value</h3>
                    <p className="text-gray-600 text-xs">Competitive trade-in prices</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-gray-100 rounded">
                    <HiOutlineClock className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Quick Process</h3>
                    <p className="text-gray-600 text-xs">Same-day appraisal & paperwork</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-gray-100 rounded">
                    <HiOutlineBolt className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Instant Quote</h3>
                    <p className="text-gray-600 text-xs">Get estimate in minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-heading font-bold text-gray-900 mb-4">
                Simple 3-Step Process
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Vehicle Details</h3>
                    <p className="text-gray-600 text-xs">Year, make, model & condition</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Contact Info</h3>
                    <p className="text-gray-600 text-xs">Name, email & phone number</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Get Your Quote</h3>
                    <p className="text-gray-600 text-xs">Instant estimate & next steps</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-emerald-600">
                  <HiOutlineCheckCircle className="w-3 h-3" />
                  <span className="text-xs font-medium">Average quote time: 2 minutes</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-ink mb-4 tracking-tight">
              Trade-In FAQ
            </h2>
            <p className="text-sm sm:text-base text-body/80 max-w-3xl mx-auto">
              Common questions about our trade-in process and what to expect.
            </p>
            <div className="mt-4 sm:mt-6 w-32 sm:w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>

          <div className="bg-surface rounded-xl sm:rounded-2xl shadow-xs border border-border divide-y divide-neutral-200">
            <details className="group p-4 sm:p-6">
              <summary className="font-heading font-medium text-ink cursor-pointer hover:text-brand transition-colors list-none flex justify-between items-center text-sm sm:text-base">
                <span>How accurate is the online estimate?</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-body/60 group-hover:text-brand transition-all group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-body/80 leading-relaxed">
                Our online estimate provides a good starting point based on market data and the information you provide. 
                The final offer will be determined after a physical inspection of your vehicle.
              </p>
            </details>
            
            <details className="group p-4 sm:p-6">
              <summary className="font-heading font-medium text-ink cursor-pointer hover:text-brand transition-colors list-none flex justify-between items-center text-sm sm:text-base">
                <span>What documents do I need to bring?</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-body/60 group-hover:text-brand transition-all group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-body/80 leading-relaxed">
                Please bring your vehicle title, registration, driver's license, and any service records you have. 
                If you're still financing the vehicle, bring your loan information.
              </p>
            </details>
            
            <details className="group p-4 sm:p-6">
              <summary className="font-heading font-medium text-ink cursor-pointer hover:text-brand transition-colors list-none flex justify-between items-center text-sm sm:text-base">
                <span>Do I have to buy a car to trade in my vehicle?</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-body/60 group-hover:text-brand transition-all group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-body/80 leading-relaxed">
                No, we purchase vehicles outright even if you're not buying from us. However, you may get a better 
                value if you use your trade-in toward a purchase.
              </p>
            </details>
            
            <details className="group p-4 sm:p-6">
              <summary className="font-heading font-medium text-ink cursor-pointer hover:text-brand transition-colors list-none flex justify-between items-center text-sm sm:text-base">
                <span>How long does the trade-in process take?</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-body/60 group-hover:text-brand transition-all group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-body/80 leading-relaxed">
                The appraisal process typically takes 30-45 minutes. If you accept our offer, we can complete 
                the paperwork the same day.
              </p>
            </details>
          </div>
        </section>

        {/* Page End Banner */}
        <PageEndBanner 
          title="Ready for Your Next Vehicle?"
          body="Browse our inventory of quality vehicles or schedule a test drive today."
        />
      </div>
    </div>
  )
}
