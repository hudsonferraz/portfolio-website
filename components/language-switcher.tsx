"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-full px-1.5 py-1.5 shadow-xl border border-gray-200 dark:border-gray-700"
    >
      <button
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 ${
          language === "en"
            ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 shadow-md"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Switch to English"
      >
        <span className="text-lg leading-none">🇺🇸</span>
        <span className="text-sm font-semibold">EN</span>
      </button>
      <button
        onClick={() => setLanguage("pt")}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 ${
          language === "pt"
            ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 shadow-md"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Switch to Portuguese"
      >
        <span className="text-lg leading-none">🇧🇷</span>
        <span className="text-sm font-semibold">PT</span>
      </button>
    </motion.div>
  );
}

