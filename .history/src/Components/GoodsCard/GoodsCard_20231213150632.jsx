import React from 'react';
import styles from './GoodsCard.module.css';

import { Link, useParams } from 'react-router-dom';

export default function GoodsCard({ price, image, id }) {
  const { category } = useParams();
  const { handleId, setHandleId } = useState();
  return (
    <div className={styles.goods_card}>
      <Link to={`/opengoodspage/${category}/${id}`} className={styles.goods_link}>
        <img src={image} alt="" className={styles.good_image} />
        <div className={styles.price}>{price}</div>
        <div className={styles.brandname}>SigmaEllegance</div>
        <div className={styles.type}>Пиджак</div>
      </Link>
    </div>
  );
}
