import React from 'react';
import mainScreenImage from '../../assets/img/background.png';
import styles from './MainScreen.module.css';
import { Link } from 'react-router-dom';

export default function MainScreen() {
  return (
    <div className={styles.mainScreen}>
      <div className={styles.textBlock}>
        <div className={styles.title}>Мужская классика</div>
        <div className={styles.text}>
          Наши фирменные костюмы — это то, чем мы известны. Откройте для себя классические формы и
          оттенки, подходящие для вашего образа жизни.
        </div>

        <Link className={styles.mainScreen_button} to="/goodsPage/classic">
          Смотреть коллекцию
        </Link>
      </div>
    </div>
  );
}
