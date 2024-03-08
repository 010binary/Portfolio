import NavBar from "../../components/navbar/NarBar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Skills from "../../components/skill/Skills";
import Project from "../../components/projects/Project";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
