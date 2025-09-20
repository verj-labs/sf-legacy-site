/**
 * Vehicle utility functions
 */

/**
 * Parse vehicle features from string format to array
 * @param features - Features string with newline-separated items
 * @returns Array of feature strings
 */
export const parseVehicleFeatures = (features?: string): string[] => {
  if (!features) return []
  
  return features
    .split('\n')
    .map(feature => feature.trim())
    .filter(feature => feature.length > 0)
}

/**
 * Format vehicle price as currency
 * @param price - Price in dollars
 * @returns Formatted price string
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

/**
 * Format vehicle mileage with commas
 * @param mileage - Mileage number
 * @returns Formatted mileage string
 */
export const formatMileage = (mileage: number): string => {
  return new Intl.NumberFormat('en-US').format(mileage)
}

/**
 * Get vehicle title for display
 * @param vehicle - Vehicle object
 * @returns Formatted vehicle title
 */
export const getVehicleTitle = (vehicle: { year: number; make: string; model: string; trim?: string }): string => {
  return `${vehicle.year} ${vehicle.make} ${vehicle.model}${vehicle.trim ? ` ${vehicle.trim}` : ''}`
}

/**
 * Format drivetrain for display
 * @param drivetrain - Drivetrain value from database
 * @returns Properly formatted drivetrain string
 */
export const formatDrivetrain = (drivetrain: string): string => {
  const drivetrainMap: Record<string, string> = {
    'fwd': 'FWD',
    'rwd': 'RWD',
    'awd': 'AWD',
    '4wd': '4WD',
  }
  
  return drivetrainMap[drivetrain.toLowerCase()] || drivetrain.toUpperCase()
}

/**
 * Format fuel type for display
 * @param fuelType - Fuel type value from database
 * @returns Properly formatted fuel type string
 */
export const formatFuelType = (fuelType: string): string => {
  const fuelTypeMap: Record<string, string> = {
    'gasoline': 'Gasoline',
    'diesel': 'Diesel',
    'hybrid': 'Hybrid',
    'electric': 'Electric',
    'plug-in-hybrid': 'Plug-in Hybrid',
  }
  
  return fuelTypeMap[fuelType.toLowerCase()] || fuelType
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Format body type for display
 * @param bodyType - Body type value from database
 * @returns Properly formatted body type string
 */
export const formatBodyType = (bodyType: string): string => {
  const bodyTypeMap: Record<string, string> = {
    'sedan': 'Sedan',
    'suv': 'SUV',
    'truck': 'Truck',
    'coupe': 'Coupe',
    'convertible': 'Convertible',
    'wagon': 'Wagon',
    'hatchback': 'Hatchback',
    'van': 'Van',
    'crossover': 'Crossover',
  }
  
  return bodyTypeMap[bodyType.toLowerCase()] || bodyType.charAt(0).toUpperCase() + bodyType.slice(1).toLowerCase()
}
