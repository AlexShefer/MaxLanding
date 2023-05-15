import { useContext } from "react";
import { content } from "../content";
import { LanguageContext } from "./LanguageContext";

function Projects() {
    const { language } = useContext(LanguageContext);

    return (
        <div name="projects" className="container projects">
            <h1>{language === "eng" ? "Projects" : "Проекты"}</h1>
            <div className="grid-container">
                <div className="grid-item">
                    <h2>{language === "eng" ? "Music" : "Музыка"}</h2>

                    {content[language].occupation.music.map((option) => (
                        <p>{option}</p>
                    ))}
                </div>
                <div className="grid-item">
                    <h2>
                        {language === "eng" ? "Copywriting" : "Копирайтинг"}
                    </h2>

                    {content[language].occupation.copywriting.map((option) => (
                        <p>{option}</p>
                    ))}
                </div>
                <div className="grid-item">
                    <h2>
                        {language === "eng"
                            ? "Manual testing"
                            : "Мануальное тестирование"}
                    </h2>

                    {content[language].occupation.testing.map((option) => (
                        <p>{option}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
