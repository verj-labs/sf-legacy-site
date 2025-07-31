import Link from 'next/link'
import { Vehicle } from '@/types/vehicle'
import Chip from '@/components/Chip'
import { HiOutlineCheckCircle, HiOutlineEye, HiOutlineCalendar } from 'react-icons/hi'

interface VehicleCardProps {
  vehicle: Vehicle
  variant?: 'default' | 'featured' | 'compact' | 'selectable' | 'inventory'
  isSelected?: boolean
  onSelect?: (vehicle: Vehicle) => void
  showActions?: boolean
  className?: string
}

export default function VehicleCard({
  vehicle,
  variant = 'default',
  isSelected = false,
  onSelect,
  showActions = true,
  className = ''
}: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage)
  }

  const baseClasses = "group bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
  
  const variantClasses = {
    default: "hover:border-brand",
    featured: "hover:border-brand hover:shadow-xl",
    compact: "hover:border-brand",
    inventory: "hover:border-brand border-gray-200",
    selectable: `cursor-pointer ${
      isSelected 
        ? 'border-brand bg-brand/5 shadow-lg' 
        : 'border-border hover:border-brand hover:shadow-md'
    }`
  }

  const cardContent = (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Vehicle Image */}
      <div className={`relative bg-background-muted overflow-hidden ${
        variant === 'featured' ? 'aspect-[16/10]' : 'aspect-[4/3]'
      }`}>
        <img
          src={vehicle.images?.[0] || "/api/placeholder/400/300"}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Featured Badge */}
        {(variant === 'featured' || variant === 'inventory') && vehicle.featured && (
          <div className="absolute top-3 left-3">
            <Chip variant="primary" size="sm" className="bg-brand text-white text-xs">
              Featured
            </Chip>
          </div>
        )}
        
        {/* Sale Badge */}
        {vehicle.salePrice && vehicle.salePrice < vehicle.price && (
          <div className={`absolute top-3 ${(variant === 'featured' || variant === 'inventory') && vehicle.featured ? 'left-3 mt-8' : 'left-3'}`}>
            <Chip variant="error" size="sm" className="bg-red-500 text-white text-xs">
              Sale
            </Chip>
          </div>
        )}
        
        {/* Warranty Badge */}
        {variant === 'featured' && vehicle.warranty?.hasWarranty && (
          <div className="absolute top-3 right-3 mb-8">
            <Chip variant="success" size="sm" className="bg-green-500 text-white text-xs">
              Certified
            </Chip>
          </div>
        )}
        
        {/* Stock Number Badge */}
        <div className={`absolute ${variant === 'featured' && vehicle.warranty?.hasWarranty ? 'top-12 right-3' : 'top-3 right-3'}`}>
          <Chip variant="overlay" size="sm" className="bg-black/60 text-white backdrop-blur-sm text-xs">
            #{vehicle.stockNum}
          </Chip>
        </div>
      </div>

      {/* Card Content */}
      <div className={`${
        variant === 'compact' || variant === 'inventory' ? 'p-4' : variant === 'featured' ? 'p-8' : 'p-6'
      }`}>
        {/* Vehicle Title */}
        <h3 className={`font-heading font-bold text-ink mb-2 group-hover:text-brand transition-colors ${
          variant === 'featured' ? 'text-h4' : variant === 'compact' || variant === 'inventory' ? 'text-sm' : 'text-h5'
        }`}>
          {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
        </h3>
        
        {/* Vehicle Details */}
        <div className={`flex flex-wrap gap-1.5 ${
          variant === 'compact' || variant === 'inventory' ? 'mb-3' : 'mb-4'
        }`}>
          <Chip variant="secondary" size="sm" className="text-xs">{formatMileage(vehicle.odometer)} miles</Chip>
          <Chip variant="secondary" size="sm" className="text-xs">{vehicle.transmission}</Chip>
          <Chip variant="secondary" size="sm" className="text-xs capitalize">{vehicle.bodyType}</Chip>
          {variant === 'featured' && vehicle.fuelType && (
            <Chip variant="secondary" size="sm" className="text-xs capitalize">{vehicle.fuelType}</Chip>
          )}
        </div>
        
        {/* Additional Details for Featured Variant */}
        {variant === 'featured' && (
          <div className="mb-4 space-y-3">
            <p className="text-body-m text-body line-clamp-2">
              {vehicle.description || `Well-maintained ${vehicle.year} ${vehicle.make} ${vehicle.model} with ${formatMileage(vehicle.odometer)} miles. This ${vehicle.bodyType.toLowerCase()} features ${vehicle.transmission} transmission and offers excellent reliability and performance.`}
            </p>
            
            {/* Key Features for Featured */}
            <div className="flex flex-wrap gap-1.5">
              {vehicle.engineDesc && (
                <Chip variant="outline" size="sm" className="text-xs">{vehicle.engineDesc}</Chip>
              )}
              {vehicle.drivetrain && (
                <Chip variant="outline" size="sm" className="text-xs uppercase">{vehicle.drivetrain}</Chip>
              )}
              {vehicle.exteriorColor && (
                <Chip variant="outline" size="sm" className="text-xs">{vehicle.exteriorColor}</Chip>
              )}
              {vehicle.warranty?.hasWarranty && (
                <Chip variant="outline" size="sm" className="text-xs text-green-600 border-green-200">
                  Warranty Included
                </Chip>
              )}
              {vehicle.mpgCity && vehicle.mpgHighway && (
                <Chip variant="outline" size="sm" className="text-xs">
                  {vehicle.mpgCity}/{vehicle.mpgHighway} MPG
                </Chip>
              )}
            </div>
          </div>
        )}
        
        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            {vehicle.salePrice && vehicle.salePrice < vehicle.price ? (
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-brand ${
                    variant === 'featured' ? 'text-h4' : variant === 'compact' || variant === 'inventory' ? 'text-base' : 'text-h5'
                  }`}>
                    {formatPrice(vehicle.salePrice)}
                  </span>
                  <span className="text-xs text-body line-through">
                    {formatPrice(vehicle.price)}
                  </span>
                </div>
                {variant === 'featured' && vehicle.financing?.monthlyPayment && (
                  <p className="text-body-xs text-body">
                    Starting at ${vehicle.financing.monthlyPayment}/mo
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-1">
                <span className={`font-bold text-brand ${
                  variant === 'featured' ? 'text-h4' : variant === 'compact' || variant === 'inventory' ? 'text-base' : 'text-h5'
                }`}>
                  {formatPrice(vehicle.price)}
                </span>
                {variant === 'featured' && vehicle.financing?.monthlyPayment && (
                  <p className="text-body-xs text-body">
                    Starting at ${vehicle.financing.monthlyPayment}/mo
                  </p>
                )}
              </div>
            )}
          </div>
          
          {/* Action Section */}
          <div className="flex items-center gap-2">
            {variant === 'selectable' && isSelected ? (
              <div className="flex items-center gap-2 text-brand">
                <HiOutlineCheckCircle className="w-4 h-4" />
                <span className="text-xs font-medium">Selected</span>
              </div>
            ) : variant === 'selectable' ? (
              <span className="text-xs text-brand font-medium group-hover:translate-x-1 transition-transform">
                Select →
              </span>
            ) : showActions ? (
              <div className="flex items-center gap-1">
                {variant === 'featured' ? (
                  // Featured variant: Show primary CTA buttons
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/book-test-drive?vehicleId=${vehicle._id}`}
                      className="inline-flex items-center gap-1 px-3 py-2 bg-brand text-white text-body-s font-medium rounded-lg hover:bg-brand-dark transition-colors"
                    >
                      <HiOutlineCalendar className="w-4 h-4" />
                      Test Drive
                    </Link>
                    <Link
                      href={`/inventory/${vehicle._id}`}
                      className="inline-flex items-center gap-1 px-3 py-2 border border-brand text-brand text-body-s font-medium rounded-lg hover:bg-brand/5 transition-colors"
                    >
                      <HiOutlineEye className="w-4 h-4" />
                      Details
                    </Link>
                  </div>
                ) : variant === 'inventory' ? (
                  // Inventory variant: Compact buttons
                  <div className="flex items-center gap-1">
                    <Link
                      href={`/book-test-drive?vehicleId=${vehicle._id}`}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-brand hover:text-brand-dark transition-colors"
                    >
                      <HiOutlineCalendar className="w-3 h-3" />
                      Test
                    </Link>
                    <Link
                      href={`/inventory/${vehicle._id}`}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-brand hover:text-brand-dark transition-colors"
                    >
                      <HiOutlineEye className="w-3 h-3" />
                      Details
                    </Link>
                  </div>
                ) : variant !== 'compact' ? (
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/book-test-drive?vehicleId=${vehicle._id}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-body-s font-medium text-brand hover:text-brand-dark transition-colors"
                    >
                      <HiOutlineCalendar className="w-4 h-4" />
                      Test Drive
                    </Link>
                    <Link
                      href={`/inventory/${vehicle._id}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-body-s font-medium text-brand hover:text-brand-dark transition-colors"
                    >
                      <HiOutlineEye className="w-4 h-4" />
                      View Details
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={`/inventory/${vehicle._id}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-body-s font-medium text-brand hover:text-brand-dark transition-colors"
                  >
                    <HiOutlineEye className="w-4 h-4" />
                    View Details
                  </Link>
                )}
              </div>
            ) : (
              <span className="text-xs text-brand font-medium group-hover:translate-x-1 transition-transform">
                View Details →
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  // If selectable variant with onSelect handler, make it clickable
  if (variant === 'selectable' && onSelect) {
    return (
      <div onClick={() => onSelect(vehicle)}>
        {cardContent}
      </div>
    )
  }

  // If not selectable or no actions, wrap in Link to detail page
  if (!showActions || variant === 'compact' || variant === 'inventory') {
    return (
      <Link href={`/inventory/${vehicle._id}`} className="block">
        {cardContent}
      </Link>
    )
  }

  // Default: just return the card content
  return cardContent
}

// Export types for use in other components
export type { VehicleCardProps }
