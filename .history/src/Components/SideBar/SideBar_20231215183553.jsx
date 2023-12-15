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

      <div onClick={HandleToggleStyles} className={styles.menu_main_item} id="styles">
        <div className={styles.menu_main_item_text}>Стили</div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image1" />
        {toggleStyles && (
          <div className={styles.styles_open}>
            <Link to="/goodspage/elit" className={styles.style_open_item_link}>
              <div className={styles.style_open_item}>Элит</div>
            </Link>
            <Link to="/goodspage/perfomance" className={styles.style_open_item_link}>
              <div className={styles.style_open_item}>Перфоманс</div>
            </Link>
            <Link to="/goodspage/dark" className={styles.style_open_item_link}>
              <div className={styles.style_open_item}>Тёмный</div>
            </Link>
            <Link href="" className={styles.style_open_item_link}>
              <div className={styles.style_open_item}>Нью-лук</div>
            </Link>
            <Link href="" className={styles.style_open_item_link}>
              <div className={styles.style_open_item}>Классик</div>
            </Link>
          </div>
        )}
      </div>

      <div onClick={HandleToggleCostums} className={styles.menu_main_item} id="costums">
        <div className={styles.menu_main_item_text}>костюмы</div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image2" />
        {toggleCostums && (
          <div className={styles.costums_open} id="openedCostums">
            <Link to="/goodspage/kostum" className={styles.costums_open_item_link}>
              <div className={styles.costums_open_item}>Тройка</div>
            </Link>
            <Link to="/goodspage/jackets" className={styles.costums_open_item_link}>
              <div className={styles.costums_open_item}>Жилеты</div>
            </Link>
            <Link to="/goodspage/smokings" className={styles.costums_open_item_link}>
              <div cclassName={styles.costums_open_item}>Смокинг</div>
            </Link>
          </div>
        )}
      </div>

      <div onClick={HandleToggleAccessories} className={styles.menu_main_item} id="clothes">
        <div className={styles.menu_main_item_text}>одежда & АКСЕССУАРЫ</div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image3" />
        {toggleAccessories && (
          <div className={styles.clothes_open} id="openedClothes">
            <Link to="/goodspage/pidjac" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>Пиджаки</div>
            </Link>
            <Link to="/goodspage/shirts" className={styles.clothes_open_item_link}>
              <div classNames={styles.clothes_open_item}>Рубашки</div>
            </Link>
            <Link to="/goodspage/bruki" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>брюки & штаны</div>
            </Link>
            <Link to="/goodspage/belts" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>Ремни</div>
            </Link>
            <Link to="/goodspage/tie" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>Галстуки</div>
            </Link>
            <Link to="/goodspage/butterfly" className={styles.clothes_open_item_link}>
              <div className={styles.clothes_open_item}>Бабочки</div>
            </Link>
          </div>
        )}
      </div>

      <div onClick={HandleToggleShoes} className={styles.menu_main_item} id="shoes">
        <div className={styles.menu_main_item_text}>Обувь</div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image4" />
        {toggleShoes && (
          <div className={styles.shoes_open} id="openedShoes">
            <Link href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Оксфорды</div>
            </Link>
            <Link href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Дерби</div>
            </Link>
            <Link href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Броги</div>
            </Link>
            <Link href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Монки</div>
            </Link>
            <Link href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Лоферы</div>
            </Link>
            <Link href="" className={styles.shoes_open_item_link}>
              <div className={styles.shoes_open_item}>Челси</div>
            </Link>
          </div>
        )}
      </div>

      <Link className={styles.menu_link} to="aboutUsPage">
        <div className={styles.menu_main_item}>
          <div className={styles.menu_main_item_text}>О нас</div>
        </div>
      </Link>

      <Link className={styles.menu_link} href="">
        <div className={styles.menu_main_item}>
          <div className={styles.menu_main_item_text}>ОПЛАТА И ДОСТАВКА</div>
        </div>
      </Link>

      <Link className={styles.menu_link} href="">
        <div className={styles.menu_main_item}>
          <div className={styles.menu_main_item_text}>контакты</div>
        </div>
      </Link>
    </aside>
  );
}
