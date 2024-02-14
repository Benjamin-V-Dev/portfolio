
import React from 'react';
import styles from '../About/About.module.css'
import Tag from '../Tag/Tag'
import Career from "../Career/Career"

import skills from '../../utils/skills'
import career from "../../utils/career"


export default function AboutPage() {


    return (
        <>
            <section className={styles.about_hero}>

                <div className={styles.about_hero_img}>
                    <div>
                        <img
                            src="/photo.png"
                            alt="ma photo"
                            layout="fill"
                        />
                    </div>
                </div>
                <div className={styles.about_hero_headings}>
                    <h2>À propos</h2>
                    <h1>Benjamin Vallon</h1>
                    <p>En reconversion depuis avril 2022 dans le but de devenir développeur web. J’ai oeuvré à la digitalisation de mon ancienne entreprise et j’ai développé un réel intérêt pour le monde du digital, ce changement de domaine professionnel est donc pour moi la suite logique de ma carrière.</p>
                </div>
            </section>

            <section className={styles.about_skills}>
                <h2>Compétences</h2>
                <div className={styles.about_skills_layout}>
                    {skills.map((skill, index) => (
                        <Tag tag={skill} key={index} />
                    ))}
                </div>
            </section>

            <section className={styles.about_career}>
                <h2>Parcours</h2>
                <div className={styles.about_career_layout}>
                <div className={styles.about_career_line}></div>
                    {career.map((item, index) => (
                        <Career item={item} key={index} />
                    ))}
                </div>

            </section>

            <a href="/CV.pdf" download="CV_Benjamin_Vallon" className={styles.cv}>
                <img src="/CV.png" alt="Télécharger le CV de Benjamin Vallon" />
                <p>CV</p>
            </a>
            
        </>
    )
}