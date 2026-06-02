"use client";

import { motion } from "framer-motion";
import { motionTransition, useReducedMotion } from "@/lib/motion";

export default function SectionDivider() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={motionTransition(reducedMotion, { delay: 0.125 })}
    />
  );
}
