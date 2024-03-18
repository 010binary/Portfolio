import "./Hero.scss";
import { Instagram, Github, Twitter, Linkedin, Design } from "../Icons";
import { HeroImg, HeroMobileImg } from "../Photos";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SkeletonImage from "../skeleton/Skeletonimage";
import SkeletonArticle from "../skeleton/SkeletonArticle";

const Hero = () => {
  const [loadingImages, setLoadingImages] = useState(true);
  const [loadingtext, setLoadingtext] = useState(true);

  const [isMobile, setIsMobile] = useState(false); // State to track mobile width

  // Function to check if screen width is mobile
  const checkIsMobile = () => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth <= 768); // Adjust the threshold as needed
  };

  // Check mobile width on component mount
  useEffect(() => {
    checkIsMobile();

    // Event listener for screen resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  // Simulating image loading delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingImages(false);
      setLoadingtext(false);
    }, 500);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="hero__section">
      <img src={Design} alt="Side design" className="hero-side-design" />
      <div className="container">
        {loadingtext ? (
          <div
            className="hero__section--leftside"
            style={{
              height: "67vh",
            }}
          >
            <SkeletonArticle numberOfLines={15} />
          </div>
        ) : (
          <div className="hero__section--leftside">
            <h1>
              Augustine <span className="blue-text">Chukwuemeka.</span>
            </h1>
            <p className="description">
              <span className="block">
                I’m a Creative full-Stack developer with a tone of experience in{" "}
              </span>
              <span className="block">
                enterprise companies and startups level application. Proficient
                in
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
        )}

        <div className="hero__section--rightside">
          {loadingImages ? (
            <SkeletonImage dimension={{ width: 472, height: 544 }} />
          ) : (
            <img src={isMobile ? HeroMobileImg : HeroImg} alt="My picture" /> // Use mobile image if on mobile
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
