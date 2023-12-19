import React from 'react';
import { BsCartXFill } from 'react-icons/bs';
import styles from './EmptyCart.jsx';

export default function EmptyCart() {
  return (
    <div className={Styles.emptycart}>
      <h1>Ваша карзина пуста</h1>
      <BsCartXFill />
    </div>
  );
}
