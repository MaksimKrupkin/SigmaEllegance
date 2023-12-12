import React, { createContext, useContext } from 'react';
import styles from './SliderCard.module.css';
import { Link } from 'react-router-dom';

const CategoryContext = createContext('');
export function CategoryProvider({ children, value }) {
  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}
export default function SliderCard({ type, image, category }) {
  const category = useContext(CategoryContext);
  return (
    <Link to={`/goodspage/${category}`} className={styles.card}>
      <p className={styles.card_title}>{type}</p>
      <img className={styles.card_image} src={image} alt="" />
    </Link>
  );
}
