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
      "Four current builds that show the product range behind my work: useful everyday products, trading research, resilient local automation, and full-stack tools with clear operational limits.",
    readCaseStudy: "Case study",
    liveDemo: "Live demo",
    sourceCode: "Source code",
    openLive: "Open live demo for",
    openSource: "Open source code for",
    imageAlt: "Screenshot of",
    status: {
      live: "Live project",
      research: "Research lab",
      local: "Local-first app",
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
          "The app uses Next.js App Router, React, TypeScript, Prisma/PostgreSQL (Neon), Zod validation, JWT session cookies, and Vitest. Assignments are relational rows, reveal pages use private tokens, and the draw preview uses the same matching rules as the committed draw.",
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
          "A live product-style project on Vercel + Neon that shows privacy boundaries, validation UX, relational modeling, and mobile admin workflows.",
          "A clear example of building software for a real personal workflow without over-engineering the social side."
        ],
      },
    },
    vgcTeamLab: {
      title: "VGC Team Lab",
      description:
        "A full-stack doubles team builder for competitive Pokémon with live Pikalytics meta, regulation-aware legality checks, Showdown import/export, a guided six-step workflow, and AI coaching behind a protected server route.",
      outcome:
        "The interesting work is the honest UX around imperfect rules data: walkthrough onboarding, fallback meta, pending learnset states, unverified-format notices, CI, and no-account browser storage.",
      detail: {
        summary:
          "VGC Team Lab turns competitive team building into a guided workflow: build the roster, apply meta sets, inspect legality, review matchup coverage, ask for coaching, and export the result to Pokémon Showdown. Default format is Pokémon Champions Reg M-A.",
        problem:
          "Competitive VGC tooling has to deal with fast-changing formats, partial data, and player workflows that jump between usage stats, legality checks, and Showdown pastes. The goal was to make those jumps feel coherent without pretending the app is an official event authority.",
        build:
          "The app is a React SPA backed by an Express proxy for live Pikalytics data and AI coaching. Team data stays in localStorage (schema v3), while the server handles CORS, rate limits, Hugging Face credentials, Pikalytics parsing, cache fallback, and body validation. CI runs tests and build on every push.",
        highlights: [
          "Six-step guided builder with per-step walkthrough help, sticky health summary, and auto-suggested next steps.",
          "Regulation-aware legality checks with explicit pending and unverified states when source data is incomplete.",
          "Showdown import/export, VGC form-name mapping, concurrent species resolution on import, and share URLs for compact team payloads.",
          "Server-side AI route keeps tokens out of the browser and applies timeout, allowlist, proxy-aware IP trust, and rate-limit protection."
        ],
        constraints: [
          "It is a team-building lab, not an official Pokémon legality authority.",
          "Teams are browser-local unless exported or shared through a URL payload.",
          "Pikalytics data is scraped and cached, so the UI includes fallback and cold-start states for the free Render tier."
        ],
        results: [
          "75 automated tests across legality, Showdown parsing, schema health, API protection, builder workflow, and smoke coverage — with GitHub Actions CI.",
          "A portfolio project that shows product UX, API integration, and careful communication of data uncertainty.",
          "Live frontend on GitHub Pages with the API proxy deployed separately on Render."
        ],
      },
    },
    priceMonitor: {
      title: "Facebook Marketplace Price Monitor",
      description:
        "A local-first Facebook Marketplace deal monitor for Brazil: save keyword and price searches, run a local Playwright worker with your own Facebook browser profile, and review listings, price drops, and worker health in a bilingual dashboard.",
      outcome:
        "The system keeps Facebook-facing automation on the user's machine, exposes worker heartbeat and session health in the dashboard, and relies on deterministic alert logic for listings, price drops, and deal-quality signals.",
      detail: {
        summary:
          "Price Monitor is a local automation product in an npm/Turbo monorepo: the Next.js dashboard manages saved searches and alerts, while a local worker owns Marketplace scraping, Facebook session state, polling jobs, and health reporting.",
        problem:
          "Marketplace monitoring needs a practical boundary around browser sessions, scraping failures, and long-running jobs. This project keeps that boundary local and makes the worker's state visible instead of hiding operational complexity.",
        build:
          "The monorepo uses Next.js, TypeScript, BullMQ, Playwright, Prisma, NextAuth (GitHub/Google OAuth), local Docker Postgres/Redis, and a persistent .facebook-profile browser directory. Shared packages handle Zod schemas, price parsing, poll scheduling, and worker health. The UI defaults to pt-BR with English support.",
        highlights: [
          "Local worker keeps Facebook browser/session data on the user's machine.",
          "Worker heartbeat dashboard shows online/stale/offline state, session mode, latest successful scrape, and latest failure type.",
          "Resilient scraper merges GraphQL interception, embedded JSON, and DOM fallback results into one listing model.",
          "Reliable polling keeps BullMQ deduplication, concurrency 1, manual cooldowns, stale RUNNING recovery, exponential backoff, and localized queue messages."
        ],
        constraints: [
          "The app requires a local worker and a manually maintained Facebook browser session.",
          "It is personal and educational tooling, not authorized Meta infrastructure.",
          "The dashboard reports worker and session state clearly so scraping failures are visible to the user."
        ],
        results: [
          "152 automated tests cover parsing, scheduling, cooldowns, price-drop logic, deal-quality signals, i18n queue messages, cleanup, auth/ownership guards, and middleware paths.",
          "A clear product boundary: local scraping and local data by default, with dashboard visibility for the parts that can fail.",
          "Brazil-first UX with BRL cents, pt-BR defaults, Marketplace location hints, listing alerts, and English support."
        ],
      },
    },
    cryptoMmLab: {
      title: "Crypto Market Making Lab",
      description:
        "A paper market-making research lab that pulls live CEX order books, simulates quote placement and fills, tracks inventory/PnL, compares CEX vs Uniswap V2 prices, benchmarks strategies side-by-side, and exposes a FastAPI dashboard.",
      outcome:
        "This is closest to my trading-systems work: risk controls, kill switch, stale-data guards, pluggable strategies with comparison metrics, tick-level auditability, Prometheus/Grafana, and backtesting.",
      detail: {
        summary:
          "Crypto MM Lab is an end-to-end paper trading loop for studying market-making mechanics: fetch public order books, place simulated quotes, process fills, track PnL, scan CEX/DEX differences, compare strategies, and inspect the system through APIs and dashboards.",
        problem:
          "Market-making research needs more than a notebook. You need a repeatable loop, explicit risk controls, observability, audit trails, and backtests that use the same strategy assumptions as the live paper loop.",
        build:
          "The backend is FastAPI with CCXT market data, web3.py for Uniswap V2 reserves, SQLAlchemy persistence, strategy modules, a paper broker, Prometheus metrics, Grafana dashboards, Docker Compose, and scripts for live loops, historical replay, or one-command strategy comparison.",
        highlights: [
          "Shared tick IDs join order books, quotes, fills, positions, PnL, and opportunities for full audit reconstruction.",
          "Risk controls include position caps, cumulative cash reservation, stale-tick cancellation, loop backoff, and a kill switch.",
          "Three pluggable strategies — pure MM, inventory skew, and volatility-adjusted spreads — with side-by-side Sharpe/drawdown/fill-rate comparison.",
          "Backtest mode replays SQLite/Postgres snapshots or CSV fixtures with the same risk assumptions as the live paper loop."
        ],
        constraints: [
          "The system is paper-only and never places live CEX or on-chain orders.",
          "Execution is simulated with conservative fill modes and no queue-position or latency model.",
          "Dashboard and APIs are intentionally unauthenticated for local research, so they should not be exposed publicly without a proxy."
        ],
        results: [
          "116 automated tests across order book math, fills, PnL, AMM, arbitrage scanning, backtests, strategy comparison, API routes, stale-data guards, and loop recovery — around 89% branch coverage.",
          "A research-grade demo of trading-system fundamentals: controls, observability, persistence, and failure handling.",
          "A Docker stack that brings up the app, Prometheus, and Grafana for local monitoring."
        ],
      },
    },
  },
};
