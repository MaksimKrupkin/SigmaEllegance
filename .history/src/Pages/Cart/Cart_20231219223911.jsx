import React from 'react';
import styles from './Cart.module.css';
import CartGood from './CartGood/CartGoods';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.image1 === image1));

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Корзина</div>
        <div className={styles.sum}>Сумма заказа: 1247.52 р.</div>
        <CartGood />
        <CartGood />
        <CartGood />
      </div>
    </div>
  );
}
