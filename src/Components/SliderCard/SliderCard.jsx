import React from 'react';
import styles from './SliderCard.module.css';

export default function SliderCard({ type, image }) {
  return (
    <div className={styles.card}>
      <p className={styles.card_title}>{type}</p>
      <img className={styles.card_image} src={image} alt="" />
    </div>
  );
}
