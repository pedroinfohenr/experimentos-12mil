import { 
  FAQItem, 
  Testimonial, 
  BonusItem, 
  ProblemCard, 
  SolutionCard, 
  PricingPlan,
  InteractiveMaterial
} from './types';

export const problems: ProblemCard[] = [
  {
    id: 'p1',
    iconName: 'Clock',
    title: 'Sem tempo para preparar',
    description: 'Você passa horas montando atividades do zero, toda semana, e ainda assim não dá conta de tudo.'
  },
  {
    id: 'p2',
    iconName: 'Frown',
    title: 'Alunos desmotivados',
    description: 'A turma não engaja com a aula expositiva tradicional e o celular vence a atenção a cada minuto.'
  },
  {
    id: 'p3',
    iconName: 'AlertTriangle',
    title: 'Cobrança da BNCC',
    description: 'Cada nova competência exige adaptar materiais e provar alinhamento — uma carga extra silenciosa.'
  }
];

export const solutions: SolutionCard[] = [
  {
    id: 's1',
    iconName: 'Sparkles',
    title: 'Engajamento real',
    description: 'Atividades que prendem a atenção e transformam o conteúdo em experiência viva.'
  },
  {
    id: 's2',
    iconName: 'Map',
    title: 'Ciências prática',
    description: 'Experimentos, atividades e jogos que tornam fácil o que antes era abstrato.'
  },
  {
    id: 's3',
    iconName: 'Users',
    title: 'Em grupo ou individual',
    description: 'Atividades pensadas para diferentes tamanhos de turma e níveis de habilidade.'
  },
  {
    id: 's4',
    iconName: 'BookOpen',
    title: '100% BNCC',
    description: 'Cada atividade vem com a competência e habilidade da BNCC já mapeadas.'
  },
  {
    id: 's5',
    iconName: 'Download',
    title: 'Pronto para imprimir',
    description: 'PDFs editáveis, em alta qualidade, prontos para a fotocopiadora ou para o projetor.'
  },
  {
    id: 's6',
    iconName: 'RefreshCw',
    title: 'Atualizações vitalícias',
    description: 'Receba todas as novas atividades que adicionarmos, sem pagar nada a mais. Para sempre.'
  }
];

export const bonuses: BonusItem[] = [
  {
    id: 'b1',
    title: 'Coleção com 30 Planos de Aula Prontos (BNCC)',
    description: 'Aulas 100% planejadas passo a passo alinhadas à BNCC. Chega de perder o domingo à noite criando planos do zero.',
    originalPrice: 37.00,
    currentPrice: 0.00,
    badge: 'GRÁTIS HOJE',
    imageAlt: 'Planos de Aula Prontos',
    illustrationType: 'plans'
  },
  {
    id: 'b2',
    title: '50 Atividades Prontas para Imprimir (Word & PDF)',
    description: 'Atividades de fixação e exercícios formatados prontos para fotocopiadora. Economize dezenas de horas de formatação.',
    originalPrice: 47.00,
    currentPrice: 0.00,
    badge: 'GRÁTIS HOJE',
    imageAlt: 'Atividades Prontas para Imprimir',
    illustrationType: 'guide'
  },
  {
    id: 'b3',
    title: 'Pacote Completo com 100 Avaliações de Ciências',
    description: 'Provas bimestrais, diagnósticas e atividades avaliativas com critérios de correção e gabaritos oficiais inclusos.',
    originalPrice: 47.00,
    currentPrice: 0.00,
    badge: 'GRÁTIS HOJE',
    imageAlt: 'Kit 100 Avaliações de Ciências',
    illustrationType: 'evaluation'
  },
  {
    id: 'b4',
    title: 'Guia do Professor & Planejamento Anual BNCC',
    description: 'Planejamento anual estruturado com todas as competências e habilidades mapeadas. Cale qualquer cobrança pedagógica com facilidade.',
    originalPrice: 55.00,
    currentPrice: 0.00,
    badge: 'GRÁTIS HOJE',
    imageAlt: 'Planejamento de Aulas BNCC',
    illustrationType: 'planning'
  },
  {
    id: 'b5',
    title: 'Coletânea de Experimentos de Física e Biologia',
    description: 'Experimentos de alto impacto com materiais simples sobre fenômenos físicos e processos biológicos para encantar seus alunos.',
    originalPrice: 49.00,
    currentPrice: 0.00,
    badge: 'GRÁTIS HOJE',
    imageAlt: 'Experimentos de Física e Biologia',
    illustrationType: 'experiments'
  }
];

export const plans: PricingPlan[] = [
  {
    id: 'essencial',
    name: 'Plano Básico',
    badge: 'CONTEÚDO REDUZIDO',
    description: 'Acesso básico contendo apenas os 365 experimentos de Ciências.',
    originalPrice: 47,
    promoPrice: 10,
    cents: '00',
    features: [
      { text: '365 Experimentos de Ciências Prontos', included: true },
      { text: 'Acesso imediato e vitalício', included: true },
      { text: 'Garantia incondicional de 7 dias', included: true },
      { text: '❌ Não inclui +100 avaliações prontas', included: false },
      { text: '❌ Não inclui +30 planos de aula completos', included: false },
      { text: '❌ Não inclui bônus premium exclusivos', included: false }
    ],
    buttonText: 'QUERO O PLANO BÁSICO',
    isPopular: false
  },
  {
    id: 'premium',
    name: 'Plano Completo',
    badge: 'MELHOR OPÇÃO • RECOMENDADO',
    description: 'Acesso total a todo o material + 100 avaliações + 30 planos de aula + TODOS os bônus!',
    originalPrice: 254,
    promoPrice: 27,
    cents: '00',
    features: [
      { text: '365 Experimentos de Ciências Prontos', included: true },
      { text: '+100 Avaliações Prontas (com Gabarito Oficial)', included: true },
      { text: '+30 Planos de Aula Completos (Alinhados à BNCC)', included: true },
      { text: '🎁 Experimentos Extras de Física e Biologia', included: true },
      { text: '🎁 Todos os 5 Bônus Premium Inclusos', included: true },
      { text: '🎁 Atualizações Vitalícias Gratuitas', included: true },
      { text: '🎁 Suporte VIP Prioritário 24/7', included: true },
      { text: 'Acesso imediato e vitalício', included: true },
      { text: 'Garantia incondicional de 7 dias', included: true }
    ],
    buttonText: 'QUERO O PLANO COMPLETO AGORA',
    isPopular: true
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    stars: 5,
    quote: 'Minhas aulas ficaram muito mais organizadas e os alunos começaram a participar muito mais das atividades. Valeu demais.',
    name: 'Prof. Carlos M.',
    role: 'Ensino Fundamental II — SP',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80'
  },
  {
    id: 't2',
    stars: 5,
    quote: 'Eu economizo várias horas por semana porque agora tenho atividades prontas para aplicar em sala.',
    name: 'Profª Juliana A.',
    role: 'Ensino Médio — MG',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&q=80'
  },
  {
    id: 't3',
    stars: 5,
    quote: 'As aulas ficaram muito mais divertidas e participativas. Meus alunos passaram a amar Ciências.',
    name: 'Prof. André S.',
    role: 'Fundamental I — BA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'O acesso chega na hora?',
    answer: 'Sim, o acesso é 100% imediato e automático! Assim que a confirmação do pagamento for concluída, você receberá um e-mail com seus dados de acesso exclusivos para baixar todos os arquivos organizados em PDF.'
  },
  {
    id: 'f2',
    question: 'Serve para quais níveis e idades?',
    answer: 'O material foi desenvolvido especificamente para alunos de 10 a 15 anos (Ensino Fundamental II). Todos os experimentos, avaliações e dinâmicas são 100% alinhados às diretrizes e competências da BNCC para essa faixa etária.'
  },
  {
    id: 'f3',
    question: 'É pagamento único ou mensalidade?',
    answer: 'É pagamento único! Você investe apenas uma vez e tem acesso vitalício a todo o conteúdo contratado, incluindo atualizações. Não há nenhuma taxa mensal, anuidade ou cobranças recorrentes adicionais.'
  },
  {
    id: 'f4',
    question: 'Qual a diferença entre o Pacote Básico e o Completo?',
    answer: 'O Pacote Básico inclui o pacote de 365 experimentos práticos. Já o Pacote Completo (mais recomendado) inclui todos os 365 experimentos e adiciona mais 5 bônus premium exclusivos: experimentos extras de Física e Biologia, 100 avaliações prontas, coleções de planos de aula, guias de planejamento prático e atividades de fixação.'
  },
  {
    id: 'f5',
    question: 'E se eu não gostar do material?',
    answer: 'Oferecemos uma Garantia Incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o material, basta enviar um e-mail em até 7 dias da sua compra que devolvermos 100% do seu dinheiro investido. Sem burocracia e sem perguntas.'
  }
];

export const materials: InteractiveMaterial[] = [
  {
    id: 'm1',
    title: 'Célula Animal 3D (Montável)',
    category: 'Citologia',
    description: 'Dinâmica de recortar e montar as organelas celulares em 3D, encaixando mitocôndrias, ribossomos e núcleo para entender suas funções.',
    ageGroup: '6º ao 9º ano',
    bnccCode: 'EF06CI05',
    previewType: 'cell'
  },
  {
    id: 'm2',
    title: 'Cadeia Alimentar Interativa',
    category: 'Ecologia',
    description: 'Jogo de cartas ilustradas de produtores, consumidores e decompositores onde os alunos montam teias ecológicas e simulam o fluxo de energia.',
    ageGroup: '4º ao 7º ano',
    bnccCode: 'EF04CI04',
    previewType: 'foodchain'
  },
  {
    id: 'm3',
    title: 'Sistema Solar em Escala',
    category: 'Astronomia',
    description: 'Dinâmica de cálculo e representação física dos diâmetros e distâncias dos planetas no pátio da escola usando barbantes e esferas.',
    ageGroup: '5º ao 9º ano',
    bnccCode: 'EF05CI11',
    previewType: 'solarsystem'
  },
  {
    id: 'm4',
    title: 'Simulador de Erupção Vulcânica',
    category: 'Geologia',
    description: 'Roteiro de experimento prático de vulcanismo com reações de bicarbonato e ácido, com fichas científicas para preenchimento de hipóteses.',
    ageGroup: '6º ao 8º ano',
    bnccCode: 'EF06CI11',
    previewType: 'volcano'
  }
];
