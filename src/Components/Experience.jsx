import { useContext } from "react";
import { content } from "../data/content";
import { LanguageContext } from "./LanguageContext";

function Experience() {
    const { language } = useContext(LanguageContext);

    return (
        <div name="experience" className="container education">
            <div className="text-grid">
                <h1>{language === "eng" ? "Experience" : "Опыт работы"}</h1>

                <div>
                    {content[language].experience.map((place, i) => (
                        <p key={i}>{place}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
