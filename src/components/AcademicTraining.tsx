import React from "react";
import { useTranslation } from "react-i18next";
import DCU from "../assets/dcu.png";
import LAGUNA from "../assets/laguna.png";
import EMCI from "../assets/emci.png";
import UAB from "../assets/uab.png";
import professionalPhoto from "../assets/me.png";
import meInWork from "../assets/me_in_work.png";

import "./AcademicTraining.css";
import { ComponenteParams } from "../App";

interface AcademicItem {
  id: string;
  institution: string;
  logo: string;
  degree: string;
  period: string;
  location: string;
  description: string;
}

const AcademicTraining: React.FC<ComponenteParams> = () => {
  const { t } = useTranslation();

  const academicData: AcademicItem[] = [
    {
      id: "uab",
      institution: "Universitat Autònoma de Barcelona",
      logo: UAB,
      degree: t("academic.uab.degree"),
      period: t("academic.uab.period"),
      location: t("academic.uab.location"),
      description: t("academic.uab.description"),
    },
    {
      id: "dcu",
      institution: "Dublin City University",
      logo: DCU,
      degree: t("academic.dcu.degree"),
      period: t("academic.dcu.period"),
      location: t("academic.dcu.location"),
      description: t("academic.dcu.description"),
    },
    {
      id: "emci",
      institution: "EMCI Business School",
      logo: EMCI,
      degree: t("academic.emci.degree"),
      period: t("academic.emci.period"),
      location: t("academic.emci.location"),
      description: t("academic.emci.description"),
    },

    {
      id: "laguna",
      institution: "Universidad de La Laguna",
      logo: LAGUNA,
      degree: t("academic.laguna.degree"),
      period: t("academic.laguna.period"),
      location: t("academic.laguna.location"),
      description: t("academic.laguna.description"),
    },
  ];

  return (
    <section id="academic-training" className="academic-training">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t("academic.badge")}</span>
          <h2 className="section-title">{t("academic.title")}</h2>
          <p className="section-description">{t("academic.description")}</p>
        </div>

        <div className="academic-container">
          <div className="academic-timeline">
            <div className="timeline-line"></div>
            {academicData.map((item, index) => (
              <div
                key={item.id}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-marker">
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="institution-logo"
                  />
                </div>
                <div className="timeline-content">
                  <div className="academic-card">
                    <div className="card-header">
                      <h3 className="degree-title">{item.degree}</h3>
                      <div className="institution-info">
                        <h4 className="institution-name">{item.institution}</h4>
                        <span className="location">{item.location}</span>
                        <span className="period">{item.period}</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="professional-profile">
          <div className="profile-header">
            <h3 className="section-title-2">{t("academic.profile.title")}</h3>
            <p className="profile-description">
              {t("academic.profile.description")}
            </p>
          </div>

          <div className="profile-content">
            <div className="profile-image">
              <img
                src={professionalPhoto}
                alt={t("academic.profile.professional")}
              />
            </div>

            <div className="profile-info">
              <div className="info-card">
                <h4>{t("academic.profile.experience.title")}</h4>
                <p>{t("academic.profile.experience.description")}</p>
              </div>

              <div className="info-card">
                <h4>{t("academic.profile.specialization.title")}</h4>
                <p>{t("academic.profile.specialization.description")}</p>
              </div>

              <div className="info-card">
                <h4>{t("academic.profile.approach.title")}</h4>
                <p>{t("academic.profile.approach.description")}</p>
              </div>

              <div className="workplace-preview">
                <img src={meInWork} alt={t("academic.profile.workplace")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicTraining;
