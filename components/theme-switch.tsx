"use client";

import { useTheme } from "@/context/theme-context";
import { useLanguage } from "@/context/language-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 active:scale-95 dark:text-gray-200 dark:hover:bg-gray-700"
      onClick={toggleTheme}
      aria-label={
        theme === "light"
          ? t("accessibility.switchToDark")
          : t("accessibility.switchToLight")
      }
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
