import React from 'react'
import styles from '../Career/Career.module.css'

export default function Career({item}) {
  return (
    <div>
        <div className={styles.career_item}>
            <div className={styles.career_date}>
                <div className={styles.career_date_spacer}></div>
                <div className={styles.career_date_content}>
                    <p>{item.start}</p>
                    <p><span className={styles.career_date_content_spacer}></span></p>
                    <p>{item.finish}</p>
                </div>
            </div>

            <div className={styles.career_dot}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" fill="white" stroke="#FF9A61" strokeWidth="4" />
                </svg>
            </div>

            <div className={styles.career_details}>
                <div className={styles.career_details_content}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
                <div className={styles.career_detail_spacer}></div>
            </div>
        </div>
    </div>
  )
}
