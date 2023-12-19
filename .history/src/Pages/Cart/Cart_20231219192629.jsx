import React from 'react';
import styles from './Cart.module.css';
import image from '../../assets/img/bruki-1.webp';
import { MdDelete } from 'react-icons/md';

export default function Cart() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Корзина</div>
        <div className={styles.sum}>Сумма заказа: 1247.52 р.</div>
        <div className={styles.good_item}>
          <img className={styles.goods_img} src={image} alt="" />
          <p className={styles.goods_type}>Ремень</p>
          <p className={styles.goods_color}>Черный</p>
          <div className={styles.goods_count}></div>
          <p className={styles.goods_count}>261.63 р.</p>
          <div className={styles.goods_delete}>
            <img className={styles.delete_icon} src="" alt="" />
            <MdDelete fontSize={25} />
            <p className={styles.delete_text}>Удалить</p>
          </div>
        </div>
      </div>
    </div>
  );
}
