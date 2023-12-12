import React from 'react';
import GoodsCard from '../../Components/GoodsCard/GoodsCard';
import styles from './GoodsPage.module.css';

export default function GoodsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.page_title}>Пиджаки</div>
      <div className={styles.container_goods}>
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
      </div>
    </main>
  );
}
