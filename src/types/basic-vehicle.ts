// Simplified Vehicle Types - Just import from main vehicle.ts
import type { Vehicle } from './vehicle'

// Alias for backward compatibility
export type BasicVehicle = Vehicle
export type DetailedVehicle = Vehicle

// Re-export the main type
export type { Vehicle } from './vehicle'
