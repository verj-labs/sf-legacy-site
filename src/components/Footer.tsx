import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-h4 font-heading font-semibold mb-6 text-white">SF Legacy Autos</h3>
            <p className="text-body-m text-white/90 mb-6 leading-relaxed max-w-md">
              Your trusted partner for quality used vehicles in San Francisco. 
              We're committed to providing exceptional service and reliable cars.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-body-s text-white/80">
                <svg className="w-4 h-4 mr-2 text-brand-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+19057494061" className="text-brand-300 hover:text-accent transition-colors duration-fast">
                  (905) 749-4061
                </a>
              </div>
              <div className="flex items-center text-body-s text-white/80">
                <svg className="w-4 h-4 mr-2 text-brand-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:sales@starfallmotors.com" className="text-brand-300 hover:text-accent transition-colors duration-fast">
                  sales@starfallmotors.com
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-md flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-fast">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-md flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-fast">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-md flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-fast">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-body-m font-heading font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-body-s text-white/80 hover:text-accent transition-colors duration-fast">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="text-body-s text-white/80 hover:text-accent transition-colors duration-fast">
                  Inventory
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-body-s text-white/80 hover:text-accent transition-colors duration-fast">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="/trade-in" className="text-body-s text-white/80 hover:text-accent transition-colors duration-fast">
                  Trade-In
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-body-s text-white/80 hover:text-accent transition-colors duration-fast">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-body-s text-white/80 hover:text-accent transition-colors duration-fast">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-body-m font-heading font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-body-s text-white/80 hover:text-accent transition-colors duration-fast">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/book-test-drive" className="text-body-s text-white/80 hover:text-accent transition-colors duration-fast">
                  Book Test Drive
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-body-s text-white/80 hover:text-accent transition-colors duration-fast">
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-body-s text-white/80 hover:text-accent transition-colors duration-fast">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Legal Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-body-s text-white/70 text-center md:text-left">
            © 2024 SF Legacy Autos. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="/faq" className="text-body-s text-white/60 hover:text-accent transition-colors duration-fast">
              FAQ
            </Link>
            <Link href="#" className="text-body-s text-white/60 hover:text-accent transition-colors duration-fast">
              Privacy Policy
            </Link>
            <Link href="#" className="text-body-s text-white/60 hover:text-accent transition-colors duration-fast">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}