import React from 'react';
import styles from './SliderCard.module.css';
import { Link } from 'react-router-dom';

export default function SliderCard({ type, image, category }) {
  return (
    <Link to={`/goodspage/${category}`} className={styles.card}>
      {console.log(category);}
      <p className={styles.card_title}>{type}</p>
      <img className={styles.card_image} src={image} alt="" />
    </Link>
  );
}
