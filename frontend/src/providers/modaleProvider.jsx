import React, { createContext, useContext, useState } from 'react';

// Création du Context
const ModalContext = createContext();

// Création du Provider
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir la modale
  const openModal = () => setIsModalOpen(true);

  // Fonction pour fermer la modale
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useModal = () => useContext(ModalContext);
