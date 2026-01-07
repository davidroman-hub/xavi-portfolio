import React, { FC } from "react";
import { ComponenteParams } from "../App";
import flag from "../assets/catala.png";
import { ES, GB, FR, PT, SA } from 'country-flag-icons/react/3x2';

const Hero: FC<ComponenteParams> = ({ t }) => {
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
            <span>✨ {t("hero.translator")}</span>
          </div>

          <div className="hero-title">
            <span
              className="gradient-text rebel"
              style={{ marginBottom: "-2px" }}
            >
              Your tongue, your vehicle to the world
            </span>
            <span className="gradient-text">
              Tu lengua, tu vehículo hacia el mundo
            </span>
            <span className="gradient-text">
              Ta langue, ton véhicule vers le monde
            </span>
            <span className="gradient-text">
              Sua língua, seu veículo para o mundo
            </span>
            <span className="gradient-text">
              La teva llengua, el teu vehicle cap al món
            </span>
            <span className="gradient-text">لسانك هو عبارتك الى العالم</span>
          </div>
          <p className="hero-description">{t("hero.services")}</p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("contacto")}
            >
              {t("hero.quotes")}
              <span className="btn-icon">→</span>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("clients")}
            >
              {t("hero.clients")}
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                border: "1px solid #1D4CA6",
                color: "#333",
              }}
              className="btn btn-secondary about-us"
              onClick={() => scrollToSection("video-presentation")}
            >
              {t("hero.about_us")}
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">{t("hero.projects")}</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">{t("hero.satisfaction")}</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-flag">
              <ES className="flag-icon-hero" />
            </div>
            <div className="card-text">Español</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-flag">
              <GB className="flag-icon-hero" />
            </div>
            <div className="card-text">English</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-flag">
              <FR className="flag-icon-hero" />
            </div>
            <div className="card-text">Français</div>
          </div>
          <div className="floating-card card-4">
            <div className="card-flag">
              <PT className="flag-icon-hero" />
            </div>
            <div className="card-text">Português</div>
          </div>
          <div className="floating-card card-5">
            <div className="card-flag">
              <SA className="flag-icon-hero" />
            </div>
            <div className="card-text">العَرَبِيَّة</div>
          </div>
          <div className="floating-card card-5">
            <div className="card-flag">
              <SA className="flag-icon-hero" />
            </div>
            <div className="card-text">العَرَبِيَّة</div>
          </div>

          <div className="floating-card card-6">
            <div className="card-flag">
              <img className="flag-icon-hero" src={flag} alt="Català" />
            </div>
            <div className="card-text">Català</div>
          </div>

          <div className="floating-card card-7">
            <div className="card-flag">🌐</div>
            <div className="card-text">{t("hero.others")}</div>
          </div>

          <div className="hero-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
