import { createI18n } from "vue-i18n";
import es from "./translations/es";

const i18n = createI18n({
  legacy: false,
  fallbackLocale: "es",
  locale: "es",
  messages: {
    es,
  },
});

export default i18n;
