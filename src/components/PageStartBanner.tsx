import { ReactNode } from 'react'

interface PageStartBannerProps {
  title: string
  description: string
  children?: ReactNode
}

export default function PageStartBanner({ title, description, children }: PageStartBannerProps) {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8 md:py-12">
      {/* Neutral background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blackContrast to-ink" />
      {/* Subtle texture / radial vignette */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] bg-[linear-gradient(120deg,rgba(0,0,0,0.04),transparent_35%,rgba(0,0,0,0.04))]" />
      {/* Brand accent stripe */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand/0 via-brand/50 to-brand/0" />
      {/* Decorative blurred brand spot */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-72 h-72 bg-ink/5 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-1.5 sm:gap-2">
        <div className="max-w-4xl">
          <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-100">
              {title}
          </h1>
          <p className="text-sm sm:text-body-m text-neutral-300 max-w-2xl leading-relaxed mt-1 sm:mt-0">
            {description}
          </p>
          {children && (
            <div className="mt-2 sm:mt-2 flex flex-wrap gap-2 sm:gap-3">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
