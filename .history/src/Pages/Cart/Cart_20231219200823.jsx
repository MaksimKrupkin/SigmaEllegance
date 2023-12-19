import React from 'react';
import styles from './Cart.module.css';
import image from '../../assets/img/bruki-1.webp';
import { MdDelete } from 'react-icons/md';
import CartGoods from './CartGood/CartGoods';

export default function Cart() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Корзина</div>
        <div className={styles.sum}>Сумма заказа: 1247.52 р.</div>
        <CartGood />
      </div>
    </div>
  );
}
