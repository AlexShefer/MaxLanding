import { useContext } from "react";
import { content } from "../content";
import { LanguageContext } from "./LanguageContext";

function Experience() {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div name="experience" className="container education">
            <div className="text-grid">
                <h1>{language === "eng" ? "Experience" : "Опыт работы"}</h1>

                <div>
                    {content[language].experience.map((place) => (
                        <p>{place}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
