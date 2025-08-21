import PageStartBanner from '@/components/PageStartBanner'
import PageEndBanner from '@/components/PageEndBanner'
import ScrollToFormButton from '@/components/ScrollToFormButton'
import Chip from '@/components/Chip'
import { 
  HiOutlineShieldCheck, 
  HiOutlineWrench, 
  HiOutlineClock, 
  HiOutlineCheckCircle 
} from 'react-icons/hi2'

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
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 pointer-events-none" />
      
      {/* Page Start Banner */}
      <PageStartBanner
        title="Warranty & Service Plans"
        description="Protect your investment with comprehensive warranty coverage. From basic powertrain to exclusionary plans, we have options to fit every budget and need."
      >
        <div className="flex flex-wrap gap-3 mb-4">
          <Chip variant="overlay">
            <HiOutlineShieldCheck className="w-4 h-4" />
            Comprehensive Coverage
          </Chip>
          <Chip variant="overlay">
            <HiOutlineWrench className="w-4 h-4" />
            Expert Service
          </Chip>
          <Chip variant="overlay">
            <HiOutlineClock className="w-4 h-4" />
            24/7 Support
          </Chip>
          <Chip variant="overlay">
            <HiOutlineCheckCircle className="w-4 h-4" />
            Peace of Mind
          </Chip>
        </div>
     
      </PageStartBanner>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits */}
        <section className="mb-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4 tracking-tight">
              Peace of Mind Protection
            </h2>
            <p className="text-body-m text-body/80 max-w-3xl mx-auto">
              We stand behind every vehicle we sell with comprehensive warranty plans and professional service packages.
            </p>
          </div>
        </section>

        {/* Warranty Plans */}
        <section id="warranty-plans" className="mb-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4 tracking-tight">
              Warranty Plans
            </h2>
            <p className="text-body-m text-body/80 max-w-3xl mx-auto">
              Choose the coverage that fits your needs and budget
            </p>
            <div className="mt-6 w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {warrantyPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`group relative bg-surface rounded-xl border shadow-xs p-6 hover:shadow-md transition-all duration-300 overflow-visible ${
                  plan.popular ? 'border-gray-300 ring-2 ring-gray-200 mt-4' : 'border-border hover:border-neutral-300 mt-8'
                }`}
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5 rounded-xl" />
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="relative text-center mb-6">
                  <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-2xl font-bold text-ink mb-1">{plan.price}</div>
                  <div className="text-sm text-body/80">{plan.duration}</div>
                  <div className="text-xs text-body/60 mt-1">{plan.coverage}</div>
                </div>

                <div className="relative">
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-body/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-gray-900 text-white hover:bg-gray-800' 
                        : 'bg-neutral-100 text-ink hover:bg-neutral-200'
                    }`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="bg-surface rounded-2xl border border-border shadow-xs p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4">
                How Our Warranty Works
              </h2>
              <p className="text-body-l text-body/80">
                Simple 4-step process to get you back on the road
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-ink">1</span>
                </div>
                <h3 className="font-heading font-medium text-ink text-sm mb-2">Purchase Coverage</h3>
                <p className="text-xs text-body/70 leading-relaxed">Choose the warranty plan that fits your needs and budget.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-ink">2</span>
                </div>
                <h3 className="font-heading font-medium text-ink text-sm mb-2">Issue Occurs</h3>
                <p className="text-xs text-body/70 leading-relaxed">Contact our warranty department when a covered component fails.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-ink">3</span>
                </div>
                <h3 className="font-heading font-medium text-ink text-sm mb-2">Get Pre-Approval</h3>
                <p className="text-xs text-body/70 leading-relaxed">We verify coverage and pre-approve the repair at an authorized center.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-ink">4</span>
                </div>
                <h3 className="font-heading font-medium text-ink text-sm mb-2">Repair Complete</h3>
                <p className="text-xs text-body/70 leading-relaxed">Pay only your deductible and get back on the road with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4 tracking-tight">
              Service Packages
            </h2>
            <p className="text-body-l text-body/80 max-w-3xl mx-auto">
              Maintenance plans to keep your vehicle running smoothly
            </p>
            <div className="mt-6 w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePackages.map((pkg, index) => (
              <div 
                key={index} 
                className="group relative bg-surface rounded-xl border border-border shadow-xs p-6 hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden"
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5" />
                <div className="relative">
                  <h3 className="text-lg font-heading font-semibold text-ink mb-2 group-hover:text-brand transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-body/80 mb-4">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-body/80">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
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
