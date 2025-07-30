import Link from 'next/link'

interface CTABannerProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export default function CTABanner({
  title = "Ready to Find Your Perfect Vehicle?",
  description = "Don't wait – contact us today to schedule a test drive or learn more about our extensive inventory.",
  primaryButtonText = "Schedule Test Drive",
  primaryButtonHref = "/book-test-drive",
  secondaryButtonText = "View Inventory",
  secondaryButtonHref = "/inventory"
}: CTABannerProps) {
  return (
    <section className="mt-20">
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          {title}
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonHref}
            className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonHref}
            className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
