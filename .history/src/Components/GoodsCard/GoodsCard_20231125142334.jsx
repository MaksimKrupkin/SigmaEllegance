import React from 'react';
import styles from './GoodsCard.module.css';

export default function GoodsCard() {
  return (
    <div className={styles.goods_card} id="0">
      <a href="good-page.html" className={styles.goods_link}>
        <img src="/img/pidjac-1.webp" alt="" className={styles.good_image} />
        <div className={styles.price}>900.00 р.</div>
        <div className={styles.brandname}>SigmaEllegance</div>
        <div className={styles.type}>Пиджак</div>
      </a>
    </div>
  );
}
