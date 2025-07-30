import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TradeInForm from '@/components/TradeInForm'
import ScrollToFormButton from '@/components/ScrollToFormButton'
import CTABanner from '@/components/CTABanner'

export default function TradeInPage() {
  const benefits = [
    {
      title: 'Instant Online Quote',
      description: 'Get an estimated trade-in value in minutes with our online tool',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Competitive Values',
      description: 'We offer some of the best trade-in values in the San Francisco area',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'All Makes Welcome',
      description: 'We accept vehicles from all manufacturers, regardless of age or condition',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Hassle-Free Process',
      description: 'Simple paperwork and quick transaction to get you on the road faster',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
              <span>Trade-In</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Get Your Trade-In Quote
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Turn your current vehicle into cash or credit toward your next purchase. 
              Get an instant estimate with our easy online valuation tool.
            </p>
            <ScrollToFormButton />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Trade With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We make trading in your vehicle simple, fast, and rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Valuation Form */}
        <section id="valuation-form" className="mb-20">
          <TradeInForm />
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Trade-In FAQ
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm divide-y divide-gray-200">
            <details className="p-6">
              <summary className="font-medium text-gray-900 cursor-pointer">
                How accurate is the online estimate?
              </summary>
              <p className="mt-3 text-gray-600">
                Our online estimate provides a good starting point based on market data and the information you provide. 
                The final offer will be determined after a physical inspection of your vehicle.
              </p>
            </details>
            
            <details className="p-6">
              <summary className="font-medium text-gray-900 cursor-pointer">
                What documents do I need to bring?
              </summary>
              <p className="mt-3 text-gray-600">
                Please bring your vehicle title, registration, driver's license, and any service records you have. 
                If you're still financing the vehicle, bring your loan information.
              </p>
            </details>
            
            <details className="p-6">
              <summary className="font-medium text-gray-900 cursor-pointer">
                Do I have to buy a car to trade in my vehicle?
              </summary>
              <p className="mt-3 text-gray-600">
                No, we purchase vehicles outright even if you're not buying from us. However, you may get a better 
                value if you use your trade-in toward a purchase.
              </p>
            </details>
            
            <details className="p-6">
              <summary className="font-medium text-gray-900 cursor-pointer">
                How long does the trade-in process take?
              </summary>
              <p className="mt-3 text-gray-600">
                The appraisal process typically takes 30-45 minutes. If you accept our offer, we can complete 
                the paperwork the same day.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <CTABanner 
          title="Ready for Your Next Vehicle?"
          description="Browse our inventory of quality vehicles or schedule a test drive today."
        />
      </div>

      <Footer />
    </div>
  )
}
