import Home from "../Components/Home";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";

function Main() {
    return (
        <div>
            <Navbar />
            <Home />
            <Education />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}
export default Main;
