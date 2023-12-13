import React, { useState, useEffect } from 'react';
import styles from './OpenGoodPage.module.css';
import image1 from '../../assets/img/pidjac-3.webp';
import image2 from '../../assets/img/pidjac-3-1.webp';
import image3 from '../../assets/img/pidjac-3-2.webp';
import image4 from '../../assets/img/pidjac-3-3.webp';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function OpenGoodPage() {
  const { category, id } = useParams();
  const [goodsData, setGoodsData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${category}`)
      .then((resp) => {
        const data = resp.data;
        setGoodsData(data);
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  }, [category]);
  const specificItem = pidjac.find((item) => item.id === '3');
  console.log(goodsData);
  return (
    <div className={styles.good_container}>
      <div className={styles.images_wrapper}>
        <div className={styles.images}>
          <img className={styles.goods_image} src={image1} alt="" />

          <div className={styles.subimages}>
            <img className={styles.goods_subimage} src={image2} alt="" />
            <img className={styles.goods_subimage} src={image3} alt="" />
            <img className={styles.goods_subimage} src={image4} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.type_about}>Пиджак</div>
        <span className={styles.price_about}>Цена: 900р.</span>
        <span className={styles.sizes}>Размеры: S, M, L</span>
        <span className={styles.color}>Цвет: Черный</span>
        <span className={styles.siluet}>Силуэт: Приталенный</span>
        <span className={styles.season}>Сезон: Деми</span>
        <span className={styles.sostav}>Состав: 80% шерсть</span>

        <a href="#" className={styles.tocarzina}>
          В корзину
        </a>
        <a href="#" className={styles.tobuy}>
          Купить
        </a>
      </div>
    </div>
  );
}
