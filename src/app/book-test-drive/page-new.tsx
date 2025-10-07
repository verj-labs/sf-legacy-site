import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TestDriveFlow from '@/components/TestDriveFlow'

export const metadata = {
  title: 'Book a Test Drive - SF Legacy Motors',
  description: 'Schedule a test drive for your next vehicle at SF Legacy Motors. Experience your future car in person with our easy booking system.',
}

export default function BookTestDrive() {
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
              <span>Test Drive</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Book a Test Drive
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Experience your future car in person—schedule a test drive today. 
              Nothing beats getting behind the wheel to see how a vehicle feels and performs.
            </p>
          </div>
        </div>
      </section>

      {/* Test Drive Flow Component */}
      <TestDriveFlow />

      <Footer />
    </div>
  )
}
