import React from 'react';
import { BsCartXFill } from 'react-icons/bs';
import styles from './EmptyCart.module.css';

export default function EmptyCart() {
  return (
    <div className={styles.emptycart}>
      <h1>Ваша карзина пуста</h1>
      <BsCartXFill fontSize={60} />
    </div>
  );
}
