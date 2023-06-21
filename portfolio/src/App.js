import React, { useState, useEffect } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { BackGround } from "./components/BackGround";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router} from "react-router-dom";
import TagManager from 'react-gtm-module'


function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const tagManagerArgs = {
    gtmId: 'G-7EMQS641HB'
  }
  TagManager.initialize(tagManagerArgs)

  return (
    <Router>
      <div className="App">
        
        <BackGround mousePosition={mousePosition} />
        <NavBar />

        <Banner />

        <Skills />

        <Projects />

        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
