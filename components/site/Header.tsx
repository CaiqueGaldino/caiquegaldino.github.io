'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FlameIcon from '@/components/FlameIcon';
import { formatBrasiliaTime } from './effects';
import { EMAIL } from './data';

const links = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'O que fazemos', href: '/#servicos' },
  { label: 'Como criamos', href: '/#processo' },
  { label: 'Blog', href: '/blog' },
  { label: 'Comunidade', href: '/#comunidade' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(formatBrasiliaTime());
    const interval = setInterval(() => setTime(formatBrasiliaTime()), 15000);
    return () => clearInterval(interval);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="header">
        {/* Logo: Kurupira Labs */}
        <Link href="/" className="header__logo" data-cursor="Início">
          <span className="sr-only">Kurupira Labs, início</span>
          <div className="flex items-center gap-2.5">
            <FlameIcon size={26} className="text-[#ff4d15] drop-shadow-md" />
            <span className="font-extrabold tracking-wider text-white text-lg uppercase font-sans">
              Kurupira <span className="text-[#ff4d15]">Labs</span>
            </span>
          </div>
        </Link>

        {/* Status / Local time */}
        <div className="header__status eyebrow">
          <span className="header__status-dot" aria-hidden="true" />
          <span>São Paulo, BR</span>
          <span className="header__status-slash">/</span>
          <span suppressHydrationWarning>{time || '12:00'}</span>
        </div>

        {/* Desktop links */}
        <nav className="header__links" aria-label="Navegação principal">
          {links.map((item) => (
            <a key={item.label} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${EMAIL}?subject=Contato Kurupira Labs`}
            className="header__cta"
            data-cursor="Falar"
          >
            Falar conosco
          </a>
        </nav>

        {/* Hamburger menu button */}
        <button
          type="button"
          className="header__menu-button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(!open)}
          data-cursor={open ? 'Fechar' : 'Menu'}
        >
          <span className="header__bars" aria-hidden="true">
            <span className="header__bar" />
            <span className="header__bar" />
          </span>
          <span>{open ? 'Fechar' : 'Menu'}</span>
        </button>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <nav
        id="site-menu"
        className={`menu ${open ? 'menu--open' : ''}`}
        aria-label="Menu móvel"
        aria-hidden={!open}
      >
        <div className="menu__items">
          <a href="#inicio" className="menu__item" onClick={closeMenu}>
            <span className="menu__mask">
              <span className="menu__label">Início</span>
            </span>
            <span className="menu__number" aria-hidden="true">
              01
            </span>
          </a>
          {links.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="menu__item"
              onClick={closeMenu}
            >
              <span className="menu__mask">
                <span className="menu__label">{item.label}</span>
              </span>
              <span className="menu__number" aria-hidden="true">
                {String(idx + 2).padStart(2, '0')}
              </span>
            </a>
          ))}
          <a
            href={`mailto:${EMAIL}?subject=Contato Kurupira Labs`}
            className="menu__item"
            onClick={closeMenu}
          >
            <span className="menu__mask">
              <span className="menu__label" style={{ color: 'var(--accent)' }}>
                Contato
              </span>
            </span>
            <span className="menu__number" aria-hidden="true">
              07
            </span>
          </a>
        </div>

        <div className="menu__footer eyebrow">
          <a href={`mailto:${EMAIL}`} className="menu__email">
            {EMAIL}
          </a>
          <span>
            São Paulo, BR <span style={{ opacity: 0.5 }}>/</span>{' '}
            <span suppressHydrationWarning>{time || '12:00'}</span>
          </span>
        </div>
      </nav>
    </>
  );
}
