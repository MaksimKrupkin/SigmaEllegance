import React from 'react';
import styles from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.top_part}>
        <h2 className={styles.tytle}>Контакты</h2>
        <div className={styles.paragraphs}>
          <div className={styles.item}></div>
        </div>
      </div>
      <div className={styles.bottom_part}>
        <h2 className={styles.tytle}>Реквизиты</h2>
      </div>
    </div>
  );
}
