import { useState, useEffect } from "react";
import "./App.css";

// Components
import Navbar from "./components/Nav/navbar.jsx";
import Herosec from "./components/Hero/hero.jsx";
import About from "./components/About/about.jsx";
import OpeningHero from "./components/Opening/opening.jsx";
import SkillSection from "./components/Skill/skill.jsx";
import Project from "./components/Project/project.jsx";
import Cta from "./components/Cta/cta.jsx";
import Footer from "./components/Footer/footer.jsx";

// Lenis
import Lenis from "@studio-freight/lenis";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // === INITIALIZE LENIS ===
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      {!isLoaded && (
        <OpeningHero onFinish={() => setIsLoaded(true)} duration={3500} />
      )}

      {isLoaded && (
        <>
          <Navbar />
          <Herosec />
          <About />
          <SkillSection />
          <Project />
          <Cta />
         <Footer />
        </>
      )}
    </>
  );
}

export default App;
