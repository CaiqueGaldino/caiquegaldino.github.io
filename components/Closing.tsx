'use client';

import FlameIcon from './FlameIcon';

export default function Closing() {
  return (
    <section
      id="closing"
      className="py-40 px-8 text-center relative border-t border-white/5"
    >
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="flex justify-center mb-10">
        <FlameIcon size={80} className="text-primary drop-shadow-xl" />
      </div>

      <p className="text-xs md:text-sm tracking-[0.15em] text-foreground/30 mb-8 uppercase">
        A Kurupira Labs não é sobre chegar rápido.<br />
        É sobre ir com intenção.
      </p>

      <div className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] fire-text uppercase mb-8 drop-shadow-md">
        Kurupira Labs
      </div>

      <p className="text-xs md:text-sm text-foreground/30 tracking-[0.1em] uppercase font-medium">
        Criar por curiosidade · Construir por prazer
      </p>
    </section>
  );
}
