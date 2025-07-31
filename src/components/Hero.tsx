import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden h-[80vh] flex items-center py-16">
      {/* Enhanced gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-brand/5 to-brand/15"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between min-h-[60vh]">
          {/* Left: Text Stack with beautiful typography */}
          <div className="flex-[0_0_55%] max-w-3xl">
            {/* Main Heading with gradient text */}
            <h1 className="text-h1 font-heading font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-ink via-body to-brand bg-clip-text text-transparent">
                Buy Used Cars.
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
                Shop With Confidence
              </span>
            </h1>

            {/* Subcopy with enhanced typography */}
            <p className="text-body-l text-body mb-8 max-w-lg leading-relaxed font-light">
              Your trusted dealership for quality pre-owned vehicles. Find your
              perfect car with our extensive inventory and exceptional service.
            </p>

            {/* Contact Info */}
            <div className="flex items-center gap-2 mb-8 text-body-m text-body">
              <div className="p-2 bg-brand/10 rounded-full">
                <svg
                  className="w-4 h-4 text-brand"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <a
                href="tel:+19057494061"
                className="hover:text-brand transition-colors duration-fast font-medium"
              >
                (905) 749-4061
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/book-test-drive"
                className="btn-primary inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Schedule Test Drive
              </Link>
              <Link
                href="/inventory"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Inventory
              </Link>
            </div>

            {/* Platform Links */}
            <div className="border-t border-border pt-6">
              <p className="text-ui-meta text-body/70 mb-4">We are on:</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.cargurus.ca/Cars/m-SF-LEGACY-MOTORS-sp449799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-24 h-12 bg-surface border border-border rounded-md hover:bg-surface-muted hover:border-brand hover:shadow-md transition-all duration-fast"
                >
                  <Image
                    src="/asset/hero-carguru.svg"
                    alt="CarGurus"
                    width={80}
                    height={32}
                    className="max-w-full max-h-full object-contain"
                  />
                </a>
                <a
                  href="https://www.kijiji.ca/b-cars-trucks/canada/c174l0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-24 h-12 bg-surface border border-border rounded-md hover:bg-surface-muted hover:border-brand hover:shadow-md transition-all duration-fast"
                >
                  <Image
                    src="/asset/hero-kijiji.png"
                    alt="Kijiji"
                    width={80}
                    height={32}
                    className="max-w-full max-h-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Animated Car SVG */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="relative">
              {/* Animated Car SVG */}
              <svg
                width="400"
                height="300"
                viewBox="0 0 400 300"
                className="drop-shadow-lg"
              >
                {/* Car Body */}
                <defs>
                  <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                  <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E5E7EB" />
                    <stop offset="100%" stopColor="#9CA3AF" />
                  </linearGradient>
                </defs>
                
                {/* Car Shadow */}
                <ellipse cx="200" cy="260" rx="120" ry="15" fill="rgba(0,0,0,0.1)" className="animate-pulse" />
                
                {/* Car Body Main */}
                <path
                  d="M80 200 L120 160 L280 160 L320 200 L320 220 L80 220 Z"
                  fill="url(#carGradient)"
                  className="animate-pulse"
                  style={{ animationDuration: '3s' }}
                />
                
                {/* Car Roof */}
                <path
                  d="M130 160 L140 140 L260 140 L270 160 Z"
                  fill="url(#carGradient)"
                  className="animate-pulse"
                  style={{ animationDuration: '3s', animationDelay: '0.5s' }}
                />
                
                {/* Windows */}
                <path
                  d="M140 155 L145 145 L255 145 L260 155 Z"
                  fill="url(#windowGradient)"
                  className="animate-pulse"
                  style={{ animationDuration: '2s', animationDelay: '1s' }}
                />
                
                {/* Front Wheel */}
                <circle
                  cx="120"
                  cy="220"
                  r="25"
                  fill="#374151"
                  className="animate-spin"
                  style={{ 
                    animationDuration: '2s',
                    transformOrigin: '120px 220px'
                  }}
                />
                <circle cx="120" cy="220" r="15" fill="#6B7280" />
                <circle cx="120" cy="220" r="8" fill="#9CA3AF" />
                
                {/* Rear Wheel */}
                <circle
                  cx="280"
                  cy="220"
                  r="25"
                  fill="#374151"
                  className="animate-spin"
                  style={{ 
                    animationDuration: '2s',
                    transformOrigin: '280px 220px'
                  }}
                />
                <circle cx="280" cy="220" r="15" fill="#6B7280" />
                <circle cx="280" cy="220" r="8" fill="#9CA3AF" />
                
                {/* Headlights */}
                <circle cx="90" cy="190" r="8" fill="#FEF3C7" className="animate-pulse" style={{ animationDuration: '1.5s' }} />
                <circle cx="90" cy="210" r="6" fill="#F59E0B" className="animate-pulse" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }} />
                
                {/* Motion Lines */}
                <g className="animate-pulse" style={{ animationDuration: '1s' }}>
                  <line x1="40" y1="180" x2="70" y2="180" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="35" y1="200" x2="65" y2="200" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="40" y1="220" x2="70" y2="220" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="5,5" />
                </g>
                
                {/* Floating Elements */}
                <circle cx="350" cy="100" r="3" fill="#FF6B2C" className="animate-bounce" style={{ animationDelay: '0s' }} />
                <circle cx="370" cy="130" r="2" fill="#14B8A6" className="animate-bounce" style={{ animationDelay: '0.5s' }} />
                <circle cx="360" cy="80" r="2.5" fill="#2563EB" className="animate-bounce" style={{ animationDelay: '1s' }} />
              </svg>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-support/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
