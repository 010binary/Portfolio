import "./Skills.scss";
import { Skill } from "../Icons";
import { Html, Js, Python, React, Scss, Figma, GitHub, Flask } from "../Photos";

const Skills = () => {
  const skillsList = [
    { name: "Html", img: Html },
    { name: "Js", img: Js },
    { name: "Python", img: Python },
    { name: "React", img: React },
    { name: "Scss", img: Scss },
    { name: "Figma", img: Figma },
    { name: "GitHub", img: GitHub },
    { name: "Flask", img: Flask },
  ];

  const renderSkills = skillsList.map((skill) => (
    <div key={skill.name} className={skill.name}>
      <img src={skill.img} alt={`An image of ${skill.name}`} />
    </div>
  ));

  return (
    <div className="skill__section">
      <img src={Skill} alt="" />
      <div className="skill__section-content">
        <div className="row-1">{renderSkills.slice(0, 4)}</div>
        <div className="row-2">{renderSkills.slice(4)}</div>
      </div>
      
    </div>
  );
};

export default Skills;
