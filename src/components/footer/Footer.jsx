import "./Footer.scss";
import {
  GithubFooter,
  TwitterFooter,
  LinkedinFooter,
  InstagramFooter,
} from "../Icons";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="footer__text">
          <p>&#169; 2024. All Rights Reserved &#8755;</p>
        </div>
        <div className="footer__icon">
          <a href="#">
            <img
              src={GithubFooter}
              alt="my github profile"
              className="github"
            />
          </a>
          <a href="#">
            <img
              src={TwitterFooter}
              alt="my twitter profile"
              className="twitter"
            />
          </a>
          <a href="#">
            <img
              src={LinkedinFooter}
              alt="my linkedin profile"
              className="linkedin"
            />
          </a>
          <a href="#">
            <img
              src={InstagramFooter}
              alt="my instagram profile"
              className="instagram"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
