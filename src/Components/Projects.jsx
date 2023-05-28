import { useContext } from "react";
import { content } from "../data/content";
import { LanguageContext } from "./LanguageContext";
import { NavLink } from "react-router-dom";

function Projects() {
    const { language } = useContext(LanguageContext);

    return (
        <div name="projects" className="container projects">
            <h1>{language === "eng" ? "Projects" : "Проекты"}</h1>
            <div className="grid-container">
                <div className="grid-item">
                    <h2>{language === "eng" ? "Music" : "Музыка"}</h2>

                    {content[language].occupation.music.myProjects.map(
                        (option, i) => (
                            <div key={i} className="music-projects">
                                <img src={option.img} alt={option.text} />
                                <a href={option.link}>{option.text}</a>
                            </div>
                        )
                    )}
                    <br />
                    <p>{content[language].occupation.music.description}</p>
                    <br />
                    {content[language].occupation.music.podcast.map(
                        (option) => (
                            <p>
                                <a href={option.link}>{option.name}</a>
                            </p>
                        )
                    )}
                </div>
                <div className="grid-item article">
                    <h2>
                        {language === "eng" ? "Copywriting" : "Копирайтинг"}
                    </h2>

                    {content[language].occupation.copywriting.map(
                        (option, i) => (
                            <p key={i}>{option}</p>
                        )
                    )}

                    <NavLink to="/articles">
                        {language === "eng"
                            ? "View the publications"
                            : "Посмотреть публикации"}
                    </NavLink>
                </div>
                <div className="grid-item">
                    <h2>
                        {language === "eng"
                            ? "Manual testing"
                            : "Мануальное тестирование"}
                    </h2>

                    {content[language].occupation.testing.map((option, i) => (
                        <p key={i}>{option}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
