# Modal de Política de Privacidad y Términos de Servicio

## Implementación completada

Se ha agregado un sistema completo de documentos legales para BrucarTranslations, incluyendo:

### Componentes Creados

1. **LegalModal.tsx** - Componente modal reutilizable que muestra contenido legal
2. **PrivacyPolicy.tsx** - Política de Privacidad completa y detallada
3. **TermsOfService.tsx** - Términos y Condiciones de Servicio completos

### Estilos

- **legal-modal.css** - Estilos responsive y accesibles para el modal y documentos legales

### Características

✅ **Modal Responsive**: Se adapta a todos los tamaños de pantalla
✅ **Accesible**: Implementado con mejores prácticas de accesibilidad
✅ **Multiidioma**: Soporte completo para español, inglés, francés y portugués
✅ **Animaciones suaves**: Transiciones elegantes al abrir/cerrar
✅ **Cierre fácil**: Click fuera del modal o botón de cerrar

### Integración

El modal está integrado en el componente **Footer.tsx** y se activa cuando se hace clic en:
- "Política de Privacidad"
- "Términos de Servicio"

### Contenido Legal

#### Política de Privacidad
Incluye 12 secciones detalladas sobre:
- Información general y cumplimiento RGPD
- Datos que se recopilan
- Uso de la información
- Base legal para el tratamiento
- Compartir información
- Seguridad de los datos
- Retención de datos
- Derechos del usuario (RGPD)
- Cookies
- Transferencias internacionales
- Cambios en la política
- Información de contacto

#### Términos de Servicio
Incluye 15 secciones detalladas sobre:
- Aceptación de términos
- Servicios ofrecidos (traducción, interpretación, localización, clases)
- Proceso de solicitud y presupuesto
- Tarifas y pagos
- Entrega de trabajos
- Responsabilidades del cliente
- Confidencialidad
- Propiedad intelectual
- Garantía de calidad
- Cancelaciones y reembolsos
- Limitación de responsabilidad
- Servicios de terceros
- Modificaciones de los términos
- Ley aplicable y jurisdicción
- Información de contacto

### Traducciones

Las traducciones se agregaron a los siguientes archivos:
- `src/locales/es/common.json` (Español)
- `src/locales/en/common.json` (Inglés)
- `src/locales/fr/common.json` (Francés)
- `src/locales/pt/common.json` (Portugués)

### Uso

Los usuarios pueden acceder a los documentos legales desde el footer del sitio web. Al hacer clic en cualquiera de los enlaces, se abrirá un modal elegante mostrando el contenido correspondiente en el idioma actual del sitio.

### Personalización

El contenido legal está diseñado específicamente para los servicios de BrucarTranslations:
- Traducción de documentos
- Traducción web y marketing
- Interpretación (simultánea, consecutiva, bilateral, remota)
- Localización de software y videojuegos
- Clases de idiomas

### Cumplimiento Legal

Los documentos cumplen con:
- RGPD (Reglamento General de Protección de Datos)
- Legislación española de protección de datos
- Normativas comerciales de España
- Mejores prácticas internacionales para servicios de traducción
