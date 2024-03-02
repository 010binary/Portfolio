import "./Hero.scss";
import NarBar from "../navbar/NarBar";
import { Instagram, Github, Twitter, Linkedin } from "../Icons";

const Hero = () => {
  return (
    <>
      <NarBar />
      <div className="hero__section">
        <div className="hero__section--leftside">
          <h1>
            Augustine <span className="blue-text">Chukwuemeka.</span>
          </h1>
          <p className="description">
            <span className="block">
              I’m a Creative full-Stack developer with a tone of experience in{" "}
            </span>
            <span className="block">
              enterprise companies and startups level application. Proficient in
            </span>
            <span className="block">
              JavaScript, React and Flask. Passionate about Web development
            </span>
          </p>
          <section className="hero-socials">
            <a href="#">
              <img src={Instagram} alt="My Instagram handle" />
            </a>
            <a href="#">
              <img src={Github} alt="My Github handle" />
            </a>
            <a href="#">
              <img src={Twitter} alt="My Twitter handle" />
            </a>
            <a href="#">
              <img src={Linkedin} alt="My Linkedin handle" />
            </a>
          </section>
          <section className="hero-button">
            <button>Hire me</button>
          </section>
        </div>
        <div className="hero__section--rightside"></div>
      </div>
    </>
  );
};

export default Hero;
