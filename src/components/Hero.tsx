import React from "react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ Traductor Profesional Certificado</span>
          </div>
          <h1 className="hero-title">
            Conectando idiomas,
            <span className="gradient-text">construyendo puentes</span>
          </h1>
          <p className="hero-description">
            Servicios de traducción profesional de alta calidad que preservan el
            significado, el tono y la intención de tu mensaje original.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("contacto")}
            >
              Solicitar Cotización
              <span className="btn-icon">→</span>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("portfolio")}
            >
              Ver Trabajos
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Idiomas</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Satisfacción</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-flag">🇪🇸</div>
            <div className="card-text">Español</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-flag">🇬🇧</div>
            <div className="card-text">English</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-flag">🇫🇷</div>
            <div className="card-text">Français</div>
          </div>
          <div className="floating-card card-4">
            <div className="card-flag">🇩🇪</div>
            <div className="card-text">Deutsch</div>
          </div>
          <div className="hero-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
