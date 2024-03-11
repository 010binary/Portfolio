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
} from "../Photos";

// eslint-disable-next-line react/prop-types
const Skills = ({ numberOfSkills = 4 }) => {
  const skillsList = [
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
        <img src={skill.img} alt={`An image of ${skill.name}`} />
        <p className={skill.name}>{skill.name}</p>
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
          <section>
            <p>See more</p>
            <img src={SeeMore} alt="see more" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
