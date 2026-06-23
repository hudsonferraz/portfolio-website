"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { linkKeys } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { layoutSpringTransition, useReducedMotion } from "@/lib/motion";

type NavLinksProps = {
  onLinkClick?: () => void;
  listClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
  showActiveIndicator?: boolean;
};

export default function NavLinks({
  onLinkClick,
  listClassName,
  itemClassName,
  linkClassName,
  showActiveIndicator = true,
}: NavLinksProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <ul className={listClassName}>
      {linkKeys.map((link) => {
        const linkName = t(`nav.${link.key}`);
        const isActive = activeSection === link.key;

        return (
          <li key={link.hash} className={itemClassName}>
            <Link
              className={clsx(linkClassName, {
                "text-gray-950 dark:text-gray-200": isActive,
              })}
              href={`/${link.hash}`}
              onClick={() => {
                setActiveSection(link.key);
                setTimeOfLastClick(Date.now());
                onLinkClick?.();
              }}
              aria-label={`Navigate to ${linkName} section`}
              aria-current={isActive ? "page" : undefined}
            >
              {linkName}
              {showActiveIndicator && isActive && (
                <motion.span
                  className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  layoutId="activeSection"
                  transition={layoutSpringTransition(reducedMotion)}
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

