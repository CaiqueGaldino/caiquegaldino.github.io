'use client';

const steps = [
  { n: '01', title: 'Ideias',      body: 'Tudo começa com uma pergunta genuína ou uma dor que precisa ser resolvida.' },
  { n: '02', title: 'Protótipos', body: 'Transformamos perguntas em código. Rápido, imperfeito, funcional.' },
  { n: '03', title: 'Aprendizado', body: 'Cada projeto — lançado ou não — deixa uma lição. É o combustível do próximo.' },
];

const principles = [
  'Curiosidade antes de tudo',
  'Simplicidade acima de complexidade',
  'Aprender fazendo',
  'Evoluir um pouco todo dia',
];

export default function AboutLabs() {
  return (
    <section id="about-labs" style={{ padding: '120px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Label */}
        <p style={{ fontSize: '12px', letterSpacing: '0.2em', color: '#f97316', marginBottom: '16px', fontWeight: 600 }}>
          SOBRE
        </p>
        <div className="fire-line" style={{ marginBottom: '64px' }} />

        {/* Intro */}
        <p
          style={{
            fontSize: 'clamp(24px, 3.5vw, 38px)',
            fontWeight: 300,
            color: 'rgba(245,245,245,0.9)',
            lineHeight: 1.5,
            maxWidth: '640px',
            marginBottom: '80px',
          }}
        >
          A Kurupira Labs surgiu do{' '}
          <em style={{ fontStyle: 'normal', color: '#f97316', fontWeight: 500 }}>interesse genuíno</em>{' '}
          por tecnologia. De desmontar, errar e tentar de novo.
        </p>

        {/* Steps row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', marginBottom: '80px' }} className="steps-grid">
          {steps.map(({ n, title, body }) => (
            <div
              key={n}
              style={{
                padding: '40px 32px',
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(249,115,22,0.5)', display: 'block', marginBottom: '20px' }}>
                {n}
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#f5f5f5', marginBottom: '12px' }}>{title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(245,245,245,0.4)', lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0', borderTop: '1px solid rgba(255,255,255,0.07)' }} className="principles-grid">
          {principles.map((p, i) => (
            <div
              key={i}
              style={{
                padding: '24px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                paddingRight: i % 2 === 0 ? '40px' : '0',
                paddingLeft: i % 2 === 1 ? '40px' : '0',
                borderLeft: i % 2 === 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', flexShrink: 0, opacity: 0.7 }} />
              <span style={{ fontSize: '14px', color: 'rgba(245,245,245,0.5)', fontWeight: 400 }}>{p}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid      { grid-template-columns: 1fr !important; }
          .principles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
