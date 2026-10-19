'use client';

import { useEffect, type CSSProperties } from 'react';

const canAnimate = () =>
  typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine) and (hover: hover)').matches;

/* ── Kinetic letters ──────────────────────────────────────────────
   Cada letra é renderizada diretamente no DOM garantindo 100% de 
   visibilidade e acessibilidade. */
export function KineticLetters({
  text,
  k = 360,
  animateIn = false,
  delay = 0,
}: {
  text: string;
  k?: number;
  animateIn?: boolean;
  delay?: number;
}) {
  return (
    <>
      {Array.from(text).map((ch, i) =>
        ch === ' ' ? (
          <span key={i} className="kinetic__space">
            &nbsp;
          </span>
        ) : (
          <span
            key={i}
            className="kinetic__letter"
            data-char={ch}
            data-k={k}
            data-in={animateIn ? '' : undefined}
            style={{
              '--i': i,
              '--d': `${delay}ms`,
              fontVariationSettings: '"wdth" 72, "wght" 800',
              fontWeight: 800,
            } as CSSProperties}
          >
            {ch}
          </span>
        ),
      )}
    </>
  );
}

/** Varia "wdth"/"wght" de cada letra conforme a proximidade do cursor (apenas mouse). */
export function useKinetic() {
  useEffect(() => {
    if (!canAnimate() || !finePointer()) return;
    let mx = -9999;
    let my = -9999;
    let raf = 0;
    let frames = 0;

    const tick = () => {
      const letters = Array.from(document.querySelectorAll<HTMLElement>('.kinetic__letter'));
      const vh = window.innerHeight;
      // 1) leitura
      const data = letters.map((el) => {
        const r = el.getBoundingClientRect();
        return { el, r, k: Number(el.dataset.k) || 360 };
      });
      // 2) escrita
      for (const { el, r, k } of data) {
        if (r.bottom < -100 || r.top > vh + 100) continue;
        const dx = mx - (r.left + r.width / 2);
        const dy = my - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy);
        let t = Math.max(0, 1 - d / k);
        t = t * t * (3 - 2 * t);
        const wdth = 72 + 50 * t;
        const wght = 800 - 520 * t;
        el.style.fontVariationSettings = `"wdth" ${wdth.toFixed(1)}, "wght" ${wght.toFixed(0)}`;
      }
      frames -= 1;
      raf = frames > 0 ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      frames = 20;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      mx = e.clientX;
      my = e.clientY;
      kick();
    };
    const onLeave = () => {
      mx = -9999;
      my = -9999;
      kick();
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', kick, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', kick);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);
}

/** Revelação suave de elementos na viewport sem ocultar nada se não disparar */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.site [data-reveal]');
    els.forEach((el) => el.classList.add('is-revealed'));
  }, []);
}

/** Botões [data-magnet] puxados levemente em direção ao cursor (apenas mouse). */
export function useMagnet() {
  useEffect(() => {
    if (!canAnimate() || !finePointer()) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-magnet]'));
    const handlers = els.map((el) => {
      const move = (e: PointerEvent) => {
        if (e.pointerType === 'touch') return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * 0.3;
        const y = (e.clientY - (r.top + r.height / 2)) * 0.4;
        el.style.transition = 'transform .2s ease-out';
        el.style.transform = `translate(${x}px, ${y}px)`;
      };
      const leave = () => {
        el.style.transition = 'transform .9s cubic-bezier(.16,1,.3,1)';
        el.style.transform = '';
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      return { el, move, leave };
    });
    return () =>
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      });
  }, []);
}

/** Relógio de Brasília (HH:MM) para header/rodapé com fallback seguro. */
export function formatBrasiliaTime(d = new Date()) {
  try {
    return new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Sao_Paulo',
    }).format(d);
  } catch {
    return '12:00';
  }
}
