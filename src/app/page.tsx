import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import WhatAreExosomesSection from "@/components/WhatAreExosomesSection"
import FeaturedProducts from "@/components/FeaturedProducts"
import CategoryPreview from "@/components/CategoryPreview"
import ExosomeClassesSection from "@/components/ExosomeClassesSection"
import BenefitsSection from "@/components/BenefitsSection"
import FAQSection from "@/components/FAQSection"
import BehindTheScienceSection from "@/components/BehindTheScienceSection"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatAreExosomesSection />
        <FeaturedProducts />
        <CategoryPreview />
        <ExosomeClassesSection />
        <BenefitsSection />
        <FAQSection />
        <BehindTheScienceSection />
        <Footer />
      </main>
    </>
  )
}
