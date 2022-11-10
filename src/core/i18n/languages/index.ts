export type Languages = keyof typeof LANGUAGE;

export const LANGUAGE = {
  es: "es",
  en: "en",
} as const;
