
import React from 'react'
import styles from '../Card/Card.module.css'
import Tag from '../../components/Tag/Tag'
import { Link } from 'react-router-dom'

export default function Card({ project }) {

    return (
        <>
            <Link href={project.link} target='_blank' className={styles.card}>
                <div key={project.id} >
                    <div className={styles.imgContainer}>
                        <img
                            src={project.img}
                            alt={project.imgAlt}
                        /><img/>
                    </div>
                    <div className={styles.titles}>

                        <div>
                            <h2>{project.title}</h2>
                            <h3>{project.subtitle}</h3>
                        </div>

                        <div className={styles.github}>
                            <Link href="https://www.google.com" target='blank' className={styles.githubIcon}>
                                <i className="fa-brands fa-github githubIcon"></i>
                            </Link>
                        </div>

                    </div>

                    <div className={styles.tags}>
                        {project.tags.map((tag, index) => (
                            <Tag tag={tag} key={index} />
                        ))}
                    </div>

                </div>
            </Link>
        </>
    )
}
