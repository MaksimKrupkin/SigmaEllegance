import React from 'react';
import styles from './SearchPage.module.css';

export default function SearchPage() {
  return (
    <main class={styles.main}>
      <div className={styles.search_box}>
        <input type="text" placeholder="Что вы ищите?" className={styles.search_field} />
        <button className={styles.search_glass}></button>
        <div className={styles.search_button_wrapper}>
          <button className={styles.search_cross}></button>
        </div>
      </div>

      <div className={styles.often_variants}>
        <div className={styles.often_variants_title}>Популярные запросы</div>

        <div className={styles.often_variants_items}>
          <div className={styles.often_variant_item1}>
            <a href="" className={styles.often_variant_link}>
              костюм тройка
            </a>
          </div>
          <div className={styles.often_variant_item1}>
            <a href="" className={styles.often_variant_ink}>
              фрак
            </a>
          </div>
          <div className={styles.often_variant_item1}>
            <a href="" className={styles.often_variant_link}>
              смокинг
            </a>
          </div>
          <div className={styles.often_variant_item1}>
            <a href="" className={styles.often_variant_link}>
              костюм на заказ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
