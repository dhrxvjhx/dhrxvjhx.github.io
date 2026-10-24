
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Disciplines from "../components/Disciplines.jsx";
import AboutExperience from "../components/AboutExperience.jsx";
import Footer from "../components/Footer.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";
import ProjectDetail from "./ProjectDetail.jsx";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <main id="home">
      <Hero />
      <Disciplines />
      <AboutExperience />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
