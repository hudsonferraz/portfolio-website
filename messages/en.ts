export default {
  accessibility: {
    skipToContent: "Skip to main content",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    switchToDark: "Switch to dark mode",
    switchToLight: "Switch to light mode",
  },
  nav: {
    home: "Home",
    about: "About Me",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  intro: {
    greeting: "Hello, my name is Hudson.",
    role: "I'm a",
    roleBold: "full-stack developer",
    passion: "specializing in",
    passionItalic: "high-frequency trading & market-making",
    focus: "with a focus on",
    focusTech: "TypeScript, Python & production systems",
    contactButton: "Contact me",
    downloadCV: "Download CV",
  },
  about: {
    title: "About Me",
    description:
      "I design and operate exchange integrations (CLOB and AMM), strategy engines, and production infrastructure for long-running trading bots. I care about reliable automation, clear observability, and maintainable code that supports both research (backtesting) and live trading.",
    description2:
      "I studied Information Systems at UFVJM (Diamantina, MG). I got into programming through game bots and kept learning on my own. Today I work at Funttastic on HFT and market-making platforms, building exchange connectors, liquidity engines, and distributed infrastructure across multiple blockchains.",
    englishNote:
      "Fluent in English (EF SET C2 Proficient). Comfortable collaborating with international teams in English.",
  },
  experience: {
    title: "Experience",
    roles: {
      funttastic: {
        title: "Full-Stack Developer",
        company: "Funttastic - Remote",
        date: "2024 - Present",
        description:
          "I contribute to high-frequency trading and market-making platforms, integrating exchanges, liquidity provisioning algorithms, and distributed infrastructure across multiple blockchains.",
        highlightsTitle: "Selected technical work",
      },
      education: {
        title: "Information Systems",
        company: "UFVJM - Diamantina, MG",
        date: "2014 - Incomplete",
        description:
          "Coursework in software engineering and systems design. Continued learning through self-study and production work in trading systems and full-stack development.",
      },
    },
    highlights: {
      hummingbot: {
        title: "Hummingbot open-source connectors",
        description:
          "Built custom exchange connectors for CLOB and AMM venues, extending Hummingbot for distributed trading systems and reusable integration patterns.",
        tags: ["Python", "CLOB", "AMM", "Hummingbot"],
      },
      rujira: {
        title: "Rujira blockchain HFT bot",
        description:
          "Architected a full HFT bot for Rujira Trade (FIN) using GraphQL and the Cosmos SDK, with adaptive spread/skew engines and real-time P&L monitoring.",
        tags: ["TypeScript", "GraphQL", "Cosmos SDK", "HFT"],
      },
      barracuda: {
        title: "Barracuda HFT platform",
        description:
          "Developed a TypeScript/Bun system for automated market making and liquidity management, with adapters for Raydium, Rujira, and CCXT-based venues.",
        tags: ["TypeScript", "Bun", "CCXT", "Raydium"],
      },
    },
  },
  projects: {
    title: "Selected Projects",
    subtitle:
      "Three current builds that show the product range behind my work: trading research, resilient automation, and full-stack tools with clear operational limits.",
    liveDemo: "Live demo",
    sourceCode: "Source code",
    openLive: "Open live demo for",
    openSource: "Open source code for",
    imageAlt: "Screenshot of",
    status: {
      live: "Live project",
      research: "Research lab",
    },
  },
  skills: {
    title: "Skills",
    subtitle:
      "Technologies and domains I use to build trading systems and production software.",
    categories: {
      languages: "Languages",
      trading: "Trading & automation",
      blockchain: "Blockchain & DeFi",
      frontend: "Frontend",
      infrastructure: "Infrastructure & tooling",
      data: "Data & persistence",
    },
    items: {
      languages: ["TypeScript", "Python", "JavaScript"],
      trading: [
        "HFT",
        "Market Making",
        "Backtesting",
        "Strategy Engines",
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
        "Observability",
        "Linux",
      ],
      data: ["MySQL", "MongoDB", "Prisma", "REST APIs"],
    },
  },
  contact: {
    title: "Contact me",
    description: "Please contact me directly at",
    or: "or through the form below.",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    sendButton: "Send",
    successMessage: "Email sent successfully!",
    errors: {
      invalidEmail: "Invalid email. Please check and try again.",
      invalidEmailFormat: "Invalid email format. Please check and try again.",
      invalidMessage: "Invalid message. Please check and try again.",
      emptyMessage: "Message cannot be empty.",
      rateLimited:
        "Too many messages sent. Please wait a few minutes and try again.",
      sendFailed: "Failed to send email. Please try again later.",
    },
  },
  notFound: {
    title: "Page not found",
    description:
      "The page you are looking for does not exist or may have been moved.",
    backHome: "Back to home",
  },
  footer: {
    tagline:
      "Full-stack developer building trading systems, exchange integrations, and production infrastructure.",
    location: "Brazil - Remote",
    copyright: "All rights reserved.",
    stackNote:
      "Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and deployed on Vercel.",
  },
  projectsData: {
    vgcTeamLab: {
      title: "VGC Team Lab",
      description:
        "A full-stack doubles team builder for competitive Pokémon with live Pikalytics meta, regulation-aware legality checks, Showdown import/export, share links, and AI coaching behind a protected server route.",
      outcome:
        "The interesting work is the honest UX around imperfect rules data: fallback meta, pending learnset states, unverified-format notices, and no-account browser storage.",
    },
    priceMonitor: {
      title: "Facebook Marketplace Price Monitor",
      description:
        "A Brazil-first deal tracker that saves Marketplace searches, polls them through a long-running Playwright worker, compares listing history, and raises dashboard or email alerts for new matches and price drops.",
      outcome:
        "It demonstrates the operational side of full-stack work: BullMQ scheduling, Redis-backed jobs, Neon/Prisma persistence, OAuth, Resend email, mock mode, and a split Vercel plus Render deploy.",
    },
    cryptoMmLab: {
      title: "Crypto Market Making Lab",
      description:
        "A paper market-making research lab that pulls live CEX order books, simulates quote placement and fills, tracks inventory/PnL, compares CEX vs Uniswap V2 prices, and exposes a FastAPI dashboard.",
      outcome:
        "This is closest to my trading-systems work: risk controls, kill switch, stale-data guards, pluggable strategies, backtesting, Prometheus metrics, Grafana dashboards, and tick-level auditability.",
    },
  },
};
