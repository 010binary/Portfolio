import { SecImgs, AboutmeImg } from "../Photos";
import "./Mission.scss";

const Mission = () => {
  return (
    <div className="container mission-section">
      <h5>
        About <span className="blue-text">Me</span>
      </h5>
      <section className="mission-section-texts">
        <p className="right-side">
          My <span className="blue-text">mission</span> is to make design
          easier.
        </p>
        <p className="left-side">
          Create custom Designs with AARONN that converts more visitors than any
          website. With lots of unique design, you can easily select a logo
          without hassle. Create custom landing logos with AARONN that converts
          more visitors than any website. With lots of revisions, you can easily
          build a logo without porbolem build a logo without porbolem build a
          logo without porbolem.
        </p>
      </section>
      <section className="mission-section-imgs">
        <section className="right-img">
          <img src={AboutmeImg} alt="an image of me" />
        </section>
        <section className="left-img">
          <img src={SecImgs} alt="an image of me" />
        </section>
      </section>
      <section className="mission-section-socials">
        <h5>Follow me on:</h5>
        <ul>
          <li className="linkedin">
            <a href="https://www.linkedin.com/in/alpha-augustine/">linkedin</a>
          </li>
          <li className="Twitter">
            <a href="https://twitter.com/August13200296">Twitter</a>
          </li>
          <li className="Facebook">
            <a href="https://www.facebook.com/augustine.emeka.1253">Facebook</a>
          </li>
          <li className="Instagram">
            <a href="https://www.instagram.com/10_binary/">Instagram</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Mission;
