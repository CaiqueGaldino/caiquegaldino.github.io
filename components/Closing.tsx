'use client';

export default function Closing() {
  return (
    <section
      id="closing"
      style={{
        padding: '160px 32px 120px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
      }}
    >
      {/* Thin fire line center-top */}
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #f97316, transparent)',
        }}
      />

      <p
        style={{
          fontSize: 'clamp(13px, 1.4vw, 15px)',
          letterSpacing: '0.15em',
          color: 'rgba(245,245,245,0.2)',
          marginBottom: '28px',
        }}
      >
        A KURUPIRA LABS NÃO É SOBRE CHEGAR RÁPIDO.<br />
        É SOBRE IR COM INTENÇÃO.
      </p>

      <div
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(56px, 9vw, 120px)',
          lineHeight: 0.9,
          background: 'linear-gradient(120deg, #fbbf24 0%, #f97316 50%, #dc2626 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '32px',
        }}
      >
        Kurupira Labs
      </div>

      <p style={{ fontSize: '13px', color: 'rgba(245,245,245,0.2)', letterSpacing: '0.1em' }}>
        Criar por curiosidade · Construir por prazer
      </p>
    </section>
  );
}
