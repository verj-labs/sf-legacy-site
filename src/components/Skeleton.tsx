interface SkeletonProps {
  width?: string
  height?: string
  className?: string
  variant?: 'rectangle' | 'circle' | 'text'
}

export default function Skeleton({ 
  width = 'w-full', 
  height = 'h-4', 
  className = '', 
  variant = 'rectangle' 
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200'
  
  const variantClasses = {
    rectangle: 'rounded',
    circle: 'rounded-full',
    text: 'rounded'
  }

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${width} ${height} ${className}`}
    />
  )
}

// Specific skeleton components for common use cases
export function VehicleCardSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Image skeleton */}
      <Skeleton height="h-48" className="rounded-none" />
      
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <Skeleton height="h-5" width="w-3/4" />
        
        {/* Price and mileage */}
        <div className="flex items-center justify-between">
          <Skeleton height="h-6" width="w-20" />
          <Skeleton height="h-4" width="w-24" />
        </div>
      </div>
    </div>
  )
}

export function VehicleDetailSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Main image skeleton */}
      <Skeleton height="h-96" className="rounded-none" />
      
      {/* Thumbnail strip */}
      <div className="p-4">
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} width="w-20" height="h-16" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function VehicleInfoSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 space-y-4">
      {/* Title */}
      <Skeleton height="h-8" width="w-2/3" />
      
      {/* Price */}
      <Skeleton height="h-10" width="w-32" />
      
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton height="h-3" width="w-16" />
            <Skeleton height="h-4" width="w-20" />
          </div>
        ))}
      </div>
      
      {/* Buttons */}
      <div className="space-y-3">
        <Skeleton height="h-12" />
        <Skeleton height="h-12" />
        <div className="grid grid-cols-2 gap-2">
          <Skeleton height="h-10" />
          <Skeleton height="h-10" />
        </div>
      </div>
    </div>
  )
}
