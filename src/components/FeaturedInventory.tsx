import Link from 'next/link'

// Sample car data - in a real app, this would come from an API or database
const featuredCars = [
  {
    id: 1,
    make: "Honda",
    model: "Civic",
    year: 2020,
    price: 18995,
    mileage: 35000,
    image: "/api/placeholder/400/300",
    features: ["Bluetooth", "Backup Camera", "Lane Assist"]
  },
  {
    id: 2,
    make: "Toyota",
    model: "Camry",
    year: 2019,
    price: 22995,
    mileage: 42000,
    image: "/api/placeholder/400/300",
    features: ["Hybrid", "Navigation", "Heated Seats"]
  },
  {
    id: 3,
    make: "Ford",
    model: "F-150",
    year: 2021,
    price: 32995,
    mileage: 28000,
    image: "/api/placeholder/400/300",
    features: ["4WD", "Towing Package", "Premium Audio"]
  },
  {
    id: 4,
    make: "Nissan",
    model: "Altima",
    year: 2020,
    price: 19995,
    mileage: 38000,
    image: "/api/placeholder/400/300",
    features: ["Sunroof", "Leather", "Remote Start"]
  },
  {
    id: 5,
    make: "Chevrolet",
    model: "Equinox",
    year: 2019,
    price: 24995,
    mileage: 45000,
    image: "/api/placeholder/400/300",
    features: ["AWD", "Apple CarPlay", "Safety Suite"]
  },
  {
    id: 6,
    make: "Mazda",
    model: "CX-5",
    year: 2021,
    price: 26995,
    mileage: 25000,
    image: "/api/placeholder/400/300",
    features: ["Premium Interior", "Bose Audio", "Adaptive Cruise"]
  }
]

export default function FeaturedInventory() {
  return (
    <section id="inventory" className="py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4 md:mb-6">
            Featured Vehicles
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover our hand-picked selection of quality used vehicles, 
            each thoroughly inspected and ready for their next owner.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-gray-600 font-medium text-center px-4">
                    {car.year} {car.make} {car.model}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-heading font-bold text-text-primary mb-4">
                  {car.year} {car.make} {car.model}
                </h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl md:text-2xl font-heading font-bold text-accent">
                    ${car.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600 font-medium text-sm md:text-base">
                    {car.mileage.toLocaleString()} miles
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-secondary text-gray-700 text-xs md:text-sm rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-primary text-white py-2.5 md:py-3 px-4 rounded-lg font-heading font-semibold text-sm md:text-base hover:bg-opacity-90 transition-colors duration-200">
                    View Details
                  </button>
                  <button className="border-2 border-primary text-primary py-2.5 md:py-3 px-4 rounded-lg font-heading font-semibold text-sm md:text-base hover:bg-primary hover:text-white transition-colors duration-200">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Section CTAs */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#" 
              className="inline-block bg-accent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-heading font-semibold text-base md:text-lg hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Inventory
            </Link>
            <Link 
              href="#financing" 
              className="inline-block border-2 border-accent text-accent px-6 py-3 md:px-8 md:py-4 rounded-lg font-heading font-semibold text-base md:text-lg hover:bg-accent hover:text-white transition-all duration-200"
            >
              Get Pre-Approved
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
