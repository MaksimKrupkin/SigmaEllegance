import React from 'react';
import styles from './Header.module.css';
import icon1 from '../../assets/img/Icon1.svg';
import icon2 from '../../assets/img/icon2.svg';
import icon3 from '../../assets/img/icon3.svg';
import icon4 from '../../assets/img/icon4.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left_part}>
        <div className={styles.menu}>
          <img src={icon1} alt="" />
          <p>Меню</p>
        </div>
        <div className={styles.search}>
          <img src={icon2} alt="" />
          <p>Поиск</p>
        </div>
      </div>
      <div className={styles.logo_part}>
        <img src="" alt="" className={styles.logo} />
        <p>SigmaEllegance</p>
      </div>
      <div className={styles.right_part}>
        <div className={styles.liked}>
          <p>Желаемое</p>
          <img src="" alt="" />
        </div>
        <div className={styles.purchases}>
          <p>Мой SE</p>
          <img src="" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
