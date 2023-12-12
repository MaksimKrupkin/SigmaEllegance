import React from 'react';
import styles from '/OpenGoodPage.module.css';

export default function OpenGoodPage() {
  return (
    <div className="good-container">
      <div className="images-wrapper">
        <div className="images">
          <img
            claclassNamess="goods-image"
            src="../../assets/img/${category}-${number}.webp"
            alt=""
          />
          <div className="subimages">
            <img
              className="goods-subimage"
              src="../../assets/img/${category}-${number}-1.webp"
              alt=""
            />
            <img
              className="goods-subimage"
              src="../../assets/img/${category}-${number}-2.webp"
              alt=""
            />
            <img
              className="goods-subimage"
              src="../../assets/img/${category}-${number}-3.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="information">
        <div className="type-about">${type}</div>
        <span className="price-about">Цена: {price}</span>
        <span className="sizes">Размеры: {sizes}</span>
        <span className="color">Цвет: {color}</span>
        <span className="siluet">Силуэт: {siluet}</span>
        <span className="season">Сезон: {season}</span>
        <span className="sostav">Состав: {sostav}</span>

        <a href="#" className="tocarzina">
          В корзину
        </a>
        <a href="#" className="tobuy">
          Купить
        </a>
      </div>
    </div>
  );
}
