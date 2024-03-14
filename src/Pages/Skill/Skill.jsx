import NavBar from "../../components/navbar/NarBar";
import Skills from "../../components/skill/Skills";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import "./Skill.scss";

const Skill = () => {
  return (
    <div id="skills-page">
      <NavBar />
      <section className="skills-page-header container">
        <h3>
          My
          <span className="blue-text"> Skills</span>
        </h3>
      </section>
      <Skills numberOfSkills={28} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Skill;
