export default {
  accessibility: {
    skipToContent: "Pular para o conteúdo principal",
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
      "Estudei Sistemas de Informação na UFVJM (Diamantina, MG). Entrei na programação por bots de jogos e segui evoluindo de forma autodidata. Hoje atuo na Funttastic em plataformas de HFT e market-making—construindo conectores de exchange, motores de liquidez e infraestrutura distribuída em múltiplas blockchains.",
    englishNote:
      "Fluente em inglês (EF SET C2 Proficient). À vontade para colaborar com equipes internacionais em inglês.",
  },
  experience: {
    title: "Experiência",
    roles: {
      funttastic: {
        title: "Desenvolvedor Full-Stack",
        company: "Funttastic · Remoto",
        date: "2024 – Atual",
        description:
          "Atuo em plataformas de high-frequency trading e market-making—integrando exchanges, algoritmos de provisionamento de liquidez e infraestrutura distribuída em múltiplas blockchains.",
        highlightsTitle: "Trabalho técnico em destaque",
      },
      education: {
        title: "Sistemas de Informação",
        company: "UFVJM · Diamantina, MG",
        date: "2014 – Incompleto",
        description:
          "Formação em engenharia de software e projetos de sistemas. Aprendizado contínuo por meio de estudo autodidata e trabalho em produção com sistemas de trading e desenvolvimento full-stack.",
      },
    },
    highlights: {
      hummingbot: {
        title: "Conectores open-source Hummingbot",
        description:
          "Desenvolvi conectores customizados para venues CLOB e AMM, estendendo o Hummingbot para sistemas de trading distribuídos e padrões reutilizáveis de integração.",
        tags: "Python, CLOB, AMM, Hummingbot",
      },
      rujira: {
        title: "Bot HFT na blockchain Rujira",
        description:
          "Arquitetei um bot HFT completo para Rujira Trade (FIN) com GraphQL e Cosmos SDK, incluindo motores adaptativos de spread/skew e monitoramento de P&L em tempo real.",
        tags: "TypeScript, GraphQL, Cosmos SDK, HFT",
      },
      barracuda: {
        title: "Plataforma HFT Barracuda",
        description:
          "Desenvolvi um sistema em TypeScript/Bun para market making automatizado e gestão de liquidez, com adaptadores para Raydium, Rujira e venues via CCXT.",
        tags: "TypeScript, Bun, CCXT, Raydium",
      },
    },
  },
  projects: {
    title: "Meus Projetos",
    viewProject: "Veja mais sobre esse projeto clicando aqui.",
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
      languages: "TypeScript, Python, JavaScript",
      trading:
        "HFT, Market Making, Backtesting, Motores de Estratégia, CCXT, Hummingbot",
      blockchain: "Cosmos SDK, GraphQL, CLOB, AMM, Raydium",
      frontend: "React, Next.js, Tailwind CSS, Framer Motion",
      infrastructure: "Git, Docker, Bun, Node.js, Observabilidade, Linux",
      data: "MySQL, MongoDB, Prisma, REST APIs",
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
    location: "Brasil · Remoto",
    copyright: "Todos os direitos reservados.",
    stackNote:
      "Feito com Next.js, TypeScript, Tailwind CSS, Framer Motion e publicado na Vercel.",
  },
  projectsData: {
    taskify: {
      title: "Taskify",
      description:
        "Taskify é um aplicativo de gerenciamento estilo Trello inclusive com uma versão PRO que permite criação ilimitada de boards.",
    },
    pokedex: {
      title: "Pokedex",
      description: "Projeto feito para praticar consumo de APIs utilizando a PokeAPI.",
    },
    carShowcase: {
      title: "Car Showcase",
      description:
        "Website que busca e filtra carros, feito para praticar uso de mais de uma API.",
    },
    dogs: {
      title: "Dogs",
      description:
        "Uma mídia social para cachorros. Website estilo Instagram com suas funcionalidades básicas.",
    },
    travelApp: {
      title: "Travel App",
      description:
        "Landing Page simples feita para praticar TailwindCSS e TypeScript.",
    },
  },
};

