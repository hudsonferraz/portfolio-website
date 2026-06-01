export default {
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
      "I studied Information Systems at UFVJM (Diamantina, MG). I got into programming through game bots and kept learning on my own. Today I work at Funttastic on HFT and market-making platforms—building exchange connectors, liquidity engines, and distributed infrastructure across multiple blockchains.",
  },
  experience: {
    title: "Experience",
    highlightsTitle: "Technical highlights",
    roles: {
      funttastic: {
        title: "Full-Stack Developer",
        company: "Funttastic · Remote",
        date: "2024 – Present",
        description:
          "I contribute to high-frequency trading and market-making platforms—integrating exchanges, liquidity provisioning algorithms, and distributed infrastructure across multiple blockchains.",
      },
      education: {
        title: "Information Systems",
        company: "UFVJM · Diamantina, MG",
        date: "2014 – Incomplete",
        description:
          "Coursework in software engineering and systems design. Continued learning through self-study and production work in trading systems and full-stack development.",
      },
    },
    highlights: {
      hummingbot: {
        title: "Hummingbot open-source connectors",
        description:
          "Built custom exchange connectors for CLOB and AMM venues, extending Hummingbot for distributed trading systems and reusable integration patterns.",
        tags: "Python, CLOB, AMM, Hummingbot",
      },
      rujira: {
        title: "Rujira blockchain HFT bot",
        description:
          "Architected a full HFT bot for Rujira Trade (FIN) using GraphQL and the Cosmos SDK, with adaptive spread/skew engines and real-time P&L monitoring.",
        tags: "TypeScript, GraphQL, Cosmos SDK, HFT",
      },
      barracuda: {
        title: "Barracuda HFT platform",
        description:
          "Developed a TypeScript/Bun system for automated market making and liquidity management, with adapters for Raydium, Rujira, and CCXT-based venues.",
        tags: "TypeScript, Bun, CCXT, Raydium",
      },
    },
  },
  projects: {
    title: "My Projects",
    viewProject: "Click here to learn more about this project.",
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
      languages: "TypeScript, Python, JavaScript",
      trading:
        "HFT, Market Making, Backtesting, Strategy Engines, CCXT, Hummingbot",
      blockchain: "Cosmos SDK, GraphQL, CLOB, AMM, Raydium",
      frontend: "React, Next.js, Tailwind CSS, Framer Motion",
      infrastructure: "Git, Docker, Bun, Node.js, Observability, Linux",
      data: "MySQL, MongoDB, Prisma, REST APIs",
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
    errorMessage: "Failed to send email. Please try again.",
  },
  footer: {
    copyright: "All rights reserved.",
    about: "About this website:",
    tech: "made with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.",
  },
  projectsData: {
    taskify: {
      title: "Taskify",
      description:
        "Taskify is a Trello-style management application, including a PRO version that allows unlimited board creation.",
    },
    pokedex: {
      title: "Pokedex",
      description: "Project made to practice API consumption using PokeAPI.",
    },
    carShowcase: {
      title: "Car Showcase",
      description:
        "Website that searches and filters cars, made to practice using multiple APIs.",
    },
    dogs: {
      title: "Dogs",
      description:
        "A social media for dogs. Instagram-style website with its basic features.",
    },
    travelApp: {
      title: "Travel App",
      description:
        "Simple Landing Page made to practice TailwindCSS and TypeScript.",
    },
  },
};

