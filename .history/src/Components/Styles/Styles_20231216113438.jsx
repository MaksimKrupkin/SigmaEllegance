import React from 'react';
import styles from './Styles.module.css';
import { Link } from 'react-router-dom';

export default function Styles() {
  return (
    <section className={styles.styles_section}>
      <h2 className={styles.title}>Выбери свой стиль</h2>
      <div className={styles.styles_wrapper}>
        <div className={styles.topLine}>
          <Link to="/goodspage/elit">
            <div className={styles.style1}>
              <span className={styles.subtitle}>Элит</span>
            </div>
          </Link>
          <Link to="/goodspage/perfomance">
            <div className={styles.style2}>
              <span className={styles.subtitle}>Перфоманс</span>
            </div>
          </Link>
        </div>
        <div className={styles.bottomLine}>
          <Link to="/goodspage/dark">
            <div className={styles.style3}>
              <span className={styles.subtitle}>Темный</span>
            </div>
          </Link>
          <Link to="/goodspage/newlook">
            <div className={styles.style4}>
              <span className={styles.subtitle}>Нью-лук</span>
            </div>
          </Link>
          <Link to="/goodspage/classic">
            <div className={styles.style5}>
              <span className={styles.subtitle}>Классик</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
