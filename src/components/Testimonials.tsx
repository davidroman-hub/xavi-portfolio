import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/testimonials.css";

const Testimonials = () => {
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
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: t("testimonials.student1.role", "Estudiante de Traducción Legal"),
      image:
        "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8fDA%3D",
      rating: 5,
      text: t(
        "testimonials.student1.text",
        "Las clases de Xavier son excepcionales. Su experiencia práctica en el campo de la traducción legal me ha ayudado enormemente a entender los aspectos más complejos de esta especialización. Recomiendo sus clases al 100%."
      ),
      course: t("testimonials.student1.course", "Curso de Traducción Jurídica"),
    },
    {
      id: 2,
      name: "Carlos Martínez",
      role: t("testimonials.student2.role", "Estudiante de Interpretación"),
      image:
        "https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
      rating: 5,
      text: t(
        "testimonials.student2.text",
        "Xavier tiene una metodología única que combina teoría y práctica de manera perfecta. Sus técnicas de interpretación consecutiva y simultánea son muy efectivas. He mejorado significativamente mi nivel profesional."
      ),
      course: t(
        "testimonials.student2.course",
        "Curso de Interpretación Profesional"
      ),
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      role: t("testimonials.student3.role", "Estudiante de Traducción Médica"),
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg",
      rating: 5,
      text: t(
        "testimonials.student3.text",
        "Como médica que necesitaba especializarse en traducción médica, encontré en Xavier al profesor perfecto. Su conocimiento del sector y su paciencia para explicar terminología compleja son invaluables."
      ),
      course: t("testimonials.student3.course", "Curso de Traducción Médica"),
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`star ${index < rating ? "filled" : ""}`}
        viewBox="0 0 24 24"
        fill={index < rating ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h2>
            {t("testimonials.title", "Lo que dicen nuestros estudiantes")}
          </h2>
          <p>
            {t(
              "testimonials.subtitle",
              "Testimonios reales de estudiantes que han transformado su carrera profesional con nuestros cursos de traducción e interpretación."
            )}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* Quote Icon */}
              <div className="quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="rating">{renderStars(testimonial.rating)}</div>

              {/* Testimonial Text */}
              <p className="testimonial-text">"{testimonial.text}"</p>

              {/* Course Info */}
              <div className="course-info">
                <span className="course-badge">{testimonial.course}</span>
              </div>

              {/* Student Info */}
              <div className="student-info">
                <div className="student-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="student-details">
                  <h4 className="student-name">{testimonial.name}</h4>
                  <p className="student-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta">
          <h3>
            {t(
              "testimonials.cta.title",
              "¿Listo para comenzar tu transformación profesional?"
            )}
          </h3>
          <p>
            {t(
              "testimonials.cta.subtitle",
              "Únete a cientos de profesionales que han mejorado sus habilidades con nuestros cursos."
            )}
          </p>
          <button
            onClick={() => scrollToSection("contacto")}
            className="cta-button"
          >
            {t("services.requestQuote", "Solicita un presupuesto")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
