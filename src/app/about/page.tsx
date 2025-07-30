'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Muhammad Asad Nasir Khan',
      role: 'Co-Founder',
      image: '/asset/asad.jpg',
      bio: 'Muhammad Asad Nasir Khan is the Co-Founder of SF Legacy Motors Inc. Asad is also Co-Founder and Director of Innovative Visa Solutions Immigration. He is a Regulated Canadian Immigration Consultant, registered licensed member of the ICCRC (Immigration Consultants of Canada Regulatory Council), and a proud member of the Canadian Association of Professional Immigration Consultants. He has helped many new immigrants settle in Canada with post landing services and this Auto business is part of that.',
      certifications: ['ICCRC Licensed', 'Immigration Consultant']
    },
    {
      name: 'Muhammad Fahad Khan',
      role: 'Co-Founder & COO',
      image: '/asset/fahad.jpg',
      bio: 'Muhammad Fahad Khan is the Co-Founder of SF Legacy Motors and acts as the Chief Operating Officer of the company. Mr. Fahad is responsible for all the business operations as well as handling all the finance aspect of the Business. Mr. Fahad specialized in and is a Licensed Finance Consultant. Fahad deals with every customer one-on-one to provide the best possible financial scenario in the purchase of the vehicle. He has run Auto Dealerships in New York & Houston, USA.',
      certifications: ['Licensed Finance Consultant', 'Auto Dealer Experience']
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
              About SF Legacy Motors Inc
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Premier auto dealership serving Ontario with transparency, quality vehicles, and unparalleled customer service.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About SF Legacy Motors */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              About SF Legacy Motors Inc
            </h2>
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 space-y-6">
              <p className="text-xl leading-relaxed">
                SF Legacy Motors Inc is a premier auto dealership located at <strong>6610 Turner Valley Rd, Mississauga, Ontario</strong>. 
                Our dealership is serving customers in Ontario, specifically the GTA, Hamilton & nearby areas and has established 
                a reputation for delivering top-quality vehicles and unparalleled customer service.
              </p>
              <p className="text-lg leading-relaxed">
                We believe in transparency and honesty. That's why we offer competitive pricing and no-pressure sales tactics. 
                We understand that purchasing a vehicle can be a big investment, which is why we want to make the process as 
                stress-free and straightforward as possible.
              </p>
              <p className="text-lg leading-relaxed">
                SF Motors have proudly been serving Houston and surrounding areas of Texas, USA, bringing our expertise and 
                commitment to excellence to the Canadian market.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're guided by core values that shape every interaction and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Transparency & Honesty
              </h3>
              <p className="text-gray-600 text-sm">
                We believe in transparency and honesty. That's why we offer competitive pricing and no-pressure sales tactics.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Top-Quality Vehicles
              </h3>
              <p className="text-gray-600 text-sm">
                We have established a reputation for delivering top-quality vehicles and unparalleled customer service.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Stress-Free Experience
              </h3>
              <p className="text-gray-600 text-sm">
                We understand that purchasing a vehicle can be a big investment, which is why we want to make the process as stress-free and straightforward as possible.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600 text-sm">
                Our knowledgeable and friendly team is dedicated to helping our customers find the perfect vehicle to fit their needs and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              The Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our knowledgeable and friendly team is dedicated to helping our customers find the perfect vehicle 
              to fit their needs and budget. Our finance team is also on hand to help you find the best financing 
              options and secure the best interest rates available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.certifications.map((cert, idx) => (
                          <span
                            key={idx}
                            className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-4">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Get In Touch With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Looking to buy, sell or trade-in your car? Get in touch with us now.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">Call us now</p>
                  <a href="tel:+19057494061" className="text-primary hover:text-primary/80 text-lg font-medium">
                    +1 (905) 749-4061
                  </a>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">Visit us anytime</p>
                  <p className="text-gray-600">
                    6610 Turner Valley Rd, Unit# 202L,<br />
                    Mississauga, ON L5N 2P1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Experience the SF Legacy Motors Inc Difference
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Visit our showroom in Mississauga and meet our team. We'd love to help you find your next vehicle 
            and show you why we're Ontario's trusted choice for quality used cars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inventory"
              className="bg-accent text-primary px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Browse Our Inventory
            </Link>
            <Link
              href="/test-drive"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Schedule Test Drive
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
