import React from 'react';
import styles from './SliderCard.module.css';
import { Link } from 'react-router-dom';

export default function SliderCard({ type, image }) {
  return (
    <Link to="" className={styles.card}>
      <p className={styles.card_title}>{type}</p>
      <img className={styles.card_image} src={imge} alt="" />
    </Link>
  );
}
