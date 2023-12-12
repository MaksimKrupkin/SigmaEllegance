import React from 'react';
import styles from './SliderCard.module.css';
import img from '../../assets/img/card1.png';

export default function SliderCard({ type, img }) {
  return (
    <div className={styles.card}>
      <p className={styles.card_title}>{type}</p>
      <img className={styles.card_image} src={img} alt="" />
    </div>
  );
}
