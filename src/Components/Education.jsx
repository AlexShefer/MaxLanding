import { useContext } from "react";
import { content } from "../content";
import { LanguageContext } from "./LanguageContext";

function Education() {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div name="education" className="container education">
            <div className="text-grid">
                <h1>{language === "eng" ? "Education" : "Образование"}</h1>
                <p>{content[language].education}</p>
            </div>
        </div>
    );
}

export default Education;
