import "./Hero.scss";
import { Instagram, Github, Twitter, Linkedin, Design } from "../Icons";
import { HeroImg } from "../Photos";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero__section">
      <img src={Design} alt="Side design" className="hero-side-design" />
      <div className="container">
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
            <a href="https://www.instagram.com/10_binary/">
              <img src={Instagram} alt="My Instagram handle" />
            </a>
            <a href="https://github.com/010binary/">
              <img src={Github} alt="My Github handle" />
            </a>
            <a href="https://twitter.com/August13200296">
              <img src={Twitter} alt="My Twitter handle" />
            </a>
            <a href="https://www.linkedin.com/in/alpha-augustine/">
              <img src={Linkedin} alt="My Linkedin handle" />
            </a>
          </section>
          <section className="hero-button">
            <Link to="/contact">
            <button>Hire me</button></Link>
          </section>
        </div>
        <div className="hero__section--rightside">
          <img src={HeroImg} alt="My picture" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
