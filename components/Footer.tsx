'use client';

import FlameIcon from './FlameIcon';

export default function Footer() {
  return (
    <footer className="py-6 px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <FlameIcon size={20} className="text-primary opacity-80" />
          <p className="text-xs text-foreground/30 tracking-widest uppercase">
            © {new Date().getFullYear()} Kurupira Labs
          </p>
        </div>
        <p className="text-xs text-foreground/30 tracking-widest uppercase">
          Feito com <span className="text-primary/70">♥</span>
        </p>
      </div>
    </footer>
  );
}
