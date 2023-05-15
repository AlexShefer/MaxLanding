import { createContext } from "react";

export const LanguageContext = createContext({
    language: "eng",
    setLanguage: () => {},
});
