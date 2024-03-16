import "./Project.scss";
import PropTypes from "prop-types";
import { Projects, Design, Right, Left } from "../Icons";
import { useEffect, useState } from "react";
import BaseSkeleton from "../skeleton/BaseSkeleton";
import RenderProject from "./Projectrender";
import Projectdata from "../Projectdata";

const Project = ({ projectsToShow, title }) => {
  const [loading, setLoading] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setLoadingImages(false);
    }, 500);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const handleLeftClick = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0)); // Clamp to prevent negative index
  };

  const handleRightClick = () => {
    setCurrentIndex(
      Math.min(currentIndex + 1, Projectdata.length - projectsToShow) // Clamp to prevent overflow
    );
  };

  const projects = RenderProject(
    Projectdata,
    currentIndex,
    projectsToShow,
    loadingImages
  );

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
                  <img src={Left} alt="An arrow indicating left scroll" />
                </button>
                <button
                  className="right-btn"
                  disabled={
                    currentIndex === Projectdata.length - projectsToShow
                  }
                  onClick={handleRightClick}
                >
                  <img src={Right} alt="An arrow indicating Right scroll" />
                </button>
              </div>
            </>
          )}
        </div>
        <div className="project__section--content">{projects}</div>
      </div>
    </div>
  );
};
Project.propTypes = {
  projectsToShow: PropTypes.number.isRequired,
  title: PropTypes.node.isRequired,
};
export default Project;
