import "./Project.scss";
import { Portfolio1, Portfolio2, Portfolio3 } from "../Photos";
import { Projects, Leftarrow, Right } from "../Icons";

const Project = () => {
  const displayProject = [
    { name: "Agency website", img: Portfolio1, languages: ["React", "Flask"] },
    {
      name: "Dashboard website",
      img: Portfolio2,
      languages: ["React", "Flask"],
    },
    {
      name: "Support Center website",
      img: Portfolio3,
      languages: ["React", "Flask"],
    },
  ];
  const renderProject = displayProject.map((project) => (
    <div key={project.name} className="projects">
      <img src={project.img} alt={`project image for ${project.name}`} />
      <section className="about-project">
        <p className="project-name">{project.name}</p>
        <section className="project-decription">
          <p className="Project-languages">{project.languages}</p>
        </section>
      </section>
    </div>
  ));
  return (
    <div className="project__section">
      <img src={Projects} alt="the Label for the project section" />
      <div className="project__section--header">
        <h3>Featured Projects</h3>
        <div className="project__section--header--buttons">
          <button className="left-btn">
            <img src={Leftarrow} alt="An arrow indicating left scroll" />
          </button>
          <button className="right-btn">
            <img src={Right} alt="An arrow indicating Right scroll" />
          </button>
        </div>
      </div>
      <div className="project__section--content">{renderProject}</div>
    </div>
  );
};

export default Project;
