import React from 'react';
import styles from './CartGood.module.css';
import image from '../../assets/img/bruki-1.webp';
import { MdDelete } from 'react-icons/md';

export default function CartGood() {
  return (
    <div className={styles.good_item}>
      <img className={styles.goods_img} src={image} alt="" />
      <div className={styles.goods_data}>
        <p className={styles.goods_type}>Ремень</p>
        <p className={styles.goods_color}>Черный</p>
        <div className={styles.goods_count}>
          <div>-</div>
          <div>1</div>
          <div>+</div>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.goods_price}>261.63 р.</p>
        <div className={styles.goods_delete}>
          <MdDelete fontSize={25} />
          <p className={styles.delete_text}>Удалить</p>
        </div>
      </div>
    </div>
  );
}
