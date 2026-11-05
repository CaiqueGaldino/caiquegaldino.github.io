'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { KineticLetters, formatBrasiliaTime } from './effects';
import { EMAIL, GITHUB, manifesto } from './data';

export default function Footer() {
  const [time, setTime] = useState(() => formatBrasiliaTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(formatBrasiliaTime()), 15000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contato">
      {/* Manifesto de encerramento */}
      <div className="flex flex-col items-center text-center mb-24 pt-8">
        <p className="text-xs md:text-sm tracking-[0.16em] text-white/50 mb-6 uppercase max-w-lg leading-relaxed font-mono">
          {manifesto.intention}
        </p>

        <div className="footer__brand">
          <span>Kurupira</span>
          <small>/ labs</small>
        </div>

        <p className="text-xs md:text-sm text-white/40 tracking-[0.12em] uppercase font-mono">
          {manifesto.motto}
        </p>
      </div>

      <div className="footer__label eyebrow">
        Tem uma ideia em mente?
      </div>

      <a
        href={`mailto:${EMAIL}?subject=Projeto com Kurupira Labs`}
        className="footer__big"
        data-cursor="Conversar"
      >
        <span className="sr-only">Vamos conversar</span>
        <span aria-hidden="true">
          <KineticLetters text="VAMOS CONVERSAR" k={380} />
        </span>
      </a>

      <div className="footer__row">
        <a href={`mailto:${EMAIL}`} className="footer__email" data-cursor="Enviar">
          {EMAIL}
        </a>

        <div className="footer__socials">
          <Link href="/blog" data-cursor="Blog">
            Blog
          </Link>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Abrir"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/caique-galdino/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Abrir"
          >
            LinkedIn
          </a>
        </div>

        <span>
          © {new Date().getFullYear()} Kurupira Labs · Feito com <span className="text-[#ff4d15]">♥</span>
        </span>

        <span suppressHydrationWarning>
          São Paulo <span style={{ opacity: 0.5 }}>/</span> {time || '12:00'}
        </span>

        <button
          type="button"
          onClick={scrollToTop}
          className="footer__top"
          data-cursor="Topo"
        >
          Voltar ao topo ↑
        </button>
      </div>
    </footer>
  );
}
