import Link from 'next/link'

export default function SellTrade() {
  return (
    <section id="sell-trade" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Content */}
          <div className="col-span-12 lg:col-span-7">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink mb-6">
              Sell or Trade Your Vehicle
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Get top dollar for your current vehicle with our hassle-free trade-in process. 
              We offer competitive evaluations and make selling or trading your car simple and transparent.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-secondary rounded-xl">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                  Instant Online Quote
                </h3>
                <p className="text-gray-600">
                  Get a preliminary quote for your vehicle in minutes using our online evaluation tool.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                  Professional Appraisal
                </h3>
                <p className="text-gray-600">
                  Schedule an in-person inspection for a detailed evaluation and final offer.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                  Competitive Offers
                </h3>
                <p className="text-gray-600">
                  We offer fair market value based on current market conditions and vehicle condition.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                  Quick Process
                </h3>
                <p className="text-gray-600">
                  Complete the entire transaction in one visit with immediate payment options.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#contact" 
                className="bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Trade-In Quote
              </Link>
              <Link 
                href="#contact" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                Schedule Appraisal
              </Link>
            </div>
          </div>
          
          {/* Trade-In Form */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-ink text-white p-8 lg:p-10 rounded-xl border border-neutral-800">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-6">
                Quick Trade-In Estimate
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">Vehicle Year</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-ink">
                    <option>Select Year</option>
                    {Array.from({length: 25}, (_, i) => 2025 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3">Make</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Honda, Toyota, Ford"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-ink"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3">Model</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Civic, Camry, F-150"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-ink"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3">Mileage</label>
                  <input 
                    type="number" 
                    placeholder="Current mileage"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-ink"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3">Condition</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-ink">
                    <option>Select Condition</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full btn-primary py-4 px-6 text-center"
                >
                  Get Instant Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
