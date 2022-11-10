import type { Languages } from "@/core/i18n/languages";
import { useI18n } from "vue-i18n";

export function useChangeLanguage() {
  const { locale } = useI18n({ useScope: "global" });
  const change = (language: Languages) => {
    locale.value = language;
  };
  return {
    change,
    language: locale,
  };
}

export default function useTranslation() {
  const { t } = useI18n({ useScope: "global" });
  return t;
}
