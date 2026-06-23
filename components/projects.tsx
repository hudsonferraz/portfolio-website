"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function Projects() {
  const { t } = useLanguage();
  const { ref } = useSectionInView("projects", 0.45);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 w-full">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <SectionHeading>{t("projects.title")}</SectionHeading>
        <p className="mb-8 max-w-2xl text-center leading-relaxed text-gray-700 dark:text-white/70">
          {t("projects.subtitle")}
        </p>
        <div className="w-full">
          {projectsData.map((project) => {
            const title = t(`projectsData.${project.titleKey}.title`);
            const description = t(
              `projectsData.${project.titleKey}.description`
            );
            const outcome = t(`projectsData.${project.titleKey}.outcome`);
            const status = t(`projects.status.${project.statusKey}`);

            return (
              <React.Fragment key={project.titleKey}>
                <Project
                  {...project}
                  title={title}
                  description={description}
                  outcome={outcome}
                  status={status}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
