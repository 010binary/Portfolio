import { Logo, Download } from "../Icons";
import { NavLink } from "react-router-dom";
import "./NarBar.scss";

const NarBar = () => {
  const downloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1-sgzJU7omKHt4MW1yRfx3BXUJPvAbrXE/view?usp=drive_link";
    window.open(resumeUrl, "_blank"); // Open in a new tab
  };
  return (
    <nav className="container">
      <div className="logo">
        <NavLink to="/home">
          <img src={Logo} alt="My Logo" />
        </NavLink>
      </div>

      <ul className="navlinks">
        <li className="navlist routes">
          <NavLink to="/about" className="navlist__items">
            About
          </NavLink>
        </li>
        <li className="navlist routes">
          <NavLink to="/skills" className="navlist__items">
            Skills
          </NavLink>
        </li>
        <li className="navlist routes">
          <NavLink to="/project" className="navlist__items">
            Project
          </NavLink>
        </li>
        <li className="navlist routes">
          <NavLink to="/contact" className="navlist__items">
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="navbtn">
        <button className="btn resume navbtn__resume" onClick={downloadResume}>
          Resume <img src={Download} alt="Download symbol" />
        </button>
      </div>
    </nav>
  );
};

export default NarBar;
