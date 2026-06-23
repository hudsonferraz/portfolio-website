export default {
  accessibility: {
    skipToContent: "Pular para o conteúdo principal",
    openMenu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação",
    switchToDark: "Ativar modo escuro",
    switchToLight: "Ativar modo claro",
  },
  nav: {
    home: "Home",
    about: "Sobre Mim",
    experience: "Experiência",
    projects: "Projetos",
    skills: "Habilidades",
    contact: "Contato",
  },
  intro: {
    greeting: "Olá, meu nome é Hudson.",
    role: "Sou",
    roleBold: "desenvolvedor full-stack",
    passion: "especializado em",
    passionItalic: "high-frequency trading e market-making",
    focus: "com foco em",
    focusTech: "TypeScript, Python e sistemas em produção",
    contactButton: "Entre em contato",
    downloadCV: "Download CV",
  },
  about: {
    title: "Sobre Mim",
    description:
      "Projeto e opero integrações com exchanges (CLOB e AMM), motores de estratégia e infraestrutura de produção para bots de trading de longa duração. Priorizo automação confiável, observabilidade clara e código sustentável que suporta pesquisa (backtesting) e trading ao vivo.",
    description2:
      "Estudei Sistemas de Informação na UFVJM (Diamantina, MG). Entrei na programação por bots de jogos e segui evoluindo de forma autodidata. Hoje atuo na Funttastic em plataformas de HFT e market-making, construindo conectores de exchange, motores de liquidez e infraestrutura distribuída em múltiplas blockchains.",
    englishNote:
      "Fluente em inglês (EF SET C2 Proficient). À vontade para colaborar com equipes internacionais em inglês.",
  },
  experience: {
    title: "Experiência",
    roles: {
      funttastic: {
        title: "Desenvolvedor Full-Stack",
        company: "Funttastic - Remoto",
        date: "2024 - Atual",
        description:
          "Atuo em plataformas de high-frequency trading e market-making, integrando exchanges, algoritmos de provisionamento de liquidez e infraestrutura distribuída em múltiplas blockchains.",
        highlightsTitle: "Trabalho técnico em destaque",
      },
      education: {
        title: "Sistemas de Informação",
        company: "UFVJM - Diamantina, MG",
        date: "2014 - Incompleto",
        description:
          "Formação em engenharia de software e projetos de sistemas. Aprendizado contínuo por meio de estudo autodidata e trabalho em produção com sistemas de trading e desenvolvimento full-stack.",
      },
    },
    highlights: {
      hummingbot: {
        title: "Conectores open-source Hummingbot",
        description:
          "Desenvolvi conectores customizados para venues CLOB e AMM, estendendo o Hummingbot para sistemas de trading distribuídos e padrões reutilizáveis de integração.",
        tags: ["Python", "CLOB", "AMM", "Hummingbot"],
      },
      rujira: {
        title: "Bot HFT na blockchain Rujira",
        description:
          "Arquitetei um bot HFT completo para Rujira Trade (FIN) com GraphQL e Cosmos SDK, incluindo motores adaptativos de spread/skew e monitoramento de P&L em tempo real.",
        tags: ["TypeScript", "GraphQL", "Cosmos SDK", "HFT"],
      },
      barracuda: {
        title: "Plataforma HFT Barracuda",
        description:
          "Desenvolvi um sistema em TypeScript/Bun para market making automatizado e gestão de liquidez, com adaptadores para Raydium, Rujira e venues via CCXT.",
        tags: ["TypeScript", "Bun", "CCXT", "Raydium"],
      },
    },
  },
  projects: {
    title: "Projetos Selecionados",
    subtitle:
      "Três projetos atuais que mostram meu alcance de produto: pesquisa em trading, automação resiliente e ferramentas full-stack com limites operacionais claros.",
    readCaseStudy: "Case study",
    liveDemo: "Demo ao vivo",
    sourceCode: "Código fonte",
    openLive: "Abrir demo ao vivo de",
    openSource: "Abrir código fonte de",
    imageAlt: "Captura de tela de",
    status: {
      live: "Projeto no ar",
      research: "Lab de pesquisa",
    },
    detail: {
      backToProjects: "Voltar aos projetos",
      overview: "Visão geral",
      stack: "Stack",
      problem: "Problema",
      build: "Construção",
      highlights: "Destaques de engenharia",
      constraints: "Limites e trade-offs",
      results: "O que demonstra",
      links: "Links do projeto",
    },
  },
  skills: {
    title: "Habilidades",
    subtitle:
      "Tecnologias e domínios que uso para construir sistemas de trading e software em produção.",
    categories: {
      languages: "Linguagens",
      trading: "Trading e automação",
      blockchain: "Blockchain e DeFi",
      frontend: "Frontend",
      infrastructure: "Infraestrutura e ferramentas",
      data: "Dados e persistência",
    },
    items: {
      languages: ["TypeScript", "Python", "JavaScript"],
      trading: [
        "HFT",
        "Market Making",
        "Backtesting",
        "Motores de Estratégia",
        "CCXT",
        "Hummingbot",
      ],
      blockchain: ["Cosmos SDK", "GraphQL", "CLOB", "AMM", "Raydium"],
      frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      infrastructure: [
        "Git",
        "Docker",
        "Bun",
        "Node.js",
        "Observabilidade",
        "Linux",
      ],
      data: ["MySQL", "MongoDB", "Prisma", "REST APIs"],
    },
  },
  contact: {
    title: "Entre em contato",
    description: "Favor me contatar diretamente no email",
    or: "ou através do formulário abaixo.",
    emailPlaceholder: "Seu email",
    messagePlaceholder: "Sua mensagem",
    sendButton: "Enviar",
    successMessage: "Email enviado com sucesso!",
    errors: {
      invalidEmail: "Email inválido. Por favor, verifique e tente novamente.",
      invalidEmailFormat:
        "Formato de email inválido. Por favor, verifique e tente novamente.",
      invalidMessage: "Mensagem inválida. Por favor, verifique e tente novamente.",
      emptyMessage: "A mensagem não pode estar vazia.",
      rateLimited:
        "Muitas mensagens enviadas. Aguarde alguns minutos e tente novamente.",
      sendFailed: "Falha ao enviar o email. Por favor, tente novamente mais tarde.",
    },
  },
  notFound: {
    title: "Página não encontrada",
    description:
      "A página que você procura não existe ou pode ter sido movida.",
    backHome: "Voltar ao início",
  },
  footer: {
    tagline:
      "Desenvolvedor full-stack em sistemas de trading, integrações com exchanges e infraestrutura em produção.",
    location: "Brasil - Remoto",
    copyright: "Todos os direitos reservados.",
    stackNote:
      "Feito com Next.js, TypeScript, Tailwind CSS, Framer Motion e publicado na Vercel.",
  },
  projectsData: {
    vgcTeamLab: {
      title: "VGC Team Lab",
      description:
        "Um team builder full-stack para Pokémon competitivo em doubles, com meta ao vivo da Pikalytics, checagens de legalidade por regulamento, import/export do Showdown, links compartilháveis e coaching por IA em rota protegida.",
      outcome:
        "O diferencial é a UX honesta ao lidar com dados imperfeitos de regras: meta fallback, estados pendentes de learnset, avisos de formatos não verificados e storage local sem conta.",
      detail: {
        summary:
          "VGC Team Lab transforma montagem de times competitivos em um fluxo guiado: montar roster, aplicar sets do meta, inspecionar legalidade, revisar cobertura de matchups, pedir coaching e exportar o resultado para Pokémon Showdown.",
        problem:
          "Ferramentas de VGC precisam lidar com formatos que mudam rápido, dados parciais e fluxos de jogador que alternam entre estatísticas de uso, legalidade e pastes do Showdown. O objetivo foi deixar essas transições coerentes sem fingir que o app é uma autoridade oficial de torneio.",
        build:
          "O app é uma SPA em React com um proxy Express para dados ao vivo da Pikalytics e coaching por IA. Os times ficam em localStorage, enquanto o servidor cuida de CORS, rate limits, credenciais da Hugging Face, parsing da Pikalytics, cache fallback e validação de payload.",
        highlights: [
          "Team builder em seis etapas: roster, sets, legalidade, matchups, coach e export.",
          "Checagens de legalidade por regulamento com estados pendentes e avisos explícitos quando a fonte está incompleta.",
          "Import/export do Showdown, mapeamento de nomes de formas VGC e links compartilháveis para payloads compactos.",
          "Rota de IA no servidor mantém tokens fora do navegador e aplica timeout, allowlist e rate limit."
        ],
        constraints: [
          "É um laboratório de team building, não uma autoridade oficial de legalidade Pokémon.",
          "Os times ficam locais no navegador, exceto quando exportados ou compartilhados por URL.",
          "Dados da Pikalytics são lidos e cacheados, então a UI mostra fallback e estados de cold start."
        ],
        results: [
          "69 testes automatizados cobrindo legalidade, parsing Showdown, saúde de schema, proteção de API e smoke tests.",
          "Um projeto de portfólio que mostra UX de produto, integração de APIs e comunicação cuidadosa de incerteza de dados.",
          "Frontend no GitHub Pages com proxy de API implantado separadamente no Render."
        ],
      },
    },
    priceMonitor: {
      title: "Facebook Marketplace Price Monitor",
      description:
        "Um rastreador de ofertas focado no Brasil que salva buscas do Marketplace, executa polling por worker Playwright, compara histórico de anúncios e gera alertas no dashboard ou por email para novos matches e quedas de preço.",
      outcome:
        "Ele mostra o lado operacional do full-stack: agendamento com BullMQ, jobs em Redis, persistência Neon/Prisma, OAuth, emails com Resend, mock mode e deploy dividido entre Vercel e Render.",
      detail: {
        summary:
          "Price Monitor é um sistema de alertas single-user para marketplace: salve palavra-chave e faixa de preço, deixe um worker consultar o Facebook Marketplace, compare resultados contra preços históricos e veja novos anúncios ou quedas no dashboard e por email.",
        problem:
          "Monitorar Marketplace é bagunçado porque a UI muda, sessões expiram, jobs podem sobrepor e alertas precisam de memória por busca. O app foca em uma forma pequena, mas realista, de produção em vez de um scraper de caminho feliz.",
        build:
          "O web app roda em Next.js com NextAuth, Prisma, Neon Postgres e Upstash Redis. Um worker separado no Render executa Playwright e jobs BullMQ, combina saídas de parsers GraphQL/JSON/DOM, registra poll runs e envia emails via Resend quando a preferência do usuário permite.",
        highlights: [
          "Scheduler BullMQ com deduplicação, concorrência 1, cooldown manual, recuperação de RUNNING stale e backoff exponencial.",
          "Memória de preço por busca para detectar quedas corretamente mesmo com buscas sobrepostas.",
          "Stack de parsers que combina interceptação GraphQL, JSON embutido e fallback DOM.",
          "Mock mode para testar alertas e email localmente sem sessão ativa do Facebook."
        ],
        constraints: [
          "É uma ferramenta pessoal e educacional, não infraestrutura autorizada pela Meta.",
          "Polling real depende de uma sessão exportada do Facebook que pode expirar e precisa ser renovada manualmente.",
          "O worker fica separado da Vercel porque Playwright precisa de um ambiente de servidor long-running."
        ],
        results: [
          "57 testes automatizados cobrindo parsing de preço, parsing URL/DOM/JSON, agendamento, rate limits, lógica de alertas, segurança de email e schemas.",
          "Um sistema full-stack implantável com fronteira clara entre web e worker e documentação operacional.",
          "UX Brazil-first com centavos em BRL, pt-BR como padrão, dicas de localização do Marketplace e suporte a inglês."
        ],
      },
    },
    cryptoMmLab: {
      title: "Crypto Market Making Lab",
      description:
        "Um laboratório de pesquisa em market-making paper-only que lê order books de CEX, simula quotes e fills, acompanha inventário/P&L, compara CEX vs Uniswap V2 e expõe um dashboard FastAPI.",
      outcome:
        "É o projeto mais próximo do meu trabalho em sistemas de trading: controles de risco, kill switch, proteção contra dados stale, estratégias plugáveis, backtesting, métricas Prometheus, Grafana e auditoria por tick.",
      detail: {
        summary:
          "Crypto MM Lab é um loop paper trading end-to-end para estudar mecânicas de market-making: buscar order books públicos, colocar quotes simuladas, processar fills, acompanhar PnL, escanear diferenças CEX/DEX e inspecionar o sistema por APIs e dashboards.",
        problem:
          "Pesquisa em market-making precisa de mais do que um notebook. É necessário um loop repetível, controles de risco explícitos, observabilidade, trilhas de auditoria e backtests que usem as mesmas premissas das estratégias do loop paper ao vivo.",
        build:
          "O backend é FastAPI com dados de mercado via CCXT, persistência SQLAlchemy, módulos de estratégia, paper broker, métricas Prometheus, dashboards Grafana, Docker Compose e scripts para loops ao vivo ou replay histórico.",
        highlights: [
          "Tick IDs compartilhados conectam order books, quotes, fills, posições, PnL e oportunidades para auditoria.",
          "Controles de risco incluem limites de posição, reserva acumulada de caixa, cancelamento em tick stale e kill switch.",
          "Estratégias plugáveis cobrem market making puro, inventory skew e spreads ajustados por volatilidade.",
          "Backtest replaya snapshots SQLite/Postgres ou fixtures CSV com drawdown, fill rate e métrica tipo Sharpe."
        ],
        constraints: [
          "O sistema é paper-only e nunca envia ordens reais para CEX ou on-chain.",
          "A execução é simulada com modelos conservadores de fill e sem modelo de posição na fila ou latência.",
          "Dashboard e APIs são intencionalmente sem autenticação para pesquisa local, então não devem ser expostos publicamente sem proxy."
        ],
        results: [
          "110 testes automatizados cobrindo matemática de order book, fills, PnL, AMM, scanner de arbitragem, backtests, rotas API, proteção contra dados stale e recuperação do loop.",
          "Uma demo de fundamentos de sistemas de trading: controles, observabilidade, persistência e tratamento de falhas.",
          "Uma stack Docker que sobe app, Prometheus e Grafana para monitoramento local."
        ],
      },
    },
  },
};
