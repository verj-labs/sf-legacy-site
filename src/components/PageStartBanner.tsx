import { ReactNode } from 'react'

interface PageStartBannerProps {
  title: string
  description: string
  children?: ReactNode
}

export default function PageStartBanner({ title, description, children }: PageStartBannerProps) {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-brand-700 to-brand-400 text-white py-12 md:py-16 overflow-hidden">
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-100 max-w-2xl leading-relaxed drop-shadow-sm">
            {description}
          </p>
          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
