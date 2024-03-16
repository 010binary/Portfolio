import NavBar from "../../components/navbar/NarBar";
import ProjectDesc from "../../components/projectdesc/ProjectDesc";
import Project from "../../components/projects/Project";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import "./ProjectDetail.scss";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  return (
    <div id="project-detail-page">
      <NavBar />
      <ProjectDesc projectId={projectId} />
      <Project projectsToShow={3} title={<h3>Other Projects</h3>} />
      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
