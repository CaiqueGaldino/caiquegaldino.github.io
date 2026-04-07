import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assetPrefix';
import { LineChart, Compass, CheckCircle2, TrendingUp, BarChart3, ChevronRight, ShieldCheck, Download, PiggyBank } from 'lucide-react';
import BetaTestersCard from '@/components/BetaTestersCard';

export default function FarolCapital() {
  return (
    <div className="min-h-screen bg-[#080808] text-gray-200 font-sans selection:bg-green-500/30">
      
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
             <div className="absolute inset-0 bg-green-500/10 blur-2xl"></div>
             <Image
                src={getAssetPath('/images/icone-farol-capital-sem-fundo.webp')}
                alt="Farol Capital App"
                fill
                style={{ objectFit: 'contain', padding: '16px' }}
                className="relative z-10"
              />
          </div>
          
          {/* Right: Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <LineChart size={14} className="text-green-500" />
              <span className="text-xs font-bold tracking-widest text-white/60">FINANÇAS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#f5f5f5] mb-4">
              Farol Capital
            </h1>
            <p className="text-xl md:text-2xl text-green-400 font-light mb-6">
              Clareza para quem quer ir longe
            </p>
            <p className="text-base text-white/50 max-w-xl leading-relaxed mb-8 mx-auto md:mx-0">
              Um aplicativo focado em enxergar o futuro. Projete como suas despesas e receitas de hoje vão impactar o seu saldo nos próximos meses.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.kurupiralabs.farol_capital&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-green-500/20"
            >
              <Download size={18} />
              BAIXAR NO GOOGLE PLAY
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 my-24"></div>

        {/* Problema / Visao */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
            <Compass className="text-red-400/80 mb-6" size={28} />
            <h2 className="text-xl font-bold text-[#f5f5f5] mb-4">O Problema</h2>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              A maioria das pessoas controla o dinheiro olhando apenas para o agora. Anota gastos e confere o saldo, mas decide no escuro sobre o futuro.
            </p>
            <p className="text-sm font-semibold text-red-400/80">
              O resultado é insegurança constante sobre o amanhã.
            </p>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
            <Compass className="text-green-500 mb-6" size={28} />
            <h2 className="text-xl font-bold text-[#f5f5f5] mb-4">Nossa Visão</h2>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              Acreditamos que cuidar das finanças requer antecipar cenários e entender decisões a longo prazo, não apenas lançar números.
            </p>
            <p className="text-sm font-semibold text-green-400">
              Quem vê o que vem pela frente, decide melhor hoje.
            </p>
          </div>
        </div>

        {/* Como Funciona / Recursos */}
        <div className="mb-24">
           <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="text-green-500" size={24} />
            <h2 className="text-2xl font-bold text-[#f5f5f5]">O que é o Farol Capital?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
              <BarChart3 className="text-green-400 mb-6" size={28} />
              <h3 className="text-lg font-bold text-[#f5f5f5] mb-3">Fluxo Futuro</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Entenda seu saldo nos próximos meses simulando entradas, saídas e parcelamentos antes mesmo de acontecerem.
              </p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
              <PiggyBank className="text-green-400 mb-6" size={28} />
              <h3 className="text-lg font-bold text-[#f5f5f5] mb-3">Menos improviso</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Tome decisões como "posso comprar isso parcelado?" sem medo, embasado pela sua projeção no app.
              </p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
              <ShieldCheck className="text-green-400 mb-6" size={28} />
              <h3 className="text-lg font-bold text-[#f5f5f5] mb-3">Transparência Total</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Sem promessas irreais ou linguagem difícil. É pra usar e se sentir seguro com seu próprio dinheiro e patrimônio.
              </p>
            </div>
          </div>
        </div>

        {/* Promise Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-bold text-[#f5f5f5] mb-8 relative z-10">O que prometemos</h3>
            <ul className="space-y-4 relative z-10">
              {['Direção e controle real', 'Menos ansiedade para pagar contas', 'Mais previsibilidade mensal e anual'].map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle2 size={16} className="text-green-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/5 blur-3xl rounded-full"></div>
             <h3 className="text-xl font-bold text-[#f5f5f5] mb-8 relative z-10">Transparência</h3>
             <ul className="space-y-4 relative z-10">
               {['Sem termos complicados ou técnicos', 'Sem gráficos complexos', '100% offline, você é dono dos dados'].map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                  <ChevronRight size={16} className="text-green-500" />
                  <span className="font-semibold text-white/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Beta Testers */}
        <BetaTestersCard />

        {/* Footer Links */}
        <div className="flex flex-col items-center border-t border-white/5 pt-12">
          <Link
            href="/politicasdeprivacidadesfarolcapital"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold text-white/60 hover:text-white"
          >
            <ShieldCheck size={16} className="text-green-400" />
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
