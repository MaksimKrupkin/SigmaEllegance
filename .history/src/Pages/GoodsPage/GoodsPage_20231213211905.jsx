import React, { useState, useEffect } from 'react';
import GoodsCard from '../../Components/GoodsCard/GoodsCard';
import styles from './GoodsPage.module.css';
import axios from 'axios';
import Footer from '../../Components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { HandleIdContext, useHandleId } from '../../HandleContextId';
import { history } from 'react-router-dom';

export default function GoodsPage() {
  const { handleId, setHandleId } = useHandleId();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { category } = useParams();
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/${category}`)
      .then((resp) => {
        const data = resp.data;
        setGoods(data);
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  }, [category]);
  const firstItemType = goods.length > 0 ? goods[0].type : '';
  console.log(firstItemType);
  console.log(goods);
  console.log(handleId);
  return (
    <div className={styles.main}>
      <div className={styles.page_title}>{firstItemType}</div>
      <div className={styles.container_goods}>
        {goods.map((card, index) => (
          <GoodsCard
            onClick={() => {
              history.push(`/goodspage/${category}/${card.id}`); // Используйте history из react-router-dom или Link для перехода
            }}
            key={index}
            type={card.type}
            price={card.price}
            image={card.image1}
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
}
