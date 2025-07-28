import Header from '@/components/Header'
import Hero from '@/components/Hero'
import VehicleCategories from '@/components/VehicleCategories'
import Features from '@/components/Features'
import FeaturedInventory from '@/components/FeaturedInventory'
import ValuePropositions from '@/components/ValuePropositions'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import BrandLogos from '@/components/BrandLogos'
import Financing from '@/components/Financing'
import SellTrade from '@/components/SellTrade'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VehicleCategories />
      <FeaturedInventory />
      <ValuePropositions />
      <Features />
      <Services />
      <Testimonials />
      <BrandLogos />
      <About />
      <Financing />
      <SellTrade />
      <Contact />
      <Footer />
    </div>
  )
}
