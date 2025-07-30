import { Vehicle } from '@/types/vehicle'

// Mock vehicle for detailed view
export const mockVehicle: Vehicle = {
  _id: '1',
  _type: 'vehicle',
  title: '2022 Toyota Camry LE - Reliable Family Sedan',
  year: 2022,
  make: 'Toyota',
  model: 'Camry',
  trim: 'LE',
  odometer: 25000,
  bodyType: 'sedan',
  stockNum: 'T24001',
  transmission: '8-Speed Automatic',
  engineDesc: '2.5L 4-Cylinder DOHC 16-Valve',
  vin: '4T1G11AK5NU123456',
  fuelType: 'gasoline',
  drivetrain: 'fwd',
  exteriorColor: 'Silver Metallic',
  interiorColor: 'Black Cloth',
  
  // Pricing
  price: 26999,
  salePrice: 24999,
  
  // Vehicle Overview
  description: 'This 2022 Toyota Camry LE is a reliable and efficient sedan that offers excellent value for daily commuting and family transportation. With its proven 2.5L 4-cylinder engine and 8-speed automatic transmission, this vehicle delivers impressive fuel economy while maintaining Toyota\'s reputation for reliability and durability. The Camry features a spacious interior, advanced safety features, and a comprehensive warranty package.',
  highlights: [
    'Single owner vehicle with complete service history',
    'Clean CarFax report with no accidents',
    'All maintenance records available and up to date',
    'Non-smoker vehicle with pristine interior',
    'Toyota Certified Pre-Owned with extended warranty',
    'Recent multi-point inspection completed',
    'New tires installed within last 5,000 miles'
  ],
  
  // Features & Options
  features: `Toyota Safety Sense 2.0
Pre-Collision System with Pedestrian Detection
Lane Departure Alert with Steering Assist
Automatic High Beams
Dynamic Radar Cruise Control
Blind Spot Monitor with Rear Cross Traffic Alert
8-inch Touchscreen Display Audio
Apple CarPlay & Android Auto Compatible
Wireless Phone Charging
Dual-Zone Automatic Climate Control
Power Driver Seat with Lumbar Support
LED Headlights and Taillights
Backup Camera with Dynamic Guidelines
Remote Keyless Entry System
60/40 Split-Folding Rear Seat`,
  
  // Images
  images: [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop&auto=format', 
    'https://images.unsplash.com/photo-1556800024-56db9ed14139?w=600&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1518812259493-e2c2ef7d5a63?w=600&h=400&fit=crop&auto=format'
  ],
  
  // Additional specifications
  mpgCity: 28,
  mpgHighway: 39,
  status: 'available',
  featured: true,
  slug: '2022-toyota-camry-le-t24001',
  
  // Financing
  financing: {
    monthlyPayment: 389,
    downPayment: 2500,
    apr: 4.9,
    term: 72
  },
  
  // Warranty
  warranty: {
    hasWarranty: true,
    warrantyDescription: '60,000 miles / 5 years remaining from original in-service date. Comprehensive coverage until 36,000 miles. Extended warranty options available.',
    extendedAvailable: true
  }
}

// Related vehicles for recommendations
export const relatedVehicles: Vehicle[] = [
  {
    _id: '2',
    _type: 'vehicle',
    title: '2021 Honda Accord EX - Sport Sedan',
    year: 2021,
    make: 'Honda',
    model: 'Accord',
    trim: 'EX',
    price: 26999,
    salePrice: 26999,
    odometer: 22000,
    bodyType: 'sedan',
    stockNum: 'H21002',
    transmission: 'CVT Automatic',
    engineDesc: '1.5L Turbo 4-Cylinder',
    vin: '1HGCV1F3XMA123456',
    fuelType: 'gasoline',
    drivetrain: 'fwd',
    exteriorColor: 'Modern Steel Metallic',
    interiorColor: 'Black Leather',
    description: 'Well-maintained Honda Accord with excellent fuel economy.',
    highlights: ['Single owner', 'Clean history', 'Full service records'],
    features: 'Honda Sensing\nBackup Camera\nBluetooth',
    images: ['https://images.unsplash.com/photo-1606016159991-5d5b2b7ad5bb?w=400&h=300&fit=crop&auto=format'],
    status: 'available',
    featured: false,
    slug: '2021-honda-accord-ex-h21002'
  },
  {
    _id: '3',
    _type: 'vehicle',
    title: '2020 Nissan Altima SV - Efficient Sedan',
    year: 2020,
    make: 'Nissan',
    model: 'Altima',
    trim: 'SV',
    price: 22999,
    salePrice: 22999,
    odometer: 35000,
    bodyType: 'sedan',
    stockNum: 'N20003',
    transmission: 'CVT Automatic',
    engineDesc: '2.5L 4-Cylinder',
    vin: '1N4BL4BV1LC123456',
    fuelType: 'gasoline',
    drivetrain: 'fwd',
    exteriorColor: 'Gun Metallic',
    interiorColor: 'Charcoal Cloth',
    description: 'Reliable Nissan Altima with modern features.',
    highlights: ['Clean CarFax', 'Well maintained', 'Non-smoker'],
    features: 'Nissan Safety Shield\nBackup Camera\nRemote Start',
    images: ['https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop&auto=format'],
    status: 'available',
    featured: false,
    slug: '2020-nissan-altima-sv-n20003'
  },
  {
    _id: '4',
    _type: 'vehicle',
    title: '2021 Hyundai Sonata SEL - Modern Features',
    year: 2021,
    make: 'Hyundai',
    model: 'Sonata',
    trim: 'SEL',
    price: 24999,
    salePrice: 24999,
    odometer: 18000,
    bodyType: 'sedan',
    stockNum: 'HY21004',
    transmission: '8-Speed Automatic',
    engineDesc: '2.5L 4-Cylinder',
    vin: 'KMHL14JA1MA123456',
    fuelType: 'gasoline',
    drivetrain: 'fwd',
    exteriorColor: 'Machine Gray',
    interiorColor: 'Black Cloth',
    description: 'Stylish Hyundai Sonata with modern technology.',
    highlights: ['Low mileage', 'Warranty remaining', 'Excellent condition'],
    features: 'Hyundai SmartSense\nWireless Charging\nApple CarPlay',
    images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop&auto=format'],
    status: 'available',
    featured: false,
    slug: '2021-hyundai-sonata-sel-hy21004'
  }
]

// Mock vehicles for inventory listing
export const mockVehicles: Vehicle[] = [
  {
    _id: '1',
    _type: 'vehicle',
    title: '2022 Toyota Camry LE - Reliable Family Sedan',
    year: 2022,
    make: 'Toyota',
    model: 'Camry',
    trim: 'LE',
    bodyType: 'sedan',
    odometer: 25000,
    price: 24999,
    transmission: 'Automatic',
    fuelType: 'gasoline',
    engineDesc: '2.5L 4-Cylinder',
    stockNum: 'T22001',
    vin: '4T1G11AK5NU123456',
    drivetrain: 'fwd',
    exteriorColor: 'Silver',
    interiorColor: 'Black',
    description: 'Reliable family sedan with excellent fuel economy.',
    highlights: ['Clean CarFax', 'Single owner', 'Full service records'],
    features: 'Toyota Safety Sense\nBackup Camera\nBluetooth',
    images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format'],
    status: 'available',
    featured: true,
    slug: '2022-toyota-camry-le-t22001'
  },
  {
    _id: '2',
    _type: 'vehicle',
    title: '2021 Honda CR-V EX - AWD Compact SUV',
    year: 2021,
    make: 'Honda',
    model: 'CR-V',
    trim: 'EX',
    bodyType: 'suv',
    odometer: 18000,
    price: 28999,
    transmission: 'CVT',
    fuelType: 'gasoline',
    engineDesc: '1.5L Turbo 4-Cylinder',
    stockNum: 'H21002',
    vin: '2HKRW2H8XMH123456',
    drivetrain: 'awd',
    exteriorColor: 'Modern Steel',
    interiorColor: 'Black',
    description: 'Versatile compact SUV with all-wheel drive.',
    highlights: ['AWD', 'Low mileage', 'Honda Sensing'],
    features: 'AWD\nHonda Sensing\nPower Tailgate\nSunroof',
    images: ['https://images.unsplash.com/photo-1606016159991-5d5b2b7ad5bb?w=400&h=300&fit=crop&auto=format'],
    status: 'available',
    featured: true,
    slug: '2021-honda-cr-v-ex-h21002'
  },
  {
    _id: '3',
    _type: 'vehicle',
    title: '2020 Ford F-150 XLT - SuperCrew Cab',
    year: 2020,
    make: 'Ford',
    model: 'F-150',
    trim: 'XLT',
    bodyType: 'truck',
    odometer: 35000,
    price: 32999,
    transmission: 'Automatic',
    fuelType: 'gasoline',
    engineDesc: '3.5L V6 EcoBoost',
    stockNum: 'F20003',
    vin: '1FTFW1E8XLF123456',
    drivetrain: '4wd',
    exteriorColor: 'Oxford White',
    interiorColor: 'Medium Earth Gray',
    description: 'Powerful pickup truck with towing capability.',
    highlights: ['4WD', 'EcoBoost engine', 'SuperCrew cab'],
    features: '4WD\nTowing Package\nSYNC 3\nBackup Camera',
    images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&auto=format'],
    status: 'available',
    featured: false,
    slug: '2020-ford-f-150-xlt-f20003'
  },
  {
    _id: '4',
    _type: 'vehicle',
    title: '2021 BMW 3 Series 330i - Sport Sedan',
    year: 2021,
    make: 'BMW',
    model: '3 Series',
    trim: '330i',
    bodyType: 'sedan',
    odometer: 22000,
    price: 35999,
    transmission: 'Automatic',
    fuelType: 'gasoline',
    engineDesc: '2.0L TwinPower Turbo',
    stockNum: 'B21004',
    vin: 'WBA5R1C0XMA123456',
    drivetrain: 'rwd',
    exteriorColor: 'Jet Black',
    interiorColor: 'Black Leather',
    description: 'Luxury sport sedan with premium features.',
    highlights: ['Sport package', 'Premium interior', 'BMW warranty'],
    features: 'Sport Package\nPremium Audio\nNavigation\nHeated Seats',
    images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&auto=format'],
    status: 'available',
    featured: true,
    slug: '2021-bmw-3-series-330i-b21004'
  },
  {
    _id: '5',
    _type: 'vehicle',
    title: '2020 Mercedes-Benz C-Class C300 - Luxury Sedan',
    year: 2020,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    trim: 'C300',
    bodyType: 'sedan',
    odometer: 28000,
    price: 33999,
    transmission: 'Automatic',
    fuelType: 'gasoline',
    engineDesc: '2.0L Turbo 4-Cylinder',
    stockNum: 'MB20005',
    vin: '55SWF8DB0LU123456',
    drivetrain: 'rwd',
    exteriorColor: 'Polar White',
    interiorColor: 'Black Leather',
    description: 'Elegant luxury sedan with advanced technology.',
    highlights: ['Luxury features', 'Premium interior', 'Mercedes warranty'],
    features: 'Premium Package\nCOMAND Navigation\nPanoramic Sunroof',
    images: ['https://images.unsplash.com/photo-1617654112368-307921291f42?w=400&h=300&fit=crop&auto=format'],
    status: 'available',
    featured: false,
    slug: '2020-mercedes-benz-c-class-c300-mb20005'
  },
  {
    _id: '6',
    _type: 'vehicle',
    title: '2022 Chevrolet Equinox LT - Compact SUV',
    year: 2022,
    make: 'Chevrolet',
    model: 'Equinox',
    trim: 'LT',
    bodyType: 'suv',
    odometer: 15000,
    price: 26999,
    transmission: 'Automatic',
    fuelType: 'gasoline',
    engineDesc: '1.5L Turbo 4-Cylinder',
    stockNum: 'C22006',
    vin: '2GNAXSEV9N6123456',
    drivetrain: 'fwd',
    exteriorColor: 'Summit White',
    interiorColor: 'Jet Black',
    description: 'Efficient compact SUV with modern features.',
    highlights: ['Low mileage', 'Fuel efficient', 'Modern technology'],
    features: 'Chevrolet Safety Assist\nInfotainment System\nWiFi Hotspot',
    images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&auto=format'],
    status: 'available',
    featured: false,
    slug: '2022-chevrolet-equinox-lt-c22006'
  }
]
