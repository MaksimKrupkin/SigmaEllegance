import React from 'react';
import styles from './SideBar.module.css';

export default function SideBar() {
  return (
    <aside class="menu">
      <img class="menu-off" src="/img/крестик.svg" alt="" />
      <a class="menu-link" href="">
        <div class="menu-main-item">
          <div class="menu-main-item-text">Главная</div>
        </div>
      </a>

      <div class="menu-main-item" id="styles">
        <div class="menu-main-item-text">Стили</div>
        <img class="menu-main-item-image" src="/img/стрелочка вниз.svg" alt="" id="image1" />
        <div class="styles-open" id="openedStyle">
          <a href="/elit.html" class="style-open-item-link">
            <div class="style-open-item">Элит</div>
          </a>
          <a href="/performance.html" class="style-open-item-link">
            <div class="style-open-item">Перфоманс</div>
          </a>
          <a href="" class="style-open-item-link">
            <div class="style-open-item">Тёмный</div>
          </a>
          <a href="" class="style-open-item-link">
            <div class="style-open-item">Нью-лук</div>
          </a>
          <a href="" class="style-open-item-link">
            <div class="style-open-item">Классик</div>
          </a>
        </div>
      </div>

      <div class="menu-main-item" id="costums">
        <div class="menu-main-item-text">костюмы</div>
        <img class="menu-main-item-image" src="/img/стрелочка вниз.svg" alt="" id="image2" />
        <div class="costums-open" id="openedCostums">
          <a href="/kostum-troika.html" class="costums-open-item-link">
            <div class="costums-open-item">Тройка</div>
          </a>
          <a href="" class="costums-open-item-link">
            <div class="costums-open-item">Фрак</div>
          </a>
          <a href="/smoking.html" class="costums-open-item-link">
            <div class="costums-open-item">Смокинг</div>
          </a>
          <a href="" class="costums-open-item-link">
            <div class="costums-open-item">На заказ</div>
          </a>
        </div>
      </div>

      <div class="menu-main-item" id="clothes">
        <div class="menu-main-item-text">одежда & АКСЕССУАРЫ</div>
        <img class="menu-main-item-image" src="/img/стрелочка вниз.svg" alt="" id="image3" />
        <div class="clothes-open" id="openedClothes">
          <a href="/pidjaki.html" class="clothes-open-item-link">
            <div class="clothes-open-item">Пиджаки</div>
          </a>
          <a href="" class="clothes-open-item-link">
            <div class="clothes-open-item">Рубашки</div>
          </a>
          <a href="/jakets.html" class="clothes-open-item-link">
            <div class="clothes-open-item">Жакеты</div>
          </a>
          <a href="" class="clothes-open-item-link">
            <div class="clothes-open-item">брюки & штаны</div>
          </a>
          <a href="" class="clothes-open-item-link">
            <div class="clothes-open-item">Ремни</div>
          </a>
          <a href="" class="clothes-open-item-link">
            <div class="clothes-open-item">Галстуки</div>
          </a>
          <a href="" class="clothes-open-item-link">
            <div class="clothes-open-item">Бабочки</div>
          </a>
        </div>
      </div>

      <div class="menu-main-item" id="shoes">
        <div class="menu-main-item-text">Обувь</div>
        <img class="menu-main-item-image" src="/img/стрелочка вниз.svg" alt="" id="image4" />
        <div class="shoes-open" id="openedShoes">
          <a href="" class="shoes-open-item-link">
            <div class="shoes-open-item">Оксфорды</div>
          </a>
          <a href="" class="shoes-open-item-link">
            <div class="shoes-open-item">Дерби</div>
          </a>
          <a href="" class="shoes-open-item-link">
            <div class="shoes-open-item">Броги</div>
          </a>
          <a href="" class="shoes-open-item-link">
            <div class="shoes-open-item">Монки</div>
          </a>
          <a href="" class="shoes-open-item-link">
            <div class="shoes-open-item">Лоферы</div>
          </a>
          <a href="" class="shoes-open-item-link">
            <div class="shoes-open-item">Челси</div>
          </a>
        </div>
      </div>

      <a class="menu-link" href="about us.html">
        <div class="menu-main-item">
          <div class="menu-main-item-text">О нас</div>
        </div>
      </a>

      <a class="menu-link" href="">
        <div class="menu-main-item">
          <div class="menu-main-item-text">ОПЛАТА И ДОСТАВКА</div>
        </div>
      </a>

      <a class="menu-link" href="">
        <div class="menu-main-item">
          <div class="menu-main-item-text">контакты</div>
        </div>
      </a>
    </aside>
  );
}
