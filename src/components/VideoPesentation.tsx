import React, { FC, useEffect, useState } from "react";
import "./VideoPresentation.css";
import { ComponenteParams } from "../App";
import flag from "../assets/catalan.png";
import i18next from "i18next";

const VideoPresentation: FC<ComponenteParams> = ({ t }) => {
  const currentLocale = i18next.language;
  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale || "es"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const availableLanguages = [
    { code: "es", name: "Español", flag: "🇪🇸", videoId: "c9Vy1Sso4xc" },
    { code: "en", name: "English", flag: "🇬🇧", videoId: "tZ8n5v_FDHI" },
    { code: "fr", name: "Français", flag: "🇫🇷", videoId: "1AM1RSyAsnk" },
    {
      code: "cat",
      name: "Català",
      flag: null,
      img: flag,
      videoId: "CdtqidHecK8",
    },
    { code: "ar", name: "العربية", flag: "🇸🇦", videoId: "HdyVWB8eDZI" },
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

  useEffect(() => {
    setSelectedLanguage(currentLocale || "en");
  }, [currentLocale]);

  return (
    <section className="video-presentation">
      <div className="container">
        <div className="video-presentation-header">
          <div className="section-badge">🎬 {t("meet.video")}</div>
          <h2 className="section-title">
            {t("meet.title")}{" "}
            <span className="gradient-text">{t("meet.title2")}</span>
          </h2>
          <p className="section-description">{t("meet.description")}</p>
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
                {getCurrentLanguage().flag !== null ? (
                  <span className="flag">{getCurrentLanguage().flag}</span>
                ) : (
                  <img
                    width={20}
                    src={getCurrentLanguage().img}
                    alt={getCurrentLanguage().name}
                  />
                )}
                <span className="text">{t("meet.watch")}</span>
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
                    <span className="flag">
                      {language.flag ? (
                        language.flag
                      ) : (
                        <img
                          width={20}
                          src={language.img}
                          alt={language.name}
                        />
                      )}
                    </span>
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
