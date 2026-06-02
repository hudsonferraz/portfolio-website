import enTranslations from "@/messages/en";
import ptTranslations from "@/messages/pt";

export type Language = "en" | "pt";

const translations = {
  en: enTranslations,
  pt: ptTranslations,
} as const;

export function resolveTranslation(
  language: Language,
  key: string
): string | readonly string[] | undefined {
  const keys = key.split(".");
  let value: unknown = translations[language];

  for (const segment of keys) {
    if (value && typeof value === "object" && segment in value) {
      value = (value as Record<string, unknown>)[segment];
    } else {
      return undefined;
    }
  }

  if (typeof value === "string") {
    return value;
  }

  if (
    Array.isArray(value) &&
    value.every((item) => typeof item === "string")
  ) {
    return value;
  }

  return undefined;
}
