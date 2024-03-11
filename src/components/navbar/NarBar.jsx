import { Logo, Download } from "../Icons";
import { NavLink } from "react-router-dom";
import "./NarBar.scss";

const NarBar = () => {
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
        <div className="btn resume navbtn__resume">
          Resume <img src={Download} alt="Download svg" />
        </div>
      </div>
    </nav>
  );
};

export default NarBar;
