import "./Project.scss";
import PropTypes from "prop-types";
import { Portfolio1, Portfolio2, Portfolio3 } from "../Photos";
import { Projects, Right, Design } from "../Icons"; // Leftarrow,
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseSkeleton from "../skeleton/BaseSkeleton";
import SkeletonCard from "../skeleton/SkeletonCard";

const Project = ({ projectsToShow, title }) => {
  const [loading, setLoading] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setLoadingImages(false);
    }, 5000);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

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

  const handleLeftClick = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0)); // Clamp to prevent negative index
  };

  const handleRightClick = () => {
    setCurrentIndex(
      Math.min(currentIndex + 1, displayProject.length - projectsToShow) // Clamp to prevent overflow
    );
  };

  const renderProject = displayProject
    .slice(currentIndex, currentIndex + projectsToShow)
    .map((project) => (
      <>
        {loadingImages ? (
          <>
            <SkeletonCard />
          </>
        ) : (
          <>
            <div
              key={project.name}
              className="project__section--content--projects"
            >
              <section className="image-project">
                <img
                  src={project.img}
                  alt={`project image for ${project.name}`}
                />
                <div className="overlay">
                  <Link to="/project/details" className="text">
                    Visit
                  </Link>
                </div>
              </section>
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
          </>
        )}
      </>
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
          {loading ? (
            <div
              style={{
                width: "30%",
              }}
            >
              <BaseSkeleton type="text" />
            </div>
          ) : (
            <>
              {title}
              <div className="project__section--header--buttons">
                <button
                  className="left-btn"
                  disabled={currentIndex === 0}
                  onClick={handleLeftClick}
                >
                  <img src={Right} alt="An arrow indicating left scroll" />
                </button>
                <button
                  className="right-btn"
                  disabled={
                    currentIndex === displayProject.length - projectsToShow
                  }
                  onClick={handleRightClick}
                >
                  <img src={Right} alt="An arrow indicating Right scroll" />
                </button>
              </div>
            </>
          )}
        </div>
        <div className="project__section--content">{renderProject}</div>
      </div>
    </div>
  );
};
Project.propTypes = {
  projectsToShow: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default Project;
