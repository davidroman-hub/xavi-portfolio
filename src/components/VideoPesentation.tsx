import React, { FC, useEffect, useState } from "react";
import "./VideoPresentation.css";
import { ComponenteParams } from "../App";
import flag from "../assets/catala.png";
import i18next from "i18next";
import { ES, GB, FR, SA } from 'country-flag-icons/react/3x2';

const VideoPresentation: FC<ComponenteParams> = ({ t }) => {
  const currentLocale = i18next.language;
  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLocale || "es"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const availableLanguages = [
    { code: "es", name: "Español", Flag: ES, videoId: "c9Vy1Sso4xc" },
    { code: "en", name: "English", Flag: GB, videoId: "tZ8n5v_FDHI" },
    { code: "fr", name: "Français", Flag: FR, videoId: "1AM1RSyAsnk" },
    {
      code: "cat",
      name: "Català",
      Flag: null,
      img: flag,
      videoId: "CdtqidHecK8",
    },
    { code: "ar", name: "العربية", Flag: SA, videoId: "HdyVWB8eDZI" },
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
    <section id="video-presentation" className="video-presentation">
      <div className="container">
        <div className="video-presentation-header">
          <div className="section-badge">🎬 {t("meet.video")}</div>
          <h2 className="section-title-2">
            {t("meet.title1.1")}
          </h2>
          <h2 className="section-title">
            {t("meet.title")}{" "}
            <span className="gradient-text">{t("meet.title2")}</span>
          </h2>
          <p className="section-description">{t("meet.description")}</p>
           <p className="section-description">{t("meet.desc_2")}</p>
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
                {(() => {
                  const currentLang = getCurrentLanguage();
                  const FlagComponent = currentLang.Flag;
                  return FlagComponent !== null ? (
                    <FlagComponent className="flag-icon" />
                  ) : (
                    <img
                      className="flag-icon"
                      src={currentLang.img}
                      alt={currentLang.name}
                    />
                  );
                })()}
                <span className="text">{t("meet.watch")}</span>
              </span>
              <span className="chevron">{isDropdownOpen ? "▲" : "▼"}</span>
            </button>

            {isDropdownOpen && (
              <div className="language-dropdown-menu">
                {availableLanguages.map((language) => {
                  const FlagComponent = language.Flag;
                  return (
                    <button
                      key={language.code}
                      className={`language-option ${
                        language.code === selectedLanguage ? "active" : ""
                      }`}
                      onClick={() => handleLanguageChange(language.code)}
                    >
                      <span className="flag">
                        {FlagComponent ? (
                          <FlagComponent className="flag-icon-small" />
                        ) : (
                          <img
                            className="flag-icon-small"
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
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPresentation;
