import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__right-menu">
          <div className="right-menu__item" id="menu">
            <img className="header-icon" src="img/Icon1.svg" alt="burger-menu" />
            <div className="menu__item-text"> Меню </div>
          </div>
          <div className="right-menu__item">
            <img className="header-icon" src="img/icon2.svg" alt="search" />
            <div className="menu__item-text">
              <a href="/search.html" className="search-link">
                {' '}
                Поиск{' '}
              </a>
            </div>
          </div>
        </div>

        <div className="logo">
          <img className="logo__image" src="img/logo.svg" alt="logo" />
          <div className="menu__item-text">SigmaEllegance</div>
        </div>

        <div className="header__left-menu">
          <div className="left-menu-item">
            <div className="menu__item-text">Желаемое</div>
            <img className="header-icon" src="img/icon3.svg" alt="like" />
          </div>
          <div className="left-menu-item">
            <img className="header-icon" src="img/icon4.svg" alt="myAccount" />
            <div className="menu__item-text">Мой SE</div>
          </div>
          <div className="left-menu-item">
            <img className="header-icon" src="img/icon5.svg" alt="bag" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
