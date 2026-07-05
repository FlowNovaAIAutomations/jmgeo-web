import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esCommon from "@/locales/es/common.json";
import enCommon from "@/locales/en/common.json";

// El sitio se prerenderiza en español (SSG), así que SIEMPRE se inicializa en
// "es" para que la hidratación coincida con el HTML estático. Si el usuario
// eligió inglés en una visita anterior, applyStoredLanguage() lo restaura
// tras el montaje (se llama desde el Header). Clave: "jmgeo-lang".
const STORAGE_KEY = "jmgeo-lang";

export function applyStoredLanguage() {
  try {
    if (window.localStorage.getItem(STORAGE_KEY) === "en" && i18n.language !== "en") {
      void i18n.changeLanguage("en");
    }
  } catch {
    // localStorage puede no estar disponible (modo privado, etc.)
  }
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: {
      es: { common: esCommon },
      en: { common: enCommon },
    },
    lng: "es",
    fallbackLng: "es",
    defaultNS: "common",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

  i18n.on("languageChanged", (lng) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lng);
    } catch {
      // localStorage puede no estar disponible (modo privado, etc.)
    }
    document.documentElement.lang = lng;
  });
}

export default i18n;
