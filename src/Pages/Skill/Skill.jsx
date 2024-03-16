import NavBar from "../../components/navbar/NarBar";
import Skills from "../../components/skill/Skills";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import "./Skill.scss";
import { useEffect, useState } from "react";
import BaseSkeleton from "../../components/skeleton/BaseSkeleton";

const Skill = () => {
  const [loadingtext, setLoadingtext] = useState(true);
  // Simulating image loading delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingtext(false);
    }, 500);
    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div id="skills-page">
      <NavBar />
      <section className="skills-page-header container">
        {loadingtext ? (
          <BaseSkeleton type="title" />
        ) : (
          <h3>
            My
            <span className="blue-text"> Skills</span>
          </h3>
        )}
      </section>
      <Skills numberOfSkills={28} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Skill;
