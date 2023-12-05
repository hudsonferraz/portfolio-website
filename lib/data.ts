import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dogs from "@/public/dogs.png";
import taskify from "@/public/taskify.png";
import pokedex from "@/public/pokedex.png";
import travelApp from "@/public/travel-app.png";
import carShowcase from "@/public/car-showcase.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre Mim",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Contato",
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
    title: "Taskify",
    description:
      "Taskify é um aplicativo de gerenciamento estilo Trello inclusive com uma versão PRO que permite criação ilimitada de boards.",
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
    title: "Pokedex",
    description:
      "Projeto feito para praticar consumo de APIs utilizando a PokeAPI.",
    tags: ["React"],
    imageUrl: pokedex,
    link: "https://github.com/hudsonferraz/pokedex",
  },
  {
    title: "Car Showcase",
    description:
      "Website que busca e filtra carros, feito para praticar uso de mais de uma API.",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: carShowcase,
    link: "https://github.com/hudsonferraz/car-showcase",
  },
  {
    title: "Dogs",
    description:
      "Uma mídia social para cachorros. Website estilo Instagram com suas funcionalidades básicas.",
    tags: ["React"],
    imageUrl: dogs,
    link: "https://github.com/hudsonferraz/dogs",
  },
  {
    title: "Travel App",
    description:
      "Landing Page simples feita para praticar TailwindCSS e TypeScript.",
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
