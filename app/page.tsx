'use client';

import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import Marquee from '@/components/site/Marquee';
import SelectedWork from '@/components/site/SelectedWork';
import UpClose from '@/components/site/UpClose';
import Statement from '@/components/site/Statement';
import ServiceTiles from '@/components/site/ServiceTiles';
import Process from '@/components/site/Process';
import BlogSection from '@/components/site/BlogSection';
import Community from '@/components/site/Community';
import Footer from '@/components/site/Footer';
import Cursor from '@/components/site/Cursor';
import { useReveal, useMagnet, useKinetic } from '@/components/site/effects';

export default function Home() {
  useKinetic();
  useReveal();
  useMagnet();

  return (
    <div className="site">
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <SelectedWork />
        <UpClose />
        <Statement />
        <ServiceTiles />
        <Process />
        <BlogSection />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
