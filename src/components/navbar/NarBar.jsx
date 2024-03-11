import { Logo, Download } from "../Icons";
import "./NarBar.scss";

const NarBar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={Logo} alt="My Logo" />
      </div>

      <ul className="navlinks">
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
      </ul>

      <div className="navbtn">
        <div className="btn resume navbtn__resume">
          Resume <img src={Download} alt="Download svg" />
        </div>
      </div>
    </nav>
  );
};

export default NarBar;
