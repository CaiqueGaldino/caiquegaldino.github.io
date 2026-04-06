'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assetPrefix';

const links = [
  { label: 'Projetos', id: 'projects' },
  { label: 'Sobre',    id: 'about-labs' },
];

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'background 0.4s, border-color 0.4s',
        background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
          <div style={{ position: 'relative', width: '28px', height: '28px' }}>
            <Image src={getAssetPath('/images/icone-kurupira-1.webp')} alt="Kurupira Labs" fill style={{ objectFit: 'contain' }} />
          </div>
          <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '18px', letterSpacing: '0.12em', color: '#f5f5f5' }}>
            KURUPIRA LABS
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '40px' }} className="hidden-mobile">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => go(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '13px', letterSpacing: '0.1em', fontWeight: 500,
                color: 'rgba(245,245,245,0.55)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f97316')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,245,0.55)')}
            >
              {label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f5f5f5', display: 'none' }}
          className="show-mobile"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(8,8,8,0.97)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 32px 24px' }}>
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => go(id)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '14px', letterSpacing: '0.1em', fontWeight: 500,
                color: 'rgba(245,245,245,0.6)', padding: '10px 0',
              }}
            >
              {label.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </header>
  );
}
