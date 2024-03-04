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
    <div key={project.name}>
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
    <div className="about__section">
      <img src={Projects} alt="the Label for the project section" />
      <div className="about__section--header">
        <h3>Featured Projects</h3>
        <button>
          <img src={Leftarrow} alt="An arrow indicating left scroll" />
        </button>
        <button>
          <img src={Right} alt="An arrow indicating Right scroll" />
        </button>
      </div>
      <div className="about__section--content">{renderProject}</div>
    </div>
  );
};

export default Project;
