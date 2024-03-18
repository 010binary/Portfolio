import NavBar from "../../components/navbar/NarBar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Skills from "../../components/skill/Skills";
import Project from "../../components/projects/Project";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import "./Home.scss"

const Home = () => {
  return (
    <>
      <div id="home-page">
        <NavBar />
        <Hero />
        <About />
        <Skills numberOfSkills={8} />
        <Project projectsToShow={3} title={<h3>Featured Projects</h3>} />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
