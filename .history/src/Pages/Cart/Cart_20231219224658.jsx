import React from 'react';
import styles from './Cart.module.css';
import CartGood from './CartGood/CartGoods';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Корзина</div>
        <div className={styles.sum}>Сумма заказа: 1247.52 р.</div>
        {items.map((item) => (
          <CartGood />
        ))}
      </div>
    </div>
  );
}
