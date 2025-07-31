import { ReactNode } from 'react'

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'ghost' | 'overlay' | 'overlay-dark'
  size?: 'sm' | 'default' | 'lg'
  weight?: 'normal' | 'semibold' | 'bold'
  removable?: boolean
  onRemove?: () => void
}

export default function Chip({
  className = '',
  variant = 'default',
  size = 'default',
  weight = 'normal',
  children,
  removable = false,
  onRemove,
  ...props
}: ChipProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary/10 text-primary hover:bg-primary/20'
      case 'secondary':
        return 'bg-gray-500/10 text-gray-700 hover:bg-gray-500/20'
      case 'success':
        return 'bg-green-100 text-green-800 hover:bg-green-200'
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
      case 'error':
        return 'bg-red-100 text-red-800 hover:bg-red-200'
      case 'info':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200'
      case 'outline':
        return 'border border-gray-300 text-gray-700 hover:bg-gray-50'
      case 'ghost':
        return 'text-gray-600 hover:bg-gray-100'
      case 'overlay':
        return 'bg-white/20 text-white hover:bg-white/30'
      case 'overlay-dark':
        return 'bg-black/20 text-white hover:bg-black/30'
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-0.5 text-xs'
      case 'lg':
        return 'px-4 py-2 text-base'
      default:
        return 'px-3 py-1 text-sm'
    }
  }

  const getWeightClasses = () => {
    switch (weight) {
      case 'semibold':
        return 'font-semibold'
      case 'bold':
        return 'font-bold'
      default:
        return 'font-medium'
    }
  }

  const baseClasses = 'inline-flex items-center rounded-full transition-colors gap-2 '
  const variantClasses = getVariantClasses()
  const sizeClasses = getSizeClasses()
  const weightClasses = getWeightClasses()
  
  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${weightClasses} ${className}`.trim()

  return (
    <div
      className={allClasses}
      {...props}
    >
      {children}
      {removable && onRemove && (
        <button
          onClick={onRemove}
          className="ml-2 hover:bg-black/10 rounded-full p-0.5 transition-colors"
          aria-label="Remove"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
