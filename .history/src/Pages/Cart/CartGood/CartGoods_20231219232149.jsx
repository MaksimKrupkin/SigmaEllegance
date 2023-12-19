import React from 'react';
import styles from './CartGood.module.css';
import image from '../../../assets/img/bruki-1.webp';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../Redux/slices/cartSlice';
import { minusItem } from '../../../Redux/slices/cartSlice';
import { removeItem } from '../../../Redux/slices/cartSlice';

export default function CartGood({ price, image1, type, color, count }) {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItem({ image1 }));
  };
  const onClickMinus = () => {
    dispatch(minusItem({ image1 }));
  };
  const onClickRemove = () => {
    dispatch(removeItem({ item }));
  };
  return (
    <div className={styles.good_item}>
      <img className={styles.goods_img} src={image1} alt="" />
      <div className={styles.left}>
        <div className={styles.goods_data}>
          <p className={styles.goods_type}>{type}</p>
          <p className={styles.goods_color}>{color}</p>
        </div>
        <div className={styles.goods_count}>
          <div onClick={onClickMinus}>-</div>
          <div>{count}</div>
          <div onClick={onClickPlus}>+</div>
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
