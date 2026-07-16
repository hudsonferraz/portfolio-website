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
      "Quatro projetos atuais que mostram meu alcance de produto: ferramentas úteis para o dia a dia, pesquisa em trading, automação local resiliente e produtos full-stack com limites operacionais claros.",
    readCaseStudy: "Case study",
    liveDemo: "Demo ao vivo",
    sourceCode: "Código fonte",
    openLive: "Abrir demo ao vivo de",
    openSource: "Abrir código fonte de",
    imageAlt: "Captura de tela de",
    status: {
      live: "Projeto no ar",
      research: "Lab de pesquisa",
      local: "App local-first",
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
      blockchain: ["Cosmos SDK", "GraphQL", "CLOB", "AMM", "web3.py"],
      frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      infrastructure: [
        "Git",
        "Docker",
        "Playwright",
        "BullMQ",
        "Prometheus",
        "Node.js",
      ],
      data: ["PostgreSQL", "Prisma", "Redis", "REST APIs"],
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
    secretSanta: {
      title: "Amigo Secreto",
      description:
        "Um app privado de amigo secreto criado para uso real em família: crie um evento, adicione participantes ou grupos, valide e rode o sorteio, e envie um link privado de revelação pelo WhatsApp.",
      outcome:
        "O trabalho de produto é o ponto forte: links privados em vez de busca por telefone, regras de grupos, validação antes de confirmar o sorteio, confirmação antes da revelação e dashboard mobile-first para o organizador.",
      detail: {
        summary:
          "Amigo Secreto substitui o fluxo de planilha e mensagens manuais por um app focado para o organizador: criar evento, gerenciar pessoas e grupos, executar um sorteio válido e compartilhar um link privado por participante.",
        problem:
          "Eventos pequenos de família ainda têm restrições reais de produto: os resultados não podem vazar, participantes não deveriam precisar criar conta, famílias/grupos podem exigir regras de separação e o organizador normalmente envia tudo pelo celular no WhatsApp.",
        build:
          "O app usa Next.js App Router, React, TypeScript, Prisma/PostgreSQL (Neon), validação com Zod, cookies JWT de sessão e Vitest. As atribuições ficam em relações no banco, as páginas de revelação usam tokens privados e o preview do sorteio usa as mesmas regras do sorteio confirmado.",
        highlights: [
          "Links privados /r/{token} evitam busca por telefone e mantêm participantes sem conta.",
          "Backtracking randomizado suporta bloqueio de auto-sorteio e sorteios opcionais apenas entre grupos diferentes.",
          "Preview do sorteio explica composições impossíveis de grupos/participantes antes da confirmação.",
          "Fluxo de WhatsApp permite copiar links, copiar mensagens prontas, abrir WhatsApp e marcar links como enviados."
        ],
        constraints: [
          "Links de revelação são bearer secrets, então qualquer pessoa com o link de um participante pode ver o resultado daquele participante.",
          "O envio é liderado pelo organizador em vez de usar a WhatsApp Business API, mantendo o app prático para eventos pequenos.",
          "Eventos bloqueiam edição de participantes e grupos após o sorteio até o organizador resetar as atribuições."
        ],
        results: [
          "15 testes automatizados cobrem eventos com duas pessoas, sorteios agrupados, composições impossíveis e execuções repetidas.",
          "Um projeto live na Vercel + Neon com cara de produto real, mostrando limites de privacidade, UX de validação, modelagem relacional e workflow admin mobile.",
          "Um exemplo claro de software feito para um fluxo pessoal real sem exagerar na complexidade social."
        ],
      },
    },
    vgcTeamLab: {
      title: "VGC Team Lab",
      description:
        "Um team builder full-stack para Pokémon competitivo em doubles, com meta ao vivo da Pikalytics, checagens de legalidade por regulamento, import/export do Showdown, fluxo guiado em seis etapas e coaching por IA em rota protegida.",
      outcome:
        "O diferencial é a UX honesta ao lidar com dados imperfeitos de regras: onboarding guiado, meta fallback, estados pendentes de learnset, avisos de formatos não verificados, CI e storage local sem conta.",
      detail: {
        summary:
          "VGC Team Lab transforma montagem de times competitivos em um fluxo guiado: montar roster, aplicar sets do meta, inspecionar legalidade, revisar cobertura de matchups, pedir coaching e exportar o resultado para Pokémon Showdown. O formato padrão é Pokémon Champions Reg M-A.",
        problem:
          "Ferramentas de VGC precisam lidar com formatos que mudam rápido, dados parciais e fluxos de jogador que alternam entre estatísticas de uso, legalidade e pastes do Showdown. O objetivo foi deixar essas transições coerentes sem fingir que o app é uma autoridade oficial de torneio.",
        build:
          "O app é uma SPA em React com um proxy Express para dados ao vivo da Pikalytics e coaching por IA. Os times ficam em localStorage (schema v3), enquanto o servidor cuida de CORS, rate limits, credenciais da Hugging Face, parsing da Pikalytics, cache fallback e validação de payload. O CI roda testes e build a cada push.",
        highlights: [
          "Team builder guiado em seis etapas com ajuda por passo, resumo de saúde sticky e sugestão automática do próximo passo.",
          "Checagens de legalidade por regulamento com estados pendentes e avisos explícitos quando a fonte está incompleta.",
          "Import/export do Showdown, mapeamento de nomes de formas VGC, resolução concorrente de espécies no import e links compartilháveis para payloads compactos.",
          "Rota de IA no servidor mantém tokens fora do navegador e aplica timeout, allowlist, confiança de IP via proxy e rate limit."
        ],
        constraints: [
          "É um laboratório de team building, não uma autoridade oficial de legalidade Pokémon.",
          "Os times ficam locais no navegador, exceto quando exportados ou compartilhados por URL.",
          "Dados da Pikalytics são lidos e cacheados, então a UI mostra fallback e estados de cold start do tier gratuito do Render."
        ],
        results: [
          "75 testes automatizados cobrindo legalidade, parsing Showdown, saúde de schema, proteção de API, fluxo do builder e smoke tests — com CI no GitHub Actions.",
          "Um projeto de portfólio que mostra UX de produto, integração de APIs e comunicação cuidadosa de incerteza de dados.",
          "Frontend no GitHub Pages com proxy de API implantado separadamente no Render."
        ],
      },
    },
    priceMonitor: {
      title: "Facebook Marketplace Price Monitor",
      description:
        "Um monitor local-first de ofertas do Facebook Marketplace para o Brasil: salve buscas por palavra-chave e preço, rode um worker Playwright local com seu próprio perfil de navegador do Facebook e acompanhe anúncios, quedas de preço e saúde do worker em um dashboard bilíngue.",
      outcome:
        "O sistema mantém a automação que conversa com o Facebook na máquina do usuário, mostra heartbeat e saúde da sessão no dashboard e usa lógica determinística para alertas de anúncios, quedas de preço e sinais de qualidade de oferta.",
      detail: {
        summary:
          "Price Monitor é um produto de automação local em monorepo npm/Turbo: o dashboard Next.js gerencia buscas salvas e alertas, enquanto um worker local cuida do scraping do Marketplace, sessão do Facebook, jobs de polling e relatórios de saúde.",
        problem:
          "Monitorar Marketplace exige uma fronteira prática para sessões de navegador, falhas de scraping e jobs de longa duração. Este projeto mantém essa fronteira local e torna o estado do worker visível em vez de esconder a complexidade operacional.",
        build:
          "O monorepo usa Next.js, TypeScript, BullMQ, Playwright, Prisma, NextAuth (OAuth GitHub/Google), Postgres/Redis locais via Docker e um diretório persistente .facebook-profile para o navegador. Pacotes compartilhados cuidam de schemas Zod, parsing de preço, agenda de poll e saúde do worker. A UI usa pt-BR por padrão com suporte a inglês.",
        highlights: [
          "Worker local mantém dados de navegador e sessão do Facebook na máquina do usuário.",
          "Dashboard de heartbeat mostra estado online/stale/offline, modo de sessão, último scrape bem-sucedido e último tipo de falha.",
          "Scraper resiliente combina interceptação GraphQL, JSON embutido e fallback DOM em um único modelo de anúncio.",
          "Polling confiável mantém deduplicação BullMQ, concorrência 1, cooldown manual, recuperação de RUNNING stale, backoff exponencial e mensagens de fila localizadas."
        ],
        constraints: [
          "O app exige um worker local e uma sessão do Facebook mantida manualmente.",
          "É uma ferramenta pessoal e educacional, não infraestrutura autorizada pela Meta.",
          "O dashboard reporta claramente o estado do worker e da sessão para que falhas de scraping fiquem visíveis ao usuário."
        ],
        results: [
          "152 testes automatizados cobrem parsing, agendamento, cooldowns, lógica de queda de preço, sinais de qualidade de oferta, mensagens i18n de fila, limpeza, auth/ownership guards e rotas de middleware.",
          "Uma fronteira de produto clara: scraping e dados locais por padrão, com visibilidade no dashboard para as partes que podem falhar.",
          "UX Brazil-first com centavos em BRL, pt-BR como padrão, dicas de localização do Marketplace, alertas de anúncios e suporte a inglês."
        ],
      },
    },
    cryptoMmLab: {
      title: "Crypto Market Making Lab",
      description:
        "Um laboratório de pesquisa em market-making paper-only que lê order books de CEX, simula quotes e fills, acompanha inventário/P&L, compara CEX vs Uniswap V2, compara estratégias lado a lado e expõe um dashboard FastAPI.",
      outcome:
        "É o projeto mais próximo do meu trabalho em sistemas de trading: controles de risco, kill switch, proteção contra dados stale, estratégias plugáveis com métricas de comparação, auditoria por tick, Prometheus/Grafana e backtesting.",
      detail: {
        summary:
          "Crypto MM Lab é um loop paper trading end-to-end para estudar mecânicas de market-making: buscar order books públicos, colocar quotes simuladas, processar fills, acompanhar PnL, escanear diferenças CEX/DEX, comparar estratégias e inspecionar o sistema por APIs e dashboards.",
        problem:
          "Pesquisa em market-making precisa de mais do que um notebook. É necessário um loop repetível, controles de risco explícitos, observabilidade, trilhas de auditoria e backtests que usem as mesmas premissas das estratégias do loop paper ao vivo.",
        build:
          "O backend é FastAPI com dados de mercado via CCXT, web3.py para reservas Uniswap V2, persistência SQLAlchemy, módulos de estratégia, paper broker, métricas Prometheus, dashboards Grafana, Docker Compose e scripts para loops ao vivo, replay histórico ou comparação de estratégias em um comando.",
        highlights: [
          "Tick IDs compartilhados conectam order books, quotes, fills, posições, PnL e oportunidades para reconstrução completa de auditoria.",
          "Controles de risco incluem limites de posição, reserva acumulada de caixa, cancelamento em tick stale, backoff do loop e kill switch.",
          "Três estratégias plugáveis — MM puro, inventory skew e spreads ajustados por volatilidade — com comparação lado a lado de Sharpe/drawdown/fill rate.",
          "Backtest replaya snapshots SQLite/Postgres ou fixtures CSV com as mesmas premissas de risco do loop paper ao vivo."
        ],
        constraints: [
          "O sistema é paper-only e nunca envia ordens reais para CEX ou on-chain.",
          "A execução é simulada com modelos conservadores de fill e sem modelo de posição na fila ou latência.",
          "Dashboard e APIs são intencionalmente sem autenticação para pesquisa local, então não devem ser expostos publicamente sem proxy."
        ],
        results: [
          "116 testes automatizados cobrindo matemática de order book, fills, PnL, AMM, scanner de arbitragem, backtests, comparação de estratégias, rotas API, proteção contra dados stale e recuperação do loop — cerca de 89% de cobertura de branches.",
          "Uma demo de fundamentos de sistemas de trading: controles, observabilidade, persistência e tratamento de falhas.",
          "Uma stack Docker que sobe app, Prometheus e Grafana para monitoramento local."
        ],
      },
    },
  },
};