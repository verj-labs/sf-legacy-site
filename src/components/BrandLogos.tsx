export default function BrandLogos() {
  const brands = [
    { name: 'Toyota', logo: 'T' },
    { name: 'Honda', logo: 'H' },
    { name: 'Ford', logo: 'F' },
    { name: 'BMW', logo: 'BMW' },
    { name: 'Mercedes', logo: 'MB' },
    { name: 'Audi', logo: 'A' },
    { name: 'Chevrolet', logo: 'C' },
    { name: 'Nissan', logo: 'N' },
    { name: 'Lexus', logo: 'L' },
    { name: 'Acura', logo: 'A' },
    { name: 'Subaru', logo: 'S' },
    { name: 'Mazda', logo: 'M' }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
            Trusted Brands We Carry
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Choose from a wide selection of quality pre-owned vehicles from the world's most trusted automotive manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-gray-100 p-4 md:p-6 rounded-xl transition-all duration-300 flex items-center justify-center min-h-[80px] md:min-h-[100px]"
            >
              <div className="text-center">
                {/* Placeholder logo - in a real app, you'd use actual brand logos */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="font-bold text-sm md:text-base text-gray-600 group-hover:text-white">
                    {brand.logo}
                  </span>
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Don't see your preferred brand? We source vehicles from across the market.
          </p>
          <a
            href="#contact"
            className="inline-block text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
          >
            Contact us about special requests →
          </a>
        </div>
      </div>
    </section>
  )
}
