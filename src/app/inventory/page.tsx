'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Mock vehicle data - in a real app, this would come from an API
const mockVehicles = [
  {
    id: '1',
    year: 2022,
    make: 'Toyota',
    model: 'Camry',
    trim: 'LE',
    bodyStyle: 'Sedan',
    mileage: 25000,
    price: 24999,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '2.5L 4-Cylinder',
    image: '/api/placeholder/400/300',
    features: ['Backup Camera', 'Bluetooth', 'USB Ports'],
    mpg: '28/39'
  },
  {
    id: '2',
    year: 2021,
    make: 'Honda',
    model: 'CR-V',
    trim: 'EX',
    bodyStyle: 'SUV',
    mileage: 18000,
    price: 28999,
    transmission: 'CVT',
    fuelType: 'Gasoline',
    engine: '1.5L Turbo',
    image: '/api/placeholder/400/300',
    features: ['AWD', 'Sunroof', 'Heated Seats'],
    mpg: '27/32'
  },
  {
    id: '3',
    year: 2020,
    make: 'Ford',
    model: 'F-150',
    trim: 'XLT',
    bodyStyle: 'Truck',
    mileage: 35000,
    price: 32999,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '3.5L V6',
    image: '/api/placeholder/400/300',
    features: ['4WD', 'Tow Package', 'Bed Liner'],
    mpg: '19/25'
  },
  {
    id: '4',
    year: 2021,
    make: 'BMW',
    model: '3 Series',
    trim: '330i',
    bodyStyle: 'Sedan',
    mileage: 22000,
    price: 35999,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '2.0L Turbo',
    image: '/api/placeholder/400/300',
    features: ['Leather', 'Navigation', 'Premium Audio'],
    mpg: '26/36'
  },
  {
    id: '5',
    year: 2020,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    trim: 'C300',
    bodyStyle: 'Sedan',
    mileage: 28000,
    price: 33999,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '2.0L Turbo',
    image: '/api/placeholder/400/300',
    features: ['Leather', 'Sunroof', 'Apple CarPlay'],
    mpg: '24/35'
  },
  {
    id: '6',
    year: 2022,
    make: 'Chevrolet',
    model: 'Equinox',
    trim: 'LT',
    bodyStyle: 'SUV',
    mileage: 15000,
    price: 26999,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '1.5L Turbo',
    image: '/api/placeholder/400/300',
    features: ['Backup Camera', 'Remote Start', 'WiFi Hotspot'],
    mpg: '26/31'
  }
]

interface Filters {
  make: string
  model: string
  yearMin: string
  yearMax: string
  bodyStyle: string
  mileageMax: string
  priceMin: string
  priceMax: string
  transmission: string
  fuelType: string
}

export default function InventoryPage() {
  const [vehicles, setVehicles] = useState(mockVehicles)
  const [filteredVehicles, setFilteredVehicles] = useState(mockVehicles)
  const [filters, setFilters] = useState<Filters>({
    make: '',
    model: '',
    yearMin: '',
    yearMax: '',
    bodyStyle: '',
    mileageMax: '',
    priceMin: '',
    priceMax: '',
    transmission: '',
    fuelType: ''
  })
  const [sortBy, setSortBy] = useState('price-low')
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const vehiclesPerPage = 12

  // Get unique values for filter options
  const makes = [...new Set(vehicles.map(v => v.make))].sort()
  const models = [...new Set(vehicles.map(v => v.model))].sort()
  const bodyStyles = [...new Set(vehicles.map(v => v.bodyStyle))].sort()
  const transmissions = [...new Set(vehicles.map(v => v.transmission))].sort()
  const fuelTypes = [...new Set(vehicles.map(v => v.fuelType))].sort()

  // Apply filters
  useEffect(() => {
    let filtered = vehicles.filter(vehicle => {
      return (
        (!filters.make || vehicle.make === filters.make) &&
        (!filters.model || vehicle.model === filters.model) &&
        (!filters.yearMin || vehicle.year >= parseInt(filters.yearMin)) &&
        (!filters.yearMax || vehicle.year <= parseInt(filters.yearMax)) &&
        (!filters.bodyStyle || vehicle.bodyStyle === filters.bodyStyle) &&
        (!filters.mileageMax || vehicle.mileage <= parseInt(filters.mileageMax)) &&
        (!filters.priceMin || vehicle.price >= parseInt(filters.priceMin)) &&
        (!filters.priceMax || vehicle.price <= parseInt(filters.priceMax)) &&
        (!filters.transmission || vehicle.transmission === filters.transmission) &&
        (!filters.fuelType || vehicle.fuelType === filters.fuelType)
      )
    })

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'year-new':
          return b.year - a.year
        case 'year-old':
          return a.year - b.year
        case 'mileage-low':
          return a.mileage - b.mileage
        case 'mileage-high':
          return b.mileage - a.mileage
        default:
          return 0
      }
    })

    setFilteredVehicles(filtered)
    setCurrentPage(1)
  }, [filters, sortBy, vehicles])

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      make: '',
      model: '',
      yearMin: '',
      yearMax: '',
      bodyStyle: '',
      mileageMax: '',
      priceMin: '',
      priceMax: '',
      transmission: '',
      fuelType: ''
    })
  }

  // Pagination
  const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage)
  const startIndex = (currentPage - 1) * vehiclesPerPage
  const paginatedVehicles = filteredVehicles.slice(startIndex, startIndex + vehiclesPerPage)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>Inventory</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Vehicle Inventory
          </h1>
          <p className="text-lg text-gray-600">
            Browse our selection of {filteredVehicles.length} quality pre-owned vehicles
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
              >
                <span className="font-medium text-gray-900">Filters</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${showFilters ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Filter Panel */}
            <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6 ${showFilters || 'hidden lg:block'}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-heading font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:text-primary/80 font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Make Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                <select
                  value={filters.make}
                  onChange={(e) => handleFilterChange('make', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Any Make</option>
                  {makes.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>

              {/* Model Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                <select
                  value={filters.model}
                  onChange={(e) => handleFilterChange('model', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Any Model</option>
                  {models.map(model => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>

              {/* Year Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={filters.yearMin}
                    onChange={(e) => handleFilterChange('yearMin', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Min Year</option>
                    {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <select
                    value={filters.yearMax}
                    onChange={(e) => handleFilterChange('yearMax', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Max Year</option>
                    {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Body Style */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Body Style</label>
                <select
                  value={filters.bodyStyle}
                  onChange={(e) => handleFilterChange('bodyStyle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Any Body Style</option>
                  {bodyStyles.map(style => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min Price"
                    value={filters.priceMin}
                    onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Max Price"
                    value={filters.priceMax}
                    onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Mileage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Mileage</label>
                <input
                  type="number"
                  placeholder="Maximum Mileage"
                  value={filters.mileageMax}
                  onChange={(e) => handleFilterChange('mileageMax', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Transmission */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                <select
                  value={filters.transmission}
                  onChange={(e) => handleFilterChange('transmission', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Any Transmission</option>
                  {transmissions.map(transmission => (
                    <option key={transmission} value={transmission}>{transmission}</option>
                  ))}
                </select>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                <select
                  value={filters.fuelType}
                  onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Any Fuel Type</option>
                  {fuelTypes.map(fuel => (
                    <option key={fuel} value={fuel}>{fuel}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    Showing {startIndex + 1}-{Math.min(startIndex + vehiclesPerPage, filteredVehicles.length)} of {filteredVehicles.length} vehicles
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* View Mode Toggle */}
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 text-sm ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 text-sm ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  >
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="year-new">Year: Newest First</option>
                    <option value="year-old">Year: Oldest First</option>
                    <option value="mileage-low">Mileage: Low to High</option>
                    <option value="mileage-high">Mileage: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Vehicle Grid/List */}
            {paginatedVehicles.length === 0 ? (
              <div className="bg-white p-12 rounded-lg border border-gray-200 shadow-sm text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.072M6.343 6.343L17.657 17.657" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
                <button
                  onClick={clearFilters}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                  : 'space-y-4'
                }>
                  {paginatedVehicles.map((vehicle) => (
                    <Link
                      key={vehicle.id}
                      href={`/inventory/${vehicle.id}`}
                      className={`group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                    >
                      <div className={viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}>
                        <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                          <img
                            src={vehicle.image}
                            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      
                      <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                        <div>
                          <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                            {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                          </h3>
                          
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              {formatMileage(vehicle.mileage)} miles
                            </div>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                              </svg>
                              {vehicle.transmission}
                            </div>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              {vehicle.engine}
                            </div>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4" />
                              </svg>
                              {vehicle.mpg} MPG
                            </div>
                          </div>
                          
                          {viewMode === 'list' && (
                            <div className="flex flex-wrap gap-1 mb-4">
                              {vehicle.features.slice(0, 3).map((feature, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className={`flex items-center justify-between ${viewMode === 'list' ? 'mt-4' : ''}`}>
                          <div className="text-2xl font-heading font-bold text-primary">
                            {formatPrice(vehicle.price)}
                          </div>
                          <div className="flex items-center text-primary font-medium text-sm">
                            View Details
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg ${
                            page === currentPage
                              ? 'text-white bg-primary border border-primary'
                              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
