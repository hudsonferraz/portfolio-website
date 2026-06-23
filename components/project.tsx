"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useLanguage } from "@/context/language-context";
import { useReducedMotion } from "@/lib/motion";

type ProjectProps = {
  slug: string;
  titleKey?: string;
  title: string;
  description: string;
  outcome: string;
  status: string;
  tags: readonly string[];
  metrics: readonly string[];
  imageUrl: StaticImageData;
  links: {
    live?: string;
    source: string;
  };
};

export default function Project({
  slug,
  title,
  description,
  outcome,
  status,
  tags,
  metrics,
  imageUrl,
  links,
}: ProjectProps) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);

  return (
    <motion.article
      ref={ref}
      style={
        reducedMotion
          ? { scale: 1, opacity: 1 }
          : { scale: scaleProgress, opacity: opacityProgress }
      }
      className="group mb-8 last:mb-0 w-full max-w-5xl overflow-hidden rounded-lg border border-black/10 bg-gray-100 shadow-sm transition hover:-translate-y-1 hover:bg-gray-200 hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
    >
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex min-h-[26rem] flex-col px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:border-white/10 dark:bg-white/10 dark:text-white/75">
              {status}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-gray-800 dark:text-white/80">
            {outcome}
          </p>

          <ul className="mt-5 grid gap-2 sm:grid-cols-3">
            {metrics.map((metric) => (
              <li
                className="rounded-md border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-gray-800 dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                key={metric}
              >
                {metric}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                className="rounded-full bg-black/[0.72] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:bg-white/15 dark:text-white/80"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-auto">
            <Link
              className="inline-flex items-center gap-2 rounded-md bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-white dark:text-gray-950 dark:hover:bg-white/85"
              href={`/projects/${slug}`}
              aria-label={`${t("projects.readCaseStudy")} ${title}`}
            >
              {t("projects.readCaseStudy")}
              <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
            {links.live ? (
              <a
                className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                href={links.live}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${t("projects.openLive")} ${title}`}
              >
                <FaExternalLinkAlt aria-hidden="true" className="h-3.5 w-3.5" />
                {t("projects.liveDemo")}
              </a>
            ) : null}
            <a
              className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              href={links.source}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${t("projects.openSource")} ${title}`}
            >
              <FaGithub aria-hidden="true" className="h-4 w-4" />
              {t("projects.sourceCode")}
            </a>
          </div>
        </div>

        <div className="relative min-h-[17rem] border-t border-black/10 bg-white/70 lg:border-l lg:border-t-0 dark:border-white/10 dark:bg-black/10">
          <Image
            src={imageUrl}
            alt={`${t("projects.imageAlt")} ${title}`}
            fill
            quality={95}
            sizes="(min-width: 1024px) 34rem, 100vw"
            className="object-cover object-left-top transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </motion.article>
  );
}
