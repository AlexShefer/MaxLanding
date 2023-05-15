import { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { MdLanguage } from "react-icons/md";
import { LanguageContext } from "./LanguageContext";

import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const { language, setLanguage } = useContext(LanguageContext);
    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);
    const handleLanguage = () => {
        if (language === "eng") {
            setLanguage("rus");
        } else {
            setLanguage("eng");
        }
    };

    return (
        <div className="header">
            <nav className="navbar">
                <div onClick={handleLanguage} className="language-switcher">
                    <MdLanguage />
                    <p>{language.toUpperCase()}</p>
                </div>

                <div className="hamburger" onClick={handleClick}>
                    {click ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                            offset={0}
                        >
                            {language === "eng" ? "About" : "О проекте"}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="education"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                        >
                            {language === "eng" ? "Education" : "Образование"}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                        >
                            {language === "eng" ? "Experience" : "Опыт работы"}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                        >
                            {language === "eng" ? "Projects" : "Проекты"}
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                        >
                            {language === "eng"
                                ? "Work with Me"
                                : "Сотрудничество"}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
