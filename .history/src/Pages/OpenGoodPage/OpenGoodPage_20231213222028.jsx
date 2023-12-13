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
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${category}`)
      .then((resp) => {
        console.log(resp.data); // Добавить эту строку для отладки
        const data = resp.data.find((item) => item.id === id);
        setSelectedItem(data);
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  }, [category, id]);
  console.log(selectedItem);
  if (!selectedItem) {
    return <div>Loading...</div>; // Или другое сообщение о загрузке
  }

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
        <span className={styles.price_about}>Цена: {selectedItem.price}</span>
        <span className={styles.sizes}>Размеры: {selectedItem.sizes}</span>
        <span className={styles.color}>Цвет: {selectedItem.color}</span>
        <span className={styles.siluet}>Силуэт: {selectedItem.siluet}</span>
        <span className={styles.season}>Сезон: {selectedItem.season}</span>
        <span className={styles.sostav}>Состав:{selectedItem.sostav}</span>

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
