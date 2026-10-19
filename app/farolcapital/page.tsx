'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/lib/assetPrefix';
import {
  ArrowLeft,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Download,
  ExternalLink,
  Lock,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from 'lucide-react';
import ProjectBlogSection from '@/components/site/ProjectBlogSection';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.kurupiralabs.farol_capital&pcampaignid=web_share';

const screenshots = [
  '/images/tela-farol-capital-1.jpeg',
  '/images/tela-farol-capital-2.jpeg',
  '/images/tela-farol-capital-3.jpeg',
];

const highlights = [
  {
    icon: CalendarClock,
    title: 'Veja os próximos meses',
    text: 'Projete receitas, despesas e parcelas antes de comprometer seu saldo.',
  },
  {
    icon: WalletCards,
    title: 'Decida com mais calma',
    text: 'Entenda se uma compra cabe no seu fluxo sem depender de chute.',
  },
  {
    icon: Lock,
    title: 'Dados no seu dispositivo',
    text: 'O Farol Capital funciona offline e mantém suas informações com você.',
  },
];

export default function FarolCapital() {
  useEffect(() => {
    window.location.replace(PLAY_STORE_URL);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white selection:bg-[#2dd4bf]/30">
      <section className="relative min-h-screen px-5 pb-28 pt-5 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#07090d_0%,#0d1724_42%,#07100f_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl flex-col">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/75 transition hover:border-white/20 hover:text-white"
              aria-label="Voltar para a página inicial"
            >
              <ArrowLeft size={18} />
            </Link>

            <a
              href={PLAY_STORE_URL}
              className="inline-flex items-center gap-2 rounded-lg border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-3 py-2 text-sm font-semibold text-[#b7fff1] transition hover:bg-[#2dd4bf]/15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Google Play
            </a>
          </nav>

          <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
              <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 lg:mx-0">
                <div className="relative h-11 w-11 overflow-hidden rounded-lg">
                  <Image
                    src={getAssetPath('/images/icone-farol-capital.png')}
                    alt="Ícone do Farol Capital"
                    fill
                    priority
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">Farol Capital</p>
                  <p className="text-xs text-white/55">Gestão financeira offline</p>
                </div>
              </div>

              <p className="mb-3 text-sm font-semibold text-[#5eead4]">
                Abrindo a Play Store...
              </p>
              <h1 className="mb-5 text-5xl font-black leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                Clareza para decidir antes de gastar.
              </h1>
              <p className="mx-auto mb-7 max-w-lg text-lg leading-7 text-white/67 lg:mx-0">
                O Farol Capital ajuda você a enxergar seu saldo futuro, organizar compromissos e planejar compras com mais segurança.
              </p>

              <div className="mx-auto mb-6 grid max-w-sm grid-cols-3 gap-2 lg:mx-0">
                {[
                  ['100%', 'offline'],
                  ['Fluxo', 'futuro'],
                  ['Sem', 'complicar'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-3">
                    <p className="text-lg font-extrabold text-white">{value}</p>
                    <p className="text-xs text-white/52">{label}</p>
                  </div>
                ))}
              </div>

              <a
                href={PLAY_STORE_URL}
                className="inline-flex min-h-14 w-full max-w-sm items-center justify-center gap-3 rounded-lg bg-[#2dd4bf] px-6 py-4 text-base font-extrabold text-[#04100f] shadow-[0_18px_45px_rgba(45,212,191,0.22)] transition hover:bg-[#5eead4] sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={20} />
                Baixar no Google Play
              </a>

              <div className="mx-auto mt-5 h-1.5 max-w-sm overflow-hidden rounded-full bg-white/10 lg:mx-0">
                <div className="h-full w-full origin-left animate-[farol-load_0.9s_ease-out_forwards] bg-[#2dd4bf]" />
              </div>
              <p className="mt-3 text-sm text-white/48">
                Se nada acontecer, toque no botão acima para continuar.
              </p>
            </div>

            <div className="relative mx-auto flex w-full max-w-[360px] justify-center pt-2 lg:max-w-[470px]">
              <div className="absolute -left-5 top-8 hidden h-44 w-20 rotate-[-10deg] rounded-lg border border-amber-300/20 bg-amber-300/10 sm:block" />
              <div className="absolute -right-4 bottom-16 hidden h-28 w-28 rounded-lg border border-rose-300/20 bg-rose-300/10 sm:block" />

              <div className="relative z-10 aspect-[9/18.8] w-[72%] max-w-[280px] rounded-[2rem] border border-white/18 bg-[#0a0d12] p-2 shadow-2xl shadow-black/50">
                <div className="relative h-full overflow-hidden rounded-[1.55rem] bg-black">
                  <Image
                    src={getAssetPath(screenshots[0])}
                    alt="Tela do aplicativo Farol Capital com visão financeira"
                    fill
                    priority
                    sizes="(max-width: 768px) 72vw, 280px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute bottom-4 right-0 z-20 w-44 rounded-lg border border-white/12 bg-[#101722]/95 p-4 text-left shadow-xl backdrop-blur">
                <div className="mb-3 flex items-center gap-2 text-[#5eead4]">
                  <TrendingUp size={17} />
                  <span className="text-sm font-bold">Previsibilidade</span>
                </div>
                <p className="text-sm leading-5 text-white/65">
                  Visualize impactos no saldo antes da próxima compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faf9] px-5 py-12 text-[#101417] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold text-[#087f74]">Por que usar</p>
            <h2 className="mb-4 text-3xl font-black leading-tight sm:text-4xl">
              Planejamento simples para a vida real.
            </h2>
            <p className="text-base leading-7 text-[#4d5961]">
              O app foi pensado para quem quer sair do controle reativo e entender o que vem pela frente sem planilhas difíceis ou gráficos confusos.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-lg border border-[#dde7e5] bg-white p-5 shadow-sm">
                <Icon className="mb-4 text-[#0f9f8f]" size={24} />
                <h3 className="mb-2 text-lg font-extrabold">{title}</h3>
                <p className="text-sm leading-6 text-[#5d6870]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07090d] px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-bold text-[#5eead4]">Dentro do app</p>
              <h2 className="text-3xl font-black text-white">Fluxo, compromissos e visão.</h2>
            </div>
            <BarChart3 className="hidden text-[#fbbf24] sm:block" size={34} />
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {screenshots.map((src, index) => (
              <div key={src} className="w-[72vw] max-w-[250px] flex-none rounded-lg border border-white/10 bg-white/[0.04] p-2">
                <div className="relative aspect-[9/18.8] overflow-hidden rounded-lg bg-black">
                  <Image
                    src={getAssetPath(src)}
                    alt={`Tela ${index + 1} do Farol Capital`}
                    fill
                    sizes="(max-width: 768px) 72vw, 250px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Sem cadastro obrigatório', 'Sem enviar dados financeiros', 'Feito para decisões mensais'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="text-[#5eead4]" size={20} />
                <span className="text-sm font-semibold text-white/75">{item}</span>
              </div>
            ))}
          </div>

          {/* Blog & Atualizações */}
          <ProjectBlogSection projectSlug="farol-capital" projectName="Farol Capital" />
        </div>
      </section>

      <footer className="sticky bottom-0 z-30 border-t border-white/10 bg-[#07090d]/92 px-5 py-3 backdrop-blur sm:px-8 lg:hidden">
        <a
          href={PLAY_STORE_URL}
          className="flex min-h-13 items-center justify-center gap-3 rounded-lg bg-[#2dd4bf] px-5 py-3 text-base font-extrabold text-[#04100f]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={19} />
          Baixar o app
        </a>
      </footer>

      <footer className="border-t border-white/10 bg-[#07090d] px-5 py-8 text-center sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-semibold text-white/45">Kurupira Labs</p>
          <Link
            href="/politicasdeprivacidadesfarolcapital"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white/65 transition hover:text-white"
          >
            <ShieldCheck size={16} />
            Política de Privacidade
          </Link>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes farol-load {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </main>
  );
}
