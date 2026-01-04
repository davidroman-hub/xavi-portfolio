import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-document">
      <h1>{t("legal.privacy.title", "Política de Privacidad")}</h1>
      <p className="last-updated">
        {t("legal.lastUpdated", "Última actualización")}: {t("legal.privacy.date", "4 de enero de 2026")}
      </p>

      <section>
        <h2>{t("legal.privacy.section1.title", "1. Información General")}</h2>
        <p>
          {t(
            "legal.privacy.section1.content1",
            "BrucarTranslations, con domicilio en Barcelona, España, es responsable del tratamiento de los datos personales que nos proporcione. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información personal cuando utiliza nuestros servicios de traducción, interpretación y clases de idiomas."
          )}
        </p>
        <p>
          {t(
            "legal.privacy.section1.content2",
            "Nos comprometemos a proteger su privacidad y cumplir con el Reglamento General de Protección de Datos (RGPD) y la legislación española aplicable en materia de protección de datos."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.privacy.section2.title", "2. Datos que Recopilamos")}</h2>
        <h3>{t("legal.privacy.section2.subtitle1", "2.1 Información de Contacto")}</h3>
        <p>{t("legal.privacy.section2.content1", "Recopilamos la siguiente información cuando solicita nuestros servicios:")}</p>
        <ul>
          <li>{t("legal.privacy.section2.item1", "Nombre y apellidos")}</li>
          <li>{t("legal.privacy.section2.item2", "Dirección de correo electrónico")}</li>
          <li>{t("legal.privacy.section2.item3", "Número de teléfono")}</li>
          <li>{t("legal.privacy.section2.item4", "Empresa u organización (si aplica)")}</li>
          <li>{t("legal.privacy.section2.item5", "Dirección postal (cuando sea necesario para la facturación o envío de documentos)")}</li>
        </ul>

        <h3>{t("legal.privacy.section2.subtitle2", "2.2 Información del Proyecto")}</h3>
        <ul>
          <li>{t("legal.privacy.section2.item6", "Documentos y archivos proporcionados para traducción")}</li>
          <li>{t("legal.privacy.section2.item7", "Detalles del servicio solicitado")}</li>
          <li>{t("legal.privacy.section2.item8", "Preferencias lingüísticas y requisitos específicos")}</li>
        </ul>

        <h3>{t("legal.privacy.section2.subtitle3", "2.3 Información Técnica")}</h3>
        <ul>
          <li>{t("legal.privacy.section2.item9", "Dirección IP")}</li>
          <li>{t("legal.privacy.section2.item10", "Tipo de navegador y dispositivo")}</li>
          <li>{t("legal.privacy.section2.item11", "Páginas visitadas en nuestro sitio web")}</li>
          <li>{t("legal.privacy.section2.item12", "Cookies y tecnologías similares")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("legal.privacy.section3.title", "3. Uso de la Información")}</h2>
        <p>{t("legal.privacy.section3.content", "Utilizamos su información personal para:")}</p>
        <ul>
          <li>{t("legal.privacy.section3.item1", "Proporcionar los servicios de traducción, interpretación y clases de idiomas solicitados")}</li>
          <li>{t("legal.privacy.section3.item2", "Comunicarnos con usted sobre su proyecto o consulta")}</li>
          <li>{t("legal.privacy.section3.item3", "Procesar pagos y emitir facturas")}</li>
          <li>{t("legal.privacy.section3.item4", "Mejorar nuestros servicios y experiencia del cliente")}</li>
          <li>{t("legal.privacy.section3.item5", "Cumplir con obligaciones legales y regulatorias")}</li>
          <li>{t("legal.privacy.section3.item6", "Enviar comunicaciones relacionadas con nuestros servicios (con su consentimiento)")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("legal.privacy.section4.title", "4. Base Legal para el Tratamiento")}</h2>
        <p>{t("legal.privacy.section4.content", "Procesamos sus datos personales en base a:")}</p>
        <ul>
          <li>{t("legal.privacy.section4.item1", "Ejecución de un contrato: necesario para prestar los servicios que ha solicitado")}</li>
          <li>{t("legal.privacy.section4.item2", "Consentimiento: cuando ha aceptado expresamente el tratamiento de sus datos")}</li>
          <li>{t("legal.privacy.section4.item3", "Interés legítimo: para mejorar nuestros servicios y comunicarnos con clientes potenciales")}</li>
          <li>{t("legal.privacy.section4.item4", "Cumplimiento legal: cuando la ley nos obliga a retener cierta información")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("legal.privacy.section5.title", "5. Compartir Información")}</h2>
        <p>{t("legal.privacy.section5.content1", "No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información con:")}</p>
        <ul>
          <li>{t("legal.privacy.section5.item1", "Proveedores de servicios: que nos ayudan a operar nuestro negocio (ej. plataformas de pago, servicios de hosting)")}</li>
          <li>{t("legal.privacy.section5.item2", "Colaboradores profesionales: cuando sea necesario para completar un proyecto (con su consentimiento)")}</li>
          <li>{t("legal.privacy.section5.item3", "Autoridades legales: cuando sea requerido por ley o para proteger nuestros derechos")}</li>
        </ul>
        <p>{t("legal.privacy.section5.content2", "Todos los terceros con los que compartimos información están obligados a mantener la confidencialidad y cumplir con las leyes de protección de datos.")}</p>
      </section>

      <section>
        <h2>{t("legal.privacy.section6.title", "6. Seguridad de los Datos")}</h2>
        <p>
          {t(
            "legal.privacy.section6.content",
            "Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye el uso de cifrado SSL, almacenamiento seguro y acceso restringido a la información personal."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.privacy.section7.title", "7. Retención de Datos")}</h2>
        <p>
          {t(
            "legal.privacy.section7.content",
            "Conservamos sus datos personales solo durante el tiempo necesario para cumplir con los fines para los que fueron recopilados, incluido el cumplimiento de requisitos legales, contables o de informes. Los documentos de proyectos completados se conservan durante un período de 5 años, de acuerdo con las obligaciones fiscales españolas."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.privacy.section8.title", "8. Sus Derechos")}</h2>
        <p>{t("legal.privacy.section8.content", "Bajo el RGPD, usted tiene derecho a:")}</p>
        <ul>
          <li>{t("legal.privacy.section8.item1", "Acceder a sus datos personales")}</li>
          <li>{t("legal.privacy.section8.item2", "Rectificar datos inexactos o incompletos")}</li>
          <li>{t("legal.privacy.section8.item3", "Solicitar la eliminación de sus datos")}</li>
          <li>{t("legal.privacy.section8.item4", "Limitar el tratamiento de sus datos")}</li>
          <li>{t("legal.privacy.section8.item5", "Oponerse al tratamiento de sus datos")}</li>
          <li>{t("legal.privacy.section8.item6", "Portabilidad de sus datos")}</li>
          <li>{t("legal.privacy.section8.item7", "Retirar su consentimiento en cualquier momento")}</li>
          <li>{t("legal.privacy.section8.item8", "Presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD)")}</li>
        </ul>
        <p>
          {t(
            "legal.privacy.section8.footer",
            "Para ejercer estos derechos, contáctenos en info@brucartranslations.com"
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.privacy.section9.title", "9. Cookies")}</h2>
        <p>
          {t(
            "legal.privacy.section9.content",
            "Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.privacy.section10.title", "10. Transferencias Internacionales")}</h2>
        <p>
          {t(
            "legal.privacy.section10.content",
            "Si sus datos se transfieren fuera del Espacio Económico Europeo (EEE), nos aseguraremos de que existan garantías adecuadas de protección de datos, como cláusulas contractuales estándar aprobadas por la Comisión Europea."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.privacy.section11.title", "11. Cambios en esta Política")}</h2>
        <p>
          {t(
            "legal.privacy.section11.content",
            "Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cualquier cambio significativo publicando la nueva política en nuestro sitio web y actualizando la fecha de \"última actualización\"."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.privacy.section12.title", "12. Contacto")}</h2>
        <p>{t("legal.privacy.section12.content", "Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos sus datos personales, contáctenos:")}</p>
        <div className="contact-info">
          <p><strong>BrucarTranslations</strong></p>
          <p>{t("legal.privacy.section12.email", "Email")}: info@brucartranslations.com</p>
          <p>{t("legal.privacy.section12.phone", "Teléfono")}: (+34) 699 96 05 81</p>
          <p>{t("legal.privacy.section12.location", "Ubicación")}: Barcelona, España</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
