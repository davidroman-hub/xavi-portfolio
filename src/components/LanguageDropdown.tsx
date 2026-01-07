import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ES, GB } from 'country-flag-icons/react/3x2';

const LanguageDropdown: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', Flag: ES },
    { code: 'en', name: 'English', Flag: GB }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  const CurrentFlag = currentLanguage.Flag;

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-dropdown">
      <button
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Language selector"
      >
        <CurrentFlag className="flag-icon" />
        <span className="chevron">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="language-menu">
          {languages.map((language) => {
            const FlagComponent = language.Flag;
            return (
              <button
                key={language.code}
                className={`language-option ${
                  language.code === i18n.language ? 'active' : ''
                }`}
                onClick={() => handleLanguageChange(language.code)}
              >
                <FlagComponent className="flag-icon-small" />
                <span className="name">{language.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
