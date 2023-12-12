import React from 'react';
import styles from './Styles.module.css';

export default function Styles() {
  return (
    <section className={styles.styles_section}>
      <h2 className={styles.title}>Выбери свой стиль</h2>
      <div className={styles.styles_wrapper}>
        <div className={styles.topLine}>
          <a>
            <div className={styles.style1}>
              <span className={styles.subtitle}>Элит</span>
            </div>
          </a>
          <a>
            <div className={styles.style2}>
              <span className={styles.subtitle}>Перфоманс</span>
            </div>
          </a>
        </div>
        <div className={styles.bottomLine}>
          <a>
            <div className={styles.style3}>
              <span className={styles.subtitle}>Темный</span>
            </div>
          </a>
          <a>
            <div className={styles.style4}>
              <span className={styles.subtitle}>Нью-лук</span>
            </div>
          </a>
          <a>
            <div className={styles.style5}>
              <span className={styles.subtitle}>Классик</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
