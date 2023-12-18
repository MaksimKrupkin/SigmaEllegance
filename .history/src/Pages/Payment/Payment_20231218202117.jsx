import React from 'react';
import styles from './Payment.module.css';

export default function Payment() {
  return (
    <div className={styles.paymentPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>способы оплаты товара</h1>
      </div>
    </div>
  );
}
