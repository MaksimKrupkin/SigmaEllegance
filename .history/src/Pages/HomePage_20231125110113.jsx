import React from 'react';
import styles from './HomePage.module.css';
import mainScreenImage from '../assets/img/background.png';
import Slider from '../Components/Slider/Slider';
import Styles from '../Components/Styles/Styles';
import Collections from '../Components/Collections/Collections';
import Footer from '../Components/Footer/Footer';
import Sendings from '../Components/Sendings/Sendings';

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
      <Slider />
      <Styles />
      <Collections />
      <Sendings />
      <Footer />
    </>
  );
}

export default HomePage;
