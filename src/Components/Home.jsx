import { useContext } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { LanguageContext } from "./LanguageContext";
import { content } from "../content";

function Home() {
    const { language } = useContext(LanguageContext);
    return (
        <div name="home" className="container home">
            <div className="text-grid">
                <div>
                    <h2>{content[language].greeting[0]}</h2>
                    <h1>{content[language].greeting[1]}</h1>
                </div>
                <div>
                    <p>{content[language].about}</p>
                </div>
            </div>

            <div className="social-links">
                <SocialIco
                    message={"LinkedIn"}
                    position={"-left-10"}
                    link={"https://linkedin.com/in/maxlalak"}
                >
                    <FaLinkedinIn size={30} color="#f8f9fa" />
                </SocialIco>

                <SocialIco link={"mailto:max.lalak@gmail.com"}>
                    {" "}
                    <HiOutlineMail size={30} color="#f8f9fa" />
                </SocialIco>
                <SocialIco link={"./assets/resume.pdf"} download={"resume.pdf"}>
                    {" "}
                    <BsFillPersonLinesFill size={30} color="#f8f9fa" />
                </SocialIco>
            </div>
        </div>
    );
}

export default Home;

function SocialIco({ link, children, download }) {
    return (
        <div className="icon">
            <a href={link} download={download} target="_blank" rel="noreferrer">
                {children}
            </a>
        </div>
    );
}
