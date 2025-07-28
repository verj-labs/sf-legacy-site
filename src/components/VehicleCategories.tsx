import Link from 'next/link'

export default function VehicleCategories() {
  const categories = [
    {
      name: 'Sedans',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14l-2-2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 14l2-2" />
        </svg>
      ),
      href: '#inventory?category=sedan',
      description: 'Fuel-efficient family cars'
    },
    {
      name: 'SUVs',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 6H3l2 7h10l-2-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 6h5l2 7H13V6z" />
        </svg>
      ),
      href: '#inventory?category=suv',
      description: 'Spacious family vehicles'
    },
    {
      name: 'Trucks',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14" />
        </svg>
      ),
      href: '#inventory?category=truck',
      description: 'Heavy-duty workhorses'
    },
    {
      name: 'Coupes',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      href: '#inventory?category=coupe',
      description: 'Sporty two-doors'
    },
    {
      name: 'Convertibles',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      href: '#inventory?category=convertible',
      description: 'Open-air driving'
    },
    {
      name: 'Luxury',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      href: '#inventory?category=luxury',
      description: 'Premium vehicles'
    }
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4 md:mb-6">
            Shop by Category
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Find the perfect vehicle type for your lifestyle. 
            Browse our extensive inventory organized by vehicle category.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-primary text-center"
            >
              <div className="flex justify-center mb-4 text-gray-500 group-hover:text-primary transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 mb-2">
                {category.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            href="#inventory"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Inventory
          </Link>
        </div>
      </div>
    </section>
  )
}
