import { createI18n } from "vue-i18n";
import es from "./translations/es";
import en from "./translations/en";
import { LANGUAGE } from "./languages";

const i18n = createI18n({
  legacy: false,
  fallbackLocale: LANGUAGE.es,
  locale: localStorage.getItem("lang") || LANGUAGE.es,
  messages: {
    es,
    en,
  },
});

export default i18n;
