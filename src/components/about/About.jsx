import "./About.scss";
import { AboutMe, Lightbulb, Music, Design } from "../Icons";
import { AboutmeImg } from "../Photos";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SkeletonImage from "../skeleton/Skeletonimage";
import SkeletonArticle from "../skeleton/SkeletonArticle";

const About = () => {
  const [loadingImages, setLoadingImages] = useState(true);
  const [loadingtext, setLoadingtext] = useState(true);
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
    <div className="about__section">
      <img src={Design} alt="Side design" className="About-side-design" />
      <div className="container">
        <img src={AboutMe} alt="About me label" />
        <div className="about__section-content">
          <div className="about__section--leftside">
            {loadingImages ? (
              <SkeletonImage dimension={{ width: 455, height: 523 }} />
            ) : (
              <img src={AboutmeImg} alt="my picture" />
            )}
          </div>

          {loadingtext ? (
            <div
              className="about__section--rightside"
              style={{
                height: "57vh",
              }}
            >
              <SkeletonArticle numberOfLines={15} />
            </div>
          ) : (
            <div className="about__section--rightside">
              <img
                src={Lightbulb}
                alt="Creative Lightbulb design"
                className="light"
              />
              <h2>
                <span className="block">Let’s get know </span>
                <span className="block">
                  <span className="blue-text">about me </span>closer
                </span>
              </h2>
              <p className="about__section--description">
                Aaronn is a New York-based visual designer focusing on branding
                and visual identity. Her portfolio showcases her wide range of
                work, spanning books, posters and web design.{" "}
                <b>
                  <Link to="/about">Read more</Link>{" "}
                </b>
              </p>
              <img src={Music} alt="Creative Music design" className="music" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
