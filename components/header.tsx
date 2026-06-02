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
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{
          y: reducedMotion ? 0 : -100,
          x: "-50%",
          opacity: reducedMotion ? 1 : 0,
        }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={motionTransition(reducedMotion)}
      />

      <MobileNav
        isOpen={mobileMenuOpen}
        onOpen={() => setMobileMenuOpen(true)}
        onClose={() => setMobileMenuOpen(false)}
      />

      <nav
        className="hidden sm:flex fixed top-[1.7rem] left-1/2 h-[initial] -translate-x-1/2 py-0"
        aria-label="Main"
      >
        <NavLinks
          listClassName="flex items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-500"
          itemClassName="h-3/4 flex items-center justify-center relative"
          linkClassName="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:rounded-full dark:focus:ring-gray-300"
        />
      </nav>
    </header>
  );
}
