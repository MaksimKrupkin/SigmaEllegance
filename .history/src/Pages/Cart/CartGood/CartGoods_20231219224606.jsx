import React from 'react';
import styles from './CartGood.module.css';
import image from '../../../assets/img/bruki-1.webp';
import { MdDelete } from 'react-icons/md';

export default function CartGood({ price, image1, type, color, count }) {
  return (
    <div className={styles.good_item}>
      <img className={styles.goods_img} src={image1} alt="" />
      <div className={styles.left}>
        <div className={styles.goods_data}>
          <p className={styles.goods_type}>{type}</p>
          <p className={styles.goods_color}>{color}</p>
        </div>
        <div className={styles.goods_count}>
          <div>-</div>
          <div>{count}</div>
          <div>+</div>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.goods_price}>{price * count} р.</p>
        <div className={styles.goods_delete}>
          <MdDelete fontSize={25} />
          <p className={styles.delete_text}>Удалить</p>
        </div>
      </div>
    </div>
  );
}
