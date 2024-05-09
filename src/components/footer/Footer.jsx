import "./Footer.scss";
import {
  GithubFooter,
  TwitterFooter,
  LinkedinFooter,
  InstagramFooter,
} from "../Icons";

const Footer = () => {
  return (
      <footer>
        <div className="footer__text">
          <p>&#169; 2024. All Rights Reserved &#8755;</p>
        </div>
        <div className="footer__icon">
          <a href="https://github.com/010binary/">
            <img
              src={GithubFooter}
              alt="my github profile"
              className="github"
            />
          </a>
          <a href="https://twitter.com/August13200296">
            <img
              src={TwitterFooter}
              alt="my twitter profile"
              className="twitter"
            />
          </a>
          <a href="https://www.linkedin.com/in/alpha-augustine/">
            <img
              src={LinkedinFooter}
              alt="my linkedin profile"
              className="linkedin"
            />
          </a>
          <a href="https://www.instagram.com/10_binary/">
            <img
              src={InstagramFooter}
              alt="my instagram profile"
              className="instagram"
            />
          </a>
        </div>
      </footer>
  );
};

export default Footer;
