import React from 'react';
import styles from '../Tag/Tag.module.css'


export default function Tag({ tag }) {
  return (
    <div className={styles.tag}>
      <p>{tag}</p>
    </div>
  )
}
