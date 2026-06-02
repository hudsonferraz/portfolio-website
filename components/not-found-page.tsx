"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-6xl font-bold text-gray-300 dark:text-gray-600">
        404
      </p>
      <h1 className="mb-3 text-2xl font-semibold sm:text-3xl">
        {t("notFound.title")}
      </h1>
      <p className="mb-8 max-w-md text-gray-600 dark:text-gray-400">
        {t("notFound.description")}
      </p>
      <Link
        href="/#home"
        className="group flex h-[3rem] items-center justify-center gap-2 rounded-full bg-gray-900 px-6 text-white outline-none transition-all hover:scale-105 hover:bg-gray-950 focus:scale-110 active:scale-105 dark:bg-white dark:bg-opacity-10"
      >
        {t("notFound.backHome")}
      </Link>
    </main>
  );
}
