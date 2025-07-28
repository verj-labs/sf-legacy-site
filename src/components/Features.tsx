import Link from 'next/link'

const features = [
  {
    title: "Quality Guaranteed",
    description: "Every vehicle undergoes a comprehensive 150-point inspection to ensure reliability and safety.",
    icon: "🔍"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees or surprise costs. Our upfront pricing includes all necessary documentation.",
    icon: "💰"
  },
  {
    title: "Financing Options",
    description: "Flexible financing solutions with competitive rates for all credit situations.",
    icon: "📋"
  },
  {
    title: "Warranty Coverage",
    description: "Extended warranty options available to protect your investment and peace of mind.",
    icon: "🛡️"
  },
  {
    title: "Trade-In Welcome",
    description: "Get top dollar for your current vehicle with our hassle-free trade-in process.",
    icon: "🔄"
  },
  {
    title: "Expert Service",
    description: "Our certified technicians provide comprehensive maintenance and repair services.",
    icon: "🔧"
  }
]

export default function Features() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4 md:mb-6">
            Why Choose SF Legacy Motors?
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're committed to providing an exceptional car buying experience with 
            quality vehicles, honest service, and customer satisfaction guaranteed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 md:p-8 rounded-xl hover:shadow-lg transition-all duration-300 bg-secondary group hover:bg-white border border-transparent hover:border-gray-200"
            >
              <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-text-primary mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Section CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#inventory" 
              className="inline-block bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-heading font-semibold text-base md:text-lg hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Shop Our Inventory
            </Link>
            <Link 
              href="#contact" 
              className="inline-block border-2 border-primary text-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-heading font-semibold text-base md:text-lg hover:bg-primary hover:text-white transition-all duration-200"
            >
              Schedule Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
