import React from 'react';
import styles from './Slider.module.css';
import leftArrow from '../../assets/img/Left Arrow.svg';
import rightArrow from '../../assets/img/Right Arrow.svg';

export default function Slider() {
  return (
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
  );
}
