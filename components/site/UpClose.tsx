'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { upClose } from './data';

export default function UpClose() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - wrap.offsetLeft;
      scrollLeft = wrap.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
    };

    const onMouseUp = () => {
      isDown = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - wrap.offsetLeft;
      const walk = (x - startX) * 1.5;
      wrap.scrollLeft = scrollLeft - walk;
    };

    wrap.addEventListener('mousedown', onMouseDown);
    wrap.addEventListener('mouseleave', onMouseLeave);
    wrap.addEventListener('mouseup', onMouseUp);
    wrap.addEventListener('mousemove', onMouseMove);

    return () => {
      wrap.removeEventListener('mousedown', onMouseDown);
      wrap.removeEventListener('mouseleave', onMouseLeave);
      wrap.removeEventListener('mouseup', onMouseUp);
      wrap.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="upclose">
      <div className="upclose__head eyebrow">
        <h2>(De perto — Telas & Interfaces)</h2>
        <span>Arraste ou role →</span>
      </div>

      <div className="upclose__wrap" ref={wrapRef}>
        <div className="upclose__track">
          {upClose.map((item, idx) => {
            const cardContent = (
              <>
                <div className="upclose__frame">
                  {item.phone ? (
                    <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-b from-[#0b0e1e] to-[#070913]">
                      <div className="relative w-[180px] aspect-[9/19.5] rounded-[26px] bg-[#0c0e18] p-2 shadow-2xl border border-white/10">
                        <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-black">
                          <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            sizes="200px"
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="upclose__media relative w-full h-full bg-black">
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 80vw, 600px"
                        style={{ objectFit: 'cover', objectPosition: item.position || 'center' }}
                      />
                    </div>
                  )}
                </div>

                <div className="upclose__caption eyebrow">
                  <span>
                    ({item.index}) {item.name}
                  </span>
                  <span>{item.label}</span>
                </div>
              </>
            );

            return item.href.startsWith('http') ? (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`upclose__item ${item.wide ? 'upclose__item--wide' : ''}`}
                draggable={false}
                data-cursor="Abrir"
              >
                {cardContent}
              </a>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className={`upclose__item ${item.wide ? 'upclose__item--wide' : ''}`}
                draggable={false}
                data-cursor="Ver"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
