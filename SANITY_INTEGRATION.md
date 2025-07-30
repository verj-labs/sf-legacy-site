# Sanity CMS Integration

This document explains the Sanity CMS integration for the SF Legacy Autos vehicle inventory system.

## Overview

The project includes a flexible data layer that can switch between:
- **Mock Data**: For development and testing (default)
- **Sanity CMS**: For production with real content management

## Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Data Source Configuration
NEXT_PUBLIC_USE_SANITY_DATA=false  # Set to 'true' to use Sanity CMS

# Sanity Project Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Switching Between Data Sources

- **Mock Data** (Development): `NEXT_PUBLIC_USE_SANITY_DATA=false`
- **Sanity CMS** (Production): `NEXT_PUBLIC_USE_SANITY_DATA=true`

## File Structure

```
src/
├── lib/sanity/
│   ├── config.ts          # Sanity client configuration
│   ├── queries.ts         # GROQ queries for data fetching
│   └── api.ts             # Main API functions with fallback logic
├── data/
│   └── mockVehicles.ts    # Mock data for development
└── types/
    └── vehicle.ts         # TypeScript interfaces
```

## API Functions

### Core Functions

```typescript
// Get all available vehicles
const vehicles = await getAllVehicles()

// Get a single vehicle by ID
const vehicle = await getVehicleById('vehicle-id')

// Get a single vehicle by slug
const vehicle = await getVehicleBySlug('vehicle-slug')

// Get featured vehicles only
const featured = await getFeaturedVehicles()
```

### Filter Functions

```typescript
// Get vehicles by make
const toyotas = await getVehiclesByMake('Toyota')

// Get vehicles by body type
const sedans = await getVehiclesByBodyType('sedan')

// Get related vehicles (same make, excluding current)
const related = await getRelatedVehicles('Toyota', 'exclude-vehicle-id')
```

### Utility Functions

```typescript
// Get all available makes for filtering
const makes = await getVehicleMakes()

// Get all available body types for filtering
const bodyTypes = await getVehicleBodyTypes()

// Get total vehicle count
const count = await getVehicleCount()

// Search vehicles by query
const results = await searchVehicles('Toyota Camry')

// Filter by price range
const priceFiltered = await getVehiclesByPriceRange(20000, 40000)
```

## Sanity Schema

The system expects a Sanity document type called `vehicle` with the following structure:

### Required Fields
- `title` (string): Display title for the vehicle
- `year` (number): Vehicle year
- `make` (string): Vehicle manufacturer
- `model` (string): Vehicle model
- `vin` (string): Vehicle identification number
- `stockNum` (string): Dealer stock number
- `odometer` (number): Mileage in miles
- `bodyType` (string): sedan, suv, truck, etc.
- `engineDesc` (string): Engine description
- `transmission` (string): Transmission type
- `drivetrain` (string): fwd, rwd, awd, 4wd
- `fuelType` (string): gasoline, diesel, hybrid, electric
- `exteriorColor` (string): Exterior paint color
- `interiorColor` (string): Interior color/material
- `price` (number): Listed price
- `description` (text): Vehicle description
- `status` (string): available, sold, pending
- `featured` (boolean): Whether vehicle is featured
- `slug` (slug): URL-friendly identifier

### Optional Fields
- `trim` (string): Vehicle trim level
- `salePrice` (number): Sale/discounted price
- `highlights` (array of strings): Key selling points
- `features` (array of strings): Vehicle features
- `images` (array of images): Vehicle photos
- `mpgCity` (number): City fuel economy
- `mpgHighway` (number): Highway fuel economy
- `warranty` (object): Warranty information
- `financing` (object): Financing details

## GROQ Queries

The system uses optimized GROQ queries for efficient data fetching:

```groq
// Get all vehicles
*[_type == "vehicle" && status == "available"] | order(_createdAt desc)

// Get vehicle by ID
*[_type == "vehicle" && _id == $id][0]

// Get vehicles by make
*[_type == "vehicle" && status == "available" && make == $make]
```

## Error Handling & Fallbacks

The API functions include comprehensive error handling:

1. **Automatic Fallbacks**: If Sanity fails, automatically falls back to mock data
2. **Logging**: Console logging for debugging data source usage
3. **Type Safety**: Full TypeScript support with proper type checking
4. **Loading States**: Built-in loading states for UI components

## Usage in Components

### Inventory Page Example

```typescript
'use client'

import { useState, useEffect } from 'react'
import { getAllVehicles, getVehicleMakes } from '@/lib/sanity/api'

export default function InventoryPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const vehicleData = await getAllVehicles()
        setVehicles(vehicleData)
      } catch (error) {
        console.error('Error loading vehicles:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // ... component JSX
}
```

### Vehicle Detail Page Example

```typescript
'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getVehicleById, getRelatedVehicles } from '@/lib/sanity/api'

export default function VehicleDetailPage() {
  const params = useParams()
  const [vehicle, setVehicle] = useState<Vehicle | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const vehicleData = await getVehicleById(params.id as string)
      if (vehicleData) {
        setVehicle(vehicleData)
        const related = await getRelatedVehicles(vehicleData.make, vehicleData._id)
        // ... handle related vehicles
      }
    }

    loadData()
  }, [params.id])

  // ... component JSX
}
```

## SEO Considerations

The system is designed for optimal SEO:

- **Server-Side Rendering**: Data fetching works with Next.js SSR
- **Static Generation**: Can be used with `getStaticProps` for static sites
- **Dynamic URLs**: Support for both ID and slug-based URLs
- **Meta Data**: Vehicle data can be used for dynamic meta tags

## Development Workflow

1. **Start with Mock Data**: Develop and test with `USE_SANITY_DATA=false`
2. **Set Up Sanity Project**: Create your Sanity project and configure schema
3. **Add Real Data**: Populate Sanity with vehicle data
4. **Switch to Sanity**: Set `USE_SANITY_DATA=true` for production
5. **Test Fallbacks**: Verify mock data fallbacks work correctly

## Best Practices

1. **Environment Variables**: Never commit real Sanity credentials
2. **Error Handling**: Always handle potential API failures
3. **Loading States**: Provide user feedback during data loading
4. **Type Safety**: Use the provided TypeScript interfaces
5. **Caching**: Consider implementing caching for better performance
6. **Image Optimization**: Use Next.js Image component with Sanity images

## Troubleshooting

### Common Issues

1. **"Mock data" appears in logs**: Check your `NEXT_PUBLIC_USE_SANITY_DATA` setting
2. **Sanity connection fails**: Verify project ID, dataset, and API version
3. **Images don't load**: Check Sanity image references and URL builder
4. **Type errors**: Ensure Sanity data matches the Vehicle interface
5. **No vehicles appear**: Check Sanity document status field (should be "available")

### Debug Console Messages

The system provides clear console messages:
- `📦 Using mock data for vehicles` - Using mock data
- `🔄 Fetching vehicles from Sanity...` - Fetching from Sanity
- `❌ Error fetching vehicles from Sanity:` - Sanity error with fallback

## Future Enhancements

- [ ] Add caching layer for improved performance
- [ ] Implement real-time updates with Sanity webhooks
- [ ] Add image optimization and transformation
- [ ] Support for multiple languages/localization
- [ ] Add analytics integration for tracking vehicle views
- [ ] Implement search indexing for better search performance
