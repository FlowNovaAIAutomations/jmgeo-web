import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esCommon from "@/locales/es/common.json";

// i18n scaffold. EN locale intentionally not added yet.
// To add EN later: import enCommon from "@/locales/en/common.json"
// and add to resources.en.common.
if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: {
      es: { common: esCommon },
    },
    lng: "es",
    fallbackLng: "es",
    defaultNS: "common",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
