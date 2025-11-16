import React from "react";

const Videos = () => {
  const videos = [
    {
      id: "presentation",
      embedId: "dQw4w9WgXcQ", // Reemplaza con el ID real del video
      title: "Mi Presentación Profesional",
      description:
        "Conoce mi experiencia, metodología de trabajo y los valores que guían mis servicios de traducción.",
      duration: "3:45 min",
      category: "Presentación",
    },
    {
      id: "process",
      embedId: "dQw4w9WgXcQ", // Reemplaza con el ID real del video
      title: "Mi Proceso de Traducción",
      description:
        "Descubre paso a paso cómo trabajo cada proyecto para garantizar la máxima calidad y precisión.",
      duration: "5:20 min",
      category: "Metodología",
    },
    {
      id: "testimonials",
      embedId: "dQw4w9WgXcQ", // Reemplaza con el ID real del video
      title: "Testimonios de Clientes",
      description:
        "Escucha las experiencias de empresas y particulares que han confiado en mis servicios.",
      duration: "4:15 min",
      category: "Testimonios",
    },
  ];

  const PlayButton = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );

  return (
    <section id="videos" className="videos">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Videos</span>
          <h2 className="section-title">Conoce mi trabajo</h2>
          <p className="section-description">
            Descubre mi enfoque profesional y metodología de trabajo a través de
            estos videos de presentación
          </p>
        </div>

        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: "none" }}
                />
                <div className="video-overlay">
                  <div className="play-button">
                    <PlayButton />
                  </div>
                </div>
              </div>
              <div className="video-content">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <div className="video-meta">
                  <span className="video-duration">{video.duration}</span>
                  <span className="video-category">{video.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
