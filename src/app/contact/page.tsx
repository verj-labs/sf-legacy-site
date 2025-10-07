import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import PageStartBanner from '@/components/PageStartBanner'
import PageEndBanner from '@/components/PageEndBanner'

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'Phone',
      detail: '(905) 749-4061',
      description: 'Call us during business hours',
      icon: (
        <svg className="w-6 h-6 text-text.muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: 'tel:+19057494061'
    },
    {
      title: 'Text Message',
      detail: '(905) 749-4061',
      description: 'Quick questions via text',
      icon: (
        <svg className="w-6 h-6 text-text.muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      action: 'sms:+19057494061'
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Page Start Banner */}
      <PageStartBanner
        title="Get In Touch"
        description="We're here to help you find your perfect vehicle. Contact us today to learn more about our inventory, financing options, or to schedule a test drive."
      >
        <a 
          href="tel:+19057494061"
          className="btn btn-primary"
        >
          Call (905) 749-4061
        </a>
      </PageStartBanner>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Contact Form - Left Column */}
          <ContactForm />

          {/* Contact Information - Right Column */}
          <div className="space-y-4 lg:space-y-6">
            {/* Contact Methods */}
            <div className="bg-surface.raised rounded-xl border border-border.default p-6">
              <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-text.primary mb-2">
                  How to Reach Us
                </h2>
                <p className="text-sm text-text.muted">
                  Choose the contact method that works best for you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="border border-border.default rounded-lg p-4 text-center hover:border-border.muted hover:bg-surface.hover transition-all group"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-surface.default rounded-full group-hover:bg-surface.hover transition-colors">
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-text.primary mb-1">
                      {method.title}
                    </h3>
                    <div className="text-brand.primary font-medium mb-1 text-sm">
                      {method.detail}
                    </div>
                    <p className="text-text.muted text-xs">
                      {method.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Hours */}
            <div className="bg-surface.raised rounded-xl border border-border.default p-6">
              <h3 className="text-lg font-semibold text-text.primary mb-4">
                Visit Our Showroom
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-brand.primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-text.primary text-sm mb-1">Address</div>
                    <div className="text-text.muted text-sm">
                      Unit 25, 1400 Aimco Boulevard<br />
                      Mississauga, ON L4W 4K2
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-brand.primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-text.primary text-sm mb-1">Business Hours</div>
                    <div className="text-text.muted text-sm space-y-1">
                      <div>Mon - Sat: 11:00 AM - 7:00 PM</div>
                      <div>Sunday: Appointments Only</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-brand.primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <div className="font-medium text-text.primary text-sm mb-1">Parking</div>
                    <div className="text-text.muted text-sm">
                      Free customer parking available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-surface.raised rounded-xl border border-border.default overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed/v1/place?q=sf+legacy&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SF Legacy Motors Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Page End Banner with top margin */}
        <div className="mt-4 lg:mt-8">
          <PageEndBanner 
            title="Ready to Find Your Perfect Vehicle?"
            body="Browse our inventory of quality vehicles or schedule a test drive today. We're here to help make your car buying experience seamless."
          />
        </div>
      </div>
    </div>
  )
}
