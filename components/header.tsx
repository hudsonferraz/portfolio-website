"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import NavLinks from "@/components/nav-links";
import MobileNav from "@/components/mobile-nav";
import { motionTransition, useReducedMotion } from "@/lib/motion";

export default function Header() {
  const reducedMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 flex h-[4.5rem] w-full -translate-x-1/2 items-center justify-center rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-max sm:max-w-[calc(100vw-2rem)] sm:rounded-full sm:px-3 dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75"
        initial={{
          y: reducedMotion ? 0 : -100,
          x: "-50%",
          opacity: reducedMotion ? 1 : 0,
        }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={motionTransition(reducedMotion)}
      >
        <nav
          className="hidden sm:flex sm:items-center sm:justify-center"
          aria-label="Main"
        >
          <NavLinks
            listClassName="flex items-center justify-center gap-x-1.5 text-[0.8rem] font-medium text-gray-500 md:gap-x-2.5 md:text-[0.85rem] lg:gap-x-3 lg:text-[0.9rem]"
            itemClassName="relative flex shrink-0 items-center justify-center"
            linkClassName="relative flex items-center justify-center whitespace-nowrap rounded-full px-2 py-2 transition hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-500 dark:hover:text-gray-300 dark:focus:ring-gray-300 md:px-2.5"
          />
        </nav>
      </motion.div>

      <MobileNav
        isOpen={mobileMenuOpen}
        onOpen={() => setMobileMenuOpen(true)}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
