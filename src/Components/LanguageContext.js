import { createContext, useState } from "react";

export const LanguageContext = createContext({
    language: "eng",
    setLanguage: () => {},
});
