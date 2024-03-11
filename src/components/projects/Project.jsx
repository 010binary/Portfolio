import "./Project.scss";
import { Portfolio1, Portfolio2, Portfolio3 } from "../Photos";
import { Projects, Leftarrow, Right, Design } from "../Icons";

// eslint-disable-next-line react/prop-types
const Project = ({ projectsToShow, title }) => {
  const displayProject = [
    {
      name: "Agency website.",
      img: Portfolio1,
      languages: ["React", "Flask"],
    },
    {
      name: "Dashboard website.",
      img: Portfolio2,
      languages: ["React", "Flask"],
    },
    {
      name: "Support Center website.",
      img: Portfolio3,
      languages: ["React", "Flask"],
    },
    {
      name: "Agency websites.",
      img: Portfolio1,
      languages: ["React", "Flask"],
    },
    {
      name: "Dashboard websites.",
      img: Portfolio2,
      languages: ["React", "Flask"],
    },
    {
      name: "Support Center websites.",
      img: Portfolio3,
      languages: ["React", "Flask"],
    },
  ];
  const renderProject = displayProject
    .slice(0, projectsToShow)
    .map((project) => (
      <div key={project.name} className="project__section--content--projects">
        <img src={project.img} alt={`project image for ${project.name}`} />
        <section className="about-project">
          <p className="project-name">{project.name}</p>
          <section className="project-decription">
            <p className="Project-languages">
              {project.languages.map((language, index) => (
                <span key={index}>{language}</span>
              ))}
            </p>
          </section>
        </section>
      </div>
    ));
  return (
    <div className="project__section">
      <img src={Design} alt="Side design" className="project-side-design" />
      <div className="container">
        <img
          src={Projects}
          alt="the Label for the project section"
          className="project-Top-design"
        />
        <div className="project__section--header">
          {title}
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
    </div>
  );
};

export default Project;
