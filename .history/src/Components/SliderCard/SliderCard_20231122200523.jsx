import React from 'react';
import styles from './SliderCard.module.css';
import cardImage from '../../assets/img/card1.png';

export default function SliderCard() {
  return (
    <div className={styles.card}>
      <p className={styles.card_title}>Смокинги</p>
      <img className={styles.card_image} src={cardImage} alt="" />
    </div>
  );
}
