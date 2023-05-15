import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { LanguageContext } from "./Components/LanguageContext";

function App() {
    const [language, setLanguage] = useState("eng");
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            <Navbar />
            <Home />
            <Education />
            <Experience />
            <Projects />
            <Contact />
        </LanguageContext.Provider>
    );
}

export default App;
