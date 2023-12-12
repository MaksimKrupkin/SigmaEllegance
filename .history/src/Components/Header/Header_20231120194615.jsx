import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__right_menu}>
          <div className={styles.right_menu__item} id="menu">
            <img
              className={styles.header_icon}
              src="../../assets/img/Icon1.svg"
              alt="burger-menu"
            />
            <div className={styles.menu__item_text}> Меню </div>
          </div>
          <div className={styles.right_menu__item}>
            <img className={styles.header_icon} src="../../assets/img/icon2.svg" alt="search" />
            <div className={styles.menu__item_text}>
              <a href="/search.html" className={styles.search_link}>
                {' '}
                Поиск{' '}
              </a>
            </div>
          </div>
        </div>

        <div className="logo">
          <img className={styles.logo__image} src="../../assets/img/logo.svg" alt="logo" />
          <div className={styles.menu__item_text}>SigmaEllegance</div>
        </div>

        <div className={styles.header__left_menu}>
          <div className={styles.left_menu_item}>
            <div className={styles.menu__item_text}>Желаемое</div>
            <img className={styles.header_icon} src="../../assets/img/icon3.svg" alt="like" />
          </div>
          <div className={styles.left_menu_item}>
            <img className={styles.header_icon} src="../../assets/img/icon4.svg" alt="myAccount" />
            <div className={styles.menu__item_text}>Мой SE</div>
          </div>
          <div className={styles.left_menu_item}>
            <img className={styles.header_icon} src="../../assets/img/icon5.svg" alt="bag" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
