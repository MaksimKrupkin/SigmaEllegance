import React from 'react';
import styles from './Styles.module.css';

export default function Styles() {
  return (
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
  );
}
