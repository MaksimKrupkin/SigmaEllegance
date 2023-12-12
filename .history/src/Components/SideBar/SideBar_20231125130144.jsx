import React from 'react';
import styles from './SideBar.module.css';
import arrowDown from '../../assets/img/arrowDown.svg';
import arrowTop from '../../assets/img/arrowTop.svg';
import cross from '../../assets/img/cross.svg';

export default function SideBar() {
  return (
    <aside className={styles.menu}>
      <img className={styles.menu_off} src={cross} alt="" />
      <a className={styles.menu_link} href="">
        <div className={styles.menu_main_item}>
          <div className={styles.menu_main_item_text}>Главная</div>
        </div>
      </a>

      <div className={styles.menu_main_item} id="styles">
        <div className={styles.menu_main_item_text}>Стили</div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image1" />
        <div className={styles.styles_open} id="openedStyle">
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
      </div>

      <div className={styles.menu_main_item} id="costums">
        <div className={styles.menu_main_item_text}>костюмы</div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image2" />
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
      </div>

      <div className={styles.menu_main_item} id="clothes">
        <div className={styles.menu_main_item_text}>одежда & АКСЕССУАРЫ</div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image3" />
        <div className={styles.clothes_open} id="openedClothes">
          <a href="/pidjaki.html" className={styles.clothes_open_item_link}>
            <div className={styles.clothes_open_item}>Пиджаки</div>
          </a>
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
      </div>

      <div className={styles.menu_main_item} id="shoes">
        <div className={styles.menu_main_item_text}>Обувь</div>
        <img className={styles.menu_main_item_image} src={arrowDown} alt="" id="image4" />
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
