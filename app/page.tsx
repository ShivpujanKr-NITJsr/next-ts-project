// import Image from "next/image";
'use client';
import AnimatedSection from '@/components/AnimatedSection';
// import { motion } from 'motion/react';

import FAQ from '@/components/FAQ';
import FloatingSupport from '@/components/FloatingSupport';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import KeyFeatures from '@/components/KeyFeatures';
import LogoCarousel from '@/components/LogoCaraousal';
// import MicroSlider from '@/components/MicroSlider';
// import HeroV3 from '@/components/HeroV3';
// import HeroTools3D from '@/components/HeroSectionV2';
// import HeroV2 from '@/components/HeroV2';
// import LeftPage from '@/components/LeftPage';
// import HeroSection from '@/components/HeroSectionV2';
// import { HeroSection } from '@/components/HeroSection';
// import Navbar from '@/components/Navbar';
// import NavbarV2 from '@/components/NavbarV2';
import Pricing from '@/components/Pricing';
import SeoToolsGrid from '@/components/SeoToolsGridGroupBuy';
// import PricingCarousel from '@/components/PricingCaraousal';
// import RightPage from '@/components/RightPage';
import Testimonials from '@/components/Testimonialls';
// import ToolList from '@/components/ToolList';
import ToolsCategorized from '@/components/ToolsCategorized';
import TrustpilotRating from '@/components/TrustPilotRating';
// import { LampContainer } from '@/components/ui/Lamp';
import WhyChoose from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-0% from-[#0B061F] to-100%-[#0B0B14]'>
      <main className='scroll-smooth'>
        <FloatingSupport />

        <section id='hero'>
          <Hero /> <LogoCarousel />
        </section>

        <section id='pricing'>
          <AnimatedSection>
            <Pricing />
          </AnimatedSection>
        </section>
        <section id='tools-group-buy'>
          <AnimatedSection>
            <SeoToolsGrid />
          </AnimatedSection>
        </section>

        <section id='tools'>
          {/* <AnimatedSection> */}
          <ToolsCategorized />
          {/* </AnimatedSection> */}
        </section>
        <section id='how-it-works'>
          <AnimatedSection>
            <HowItWorks />
          </AnimatedSection>
        </section>
        <section id='key-features'>
          {/* <MicroSlider /> */}
          <AnimatedSection>
            <KeyFeatures />
          </AnimatedSection>
        </section>
        <section id='why-choose-us'>
          <AnimatedSection>
            <WhyChoose />
          </AnimatedSection>
        </section>
        <section id='trust-pilot-ratings'>
          <AnimatedSection>
            <TrustpilotRating />
          </AnimatedSection>
        </section>
        <section id='testimonials'>
          <AnimatedSection>
            <Testimonials />
          </AnimatedSection>
        </section>
        <section id='faq'>
          <AnimatedSection>
            <FAQ />
          </AnimatedSection>
        </section>
      </main>
    </div>
  );
}
