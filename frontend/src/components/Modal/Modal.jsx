import React from 'react';
import styles from '../Modal/Modal.module.css';
import ContactForm from '../ContactForm/ContactForm'
import { useModal } from '../../providers/modaleProvider';

export default function Modal() {
  const { isModalOpen, closeModal } = useModal();

  // Si isModalOpen est false, ne rien rendre
  if (!isModalOpen) return null;

  return (
    <div className={styles.contact_modal_layout} onClick={closeModal}>
      <div className={styles.contact_modal}>
        <div className={styles.close_modal}>
          <p>Fermer</p>
        </div>
        <div className={styles.contact_modal_content} onClick={(e) => e.stopPropagation()}>
          <h2>Contactez-moi</h2>
          <div className={styles.contact_modal_content}>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
}
