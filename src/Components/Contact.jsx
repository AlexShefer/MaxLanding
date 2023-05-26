import { useContext } from "react";
import { content } from "../data/content";
import { LanguageContext } from "./LanguageContext";

function Contact() {
    const { language } = useContext(LanguageContext);
    return (
        <div name="contact" className="container">
            <div className="contact">
                <h1>
                    {language === "eng" ? "Work with Me" : "Сотрудничество"}
                </h1>

                {content[language].contact.map((option, i) => (
                    <h2 key={i}>{option}</h2>
                ))}
            </div>
        </div>
    );
}

export default Contact;
