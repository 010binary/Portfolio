import NavBar from "../../components/navbar/NarBar";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Mission from "../../components/mission/Mission";
import "./Abouts.scss";

const Abouts = () => {
  return (
    <div id="about-page">
      <NavBar />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
};

export default Abouts;
