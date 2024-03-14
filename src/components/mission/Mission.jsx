import { SecImgs, AboutmeImg } from "../Photos";
import "./Mission.scss";
import { useEffect, useState } from "react";
import BaseSkeleton from "../skeleton/BaseSkeleton";

const Mission = () => {
  const [loadingImages, setLoadingImages] = useState(true);
  const [loadingtext, setLoadingtext] = useState(true);
  const [loadingheader, setLoadingheader] = useState(true);
  // Simulating image loading delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingImages(false);
      setLoadingtext(false);
      setLoadingheader(false);
    }, 500);
    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="container mission-section">
      {loadingheader ? (
        <BaseSkeleton type="title" />
      ) : (
        <h5>
          About <span className="blue-text">Me</span>
        </h5>
      )}

      <section className="mission-section-texts">
        {loadingheader ? (
          <>
            <BaseSkeleton type="title" />
            <BaseSkeleton type="title" />
            <BaseSkeleton type="title" />
          </>
        ) : (
          <p className="right-side">
            My <span className="blue-text">mission</span> is to make design
            easier.
          </p>
        )}
        {loadingtext ? (
          <>
            <BaseSkeleton type="text" />
            <BaseSkeleton type="text" />
            <BaseSkeleton type="text" />
            <BaseSkeleton type="text" />
            <BaseSkeleton type="text" />
          </>
        ) : (
          <p className="left-side">
            Create custom Designs with AARONN that converts more visitors than
            any website. With lots of unique design, you can easily select a
            logo without hassle. Create custom landing logos with AARONN that
            converts more visitors than any website. With lots of revisions, you
            can easily build a logo without porbolem build a logo without
            porbolem build a logo without porbolem.
          </p>
        )}
      </section>
      <section className="mission-section-imgs">
        <section className="right-img">
          {loadingImages ? (
            <>
              <BaseSkeleton type="image" />
            </>
          ) : (
            <img src={AboutmeImg} alt="an image of me" />
          )}
        </section>
        <section className="left-img">
          {loadingImages ? (
            <>
              <BaseSkeleton type="image" />
            </>
          ) : (
            <img src={SecImgs} alt="an image of me" />
          )}
        </section>
      </section>
      <section className="mission-section-socials">
        <h5>Follow me on:</h5>
        <ul>
          {loadingheader ? (
            <>
              <BaseSkeleton type="title" />
              <BaseSkeleton type="title" />
              <BaseSkeleton type="title" />
              <BaseSkeleton type="title" />
            </>
          ) : (
            <>
              <li className="linkedin">
                <a
                  href="https://www.linkedin.com/in/alpha-augustine/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin
                </a>
              </li>
              <li className="Twitter">
                <a
                  href="https://twitter.com/August13200296"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="Facebook">
                <a
                  href="https://www.facebook.com/augustine.emeka.1253"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="Instagram">
                <a
                  href="https://www.instagram.com/10_binary/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Mission;
