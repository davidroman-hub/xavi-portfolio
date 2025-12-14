import React from "react";
import { useTranslation } from "react-i18next";

import XaviInwork from "../assets/xavi.png";

const Services = () => {
  const { t } = useTranslation();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
      title: t("services.documents.title", "Traducción de Documentos"),
      description: t(
        "services.documents.description",
        "Contratos, certificados, manuales técnicos y documentación oficial con precisión absoluta."
      ),
      features: [
        t("services.documents.features.0", "Certificación oficial"),
        t("services.documents.features.1", "Formato original preservado"),
        t("services.documents.features.2", "Revisión incluida"),
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
      title: t("services.webMarketing.title", "Traducción Web & Marketing"),
      description: t(
        "services.webMarketing.description",
        "Sitios web, campañas publicitarias y contenido de marketing que conecta con tu audiencia global."
      ),
      features: [
        t("services.webMarketing.features.0", "SEO optimizado"),
        t("services.webMarketing.features.1", "Adaptación cultural"),
        t("services.webMarketing.features.2", "Copywriting creativo"),
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
      title: t("services.interpretation.title", "Interpretación"),
      description: t(
        "services.interpretation.description",
        "Servicios de interpretación profesional para diferentes modalidades y necesidades de comunicación."
      ),
      features: [
        t("services.interpretation.features.0", "4 modalidades disponibles"),
        t("services.interpretation.features.1", "Equipamiento incluido"),
        t("services.interpretation.features.2", "Cobertura multilingüe"),
      ],
      featured: false,
      interpretationModes: [
        {
          id: "simultaneous",
          icon: "🎧",
          name: t(
            "services.interpretation.modes.simultaneous.name",
            "Simultánea"
          ),
          description: t(
            "services.interpretation.modes.simultaneous.description",
            "Ideal para reuniones y conferencias con gran audiencia. Requiere equipo técnico, incluye cabinas de interpretación, consolas correspondientes, y sistemas de sonido, así como auriculares para los oyentes."
          ),
          pros: [
            t(
              "services.interpretation.modes.simultaneous.pros.0",
              "Servicio rápido y fluido"
            ),
          ],
          cons: [
            t(
              "services.interpretation.modes.simultaneous.cons.0",
              "Alto costo y necesita infraestructura"
            ),
          ],
          languages: [
            "Catalán",
            "Español",
            "Inglés",
            "Francés",
            "Portugués",
            "Otros idiomas bajo petición",
          ],
        },
        {
          id: "consecutive",
          icon: "📝",
          name: t(
            "services.interpretation.modes.consecutive.name",
            "Consecutiva"
          ),
          description: t(
            "services.interpretation.modes.consecutive.description",
            "En este modo, no se necesitan cabinas ni infraestructura. El intérprete toma notas durante el discurso y luego transmite el mensaje al oyente en el idioma de destino."
          ),
          pros: [
            t(
              "services.interpretation.modes.consecutive.pros.0",
              "No requiere infraestructura, menor costo"
            ),
          ],
          cons: [
            t(
              "services.interpretation.modes.consecutive.cons.0",
              "Comunicación más lenta comparada con interpretación simultánea"
            ),
          ],
          languages: [
            "Catalán",
            "Español",
            "Inglés",
            "Francés",
            "Portugués",
            "Otros idiomas bajo petición",
          ],
        },
        {
          id: "liaison",
          icon: "🔄",
          name: t(
            "services.interpretation.modes.liaison.name",
            "Enlace o Bilateral"
          ),
          description: t(
            "services.interpretation.modes.liaison.description",
            "En interpretación de enlace o bilateral, el intérprete interpretará entre dos partes activas. A diferencia de otros modos, el intérprete debe interpretar de un idioma al otro, en el modo bilateral se requiere que el intérprete sobresalga en expresarse en ambos idiomas."
          ),
          pros: [],
          cons: [],
          languages: [
            "Catalán",
            "Español",
            "Inglés",
            "Francés",
            "Portugués",
            "Otros idiomas bajo petición",
          ],
        },
        {
          id: "remote",
          icon: "💻",
          name: t(
            "services.interpretation.modes.remote.name",
            "Simultánea Remota"
          ),
          description: t(
            "services.interpretation.modes.remote.description",
            "Este modo ha ganado popularidad debido a la pandemia de COVID-19, que obligó a muchas reuniones a realizarse de forma remota. Implica interpretación simultánea realizada a través de plataformas de videollamada, como Zoom."
          ),
          pros: [
            t(
              "services.interpretation.modes.remote.pros.0",
              "Evita la necesidad de viajar e invertir en infraestructura"
            ),
          ],
          cons: [
            t(
              "services.interpretation.modes.remote.cons.0",
              "Posibles problemas técnicos o de conexión, menos confiable"
            ),
          ],
          languages: [
            "Catalán",
            "Español",
            "Inglés",
            "Francés",
            "Portugués",
            "Otros idiomas bajo petición",
          ],
        },
      ],
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
      title: t("services.localization.title", "Localización"),
      description: t(
        "services.localization.description",
        "Adaptación completa de software, aplicaciones y contenido digital para mercados específicos."
      ),
      features: [
        t("services.localization.features.0", "Software & Apps"),
        t("services.localization.features.1", "Videojuegos"),
        t("services.localization.features.2", "Adaptación cultural"),
      ],
      featured: false,
    },
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            {t("services.badge", "Servicios")}
          </span>
          <h2 className="section-title">
            {t(
              "services.title",
              "Soluciones de traducción para cada necesidad"
            )}
          </h2>
          <p className="section-description">
            {t(
              "services.description",
              "Ofrezco servicios especializados adaptados a diferentes sectores y tipos de contenido"
            )}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.featured ? "featured" : ""} ${
                service.title === "Interpretación" ? "interpretation-card" : ""
              }`}
            >
              {service.featured && (
                <div className="service-badge">
                  {t("services.mostPopular", "Más Popular")}
                </div>
              )}
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              {/* {service.title === t('services.interpretation.title', 'Interpretación') && (
                <button
                  className="interpretation-details-btn"
                  onClick={() =>
                    setSelectedInterpretation(
                      selectedInterpretation ? null : "open"
                    )
                  }
                >
                  {selectedInterpretation
                    ? t('services.interpretation.hideModes', 'Ocultar modalidades')
                    : t('services.interpretation.showModes', 'Ver modalidades disponibles')}
                </button>
              )} */}
            </div>
          ))}
        </div>

        {
          <div className="interpretation-modes-section">
            <div className="interpretation-header">
              <h3>
                {t(
                  "services.interpretation.modesTitle",
                  "Modalidades de Interpretación Disponibles"
                )}
              </h3>
              <p>
                {t(
                  "services.interpretation.modesSubtitle",
                  "Elige el modo que mejor se adapte a tus necesidades"
                )}
              </p>
              <div className="services-image">
                <img src={XaviInwork} alt="Xavier Brucart trabajando" />
              </div>
            </div>
            <div className="interpretation-modes-grid">
              {services
                .find(
                  (s) =>
                    s.title ===
                    t("services.interpretation.title", "Interpretación")
                )
                ?.interpretationModes?.map((mode, index) => (
                  <div
                    key={mode.id}
                    className={`service-card interpretation-mode-card`}
                  >
                    <div className="service-icon interpretation-mode-icon">
                      {mode.icon}
                    </div>
                    <h3>{mode.name}</h3>
                    <p>{mode.description}</p>

                    <ul className="service-features-2">
                      {mode.pros.map((pro, proIndex) => (
                        <li key={`pro-${proIndex}`}>✅ {pro}</li>
                      ))}
                      {mode.cons.map((con, conIndex) => (
                        <li key={`con-${conIndex}`}>⚠️ {con}</li>
                      ))}
                    </ul>

                    <div className="interpretation-languages">
                      <strong>
                        {t("services.interpretation.languages", "Idiomas")}:
                      </strong>{" "}
                      {mode.languages.slice(0, 3).join(", ")}
                      {mode.languages.length > 3 &&
                        ` +${mode.languages.length - 3} más`}
                    </div>

                    <button onClick={() => {
                      scrollToSection("contacto");
                    }} className="get-quote-btn">
                      {t("services.requestQuote", "Solicitar Cotización")}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default Services;
