import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden h-[75vh] flex items-center py-16">
      {/* Enhanced gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between min-h-[75vh] ">
          {/* Left: Text Stack with beautiful typography */}
          <div className="flex-[0_0_55%] max-w-3xl">
            {/* Main Heading with gradient text */}
            <h1 className="text-h1 font-heading font-bold mb-6 leading-tight">
              <span className="text-ink">Buy Used Cars.</span>
              <br />
              <span>
                Shop With
                <span className="ml-3 bg-gradient-to-r from-brand to-brand-800 bg-clip-text text-transparent">
                  Confidence
                </span>
              </span>
            </h1>

            {/* Subcopy with enhanced typography */}
            <p className="text-body-l text-body mb-8 max-w-lg leading-relaxed font-light">
              Your trusted dealership for quality pre-owned vehicles. Find your
              perfect car with our extensive inventory and exceptional service.
            </p>

            {/* Contact Info */}
            <div className="flex items-center gap-2 mb-8 text-body-m text-body">
              <div className="p-2 bg-ink/5 rounded-full">
                <svg
                  className="w-4 h-4 text-ink"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
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
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/book-test-drive"
                className="btn-primary inline-flex items-center justify-center"
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
                  className="flex items-center justify-center w-28 h-14 bg-neutral-100 border border-border rounded-md hover:bg-neutral-200 hover:border-ink/40 shadow-xs hover:shadow-md transition-all duration-fast group"
                >
                  <Image
                    src="/asset/hero-carguru.svg"
                    alt="CarGurus"
                    width={88}
                    height={36}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  href="https://www.kijiji.ca/b-cars-trucks/canada/c174l0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-28 h-14 bg-neutral-100 border border-border rounded-md hover:bg-neutral-100 hover:border-ink/40 shadow-xs hover:shadow-md transition-all duration-fast group"
                >
                  <Image
                    src="/asset/hero-kijiji.png"
                    alt="Kijiji"
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

            <div className="absolute flex gap-2 h-full w-[350px]">
              <div className="bg-gradient-to-r from-brand-800 to-brand-700 flex-1" />
              <div className="bg-gradient-to-r from-brand-700 to-brand-600 flex-1" />
              <div className="bg-gradient-to-r from-brand-600 to-brand-500 flex-1" />
              <div className="bg-gradient-to-r from-brand-500 to-brand-400 flex-1" />
            </div>

            <div className="relative ">
              {/* Animated Car SVG */}
              <Image
                src="/asset/hero-car-1.png"
                alt="Hero Car"
                width={1000}
                height={500}
                className=" w-[1600px] h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
