"use client";

import { useLanguage } from "@/context/language-context";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0.5">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-2 transition-all duration-200 sm:gap-2 sm:px-3 ${
          language === "en"
            ? "bg-gray-900 text-white shadow-md dark:bg-gray-100 dark:text-gray-900"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
        }`}
        aria-label="Switch to English"
        aria-pressed={language === "en"}
      >
        <span className="text-base leading-none sm:text-lg">🇺🇸</span>
        <span className="text-xs font-semibold sm:text-sm">EN</span>
      </button>
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-2 transition-all duration-200 sm:gap-2 sm:px-3 ${
          language === "pt"
            ? "bg-gray-900 text-white shadow-md dark:bg-gray-100 dark:text-gray-900"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
        }`}
        aria-label="Switch to Portuguese"
        aria-pressed={language === "pt"}
      >
        <span className="text-base leading-none sm:text-lg">🇧🇷</span>
        <span className="text-xs font-semibold sm:text-sm">PT</span>
      </button>
    </div>
  );
}
