'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import FlameIcon from './FlameIcon';
import { Button } from './ui/button';
import { Particles } from './ui/particles';

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-hero-item', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.gsap-hero-glow', {
        scale: 0,
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={container}
      className="relative flex items-center justify-center min-h-screen px-8 overflow-hidden"
    >
      <Particles
        className="absolute inset-0 bg-transparent z-0"
        quantity={120}
        ease={80}
        color="#e85d04"
        refresh
      />

      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0 gsap-hero-glow" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center mt-[10vh] flex flex-col items-center">
        <div className="gsap-hero-item mb-8">
          <FlameIcon size={96} className="text-primary drop-shadow-2xl" />
        </div>

        <h1 className="gsap-hero-item text-6xl md:text-[7rem] lg:text-[10rem] font-bold tracking-tighter mb-8 fire-text leading-none uppercase drop-shadow-md">
          Kurupira Labs
        </h1>

        <p className="gsap-hero-item text-lg md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
          Apps, sites e vontade de transformar ideias em soluções reais.
        </p>

        <div className="gsap-hero-item flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="rounded-xl px-10 h-14 text-sm font-semibold tracking-wider shadow-[0_8px_20px_-6px_rgba(232,93,4,0.6)] hover:-translate-y-1 hover:shadow-[0_12px_24px_-6px_rgba(232,93,4,0.8)] transition-all bg-gradient-to-br from-primary to-flame-700"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VER PROJETOS
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl px-10 h-14 text-sm font-semibold tracking-wider bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 hover:text-white transition-all backdrop-blur-md"
            onClick={() => document.getElementById('about-labs')?.scrollIntoView({ behavior: 'smooth' })}
          >
            SOBRE O LABS
          </Button>
        </div>

        <div className="gsap-hero-item mt-24 flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent anim-glow" />
        </div>
      </div>
    </section>
  );
}
