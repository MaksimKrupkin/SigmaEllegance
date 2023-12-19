import React, { useState, useEffect } from 'react';
import styles from './OpenGoodPage.module.css';
import image1 from '../../assets/img/pidjac-3.webp';
import image2 from '../../assets/img/pidjac-3-1.webp';
import image3 from '../../assets/img/pidjac-3-2.webp';
import image4 from '../../assets/img/pidjac-3-3.webp';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../Redux/slices/cartSlice';

export default function OpenGoodPage() {
  const { category, id } = useParams();
  const [selectedItem, setSelectedItem] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${category}`)
      .then((resp) => {
        console.log(resp.data);
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
  const onClickAdd = (selectedItem) => {
    const item = {
      type: selectedItem.type,
      price: selectedItem.price,
      color: selectedItem.color,
      image1: selectedItem.image1,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={styles.good_container}>
      <div className={styles.images_wrapper}>
        <div className={styles.images}>
          <img className={styles.goods_image} src={selectedItem.image1} alt="" />

          <div className={styles.subimages}>
            <img className={styles.goods_subimage} src={selectedItem.image2} alt="" />
            <img className={styles.goods_subimage} src={selectedItem.image3} alt="" />
            <img className={styles.goods_subimage} src={selectedItem.image4} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.type_about}>{selectedItem.type}</div>
        <span className={styles.price_about}>Цена: {selectedItem.price} р.</span>
        <span className={styles.sizes}>Размеры: {selectedItem.sizes}</span>
        <span className={styles.color}>Цвет: {selectedItem.color}</span>
        <span className={styles.siluet}>Силуэт: {selectedItem.siluet}</span>
        <span className={styles.season}>Сезон: {selectedItem.season}</span>
        <span className={styles.sostav}>Состав: {selectedItem.sostav}</span>

        <button onCLick={onClickAdd} href="#" className={styles.tocarzina}>
          В корзину
        </button>
        <a href="#" className={styles.tobuy}>
          Купить
        </a>
      </div>
    </div>
  );
}
