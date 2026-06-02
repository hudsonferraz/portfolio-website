"use client";

import { motion } from "framer-motion";
import { motionTransition, useReducedMotion } from "@/lib/motion";
import LanguageSwitcher from "./language-switcher";
import ThemeSwitch from "./theme-switch";

export default function FloatingControls() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: reducedMotion ? 1 : 0,
        scale: reducedMotion ? 1 : 0.8,
      }}
      animate={{ opacity: 1, scale: 1 }}
      transition={motionTransition(reducedMotion)}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1 rounded-full border border-gray-200 bg-white/90 px-1.5 py-1.5 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/90"
    >
      <ThemeSwitch />
      <div
        className="mx-0.5 h-6 w-px shrink-0 bg-gray-200 dark:bg-gray-600"
        aria-hidden="true"
      />
      <LanguageSwitcher />
    </motion.div>
  );
}
