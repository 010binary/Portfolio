import NavBar from "../../components/navbar/NarBar";
import Project from "../../components/projects/Project";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import "./Projects.scss";

const Projects = () => {
  return (
    <>
      <div id="project-page">
        <NavBar />
        <Project
          projectsToShow={6}
          title={
            <h3>
              My <span className="blue-text">Work</span>
            </h3>
          }
        />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Projects;
