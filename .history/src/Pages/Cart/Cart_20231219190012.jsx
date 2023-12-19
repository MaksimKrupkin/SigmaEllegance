import React from 'react';
import styles from './Cart.module.css';

export default function Cart() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Корзина</div>
        <div className={styles.sum}>Сумма заказа: 1247.52 р.</div>
        <div className={styles.good_item}></div>
      </div>
    </div>
  );
}
