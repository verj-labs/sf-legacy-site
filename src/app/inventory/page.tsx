'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Vehicle } from '@/types/vehicle'
import { getAllVehicles, getVehicleMakes, getVehicleBodyTypes } from '@/lib/sanity/api'

export default function InventoryPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([])
  const [availableMakes, setAvailableMakes] = useState<string[]>([])
  const [availableBodyTypes, setAvailableBodyTypes] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  
  // Filter states
  const [selectedMake, setSelectedMake] = useState<string>('')
  const [selectedBodyType, setSelectedBodyType] = useState<string>('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000])
  const [sortBy, setSortBy] = useState<string>('year-desc')

  // Load vehicles and filter options
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const vehicleData = await getAllVehicles()
        
        setVehicles(vehicleData)
        setFilteredVehicles(vehicleData)
        
        // Extract makes and body types from the fetched data
        const makes = [...new Set(vehicleData.map(v => v.make))].sort()
        const bodyTypes = [...new Set(vehicleData.map(v => v.bodyType))].sort()
        
        setAvailableMakes(makes)
        setAvailableBodyTypes(bodyTypes)
      } catch (error) {
        console.error('Error loading vehicle data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Apply filters whenever filter criteria change
  useEffect(() => {
    let filtered = [...vehicles]

    // Apply make filter
    if (selectedMake) {
      filtered = filtered.filter(vehicle => vehicle.make === selectedMake)
    }

    // Apply body type filter
    if (selectedBodyType) {
      filtered = filtered.filter(vehicle => vehicle.bodyType === selectedBodyType)
    }

    // Apply price range filter
    filtered = filtered.filter(vehicle => 
      vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1]
    )

    // Apply sorting
    switch (sortBy) {
      case 'year-desc':
        filtered.sort((a, b) => b.year - a.year)
        break
      case 'year-asc':
        filtered.sort((a, b) => a.year - b.year)
        break
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'mileage-asc':
        filtered.sort((a, b) => a.odometer - b.odometer)
        break
      case 'mileage-desc':
        filtered.sort((a, b) => b.odometer - a.odometer)
        break
      default:
        break
    }

    setFilteredVehicles(filtered)
  }, [vehicles, selectedMake, selectedBodyType, priceRange, sortBy])

  // Reset filters
  const resetFilters = () => {
    setSelectedMake('')
    setSelectedBodyType('')
    setPriceRange([0, 50000])
    setSortBy('year-desc')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading vehicles...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Browse Our Inventory
            </h1>
            <p className="text-lg mb-6 text-gray-200">
              Find your perfect vehicle from our extensive collection of quality used cars, trucks, and SUVs.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="bg-white/20 px-3 py-1 rounded-full">
                {vehicles.length} Vehicles Available
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                Quality Inspected
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                Competitive Pricing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-bold text-gray-900">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-primary hover:text-primary-dark font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {/* Make Filter */}
                <div>
                  <label htmlFor="make" className="block text-sm font-semibold text-gray-700 mb-3">
                    Make
                  </label>
                  <select
                    id="make"
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  >
                    <option value="">All Makes</option>
                    {availableMakes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>

                {/* Body Type Filter */}
                <div>
                  <label htmlFor="bodyType" className="block text-sm font-semibold text-gray-700 mb-3">
                    Body Type
                  </label>
                  <select
                    id="bodyType"
                    value={selectedBodyType}
                    onChange={(e) => setSelectedBodyType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  >
                    <option value="">All Types</option>
                    {availableBodyTypes.map(type => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label htmlFor="priceRange" className="block text-sm font-semibold text-gray-700 mb-3">
                    Price Range
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>$0</span>
                      <span className="font-medium">${priceRange[1].toLocaleString()}</span>
                      <span>$100k+</span>
                    </div>
                    <input
                      type="range"
                      id="priceRange"
                      min="0"
                      max="100000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex items-center gap-2 text-sm">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0] || ''}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="flex-1 border border-gray-300 rounded px-2 py-1 text-xs"
                      />
                      <span className="text-gray-500">to</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1] || ''}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000])}
                        className="flex-1 border border-gray-300 rounded px-2 py-1 text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Mileage Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Maximum Mileage
                  </label>
                  <div className="space-y-2">
                    {[
                      { label: 'Any Mileage', value: 999999 },
                      { label: 'Under 10,000', value: 10000 },
                      { label: 'Under 25,000', value: 25000 },
                      { label: 'Under 50,000', value: 50000 },
                      { label: 'Under 75,000', value: 75000 },
                      { label: 'Under 100,000', value: 100000 },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center text-sm">
                        <input
                          type="radio"
                          name="mileage"
                          value={option.value}
                          onChange={(e) => setPriceRange([priceRange[0], priceRange[1]])}
                          className="mr-2 text-primary focus:ring-primary"
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Year Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Year Range
                  </label>
                  <div className="flex items-center gap-2 text-sm">
                    <select
                      value=""
                      onChange={(e) => {/* Handle year min */}}
                      className="flex-1 border border-gray-300 rounded px-2 py-1 text-xs"
                    >
                      <option value="">Min Year</option>
                      {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <span className="text-gray-500">to</span>
                    <select
                      value=""
                      onChange={(e) => {/* Handle year max */}}
                      className="flex-1 border border-gray-300 rounded px-2 py-1 text-xs"
                    >
                      <option value="">Max Year</option>
                      {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {filteredVehicles.length} Vehicle{filteredVehicles.length !== 1 ? 's' : ''} Found
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Showing results {filteredVehicles.length > 0 ? '1' : '0'}-{filteredVehicles.length} of {vehicles.length} total vehicles
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <div className="flex items-center gap-2">
                    <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                      Sort by:
                    </label>
                    <select
                      id="sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    >
                      <option value="year-desc">Newest First</option>
                      <option value="year-asc">Oldest First</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="mileage-asc">Lowest Mileage</option>
                      <option value="mileage-desc">Highest Mileage</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Results */}
            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <div key={vehicle._id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <Link href={`/inventory/${vehicle._id}`}>
                      <div className="relative">
                        <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                          <img
                            src={vehicle.images?.[0] || '/api/placeholder/400/300'}
                            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        {vehicle.featured && (
                          <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </div>
                        )}
                        {vehicle.salePrice && vehicle.salePrice < vehicle.price && (
                          <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Sale
                          </div>
                        )}
                      </div>
                      
                      <div className="p-5">
                        <h3 className="font-heading font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                        </h3>
                        
                        <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                          <span>{vehicle.odometer.toLocaleString()} miles</span>
                          <span>•</span>
                          <span>{vehicle.transmission}</span>
                          <span>•</span>
                          <span className="capitalize">{vehicle.bodyType}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            {vehicle.salePrice && vehicle.salePrice < vehicle.price ? (
                              <div>
                                <span className="text-xl font-bold text-primary">
                                  ${vehicle.salePrice.toLocaleString()}
                                </span>
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  ${vehicle.price.toLocaleString()}
                                </span>
                              </div>
                            ) : (
                              <span className="text-xl font-bold text-primary">
                                ${vehicle.price.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <span className="text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters to see more results.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
