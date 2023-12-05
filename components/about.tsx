"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre Mim");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre Mim</SectionHeading>
      <p className="mb-3">
        Me interessei por programação quando tive contato com bots de um jogo
        que eu jogava e ingressei na Universidade Federal dos Vales do
        Jequitinhonha e Mucuri (UFVJM) no curso de Sistemas de Informação.
        Apesar de nao ter finalizado o curso o meu interesse na área não
        diminuiu, continuei tentando me aperfeiçoar de forma autodidata e
        continuo tentando aprender diariamente. Fiz esse site com o intuito de
        mostrar um pouco do que sei e estou procurando uma primeira oportunidade
        na área.
      </p>
    </motion.section>
  );
}
