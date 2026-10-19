'use client';

const items = [
  'Kurupira Labs',
  'Criar por Curiosidade',
  'Construir por Prazer',
  'Apps Mobile',
  'Next.js',
  'Android',
  'Farol Capital',
  'Fitness Exclusive',
  'Oasis',
  'Beatriz Silvestre',
  'Daily Tasks',
  'Bom Dia Mensagens',
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" style={{ animation: 'marqueeScroll 35s linear infinite' }}>
        <div className="marquee__copy">
          {items.map((word, i) => (
            <span key={i} style={{ display: 'contents' }}>
              <span>{word}</span>
              <span className="marquee__diamond" />
            </span>
          ))}
        </div>
        <div className="marquee__copy">
          {items.map((word, i) => (
            <span key={`dup-${i}`} style={{ display: 'contents' }}>
              <span>{word}</span>
              <span className="marquee__diamond" />
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
