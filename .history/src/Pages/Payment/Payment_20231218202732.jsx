import React from 'react';
import styles from './Payment.module.css';
import checkImg from './checkImg.svg';

export default function Payment() {
  return (
    <div className={styles.paymentPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>способы оплаты товара</h1>
        <div className={styles.items_wrapper}>
          <div className={styles.item}>
            <h2 className={styles.subtitle}>Онлайн-оплата</h2>
            <p className={styles.paragraph}>
              Оплата на сайте производится через сервис BePaid или Webpay.
            </p>
            <p className={styles.paragraph}>Оплатить заказ можно:</p>
            <div>
              <img className={styles.check} src="" alt="" />
              <p className={styles.paragraph}>Оплатить заказ можно:</p>
            </div>
            <p className={styles.paragraph}></p>
            <p className={styles.paragraph}></p>
          </div>
        </div>
      </div>
    </div>
  );
}
