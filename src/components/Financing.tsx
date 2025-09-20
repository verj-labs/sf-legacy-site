import Link from 'next/link'

export default function Financing() {
  return (
    <section id="financing" className="py-20 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink mb-6">
              Auto Financing Made Easy
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Get pre-approved for financing in minutes. We work with multiple lenders 
              to find the best rates and terms for your budget and credit situation.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Financing Benefits */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">⚡</div>
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-ink mb-4">
                  Quick Pre-Approval
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get pre-approved in minutes with our simple online application. 
                  No impact on your credit score for pre-qualification.
                </p>
              </div>
              
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">💯</div>
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-ink mb-4">
                  All Credit Welcome
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We work with customers of all credit backgrounds. Bad credit, 
                  no credit, bankruptcy - we have solutions for everyone.
                </p>
              </div>
              
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-ink mb-4">
                  Competitive Rates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our network of lenders compete for your business, ensuring 
                  you get the most competitive rates available.
                </p>
              </div>
              
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-ink mb-4">
                  Flexible Terms
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose from a variety of loan terms and payment options 
                  to find what works best for your budget.
                </p>
              </div>
            </div>
          </div>
          
          {/* Financing Stats */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-ink text-white p-8 lg:p-10 rounded-xl border border-neutral-800">
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-ink mb-4">
                Financing Options
              </h3>
              
              <div className="space-y-6">
                <div className="border-b border-white border-opacity-20 pb-6">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">2.9%</div>
                  <div className="text-lg">APR as low as</div>
                  <div className="text-sm text-gray-200">for qualified buyers</div>
                </div>
                
                <div className="border-b border-white border-opacity-20 pb-6">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">84</div>
                  <div className="text-lg">Months maximum term</div>
                  <div className="text-sm text-gray-200">flexible payment options</div>
                </div>
                
                <div className="border-b border-white border-opacity-20 pb-6">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">$0</div>
                  <div className="text-lg">Down payment options</div>
                  <div className="text-sm text-gray-200">depending on credit</div>
                </div>
                
                <div>
                  <div className="text-3xl font-heading font-bold text-accent mb-2">24/7</div>
                  <div className="text-lg">Online application</div>
                  <div className="text-sm text-gray-200">apply anytime, anywhere</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 text-center">
            <div className="bg-white p-8 lg:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-ink mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Take the first step towards owning your next vehicle. Our financing specialists 
                are ready to help you find the perfect loan solution.
              </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#contact" 
                  className="bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Apply for Financing
                </Link>
                <Link 
                  href="#contact" 
          className="btn-primary px-8 py-4 text-lg"
                >
                  Calculate Payment
                </Link>
                <Link 
                  href="#inventory" 
          className="border-2 border-ink text-ink px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-ink hover:text-white transition-all duration-200"
                >
                  Browse Inventory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
