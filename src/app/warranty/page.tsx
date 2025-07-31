import PageStartBanner from '@/components/PageStartBanner'
import PageEndBanner from '@/components/PageEndBanner'
import ScrollToFormButton from '@/components/ScrollToFormButton'

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
    <div className="min-h-screen bg-gray-50">
      {/* Page Start Banner */}
      <PageStartBanner
        title="Warranty & Service Plans"
        description="Protect your investment with comprehensive warranty coverage. From basic powertrain to exclusionary plans, we have options to fit every budget and need."
      >
        <a 
          href="#warranty-plans"
          className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          View Plans
        </a>
      </PageStartBanner>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Peace of Mind Protection
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              We stand behind every vehicle we sell with comprehensive warranty plans and professional service packages.
            </p>
          </div>
        </section>

        {/* Warranty Plans */}
        <section id="warranty-plans" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Warranty Plans
            </h2>
            <p className="text-sm text-gray-600">
              Choose the coverage that fits your needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {warrantyPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-lg border-2 p-6 ${
                  plan.popular ? 'border-primary' : 'border-gray-200'
                } hover:border-gray-300 transition-colors`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-2xl font-bold text-primary mb-1">{plan.price}</div>
                  <div className="text-sm text-gray-600">{plan.duration}</div>
                  <div className="text-xs text-gray-500 mt-1">{plan.coverage}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-primary text-white hover:bg-primary-dark' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-16">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              How Our Warranty Works
            </h2>
            <p className="text-sm text-gray-600">
              Simple 4-step process to get you back on the road
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-2">Purchase Coverage</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Choose the warranty plan that fits your needs and budget.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-primary">2</span>
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-2">Issue Occurs</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Contact our warranty department when a covered component fails.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-primary">3</span>
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-2">Get Pre-Approval</h3>
              <p className="text-xs text-gray-600 leading-relaxed">We verify coverage and pre-approve the repair at an authorized center.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-primary">4</span>
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-2">Repair Complete</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Pay only your deductible and get back on the road with confidence.</p>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Service Packages
            </h2>
            <p className="text-sm text-gray-600">
              Maintenance plans to keep your vehicle running smoothly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Page End Banner */}
        <PageEndBanner 
          title="Ready to Protect Your Investment?"
          body="Contact us today to learn more about our warranty plans and service packages. Our team will help you choose the right coverage for your needs."
        />
      </div>
    </div>
  )
}
