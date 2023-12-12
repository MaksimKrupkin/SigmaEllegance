import React from 'react';
import styles from './Slider.module.css';
import leftArrow from '../../assets/img/Left Arrow.svg';
import rightArrow from '../../assets/img/Right Arrow.svg';

export default function Slider() {
  return (
    <div className={styles.slider_wrapper}>
      <img className={styles.leftArrow} src={leftArrow} alt="" />

      <div className={styles.slider}>
        <div className={styles.card}>
          <p className={styles.card_title}></p>
          <img className={styles.card_image} src="" alt="" />
        </div>
      </div>

      <img className={styles.rightArrow} src={rightArrow} alt="" />
    </div>
  );
}
