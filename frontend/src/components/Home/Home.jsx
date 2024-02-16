import React from 'react';
import styles from '../Home/Home.module.css'
import projects from '../../utils/projects'
import Card from '../Card/Card'



export default function Home() {

  return (
    <>
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
