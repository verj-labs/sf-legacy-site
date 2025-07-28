'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Michael Johnson',
      role: 'Owner & General Manager',
      image: '/api/placeholder/300/300',
      bio: 'Michael founded SF Legacy Autos in 2005 with a vision to provide honest, transparent automotive sales. With over 20 years in the industry, he believes in building lasting relationships with customers.',
      certifications: ['ASE Certified', 'NADA Member']
    },
    {
      name: 'Sarah Chen',
      role: 'Sales Manager',
      image: '/api/placeholder/300/300',
      bio: 'Sarah has been with SF Legacy Autos for 8 years and specializes in helping customers find the perfect vehicle for their needs and budget. She\'s passionate about customer education.',
      certifications: ['Certified Sales Professional', 'Finance Specialist']
    },
    {
      name: 'David Rodriguez',
      role: 'Finance Manager',
      image: '/api/placeholder/300/300',
      bio: 'David ensures our customers get the best financing options available. With partnerships across multiple lenders, he works to find solutions for all credit situations.',
      certifications: ['Certified Finance Manager', 'Credit Specialist']
    },
    {
      name: 'Lisa Thompson',
      role: 'Customer Relations',
      image: '/api/placeholder/300/300',
      bio: 'Lisa coordinates our service appointments and ensures every customer has an exceptional experience from purchase through ongoing maintenance.',
      certifications: ['Customer Service Excellence', 'Service Advisor']
    }
  ]

  const values = [
    {
      title: 'Transparency',
      description: 'We believe in honest, upfront communication about every aspect of our vehicles and services.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Quality',
      description: 'Every vehicle in our inventory undergoes a thorough inspection to meet our high standards.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
        </svg>
      )
    },
    {
      title: 'Service',
      description: 'Our relationship with customers extends far beyond the initial sale with ongoing support.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Community',
      description: 'As a local business, we\'re committed to giving back to the San Francisco community.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ]

  const certifications = [
    {
      name: 'Better Business Bureau',
      rating: 'A+ Rating',
      image: '/api/placeholder/120/80',
      description: 'Accredited business with highest rating'
    },
    {
      name: 'California DMV Licensed',
      rating: 'Licensed Dealer',
      image: '/api/placeholder/120/80',
      description: 'State licensed automotive dealer'
    },
    {
      name: 'NIADA Member',
      rating: 'Professional Member',
      image: '/api/placeholder/120/80',
      description: 'National Independent Automobile Dealers Association'
    },
    {
      name: 'CarGurus Certified',
      rating: 'Top Rated Dealer',
      image: '/api/placeholder/120/80',
      description: 'Recognized for excellent customer service'
    }
  ]

  const milestones = [
    {
      year: '2005',
      title: 'Founded',
      description: 'Michael Johnson establishes SF Legacy Autos with a commitment to honest automotive sales.'
    },
    {
      year: '2008',
      title: 'Expansion',
      description: 'Moved to our current location on Auto Row, doubling our inventory capacity.'
    },
    {
      year: '2012',
      title: '1,000 Cars Sold',
      description: 'Reached milestone of 1,000 satisfied customers with successful vehicle purchases.'
    },
    {
      year: '2015',
      title: 'Service Department',
      description: 'Added full-service maintenance and repair facility to better serve our customers.'
    },
    {
      year: '2018',
      title: 'Digital Innovation',
      description: 'Launched online inventory system and digital financing applications.'
    },
    {
      year: '2023',
      title: '5,000+ Happy Customers',
      description: 'Celebrated serving over 5,000 customers with continued growth and expansion.'
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
              <span>About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About SF Legacy Autos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Family-owned and operated since 2005, we've been serving the San Francisco community 
              with quality pre-owned vehicles and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  SF Legacy Autos was born from a simple belief: car buying should be an enjoyable, 
                  transparent experience. Founded by Michael Johnson in 2005, our dealership started 
                  as a small operation with big dreams and an unwavering commitment to customer satisfaction.
                </p>
                <p>
                  After working for large dealership chains for over a decade, Michael saw an opportunity 
                  to do things differently. He wanted to create a place where customers felt respected, 
                  informed, and confident in their purchase decisions. What started as a small lot with 
                  just 20 vehicles has grown into one of San Francisco's most trusted independent dealerships.
                </p>
                <p>
                  Today, we're proud to be a family-owned business that has helped over 5,000 customers 
                  find their perfect vehicle. Our success is built on the relationships we've formed and 
                  the trust we've earned in our community.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <img
                src="/api/placeholder/600/400"
                alt="SF Legacy Autos dealership exterior"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're guided by core values that shape every interaction and decision we make.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                "To provide our customers with quality pre-owned vehicles, transparent pricing, 
                and exceptional service while building lasting relationships based on trust and integrity. 
                We strive to make car buying a positive experience that exceeds expectations."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in San Francisco automotive.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                      <div className="text-2xl font-heading font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team is here to help you find the perfect vehicle and ensure 
              an exceptional experience from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium text-sm mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Certifications & Memberships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards through professional certifications and industry memberships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-16 mx-auto object-contain"
                  />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">
                  {cert.name}
                </h3>
                <div className="text-primary font-medium text-sm mb-2">
                  {cert.rating}
                </div>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Involvement */}
        <section className="mb-20">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                  Community Involvement
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    As a local business, we believe in giving back to the San Francisco community 
                    that has supported us throughout the years. We're proud to be involved in 
                    various community initiatives and charitable causes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Annual scholarship program for local high school graduates</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Support for local food banks and homeless shelters</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Sponsorship of youth sports leagues and community events</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Environmental initiatives including vehicle recycling programs</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/api/placeholder/500/400"
                  alt="Community involvement"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Experience the SF Legacy Difference
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Visit our showroom and meet our team. We'd love to help you find your next vehicle 
            and show you why thousands of customers have chosen SF Legacy Autos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inventory"
              className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Browse Our Inventory
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Schedule a Visit
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
