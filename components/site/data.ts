import type { LucideIcon } from 'lucide-react';
import { Dumbbell, BrainCircuit, MessageCircleHeart, Clock, Droplets, Wallet, Users, Star, Globe, Calendar, BookOpen, ImageIcon, Share2 } from 'lucide-react';

export type Slide =
  | { kind: 'phones'; images: string[] }
  | { kind: 'image'; src: string; fit?: 'cover' | 'contain'; position?: string }
  | { kind: 'poster' };

export type Project = {
  slug: string;
  num: string;
  name: string;
  lines: string[];
  subtitle: string;
  kind: string;
  tags: string[];
  statusBadge?: string;
  platform: string;
  href: string;
  external?: boolean;
  googlePlayHref?: string;
  cta: string;
  icon: LucideIcon;
  iconImage?: string;
  desc1: string;
  desc2: string;
  features: string[];
  highlights?: { icon: LucideIcon; title?: string; text: string }[];
  type: 'phones' | 'browser' | 'card';
  images?: string[];
  browserUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'farol-capital',
    num: '01',
    name: 'Farol Capital',
    lines: ['Farol Capital'],
    subtitle: 'CONTROLE FINANCEIRO',
    kind: 'App Mobile · Finanças',
    tags: ['APP MOBILE', 'ANDROID', 'FINANÇAS'],
    statusBadge: 'Na Google Play',
    platform: 'Android',
    href: '/farolcapital',
    googlePlayHref: 'https://play.google.com/store/apps/details?id=com.kurupiralabs.farol_capital',
    cta: 'Mais detalhes',
    icon: Wallet,
    iconImage: '/images/icone-farol-capital.png',
    desc1: 'Organize suas finanças de forma prática e inteligente. Registre gastos, acompanhe seu fluxo de dinheiro e visualize sua situação financeira com clareza.',
    desc2: 'Projeções futuras baseadas nos seus hábitos ajudam a planejar metas e tomar decisões mais seguras.',
    features: ['Registro de gastos inteligente', 'Acompanhamento do fluxo de dinheiro', 'Projeções financeiras futuras'],
    type: 'phones',
    images: [
      '/images/tela-farol-capital-1.jpeg',
      '/images/tela-farol-capital-2.jpeg',
      '/images/tela-farol-capital-3.jpeg',
      '/images/tela-farol-capital-4.jpeg',
    ],
  },
  {
    slug: 'fitness-exclusive',
    num: '02',
    name: 'Fitness Exclusive',
    lines: ['Fitness', 'Exclusive'],
    subtitle: 'ACADEMIA & SAÚDE',
    kind: 'Site · Next.js · Academia',
    tags: ['SITE', 'NEXT.JS', 'FITNESS'],
    statusBadge: 'Ao vivo',
    platform: 'Web',
    href: 'https://fitnessexclusive.com.br',
    external: true,
    cta: 'Ver site ao vivo',
    icon: Dumbbell,
    desc1: 'Site completo para uma rede de academias com planos de assinatura, diferenciais, avaliações e integração com app de treino.',
    desc2: 'Design agressivo e moderno com foco em conversão — do hero até o checkout de planos mensais e anuais.',
    features: ['Planos de assinatura online', 'Avaliações e depoimentos', 'fitnessexclusive.com.br'],
    highlights: [
      { icon: Users, text: 'Planos de assinatura online' },
      { icon: Star, text: 'Avaliações e depoimentos' },
      { icon: Globe, text: 'fitnessexclusive.com.br' },
    ],
    type: 'browser',
    browserUrl: 'fitnessexclusive.com.br',
    images: ['/images/fitness-hero.png', '/images/fitness-mid.png'],
  },
  {
    slug: 'beatriz-silvestre',
    num: '03',
    name: 'Beatriz Silvestre',
    lines: ['Beatriz', 'Silvestre'],
    subtitle: 'PSICÓLOGA · CRP 11/24329',
    kind: 'Site · Next.js · Psicologia',
    tags: ['SITE', 'NEXT.JS', 'PSICOLOGIA'],
    statusBadge: 'Em desenvolvimento',
    platform: 'Web',
    href: 'https://caiquegaldino.github.io/bia-psi/',
    external: true,
    cta: 'Ver prévia',
    icon: BrainCircuit,
    desc1: 'Site profissional para uma psicóloga com atendimento presencial e online, focado em conversão de consultas e construção de autoridade.',
    desc2: 'Design minimalista e acolhedor, com blog, seção de serviços, depoimentos e agendamento via WhatsApp.',
    features: ['Agendamento via WhatsApp', 'Blog e conteúdo de saúde mental', 'Design minimalista e acolhedor'],
    highlights: [
      { icon: Calendar, text: 'Agendamento via WhatsApp' },
      { icon: BookOpen, text: 'Blog e conteúdo' },
      { icon: Clock, text: 'Em desenvolvimento' },
    ],
    type: 'browser',
    browserUrl: 'caiquegaldino.github.io/bia-psi',
    images: ['/images/bia-psi-hero.png'],
  },
  {
    slug: 'oasis',
    num: '04',
    name: 'Oasis',
    lines: ['Oasis'],
    subtitle: 'HIDRATAÇÃO INTELIGENTE',
    kind: 'App Mobile · Saúde',
    tags: ['APP MOBILE', 'ANDROID', 'SAÚDE'],
    statusBadge: 'Em fase de testes',
    platform: 'Android',
    href: '/oasis',
    cta: 'Mais detalhes',
    icon: Droplets,
    iconImage: '/images/oasis-icone-semfundo.png',
    desc1: 'Um aplicativo simples e intuitivo que ajuda você a beber mais água e manter uma hidratação saudável no seu dia a dia.',
    desc2: 'Metas personalizadas dinâmicas, lembretes amigáveis não invasivos e um visual agradável para acompanhar seu progresso de onde você estiver.',
    features: ['Metas personalizadas dinâmicas', 'Lembretes amigáveis não invasivos', 'Acompanhamento do progresso diário'],
    type: 'phones',
    images: [
      '/images/oasis1.png',
      '/images/oasis2.png',
      '/images/oasis3.png',
      '/images/oasis4.png',
      '/images/oasis5.png',
    ],
  },
  {
    slug: 'bom-dia-mensagens',
    num: '05',
    name: 'Bom Dia Mensagens',
    lines: ['Bom Dia', 'Mensagens'],
    subtitle: 'MENSAGENS PARA O DIA A DIA',
    kind: 'App Mobile · Mensagens',
    tags: ['APP MOBILE', 'ANDROID', 'MENSAGENS'],
    platform: 'Android',
    href: '/bomdiamensagens',
    cta: 'Mais detalhes',
    icon: MessageCircleHeart,
    desc1: 'Encontre e compartilhe mensagens de bom dia, boa tarde, boa noite, feriados e datas comemorativas em poucos toques.',
    desc2: 'Interface simples, textos legíveis e navegação por períodos do dia para facilitar o uso diário, especialmente para público adulto e idoso.',
    features: ['Mensagens organizadas por períodos do dia', 'Favoritos e praticidade para reutilizar', 'Compartilhamento rápido no WhatsApp'],
    highlights: [
      { icon: ImageIcon, title: 'Mensagens organizadas', text: 'Acesse imagens por Bom dia, Boa tarde, Boa noite e datas especiais.' },
      { icon: Star, title: 'Favoritos e praticidade', text: 'Guarde as suas mensagens preferidas para enviar novamente quando quiser.' },
      { icon: Share2, title: 'Compartilhe no WhatsApp', text: 'Baixe e compartilhe com rapidez, sem complicação.' },
    ],
    type: 'card',
  },
  {
    slug: 'daily-tasks',
    num: '06',
    name: 'Daily Tasks',
    lines: ['Daily Tasks'],
    subtitle: 'ORGANIZAÇÃO PESSOAL E PROFISSIONAL',
    kind: 'App Mobile · Produtividade',
    tags: ['APP MOBILE', 'ANDROID', 'PRODUTIVIDADE'],
    platform: 'Android',
    href: '/dailytasks',
    cta: 'Mais detalhes',
    icon: Clock,
    desc1: 'Uma lista única para organizar tarefas pessoais e de trabalho no mesmo lugar, com foco total em praticidade e constância.',
    desc2: 'Categorias, prioridades, recorrência e histórico ajudam você a manter o ritmo e executar o que realmente importa, todos os dias.',
    features: ['Tarefas pessoais e de trabalho unificadas', 'Recorrência diária, semanal e mensal', 'Prioridades, checklist e notificações com foco real'],
    highlights: [
      { icon: Users, title: 'Tudo no mesmo app', text: 'Tarefas pessoais e de trabalho organizadas em uma lista única.' },
      { icon: Calendar, title: 'Rotina com constância', text: 'Recorrência diária, semanal e mensal com histórico e calendário.' },
      { icon: Star, title: 'Produtividade real', text: 'Prioridades, checklist e notificações para manter o foco no que importa.' },
    ],
    type: 'card',
  },
];

export const upClose = [
  { index: '01', name: 'Farol Capital', label: 'Controle de Gastos', href: '/farolcapital', src: '/images/tela-farol-capital-1.jpeg', phone: true },
  { index: '02', name: 'Fitness Exclusive', label: 'Academia & Assinaturas', href: 'https://fitnessexclusive.com.br', src: '/images/fitness-hero.png', wide: true, position: 'top center' },
  { index: '04', name: 'Oasis', label: 'Metas de Hidratação', href: '/oasis', src: '/images/oasis1.png', phone: true },
  { index: '03', name: 'Beatriz Silvestre', label: 'Psicologia & Agendamento', href: 'https://caiquegaldino.github.io/bia-psi/', src: '/images/bia-psi-hero.png', wide: true, position: 'top center' },
  { index: '01', name: 'Farol Capital', label: 'Fluxo Financeiro', href: '/farolcapital', src: '/images/tela-farol-capital-3.jpeg', phone: true },
  { index: '02', name: 'Fitness Exclusive', label: 'Planos & Treinos', href: 'https://fitnessexclusive.com.br', src: '/images/fitness-mid.png', wide: true },
  { index: '04', name: 'Oasis', label: 'Lembretes Amigáveis', href: '/oasis', src: '/images/oasis4.png', phone: true },
  { index: '01', name: 'Farol Capital', label: 'Metas e Projeções', href: '/farolcapital', src: '/images/tela-farol-capital-4.jpeg', phone: true },
];

export const services = [
  { n: '01', title: 'Apps Mobile', description: 'Aplicativos Android nativos e intuitivos pensados para o dia a dia, da ideia inicial à publicação na Google Play.', href: '#projetos' },
  { n: '02', title: 'Sites & Web', description: 'Sites rápidos e modernos desenvolvidos em Next.js, unindo design agressivo, identidade marcante e foco em conversão.', href: '#projetos' },
  { n: '03', title: 'Protótipos Rápidos', description: 'Transformamos perguntas e ideias em código funcional. Rápido, direto, imperfeito e pronto para validação prática.', href: '#processo' },
  { n: '04', title: 'Comunidade Dev', description: 'Grupo solidário para desenvolvedores independentes se ajudarem a bater os 20 testadores exigidos pelo Google Play.', href: '#comunidade' },
];

export const steps = [
  { n: '01', title: 'Ideias', body: 'Tudo começa com uma pergunta genuína ou uma dor que precisa ser resolvida.' },
  { n: '02', title: 'Protótipos', body: 'Transformamos perguntas em código. Rápido, imperfeito, funcional.' },
  { n: '03', title: 'Aprendizado', body: 'Cada projeto — lançado ou não — deixa uma lição. É o combustível do próximo.' },
];

export const principles = [
  'Curiosidade antes de tudo',
  'Simplicidade acima de complexidade',
  'Aprender fazendo',
  'Evoluir um pouco todo dia',
];

export const manifesto = {
  quote: 'A Kurupira Labs surgiu do interesse genuíno por tecnologia. De desmontar, errar e tentar de novo.',
  intention: 'A Kurupira Labs não é sobre chegar rápido. É sobre ir com intenção.',
  motto: 'Criar por curiosidade · Construir por prazer',
};

export const betaTestersInfo = {
  title: 'Apoio Mútuo entre Desenvolvedores',
  badge: 'Google Play Console · 20 Testadores',
  description:
    'Sabemos o quão difícil é conseguir os 20 testadores exigidos pelo Google Play. Criei um grupo no Google (Google Groups) para desenvolvedores se ajudarem testando os apps uns dos outros. Junte-se a nós para dar e receber apoio na comunidade!',
  email: 'cont.caique@gmail.com',
};

export const EMAIL = 'cont.caique@gmail.com';
export const GITHUB = 'https://github.com/CaiqueGaldino';
