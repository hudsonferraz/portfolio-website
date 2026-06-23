"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projectsData } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

type ProjectRecord = (typeof projectsData)[number];

type ProjectDetailPageProps = {
  project: ProjectRecord;
};

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-black/10 bg-white/75 p-5 shadow-sm dark:border-white/10 dark:bg-white/10 sm:p-6">
      <h2 className="text-xl font-semibold text-gray-950 dark:text-white">
        {title}
      </h2>
      <div className="mt-3 text-gray-700 dark:text-white/70">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li className="flex gap-3 leading-relaxed" key={item}>
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900 dark:bg-white/80"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const { t, tList } = useLanguage();
  const title = t(`projectsData.${project.titleKey}.title`);
  const description = t(`projectsData.${project.titleKey}.description`);
  const summary = t(`projectsData.${project.titleKey}.detail.summary`);
  const problem = t(`projectsData.${project.titleKey}.detail.problem`);
  const build = t(`projectsData.${project.titleKey}.detail.build`);
  const highlights = tList(`projectsData.${project.titleKey}.detail.highlights`);
  const constraints = tList(`projectsData.${project.titleKey}.detail.constraints`);
  const results = tList(`projectsData.${project.titleKey}.detail.results`);
  const status = t(`projects.status.${project.statusKey}`);
  const liveLink = "live" in project.links ? project.links.live : undefined;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-24 pt-4 sm:pt-0">
      <Link
        href="/#projects"
        className="mb-8 inline-flex w-fit items-center gap-2 rounded-md border border-black/10 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
      >
        <FaArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
        {t("projects.detail.backToProjects")}
      </Link>

      <section className="overflow-hidden rounded-lg border border-black/10 bg-gray-100 shadow-sm dark:border-white/10 dark:bg-white/10">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
            <span className="w-fit rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:border-white/10 dark:bg-white/10 dark:text-white/75">
              {status}
            </span>
            <h1 className="mt-5 text-3xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-700 dark:text-white/72">
              {description}
            </p>
            <p className="mt-4 leading-relaxed text-gray-800 dark:text-white/80">
              {summary}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {liveLink ? (
                <a
                  className="inline-flex items-center gap-2 rounded-md bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-white dark:text-gray-950 dark:hover:bg-white/85"
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaExternalLinkAlt aria-hidden="true" className="h-3.5 w-3.5" />
                  {t("projects.liveDemo")}
                </a>
              ) : null}
              <a
                className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                href={project.links.source}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub aria-hidden="true" className="h-4 w-4" />
                {t("projects.sourceCode")}
              </a>
            </div>
          </div>

          <div className="relative min-h-[18rem] border-t border-black/10 bg-white/70 dark:border-white/10 dark:bg-black/10 sm:min-h-[26rem] lg:border-l lg:border-t-0">
            <Image
              src={project.imageUrl}
              alt={`${t("projects.imageAlt")} ${title}`}
              fill
              priority
              quality={95}
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover object-left-top"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {project.metrics.map((metric) => (
          <div
            className="rounded-lg border border-black/10 bg-white/75 p-4 shadow-sm dark:border-white/10 dark:bg-white/10"
            key={metric}
          >
            <p className="text-sm font-semibold text-gray-950 dark:text-white">
              {metric}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-4 rounded-lg border border-black/10 bg-white/75 p-5 shadow-sm dark:border-white/10 dark:bg-white/10 sm:p-6">
        <h2 className="text-xl font-semibold text-gray-950 dark:text-white">
          {t("projects.detail.stack")}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              className="rounded-full bg-black/[0.72] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:bg-white/15 dark:text-white/80"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <DetailSection title={t("projects.detail.problem")}>
          <p className="leading-relaxed">{problem}</p>
        </DetailSection>
        <DetailSection title={t("projects.detail.build")}>
          <p className="leading-relaxed">{build}</p>
        </DetailSection>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <DetailSection title={t("projects.detail.highlights")}>
          <BulletList items={highlights} />
        </DetailSection>
        <DetailSection title={t("projects.detail.constraints")}>
          <BulletList items={constraints} />
        </DetailSection>
      </div>

      <div className="mt-4">
        <DetailSection title={t("projects.detail.results")}>
          <BulletList items={results} />
        </DetailSection>
      </div>
    </main>
  );
}
