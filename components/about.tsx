"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { motionTransition, useReducedMotion } from "@/lib/motion";

export default function About() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const { ref } = useSectionInView("about");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={motionTransition(reducedMotion, { delay: 0.175 })}
      id="about"
    >
      <SectionHeading>{t("about.title")}</SectionHeading>
      <p className="mb-3">{t("about.description")}</p>
      <p className="mb-3">{t("about.description2")}</p>
      <p className="text-sm text-gray-600 dark:text-white/60">
        {t("about.englishNote")}
      </p>
    </motion.section>
  );
}
