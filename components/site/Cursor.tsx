'use client';

import { useEffect, useRef } from 'react';

/** Cursor customizado: ponto preciso + anel que segue com atraso e
 *  exibe rótulos vindos de [data-cursor]. Ativado apenas para mouse/trackpad. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Apenas para ponteiros finos com suporte a hover real (mouse / trackpad)
    if (!window.matchMedia('(pointer: fine) and (hover: hover)').matches) return;

    document.body.setAttribute('data-nocursor', '');
    let x = -200;
    let y = -200;
    let rx = x;
    let ry = y;
    let scale = 0.4;
    let target = 0.4;
    let raf = 0;

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      scale += (target - scale) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      const labelled = t?.closest<HTMLElement>('[data-cursor]');
      const link = t?.closest('a, button');
      if (labelled) {
        if (label.current) label.current.textContent = labelled.dataset.cursor ?? '';
        ring.current?.classList.add('is-label');
        target = 1;
      } else {
        ring.current?.classList.remove('is-label');
        target = link ? 0.62 : 0.4;
      }
    };
    const onDown = () => (target *= 0.85);
    const onUp = () => (target /= 0.85);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    return () => {
      cancelAnimationFrame(raf);
      document.body.removeAttribute('data-nocursor');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true">
        <span className="cursor-ring__inner" />
        <span className="cursor-ring__label" ref={label} />
      </div>
    </>
  );
}
