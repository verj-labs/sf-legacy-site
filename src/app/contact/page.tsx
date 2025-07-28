'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    interestedVehicle: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: 'email',
      interestedVehicle: ''
    })
    setIsSubmitting(false)
    
    // Show success message (in real app, handle this properly)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
  }

  const contactMethods = [
    {
      title: 'Phone',
      detail: '(555) 123-4567',
      description: 'Call us during business hours',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: 'tel:+15551234567'
    },
    {
      title: 'Email',
      detail: 'sales@sflegacyautos.com',
      description: 'Send us an email anytime',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: 'mailto:sales@sflegacyautos.com'
    },
    {
      title: 'Text Message',
      detail: '(555) 123-4567',
      description: 'Quick questions via text',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      action: 'sms:+15551234567'
    }
  ]

  const departments = [
    {
      name: 'Sales',
      phone: '(555) 123-4567',
      email: 'sales@sflegacyautos.com',
      hours: 'Mon-Sat: 9AM-7PM, Sun: 11AM-5PM'
    },
    {
      name: 'Finance',
      phone: '(555) 123-4568',
      email: 'finance@sflegacyautos.com',
      hours: 'Mon-Fri: 9AM-6PM, Sat: 9AM-5PM'
    },
    {
      name: 'Service',
      phone: '(555) 123-4569',
      email: 'service@sflegacyautos.com',
      hours: 'Mon-Fri: 7AM-6PM, Sat: 8AM-4PM'
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
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    value={formData.preferredContact}
                    onChange={(e) => handleChange('preferredContact', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="inventory">Inventory Question</option>
                  <option value="financing">Financing Information</option>
                  <option value="trade-in">Trade-In Inquiry</option>
                  <option value="service">Service Appointment</option>
                  <option value="test-drive">Schedule Test Drive</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interested Vehicle (Optional)
                </label>
                <input
                  type="text"
                  value={formData.interestedVehicle}
                  onChange={(e) => handleChange('interestedVehicle', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 2022 Toyota Camry or Stock #T24001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please let us know how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                We typically respond to messages within 24 hours during business days.
              </p>
            </form>
          </div>

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
                      123 Auto Row<br />
                      San Francisco, CA 94102
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
                      <div>Monday - Friday: 9:00 AM - 7:00 PM</div>
                      <div>Saturday: 9:00 AM - 6:00 PM</div>
                      <div>Sunday: 11:00 AM - 5:00 PM</div>
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

            {/* Department Contacts */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Department Contacts
              </h3>
              
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="font-medium text-gray-900 mb-2">{dept.name}</div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Phone: <span className="text-primary">{dept.phone}</span></div>
                      <div>Email: <span className="text-primary">{dept.email}</span></div>
                      <div>Hours: {dept.hours}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Google Maps integration would go here</p>
                  <a 
                    href="https://maps.google.com/?q=123+Auto+Row,+San+Francisco,+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary hover:text-primary/80 font-medium"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directions */}
        <section className="mt-20">
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
              Directions to Our Dealership
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">From Downtown SF</h4>
                <p className="text-gray-600 text-sm">
                  Take Geary Blvd west to Van Ness Ave. Turn right on Van Ness, 
                  then left on Auto Row. We're on the right side.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">From Golden Gate Bridge</h4>
                <p className="text-gray-600 text-sm">
                  Take US-101 S to Van Ness Ave exit. Continue on Van Ness, 
                  turn right on Auto Row. Look for our sign on the left.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Public Transportation</h4>
                <p className="text-gray-600 text-sm">
                  Take Muni bus lines 47 or 49 to the Van Ness & Auto Row stop. 
                  We're just a 2-minute walk from the bus stop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Find Your Perfect Vehicle?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Don't wait – contact us today to schedule a test drive, get financing information, 
              or learn more about our extensive inventory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inventory"
                className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Browse Inventory
              </Link>
              <a
                href="tel:+15551234567"
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
