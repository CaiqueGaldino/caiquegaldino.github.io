'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import FlameIcon from './FlameIcon';
import { Button } from './ui/button';

const links = [
  { label: 'Projetos', id: 'projects' },
  { label: 'Sobre', id: 'about-labs' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled 
          ? 'bg-background/85 backdrop-blur-md border-b border-white/5' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => go('home')} 
          className="flex items-center gap-3 bg-transparent border-none cursor-pointer group"
        >
          <FlameIcon size={32} className="text-primary group-hover:scale-110 transition-transform" />
          <span className="font-bold text-lg tracking-widest text-foreground uppercase">
            Kurupira Labs
          </span>
        </button>

        <div className="hidden sm:flex gap-8">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="bg-transparent border-none cursor-pointer text-sm tracking-widest font-medium text-foreground/60 hover:text-primary transition-colors uppercase"
            >
              {label}
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="sm:hidden text-foreground hover:bg-white/10"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-64 opacity-100 border-t border-white/5 bg-background/95 backdrop-blur-md' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="text-left py-3 text-sm tracking-widest font-medium text-foreground/70 hover:text-primary transition-colors uppercase"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
