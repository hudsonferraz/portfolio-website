import secretSanta from "@/public/secret-santa.png";
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
    slug: "secret-santa",
    titleKey: "secretSanta",
    statusKey: "live",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Zod",
    ],
    metrics: ["15 tests", "Private links", "Grouped draws"],
    imageUrl: secretSanta,
    links: {
      live: "https://hfo-amigo-secreto.vercel.app/",
      source: "https://github.com/hudsonferraz/secret_santa",
    },
  },
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
    metrics: ["75 tests", "Showdown import/export", "Guided builder"],
    imageUrl: vgcTeamLab,
    links: {
      live: "https://hudsonferraz.github.io/pokedex/",
      source: "https://github.com/hudsonferraz/pokedex",
    },
  },
  {
    slug: "price-monitor",
    titleKey: "priceMonitor",
    statusKey: "local",
    tags: [
      "Next.js",
      "TypeScript",
      "BullMQ",
      "Playwright",
      "Prisma",
      "OAuth",
    ],
    metrics: ["152 tests", "Local worker", "Health dashboard"],
    imageUrl: priceMonitor,
    links: {
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
      "web3.py",
      "Prometheus",
      "Docker",
    ],
    metrics: ["116 tests", "3 strategies", "~89% coverage"],
    imageUrl: cryptoMmLab,
    links: {
      source: "https://github.com/hudsonferraz/crypto-mm-lab",
    },
  },
] as const;
