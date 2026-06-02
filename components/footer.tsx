"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { PERSON_NAME } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="mb-1 text-sm font-medium text-gray-700 dark:text-white/80">
        {t("footer.tagline")}
      </p>
      <p className="mb-5 text-xs">{t("footer.location")}</p>
      <small className="mb-2 block text-xs">
        &copy; {currentYear} {PERSON_NAME}. {t("footer.copyright")}
      </small>
      <p className="text-xs text-gray-400 dark:text-white/40">
        {t("footer.stackNote")}
      </p>
    </footer>
  );
}
