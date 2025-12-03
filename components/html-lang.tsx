"use client";

import { useLanguage } from "@/context/language-context";
import { useEffect } from "react";

export default function HtmlLang() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  return null;
}

