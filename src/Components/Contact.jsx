import { useContext } from "react";
import { content } from "../content";
import { LanguageContext } from "./LanguageContext";

function Contact() {
    const { language, setLanguage } = useContext(LanguageContext);
    return (
        <div name="contact" className="container">
            <div className="contact">
                <h1>
                    {language === "eng" ? "Work with Me" : "Сотрудничество"}
                </h1>

                {content[language].contact.map((option) => (
                    <p>{option}</p>
                ))}
            </div>
        </div>
    );
}

export default Contact;
