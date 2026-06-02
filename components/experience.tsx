"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { experienceHighlightKeys, experienceRoleKeys } from "@/lib/data";
import { getInViewRevealProps, useReducedMotion } from "@/lib/motion";

function ExperienceHighlights({
  reducedMotion,
  animationOffset,
}: {
  reducedMotion: boolean;
  animationOffset: number;
}) {
  const { t } = useLanguage();

  return (
    <div className="mt-6 border-t border-black/10 pt-6 dark:border-white/10">
      <h4 className="mb-4 text-base font-semibold">
        {t("experience.roles.funttastic.highlightsTitle")}
      </h4>
      <div className="grid gap-4">
        {experienceHighlightKeys.map((highlightKey, index) => (
          <motion.div
            key={highlightKey}
            className="rounded-xl border border-black/5 bg-white p-5 text-left dark:border-white/10 dark:bg-white/5 sm:p-6"
            {...getInViewRevealProps(
              reducedMotion,
              animationOffset + index * 0.08
            )}
          >
            <h5 className="text-lg font-semibold">
              {t(`experience.highlights.${highlightKey}.title`)}
            </h5>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/75">
              {t(`experience.highlights.${highlightKey}.description`)}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {(t(`experience.highlights.${highlightKey}.tags`) as string)
                .split(",")
                .map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:bg-white/15"
                  >
                    {tag.trim()}
                  </li>
                ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
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
            className="rounded-2xl border border-black/5 bg-gray-100 p-6 dark:border-white/10 dark:bg-white/10 sm:p-8"
            {...getInViewRevealProps(reducedMotion, index * 0.1)}
          >
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {t(`experience.roles.${roleKey}.title`)}
                </h3>
                <p className="text-gray-700 dark:text-white/70">
                  {t(`experience.roles.${roleKey}.company`)}
                </p>
              </div>
              <span className="shrink-0 text-sm font-medium text-gray-500 dark:text-white/50">
                {t(`experience.roles.${roleKey}.date`)}
              </span>
            </div>
            <p className="leading-relaxed text-gray-700 dark:text-white/75">
              {t(`experience.roles.${roleKey}.description`)}
            </p>

            {roleKey === "funttastic" && (
              <ExperienceHighlights
                reducedMotion={reducedMotion}
                animationOffset={(index + 1) * 0.1}
              />
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
