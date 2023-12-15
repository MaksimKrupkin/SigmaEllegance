import React from 'react';
import styles from './SearchPage.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  return (
    <main class={styles.main}>
      <div className={styles.search_box}>
        <input
          type="text"
          placeholder="Что вы ищите?"
          className={styles.search_field}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button className={styles.search_glass}></button>
        <div className={styles.search_button_wrapper}>
          <button className={styles.search_cross}></button>
        </div>
      </div>

      <div className={styles.often_variants}>
        <div className={styles.often_variants_title}>Популярные запросы</div>

        <div className={styles.often_variants_items}>
          <div className={styles.often_variant_item1}>
            <Link href="" className={styles.often_variant_link}>
              костюм тройка
            </Link>
          </div>
          <div className={styles.often_variant_item1}>
            <Link href="" className={styles.often_variant_link}>
              фрак
            </Link>
          </div>
          <div className={styles.often_variant_item1}>
            <Link href="" className={styles.often_variant_link}>
              смокинг
            </Link>
          </div>
          <div className={styles.often_variant_item1}>
            <Link href="" className={styles.often_variant_link}>
              костюм на заказ
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
