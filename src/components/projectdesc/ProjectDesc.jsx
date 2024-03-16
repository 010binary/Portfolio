import "./ProjectDesc.scss";
import SkeletonArticle from "../skeleton/SkeletonArticle";
import SkeletonImage from "../skeleton/Skeletonimage";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BaseSkeleton from "../skeleton/BaseSkeleton";
import Projectdata from "../Projectdata";

const ProjectDesc = ({ projectId }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  // Find the project with matching ID
  const project = Projectdata.find((project) => project.id === projectId);

  return (
    <div className="container project-desc">
      <h3>
        {loading ? (
          <BaseSkeleton type="title" />
        ) : (
          <>
            <span className="blue-text">Project </span>
            Detail
          </>
        )}
      </h3>
      <section className="project-desc-img">
        {loading ? (
          <SkeletonImage dimension={{ width: 1000, height: 400 }} />
        ) : (
          <img src={project.img} alt={`Project ${project.name}`} />
        )}
      </section>
      <section className="project-desc-txt">
        {loading ? (
          <SkeletonArticle numberOfLines={10} />
        ) : (
          <>
            <h6 className="project-desc-header">{project.name}</h6>
            <p>{project.description}</p>
          </>
        )}
      </section>
    </div>
  );
};
ProjectDesc.propTypes = {
  projectId: PropTypes.string.isRequired,
};
export default ProjectDesc;
