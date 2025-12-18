import React from "react";

import "./App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Testimonials from "./components/Testimonials";
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
      <Services />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
