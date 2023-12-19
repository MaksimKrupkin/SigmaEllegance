import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import icon1 from '../../assets/img/Icon1.svg';
import icon2 from '../../assets/img/icon2.svg';
import icon3 from '../../assets/img/icon3.svg';
import icon4 from '../../assets/img/icon4.svg';
import SideBar from '../SideBar/SideBar';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const HandleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  console.log(toggleMenu);
  return (
    <header className={styles.header}>
      <div className={styles.left_part}>
        <div onClick={HandleToggle} className={styles.menu}>
          <img className={styles.icon1} src={icon1} alt="" />
          <p>Меню</p>
        </div>
        {toggleMenu && <SideBar HandleToggle={HandleToggle} />}

        <Link to="/searchPage" className={styles.search}>
          <img className={styles.icon2} src={icon2} alt="" />
          <p>Поиск</p>
        </Link>
      </div>
      <Link to="/" className={styles.logo_part}>
        <img className={styles.logo} src={logo} alt="" />
        <p>SigmaEllegance</p>
      </Link>
      <div className={styles.right_part}>
        <Link className={styles.liked}>
          <p>Желаемое</p>
          <img className={styles.icon3} src={icon3} alt="" />
        </Link>
        <Link className={styles.purchases}>
          <p>Мой SE</p>
          <img className={styles.icon4} src={icon4} alt="" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
