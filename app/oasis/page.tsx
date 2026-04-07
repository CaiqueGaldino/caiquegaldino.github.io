import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assetPrefix';
import { Droplets, Settings, CheckCircle2, Bell, Calendar, Activity, ChevronRight, ShieldCheck, Users } from 'lucide-react';
import BetaTestersCard from '@/components/BetaTestersCard';

export default function OasisApp() {
  return (
    <div className="min-h-screen bg-[#080808] text-gray-200 font-sans selection:bg-blue-500/30">
      
      {/* Header / Nav */}
      <div className="container mx-auto px-6 py-8 flex justify-between items-center max-w-5xl">
        <Link href="/" className="text-white/50 hover:text-white transition-colors text-sm font-semibold tracking-widest flex items-center gap-2">
          ← VOLTAR
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
          {/* Left: Icon */}
          <div className="w-32 h-32 md:w-48 md:h-48 relative shrink-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] p-4 flex items-center justify-center">
             <div className="absolute inset-0 bg-blue-500/10 blur-2xl"></div>
             <Image
                src={getAssetPath('/images/oasis-icone-semfundo.png')}
                alt="Oasis App"
                fill
                style={{ objectFit: 'contain', padding: '16px' }}
                className="relative z-10"
              />
          </div>
          
          {/* Right: Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <Droplets size={14} className="text-blue-500" />
              <span className="text-xs font-bold tracking-widest text-white/60">SAÚDE & BEM-ESTAR</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#f5f5f5] mb-4">
              Oasis
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-light mb-6">
              Seu Assistente de Hidratação
            </p>
            <p className="text-base text-white/50 max-w-xl leading-relaxed mb-8 mx-auto md:mx-0">
              Um app simples e intuitivo que ajuda você a beber mais água e manter uma hidratação saudável no seu dia a dia, com metas personalizadas e lembretes amigáveis.
            </p>

            <a
              href="#testers"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-blue-500/20"
            >
              <Users size={18} />
              SER UM TESTADOR
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 my-24"></div>

        {/* Como Funciona */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <Settings className="text-blue-500" size={24} />
            <h2 className="text-2xl font-bold text-[#f5f5f5]">Como funciona?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Cadastro Inicial',
                desc: 'Responda perguntas básicas sobre seu peso, clima e nível de atividade física.',
                highlight: 'Sua meta é adaptada a você.',
              },
              {
                step: '02',
                title: 'O Copo de Água',
                desc: 'Uma interface bonita exibe um copo que enche em tempo real de acordo com as suas entradas.',
                highlight: 'Acompanhe a porcentagem.',
              },
              {
                step: '03',
                title: 'Registre o Consumo',
                desc: 'Basta tocar nos botões de copo (100ml) ou garrafa (1L) na tela principal.',
                highlight: 'Tudo atualizado na hora.',
              }
            ].map((s, i) => (
              <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
                <span className="text-xs font-bold text-blue-500/50 tracking-widest mb-4 inline-block">{s.step}</span>
                <h3 className="text-xl font-bold text-[#f5f5f5] mb-3">{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-4">{s.desc}</p>
                <p className="text-sm font-semibold text-blue-400">{s.highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recursos */}
        <div className="mb-24">
           <div className="flex items-center gap-3 mb-12">
            <Droplets className="text-blue-500" size={24} />
            <h2 className="text-2xl font-bold text-[#f5f5f5]">Recursos Principais</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
              <Bell className="text-blue-400 mb-6" size={28} />
              <h3 className="text-lg font-bold text-[#f5f5f5] mb-3">Notificações Inteligentes</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Receba lembretes ao longo do dia, respeitando sempre o seu horário de sono para não acordá-lo à noite.
              </p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
              <Calendar className="text-blue-400 mb-6" size={28} />
              <h3 className="text-lg font-bold text-[#f5f5f5] mb-3">Histórico Visual</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Um calendário interativo mostra seus dias de maior hidratação com cores mais intensas.
              </p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
              <Activity className="text-blue-400 mb-6" size={28} />
              <h3 className="text-lg font-bold text-[#f5f5f5] mb-3">100% Personalizado</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Dias mais quentes ou com atividade física ajustam dinamicamente a sua meta diária.
              </p>
            </div>
          </div>
        </div>

        {/* Beneficios */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-bold text-[#f5f5f5] mb-8 relative z-10">Benefícios da hidratação</h3>
            <ul className="space-y-4 relative z-10">
              {['Energia e disposição ao longo do dia', 'Aumento de foco e concentração', 'Saúde e elasticidade da pele', 'Melhor funcionamento do corpo'].map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle2 size={16} className="text-blue-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-bold text-[#f5f5f5] mb-8 relative z-10">Por que o Oasis?</h3>
            <ul className="space-y-4 relative z-10">
               {['Interface amigável e limpa', 'Lembretes fáceis e discretos', 'Progresso visual imediato', 'Zero poluição visual'].map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                  <ChevronRight size={16} className="text-blue-500" />
                  <span className="font-semibold text-white/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Beta Testers */}
        <div id="testers" style={{ scrollMarginTop: '80px' }}>
          <BetaTestersCard />
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center border-t border-white/5 pt-12">
          <Link
            href="/oasis/politicasdeprivacidade"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold text-white/60 hover:text-white"
          >
            <ShieldCheck size={16} className="text-blue-400" />
            Política de Privacidade
          </Link>
          
          <div className="text-center mt-12">
             <p className="text-xs tracking-widest text-white/30 uppercase">Desenvolvido por</p>
             <p className="text-sm font-bold text-white/50 mt-1">KURUPIRA LABS</p>
          </div>
        </div>

      </div>
    </div>
  );
}
