import "./Skills.scss";
import { SeeMore, Skill, Design } from "../Icons";
import { Html, Js, Python, React, Scss, Figma, GitHub, Flask } from "../Photos";

const Skills = () => {
  const skillsList = [
    { name: "Html5", img: Html },
    { name: "Scss", img: Scss },
    { name: "Javascript", img: Js },
    { name: "React", img: React },
    { name: "Figma", img: Figma },
    { name: "GitHub", img: GitHub },
    { name: "Python", img: Python },
    { name: "Flask", img: Flask },
  ];

  const renderSkills = skillsList.map((skill) => (
    <div key={skill.name} className={`${skill.name} skill-img `}>
      <img src={skill.img} alt={`An image of ${skill.name}`} />
      <p className={skill.name}>{skill.name}</p>
    </div>
  ));

  return (
    <div className="skill__section">
      <img src={Design} alt="Side design" className="skill-side-design" />
      <div className="container">
        <img src={Skill} alt="" className="margin" />
        <div className="skill__section-content">
          <div className="row-1">{renderSkills.slice(0, 4)}</div>
          <div className="row-2">{renderSkills.slice(4)}</div>
        </div>
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
