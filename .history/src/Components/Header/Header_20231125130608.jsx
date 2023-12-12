import React from 'react';
import { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import icon1 from '../../assets/img/Icon1.svg';
import icon2 from '../../assets/img/icon2.svg';
import icon3 from '../../assets/img/icon3.svg';
import icon4 from '../../assets/img/icon4.svg';

function Header() {
  const [toogleMenu, setToggleMenu] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.left_part}>
        <div className={styles.menu}>
          <img className={styles.icon1} src={icon1} alt="" />
          <p>Меню</p>
        </div>
        <a className={styles.search}>
          <img className={styles.icon2} src={icon2} alt="" />
          <p>Поиск</p>
        </a>
      </div>
      <a className={styles.logo_part}>
        <img className={styles.logo} src={logo} alt="" />
        <p>SigmaEllegance</p>
      </a>
      <div className={styles.right_part}>
        <a className={styles.liked}>
          <p>Желаемое</p>
          <img className={styles.icon3} src={icon3} alt="" />
        </a>
        <a className={styles.purchases}>
          <p>Мой SE</p>
          <img className={styles.icon4} src={icon4} alt="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
