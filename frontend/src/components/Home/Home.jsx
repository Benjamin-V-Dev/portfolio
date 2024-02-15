import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../Home/Home.module.css'
import projects from '../../utils/projects'
import Card from '../Card/Card'



export default function Home() {

  return (
    <>
      <Helmet>
        <title>À propos | Benjamin Vallon</title>
        <meta name="description" content="Bienvenue sur mon portfolio ! Je m'appelle Benjamin, je suis développeur web javascript" />

        <meta property="og:title" content="Benjamin Vallon - Développeur web" />
        <meta property="og:description" content="En savoir plus sur mon parcours de développeur web" />
        <meta property="og:image" content="/fav.png" />
        <meta property="og:url" content="https://benjamin-vallon.fr" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Benjamin Vallon - Développeur web" />
        <meta name="twitter:description" content="En savoir plus sur mon parcours de développeur web" />
        <meta name="twitter:image" content="/fav.png" />
        <meta name="twitter:card" content="À propos de Benjamin Vallon" />
      </Helmet >


      <section className={styles.headings}>
        <h1>Benjamin Vallon,<br /><span>Développeur Web</span></h1>

      </section>

      <section>
        <div className={styles.cards}>
          {projects.map((project) => (
            <Card project={project} key={project.id}/>
          ))}
        </div>
      </section>
    </>
  );
}
