import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:h-[75vh] flex items-center py-8 sm:py-12 lg:py-16">
      {/* Enhanced gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-400  to-primary-700"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          

          {/* Left: Text Stack with beautiful typography */}
          <div className="flex-1 lg:flex-[0_0_55%] max-w-3xl text-center lg:text-left">
            {/* Main Heading with gradient text */}
            <h1 className="text-3xl sm:text-4xl lg:text-h1 font-heading font-bold mb-4 lg:mb-6 leading-tight">
              <span className="text-ink">Buy Used Cars.</span>
              <br />
              <span>
                Shop With
                <span className="ml-2 lg:ml-3 bg-gradient-to-r from-blackContrast to-primary-900 bg-clip-text text-transparent">
                  Confidence
                </span>
              </span>
            </h1>

            {/* Subcopy with enhanced typography */}
            <p className="text-base sm:text-lg lg:text-body-l text-body mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              Your trusted dealership for quality pre-owned vehicles. Find your perfect car with our
              extensive inventory and exceptional service.
            </p>

            {/* Contact Info */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 lg:mb-8 text-sm sm:text-base lg:text-body-m text-body">
              <div className="p-2 bg-ink/5 rounded-full">
                <svg className="w-4 h-4 text-ink" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <a
                href="tel:+19057494061"
                className="text-ink font-medium hover:text-ink/80 transition-colors duration-fast"
              >
                (905) 749-4061
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 lg:mb-12 justify-center lg:justify-start">
              <Link
                href="/book-test-drive"
                className="btn-primary bg-ink text-primary-50 hover:bg-primary-900 hover:text-black transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
              >
                Schedule Test Drive
              </Link>
              <Link
                href="/inventory"
                className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto"
              >
                View Inventory
              </Link>
            </div>

            {/* Platform Links */}
            <div className="border-t border-border pt-4 lg:pt-6">
              <p className="text-xs sm:text-ui-meta text-body/70 mb-3 lg:mb-4 text-center lg:text-left">
                We are on:
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="https://www.cargurus.ca/Cars/m-SF-LEGACY-MOTORS-sp449799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-24 sm:w-28 h-12 sm:h-14 border border-ink rounded-md hover:bg-primary-700 hover:border-ink/40 shadow-xs hover:shadow-md transition-all duration-fast group"
                >
                  <Image
                    src="/asset/hero-carguru.svg"
                    alt="CarGurus"
                    width={88}
                    height={36}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </a>
             
              </div>
            </div>
          </div>

          {/* Right: Animated Car SVG */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            {/* <div className="absolute h-full bg-brand-gradient w-[350px]"/> */}

            {/* Box that holds stuff insideclips */}
            <div className="absolute flex gap-1 h-full w-[350px] lg:h-[75vh] ">
              <div className="absolute flex gap-[2px] h-full w-[350px] lg:h-[1000px] rotate-12 top-[-200px]">
                <div className="bg-gradient-to-r from-ink/90 to-blackContrast flex-1" />
                <div className="bg-gradient-to-r from-primary-600 to-brand-300 flex-1" />
                <div className="bg-gradient-to-r from-ink to-blackContrast/90 flex-1" />
              </div>
            </div>

            <div className="relative ">
              {/* Animated Car SVG */}
              <Image
              src="/asset/hero-car-4.png"
              alt="Hero Car"
              width={1000}
              height={500}
              className="w-[1600px] h-auto transform -scale-x-100 rotate"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
