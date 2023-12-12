import React from 'react';
import styles from './Collections.module.css';

export default function Collections() {
  return (
    <section className={styles.collections_section}>
      <h2 className={styles.title}>Новые коллекции</h2>
      <div className={styles.collections_wrapper}>
        <div className={styles.collections_top}>
          <a className={styles.link_wrapper}>
            <div className={styles.collection1}>
              <p className={styles.subtitle}>New era —New Rules New life & emotions</p>
              <a className={styles.button}>Смотреть</a>
              <div className={styles.rightPart}></div>
            </div>
          </a>
          <div className={styles.collection2}></div>
        </div>
        <div className={styles.collections_bottom}></div>
      </div>
    </section>
  );
}
