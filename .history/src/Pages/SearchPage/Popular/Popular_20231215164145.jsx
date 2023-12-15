import React from 'react';
import styles from './Popular.module.css';
import { Link } from 'react-router-dom';
export default function Popular() {
  return (
    <div className={styles.often_variants}>
      <div className={styles.often_variants_title}>Популярные запросы</div>

      <div className={styles.often_variants_items}>
        <div className={styles.often_variant_item1}>
          <Link to="/goodspage/kostum" className={styles.often_variant_link}>
            костюм
          </Link>
        </div>
        <div className={styles.often_variant_item1}>
          <Link href="" className={styles.often_variant_link}>
            туфли
          </Link>
        </div>
        <div className={styles.often_variant_item1}>
          <Link href="" className={styles.often_variant_link}>
            смокинг
          </Link>
        </div>
        <div className={styles.often_variant_item1}>
          <Link href="" className={styles.often_variant_link}>
            рубашка
          </Link>
        </div>
      </div>
    </div>
  );
}
