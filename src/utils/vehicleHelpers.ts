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
