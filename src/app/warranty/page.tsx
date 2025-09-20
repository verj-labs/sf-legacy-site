import PageStartBanner from '@/components/PageStartBanner'
import PageEndBanner from '@/components/PageEndBanner'

export const metadata = {
  title: 'Warranty & Service - SF Legacy Autos',
  description: 'Comprehensive warranty plans and service packages for your peace of mind. Protect your investment with SF Legacy Autos warranty coverage.',
}

export default function WarrantyService() {
  return (
    <div className="min-h-screen bg-background">
      <PageStartBanner 
        title="Warranty & Service"
        description="Protect your investment with our comprehensive warranty plans and service packages"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <section className="mb-8 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-ink mb-4 tracking-tight">
              Warranty Plans
            </h2>
            <p className="text-sm sm:text-base text-body/80 max-w-3xl mx-auto">
              Choose from our comprehensive warranty plans designed to protect your investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface rounded-xl border border-border shadow-xs p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-heading font-semibold text-ink mb-3">
                Powertrain Warranty
              </h3>
              <p className="text-sm text-body/80 mb-4">
                12 months / 20,000 km coverage for engine, transmission, and drivetrain components.
              </p>
              <div className="text-2xl font-bold text-brand mb-4">Starting at $899</div>
              <ul className="space-y-2 text-sm text-body/80">
                <li>• Engine and transmission coverage</li>
                <li>• Drive axle components</li>
                <li>• 24/7 roadside assistance</li>
                <li>• Towing coverage</li>
              </ul>
            </div>

            <div className="bg-surface rounded-xl border-2 border-brand shadow-xs p-6 hover:shadow-md transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand text-ink px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-ink mb-3">
                Comprehensive Warranty
              </h3>
              <p className="text-sm text-body/80 mb-4">
                24 months / 40,000 km coverage for most major vehicle systems.
              </p>
              <div className="text-2xl font-bold text-brand mb-4">Starting at $1,499</div>
              <ul className="space-y-2 text-sm text-body/80">
                <li>• All powertrain components</li>
                <li>• Air conditioning system</li>
                <li>• Electrical components</li>
                <li>• Steering and suspension</li>
                <li>• Rental car coverage</li>
              </ul>
            </div>

            <div className="bg-surface rounded-xl border border-border shadow-xs p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-heading font-semibold text-ink mb-3">
                Exclusionary Warranty
              </h3>
              <p className="text-sm text-body/80 mb-4">
                36 months / 60,000 km premium coverage with minimal exclusions.
              </p>
              <div className="text-2xl font-bold text-brand mb-4">Starting at $2,299</div>
              <ul className="space-y-2 text-sm text-body/80">
                <li>• Maximum coverage available</li>
                <li>• Minimal exclusions</li>
                <li>• Extended roadside assistance</li>
                <li>• Trip interruption coverage</li>
              </ul>
            </div>
          </div>
        </section>

        <PageEndBanner 
          title="Ready to Protect Your Investment?"
          body="Contact us today to learn more about our warranty plans and service packages. Our team will help you choose the right coverage for your needs."
        />
      </div>
    </div>
  )
}
