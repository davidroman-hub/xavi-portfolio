import React from "react";
import { useTranslation } from "react-i18next";

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-document">
      <h1>{t("legal.terms.title", "Términos y Condiciones de Servicio")}</h1>
      <p className="last-updated">
        {t("legal.lastUpdated", "Última actualización")}: {t("legal.terms.date", "4 de enero de 2026")}
      </p>

      <section>
        <h2>{t("legal.terms.section1.title", "1. Aceptación de los Términos")}</h2>
        <p>
          {t(
            "legal.terms.section1.content",
            "Al contratar los servicios de BrucarTranslations, usted acepta estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestros servicios. Estos términos se aplican a todos los servicios ofrecidos, incluyendo traducción de documentos, contenido web y marketing, interpretación, localización y clases de idiomas."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.terms.section2.title", "2. Servicios Ofrecidos")}</h2>
        <h3>{t("legal.terms.section2.subtitle1", "2.1 Traducción de Documentos")}</h3>
        <p>
          {t(
            "legal.terms.section2.content1",
            "Ofrecemos servicios de traducción profesional de documentos técnicos, legales, comerciales y certificados. Las traducciones juradas están certificadas y reconocidas oficialmente."
          )}
        </p>

        <h3>{t("legal.terms.section2.subtitle2", "2.2 Traducción de Contenido Web y Marketing")}</h3>
        <p>
          {t(
            "legal.terms.section2.content2",
            "Proporcionamos servicios de traducción y localización de sitios web, videojuegos, redes sociales, subtitulación y locución, optimizados para SEO y adaptados culturalmente."
          )}
        </p>

        <h3>{t("legal.terms.section2.subtitle3", "2.3 Interpretación")}</h3>
        <p>
          {t(
            "legal.terms.section2.content3",
            "Ofrecemos cuatro modalidades de interpretación: simultánea, consecutiva, bilateral (enlace) y remota. La modalidad apropiada dependerá de las necesidades del cliente y las características del evento."
          )}
        </p>

        <h3>{t("legal.terms.section2.subtitle4", "2.4 Localización")}</h3>
        <p>
          {t(
            "legal.terms.section2.content4",
            "Servicios de adaptación completa de software, aplicaciones y contenido digital para mercados específicos, incluyendo videojuegos."
          )}
        </p>

        <h3>{t("legal.terms.section2.subtitle5", "2.5 Clases de Idiomas")}</h3>
        <p>
          {t(
            "legal.terms.section2.content5",
            "Clases personalizadas de inglés, francés, catalán y otros idiomas, adaptadas al nivel y objetivos de cada alumno, disponibles de forma presencial u online."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.terms.section3.title", "3. Proceso de Solicitud y Presupuesto")}</h2>
        <ul>
          <li>{t("legal.terms.section3.item1", "Los presupuestos se proporcionan de forma gratuita y sin compromiso")}</li>
          <li>{t("legal.terms.section3.item2", "Los plazos de entrega se acordarán según la complejidad y volumen del proyecto")}</li>
          <li>{t("legal.terms.section3.item3", "El presupuesto es válido durante 30 días desde su emisión")}</li>
          <li>{t("legal.terms.section3.item4", "La aceptación del presupuesto constituye un acuerdo vinculante")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("legal.terms.section4.title", "4. Tarifas y Pagos")}</h2>
        <ul>
          <li>{t("legal.terms.section4.item1", "Las tarifas se calculan según la complejidad, idioma, volumen y urgencia del proyecto")}</li>
          <li>{t("legal.terms.section4.item2", "Los servicios de interpretación se facturan por horas o medias jornadas")}</li>
          <li>{t("legal.terms.section4.item3", "Las clases de idiomas se facturan según el paquete acordado")}</li>
          <li>{t("legal.terms.section4.item4", "El pago debe realizarse en un plazo de 15 días desde la emisión de la factura")}</li>
          <li>{t("legal.terms.section4.item5", "Para proyectos de gran volumen, puede solicitarse un anticipo del 50%")}</li>
          <li>{t("legal.terms.section4.item6", "Los pagos pueden realizarse mediante transferencia bancaria o métodos acordados")}</li>
          <li>{t("legal.terms.section4.item7", "Los pagos atrasados pueden estar sujetos a intereses de demora")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("legal.terms.section5.title", "5. Entrega de Trabajos")}</h2>
        <ul>
          <li>{t("legal.terms.section5.item1", "Los plazos de entrega se acordarán previamente y se comunicarán en el presupuesto")}</li>
          <li>{t("legal.terms.section5.item2", "Entregas urgentes pueden estar sujetas a tarifas adicionales")}</li>
          <li>{t("legal.terms.section5.item3", "Los trabajos se entregarán en el formato acordado (PDF, Word, etc.)")}</li>
          <li>{t("legal.terms.section5.item4", "Las revisiones menores están incluidas; modificaciones sustanciales pueden tener coste adicional")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("legal.terms.section6.title", "6. Responsabilidades del Cliente")}</h2>
        <ul>
          <li>{t("legal.terms.section6.item1", "Proporcionar documentos y materiales fuente legibles y completos")}</li>
          <li>{t("legal.terms.section6.item2", "Comunicar claramente requisitos, terminología específica y preferencias")}</li>
          <li>{t("legal.terms.section6.item3", "Responder a consultas del traductor/intérprete en tiempo razonable")}</li>
          <li>{t("legal.terms.section6.item4", "Para interpretación: proporcionar información sobre el evento, temas a tratar y materiales de apoyo")}</li>
          <li>{t("legal.terms.section6.item5", "Garantizar que posee los derechos necesarios sobre los materiales proporcionados")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("legal.terms.section7.title", "7. Confidencialidad")}</h2>
        <p>
          {t(
            "legal.terms.section7.content1",
            "BrucarTranslations se compromete a mantener la confidencialidad de todos los documentos, información y materiales proporcionados por el cliente. No compartiremos, distribuiremos ni divulgaremos ninguna información a terceros sin su consentimiento expreso, excepto cuando sea requerido por ley."
          )}
        </p>
        <p>
          {t(
            "legal.terms.section7.content2",
            "Todos los traductores, intérpretes y colaboradores están sujetos a acuerdos de confidencialidad. Los documentos del cliente se almacenan de forma segura y se eliminan después del período de retención legal."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.terms.section8.title", "8. Propiedad Intelectual")}</h2>
        <ul>
          <li>{t("legal.terms.section8.item1", "El cliente retiene todos los derechos sobre el contenido original")}</li>
          <li>{t("legal.terms.section8.item2", "Una vez completado el pago, el cliente adquiere todos los derechos sobre la traducción")}</li>
          <li>{t("legal.terms.section8.item3", "BrucarTranslations se reserva el derecho de incluir el proyecto en su portfolio (previo consentimiento del cliente)")}</li>
          <li>{t("legal.terms.section8.item4", "No se permite el uso de nuestras traducciones para entrenar modelos de IA sin autorización")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("legal.terms.section9.title", "9. Garantía de Calidad")}</h2>
        <p>
          {t(
            "legal.terms.section9.content",
            "Nos comprometemos a proporcionar servicios de alta calidad. Todas las traducciones incluyen revisión. Si encuentra errores o problemas de calidad, notifíquenos dentro de los 7 días siguientes a la entrega para que podamos corregirlos sin coste adicional. Nuestra responsabilidad se limita a la corrección del trabajo o, en su defecto, al reembolso de las tarifas pagadas por ese proyecto específico."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.terms.section10.title", "10. Cancelaciones y Reembolsos")}</h2>
        <h3>{t("legal.terms.section10.subtitle1", "10.1 Cancelación por el Cliente")}</h3>
        <ul>
          <li>{t("legal.terms.section10.item1", "Cancelación antes del inicio: sin cargo")}</li>
          <li>{t("legal.terms.section10.item2", "Cancelación con trabajo iniciado: se facturará el trabajo realizado")}</li>
          <li>{t("legal.terms.section10.item3", "Cancelación de interpretación: con menos de 48h de antelación se factura el 50%; con menos de 24h se factura el 100%")}</li>
        </ul>

        <h3>{t("legal.terms.section10.subtitle2", "10.2 Cancelación por BrucarTranslations")}</h3>
        <p>
          {t(
            "legal.terms.section10.content",
            "Nos reservamos el derecho de rechazar o cancelar un proyecto si: el contenido es ilegal, ofensivo o viola derechos de terceros; el cliente no proporciona información necesaria; o existen circunstancias imprevistas que impiden la realización del servicio."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.terms.section11.title", "11. Limitación de Responsabilidad")}</h2>
        <p>
          {t(
            "legal.terms.section11.content",
            "BrucarTranslations no será responsable de daños indirectos, incidentales, especiales o consecuentes derivados del uso de nuestros servicios. Nuestra responsabilidad total no excederá el monto pagado por el servicio específico en cuestión. No somos responsables de retrasos causados por el cliente, problemas técnicos fuera de nuestro control, o eventos de fuerza mayor."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.terms.section12.title", "12. Servicios de Terceros")}</h2>
        <p>
          {t(
            "legal.terms.section12.content",
            "En ocasiones, podemos colaborar con traductores, intérpretes o especialistas externos para completar proyectos. Todos los colaboradores están sujetos a los mismos estándares de calidad y confidencialidad que aplicamos internamente."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.terms.section13.title", "13. Modificaciones de los Términos")}</h2>
        <p>
          {t(
            "legal.terms.section13.content",
            "Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor tras su publicación en nuestro sitio web. Le recomendamos revisar periódicamente estos términos."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.terms.section14.title", "14. Ley Aplicable y Jurisdicción")}</h2>
        <p>
          {t(
            "legal.terms.section14.content",
            "Estos Términos se rigen por las leyes de España. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Barcelona, España."
          )}
        </p>
      </section>

      <section>
        <h2>{t("legal.terms.section15.title", "15. Contacto")}</h2>
        <p>{t("legal.terms.section15.content", "Para preguntas sobre estos Términos y Condiciones, contáctenos:")}</p>
        <div className="contact-info">
          <p><strong>BrucarTranslations</strong></p>
          <p>{t("legal.terms.section15.email", "Email")}: info@brucartranslations.com</p>
          <p>{t("legal.terms.section15.phone", "Teléfono")}: (+34) 699 96 05 81</p>
          <p>{t("legal.terms.section15.location", "Ubicación")}: Barcelona, España</p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
