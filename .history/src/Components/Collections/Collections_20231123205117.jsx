import React from 'react';
import styles from './Collections.module.css';

export default function Collections() {
  return (
    <section className={styles.collections_section}>
      <h2 className={styles.title}>Новые коллекции</h2>
      <div className={styles.collections_wrapper}>
        <div className={collections_top}>
          <a>
            <div className={collection1}>
              <div className={styles.leftPart}>
                <p>New era —New Rules New life &emotions</p>
                <a className={styles.button}>Смотреть</a>
              </div>
              <div className={styles.rightPart}></div>
            </div>
          </a>
        </div>
        <div className={collections_bottom}></div>
      </div>
    </section>
  );
}
