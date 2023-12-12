import React from 'react';
import styles from './OpenGoodPage.module.css';

export default function OpenGoodPage(type, price, sizes, color, siluet, season, sostav) {
  return (
    <div className={styles.good - container}>
      <div className={styles.images - wrapper}>
        <div className={styles.images}>
          <img
            claclassNamess={styles.goods - image}
            src="../../assets/img/${category}-${number}.webp"
            alt=""
          />
          <div className={styles.subimages}>
            <img
              className={styles.goods - subimage}
              src="../../assets/img/${category}-${number}-1.webp"
              alt=""
            />
            <img
              className={styles.goods - subimage}
              src="../../assets/img/${category}-${number}-2.webp"
              alt=""
            />
            <img
              className={styles.goods - subimage}
              src="../../assets/img/${category}-${number}-3.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.type - about}>${type}</div>
        <span className={styles.price - about}>Цена: {price}</span>
        <span className={styles.sizes}>Размеры: {sizes}</span>
        <span className={styles.color}>Цвет: {color}</span>
        <span className={styles.siluet}>Силуэт: {siluet}</span>
        <span className={styles.season}>Сезон: {season}</span>
        <span className={styles.sostav}>Состав: {sostav}</span>

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
