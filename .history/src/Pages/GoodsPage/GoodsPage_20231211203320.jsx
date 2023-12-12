import React, { useState, useEffect } from 'react';
import GoodsCard from '../../Components/GoodsCard/GoodsCard';
import styles from './GoodsPage.module.css';
import axios from 'axios';

export default function GoodsPage() {
  const [goods, setGoods] = useState([]);
  return (
    <main className={styles.main}>
      <div className={styles.page_title}>Пиджаки</div>
      {sliderCards.map((card, index) => (
        <SliderCard key={index} type={card.type} image={card.img} />
      ))}
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
