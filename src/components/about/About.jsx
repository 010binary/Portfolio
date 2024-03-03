import "./About.scss";
import { AboutMe, Lightbulb, Music } from "../Icons";
import { AboutmeImg } from "../Photos";

const About = () => {
  return (
    <div className="about__section">
      <img src={AboutMe} alt="" />
      <div className="about__section--leftside">
        <img src={AboutmeImg} alt="" />
      </div>
      <div className="about__section--rightside">
        <img src={Lightbulb} alt="Creative Lightbulb design" />
        <img src={Music} alt="Creative Music design" />
      </div>
    </div>
  );
};

export default About;
