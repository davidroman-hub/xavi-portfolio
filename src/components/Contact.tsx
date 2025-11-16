import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const contactMethods = [
    {
      id: "email",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email",
      info: "contacto@brucartranslations.com",
    },
    {
      id: "phone",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Teléfono",
      info: "+34 600 123 456",
    },
    {
      id: "location",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
        </svg>
      ),
      title: "Ubicación",
      info: "Madrid, España",
    },
  ];

  const serviceOptions = [
    { value: "", label: "Selecciona un servicio" },
    { value: "traduccion-documentos", label: "Traducción de Documentos" },
    { value: "traduccion-web", label: "Traducción Web & Marketing" },
    { value: "interpretacion", label: "Interpretación" },
    { value: "localizacion", label: "Localización" },
    { value: "otro", label: "Otro" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert("¡Gracias por tu mensaje! Te contactaré pronto.");

    // Reset form
    setFormData({
      nombre: "",
      email: "",
      servicio: "",
      mensaje: "",
    });
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <span className="section-badge">Contacto</span>
            <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
            <p className="contact-description">
              Estoy aquí para ayudarte a comunicar tu mensaje al mundo. Contacta
              conmigo para discutir tu proyecto de traducción.
            </p>

            <div className="contact-methods">
              {contactMethods.map((method) => (
                <div key={method.id} className="contact-method">
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <h4>{method.title}</h4>
                    <p>{method.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="servicio">Tipo de servicio</label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Describe tu proyecto</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto de traducción..."
                  value={formData.mensaje}
                  onChange={handleChange as any}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Enviar Mensaje
                <span className="btn-icon">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
