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
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Top highlight */}
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

      <div style={{ maxWidth: '1400px', width: '100%', textAlign: 'center', zIndex: 1, position: 'relative', marginTop: '10vh' }}>
        {/* Title */}
        <h1
          className="anim-fade-up"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(56px, 14vw, 220px)',
            lineHeight: 1,
            letterSpacing: '0.02em',
            marginBottom: '32px',
            background: 'linear-gradient(120deg, #fcd34d 0%, #f97316 40%, #dc2626 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0px 12px 24px rgba(249,115,22,0.2))',
            whiteSpace: 'nowrap',
          }}
        >
          KURUPIRA LABS
        </h1>

        {/* Subtitle */}
        <p
          className="anim-fade-up"
          style={{
            animationDelay: '0.15s',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: 'rgba(245,245,245,0.7)',
            maxWidth: '600px',
            margin: '0 auto 56px',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Apps, sites e vontade de transformar ideias em soluções reais.
        </p>

        {/* CTA */}
        <div
          className="anim-fade-up"
          style={{ animationDelay: '0.28s', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              padding: '16px 36px',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              cursor: 'pointer',
              boxShadow: '0 8px 20px -6px rgba(249,115,22,0.6)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { 
                e.currentTarget.style.transform = 'translateY(-2px)'; 
                e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(249,115,22,0.8)';
            }}
            onMouseLeave={e => { 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.boxShadow = '0 8px 20px -6px rgba(249,115,22,0.6)';
            }}
          >
            VER PROJETOS
          </button>
          <button
            onClick={() => document.getElementById('about-labs')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'rgba(255,255,255,0.03)',
              color: 'rgba(245,245,245,0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '16px 36px',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={e => { 
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.5)'; 
                e.currentTarget.style.color = '#fff'; 
                e.currentTarget.style.transform = 'translateY(-2px)'; 
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            }}
            onMouseLeave={e => { 
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; 
                e.currentTarget.style.color = 'rgba(245,245,245,0.8)'; 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            }}
          >
            SOBRE O LABS
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
