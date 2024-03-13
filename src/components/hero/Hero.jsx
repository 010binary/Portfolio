import "./Hero.scss";
import { Instagram, Github, Twitter, Linkedin, Design } from "../Icons";
import { HeroImg } from "../Photos";
import { Link } from "react-router-dom";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loadingImages, setLoadingImages] = useState(true);

  // Simulating image loading delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingImages(false);
    }, 3000);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

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
              <button>Hire me</button>
            </Link>
          </section>
        </div>
        <div className="hero__section--rightside">
          {loadingImages ? (
            <div
              style={{
                backgroundColor: "#000",
                padding: "20px",
                borderRadius: "10px",
                width: "100%",
                height: "100%",
              }}
            >
              {/* <Skeleton height={"100%"} width={"100%"} inline={true} /> */}
            </div>
          ) : (
            <img src={HeroImg} alt="My picture" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
