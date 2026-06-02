"use client";

import type { Transition } from "framer-motion";
import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reducedMotion;
}

export const instantTransition: Transition = { duration: 0 };

export function motionTransition(
  reducedMotion: boolean,
  transition?: Transition
): Transition {
  if (reducedMotion) {
    return instantTransition;
  }

  return transition ?? {};
}

export function getInViewRevealProps(reducedMotion: boolean, delay = 0) {
  return {
    initial: {
      opacity: reducedMotion ? 1 : 0,
      y: reducedMotion ? 0 : 50,
    },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: motionTransition(reducedMotion, { delay }),
  };
}

export function getStaggerRevealVariants(reducedMotion: boolean) {
  return {
    initial: {
      opacity: reducedMotion ? 1 : 0,
      y: reducedMotion ? 0 : 50,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: motionTransition(reducedMotion, { delay: 0.05 * index }),
    }),
  };
}

export function layoutSpringTransition(reducedMotion: boolean): Transition {
  if (reducedMotion) {
    return instantTransition;
  }

  return { type: "spring", stiffness: 380, damping: 30 };
}
