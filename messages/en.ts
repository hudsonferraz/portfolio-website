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
      "Four current builds that show the product range behind my work: useful everyday products, trading research, resilient automation, and full-stack tools with clear operational limits.",
    readCaseStudy: "Case study",
    liveDemo: "Live demo",
    sourceCode: "Source code",
    openLive: "Open live demo for",
    openSource: "Open source code for",
    imageAlt: "Screenshot of",
    status: {
      live: "Live project",
      research: "Research lab",
    },
    detail: {
      backToProjects: "Back to projects",
      overview: "Overview",
      stack: "Stack",
      problem: "Problem",
      build: "Build",
      highlights: "Engineering highlights",
      constraints: "Constraints and trade-offs",
      results: "What it demonstrates",
      links: "Project links",
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
    secretSanta: {
      title: "Secret Santa Organizer",
      description:
        "A private Secret Santa app built for real family use: create an event, add participants or groups, validate and run the draw, then send each person a private reveal link over WhatsApp.",
      outcome:
        "The product work is the interesting part: private bearer links instead of phone lookup, grouped draw constraints, preview-before-commit validation, reveal confirmation, and a mobile-first organizer dashboard.",
      detail: {
        summary:
          "Secret Santa Organizer replaces the spreadsheet/manual-message workflow with a focused app for one organizer: create the event, manage people and groups, run a valid draw, and share one private reveal link per participant.",
        problem:
          "Small family events still have real product constraints: assignments should not leak, participants should not need accounts, grouped families may need separation rules, and the organizer usually sends everything from a phone through WhatsApp.",
        build:
          "The app uses Next.js App Router, React, TypeScript, Prisma/PostgreSQL, Zod validation, JWT session cookies, and Vitest. Assignments are relational rows, reveal pages use private tokens, and the draw preview uses the same matching rules as the committed draw.",
        highlights: [
          "Private /r/{token} reveal links avoid phone-number lookup and keep participants account-free.",
          "Randomized backtracking supports no-self matches and optional cross-group-only draws.",
          "Draw preview explains blocking group/participant compositions before the organizer commits.",
          "WhatsApp workflow supports copying links, copying ready-to-send messages, opening WhatsApp, and marking links as sent."
        ],
        constraints: [
          "Reveal links are bearer secrets, so anyone with a participant link can see that participant's match.",
          "Sharing is organizer-led instead of using the WhatsApp Business API, keeping the app practical for small events.",
          "Events lock participant and group edits after the draw until the organizer resets assignments."
        ],
        results: [
          "15 automated tests cover two-person events, grouped draws, impossible compositions, and repeated runs.",
          "A live product-style project that shows privacy boundaries, validation UX, relational modeling, and mobile admin workflows.",
          "A clear example of building software for a real personal workflow without over-engineering the social side."
        ],
      },
    },    vgcTeamLab: {
      title: "VGC Team Lab",
      description:
        "A full-stack doubles team builder for competitive Pokémon with live Pikalytics meta, regulation-aware legality checks, Showdown import/export, share links, and AI coaching behind a protected server route.",
      outcome:
        "The interesting work is the honest UX around imperfect rules data: fallback meta, pending learnset states, unverified-format notices, and no-account browser storage.",
      detail: {
        summary:
          "VGC Team Lab turns competitive team building into a guided workflow: build the roster, apply meta sets, inspect legality, review matchup coverage, ask for coaching, and export the result to Pokémon Showdown.",
        problem:
          "Competitive VGC tooling has to deal with fast-changing formats, partial data, and player workflows that jump between usage stats, legality checks, and Showdown pastes. The goal was to make those jumps feel coherent without pretending the app is an official event authority.",
        build:
          "The app is a React SPA backed by an Express proxy for live Pikalytics data and AI coaching. Team data stays in localStorage, while the server handles CORS, rate limits, Hugging Face credentials, Pikalytics parsing, cache fallback, and body validation.",
        highlights: [
          "Six-step team builder with roster, sets, legality, matchups, coach, and export stages.",
          "Regulation-aware legality checks with explicit pending and unverified states when source data is incomplete.",
          "Showdown import/export, VGC form-name mapping, and share URLs for compact team payloads.",
          "Server-side AI route keeps tokens out of the browser and applies timeout, allowlist, and rate-limit protection."
        ],
        constraints: [
          "It is a team-building lab, not an official Pokémon legality authority.",
          "Teams are browser-local unless exported or shared through a URL payload.",
          "Pikalytics data is scraped and cached, so the UI includes fallback and cold-start states."
        ],
        results: [
          "69 automated tests across legality, Showdown parsing, schema health, API protection, and smoke coverage.",
          "A portfolio project that shows product UX, API integration, and careful communication of data uncertainty.",
          "Live frontend on GitHub Pages with the API proxy deployed separately on Render."
        ],
      },
    },
    priceMonitor: {
      title: "Facebook Marketplace Price Monitor",
      description:
        "A Brazil-first deal tracker that saves Marketplace searches, polls them through a long-running Playwright worker, compares listing history, and raises dashboard or email alerts for new matches and price drops.",
      outcome:
        "It demonstrates the operational side of full-stack work: BullMQ scheduling, Redis-backed jobs, Neon/Prisma persistence, OAuth, Resend email, mock mode, and a split Vercel plus Render deploy.",
      detail: {
        summary:
          "Price Monitor is a single-user marketplace alert system: save a keyword and price window, let a worker poll Facebook Marketplace, compare results against historical prices, and surface new listings or drops in the dashboard and email.",
        problem:
          "Marketplace monitoring is messy because the UI changes, sessions expire, jobs can overlap, and alerts need per-search memory. The app focuses on a realistic small production shape instead of a fake happy-path scraper.",
        build:
          "The web app runs on Next.js with NextAuth, Prisma, Neon Postgres, and Upstash Redis. A separate Render worker runs Playwright and BullMQ jobs, merges GraphQL/JSON/DOM parser outputs, records poll runs, and sends Resend emails when user preferences allow it.",
        highlights: [
          "BullMQ scheduler with job deduplication, concurrency 1, manual cooldowns, stale RUNNING recovery, and exponential backoff.",
          "Per-search listing price memory so overlapping searches can detect price drops independently.",
          "Parser adapter stack that merges GraphQL interception, embedded JSON, and DOM fallback results.",
          "Mock mode for local alert and email testing without a live Facebook session."
        ],
        constraints: [
          "This is personal and educational tooling, not authorized Meta infrastructure.",
          "Live polling depends on an exported Facebook session that can expire and must be refreshed manually.",
          "The worker deploy is separate from Vercel because Playwright needs a long-running server environment."
        ],
        results: [
          "57 automated tests covering price parsing, URL/DOM/JSON parsing, scheduling, rate limits, alert logic, email safety, and schemas.",
          "A deployable full-stack system with a clear web/worker boundary and operational documentation.",
          "Brazil-first UX with BRL cents, pt-BR defaults, Marketplace location hints, and English support."
        ],
      },
    },
    cryptoMmLab: {
      title: "Crypto Market Making Lab",
      description:
        "A paper market-making research lab that pulls live CEX order books, simulates quote placement and fills, tracks inventory/PnL, compares CEX vs Uniswap V2 prices, and exposes a FastAPI dashboard.",
      outcome:
        "This is closest to my trading-systems work: risk controls, kill switch, stale-data guards, pluggable strategies, backtesting, Prometheus metrics, Grafana dashboards, and tick-level auditability.",
      detail: {
        summary:
          "Crypto MM Lab is an end-to-end paper trading loop for studying market-making mechanics: fetch public order books, place simulated quotes, process fills, track PnL, scan CEX/DEX differences, and inspect the system through APIs and dashboards.",
        problem:
          "Market-making research needs more than a notebook. You need a repeatable loop, explicit risk controls, observability, audit trails, and backtests that use the same strategy assumptions as the live paper loop.",
        build:
          "The backend is FastAPI with CCXT market data, SQLAlchemy persistence, strategy modules, a paper broker, Prometheus metrics, Grafana dashboards, Docker Compose, and scripts for live loops or historical replay.",
        highlights: [
          "Shared tick IDs join order books, quotes, fills, positions, PnL, and opportunities for auditability.",
          "Risk controls include position caps, cumulative cash reservation, stale-tick cancellation, and a kill switch.",
          "Pluggable strategies cover pure market making, inventory skew, and volatility-adjusted spreads.",
          "Backtest mode replays SQLite/Postgres snapshots or CSV fixtures with drawdown, fill rate, and Sharpe-like metrics."
        ],
        constraints: [
          "The system is paper-only and never places live CEX or on-chain orders.",
          "Execution is simulated with conservative fill modes and no queue-position or latency model.",
          "Dashboard and APIs are intentionally unauthenticated for local research, so they should not be exposed publicly without a proxy."
        ],
        results: [
          "110 automated tests across order book math, fills, PnL, AMM, arbitrage scanning, backtests, API routes, stale-data guards, and loop recovery.",
          "A research-grade demo of trading-system fundamentals: controls, observability, persistence, and failure handling.",
          "A Docker stack that brings up the app, Prometheus, and Grafana for local monitoring."
        ],
      },
    },
  },
};
