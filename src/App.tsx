import React from "react";

import "./App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Videos from "./components/Videos";
import { useTranslation } from "react-i18next";
import VideoPresentation from "./components/VideoPesentation";
import AcademicTraining from "./components/AcademicTraining";

export type ComponenteParams = {
  t: (key: string) => string;
};

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Navbar />
      <Hero t={t} />
      <VideoPresentation t={t} />
      <AcademicTraining t={t} />
      {/* <Services /> */}
      {/* <About />
      <Videos />
      <Portfolio />
      <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
