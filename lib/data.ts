import dogs from "@/public/dogs.png";
import taskify from "@/public/taskify.png";
import pokedex from "@/public/pokedex.png";
import travelApp from "@/public/travel-app.png";
import carShowcase from "@/public/car-showcase.png";

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
    titleKey: "taskify",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "Stripe",
      "MySQL",
    ],
    imageUrl: taskify,
    link: "https://github.com/hudsonferraz/taskify",
  },
  {
    titleKey: "pokedex",
    tags: ["React"],
    imageUrl: pokedex,
    link: "https://github.com/hudsonferraz/pokedex",
  },
  {
    titleKey: "carShowcase",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: carShowcase,
    link: "https://github.com/hudsonferraz/car-showcase",
  },
  {
    titleKey: "dogs",
    tags: ["React"],
    imageUrl: dogs,
    link: "https://github.com/hudsonferraz/dogs",
  },
  {
    titleKey: "travelApp",
    tags: ["React", "TypeScript", "TailwindCSS", "Next.js"],
    imageUrl: travelApp,
    link: "https://github.com/hudsonferraz/hilink-app",
  },
] as const;

