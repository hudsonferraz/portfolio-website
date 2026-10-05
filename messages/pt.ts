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
    passionItalic: "simulação robótica no browser e sistemas de trading",
    focus: "com foco em",
    focusTech: "TypeScript, Python e sistemas em produção",
    contactButton: "Entre em contato",
    downloadCV: "Download CV",
  },
  about: {
    title: "Sobre Mim",
    description:
      "Construo sistemas full-stack em produção onde performance e confiabilidade importam sob restrições reais: simulação robótica no browser com física em WebAssembly e controle por rede neural, e integrações com exchanges para bots de trading de longa duração. Priorizo observabilidade clara, arquitetura sustentável e entrega sob limites difíceis de plataforma.",
    description2:
      "Estudei Sistemas de Informação na UFVJM (Diamantina, MG). Entrei na programação por bots de jogos e segui evoluindo de forma autodidata. Mais recentemente atuei na Runibi (runibiLABS) em uma plataforma de simulação de humanoides no cliente (jul–set 2026), após construir sistemas de HFT e market-making na Funttastic em múltiplas blockchains (jan 2024–jun 2026).",
    englishNote:
      "Fluente em inglês (EF SET C2 Proficient). À vontade para colaborar com equipes internacionais em inglês.",
  },
  experience: {
    title: "Experiência",
    roles: {
      runibi: {
        title: "Desenvolvedor Full-Stack",
        company: "Runibi (runibiLABS) - Remoto",
        date: "Jul 2026 - Set 2026",
        description:
          "Construí uma plataforma de simulação robótica no browser onde usuários treinam humanoides por missões em jogo. Física MuJoCo em tempo real (WebAssembly) e políticas de controle por rede neural ONNX rodam inteiramente no cliente, em desktop e mobile.",
        highlightsTitle: "Trabalho técnico em destaque",
      },
      funttastic: {
        title: "Desenvolvedor Full-Stack",
        company: "Funttastic - Remoto",
        date: "Jan 2024 - Jun 2026",
        description:
          "Atuei em plataformas de high-frequency trading e market-making, integrando exchanges, algoritmos de provisionamento de liquidez e infraestrutura distribuída em múltiplas blockchains.",
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
      simasGame: {
        title: "Jogo SimAs MuJoCo (currículo de missões)",
        description:
          "Desenvolvi um jogo React/TypeScript com Three.js/React Three Fiber, controlando um humanoide (Unitree G1) com física no browser (mujoco-js) e inferência de políticas via ONNX Runtime Web. Construí o Worldmap 3D para seleção de missões, diálogo com NPCs e cortes cinemáticos, sequência final e controles touch com D-pad contínuo e snap assist.",
        tags: ["React", "TypeScript", "Three.js", "MuJoCo", "ONNX"],
      },
      mobileHardening: {
        title: "Endurecimento mobile e iOS/WebKit",
        description:
          "Fiz física WASM e inferência neural rodarem de forma confiável no iPhone e Android. Corrigi crashes de memória (OOM) entre missões, configurei isolamento cross-origin (COOP/COEP) para SharedArrayBuffer em iframes, tratei limites de threading do WebKit e envenenamento de cache de WASM no CDN, e melhorei sessões longas com lazy loading e loop de catch-up de física mais apertado.",
        tags: ["WebAssembly", "WebKit", "COOP/COEP", "Performance"],
      },
      crashDiagnostics: {
        title: "Diagnóstico de crashes e observabilidade",
        description:
          "Construí telemetria de crash no cliente: breadcrumbs em pontos de ONNX, WebGL, simulação e navegação, death reports write-ahead que sobrevivem ao kill da aba, e pipeline de relatórios no Supabase. Adicionei console in-browser opt-in via ?debug=1 para diagnosticar em dispositivos reais.",
        tags: ["Telemetry", "Supabase", "Debugging", "Reliability"],
      },
      platformFoundation: {
        title: "Fundação da plataforma",
        description:
          "Configurei o monorepo Bun (frontends React/Vite, backend FastAPI com integração Telegram), migrei autenticação para Supabase, fiz deploy no Cloudflare Pages com configuração por ambiente e contribui na landing institucional, incluindo camada de acessibilidade e alinhamento às diretrizes de marca.",
        tags: ["Bun", "FastAPI", "Supabase", "Cloudflare"],
      },
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
      "Tecnologias e domínios que uso para construir plataformas de simulação, sistemas de trading e software em produção.",
    categories: {
      languages: "Linguagens",
      trading: "Trading e automação",
      simulation: "Simulação e sistemas no cliente",
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
      simulation: [
        "MuJoCo / mujoco-js",
        "ONNX Runtime Web",
        "WebAssembly",
        "WebGL",
        "COOP/COEP",
      ],
      blockchain: ["Cosmos SDK", "GraphQL", "CLOB", "AMM", "web3.py"],
      frontend: [
        "React",
        "Next.js",
        "Three.js",
        "React Three Fiber",
        "Tailwind CSS",
        "Framer Motion",
      ],
      infrastructure: [
        "Bun",
        "Vite",
        "Cloudflare Pages",
        "Supabase",
        "Docker",
        "FastAPI",
        "Git",
        "Prometheus",
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
      "Desenvolvedor full-stack em simulação robótica no browser, sistemas de trading e infraestrutura em produção.",
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
        "Um team builder full-stack para Pokémon competitivo em doubles, com meta ao vivo da Pikalytics, checagens de legalidade por regulamento, import/export do Showdown, fluxo guiado em quatro etapas e coaching por IA via Groq em rota protegida.",
      outcome:
        "O diferencial é a UX honesta ao lidar com dados imperfeitos de regras: onboarding guiado, meta offline rotulada, estados pendentes de learnset, bans curados de Champions com disclaimer não oficial, CI e storage local sem conta com backup da biblioteca.",
      detail: {
        summary:
          "VGC Team Lab transforma montagem de times competitivos em um fluxo guiado: montar roster, checar legalidade, ajustar matchups, pedir coaching opcional e compartilhar ou exportar para o Pokémon Showdown. O formato padrão é Pokémon Champions Reg M-C.",
        problem:
          "Ferramentas de VGC precisam lidar com formatos que mudam rápido, dados parciais e fluxos de jogador que alternam entre estatísticas de uso, legalidade e pastes do Showdown. O objetivo foi deixar essas transições coerentes sem fingir que o app é uma autoridade oficial de torneio.",
        build:
          "O app é uma SPA em React com um proxy Express para dados ao vivo da Pikalytics e coaching por IA. Os times ficam em localStorage (schema v3) com backup/restore JSON da biblioteca, enquanto o servidor cuida de CORS, rate limits, credenciais da Groq, parsing da Pikalytics, cache fallback e validação de payload. O CI roda testes e build a cada push.",
        highlights: [
          "Team builder guiado em quatro etapas (Build → Check → Tune → Share) com Team report sticky, completude de set nos slots e roster usável no mobile.",
          "Legalidade de Champions Reg M-C com lista curada de Legendary / Mythical / Paradox, e avisos claros quando outros formatos ainda estão incompletos.",
          "Import/export do Showdown, mapeamento de formas VGC, links compartilháveis com toasts de falha e backup baixável de todos os times.",
          "Coach Groq no servidor mantém tokens fora do navegador e aplica timeout, allowlist, confiança de IP via proxy e rate limit."
        ],
        constraints: [
          "É um laboratório de team building, não uma autoridade oficial de legalidade Pokémon.",
          "Os times ficam locais no navegador, exceto quando exportados, compartilhados por URL ou restaurados de um backup.",
          "Dados da Pikalytics são lidos e cacheados, então a UI mostra fallback rotulado e estados de cold start do tier gratuito do Render."
        ],
        results: [
          "Testes automatizados cobrindo legalidade, parsing Showdown, saúde de schema, proteção de API, fluxo do builder, clipboard/backup e smoke tests — com CI no GitHub Actions.",
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
        "Um laboratório de pesquisa em market-making paper-only que lê order books de CEX, simula quotes e fills, acompanha inventário/P&L, compara CEX vs Uniswap V2, compara estratégias na aba Research e expõe um dashboard FastAPI de produto.",
      outcome:
        "É o projeto mais próximo do meu trabalho em sistemas de trading: controles de risco, kill switch, proteção contra dados stale, estratégias plugáveis com métricas de comparação, auditoria por tick, Prometheus/Grafana e backtesting — apresentado como lab paper honesto, não como bot de lucro.",
      detail: {
        summary:
          "Crypto MM Lab é um loop paper trading end-to-end para estudar mecânicas de market-making: buscar order books públicos, colocar quotes simuladas, processar fills, acompanhar PnL, escanear diferenças CEX/DEX, comparar estratégias, rodar sweeps e inspecionar o sistema por APIs e um dashboard com abas.",
        problem:
          "Pesquisa em market-making precisa de mais do que um notebook. É necessário um loop repetível, controles de risco explícitos, observabilidade, trilhas de auditoria e backtests com as mesmas premissas do loop paper — além de uma UI que não finja trading ao vivo.",
        build:
          "O backend é FastAPI com dados via CCXT (poll por padrão, websocket opcional com fallback), web3.py para Uniswap V2, persistência SQLAlchemy, módulos de estratégia, paper broker com vários modos de fill, métricas Prometheus, Grafana, Docker Compose e APIs de Research para compare/sweep.",
        highlights: [
          "Dashboard de produto com banner PAPER, chips de config, abas Live / Opportunities / Research, open quotes e confirmação do kill switch.",
          "Tick IDs compartilhados conectam order books, quotes, fills, posições, PnL e oportunidades para auditoria completa.",
          "Controles de risco incluem limites de posição, reserva acumulada de caixa, cancelamento em tick stale, backoff do loop e kill switch com token de operador opcional para demos hospedadas.",
          "Três estratégias plugáveis com comparação por fixture e sweeps de parâmetros; fills de latência/probabilidade são rotulados como simulação."
        ],
        constraints: [
          "O sistema é paper-only e nunca envia ordens reais para CEX ou on-chain.",
          "A execução é simulada (incluindo um modo toy de latência/probabilidade) e não replica o matching engine de uma exchange.",
          "Demos públicas devem definir OPERATOR_API_TOKEN para que rotas mutáveis do kill switch não fiquem abertas."
        ],
        results: [
          "Testes automatizados e CI cobrindo matemática de order book, fills, PnL, AMM, scanner de arbitragem, backtests, comparação de estratégias, APIs de research, auth de operador, proteção contra dados stale e recuperação do loop — com gate alto de cobertura.",
          "Uma demo de fundamentos de sistemas de trading: controles, observabilidade, persistência e tratamento de falhas.",
          "Uma stack Docker com app, Prometheus e Grafana, mais notas de deploy para um demo paper hospedado."
        ],
      },
    },
  },
};