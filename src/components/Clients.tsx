import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/clients.css';

// Client logos imports
import ClaireLogo from "../assets/clients/Claires_logo.png";
import Embratur from "../assets/clients/embratur-logo-vector.png";
import FFPP from "../assets/clients/ffpp.png";
import Forvia from "../assets/clients/Forvia_logo.png";
import GSK from "../assets/clients/gsk.png";
import DBarcelona from "../assets/clients/DBarcelona.png";
import Mapfre from "../assets/clients/Mapfre.png";
import Structuralia from "../assets/clients/structuralia.avif";
import Tradumedia from "../assets/clients/tradumedia.png";
import Unicaja from "../assets/clients/Unicaja.png";
import WorldHealthHum from "../assets/clients/world_health.png";

const Clients: React.FC = () => {
  const { t } = useTranslation();
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clientProjects = [
    {
      id: "who",
      logo: WorldHealthHum,
      name: t('clients.projects.who.name', 'World Health Organization'),
      project: t('clients.projects.who.project', 'Simultaneous interpretation for Monkeypox Webinars'),
      description: t('clients.projects.who.description', 'We acted as interpreters at webinars about monkeypox organised by the World Health Organization (WHO). Our interpretation contributed to effective communication at global health events, ensuring accuracy and clarity in the transmission of critical information.'),
      services: [
        t('clients.projects.who.services.0', 'Simultaneous Interpretation'),
        t('clients.projects.who.services.1', 'Health Communications'),
        t('clients.projects.who.services.2', 'Global Events')
      ],
      year: "2023"
    },
    {
      id: "gsk",
      logo: GSK,
      name: t('clients.projects.gsk.name', 'GSK'),
      project: t('clients.projects.gsk.project', 'Interpretation at Corporate Events'),
      description: t('clients.projects.gsk.description', 'We provided interpretation at online events for GSK, aimed to strengthen disease advocacy and awareness. We facilitated effective interaction between participants from various regions. The main challenge in this project was to faithfully reflect the emotions of the speakers, who were telling their unpleasant experiences going through serious conditions, such as meningitis.'),
      services: [
        t('clients.projects.gsk.services.0', 'Corporate Events'),
        t('clients.projects.gsk.services.1', 'Health Advocacy'),
        t('clients.projects.gsk.services.2', 'Online Interpretation')
      ],
      year: "2023"
    },
    {
      id: "ffpp",
      logo: FFPP,
      name: t('clients.projects.ffpp.name', 'World Forum of Fisher Peoples'),
      project: t('clients.projects.ffpp.project', 'Interpretation at the World Forum of Fisher Peoples 2019'),
      description: t('clients.projects.ffpp.description', 'We participated as interpreters at the World Forum of Fisher Peoples in Sri Lanka 2019. Our interpretation facilitated dialogue among international delegates, promoting global cooperation and the exchange of knowledge among fishing communities worldwide.'),
      services: [
        t('clients.projects.ffpp.services.0', 'International Forums'),
        t('clients.projects.ffpp.services.1', 'Consecutive Interpretation'),
        t('clients.projects.ffpp.services.2', 'Cultural Exchange')
      ],
      year: "2019"
    },
    {
      id: "mapfre", 
      logo: Mapfre,
      name: t('clients.projects.mapfre.name', 'Mapfre'),
      project: t('clients.projects.mapfre.project', 'Interpretation at Corporate and Economic Events'),
      description: t('clients.projects.mapfre.description', 'We provided simultaneous interpretation services online for Mapfre\'s internal audit seminars. As one of the leading companies in the insurance and reinsurance sector in Spain and Europe, Mapfre\'s internal audit seminars featured highly technical discussions requiring precise and accurate interpretation. Our thorough preparation allowed us to navigate the complexity of financial and auditing terminology.'),
      services: [
        t('clients.projects.mapfre.services.0', 'Financial Services'),
        t('clients.projects.mapfre.services.1', 'Internal Audits'),
        t('clients.projects.mapfre.services.2', 'Technical Interpretation')
      ],
      year: "2022"
    },
    {
      id: "forvia",
      logo: Forvia, 
      name: t('clients.projects.forvia.name', 'Forvia'),
      project: t('clients.projects.forvia.project', 'Simultaneous Interpretation at Internal Meetings'),
      description: t('clients.projects.forvia.description', 'We offered interpretation at internal meetings between Spain and France for Forvia, supporting bilateral communication in a multinational business environment. Our work facilitated effective coordination between teams from different countries, contributing to the success of internal meetings.'),
      services: [
        t('clients.projects.forvia.services.0', 'Internal Meetings'),
        t('clients.projects.forvia.services.1', 'Bilateral Interpretation'),
        t('clients.projects.forvia.services.2', 'Corporate Communications')
      ],
      year: "2023"
    },
    {
      id: "embratur",
      logo: Embratur,
      name: t('clients.projects.embratur.name', 'Embratur - Brazil Tourism'),
      project: t('clients.projects.embratur.project', 'Interpretation for the Brazil Pavilion at Fitur Madrid 2024'),
      description: t('clients.projects.embratur.description', 'We provided consecutive interpretation at various cultural events organised at the Brazil Pavilion at Fitur Madrid 2024, such as caipirinha and Brazilian cuisine masterclasses. Our work helped promote Brazil\'s representation at this major international event, facilitating interaction with visitors and representatives from around the world.'),
      services: [
        t('clients.projects.embratur.services.0', 'Cultural Events'),
        t('clients.projects.embratur.services.1', 'Tourism Promotion'),
        t('clients.projects.embratur.services.2', 'Consecutive Interpretation')
      ],
      year: "2024"
    },
    {
      id: "unicaja",
      logo: Unicaja,
      name: t('clients.projects.unicaja.name', 'Unicaja Bank'),
      project: t('clients.projects.unicaja.project', 'Website Translation into Catalan'),
      description: t('clients.projects.unicaja.description', 'Unicaja, one of Spain\'s leading banks, sought to embrace the linguistic diversity of its clientele by ensuring its Catalan-speaking clients felt valued and understood. We undertook the complete translation of their website into Catalan, delivering precise and culturally appropriate financial content. This project was pivotal in enhancing accessibility and fostering stronger connections with their clients in Catalonia.'),
      services: [
        t('clients.projects.unicaja.services.0', 'Website Translation'),
        t('clients.projects.unicaja.services.1', 'Financial Content'),
        t('clients.projects.unicaja.services.2', 'Catalan Localization')
      ],
      year: "2023"
    },
    {
      id: "structuralia",
      logo: Structuralia,
      name: t('clients.projects.structuralia.name', 'Structuralia'),
      project: t('clients.projects.structuralia.project', 'Educational Platform Localization'),
      description: t('clients.projects.structuralia.description', 'We provided comprehensive translation and localization services for Structuralia, a leading online education platform specializing in construction, engineering, and architecture courses. Our work included translating technical content, course materials, and platform interface to ensure accessibility for international students.'),
      services: [
        t('clients.projects.structuralia.services.0', 'Technical Translation'),
        t('clients.projects.structuralia.services.1', 'E-learning Content'),
        t('clients.projects.structuralia.services.2', 'Platform Localization')
      ],
      year: "2022"
    },
    {
      id: "tradumedia",
      logo: Tradumedia,
      name: t('clients.projects.tradumedia.name', 'Tradumedia'),
      project: t('clients.projects.tradumedia.project', 'Translation Services Collaboration'),
      description: t('clients.projects.tradumedia.description', 'We established a strategic partnership with Tradumedia, providing specialized translation services for their diverse client portfolio. This collaboration allowed us to expand our reach while maintaining our high-quality standards in technical and specialized translations.'),
      services: [
        t('clients.projects.tradumedia.services.0', 'Partnership Services'),
        t('clients.projects.tradumedia.services.1', 'Technical Translation'),
        t('clients.projects.tradumedia.services.2', 'Quality Assurance')
      ],
      year: "2021"
    },
    {
      id: "claire",
      logo: ClaireLogo,
      name: t('clients.projects.claire.name', 'Claire\'s'),
      project: t('clients.projects.claire.project', 'Retail Content Translation'),
      description: t('clients.projects.claire.description', 'We provided translation services for Claire\'s retail operations, focusing on product descriptions, marketing materials, and customer communications. Our work helped Claire\'s expand their presence in Spanish-speaking markets while maintaining brand consistency.'),
      services: [
        t('clients.projects.claire.services.0', 'Retail Translation'),
        t('clients.projects.claire.services.1', 'Marketing Content'),
        t('clients.projects.claire.services.2', 'Brand Localization')
      ],
      year: "2022"
    },
    {
      id: "dbarcelona",
      logo: DBarcelona,
      name: t('clients.projects.dbarcelona.name', 'Diputació de Barcelona'),
      project: t('clients.projects.dbarcelona.project', 'Government Document Translation'),
      description: t('clients.projects.dbarcelona.description', 'We provided official translation services for the Diputació de Barcelona, handling administrative documents, public communications, and official correspondence. Our certified translations ensured compliance with legal requirements and facilitated communication between different linguistic communities.'),
      services: [
        t('clients.projects.dbarcelona.services.0', 'Official Translation'),
        t('clients.projects.dbarcelona.services.1', 'Government Documents'),
        t('clients.projects.dbarcelona.services.2', 'Certified Translation')
      ],
      year: "2021"
    }
  ];

  const openModal = (clientName: string) => {
    // Find by ID first (more reliable)
    const client = clientProjects.find(project => {
      // Try to match by ID based on client name
      if (clientName.toLowerCase().includes('world health')) return project.id === 'who';
      if (clientName.toLowerCase().includes('gsk')) return project.id === 'gsk';
      if (clientName.toLowerCase().includes('fisher')) return project.id === 'ffpp';
      if (clientName.toLowerCase().includes('mapfre')) return project.id === 'mapfre';
      if (clientName.toLowerCase().includes('forvia')) return project.id === 'forvia';
      if (clientName.toLowerCase().includes('embratur')) return project.id === 'embratur';
      if (clientName.toLowerCase().includes('unicaja')) return project.id === 'unicaja';
      if (clientName.toLowerCase().includes('structuralia')) return project.id === 'structuralia';
      if (clientName.toLowerCase().includes('tradumedia')) return project.id === 'tradumedia';
      if (clientName.toLowerCase().includes('claire')) return project.id === 'claire';
      if (clientName.toLowerCase().includes('barcelona') || clientName.toLowerCase().includes('diputació')) return project.id === 'dbarcelona';
      
      // Fallback to name matching
      const normalizedClientName = clientName.toLowerCase().replace(/\s+/g, ' ').trim();
      const normalizedProjectName = project.name.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalizedProjectName.includes(normalizedClientName) || normalizedClientName.includes(normalizedProjectName);
    });
    
    if (client) {
      setSelectedClient(client);
      setIsModalOpen(true);
    } else {
      console.log(`No project found for client: "${clientName}"`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  const allLogos = [
    { name: "World Health Organization", logo: WorldHealthHum },
    { name: "GSK", logo: GSK },
    { name: "World Forum of Fisher Peoples", logo: FFPP },
    { name: "Mapfre", logo: Mapfre },
    { name: "Forvia", logo: Forvia },
    { name: "Embratur - Brazil Tourism", logo: Embratur },
    { name: "Unicaja Bank", logo: Unicaja },
    { name: "Structuralia", logo: Structuralia },
    { name: "Tradumedia", logo: Tradumedia },
    { name: "Claire's", logo: ClaireLogo },
    { name: "Diputació de Barcelona", logo: DBarcelona }
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        {/* Header */}
        {/* <div className="clients-header">
          <h2>{t('clients.title', 'Our Clients & Projects')}</h2>
          <p>
            {t('clients.subtitle', 'This section showcases a list of clients with whom Brucart Translations has worked on significant projects. It details the type of work performed for each client, providing context on how our services have helped fulfill their specific objectives and needs. Projects include both translation and interpretation assignments.')}
          </p>
        </div> */}

        {/* Interactive Client Logos */}
        <div className="logos-showcase">
          <h3>{t('clients.trustedBy', 'Trusted by Leading Organizations')}</h3>
          <p className="logos-subtitle">{t('clients.clickToLearnMore', 'Click on any logo to learn more about our collaboration')}</p>
          <div className="logos-grid">
            {allLogos.map((client, index) => (
              <div 
                key={index} 
                className="logo-item clickable"
                onClick={() => openModal(client.name)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openModal(client.name);
                  }
                }}
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  title={`${client.name} - ${t('clients.clickToSeeProject', 'Click to see project details')}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="clients-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">{t('clients.stats.projects', 'Projects Completed')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">{t('clients.stats.clients', 'Satisfied Clients')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">{t('clients.stats.languages', 'Languages Covered')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">{t('clients.stats.years', 'Years Experience')}</span>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedClient && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="modal-body">
                <div className="modal-logo-container">
                  <img 
                    src={selectedClient.logo} 
                    alt={`${selectedClient.name} logo`}
                    className="modal-logo"
                  />
                </div>
                
                <div className="modal-info">
                  <h2>{selectedClient.project}</h2>
                  <h3 className="modal-company">{selectedClient.name}</h3>
                  <p className="modal-description">{selectedClient.description}</p>
                  
                  <div className="modal-services">
                    <h4>{t('clients.servicesProvided', 'Services Provided:')}</h4>
                    <div className="modal-service-tags">
                      {selectedClient.services.map((service: string, serviceIndex: number) => (
                        <span key={serviceIndex} className="modal-service-tag">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-year">
                    <span className="year-badge">{selectedClient.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;

