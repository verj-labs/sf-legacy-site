import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Warranty & Service - SF Legacy Autos',
  description: 'Comprehensive warranty plans and service packages for your peace of mind. Protect your investment with SF Legacy Autos warranty coverage.',
}

export default function WarrantyService() {
  const warrantyPlans = [
    {
      name: "Powertrain",
      duration: "12 months / 20,000 km",
      coverage: "Engine, transmission, drivetrain components",
      price: "Starting at $899",
      features: [
        "Engine and transmission coverage",
        "Drive axle components",
        "Transfer case (4WD vehicles)",
        "24/7 roadside assistance",
        "Towing coverage"
      ]
    },
    {
      name: "Comprehensive",
      duration: "24 months / 40,000 km",
      coverage: "Most major vehicle systems",
      price: "Starting at $1,499",
      features: [
        "All powertrain components",
        "Air conditioning system",
        "Electrical components",
        "Steering and suspension",
        "Brake system",
        "24/7 roadside assistance",
        "Rental car coverage"
      ],
      popular: true
    },
    {
      name: "Exclusionary",
      duration: "36 months / 60,000 km",
      coverage: "Nearly everything except wear items",
      price: "Starting at $2,299",
      features: [
        "Comprehensive coverage plus",
        "Most electronic components",
        "Interior and exterior items",
        "Only excludes normal wear items",
        "Trip interruption coverage",
        "24/7 roadside assistance",
        "Rental car coverage"
      ]
    }
  ]

  const servicePackages = [
    {
      name: "Basic Maintenance",
      description: "Essential services to keep your vehicle running smoothly",
      services: ["Oil changes", "Filter replacements", "Fluid top-offs", "Battery testing"]
    },
    {
      name: "Comprehensive Care",
      description: "Complete maintenance package for optimal performance",
      services: ["All basic services", "Tire rotation", "Brake inspection", "Multi-point inspection"]
    },
    {
      name: "Premium Protection",
      description: "Maximum coverage for worry-free driving",
      services: ["All comprehensive services", "Extended warranties", "Priority service", "Loaner vehicles"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Warranty & Service
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Protect your investment with comprehensive warranty plans and professional service packages. 
            We offer coverage options from basic powertrain to exclusionary coverage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">
            Peace of Mind Protection
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            At SF Legacy Autos, we stand behind every vehicle we sell. Our warranty plans provide comprehensive 
            protection against unexpected repairs, giving you confidence and peace of mind with your purchase. 
            From basic powertrain coverage to exclusionary plans that cover nearly everything, we have options 
            to fit every budget and need.
          </p>
        </div>

        {/* Warranty Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-text-primary text-center mb-12">
            Warranty Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warrantyPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-lg shadow-sm border-2 p-8 ${
                  plan.popular ? 'border-accent' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                  <div className="text-gray-600">{plan.duration}</div>
                  <div className="text-sm text-gray-500 mt-1">{plan.coverage}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-accent text-white hover:bg-accent/90' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-16">
          <h2 className="text-2xl font-heading font-bold text-text-primary text-center mb-8">
            How Our Warranty Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-medium text-text-primary mb-2">Purchase Coverage</h3>
              <p className="text-sm text-gray-600">Choose the warranty plan that best fits your needs and budget at the time of purchase.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-medium text-text-primary mb-2">Issue Occurs</h3>
              <p className="text-sm text-gray-600">If a covered component fails, contact our warranty department immediately.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-medium text-text-primary mb-2">Get Pre-Approval</h3>
              <p className="text-sm text-gray-600">We'll verify coverage and pre-approve the repair at an authorized service center.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-medium text-text-primary mb-2">Repair Complete</h3>
              <p className="text-sm text-gray-600">Pay only your deductible and get back on the road with confidence.</p>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-text-primary text-center mb-12">
            Service Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about our warranty plans and service packages. 
            Our team will help you choose the right coverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="tel:555-123-4567"
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
