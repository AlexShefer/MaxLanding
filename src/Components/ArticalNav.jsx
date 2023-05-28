import { useState, useContext } from "react";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { LanguageContext } from "./LanguageContext";

import "./Navbar.css";

const ArticalNav = () => {
    const [click, setClick] = useState(false);
    const { language, setLanguage } = useContext(LanguageContext);

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
                <div className="corner">
                    <div onClick={handleLanguage} className="language-switcher">
                        <MdLanguage />
                        <p>{language.toUpperCase()}</p>
                    </div>
                </div>

                <div className="hamburger">
                    <div>
                        <NavLink
                            to="/"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                            offset={0}
                            className="home-icon"
                        >
                            {FaHome}
                        </NavLink>
                    </div>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <div>
                            <NavLink
                                to="/"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={closeMenu}
                                offset={0}
                            >
                                {language === "eng" ? "Home" : "На главную"}
                            </NavLink>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ArticalNav;
