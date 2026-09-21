'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import AboutLabs from '@/components/AboutLabs';
import Closing from '@/components/Closing';
import Footer from '@/components/Footer';
import BetaTestersCard from '@/components/BetaTestersCard';

export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden">
      <Header />
      <Hero />
      <Projects />
      <AboutLabs />
      <Closing />
      <BetaTestersCard />
      <Footer />
    </div>
  );
}
