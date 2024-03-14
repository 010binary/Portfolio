import "./Skills.scss";
import { SeeMore, Skill, Design } from "../Icons";
import {
  Html,
  Js,
  Python,
  React,
  Scss,
  Figma,
  GitHub,
  Flask,
  Git,
  Affinity,
  Bootstrap,
  Css,
  Mongo,
  Mysql,
  Netlify,
  Vercel,
  GitLab,
  Kubernetes,
  Docker,
  PostgreSql,
  Selenium,
  Jest,
  Django,
  AWS,
  FastApi,
  NextJs,
  NodeJs,
  CLang,
  Bash,
} from "../Photos";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseSkeleton from "../skeleton/BaseSkeleton";
import SkeletonImage from "../skeleton/Skeletonimage";
import PropTypes from "prop-types";

const Skills = ({ numberOfSkills = 4 }) => {
  const [loading, setLoading] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setLoadingImages(false);
    }, 500);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const skillsList = [
    { name: "GitLab", img: GitLab },
    { name: "Kubernetes", img: Kubernetes },
    { name: "Docker", img: Docker },
    { name: "PostgreSql", img: PostgreSql },
    { name: "Jest", img: Jest },
    { name: "Django", img: Django },
    { name: "FastApi", img: FastApi },
    { name: "NextJs", img: NextJs },
    { name: "AWS", img: AWS },
    { name: "NodeJs", img: NodeJs },
    { name: "CLang", img: CLang },
    { name: "Bash", img: Bash },
    { name: "Selenium", img: Selenium },
    { name: "Html5", img: Html },
    { name: "Scss", img: Scss },
    { name: "Javascript", img: Js },
    { name: "React", img: React },
    { name: "Figma", img: Figma },
    { name: "GitHub", img: GitHub },
    { name: "Python", img: Python },
    { name: "Flask", img: Flask },
    { name: "Git", img: Git },
    { name: "Affinity", img: Affinity },
    { name: "Bootrap", img: Bootstrap },
    { name: "CSS3", img: Css },
    { name: "MongoDb", img: Mongo },
    { name: "SQl", img: Mysql },
    { name: "Netlify", img: Netlify },
    { name: "Vercel", img: Vercel },
  ];

  const getNumberOfRows = () => {
    return Math.ceil(numberOfSkills / 4); // Calculate number of rows
  };

  const renderSkills = (skills) =>
    skills.map((skill) => (
      <div key={skill.name} className={`${skill.name} skill-img `}>
        {loadingImages ? (
          <>
            <SkeletonImage dimension={{ width: 120, height: 129.33 }} />
          </>
        ) : (
          <>
            <img src={skill.img} alt={`An image of ${skill.name}`} />
            <p className={skill.name}>{skill.name}</p>
          </>
        )}
      </div>
    ));

  const renderRows = () => {
    const rows = [];
    const numRows = getNumberOfRows();
    for (let i = 0; i < numRows; i++) {
      const startIndex = i * 4;
      const endIndex = Math.min(startIndex + 4, numberOfSkills); // Avoid exceeding skillsList length
      const skillsForRow = skillsList.slice(startIndex, endIndex);
      rows.push(
        <div key={i} className="row">
          {renderSkills(skillsForRow)}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="skill__section">
      <img src={Design} alt="Side design" className="skill-side-design" />
      <div className="container">
        <img src={Skill} alt="" className="margin" />
        <div className="skill__section-content">{renderRows()}</div>
        <div className="see-more">
          {loading ? (
            <div
              style={{
                width: "10%",
              }}
            >
              <BaseSkeleton type="text" />
            </div>
          ) : (
            <section>
              <Link to="/skills">
                <p>See more</p>
                <img src={SeeMore} alt="see more" />
              </Link>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
Skills.propTypes = {
  numberOfSkills: PropTypes.object.isRequired,
};

export default Skills;
