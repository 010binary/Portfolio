import { Logo } from "../Icons";

const NarBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="My Logo" />
      </div>
      <div className="navlinks">
        <li className="navlist routes">
          <a href="#" className="navlist__items">
            About
          </a>
        </li>
        <li className="navlist routes">
          <a href="#" className="navlist__items">
            Skills
          </a>
        </li>
        <li className="navlist routes">
          <a href="#" className="navlist__items">
            Project
          </a>
        </li>
        <li className="navlist routes">
          <a href="#" className="navlist__items">
            Contact
          </a>
        </li>
      </div>
      <div className="navbtn">
        <div className="btn resume navbtn__resume">Resume</div>
      </div>
    </nav>
  );
};

export default NarBar;
