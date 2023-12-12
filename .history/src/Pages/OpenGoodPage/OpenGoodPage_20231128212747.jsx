import React from 'react';
import styles from './OpenGoodPage.module.css';
import images from '../../assets/img/pidjac-1';

export default function OpenGoodPage() {
  return (
    <div className={styles.good_container}>
      <div className={styles.images_wrapper}>
        <div className={styles.images}>
          <img
            claclassNamess={styles.goods_image}
            src="../../assets/img/${category}-${number}.webp"
            alt=""
          />
          <div className={styles.subimages}>
            <img
              className={styles.goods_subimage}
              src="../../assets/img/${category}-${number}-1.webp"
              alt=""
            />
            <img
              className={styles.goods_subimage}
              src="../../assets/img/${category}-${number}-2.webp"
              alt=""
            />
            <img
              className={styles.goods_subimage}
              src="../../assets/img/${category}-${number}-3.webp"
              alt=""
            />
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
