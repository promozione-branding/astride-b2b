import AboutUsSection from "@/components/home/AboutUsSection";
import CategoryShowcase from "@/components/home/Category";
import CertificatesSection from "@/components/home/CertificatesSection";
import ChairHero from "@/components/home/ChairHero";
import ChairProcessSection from "@/components/home/ChairProcessSection";
import ContactSection from "@/components/home/ContactSection";
import FAQSection from "@/components/home/FaqSetion";
import Hero from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import ReviewSection from "@/components/home/ReviewSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <AboutUsSection />
      <ChairHero />
      <WhyChooseUs />
      <ProductShowcase />
      <StatsSection />
      <CertificatesSection />
      <ChairProcessSection />
      <ReviewSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
