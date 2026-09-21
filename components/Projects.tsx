'use client';

import { Globe, Dumbbell, Users, Star, BrainCircuit, Calendar, BookOpen, Clock, ArrowRight, MessageCircleHeart, ImageIcon, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AppStoreButton from './ui/AppStoreButton';
import { getAssetPath } from '@/lib/assetPrefix';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

// ── App Mockup Images ──────────────────────────────────────────────

const farolPhoneImages = [
  '/images/tela-farol-capital-1.jpeg',
  '/images/tela-farol-capital-2.jpeg',
  '/images/tela-farol-capital-3.jpeg',
  '/images/tela-farol-capital-4.jpeg',
];

const oasisPhoneImages = [
  '/images/oasis1.png',
  '/images/oasis2.png',
  '/images/oasis3.png',
  '/images/oasis4.png',
  '/images/oasis5.png',
];

// ── Browser Mockup for website projects ──────────────────────────
function BrowserMockup({ src, alt, url = 'fitnessexclusive.com.br' }: { src: string; alt: string; url?: string }) {
  return (
    <div
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        background: '#111',
        boxShadow: '0 24px 56px rgba(0,0,0,0.7)',
        width: '100%',
      }}
    >
      {/* Browser chrome bar */}
      <div
        style={{
          background: '#1a1a1a',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
            <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, opacity: 0.8 }} />
          ))}
        </div>
        {/* URL bar */}
        <div
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '6px',
            padding: '4px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Globe size={10} color="rgba(255,255,255,0.3)" />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.02em' }}>
            {url}
          </span>
        </div>
      </div>
      {/* Screenshot */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
      </div>
    </div>
  );
}

// ── Phone mockup ─────────────────────────────────────────────────
function Phone({ src, fading, offset = 0 }: { src: string; fading: boolean; offset?: number }) {
  return (
    <div
      style={{
        width: '150px',
        aspectRatio: '9/19.5',
        borderRadius: '28px',
        background: '#111',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '8px',
        marginTop: `${offset}px`,
        boxShadow: '0 24px 48px rgba(0,0,0,0.6)',
        flexShrink: 0,
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '22px', overflow: 'hidden', background: '#000' }}>
        <Image
          key={src}
          src={src}
          alt="App screenshot"
          fill
          style={{ objectFit: 'contain', opacity: fading ? 0 : 1, transition: 'opacity 0.5s ease' }}
        />
      </div>
    </div>
  );
}

// ── Divider ───────────────────────────────────────────────────────
function SectionDivider() {
  return (
    <div style={{ margin: '80px 0', height: '1px', background: 'rgba(255,255,255,0.05)' }} />
  );
}

// ── Project tag chip ──────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <Badge variant="secondary" className="bg-white/5 border-white/10 text-white/50 tracking-widest text-[10px] px-2 py-0.5 hover:bg-white/10 rounded-sm">
      {label}
    </Badge>
  );
}

export default function Projects() {
  const [leftIdx, setLeftIdx]   = useState(0);
  const [rightIdx, setRightIdx] = useState(1);
  const [fadingL, setFadingL]   = useState(false);
  const [fadingR, setFadingR]   = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFadingL(true);
      setTimeout(() => { setLeftIdx(p => (p + 2) % 5); setFadingL(false); }, 350);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t0 = setTimeout(() => {
      const t = setInterval(() => {
        setFadingR(true);
        setTimeout(() => { setRightIdx(p => (p + 2) % 5); setFadingR(false); }, 350);
      }, 5000);
      return () => clearInterval(t);
    }, 2500);
    return () => clearTimeout(t0);
  }, []);

  return (
    <section id="projects" style={{ padding: '120px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section label */}
        <p style={{ fontSize: '12px', letterSpacing: '0.2em', color: '#f97316', marginBottom: '16px', fontWeight: 600 }}>
          PROJETOS
        </p>
        <div className="fire-line" style={{ marginBottom: '72px' }} />

        {/* ── PROJECT 1: Farol Capital ── */}
        <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          {/* Left: info */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <Tag label="APP MOBILE" />
              <Tag label="ANDROID" />
              <Tag label="FINANÇAS" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '48px', height: '48px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, position: 'relative',
                  background: 'linear-gradient(135deg, #021E46, #06346F)',
                }}
              >
                <Image src={getAssetPath('/images/icone-farol-capital.png')} alt="Farol Capital" fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#f5f5f5', letterSpacing: '0.02em' }}>Farol Capital</h2>
                <p style={{ fontSize: '12px', color: 'rgba(245,245,245,0.3)', letterSpacing: '0.08em', marginTop: '2px' }}>CONTROLE FINANCEIRO</p>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: 'rgba(245,245,245,0.5)', lineHeight: 1.8, marginBottom: '14px' }}>
              Organize suas finanças de forma prática e inteligente. Registre gastos, acompanhe seu fluxo de dinheiro e visualize sua situação financeira com clareza.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(245,245,245,0.3)', lineHeight: 1.8, marginBottom: '36px' }}>
              Projeções futuras baseadas nos seus hábitos ajudam a planejar metas e tomar decisões mais seguras.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '260px' }}>
              <AppStoreButton variant="google" href="https://play.google.com/store/apps/details?id=com.kurupiralabs.farol_capital" />
              <Button asChild variant="outline" className="gap-2 bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 text-foreground/60 hover:text-white transition-all h-12">
                <Link href="/farolcapital">
                  MAIS DETALHES <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: phones */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'flex-start', position: 'relative' }}>
            <Phone src={getAssetPath(farolPhoneImages[leftIdx % farolPhoneImages.length])} fading={fadingL} />
            <Phone src={getAssetPath(farolPhoneImages[rightIdx % farolPhoneImages.length])} fading={fadingR} offset={28} />
          </div>
        </div>

        <SectionDivider />

        {/* ── PROJECT 2: Fitness Exclusive ── */}
        <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

          {/* Left: browser mockup */}
          <BrowserMockup src={getAssetPath('/images/fitness-hero.png')} alt="Fitness Exclusive" />

          {/* Right: info */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <Tag label="SITE" />
              <Tag label="NEXT.JS" />
              <Tag label="FITNESS" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #b45309, #d97706)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Dumbbell size={22} color="#fff" strokeWidth={1.5} />
              </div>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#f5f5f5', letterSpacing: '0.02em' }}>Fitness Exclusive</h2>
                <p style={{ fontSize: '12px', color: 'rgba(245,245,245,0.3)', letterSpacing: '0.08em', marginTop: '2px' }}>ACADEMIA & SAÚDE</p>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: 'rgba(245,245,245,0.5)', lineHeight: 1.8, marginBottom: '14px' }}>
              Site completo para uma rede de academias com planos de assinatura, diferenciais, avaliações e integração com app de treino.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(245,245,245,0.3)', lineHeight: 1.8, marginBottom: '36px' }}>
              Design agressivo e moderno com foco em conversão — do hero até o checkout de planos mensais e anuais.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {[
                { icon: Users, text: 'Planos de assinatura online' },
                { icon: Star, text: 'Avaliações e depoimentos' },
                { icon: Globe, text: 'fitnessexclusive.com.br' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Icon size={14} color="rgba(249,115,22,0.7)" strokeWidth={1.5} />
                  <span style={{ fontSize: '13px', color: 'rgba(245,245,245,0.45)' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button asChild variant="outline" className="gap-2 bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 text-foreground/60 hover:text-white transition-all h-12 inline-flex w-max">
              <a href="https://fitnessexclusive.com.br" target="_blank" rel="noopener noreferrer">
                <Globe size={14} />
                VER SITE AO VIVO
              </a>
            </Button>
          </div>
        </div>

        <SectionDivider />

        {/* ── PROJECT 3: Bia Psi ── */}
        <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

          {/* Left: info */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Tag label="SITE" />
              <Tag label="NEXT.JS" />
              <Tag label="PSICOLOGIA" />
              {/* Em desenvolvimento badge */}
              <span style={{
                fontSize: '10px', letterSpacing: '0.1em', fontWeight: 700,
                color: '#f97316', background: 'rgba(249,115,22,0.1)',
                border: '1px solid rgba(249,115,22,0.25)',
                borderRadius: '4px', padding: '3px 8px',
              }}>EM DESENVOLVIMENTO</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <BrainCircuit size={22} color="#fff" strokeWidth={1.5} />
              </div>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#f5f5f5', letterSpacing: '0.02em' }}>Beatriz Silvestre</h2>
                <p style={{ fontSize: '12px', color: 'rgba(245,245,245,0.3)', letterSpacing: '0.08em', marginTop: '2px' }}>PSICÓLOGA · CRP 11/24329</p>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: 'rgba(245,245,245,0.5)', lineHeight: 1.8, marginBottom: '14px' }}>
              Site profissional para uma psicóloga com atendimento presencial e online, focado em conversão de consultas e construção de autoridade.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(245,245,245,0.3)', lineHeight: 1.8, marginBottom: '36px' }}>
              Design minimalista e acolhedor, com blog, seção de serviços, depoimentos e agendamento via WhatsApp.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {[
                { icon: Calendar, text: 'Agendamento via WhatsApp' },
                { icon: BookOpen, text: 'Blog e conteúdo' },
                { icon: Clock, text: 'Em desenvolvimento' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Icon size={14} color="rgba(249,115,22,0.7)" strokeWidth={1.5} />
                  <span style={{ fontSize: '13px', color: 'rgba(245,245,245,0.45)' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button asChild variant="outline" className="gap-2 bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 text-foreground/60 hover:text-white transition-all h-12 inline-flex w-max">
              <a href="https://caiquegaldino.github.io/bia-psi/" target="_blank" rel="noopener noreferrer">
                <Globe size={14} />
                VER PRÉVIA
              </a>
            </Button>
          </div>

          {/* Right: browser mockup */}
          <BrowserMockup src={getAssetPath('/images/bia-psi-hero.png')} alt="Bia Psi" url="caiquegaldino.github.io/bia-psi" />
        </div>

        <SectionDivider />

        {/* ── PROJECT 4: Oasis ── */}
        <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          
          {/* Left: phones */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'flex-start', position: 'relative' }} className="reverse-phones">
            <Phone src={getAssetPath(oasisPhoneImages[leftIdx])} fading={fadingL} />
            <Phone src={getAssetPath(oasisPhoneImages[rightIdx])} fading={fadingR} offset={28} />
          </div>

          {/* Right: info */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Tag label="APP MOBILE" />
              <Tag label="ANDROID" />
              <Tag label="SAÚDE" />
              {/* Em testes badge */}
              <span style={{
                fontSize: '10px', letterSpacing: '0.1em', fontWeight: 700,
                color: '#3b82f6', background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.25)',
                borderRadius: '4px', padding: '3px 8px',
              }}>EM FASE DE TESTES</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '48px', height: '48px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, position: 'relative',
                  background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                }}
              >
                <Image src={getAssetPath('/images/oasis-icone-semfundo.png')} alt="Oasis" fill style={{ objectFit: 'contain', padding: '6px' }} />
              </div>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#f5f5f5', letterSpacing: '0.02em' }}>Oasis</h2>
                <p style={{ fontSize: '12px', color: 'rgba(245,245,245,0.3)', letterSpacing: '0.08em', marginTop: '2px' }}>HIDRATAÇÃO INTELIGENTE</p>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: 'rgba(245,245,245,0.5)', lineHeight: 1.8, marginBottom: '14px' }}>
              Um aplicativo simples e intuitivo que ajuda você a beber mais água e manter uma hidratação saudável no seu dia a dia.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(245,245,245,0.3)', lineHeight: 1.8, marginBottom: '36px' }}>
              Metas personalizadas dinâmicas, lembretes amigáveis não invasivos e um visual agradável para acompanhar seu progresso de onde você estiver.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '260px' }}>
              <Button asChild variant="outline" className="gap-2 bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 text-foreground/60 hover:text-white transition-all h-12">
                <Link href="/oasis">
                  MAIS DETALHES <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* ── PROJECT 5: Bom Dia Mensagens ── */}
        <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

          {/* Left: info */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <Tag label="APP MOBILE" />
              <Tag label="ANDROID" />
              <Tag label="MENSAGENS" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <MessageCircleHeart size={22} color="#fff" strokeWidth={1.5} />
              </div>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#f5f5f5', letterSpacing: '0.02em' }}>Bom Dia Mensagens</h2>
                <p style={{ fontSize: '12px', color: 'rgba(245,245,245,0.3)', letterSpacing: '0.08em', marginTop: '2px' }}>MENSAGENS PARA O DIA A DIA</p>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: 'rgba(245,245,245,0.5)', lineHeight: 1.8, marginBottom: '14px' }}>
              Encontre e compartilhe mensagens de bom dia, boa tarde, boa noite, feriados e datas comemorativas em poucos toques.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(245,245,245,0.3)', lineHeight: 1.8, marginBottom: '36px' }}>
              Interface simples, textos legíveis e navegação por períodos do dia para facilitar o uso diário, especialmente para público adulto e idoso.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '260px' }}>
              <Button asChild variant="outline" className="gap-2 bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 text-foreground/60 hover:text-white transition-all h-12">
                <Link href="/bomdiamensagens">
                  MAIS DETALHES <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: ImageIcon, title: 'Mensagens organizadas', text: 'Acesse imagens por Bom dia, Boa tarde, Boa noite e datas especiais.' },
              { icon: Star, title: 'Favoritos e praticidade', text: 'Guarde as suas mensagens preferidas para enviar novamente quando quiser.' },
              { icon: Share2, title: 'Compartilhe no WhatsApp', text: 'Baixe e compartilhe com rapidez, sem complicação.' },
            ].map(({ icon: Icon, title, text }, i) => (
              <div key={i} style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', borderRadius: '14px', padding: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Icon size={16} color="rgba(249,115,22,0.8)" strokeWidth={1.7} />
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#f5f5f5' }}>{title}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(245,245,245,0.45)', lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider />

        <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <Tag label="APP MOBILE" />
              <Tag label="ANDROID" />
              <Tag label="PRODUTIVIDADE" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Clock size={22} color="#fff" strokeWidth={1.5} />
              </div>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#f5f5f5', letterSpacing: '0.02em' }}>Daily Tasks</h2>
                <p style={{ fontSize: '12px', color: 'rgba(245,245,245,0.3)', letterSpacing: '0.08em', marginTop: '2px' }}>ORGANIZAÇÃO PESSOAL E PROFISSIONAL</p>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: 'rgba(245,245,245,0.5)', lineHeight: 1.8, marginBottom: '14px' }}>
              Uma lista única para organizar tarefas pessoais e de trabalho no mesmo lugar, com foco total em praticidade e constância.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(245,245,245,0.3)', lineHeight: 1.8, marginBottom: '36px' }}>
              Categorias, prioridades, recorrência e histórico ajudam você a manter o ritmo e executar o que realmente importa, todos os dias.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '260px' }}>
              <Button asChild variant="outline" className="gap-2 bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 text-foreground/60 hover:text-white transition-all h-12">
                <Link href="/dailytasks">
                  MAIS DETALHES <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: Users, title: 'Tudo no mesmo app', text: 'Tarefas pessoais e de trabalho organizadas em uma lista única.' },
              { icon: Calendar, title: 'Rotina com constância', text: 'Recorrência diária, semanal e mensal com histórico e calendário.' },
              { icon: Star, title: 'Produtividade real', text: 'Prioridades, checklist e notificações para manter o foco no que importa.' },
            ].map(({ icon: Icon, title, text }, i) => (
              <div key={i} style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', borderRadius: '14px', padding: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Icon size={16} color="rgba(99,102,241,0.9)" strokeWidth={1.7} />
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#f5f5f5' }}>{title}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(245,245,245,0.45)', lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: '80px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '36px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <span style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(245,245,245,0.15)', whiteSpace: 'nowrap' }}>MAIS EM BREVE</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.04)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-grid { grid-template-columns: 1fr !important; }
          .reverse-phones { order: -1; }
        }
      `}</style>
    </section>
  );
}
