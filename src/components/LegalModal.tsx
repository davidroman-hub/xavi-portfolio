import React from "react";
import "../styles/legal-modal.css";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="legal-modal-overlay" onClick={handleBackdropClick}>
      <div className="legal-modal-content">
        <button className="legal-modal-close" onClick={onClose} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="legal-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
