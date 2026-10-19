export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string; // ISO date YYYY-MM-DD
  dateFormatted: string; // Display date
  readTime: string; // e.g., "4 min de leitura"
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  tags: string[];
  projectSlug?: string; // Links to projects: 'oasis' | 'farol-capital' | 'daily-tasks' | 'bom-dia-mensagens' | 'fitness-exclusive' | 'beatriz-silvestre'
  projectName?: string; // Display name of the project
  projectHref?: string; // Link to the project page
  coverImage?: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      title?: string;
      paragraphs: string[];
      highlight?: string;
      bulletPoints?: string[];
    }[];
    conclusion?: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'oasis-redefinindo-habito-hidratacao',
    title: 'Oasis: Redefinindo o hábito diário de hidratação com simplicidade',
    subtitle: 'Por trás da concepção do app: menos fricção, metas adaptativas e design acolhedor.',
    excerpt: 'Descubra como projetamos o Oasis para transformar o simples ato de beber água em um ritual agradável, fugindo das notificações invasivas dos apps tradicionais.',
    date: '2026-10-18',
    dateFormatted: '18 de Outubro, 2026',
    readTime: '4 min de leitura',
    author: {
      name: 'Caique Galdino',
      role: 'Fundador · Kurupira Labs',
    },
    tags: ['OASIS', 'HEALTH & TECH', 'DEV LOG', 'ANDROID'],
    projectSlug: 'oasis',
    projectName: 'Oasis',
    projectHref: '/oasis',
    featured: true,
    content: {
      intro: 'A maioria dos aplicativos de saúde tenta vencer pelo cansaço: dezenas de alarmes barulhentos por dia, formulários intermináveis e gráficos complexos demais para quem só queria lembrar de tomar água. Com o Oasis, a nossa proposta foi na direção oposta: foco no essencial, respeito ao ritmo do usuário e uma interface que dá prazer de abrir.',
      sections: [
        {
          title: 'O problema dos apps tradicionais',
          paragraphs: [
            'Ao analisar os apps mais populares da categoria na Google Play, percebemos um padrão desconfortável: notificações punitivas e excesso de anúncios na tela principal.',
            'O ato de se hidratar deve ser um autocuidado sutil, não uma cobrança neurótica no meio de uma reunião de trabalho ou momento de descanso.'
          ],
          highlight: 'Uma boa ferramenta digital não disputa a sua atenção; ela devolve o seu tempo e clareza mental.',
        },
        {
          title: 'A metáfora do copo d\'água dinâmico',
          paragraphs: [
            'Queríamos uma representação visual que não precisasse de números para ser entendida. Desenhamos um copo que se preenche com uma animação fluida conforme o usuário toca em atalhos rápidos (100ml, 250ml, 500ml ou 1L).',
            'O cálculo da meta também leva em conta clima da região, nível de intensidade das atividades e peso corporal, gerando uma recomendação inteligente sem exigir que a pessoa seja especialista em nutrição.'
          ],
          bulletPoints: [
            'Cálculo adaptativo com base em dados anatômicos básicos e clima',
            'Registro em apenas um toque na tela inicial (One-Tap Intake)',
            'Notificações amigáveis e distribuídas de acordo com seu horário de vigília',
            'Histórico semanal limpo para visualizar a evolução'
          ]
        },
        {
          title: 'Próximos passos e fase de testes',
          paragraphs: [
            'O app está na sua fase beta fechada com a comunidade do Google Groups para validar a estabilidade em diferentes aparelhos Android antes da estreia oficial pública.',
            'Se você deseja testar em primeira mão e nos ajudar com feedbacks, venha ser um testador no nosso grupo da comunidade.'
          ]
        }
      ],
      conclusion: 'Oasis é mais do que um rastreador; é um lembrete diário de que o design atencioso pode transformar pequenos hábitos cotidianos.'
    }
  },
  {
    slug: 'farol-capital-previsibilidade-financeira-offline',
    title: 'Farol Capital: Previsibilidade financeira sem planilhas confusas',
    subtitle: 'Por que escolhemos uma arquitetura 100% offline e focada em antecipação de fluxo de caixa.',
    excerpt: 'A maioria dos apps financeiros mostra apenas onde você já errou. O Farol Capital foi desenhado para iluminar o seu saldo nos próximos meses antes de você passar o cartão.',
    date: '2026-10-12',
    dateFormatted: '12 de Outubro, 2026',
    readTime: '5 min de leitura',
    author: {
      name: 'Caique Galdino',
      role: 'Fundador · Kurupira Labs',
    },
    tags: ['FAROL CAPITAL', 'FINANÇAS', 'OFFLINE-FIRST', 'ANDROID'],
    projectSlug: 'farol-capital',
    projectName: 'Farol Capital',
    projectHref: '/farolcapital',
    featured: true,
    content: {
      intro: 'Quando olhamos para a nossa conta bancária, o saldo exibido é uma mentira: ele ignora o aluguel que vence semana que vem, a parcela da viagem e a fatura do cartão no fim do mês. Por isso criamos o Farol Capital: para dar clareza de futuro.',
      sections: [
        {
          title: 'Do controle reativo para a antecipação ativa',
          paragraphs: [
            'Planilhas são poderosas, mas demandam manutenção manual exaustiva. Aplicativos de banco agregadores pedem senhas de acesso bancário, o que assusta muita gente — e com razão.',
            'O Farol Capital adota uma filosofia diferente: você registra parcelas, vencimentos e receitas recorrentes, e o app desenha um gráfico do seu saldo estimado dia após dia nos próximos 3, 6 ou 12 meses.'
          ],
          highlight: 'Saber se uma compra cabe no seu bolso não depende do dinheiro que você tem hoje, mas dos compromissos que você já assumiu para amanhã.',
        },
        {
          title: 'Privacidade radical: Arquitetura 100% Offline',
          paragraphs: [
            'Seus dados financeiros não devem morar na nuvem de ninguém. O Farol Capital armazena tudo localmente no seu dispositivo Android via SQLite criptografado.',
            'Não há servidores intermediários lendo seu padrão de consumo, nem necessidade de conexão com a internet para calcular projeções complexas.'
          ],
          bulletPoints: [
            'Zero telemetria financeira ou envio de dados a terceiros',
            'Cálculo de impacto instantâneo antes de assumir novos parcelamentos',
            'Interface com contraste alto e tipografia clara para visualização rápida',
            'Disponível diretamente na Google Play Store'
          ]
        }
      ],
      conclusion: 'Com o Farol Capital, você troca a ansiedade do chute pela segurança de saber exatamente onde estará sua saúde financeira nos próximos meses.'
    }
  },
  {
    slug: 'daily-tasks-rotina-sem-ruido',
    title: 'Daily Tasks: Organização pessoal e profissional em uma só lista',
    subtitle: 'Como eliminamos a sobrecarga de ferramentas e criamos uma rotina com constância.',
    excerpt: 'Quando a rotina é dividida em 5 aplicativos diferentes, você passa mais tempo organizando do que executando. Veja como o Daily Tasks unifica o essencial.',
    date: '2026-10-05',
    dateFormatted: '05 de Outubro, 2026',
    readTime: '3 min de leitura',
    author: {
      name: 'Caique Galdino',
      role: 'Fundador · Kurupira Labs',
    },
    tags: ['DAILY TASKS', 'PRODUTIVIDADE', 'DESIGN', 'UX'],
    projectSlug: 'daily-tasks',
    projectName: 'Daily Tasks',
    projectHref: '/dailytasks',
    featured: false,
    content: {
      intro: 'Trello, Notion, Todoist, Google Keep, agenda de papel... Em algum momento da vida, todo desenvolvedor e profissional criativo percebe que virou escravo das próprias ferramentas de produtividade. O Daily Tasks nasceu para quebrar esse ciclo.',
      sections: [
        {
          title: 'A armadilha da superorganização',
          paragraphs: [
            'Passar duas horas customizando painéis e cores dá uma falsa sensação de progresso. No fim do dia, as tarefas prioritárias continuam intocadas.',
            'O Daily Tasks foi desenhado com um princípio rígido: menos de 5 segundos para cadastrar uma tarefa e visualização em uma lista limpa por prioridades.'
          ],
          highlight: 'Produtividade real não é sobre ter mais listas; é sobre terminar o que importa com consistência.',
        },
        {
          title: 'Recorrência e consistência visual',
          paragraphs: [
            'A vida não é dividida estritamente em caixas de "Trabalho" e "Pessoal". Suas tarefas diárias acontecem no mesmo cérebro e no mesmo dia.',
            'Ao permitir categorização por cores e suporte a tarefas recorrentes (como pagar contas ou revisar código), o app entrega um panorama fiel do seu dia.'
          ],
          bulletPoints: [
            'Prioridades Alta, Média e Baixa destacadas com distinção óptica',
            'Subtarefas e checklists sem sair da visualização do item',
            'Histórico de consistência que celebra a sequência de dias produtivos'
          ]
        }
      ],
      conclusion: 'Simplicidade não é falta de recursos — é o resultado de decisões deliberadas sobre o que não colocar na tela.'
    }
  },
  {
    slug: 'criando-com-intencao-manifesto-kurupira-labs',
    title: 'Criar por curiosidade, construir por prazer: O manifesto da Kurupira Labs',
    subtitle: 'Os princípios por trás do nosso laboratório independente de produtos de software.',
    excerpt: 'A Kurupira Labs não é sobre chegar rápido; é sobre ir com intenção. Conheça as ideias que guiam cada projeto que sai da nossa bancada.',
    date: '2026-09-28',
    dateFormatted: '28 de Setembro, 2026',
    readTime: '4 min de leitura',
    author: {
      name: 'Caique Galdino',
      role: 'Fundador · Kurupira Labs',
    },
    tags: ['MANIFESTO', 'KURUPIRA LABS', 'INDIE DEV', 'CULTURA'],
    featured: false,
    content: {
      intro: 'A Kurupira Labs surgiu do interesse genuíno por tecnologia. De abrir, desmontar, errar e tentar de novo. Em um ecossistema dominado por métricas de vaidade e promessas exageradas, decidimos trilhar um caminho centrado em autonomia e artesanato de software.',
      sections: [
        {
          title: '1. Curiosidade antes de tudo',
          paragraphs: [
            'Os melhores produtos surgem de perguntas honestas: "Por que isso é tão chato de fazer no celular?", "Como esse problema ficaria resolvido com uma interface extremamente rápida?".',
            'Se perdemos a capacidade de nos fascinar com o ato de programar, o trabalho vira mera linha de produção.'
          ]
        },
        {
          title: '2. Simplicidade acima de complexidade',
          paragraphs: [
            'É fácil adicionar botões, configurações e telas. Difícil é subtrair até que sobre apenas o que toca o coração do usuário.',
            'Cada linha de código desnecessária é um débito cognitivo que o usuário paga ao interagir com o app.'
          ],
          highlight: 'A elegância de um produto digital reside naquilo que foi corajosamente deixado de fora.'
        },
        {
          title: '3. Apoio mútuo e comunidade',
          paragraphs: [
            'Desenvolvedores independentes enfrentam barreiras imensas — desde as políticas rígidas de publicação até a solidão de criar sozinho.',
            'Por isso valorizamos a colaboração aberta: compartilhamos aprendizados, ajudamos outros devs a bater os 20 testadores exigidos pelo Google Play e construímos pontes.'
          ]
        }
      ],
      conclusion: 'Não estamos construindo apenas aplicativos. Estamos construindo um laboratório onde a curiosidade e o prazer de criar continuam sendo o combustível principal.'
    }
  }
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByProject(projectSlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.projectSlug === projectSlug);
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  const posts = getAllBlogPosts();
  const featured = posts.filter((p) => p.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return posts.slice(0, limit);
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  blogPosts.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set);
}
