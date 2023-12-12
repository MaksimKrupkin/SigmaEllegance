import React, { useState, useEffect } from 'react';
import GoodsCard from '../../Components/GoodsCard/GoodsCard';
import styles from './GoodsPage.module.css';
import axios from 'axios';
import Footer from '../../Components/Footer/Footer';

export default function GoodsPage() {
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/pidjacs')
      .then((resp) => {
        const data = resp.data;
        setGoods(data); // Используйте setGoods для установки полученных данных
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  }, []);

  return (
    <div className={container}>
      <div className={styles.page_title}>Пиджаки</div>

      <div className={styles.container_goods}>
        {goods.map((card, index) => (
          <GoodsCard key={index} type={card.type} price={card.price} image={card.image1} />
        ))}
      </div>
    </div>
  );
}
