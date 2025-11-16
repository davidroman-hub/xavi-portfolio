const About = () => {
  const credentials = [
    {
      id: "education",
      icon: "🎓",
      title: "Licenciatura en Traducción",
      subtitle: "Universidad Complutense de Madrid",
    },
    {
      id: "certification",
      icon: "📜",
      title: "Traductor Jurado",
      subtitle: "Ministerio de Asuntos Exteriores",
    },
    {
      id: "specialization",
      icon: "🌍",
      title: "Especialización en Localización",
      subtitle: "Certificación Internacional",
    },
  ];

  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-image">
            <div className="image-placeholder">
              <div className="profile-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="experience-badge">
              <span className="badge-number">10+</span>
              <span className="badge-text">Años de Experiencia</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-badge">Sobre Mí</span>
            <h2 className="section-title">
              Pasión por la comunicación sin barreras
            </h2>
            <p className="about-text">
              Soy un traductor profesional certificado con más de 10 años de
              experiencia ayudando a empresas y particulares a comunicarse
              efectivamente a través de diferentes idiomas y culturas.
            </p>
            <p className="about-text">
              Mi enfoque va más allá de la simple traducción de palabras: me
              especializo en transmitir el mensaje, el tono y la intención
              original, asegurando que tu contenido resuene con la audiencia
              objetivo.
            </p>

            <div className="credentials">
              {credentials.map((credential) => (
                <div key={credential.id} className="credential">
                  <div className="credential-icon">{credential.icon}</div>
                  <div className="credential-info">
                    <h4>{credential.title}</h4>
                    <p>{credential.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
