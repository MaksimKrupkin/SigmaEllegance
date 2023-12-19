import React from 'react';
import styles from './Cart.module.css';
import CartGood from './CartGood/CartGoods';
import EmptyCart from './EmptyCart/EmptyCart';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  if (!totalPrice) {
    return <EmptyCart />;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Корзина</div>
        <div className={styles.sum}>Сумма заказа: {totalPrice} р.</div>
        {items.map((item) => (
          <CartGood key={item.image1} {...item} />
        ))}
      </div>
    </div>
  );
}
