import NavBar from "../../components/navbar/NarBar";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div id="Contact__page">
      <NavBar />
      <Contact />
      <Footer />
    </div>
  );
};

export default Contacts;
