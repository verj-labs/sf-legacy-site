'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [searchForm, setSearchForm] = useState({
    condition: '',
    make: '',
    model: '',
    priceRange: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search:', searchForm)
    // Handle search logic here
  }

  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight mb-6">
              Find Your Next
              <span className="block text-accent">Used Vehicle</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Quality Pre-Owned Cars, SUVs & Trucks with trusted service and competitive prices in San Francisco.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent">500+</div>
                <div className="text-sm md:text-base text-blue-100">Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent">20+</div>
                <div className="text-sm md:text-base text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent">5★</div>
                <div className="text-sm md:text-base text-blue-100">Customer Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#inventory"
                className="bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Browse Inventory
              </Link>
              <Link
                href="#financing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 text-center"
              >
                Get Financing
              </Link>
            </div>
          </div>

          {/* Vehicle Search Form */}
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-6">
              Find Your Perfect Vehicle
            </h2>
            
            <form onSubmit={handleSearch} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">
                    Condition
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    value={searchForm.condition}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Any Condition</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-2">
                    Make
                  </label>
                  <select
                    id="make"
                    name="make"
                    value={searchForm.make}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Any Make</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="ford">Ford</option>
                    <option value="bmw">BMW</option>
                    <option value="mercedes">Mercedes-Benz</option>
                    <option value="audi">Audi</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="nissan">Nissan</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
                    Model
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={searchForm.model}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Any Model</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck</option>
                    <option value="coupe">Coupe</option>
                    <option value="convertible">Convertible</option>
                    <option value="wagon">Wagon</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    id="priceRange"
                    name="priceRange"
                    value={searchForm.priceRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Any Price</option>
                    <option value="0-10000">Under $10,000</option>
                    <option value="10000-20000">$10,000 - $20,000</option>
                    <option value="20000-30000">$20,000 - $30,000</option>
                    <option value="30000-50000">$30,000 - $50,000</option>
                    <option value="50000+">$50,000+</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Search Vehicles
              </button>
            </form>

            {/* Quick Categories */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-3">Popular Categories:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="#inventory?category=sedan" className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-200">
                  Sedans
                </Link>
                <Link href="#inventory?category=suv" className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-200">
                  SUVs
                </Link>
                <Link href="#inventory?category=truck" className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-200">
                  Trucks
                </Link>
                <Link href="#inventory?category=luxury" className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-200">
                  Luxury
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
