import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";

import { LanguageContext } from "./Components/LanguageContext";

import Articles from "./Components/Articles";

function App() {
    const [language, setLanguage] = useState("eng");

    return (
        <BrowserRouter>
            <LanguageContext.Provider value={{ language, setLanguage }}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/articles" element={<Articles />} />
                </Routes>
            </LanguageContext.Provider>
        </BrowserRouter>
    );
}

export default App;
