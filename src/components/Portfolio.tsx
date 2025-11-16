import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: "tech-manual",
      category: "Tecnología",
      title: "Manual Técnico - Software Enterprise",
      description:
        "Traducción y localización de documentación técnica para empresa de software líder en Europa.",
      languages: ["ES → EN", "ES → DE"],
    },
    {
      id: "marketing-campaign",
      category: "Marketing",
      title: "Campaña Publicitaria Global",
      description:
        "Adaptación creativa de campaña de marketing para marca de moda internacional.",
      languages: ["EN → ES", "EN → FR"],
    },
    {
      id: "legal-contracts",
      category: "Legal",
      title: "Contratos Internacionales",
      description:
        "Traducción certificada de contratos y documentación legal para fusión empresarial.",
      languages: ["DE → ES", "EN → ES"],
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">Proyectos destacados</h2>
          <p className="section-description">
            Una muestra de los trabajos de traducción que he realizado para
            diferentes sectores
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{item.category}</span>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio-languages">
                  {item.languages.map((language, index) => (
                    <span
                      key={`${item.id}-lang-${index}`}
                      className="language-tag"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
