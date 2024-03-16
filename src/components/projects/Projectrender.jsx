// projectRenderer.js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SkeletonCard from "../skeleton/SkeletonCard";

const RenderProject = (
  projects,
  currentIndex,
  projectsToShow,
  loadingImages
) => {
  return projects
    .slice(currentIndex, currentIndex + projectsToShow)
    .map((project) => (
      <React.Fragment key={project.id}>
        {loadingImages ? (
          <SkeletonCard />
        ) : (
          <div className="project__section--content--projects">
            <section className="image-project">
              <img
                src={project.img}
                alt={`project image for ${project.name}`}
              />
              <div className="overlay">
                <Link to={`/project/details/${project.id}`} className="text">
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
        )}
      </React.Fragment>
    ));
};

RenderProject.propTypes = {
  projects: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  projectsToShow: PropTypes.number.isRequired,
  loadingImages: PropTypes.bool.isRequired,
};

export default RenderProject;
