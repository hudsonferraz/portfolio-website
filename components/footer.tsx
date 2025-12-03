"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Hudson. {t("footer.copyright")}
      </small>
      <p className="text-xs">
        <span className="font-semibold">{t("footer.about")}</span> {t("footer.tech")}
      </p>
    </footer>
  );
}
