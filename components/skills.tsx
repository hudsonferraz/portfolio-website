"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillCategoryKeys } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { t } = useLanguage();
  const { ref } = useSectionInView("skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{t("skills.title")}</SectionHeading>
      <p className="text-gray-700 -mt-6 mb-10 dark:text-white/80">
        {t("skills.subtitle")}
      </p>

      <div className="space-y-8 text-left">
        {skillCategoryKeys.map((categoryKey, categoryIndex) => (
          <motion.div
            key={categoryKey}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={categoryIndex}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3 dark:text-white/50">
              {t(`skills.categories.${categoryKey}`)}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {(
                t(`skills.items.${categoryKey}`) as string
              )
                .split(",")
                .map((skill, index) => (
                  <li
                    key={index}
                    className="bg-white borderBlack rounded-xl px-4 py-2 text-base text-gray-800 dark:bg-white/10 dark:text-white/80"
                  >
                    {skill.trim()}
                  </li>
                ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
