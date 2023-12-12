import React from 'react';
import styles from './HomePage.module.css';
import mainScreenImage from '../assets/img/background.png';

function HomePage() {
  return (
    <>
      <div className={styles.mainScreen}>
        <div className={styles.textBlock}>
          <div className={styles.title}>Мужская классика</div>
          <div className={styles.text}>
            Наши фирменные костюмы — это то, чем мы известны. Откройте для себя классические формы и
            оттенки, подходящие для вашего образа жизни.
          </div>
          <button>Смотреть коллекцию</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
