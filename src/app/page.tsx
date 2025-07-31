import Hero from "@/components/Hero";
import FeaturedInventory from "@/components/FeaturedInventory";
import SimpleFourSteps from "@/components/SimpleFourSteps";
import SatisfactionGuarantee from "@/components/SatisfactionGuarantee";
import GoogleReviews from "@/components/GoogleReviews";
import WarrantyFinancingSection from "@/components/WarrantyFinancingSection";
import PageEndBanner from "@/components/PageEndBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedInventory />
      <SimpleFourSteps />
      <SatisfactionGuarantee />
      <GoogleReviews />
      <WarrantyFinancingSection />
      <section className="section-padding bg-background-muted">
        <PageEndBanner />
      </section>
    </>
  );
}
