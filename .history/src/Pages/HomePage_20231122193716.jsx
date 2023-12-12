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
          <button className={styles.mainScreen_button}>Смотреть коллекцию</button>
        </div>
      </div>
      <div className={styles.slider_wrapper}>
        <div className={styles.leftArrow}>
          <img src="" alt="" />
        </div>
        <div className={styles.slider}>
          <div className={styles.card}>
            <p className={styles.card_title}></p>
            <img className={styles.card_image} src="" alt="" />
          </div>
        </div>
        <div className={styles.rightArrow}>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
