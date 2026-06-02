"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { resolveTranslation, type Language } from "@/lib/i18n";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tList: (key: string) => readonly string[];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLanguage = localStorage.getItem("language") as Language | null;
    if (storedLanguage && (storedLanguage === "en" || storedLanguage === "pt")) {
      setLanguageState(storedLanguage);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("pt")) {
        setLanguageState("pt");
      } else {
        setLanguageState("en");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (mounted) {
      localStorage.setItem("language", lang);
      document.cookie = `language=${lang}; path=/; max-age=31536000`;
    }
  };

  const t = (key: string): string => {
    const value = resolveTranslation(language, key);
    return typeof value === "string" ? value : key;
  };

  const tList = (key: string): readonly string[] => {
    const value = resolveTranslation(language, key);
    return Array.isArray(value) ? value : [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tList }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
