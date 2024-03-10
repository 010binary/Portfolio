import "./App.scss";
import NarBar from "./components/navbar/NarBar";
import Project from "./components/projects/Project";
import Skills from "./components/skill/Skills";

function App() {
  return (
    <div>
      <NarBar/>
      <Project />
      <Skills />
    </div>
  );
}

export default App;
