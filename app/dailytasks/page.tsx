import Link from 'next/link';
import { CheckSquare, Briefcase, User, Bell, CalendarDays, BarChart3, ArrowRight, ShieldCheck } from 'lucide-react';
import ProjectBlogSection from '@/components/site/ProjectBlogSection';

export const metadata = {
  title: 'Daily Tasks | Kurupira Labs',
  description: 'Organize tarefas pessoais e de trabalho em um só app com recorrência, prioridades e histórico de consistência para manter sua produtividade.',
};

export default function DailyTasksPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-gray-200 font-sans selection:bg-indigo-500/30">
      <div className="container mx-auto px-6 py-8 flex justify-between items-center max-w-5xl">
        <Link href="/" className="text-white/50 hover:text-white transition-colors text-sm font-semibold tracking-widest flex items-center gap-2">
          ← VOLTAR
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-32 h-32 md:w-44 md:h-44 shrink-0 rounded-3xl border border-white/10 shadow-2xl bg-[#111] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl"></div>
            <CheckSquare size={64} className="text-indigo-400 relative z-10" strokeWidth={1.7} />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#f5f5f5] mb-4">
              Organize tudo. Entregue mais.
            </h1>
            <p className="text-lg md:text-xl text-indigo-300 font-light mb-8">
              O Daily Tasks reúne tarefas pessoais e de trabalho em um só lugar para você manter foco, ritmo e produtividade todos os dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#beneficios" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-sm transition-colors">
                VER BENEFÍCIOS
              </a>
              <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-sm transition-colors">
                COMO FUNCIONA
              </a>
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-sm transition-colors">
                QUERO USAR
              </a>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <p className="text-base text-white/70 leading-relaxed mb-5">
            O Daily Tasks foi criado para quem precisa dar conta da vida pessoal e do trabalho sem bagunça. Em vez de espalhar tarefas em vários lugares, você centraliza tudo em uma lista única, com categorias, prioridades e subtarefas para enxergar o que precisa ser feito com clareza.
          </p>
          <p className="text-base text-white/60 leading-relaxed">
            Com recorrência, notificações inteligentes e histórico de consistência, fica mais fácil manter rotina, cumprir prazos e evoluir com constância. É organização prática para sua rotina real, com interface moderna, simples e direta.
          </p>
        </div>

        <div id="beneficios" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <ArrowRight className="text-indigo-400" size={22} />
            <h2 className="text-2xl font-bold text-[#f5f5f5]">6 benefícios objetivos</h2>
          </div>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Tarefas pessoais e profissionais no mesmo app, sem trocar de ferramenta.',
              'Categorias personalizáveis com cores e ícones para organizar do seu jeito.',
              'Prioridades baixa, média e alta para focar no que é mais importante agora.',
              'Checklist e subtarefas para quebrar atividades grandes em passos simples.',
              'Recorrência diária, semanal e mensal para manter hábitos e demandas em dia.',
              'Relatórios e calendário de consistência para acompanhar evolução com clareza.',
            ].map((item, index) => (
              <li key={index} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-sm text-white/70 leading-relaxed flex items-start gap-3">
                <ArrowRight size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="como-funciona" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <CalendarDays className="text-indigo-400" size={22} />
            <h2 className="text-2xl font-bold text-[#f5f5f5]">Como funciona</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <div className="text-indigo-300 font-bold text-sm mb-3">PASSO 1</div>
              <div className="flex items-center gap-2 mb-3">
                <User className="text-indigo-400" size={18} />
                <p className="text-white font-semibold">Organize sua base</p>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">Crie categorias, escolha cores e ícones, defina idioma e tema para deixar o app com a sua cara.</p>
            </div>

            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <div className="text-indigo-300 font-bold text-sm mb-3">PASSO 2</div>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="text-indigo-400" size={18} />
                <p className="text-white font-semibold">Cadastre e priorize</p>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">Adicione tarefas pessoais e de trabalho, use prioridades e checklist, e configure recorrência quando necessário.</p>
            </div>

            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <div className="text-indigo-300 font-bold text-sm mb-3">PASSO 3</div>
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="text-indigo-400" size={18} />
                <p className="text-white font-semibold">Mantenha constância</p>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">Receba notificações inteligentes e acompanhe seu ritmo com relatórios e calendário de consistência.</p>
            </div>
          </div>
        </div>

        <div id="cta" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Bell className="text-indigo-400" size={22} />
            <h2 className="text-2xl font-bold text-[#f5f5f5]">CTA</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Comece hoje e transforme sua rotina em resultados.',
              'Centralize suas tarefas e ganhe clareza no seu dia.',
              'Use o Daily Tasks e mantenha sua constância em alta.',
            ].map((cta, i) => (
              <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-sm text-white/75 leading-relaxed">
                {cta}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24 bg-[#111] border border-white/5 rounded-2xl p-6">
          <p className="text-sm text-white/65 leading-relaxed">
            Recursos incluídos: 9 temas visuais, funcionamento offline com dados locais, backup e restauração por JSON e suporte a idiomas PT e EN.
          </p>
        </div>

        {/* Blog & Atualizações */}
        <ProjectBlogSection projectSlug="daily-tasks" projectName="Daily Tasks" />

        <div className="flex flex-col items-center border-t border-white/5 pt-12">
          <Link
            href="/dailytasks/politicadeprivacidade"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold text-white/60 hover:text-white"
          >
            <ShieldCheck size={16} className="text-indigo-400" />
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
