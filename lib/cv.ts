import type { Language } from "@/lib/i18n";

const cvByLanguage = {
  en: {
    href: "/CV_HudsonFerraz_English.pdf",
    downloadFileName: "Hudson_Ferraz_CV_English.pdf",
  },
  pt: {
    href: "/CV_HudsonFerraz_Portugues.pdf",
    downloadFileName: "Hudson_Ferraz_CV_Portugues.pdf",
  },
} as const satisfies Record<
  Language,
  { href: string; downloadFileName: string }
>;

export function getCvForLanguage(language: Language) {
  return cvByLanguage[language];
}
