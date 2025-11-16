import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const footerLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "videos", label: "Videos" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>
              Brúcar<span className="highlight">Translations</span>
            </h3>
            <p>Conectando idiomas, construyendo puentes</p>
          </div>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="footer-link"
                type="button"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Brúcar Translations. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
