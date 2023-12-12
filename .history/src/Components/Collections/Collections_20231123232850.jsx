import React from 'react';
import styles from './Collections.module.css';
import image1 from '../../assets/img/collection1.png';
import image2 from '../../assets/img/collection6.png';

export default function Collections() {
  return (
    <section className={styles.collections_section}>
      <h2 className={styles.title}>Новые коллекции</h2>
      <div className={styles.collections_wrapper}>
        <div className={styles.collections_top}>
          <div className={styles.collection1}>
            <img className={styles.collection1_image} src={image1} alt="" />
            <p className={styles.subtitle}>New era —New Rules New life & emotions</p>
            <a className={styles.button}>Смотреть</a>
            <div className={styles.rightPart}></div>
          </div>

          <div className={styles.collection2}></div>
          <div className={styles.collection3}></div>
        </div>
        <div className={styles.collections_bottom}>
          <div className={styles.collection4}></div>
          <div className={styles.collection5}></div>
          <div className={styles.collection6}>
            <img className={styles.collection6_image} src={image2} alt="" />
            <p className={styles.subtitle}>
              Be Royal <br></br> Be Yourself every time anywhere
            </p>
            <a className={styles.button}>Смотреть</a>
            <div className={styles.rightPart}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
