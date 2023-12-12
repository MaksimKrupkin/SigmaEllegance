import React from 'react';
import styles from './GoodsCard.module.css';
import image from '../../assets/img/pidjac-1.webp';

export default function GoodsCard() {
  return (
    <div className={styles.goods_card} id="0">
      <Link to="/opengoodspage" className={styles.goods_link}>
        <img src={image} alt="" className={styles.good_image} />
        <div className={styles.price}>900.00 р.</div>
        <div className={styles.brandname}>SigmaEllegance</div>
        <div className={styles.type}>Пиджак</div>
      </Link>
    </div>
  );
}
