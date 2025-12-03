"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function Projects() {
  const { t } = useLanguage();
  const projectsSection = t("nav.projects");
  const { ref } = useSectionInView(projectsSection, 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t("projects.title")}</SectionHeading>
      <div>
        {projectsData.map((project, index) => {
          const title = t(`projectsData.${project.titleKey}.title`);
          const description = t(`projectsData.${project.titleKey}.description`);
          return (
            <React.Fragment key={index}>
              <Project {...project} title={title} description={description} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
