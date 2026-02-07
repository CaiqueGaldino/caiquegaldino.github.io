'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import AboutLabs from '@/components/AboutLabs';
import HowICreate from '@/components/HowICreate';
import WhatAppearsHere from '@/components/WhatAppearsHere';
import WhatMovesMe from '@/components/WhatMovesMe';
import Closing from '@/components/Closing';
import Footer from '@/components/Footer';
import LiquidEther from '@/components/LiquidEther';

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Liquid Ether Background for entire site */}
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={['#dc2626', '#ef4444', '#f87171']}
          mouseForce={15}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.3}
          autoIntensity={1.5}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        {/* Dark overlay to keep content readable */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Projects />
        <AboutLabs />
        <HowICreate />
        <WhatAppearsHere />
        <WhatMovesMe />
        <Closing />
        <Footer />
      </div>
    </div>
  );
}
