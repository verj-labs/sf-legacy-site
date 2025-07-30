import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedInventory from "@/components/FeaturedInventory";
import SimpleFourSteps from "@/components/SimpleFourSteps";
import SatisfactionGuarantee from "@/components/SatisfactionGuarantee";
import GoogleReviews from "@/components/GoogleReviews";
import WarrantyFinancingSection from "@/components/WarrantyFinancingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedInventory />
      <SimpleFourSteps />
      <SatisfactionGuarantee />
      <GoogleReviews />
      <WarrantyFinancingSection />
      <Footer />
    </div>
  );
}
