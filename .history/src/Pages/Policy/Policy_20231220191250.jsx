import React from 'react';
import styles from './Policy.module.css';

export default function Policy() {
  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Политика конфиденциальности</h1>
        <p className={styles.paragraph}>
          Настоящая Политика конфиденциальности персональных данных (далее – Политика
          конфиденциальности) действует в отношении всей информации, которую Интернет-магазин
          «SigmaEllegance», расположенный на доменном имени https://sigmaellegance.com может
          получить о Пользователе во время использования сайта Интернет-магазина, программ и
          продуктов Интернет-магазина.
        </p>
        <h2 className={styles.subtitle}>1. Определение терминов</h2>
      </div>
    </div>
  );
}
