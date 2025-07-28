'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
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
    drivetrain: 'FWD',
    exteriorColor: 'Silver Metallic',
    interiorColor: 'Black Cloth',
    vin: '4T1G11AK5NU123456',
    stock: 'T24001',
    mpgCity: 28,
    mpgHighway: 39,
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    features: [
      'Backup Camera',
      'Bluetooth Connectivity',
      'USB Ports',
      'Power Windows',
      'Power Locks',
      'Air Conditioning',
      'Cruise Control',
      'Keyless Entry',
      'Toyota Safety Sense 2.0',
      'Lane Departure Alert',
      'Pre-Collision System',
      'Automatic High Beams'
    ],
    description: 'This 2022 Toyota Camry LE is a reliable and efficient sedan that offers excellent value for daily commuting and family transportation. With its proven 2.5L 4-cylinder engine and automatic transmission, this vehicle delivers impressive fuel economy while maintaining Toyota\'s reputation for reliability and durability.',
    highlights: [
      'Single owner vehicle',
      'Clean CarFax report',
      'All maintenance records available',
      'Non-smoker vehicle',
      'No accidents reported'
    ],
    warranty: {
      powertrain: '60,000 miles / 5 years remaining',
      comprehensive: 'Expired',
      extended: 'Available for purchase'
    },
    financing: {
      monthlyPayment: 419,
      downPayment: 2500,
      apr: 5.9,
      term: 60
    }
  }
]

const relatedVehicles = [
  {
    id: '2',
    year: 2021,
    make: 'Honda',
    model: 'Accord',
    trim: 'EX',
    price: 26999,
    mileage: 22000,
    image: '/api/placeholder/400/300'
  },
  {
    id: '3',
    year: 2020,
    make: 'Nissan',
    model: 'Altima',
    trim: 'SV',
    price: 22999,
    mileage: 28000,
    image: '/api/placeholder/400/300'
  },
  {
    id: '4',
    year: 2021,
    make: 'Hyundai',
    model: 'Sonata',
    trim: 'SEL',
    price: 23999,
    mileage: 24000,
    image: '/api/placeholder/400/300'
  }
]

export default function VehicleDetailPage() {
  const params = useParams()
  const [vehicle, setVehicle] = useState(mockVehicles[0]) // In real app, fetch by ID
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')
  const [showContactForm, setShowContactForm] = useState(false)

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

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features & Options' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'financing', label: 'Financing' },
    { id: 'warranty', label: 'Warranty' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/inventory" className="hover:text-primary">Inventory</Link>
          <span className="mx-2">/</span>
          <span>{vehicle.year} {vehicle.make} {vehicle.model}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200">
                <img
                  src={vehicle.images[selectedImageIndex]}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} - Image ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Strip */}
              <div className="p-4">
                <div className="flex gap-2 overflow-x-auto">
                  {vehicle.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === selectedImageIndex ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Vehicle Info Tabs */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary text-primary'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Vehicle Highlights</h3>
                      <ul className="space-y-2">
                        {vehicle.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Features & Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Vehicle Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Engine & Performance</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Engine:</span>
                            <span className="font-medium">{vehicle.engine}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Transmission:</span>
                            <span className="font-medium">{vehicle.transmission}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Drivetrain:</span>
                            <span className="font-medium">{vehicle.drivetrain}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Fuel Type:</span>
                            <span className="font-medium">{vehicle.fuelType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">MPG City/Highway:</span>
                            <span className="font-medium">{vehicle.mpgCity}/{vehicle.mpgHighway}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Vehicle Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">VIN:</span>
                            <span className="font-medium font-mono text-xs">{vehicle.vin}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Stock #:</span>
                            <span className="font-medium">{vehicle.stock}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Body Style:</span>
                            <span className="font-medium">{vehicle.bodyStyle}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Exterior Color:</span>
                            <span className="font-medium">{vehicle.exteriorColor}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Interior:</span>
                            <span className="font-medium">{vehicle.interiorColor}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'financing' && (
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Financing Information</h3>
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h4 className="font-medium text-gray-900 mb-4">Estimated Monthly Payment</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">{formatPrice(vehicle.financing.monthlyPayment)}</div>
                          <div className="text-sm text-gray-600">per month</div>
                        </div>
                        <div>
                          <div className="text-xl font-semibold text-gray-900">{formatPrice(vehicle.financing.downPayment)}</div>
                          <div className="text-sm text-gray-600">down payment</div>
                        </div>
                        <div>
                          <div className="text-xl font-semibold text-gray-900">{vehicle.financing.apr}%</div>
                          <div className="text-sm text-gray-600">APR</div>
                        </div>
                        <div>
                          <div className="text-xl font-semibold text-gray-900">{vehicle.financing.term}</div>
                          <div className="text-sm text-gray-600">months</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      *Estimated payment based on price, down payment, term and rate shown. Payment may vary based on your credit approval. 
                      Final terms may vary. Contact us for personalized financing options.
                    </p>
                  </div>
                )}

                {activeTab === 'warranty' && (
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Warranty Information</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Powertrain Warranty</h4>
                        <p className="text-gray-600">{vehicle.warranty.powertrain}</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Comprehensive Warranty</h4>
                        <p className="text-gray-600">{vehicle.warranty.comprehensive}</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Extended Warranty</h4>
                        <p className="text-gray-600">{vehicle.warranty.extended}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Vehicle Summary Card */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h1 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                </h1>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-heading font-bold text-primary">
                    {formatPrice(vehicle.price)}
                  </div>
                  <div className="text-sm text-gray-600">
                    Stock #{vehicle.stock}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-gray-600">Mileage:</span>
                    <div className="font-medium">{formatMileage(vehicle.mileage)} miles</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Body Style:</span>
                    <div className="font-medium">{vehicle.bodyStyle}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Transmission:</span>
                    <div className="font-medium">{vehicle.transmission}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Fuel Economy:</span>
                    <div className="font-medium">{vehicle.mpgCity}/{vehicle.mpgHighway} MPG</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Schedule Test Drive
                  </button>
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="w-full bg-white text-primary border-2 border-primary py-3 px-4 rounded-lg font-medium hover:bg-primary/5 transition-colors"
                  >
                    Get More Info
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Calculate Payment
                    </button>
                    <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Trade-In Value
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>sales@sflegacyautos.com</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Auto Row<br />San Francisco, CA 94102</span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Hours of Operation</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">11:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Vehicles */}
        <div className="mt-16">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">Similar Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedVehicles.map((relatedVehicle) => (
              <Link
                key={relatedVehicle.id}
                href={`/inventory/${relatedVehicle.id}`}
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={relatedVehicle.image}
                    alt={`${relatedVehicle.year} ${relatedVehicle.make} ${relatedVehicle.model}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {relatedVehicle.year} {relatedVehicle.make} {relatedVehicle.model} {relatedVehicle.trim}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">
                      {formatPrice(relatedVehicle.price)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formatMileage(relatedVehicle.mileage)} miles
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-heading font-semibold text-gray-900">Request Information</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">
              Get more information about this {vehicle.year} {vehicle.make} {vehicle.model}
            </p>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message (optional)"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
