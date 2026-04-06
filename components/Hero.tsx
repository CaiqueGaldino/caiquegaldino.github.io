'use client';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px',
        position: 'relative',
      }}
    >
      {/* Single subtle glow – top center only */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)',
        }}
      />

      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
        {/* Title */}
        <h1
          className="anim-fade-up"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(72px, 12vw, 160px)',
            lineHeight: 0.9,
            letterSpacing: '-0.01em',
            marginBottom: '40px',
            background: 'linear-gradient(120deg, #fbbf24 0%, #f97316 50%, #dc2626 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Kurupira<br />Labs
        </h1>

        {/* Subtitle */}
        <p
          className="anim-fade-up"
          style={{
            animationDelay: '0.15s',
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(245,245,245,0.45)',
            maxWidth: '480px',
            margin: '0 auto 56px',
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Apps, sites e vontade de transformar ideias em soluções reais.
        </p>

        {/* CTA */}
        <div
          className="anim-fade-up"
          style={{ animationDelay: '0.28s', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#f97316',
              color: '#080808',
              border: 'none',
              borderRadius: '8px',
              padding: '14px 32px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            VER PROJETOS
          </button>
          <button
            onClick={() => document.getElementById('about-labs')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent',
              color: 'rgba(245,245,245,0.5)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px',
              padding: '14px 32px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'; e.currentTarget.style.color = '#f5f5f5'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(245,245,245,0.5)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            SOBRE
          </button>
        </div>

        {/* Scroll hint */}
        <div
          className="anim-fade-in"
          style={{
            animationDelay: '1s',
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(180deg, rgba(249,115,22,0.6), transparent)',
            }}
            className="anim-glow"
          />
        </div>
      </div>
    </section>
  );
}
