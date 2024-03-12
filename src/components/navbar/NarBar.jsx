import { Logo, Download } from "../Icons";
import { NavLink } from "react-router-dom";
import "./NarBar.scss";
import { useRef, useEffect } from "react";

const NarBar = () => {
  
  const downloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1-sgzJU7omKHt4MW1yRfx3BXUJPvAbrXE/view?usp=drive_link";
    window.open(resumeUrl, "_blank"); // Open in a new tab
  };


  const navbarRef = useRef(null); // Create a ref to access the navbar element
  let prevScrollpos = window.pageYOffset;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const { current } = navbarRef; // Get the navbar element

      if (prevScrollpos > currentScrollPos) {
        current.style.top = "0";
      } else {
        current.style.top = "-100px";
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, []); // Empty dependency array to run only once

  return (
    <nav className="container" ref={navbarRef}>
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
