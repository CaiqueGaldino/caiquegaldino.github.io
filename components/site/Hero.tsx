'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import FlameIcon from '@/components/FlameIcon';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação de entrada suave dos elementos da hero
      gsap.from('.hero-anim-top', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1,
      });

      gsap.from('.hero-anim-letter', {
        y: '105%',
        opacity: 0,
        stagger: 0.03,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.hero-anim-bottom', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.45,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="inicio" ref={heroRef}>
      <div className="hero__glow" aria-hidden="true" />

      {/* Top Eyebrow */}
      <div className="hero__top eyebrow hero-anim-top">
        <span className="flex items-center gap-2">
          <FlameIcon size={16} className="text-[#ff4d15]" />
          <span>Kurupira Labs / 2026</span>
        </span>
        <span style={{ textAlign: 'center' }}>Ideias reais em soluções práticas</span>
        <span>São Paulo, BR</span>
      </div>

      {/* Monumental Headline: KURUPIRA LABS */}
      <h1 className="hero__name">
        <span className="hero__line">
          <span className="sr-only">KURUPIRA </span>
          <span aria-hidden="true" className="inline-flex overflow-hidden">
            {'KURUPIRA'.split('').map((ch, i) => (
              <span
                key={i}
                data-char={ch}
                data-k={420}
                className="hero-anim-letter kinetic__letter inline-block text-white hover:text-[#ff4d15] transition-colors duration-200 cursor-default select-none font-extrabold"
                style={{ fontVariationSettings: '"wdth" 72, "wght" 800' }}
              >
                {ch}
              </span>
            ))}
          </span>
        </span>

        <span className="hero__line hero__line--second">
          <span className="sr-only">LABS</span>
          <span aria-hidden="true" className="inline-flex overflow-hidden">
            {'LABS'.split('').map((ch, i) => (
              <span
                key={i}
                data-char={ch}
                data-k={420}
                className="hero-anim-letter kinetic__letter inline-block text-[#ff4d15] hover:text-white transition-colors duration-200 cursor-default select-none font-extrabold"
                style={{ fontVariationSettings: '"wdth" 72, "wght" 800' }}
              >
                {ch}
              </span>
            ))}
          </span>
        </span>
      </h1>

      {/* Bottom Row com textos autênticos da Kurupira Labs */}
      <div className="hero__bottom">
        <p className="hero__intro hero-anim-bottom">
          Apps, sites e vontade de transformar ideias em soluções reais.
        </p>

        <span className="hero__scroll eyebrow hero-anim-bottom">
          ↓ Role suavemente
        </span>

        <div className="hero__end hero-anim-bottom flex items-center gap-3">
          <a
            href="#projetos"
            className="pill pill--fill hero__button"
            data-magnet
            data-cursor="Ver"
          >
            VER PROJETOS →
          </a>
          <a
            href="#sobre"
            className="pill hero__button"
            data-magnet
            data-cursor="Sobre"
          >
            SOBRE O LABS
          </a>
        </div>
      </div>
    </section>
  );
}
