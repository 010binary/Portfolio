import "./App.scss";
import React from "react";
import Home from "./Pages/Home/Home";
import Abouts from "./Pages/About/Abouts";
import Contacts from "./Pages/Contacts/Contacts";
import Projects from "./Pages/Projects/Projects";
import Skill from "./Pages/Skill/Skill";
import ScrollToTop from "./components/scroll/Scroll";
import { Routes, Route } from "react-router-dom";
import SkeletonArticle from "./components/skeleton/SkeletonArticle";
const LazyProjectDetail = React.lazy(() =>
  import("./Pages/ProjectDetail/ProjectDetail")
);
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="entry">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<Abouts />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="project" element={<Projects />} />
        <Route
          path="project/details/:projectId"
          element={
            <React.Suspense
              fallback={
                <div className="container">
                  <SkeletonArticle numberOfLines={30} />
                </div>
              }
            >
              <LazyProjectDetail />
            </React.Suspense>
          }
        />
        <Route path="skills" element={<Skill />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
