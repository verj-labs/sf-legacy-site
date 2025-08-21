import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink mb-8">
              About SF Legacy Motors
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                For over 15 years, SF Legacy Motors has been San Francisco's trusted destination 
                for quality used vehicles. We've built our reputation on honest dealings, 
                exceptional customer service, and a commitment to helping our customers find 
                the perfect vehicle for their needs and budget.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our team of automotive professionals brings decades of combined experience 
                to every interaction. We understand that buying a car is a significant investment, 
                and we're here to make the process as smooth and transparent as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-ink mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional automotive solutions through quality vehicles, 
                  transparent pricing, and unmatched customer service that builds lasting relationships.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-ink mb-4">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Honesty & Transparency
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Customer First Approach
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Quality & Reliability
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Community Commitment
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#inventory" 
                className="bg-primary text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                View Our Inventory
              </Link>
              <Link 
                href="#contact" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
          
          {/* Stats & Highlights */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-secondary p-8 lg:p-10 rounded-xl mb-8">
              <h3 className="text-2xl font-heading font-bold text-ink mb-8">
                By the Numbers
              </h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">15+</div>
                  <div className="text-ink font-medium">Years in Business</div>
                </div>
                
                <div className="text-center border-t border-gray-300 pt-6">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">5,000+</div>
                  <div className="text-ink font-medium">Happy Customers</div>
                </div>
                
                <div className="text-center border-t border-gray-300 pt-6">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">500+</div>
                  <div className="text-ink font-medium">Vehicles in Stock</div>
                </div>
                
                <div className="text-center border-t border-gray-300 pt-6">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">A+</div>
                  <div className="text-ink font-medium">BBB Rating</div>
                </div>
              </div>
            </div>
            
            {/* Awards & Certifications */}
            <div className="bg-white p-8 lg:p-10 rounded-xl border-2 border-secondary">
              <h3 className="text-xl font-heading font-bold text-ink mb-6">
                Awards & Recognition
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🏆</div>
                  <div>
                    <div className="font-semibold text-ink">Best Used Car Dealer</div>
                    <div className="text-sm text-gray-600">SF Chronicle 2024</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">⭐</div>
                  <div>
                    <div className="font-semibold text-ink">5-Star Customer Service</div>
                    <div className="text-sm text-gray-600">Google Reviews</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🛡️</div>
                  <div>
                    <div className="font-semibold text-ink">Certified Pre-Owned</div>
                    <div className="text-sm text-gray-600">Dealer Certification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
