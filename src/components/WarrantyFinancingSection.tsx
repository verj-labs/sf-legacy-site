import Link from 'next/link'

export default function WarrantyFinancingSection() {
  return (
    <section className="section-padding bg-background-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Warranty Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                Warranty Plans
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We have all kinds of <strong>Warranty Plans</strong> to choose from. These plans have a wide range of coverage 
                starting with the basics all the way up to Exclusionary. Get in touch to learn more about what coverage 
                option is best for you.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Basic to Exclusionary Coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Flexible Terms & Deductibles</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Nationwide Service Network</span>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <Link
                  href="/warranty"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn About Warranty
                </Link>
              </div>
            </div>
          </div>

          {/* Financing Section */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-green-600 text-white rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                Used Cars Financing
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We help you get the best possible <strong>financing plan</strong> according to your needs and affordability. 
                We work with multiple banks to get the best deal for you so that you can buy used cars easily.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Multiple Bank Partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Competitive Interest Rates</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Good & Bad Credit Welcome</span>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <Link
                  href="/financing"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Pre-Approved
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
