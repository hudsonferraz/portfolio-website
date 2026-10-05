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
    passionItalic: "browser robotics simulation & trading systems",
    focus: "with a focus on",
    focusTech: "TypeScript, Python & production systems",
    contactButton: "Contact me",
    downloadCV: "Download CV",
  },
  about: {
    title: "About Me",
    description:
      "I build production full-stack systems where performance and reliability matter under real constraints: browser-side robotics simulation with WebAssembly physics and neural-network control, and exchange integrations for long-running trading bots. I care about clear observability, maintainable architecture, and shipping through hard platform limits.",
    description2:
      "I studied Information Systems at UFVJM (Diamantina, MG). I got into programming through game bots and kept learning on my own. Most recently I worked at Runibi (runibiLABS) on a client-side humanoid robotics simulation platform (Jul–Sep 2026), after building HFT and market-making systems at Funttastic across multiple blockchains (Jan 2024–Jun 2026).",
    englishNote:
      "Fluent in English (EF SET C2 Proficient). Comfortable collaborating with international teams in English.",
  },
  experience: {
    title: "Experience",
    roles: {
      runibi: {
        title: "Full-Stack Developer",
        company: "Runibi (runibiLABS) - Remote",
        date: "Jul 2026 - Sep 2026",
        description:
          "Built a browser-based robotics simulation platform where users train humanoid robots through game missions. Real-time MuJoCo physics (WebAssembly) and ONNX neural-network control policies run entirely on the client, on desktop and mobile.",
        highlightsTitle: "Selected technical work",
      },
      funttastic: {
        title: "Full-Stack Developer",
        company: "Funttastic - Remote",
        date: "Jan 2024 - Jun 2026",
        description:
          "Contributed to high-frequency trading and market-making platforms, integrating exchanges, liquidity provisioning algorithms, and distributed infrastructure across multiple blockchains.",
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
      simasGame: {
        title: "SimAs MuJoCo game (mission curriculum)",
        description:
          "Developed a React/TypeScript game with Three.js/React Three Fiber, driving a humanoid (Unitree G1) with in-browser physics (mujoco-js) and ONNX Runtime Web policy inference. Built a 3D Worldmap for mission selection, NPC dialogue with cinematic camera cuts, a finale sequence, and mobile touch controls with continuous D-pad snap assist.",
        tags: ["React", "TypeScript", "Three.js", "MuJoCo", "ONNX"],
      },
      mobileHardening: {
        title: "Mobile & iOS/WebKit hardening",
        description:
          "Made WASM physics plus neural inference run reliably on iPhone and Android. Fixed OOM crashes between missions, set up cross-origin isolation (COOP/COEP) for SharedArrayBuffer in iframes, handled WebKit threading limits and CDN WASM cache poisoning, and improved long-session performance with lazy code-splitting and a tighter physics catch-up loop.",
        tags: ["WebAssembly", "WebKit", "COOP/COEP", "Performance"],
      },
      crashDiagnostics: {
        title: "Crash diagnostics & observability",
        description:
          "Built client-side crash telemetry: breadcrumbs at ONNX, WebGL, simulation and navigation points, write-ahead death reports that survive tab kills, and a Supabase-backed crash report pipeline. Added an opt-in ?debug=1 in-browser console for diagnosing issues on real devices.",
        tags: ["Telemetry", "Supabase", "Debugging", "Reliability"],
      },
      platformFoundation: {
        title: "Platform foundation",
        description:
          "Set up the Bun monorepo (React/Vite frontends, FastAPI backend with Telegram bot integration), moved authentication to Supabase, deployed on Cloudflare Pages with per-environment configuration, and contributed to the institutional landing page including accessibility and brand guideline alignment.",
        tags: ["Bun", "FastAPI", "Supabase", "Cloudflare"],
      },
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
      "Technologies and domains I use to build simulation platforms, trading systems, and production software.",
    categories: {
      languages: "Languages",
      trading: "Trading & automation",
      simulation: "Simulation & client systems",
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
      "Full-stack developer building browser robotics simulation, trading systems, and production infrastructure.",
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
        "A full-stack doubles team builder for competitive Pokémon with live Pikalytics meta, regulation-aware legality checks, Showdown import/export, a guided four-step workflow, and Groq-powered AI coaching behind a protected server route.",
      outcome:
        "The interesting work is the honest UX around imperfect rules data: walkthrough onboarding, labeled offline meta, pending learnset states, curated Champions bans with a non-oracle disclaimer, CI, and no-account browser storage with library backup.",
      detail: {
        summary:
          "VGC Team Lab turns competitive team building into a guided workflow: build the roster, check legality, tune matchups, ask for optional coaching, and share or export to Pokémon Showdown. Default format is Pokémon Champions Reg M-C.",
        problem:
          "Competitive VGC tooling has to deal with fast-changing formats, partial data, and player workflows that jump between usage stats, legality checks, and Showdown pastes. The goal was to make those jumps feel coherent without pretending the app is an official event authority.",
        build:
          "The app is a React SPA backed by an Express proxy for live Pikalytics data and AI coaching. Team data stays in localStorage (schema v3) with JSON library backup/restore, while the server handles CORS, rate limits, Groq credentials, Pikalytics parsing, cache fallback, and body validation. CI runs tests and build on every push.",
        highlights: [
          "Four-step guided builder (Build → Check → Tune → Share) with sticky Team report, slot set completeness, and mobile-friendly roster layout.",
          "Champions Reg M-C legality uses a curated Legendary / Mythical / Paradox ban list, with clear notices when other formats remain incomplete.",
          "Showdown import/export, VGC form-name mapping, share URLs with failure toasts, and downloadable all-teams backup for a no-account product.",
          "Server-side Groq coach keeps tokens out of the browser and applies timeout, allowlist, proxy-aware IP trust, and rate-limit protection."
        ],
        constraints: [
          "It is a team-building lab, not an official Pokémon legality authority.",
          "Teams are browser-local unless exported, shared through a URL payload, or restored from a backup file.",
          "Pikalytics data is scraped and cached, so the UI includes labeled fallback and cold-start states for the free Render tier."
        ],
        results: [
          "Automated tests across legality, Showdown parsing, schema health, API protection, builder workflow, clipboard/backup helpers, and smoke coverage — with GitHub Actions CI.",
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
        "A paper market-making research lab that pulls live CEX order books, simulates quote placement and fills, tracks inventory/PnL, compares CEX vs Uniswap V2 prices, benchmarks strategies in a Research tab, and exposes a FastAPI product dashboard.",
      outcome:
        "This is closest to my trading-systems work: risk controls, kill switch, stale-data guards, pluggable strategies with comparison metrics, tick-level auditability, Prometheus/Grafana, and backtesting — framed as an honest paper lab, not a profit bot.",
      detail: {
        summary:
          "Crypto MM Lab is an end-to-end paper trading loop for studying market-making mechanics: fetch public order books, place simulated quotes, process fills, track PnL, scan CEX/DEX differences, compare strategies, run scenario sweeps, and inspect the system through APIs and a tabbed dashboard.",
        problem:
          "Market-making research needs more than a notebook. You need a repeatable loop, explicit risk controls, observability, audit trails, and backtests that use the same strategy assumptions as the live paper loop — plus a UI that does not pretend the system is live trading.",
        build:
          "The backend is FastAPI with CCXT market data (poll default, optional websocket with fallback), web3.py for Uniswap V2 reserves, SQLAlchemy persistence, strategy modules, a paper broker with multiple fill modes, Prometheus metrics, Grafana dashboards, Docker Compose, and Research APIs for fixture compare/sweep.",
        highlights: [
          "Product dashboard with PAPER banner, config chips, Live / Opportunities / Research tabs, open quotes, and kill-switch confirmation.",
          "Shared tick IDs join order books, quotes, fills, positions, PnL, and opportunities for full audit reconstruction.",
          "Risk controls include position caps, cumulative cash reservation, stale-tick cancellation, loop backoff, and an optional operator-token kill switch for hosted demos.",
          "Three pluggable strategies plus fixture comparison and parameter sweeps; toy latency/probability fills are labeled as simulations."
        ],
        constraints: [
          "The system is paper-only and never places live CEX or on-chain orders.",
          "Execution is simulated (including an explicit toy latency/probability mode) and is not exchange matching-engine fidelity.",
          "Public demos should set OPERATOR_API_TOKEN so mutating kill-switch routes are not open to the world."
        ],
        results: [
          "Automated tests and CI covering order book math, fills, PnL, AMM, arbitrage scanning, backtests, strategy comparison, research APIs, operator auth, stale-data guards, and loop recovery — with a high branch-coverage gate.",
          "A research-grade demo of trading-system fundamentals: controls, observability, persistence, and failure handling.",
          "Live paper demo on Render with a product dashboard (PAPER banner, Live / Opportunities / Research), plus a Docker stack for local Prometheus/Grafana."
        ],
      },
    },
  },
};
