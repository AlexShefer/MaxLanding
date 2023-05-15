import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialIco({ link, children, download }) {
    return (
        <div className="relative mx-4">
            <a className="text-gray-300" href={link} download={download}>
                {children}
            </a>
        </div>
    );
}

function Footer() {
    return (
        <div className="bg-zinc-900  p-4">
            <div className="bg-zinc-900 flex justify-between">
                <div className="text-2xl  text-gray-300">Aleksandr Shefer</div>
                <div className="flex align-middle ">
                    <SocialIco
                        ico={FaLinkedinIn}
                        message={"LinkedIn"}
                        position={"-left-10"}
                        link={
                            "https://www.linkedin.com/in/aleksandr-shefer-a115ab265"
                        }
                    >
                        <FaLinkedinIn size={30} />
                    </SocialIco>
                    <SocialIco
                        ico={FaGithub}
                        message={"GitHab"}
                        position={"-left-10"}
                        link={"https://github.com/AlexShefer"}
                    >
                        {" "}
                        <FaGithub size={30} />
                    </SocialIco>
                    <SocialIco
                        ico={FaGithub}
                        message={"Send an Email"}
                        position={"-left-28"}
                        link={"mailto:avshef451987@gmail.com"}
                    >
                        {" "}
                        <HiOutlineMail size={30} />
                    </SocialIco>
                    <SocialIco
                        ico={FaGithub}
                        message={"Download Resume"}
                        position={"-left-40"}
                        link={"./assets/resume.pdf"}
                        download={"resume.pdf"}
                    >
                        {" "}
                        <BsFillPersonLinesFill size={30} />
                    </SocialIco>
                </div>
            </div>
            <div className="w-full text-center  text-gray-300 mt-4 ">
                <p>&copy; {`<ASh/>`} All right reserved</p>
            </div>
        </div>
    );
}

export default Footer;
