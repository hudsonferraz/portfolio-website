"use client";

import React, { useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavLinks from "@/components/nav-links";
import { useLanguage } from "@/context/language-context";

type MobileNavProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onOpen, onClose }: MobileNavProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  return (
    <>
      <button
        type="button"
        className="fixed top-4 right-4 z-[1000] flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 text-gray-800 shadow-lg backdrop-blur-[0.5rem] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 dark:text-gray-200 dark:focus:ring-gray-300 sm:hidden"
        onClick={isOpen ? onClose : onOpen}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={
          isOpen ? t("accessibility.closeMenu") : t("accessibility.openMenu")
        }
      >
        {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[998] bg-black/40 sm:hidden"
            onClick={onClose}
            aria-label={t("accessibility.closeMenu")}
          />
          <nav
            id="mobile-navigation"
            className="fixed left-0 right-0 top-[4.5rem] z-[999] max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-black/5 bg-white px-4 py-6 shadow-lg dark:border-white/10 dark:bg-gray-950 sm:hidden"
          >
            <NavLinks
              onLinkClick={onClose}
              listClassName="flex flex-col gap-1"
              itemClassName="relative"
              linkClassName="flex w-full items-center rounded-lg px-4 py-3 text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:focus:ring-gray-300"
            />
          </nav>
        </>
      )}
    </>
  );
}
