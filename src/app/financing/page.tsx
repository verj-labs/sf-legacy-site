import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FinancingForm from '@/components/FinancingForm'
import CTABanner from '@/components/CTABanner'

export default function FinancingPage() {

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
              <span>Financing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Apply For Used Car Financing
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              We work with multiple banks and organizations to get you best possible solution for your financing needs. 
              We have solutions for good and bad credit scores with market competitive interest rates.
            </p>
            <p className="text-lg text-white/80 mt-4">
              Apply now by completing the below 4 steps. Our team will follow up with you instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Financing Form Component */}
      <FinancingForm />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <CTABanner 
          title="Ready to Drive Your Dream Car?"
          description="Explore our inventory of quality vehicles and schedule a test drive with your approved financing."
        />
      </div>

      <Footer />
    </div>
  )
}
