import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import LanguageDropdown from "./LanguageDropdown";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeMenu();
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src={logo}
            alt="Logo"
            onClick={() => scrollToSection("inicio")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#inicio"
              className="nav-link"
              onClick={() => scrollToSection("inicio")}
            >
              {t("nav.home")}
            </a>
          </li>
          <li>
            <a
              href="#sobre-mi"
              className="nav-link"
              onClick={() => scrollToSection("sobre-mi")}
            >
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="nav-link"
              onClick={() => scrollToSection("servicios")}
            >
              {t("nav.services")}
            </a>
          </li>

          <li>
            <a
              href="#videos"
              className="nav-link"
              onClick={() => scrollToSection("videos")}
            >
              {t("nav.videos")}
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="nav-link"
              onClick={() => scrollToSection("portfolio")}
            >
              {t("nav.portfolio")}
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="nav-link btn-contact"
              onClick={() => scrollToSection("contacto")}
            >
              {t("nav.contact")}
            </a>
          </li>
        </ul>
        <LanguageDropdown />
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
