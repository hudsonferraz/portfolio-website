import vgcTeamLab from "@/public/vgc-team-lab.png";
import priceMonitor from "@/public/price-monitor.png";
import cryptoMmLab from "@/public/crypto-mm-lab.png";

export const linkKeys = [
  {
    key: "home",
    hash: "#home",
  },
  {
    key: "about",
    hash: "#about",
  },
  {
    key: "experience",
    hash: "#experience",
  },
  {
    key: "skills",
    hash: "#skills",
  },
  {
    key: "projects",
    hash: "#projects",
  },
  {
    key: "contact",
    hash: "#contact",
  },
] as const;

export const experienceRoleKeys = ["funttastic", "education"] as const;

export const experienceHighlightKeys = [
  "hummingbot",
  "rujira",
  "barracuda",
] as const;

export const skillCategoryKeys = [
  "languages",
  "trading",
  "blockchain",
  "frontend",
  "infrastructure",
  "data",
] as const;

export const projectsData = [
  {
    slug: "vgc-team-lab",
    titleKey: "vgcTeamLab",
    statusKey: "live",
    tags: [
      "React",
      "TypeScript",
      "Express",
      "PokeAPI",
      "Pikalytics",
      "AI Proxy",
    ],
    metrics: ["69 tests", "Showdown import/export", "Live meta"],
    imageUrl: vgcTeamLab,
    links: {
      live: "https://hudsonferraz.github.io/pokedex/",
      source: "https://github.com/hudsonferraz/pokedex",
    },
  },
  {
    slug: "price-monitor",
    titleKey: "priceMonitor",
    statusKey: "live",
    tags: [
      "Next.js",
      "TypeScript",
      "BullMQ",
      "Playwright",
      "Prisma",
      "Redis",
    ],
    metrics: ["57 tests", "Worker queue", "Price-drop alerts"],
    imageUrl: priceMonitor,
    links: {
      live: "https://fb-price-monitor.vercel.app",
      source: "https://github.com/hudsonferraz/price-monitor",
    },
  },
  {
    slug: "crypto-mm-lab",
    titleKey: "cryptoMmLab",
    statusKey: "research",
    tags: [
      "Python",
      "FastAPI",
      "CCXT",
      "SQLAlchemy",
      "Prometheus",
      "Docker",
    ],
    metrics: ["110 tests", "Paper trading", "Backtests"],
    imageUrl: cryptoMmLab,
    links: {
      source: "https://github.com/hudsonferraz/crypto-mm-lab",
    },
  },
] as const;
