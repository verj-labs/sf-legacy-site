import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Buy Used Cars.
            <br />
            <span className="text-accent">Shop With Confidence</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl font-medium mb-4 opacity-90">
            Your trusted dealership for quality pre-owned vehicles
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-lg">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+19057494061" className="hover:text-accent transition-colors">
                (905) 749-4061
              </a>
            </div>
            <div className="hidden sm:block text-accent">•</div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:sales@starfallmotors.com" className="hover:text-accent transition-colors">
                sales@starfallmotors.com
              </a>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/test-drive"
              className="bg-accent text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Test Drive
            </Link>
            <Link
              href="/inventory"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              View Our Stock
            </Link>
          </div>
          
          {/* Platform Links */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm mb-4 opacity-75">Also find us on:</p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.cargurus.ca/Cars/inventorylisting/viewDetailsFilterViewInventoryListing.action?sourceContext=carGurusHomePageModel&entitySelectingHelper.selectedEntity=d2618&zip=M5S1A1#listing=362505936_isFeatured"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                CarGurus
              </a>
              <a
                href="https://www.kijiji.ca/o-posters-other-ads/1005474305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Kijiji
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
