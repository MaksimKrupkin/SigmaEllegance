import React from 'react';
import styles from './Styles.module.css';
import style1 from '../../assets/img/style-1';
import style2 from '../../assets/img/style-2';
import style3 from '../../assets/img/style-3';
import style4 from '../../assets/img/style-4';
import style5 from '../../assets/img/style-5';

export default function Styles() {
  return (
    <section className={styles.styles_section}>
      <h2 className={styles.title}>Выбери свой стиль</h2>
      <div className={styles.styles_wrapper}>
        <div className={styles.topLine}>
          <a>
            <div className={styles.style1}>Элит</div>
          </a>
          <a>
            <div className={styles.style2}>Перфоманс</div>
          </a>
        </div>
        <div className={styles.bottomLine}>
          <a>
            <div className={styles.style3}>Темный</div>
          </a>
          <a>
            <div className={styles.style4}>Нью-Лук</div>
          </a>
          <a>
            <div className={styles.style5}>Классик</div>
          </a>
        </div>
      </div>
    </section>
  );
}
