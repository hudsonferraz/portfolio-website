import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    key: "projects",
    hash: "#projects",
  },
  {
    key: "skills",
    hash: "#skills",
  },
  {
    key: "contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
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

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Prisma",
  "MongoDB",
  "MySQL",
  "Framer Motion",
] as const;
