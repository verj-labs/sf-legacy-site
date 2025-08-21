export default function ValuePropositions() {
  const propositions = [
    {
      title: 'Certified Inspections',
      description: 'Every vehicle undergoes a comprehensive 150-point inspection by our certified technicians to ensure quality and reliability.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Flexible Financing',
      description: 'Competitive rates and flexible terms for all credit types. Get pre-approved in minutes with our streamlined process.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Fair Trade-In Program',
      description: 'Get the most value for your current vehicle with our transparent trade-in evaluation process.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: 'Extended Warranties',
      description: 'Protect your investment with comprehensive warranty options and ongoing maintenance support.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-ink mb-4 md:mb-6">
            Why Choose SF Legacy Autos?
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're committed to providing exceptional service and quality vehicles. 
            Here's what sets us apart from other dealerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {propositions.map((prop, index) => (
            <div key={index} className="group">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <div className="text-primary group-hover:text-white transition-colors duration-300">
                      {prop.icon}
                    </div>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-ink mb-3 group-hover:text-primary transition-colors duration-300">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {prop.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-200"
            >
              Learn More About Us
            </a>
            <a
              href="#contact"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Visit Our Showroom
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
