import React from 'react';
import styles from './SideBar.module.css';
import arrowDown from '../../assets/img/arrowDown.svg';
import arrowTop from '../../assets/img/arrowTop.svg';
import cross from '../../assets/img/cross.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SideBar({ HandleToggle }) {
  const [toggleCostums, setToggleCostums] = useState(false);
  const [toggleStyles, setToggleStyles] = useState(false);
  const [toggleAccessories, setToggleAccessories] = useState(false);
  const [toggleShoes, setToggleShoes] = useState(false);

  const HandleToggleCostums = () => {
    setToggleCostums(!toggleCostums);
  };
  const HandleToggleStyles = () => {
    setToggleStyles(!toggleStyles);
  };

  const HandleToggleAccessories = () => {
    setToggleAccessories(!toggleAccessories);
  };
  const HandleToggleShoes = () => {
    setToggleShoes(!toggleShoes);
  };

  return (
    <aside className={styles.menu}>
      <img onClick={HandleToggle} className={styles.menu_off} src={cross} alt="" />
      <Link className={styles.menu_link} to="/">
        <div className={styles.menu_main_item}>
          <div className={styles.menu_main_item_text}>Главная</div>
        </div>
      </Link>

      <div className={styles.menu_main_item} id="styles">
        <div onClick={HandleToggleStyles} className={styles.menu_main_item_text}>
          Стили
        </div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image1" />
        {toggleStyles && (
          <div className={styles.styles_open}>
            <a href="/elit.html" className={styles.style_open_item_link}>
              <div className={styles.style_open_item}>Элит</div>
            </a>
            <a href="/performance.html" className={styles.style_open_item_link}>
              <div className={styles.style_open_item}>Перфоманс</div>
            </a>
            <a href="" className={styles.style_open_item_link}>
              <div className={styles.style_open_item}>Тёмный</div>
            </a>
            <a href="" className={styles.style_open_item_link}>
              <div className={styles.style_open_item}>Нью-лук</div>
            </a>
            <a href="" className={styles.style_open_item_link}>
              <div className={styles.style_open_item}>Классик</div>
            </a>
          </div>
        )}
      </div>

      <div onClick={HandleToggleCostums} className={styles.menu_main_item} id="costums">
        <div className={styles.menu_main_item_text}>костюмы</div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image2" />
        {toggleCostums && (
          <div className={styles.costums_open} id="openedCostums">
            <a href="/kostum-troika.html" className={styles.costums_open_item_link}>
              <div className={styles.costums_open_item}>Тройка</div>
            </a>
            <a href="" className={styles.costums_open_item_link}>
              <div className={styles.costums_open_item}>Фрак</div>
            </a>
            <a href="/smoking.html" className={styles.costums_open_item_link}>
              <div cclassName={styles.costums_open_item}>Смокинг</div>
            </a>
            <a href="" className={styles.costums_open_item_link}>
              <div className={styles.costums_open_item}>На заказ</div>
            </a>
          </div>
        )}
      </div>

      <div className={styles.menu_main_item} id="clothes">
        <div onClick={HandleToggleAccessories} className={styles.menu_main_item_text}>
          одежда & АКСЕССУАРЫ
        </div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image3" />
        {toggleAccessories && (
          <div className={styles.clothes_open} id="openedClothes">
            <Link to="/goodspage" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>Пиджаки</div>
            </Link>
            <a href="" className={styles.clothes_open_item_link}>
              <div classNames={styles.clothes_open_item}>Рубашки</div>
            </a>
            <a href="/jakets.html" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>Жакеты</div>
            </a>
            <a href="" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>брюки & штаны</div>
            </a>
            <a href="" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>Ремни</div>
            </a>
            <a href="" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>Галстуки</div>
            </a>
            <a href="" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>Бабочки</div>
            </a>
          </div>
        )}
      </div>

      <div className={styles.menu_main_item} id="shoes">
        <div onClick={HandleToggleShoes} className={styles.menu_main_item_text}>
          Обувь
        </div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image4" />
        {toggleShoes && (
          <div className={styles.shoes_open} id="openedShoes">
            <a href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Оксфорды</div>
            </a>
            <a href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Дерби</div>
            </a>
            <a href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Броги</div>
            </a>
            <a href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Монки</div>
            </a>
            <a href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Лоферы</div>
            </a>
            <a href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Челси</div>
            </a>
          </div>
        )}
      </div>

      <a className={styles.menu_link} href="about us.html">
        <div className={styles.menu_main_item}>
          <div className={styles.menu_main_item_text}>О нас</div>
        </div>
      </a>

      <a className={styles.menu_link} href="">
        <div className={styles.menu_main_item}>
          <div className={styles.menu_main_item_text}>ОПЛАТА И ДОСТАВКА</div>
        </div>
      </a>

      <a className={styles.menu_link} href="">
        <div className={styles.menu_main_item}>
          <div className={styles.menu_main_item_text}>контакты</div>
        </div>
      </a>
    </aside>
  );
}
