import Link from 'next/link'

const services = [
  {
    title: "Vehicle Sales",
    description: "Browse our extensive inventory of quality used cars, trucks, and SUVs.",
    features: ["150-point inspection", "CarFax reports", "Competitive pricing", "Quality guarantee"]
  },
  {
    title: "Financing & Leasing",
    description: "Flexible financing options for all credit situations with competitive rates.",
    features: ["Bad credit welcome", "Quick approval", "Low down payments", "Extended warranties"]
  },
  {
    title: "Trade-In Services",
    description: "Get top dollar for your current vehicle with our fair trade-in evaluations.",
    features: ["Instant quotes", "Fair market value", "Easy process", "All makes accepted"]
  },
  {
    title: "Maintenance & Repair",
    description: "Keep your vehicle running smoothly with our certified service department.",
    features: ["Certified technicians", "Genuine parts", "Service warranties", "Convenient scheduling"]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-ink mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From finding your perfect vehicle to ongoing maintenance, 
            we provide comprehensive automotive services to meet all your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 md:p-8 lg:p-10 rounded-xl border-2 border-secondary hover:border-primary hover:shadow-lg transition-all duration-300 bg-white group">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-ink mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base lg:text-lg">
                {service.description}
              </p>
              <ul className="space-y-2 md:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600 text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-accent mr-3 md:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Section CTAs */}
        <div className="text-center mt-12 md:mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact" 
              className="inline-block bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-heading font-semibold text-base md:text-lg hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Schedule Service
            </Link>
            <Link 
              href="#financing" 
              className="inline-block bg-accent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-heading font-semibold text-base md:text-lg hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Apply for Financing
            </Link>
            <Link 
              href="#sell-trade" 
              className="inline-block border-2 border-primary text-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-heading font-semibold text-base md:text-lg hover:bg-primary hover:text-white transition-all duration-200"
            >
              Trade Your Vehicle
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
