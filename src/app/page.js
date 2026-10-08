import FurnitureRules from "@/components/home/About";
import AboutUsSection from "@/components/home/AboutUsSection";
import CategoryShowcase from "@/components/home/Category";
import CategorySlider from "@/components/home/CategorySlider";
import Exhibition from "@/components/home/Exhibition";
import ChairHero from "@/components/home/ChairHero";
import ChairProcessSection from "@/components/home/ChairProcessSection";
import ContactSection from "@/components/home/ContactSection";
import FAQSection from "@/components/home/FaqSetion";
import Hero from "@/components/home/Hero";
import ProductCollections from "@/components/home/ProductCollections";
import ProductShowcase from "@/components/home/ProductShowcase";
import ReviewSection from "@/components/home/ReviewSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySlider />
      <Exhibition />
      <FurnitureRules />
      <StatsSection />
      <CategoryShowcase />
      <AboutUsSection />
      <ChairHero />
      <WhyChooseUs />
      <ProductShowcase />
      <ProductCollections />
      {/* <CertificatesSection /> */}
      <ChairProcessSection />
      <Exhibition />
      <ReviewSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
