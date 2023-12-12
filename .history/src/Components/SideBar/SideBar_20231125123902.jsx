import React from 'react';
import styles from './SideBar.module.css';

export default function SideBar() {
  return (
    <aside className={styles.menu}>
      <img className={styles.menu - off} src="/img/крестик.svg" alt="" />
      <a className={styles.menu - link} href="">
        <div className={styles.menu - main - item}>
          <div className={styles.menu - main - item - text}>Главная</div>
        </div>
      </a>

      <div className={styles.menu - main - item} id="styles">
        <div className={styles.menu - main - item - text}>Стили</div>
        <img
          className={styles.menu - main - item - image}
          src="/img/стрелочка вниз.svg"
          alt=""
          id="image1"
        />
        <div className={styles.styles - open} id="openedStyle">
          <a href="/elit.html" className={styles.style - open - item - link}>
            <div className={styles.style - open - item}>Элит</div>
          </a>
          <a href="/performance.html" className="style-open-item-link">
            <div className={styles.style - open - item}>Перфоманс</div>
          </a>
          <a href="" className={styles.style - open - item - link}>
            <div className={styles.style - open - item}>Тёмный</div>
          </a>
          <a href="" className={styles.style - open - item - link}>
            <div className={styles.style - open - item}>Нью-лук</div>
          </a>
          <a href="" className={styles.style - open - item - link}>
            <div className={styles.style - open - item}>Классик</div>
          </a>
        </div>
      </div>

      <div className={styles.menu - main - item} id="costums">
        <div className={styles.menu - main - item - text}>костюмы</div>
        <img
          className={styles.menu - main - item - image}
          src="/img/стрелочка вниз.svg"
          alt=""
          id="image2"
        />
        <div className={styles.costums - open} id="openedCostums">
          <a href="/kostum-troika.html" className={styles.costums - open - item - link}>
            <div className={styles.costums - open - item}>Тройка</div>
          </a>
          <a href="" className={styles.costums - open - item - link}>
            <div className={styles.costums - open - item}>Фрак</div>
          </a>
          <a href="/smoking.html" className={styles.costums - open - item - link}>
            <div cclassName={styles.costums - open - item}>Смокинг</div>
          </a>
          <a href="" className={styles.costums - open - item - link}>
            <div className={styles.costums - open - item}>На заказ</div>
          </a>
        </div>
      </div>

      <div className={styles.menu - main - item} id="clothes">
        <div className={styles.menu - main - item - text}>одежда & АКСЕССУАРЫ</div>
        <img
          className={styles.menu - main - item - image}
          src="/img/стрелочка вниз.svg"
          alt=""
          id="image3"
        />
        <div className={styles.clothes - open} id="openedClothes">
          <a href="/pidjaki.html" className={styles.clothes - open - item - link}>
            <div className={styles.clothes - open - item}>Пиджаки</div>
          </a>
          <a href="" className={styles.clothes - open - item - link}>
            <div classNames={styles.clothes - open - item}>Рубашки</div>
          </a>
          <a href="/jakets.html" className={styles.clothes - open - item - link}>
            <div className={styles.clothes - open - item}>Жакеты</div>
          </a>
          <a href="" className={styles.clothes - open - item - link}>
            <div className={styles.clothes - open - item}>брюки & штаны</div>
          </a>
          <a href="" className={styles.clothes - open - item - link}>
            <div className={styles.clothes - open - item}>Ремни</div>
          </a>
          <a href="" className={styles.clothes - open - item - link}>
            <div className={styles.clothes - open - item}>Галстуки</div>
          </a>
          <a href="" className={styles.clothes - open - item - link}>
            <div className={styles.clothes - open - item}>Бабочки</div>
          </a>
        </div>
      </div>

      <div className={styles.menu - main - item} id="shoes">
        <div className={styles.menu - main - item - text}>Обувь</div>
        <img
          className={styles.menu - main - item - image}
          src="/img/стрелочка вниз.svg"
          alt=""
          id="image4"
        />
        <div className={styles.shoes - open} id="openedShoes">
          <a href="" className={styles.shoes - open - item - link}>
            <div className={styles.shoes - open - item}>Оксфорды</div>
          </a>
          <a href="" className={styles.shoes - open - item - link}>
            <div className={styles.shoes - open - item}>Дерби</div>
          </a>
          <a href="" className={styles.shoes - open - item - link}>
            <div className={styles.shoes - open - item}>Броги</div>
          </a>
          <a href="" className={styles.shoes - open - item - link}>
            <div className={styles.shoes - open - item}>Монки</div>
          </a>
          <a href="" className={styles.shoes - open - item - link}>
            <div className={styles.shoes - open - item}>Лоферы</div>
          </a>
          <a href="" className={styles.shoes - open - item - link}>
            <div className={styles.shoes - open - item}>Челси</div>
          </a>
        </div>
      </div>

      <a className={styles.menu - linkt} href="about us.html">
        <div className={styles.menu - main - itemt}>
          <div className={styles.menu - main - item - textt}>О нас</div>
        </div>
      </a>

      <a className={styles.menu - linkt} href="">
        <div className={styles.menu - main - itemt}>
          <div className={styles.menu - main - item - text}>ОПЛАТА И ДОСТАВКА</div>
        </div>
      </a>

      <a className={styles.menu - link} href="">
        <div className={styles.menu - main - item}>
          <div className={styles.menu - main - item - text}>контакты</div>
        </div>
      </a>
    </aside>
  );
}
