import React, { useState } from "react";
import "./VideoPresentation.css";

const VideoPresentation = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const availableLanguages = [
    { code: "es", name: "Español", flag: "🇪🇸", videoId: "jdgL8jnWUpE" },
    { code: "en", name: "English", flag: "🇺🇸", videoId: "dQw4w9WgXcQ" },
    { code: "fr", name: "Français", flag: "🇫🇷", videoId: "dQw4w9WgXcQ" },
    { code: "de", name: "Deutsch", flag: "🇩🇪", videoId: "dQw4w9WgXcQ" },
    { code: "pt", name: "Português", flag: "🇵🇹", videoId: "dQw4w9WgXcQ" },
    { code: "ar", name: "العربية", flag: "🇸🇦", videoId: "dQw4w9WgXcQ" },
  ];

  const getCurrentLanguage = () => {
    return (
      availableLanguages.find((lang) => lang.code === selectedLanguage) ||
      availableLanguages[0]
    );
  };

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsDropdownOpen(false);
  };

  return (
    <section className="video-presentation">
      <div className="container">
        <div className="video-presentation-header">
          <div className="section-badge">🎬 Video Presentación</div>
          <h2 className="section-title">
            Conozca a Xavier Brucart, el corazón y la mente detrás de{" "}
            <span className="gradient-text">BrucarTranslations</span>
          </h2>
          <p className="section-description">
            Descubre la pasión, experiencia y dedicación que hay detrás de cada
            traducción. Una mirada personal al profesional que transformará tus
            palabras.
          </p>
        </div>

        <div className="video-card">
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                getCurrentLanguage().videoId
              }`}
              title={`Presentation Xavi Brucart - ${getCurrentLanguage().name}`}
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="video-controls">
          <div className="language-selector">
            <button
              className="language-selector-btn"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="current-language">
                <span className="flag">{getCurrentLanguage().flag}</span>
                <span className="text">Ver presentación en otro idioma</span>
              </span>
              <span className="chevron">{isDropdownOpen ? "▲" : "▼"}</span>
            </button>

            {isDropdownOpen && (
              <div className="language-dropdown-menu">
                {availableLanguages.map((language) => (
                  <button
                    key={language.code}
                    className={`language-option ${
                      language.code === selectedLanguage ? "active" : ""
                    }`}
                    onClick={() => handleLanguageChange(language.code)}
                  >
                    <span className="flag">{language.flag}</span>
                    <span className="name">{language.name}</span>
                    {language.code === selectedLanguage && (
                      <span className="check">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPresentation;
