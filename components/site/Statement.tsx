'use client';

import { useRef, useEffect } from 'react';

const words = [
  { text: 'A' },
  { text: 'Kurupira' },
  { text: 'Labs' },
  { text: 'surgiu' },
  { text: 'do' },
  { text: 'interesse', italic: true },
  { text: 'genuíno', italic: true },
  { text: 'por' },
  { text: 'tecnologia.' },
  { text: 'De' },
  { text: 'desmontar,' },
  { text: 'errar' },
  { text: 'e' },
  { text: 'tentar' },
  { text: 'de' },
  { text: 'novo.' },
  { text: 'Não' },
  { text: 'é' },
  { text: 'sobre' },
  { text: 'chegar' },
  { text: 'rápido.' },
  { text: 'É' },
  { text: 'sobre' },
  { text: 'ir' },
  { text: 'com' },
  { text: 'intenção.', accent: true },
];

export default function Statement() {
  const containerRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / (totalScrollable || 1)));

      const totalWords = words.length;
      wordRefs.current.forEach((wordEl, idx) => {
        if (!wordEl) return;
        const wordStart = idx / totalWords;
        const wordEnd = (idx + 1) / totalWords;
        const localProgress = Math.max(0, Math.min(1, (progress - wordStart) / (wordEnd - wordStart)));
        // Opacidade base de 0.45 (sempre nítida e legível) subindo para 1.0
        const opacity = 0.45 + 0.55 * localProgress;
        wordEl.style.opacity = opacity.toFixed(2);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="statement" id="sobre" ref={containerRef}>
      <div className="statement__sticky">
        <span className="eyebrow eyebrow--accent statement__label">
          (Sobre a Kurupira Labs)
        </span>
        <p className="statement__text">
          <span className="sr-only">
            A Kurupira Labs surgiu do interesse genuíno por tecnologia. De desmontar, errar e tentar de novo. Não é sobre chegar rápido. É sobre ir com intenção.
          </span>
          {words.map((w, i) => (
            <span
              key={i}
              ref={(node) => {
                wordRefs.current[i] = node;
              }}
              className={`statement__word ${w.italic ? 'statement__word--italic' : ''} ${
                w.accent ? 'statement__word--accent' : ''
              }`}
              style={{ opacity: 0.45 }}
              aria-hidden="true"
            >
              {w.text}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
