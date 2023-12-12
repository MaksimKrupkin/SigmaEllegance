import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__right - menu}>
          <div className={styles.right - menu__item} id="menu">
            <img
              className={styles.header - icon}
              src="../../assets/img/Icon1.svg"
              alt="burger-menu"
            />
            <div className={styles.menu__item - text}> Меню </div>
          </div>
          <div className={styles.right - menu__item}>
            <img className={styles.header - icon} src="../../assets/img/icon2.svg" alt="search" />
            <div className={styles.menu__item - text}>
              <a href="/search.html" className={styles.search - link}>
                {' '}
                Поиск{' '}
              </a>
            </div>
          </div>
        </div>

        <div className="logo">
          <img className={styles.logo__image} src="../../assets/img/logo.svg" alt="logo" />
          <div className={styles.menu__item - text}>SigmaEllegance</div>
        </div>

        <div className={styles.header__left - menu}>
          <div className={styles.left - menu - item}>
            <div className={styles.menu__item - text}>Желаемое</div>
            <img className={styles.header - icon} src="../../assets/img/icon3.svg" alt="like" />
          </div>
          <div className={styles.left - menu - item}>
            <img
              className={styles.header - icon}
              src="../../assets/img/icon4.svg"
              alt="myAccount"
            />
            <div className={styles.menu__item - text}>Мой SE</div>
          </div>
          <div className={styles.left - menu - item}>
            <img className={styles.header - icon} src="../../assets/img/icon5.svg" alt="bag" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
