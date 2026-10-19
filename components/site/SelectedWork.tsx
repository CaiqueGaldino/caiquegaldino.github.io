'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { projects, type Project } from './data';

export default function SelectedWork() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [imageCycle, setImageCycle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeProject = projects[activeIdx] || projects[0];

  // Auto-ciclo de telas para o projeto com imagens múltiplas
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setImageCycle((prev) => (prev + 1) % 4);
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIdx, isPaused]);

  const handleSelectRow = (index: number) => {
    if (index !== activeIdx) {
      setActiveIdx(index);
      setImageCycle(0);
    }
  };

  /* ── Renderizador do Dock Preview com as imagens REAIS do projeto ── */
  const renderDockContent = (p: Project) => {
    if (p.type === 'phones' && p.images && p.images.length > 0) {
      const img1 = p.images[imageCycle % p.images.length];
      const img2 = p.images[(imageCycle + 1) % p.images.length];
      return (
        <div className="w-full h-full flex items-center justify-center gap-3.5 p-4 bg-gradient-to-b from-[#0b0e1e] to-[#070913] relative overflow-hidden select-none">
          {/* Glow sutil */}
          <div className="absolute w-48 h-48 rounded-full bg-[#ff4d15]/15 blur-3xl pointer-events-none" />

          {/* Telefone 1 */}
          <div className="relative w-[130px] aspect-[9/19.5] rounded-[22px] bg-[#0c0e18] p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.7)] border border-white/10 flex-shrink-0 transition-transform duration-500 hover:scale-105">
            <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-black">
              <Image src={img1} alt={p.name} fill sizes="150px" style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Telefone 2 (offset vertical) */}
          <div className="relative w-[130px] aspect-[9/19.5] rounded-[22px] bg-[#0c0e18] p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.7)] border border-white/10 flex-shrink-0 translate-y-6 transition-transform duration-500 hover:scale-105">
            <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-black">
              <Image src={img2} alt={p.name} fill sizes="150px" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      );
    }

    if (p.type === 'browser' && p.images && p.images.length > 0) {
      const currentImage = p.images[imageCycle % p.images.length];
      return (
        <div className="w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-[#0b0e1e] to-[#070913] select-none">
          <div className="w-full rounded-[14px] overflow-hidden border border-white/10 bg-[#111] shadow-[0_24px_50px_rgba(0,0,0,0.8)]">
            {/* Browser Chrome */}
            <div className="h-8 bg-[#181818] border-b border-white/10 px-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 max-w-[200px] mx-auto h-4 bg-white/5 rounded px-2 flex items-center justify-center gap-1.5 text-[9px] text-white/40 font-mono">
                <Globe size={9} />
                <span className="truncate">{p.browserUrl}</span>
              </div>
            </div>
            {/* Screenshot real */}
            <div className="relative w-full aspect-[16/10] bg-black">
              <Image src={currentImage} alt={p.name} fill sizes="400px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        </div>
      );
    }

    // Card com detalhes autênticos
    const Icon = p.icon || Sparkles;
    return (
      <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-b from-[#0d1022] to-[#070913] relative overflow-hidden border border-white/5">
        <div className="flex justify-between items-start">
          <span className="text-6xl font-extrabold font-mono text-white/10">{p.num}</span>
          <div className="w-12 h-12 rounded-xl bg-[#ff4d15]/15 border border-[#ff4d15]/30 flex items-center justify-center text-[#ff4d15]">
            <Icon size={22} />
          </div>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4d15] block mb-1">
            {p.subtitle}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">
            {p.name}
          </h3>
          <p className="text-xs text-white/60 leading-relaxed mb-4">
            {p.desc1}
          </p>
          <ul className="space-y-2">
            {p.features?.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-white/75 font-mono">
                <span className="w-1.5 h-1.5 bg-[#ff4d15] rotate-45 flex-shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-white/50">
          <span>{p.platform}</span>
          <span className="text-[#ff4d15] font-semibold">{p.cta} →</span>
        </div>
      </div>
    );
  };

  return (
    <section className="work" id="projetos">
      {/* Section Head */}
      <div className="work__head eyebrow">
        <h2>Projetos Kurupira Labs ({String(projects.length).padStart(2, '0')})</h2>
        <div className="work__head-end">
          <button
            type="button"
            className="work__pause"
            onClick={() => setIsPaused(!isPaused)}
            data-cursor={isPaused ? 'Tocar' : 'Pausar'}
          >
            {isPaused ? '(Retomar movimento)' : '(Pausar movimento)'}
          </button>
          <span>Portfólio Ativo</span>
        </div>
      </div>

      <div className="work__grid">
        {/* Coluna Esquerda: Linhas de projetos com conteúdo autêntico */}
        <div className="work__list">
          {projects.map((p, idx) => {
            const isFocus = activeIdx === idx;
            return (
              <div
                key={p.slug}
                className={`work__row ${isFocus ? 'is-focus' : ''}`}
                onClick={() => handleSelectRow(idx)}
                onPointerEnter={() => handleSelectRow(idx)}
                onFocus={() => handleSelectRow(idx)}
                data-cursor="Ver"
              >
                <span className="work__num" aria-hidden="true">
                  {p.num}
                </span>

                <div className="work__name">
                  {p.lines.map((line, li) => (
                    <span key={li} className="work__line">
                      {line}
                    </span>
                  ))}
                </div>

                <span className="work__year">
                  {p.statusBadge ? (
                    <span className="text-[#ff4d15] text-[11px] font-semibold">
                      {p.statusBadge}
                    </span>
                  ) : (
                    p.platform
                  )}
                </span>

                <div className="work__details">
                  <span className="text-white/40">{p.subtitle}</span>
                  <div className="flex gap-1.5 flex-wrap">
                    {p.tags.map((t, ti) => (
                      <span key={ti} className="text-[10px] tracking-wider px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 ml-auto">
                    {p.googlePlayHref && (
                      <a
                        href={p.googlePlayHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/70 hover:text-[#ff4d15] transition-colors flex items-center gap-1 font-mono"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Google Play <ExternalLink size={11} />
                      </a>
                    )}
                    {p.external ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work__cta"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {p.cta} →
                      </a>
                    ) : (
                      <Link
                        href={p.href}
                        className="work__cta"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {p.cta} →
                      </Link>
                    )}
                  </div>
                </div>

                {/* Descrição expandida do projeto */}
                <div style={{ gridArea: 'meta', marginTop: '12px' }} className="pt-2">
                  <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                    {p.desc1}
                  </p>
                  {p.desc2 && (
                    <p className="text-xs text-white/40 leading-relaxed max-w-xl mt-1.5">
                      {p.desc2}
                    </p>
                  )}
                </div>

                {/* Preview embutido para telas mobile */}
                <div className="work__mobile">
                  {renderDockContent(p)}
                </div>
              </div>
            );
          })}
          <div className="work__end" />
        </div>

        {/* Coluna Direita: Sticky Dock com Preview Real */}
        <div className="work__col" aria-hidden="true">
          <div className="work__dock">
            <div className="work__frame" data-cursor="Ver">
              {renderDockContent(activeProject)}
            </div>

            {/* Metadados abaixo do dock */}
            <div className="work__meta eyebrow">
              <span>
                (<span className="work__cur">{activeProject.num}</span> /{' '}
                {String(projects.length).padStart(2, '0')})
              </span>
              <span className="font-semibold text-white/70">{activeProject.name}</span>
              <span>{activeProject.platform}</span>
            </div>

            {/* Barra de progresso animada */}
            <div className="work__track">
              <div
                key={`${activeIdx}-${imageCycle}`}
                className={`work__bar ${isPaused ? 'is-paused' : ''}`}
                style={{ '--dur': '4.5s' } as React.CSSProperties}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
