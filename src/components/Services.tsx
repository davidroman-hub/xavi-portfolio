import React from "react";

const Services = () => {
  const services = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      ),
      title: "Traducción de Documentos",
      description:
        "Contratos, certificados, manuales técnicos y documentación oficial con precisión absoluta.",
      features: [
        "Certificación oficial",
        "Formato original preservado",
        "Revisión incluida",
      ],
      featured: false,
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Traducción Web & Marketing",
      description:
        "Sitios web, campañas publicitarias y contenido de marketing que conecta con tu audiencia global.",
      features: [
        "SEO optimizado",
        "Adaptación cultural",
        "Copywriting creativo",
      ],
      featured: true,
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Interpretación",
      description:
        "Servicios de interpretación simultánea y consecutiva para eventos, reuniones y conferencias.",
      features: [
        "Interpretación simultánea",
        "Eventos corporativos",
        "Reuniones online",
      ],
      featured: false,
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      title: "Localización",
      description:
        "Adaptación completa de software, aplicaciones y contenido digital para mercados específicos.",
      features: ["Software & Apps", "Videojuegos", "Adaptación cultural"],
      featured: false,
    },
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Servicios</span>
          <h2 className="section-title">
            Soluciones de traducción para cada necesidad
          </h2>
          <p className="section-description">
            Ofrezco servicios especializados adaptados a diferentes sectores y
            tipos de contenido
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.featured ? "featured" : ""}`}
            >
              {service.featured && (
                <div className="service-badge">Más Popular</div>
              )}
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
