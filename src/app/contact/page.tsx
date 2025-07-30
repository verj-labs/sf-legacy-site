import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'Phone',
      detail: '(905) 749-4061',
      description: 'Call us during business hours',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      action: 'sms:+19057494061'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center text-sm text-white/80 justify-center mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're here to help you find your perfect vehicle. Contact us today to learn more 
              about our inventory, financing options, or to schedule a test drive.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you. We're always ready to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-primary group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-50 rounded-full group-hover:bg-primary/10 transition-colors">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <div className="text-primary font-medium mb-2">
                  {method.detail}
                </div>
                <p className="text-gray-600 text-sm">
                  {method.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Location & Hours */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Visit Our Showroom
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Address</div>
                    <div className="text-gray-600">
                      350 Highway #8<br />
                      Stoney Creek, Ontario L8G 1E8
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Business Hours</div>
                    <div className="text-gray-600 space-y-1">
                      <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                      <div>Saturday: 10:00 AM - 5:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Parking</div>
                    <div className="text-gray-600">
                      Free customer parking available on-site
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Skeleton */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Follow Us
              </h3>
              
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Social media links coming soon
              </p>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
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

        {/* CTA Section */}
        <CTABanner />
      </div>

      <Footer />
    </div>
  )
}
