import React from 'react';
import styles from '../Header/Header.module.css';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../providers/modaleProvider';

export default function Header() {
  const { openModal } = useModal();

  return (
    <header className={styles.header}>
      <div className={styles.header_title}>
        <NavLink to="/">Benjamin Vallon</NavLink>
      </div>

      <nav className={styles.header_nav}>
        <NavLink className={({ isActive }) => isActive ? styles.header_nav_active : ""} to="/">Portfolio</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.header_nav_active : ""} to="/about">À propos</NavLink>
      </nav>

      <div className={styles.header_contact} onClick={openModal}>
        <div className={styles.header_contact_txt}>
          <p>Contact</p>
        </div>
        <div className={styles.header_contact_img}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M14.9997 25.625H8.74969C4.99969 25.625 2.49969 23.75 2.49969 19.375V10.625C2.49969 6.25 4.99969 4.375 8.74969 4.375H21.2497C24.9997 4.375 27.4997 6.25 27.4997 10.625V14.375" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.2503 11.25L17.3378 14.375C16.0503 15.4 13.9378 15.4 12.6503 14.375L8.75031 11.25" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.0125 18.4626L19.5875 22.8876C19.4125 23.0626 19.25 23.3876 19.2125 23.6251L18.975 25.3126C18.8875 25.9251 19.3125 26.3501 19.925 26.2626L21.6125 26.0251C21.85 25.9876 22.1875 25.8251 22.35 25.6501L26.775 21.2251C27.5375 20.4626 27.9 19.5751 26.775 18.4501C25.6625 17.3376 24.775 17.7001 24.0125 18.4626Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.3753 19.1001C23.7503 20.4501 24.8003 21.5001 26.1503 21.8751" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </header>
  );
}
