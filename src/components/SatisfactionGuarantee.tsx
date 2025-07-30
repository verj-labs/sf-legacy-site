export default function SatisfactionGuarantee() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted by Thousands
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            100% Satisfaction Guaranteed
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              We only deal in good quality, well-maintained vehicles having clean <strong>CARFAX report</strong>. 
              Our prices for used cars are very competitive and in range of <strong>"Great Deal"</strong> in CarGurus.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean CARFAX Reports</h3>
              <p className="text-gray-600 text-sm">Every vehicle comes with a clean history report for your peace of mind.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CarGurus Great Deals</h3>
              <p className="text-gray-600 text-sm">Our competitive pricing consistently earns "Great Deal" ratings on CarGurus.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Maintained</h3>
              <p className="text-gray-600 text-sm">Well-maintained vehicles with documented service history and thorough inspections.</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600">Vehicles Sold</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-gray-600">Clean Reports</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
