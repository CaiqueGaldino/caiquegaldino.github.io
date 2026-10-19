import Link from 'next/link';
import { MessageCircleHeart, Sun, CalendarDays, Share2, Download, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import ProjectBlogSection from '@/components/site/ProjectBlogSection';

export const metadata = {
  title: 'Bom Dia Mensagens | Kurupira Labs',
  description: 'Encontre e compartilhe imagens de bom dia, boa tarde e boa noite com facilidade. App simples, rápido e feito para o seu dia a dia.',
};

export default function BomDiaMensagensPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-gray-200 font-sans selection:bg-orange-500/30">
      <div className="container mx-auto px-6 py-8 flex justify-between items-center max-w-5xl">
        <Link href="/" className="text-white/50 hover:text-white transition-colors text-sm font-semibold tracking-widest flex items-center gap-2">
          ← VOLTAR
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-32 h-32 md:w-44 md:h-44 shrink-0 rounded-3xl border border-white/10 shadow-2xl bg-[#111] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-orange-500/20 blur-2xl"></div>
            <MessageCircleHeart size={66} className="text-orange-400 relative z-10" strokeWidth={1.6} />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#f5f5f5] mb-4">
              Bom Dia Mensagens para compartilhar carinho todos os dias
            </h1>
            <p className="text-lg md:text-xl text-orange-300 font-light mb-8">
              Imagens prontas de bom dia, boa tarde, boa noite e datas especiais em um app simples, rápido e fácil de usar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-semibold text-sm transition-colors">
                VER COMO FUNCIONA
              </a>
              <a href="#beneficios" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-sm transition-colors">
                CONHECER BENEFÍCIOS
              </a>
              <a href="#publico" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-sm transition-colors">
                VER PARA QUEM É
              </a>
            </div>
          </div>
        </div>

        <div id="beneficios" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Star className="text-orange-400" size={22} />
            <h2 className="text-2xl font-bold text-[#f5f5f5]">Benefícios</h2>
          </div>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Navegação organizada por Bom dia, Boa tarde, Boa noite, feriados e datas comemorativas.',
              'Visualização rápida de imagens com leitura clara e interface amigável para público adulto e idoso.',
              'Favoritar mensagens para encontrar de novo sem perder tempo.',
              'Baixar imagens no celular e usar quando quiser, mesmo depois.',
              'Compartilhar direto no WhatsApp e em outros apps com poucos toques.',
            ].map((item, index) => (
              <li key={index} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-sm text-white/70 leading-relaxed flex items-start gap-3">
                <ArrowRight size={16} className="text-orange-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="como-funciona" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Sun className="text-orange-400" size={22} />
            <h2 className="text-2xl font-bold text-[#f5f5f5]">Como funciona</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <Sun className="text-orange-400 mb-4" size={24} />
              <p className="text-sm text-white/70 leading-relaxed">Escolha o período do dia ou a categoria que você quer.</p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <Star className="text-orange-400 mb-4" size={24} />
              <p className="text-sm text-white/70 leading-relaxed">Veja as imagens, favorite as melhores e baixe as que mais gostar.</p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <Share2 className="text-orange-400 mb-4" size={24} />
              <p className="text-sm text-white/70 leading-relaxed">Compartilhe em segundos com família e amigos, inclusive no WhatsApp.</p>
            </div>
          </div>
        </div>

        <div id="publico" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <CalendarDays className="text-orange-400" size={22} />
            <h2 className="text-2xl font-bold text-[#f5f5f5]">Para quem é</h2>
          </div>

          <p className="text-base text-white/65 leading-relaxed bg-[#111] border border-white/5 rounded-2xl p-8">
            O Bom Dia Mensagens é para quem gosta de enviar carinho no dia a dia com praticidade. Ideal para adultos e idosos que querem um app simples, legível e rápido para encontrar mensagens bonitas e compartilhar sem dificuldade.
          </p>
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Download className="text-orange-400" size={22} />
            <h2 className="text-2xl font-bold text-[#f5f5f5]">CTA</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Baixe o app e envie uma mensagem bonita hoje mesmo.',
              'Favorite suas imagens preferidas e compartilhe quando quiser.',
              'Abra o app, escolha a categoria e envie com poucos toques.',
            ].map((cta, i) => (
              <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-sm text-white/75 leading-relaxed">
                {cta}
              </div>
            ))}
          </div>
        </div>

        {/* Blog & Atualizações */}
        <ProjectBlogSection projectSlug="bom-dia-mensagens" projectName="Bom Dia Mensagens" />

        <div className="flex flex-col items-center border-t border-white/5 pt-12">
          <Link
            href="/bomdiamensagens/politicadeprivacidade"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold text-white/60 hover:text-white"
          >
            <ShieldCheck size={16} className="text-orange-400" />
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
