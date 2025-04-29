import enTranslation from "@/i18n/locales/en/translation.json";
import frTranslation from "@/i18n/locales/fr/translation.json";
import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const languageCode = getLocales()[0]?.languageCode ?? "en";

i18n.use(initReactI18next).init({
    lng: languageCode,
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    resources: {
        en: { translation: enTranslation },
        fr: { translation: frTranslation },
    },
});

export default i18n;
