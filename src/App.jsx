import "./App.scss";
import Home from "./Pages/Home/Home";
import Abouts from "./Pages/About/Abouts";
import Contacts from "./Pages/Contacts/Contacts";
import Projects from "./Pages/Projects/Projects";
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail";
import Skill from "./Pages/Skill/Skill";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<Abouts />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="project" element={<Projects />} />
        <Route path="project/details" element={<ProjectDetail />} />
        <Route path="skills" element={<Skill />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
