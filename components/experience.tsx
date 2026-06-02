"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { experienceHighlightKeys, experienceRoleKeys } from "@/lib/data";

export default function Experience() {
  const { t } = useLanguage();
  const { ref } = useSectionInView("experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>{t("experience.title")}</SectionHeading>

      <div className="space-y-8">
        {experienceRoleKeys.map((roleKey, index) => (
          <motion.article
            key={roleKey}
            className="bg-gray-100 border border-black/5 rounded-2xl p-6 sm:p-8 dark:bg-white/10 dark:border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  {t(`experience.roles.${roleKey}.title`)}
                </h3>
                <p className="text-gray-700 dark:text-white/70">
                  {t(`experience.roles.${roleKey}.company`)}
                </p>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-white/50 shrink-0">
                {t(`experience.roles.${roleKey}.date`)}
              </span>
            </div>
            <p className="leading-relaxed text-gray-700 dark:text-white/75">
              {t(`experience.roles.${roleKey}.description`)}
            </p>
          </motion.article>
        ))}

        <div>
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
            {t("experience.highlightsTitle")}
          </h3>
          <div className="grid gap-4 sm:grid-cols-1">
            {experienceHighlightKeys.map((highlightKey, index) => (
              <motion.article
                key={highlightKey}
                className="bg-white borderBlack rounded-xl p-5 sm:p-6 text-left dark:bg-white/5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <h4 className="font-semibold text-lg">
                  {t(`experience.highlights.${highlightKey}.title`)}
                </h4>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/75">
                  {t(`experience.highlights.${highlightKey}.description`)}
                </p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {(
                    t(`experience.highlights.${highlightKey}.tags`) as string
                  )
                    .split(",")
                    .map((tag) => (
                      <li
                        key={tag}
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-white/15"
                      >
                        {tag.trim()}
                      </li>
                    ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
