import React from 'react';
import icon1 from '../../assets/img/pint.svg';
import icon2 from '../../assets/img/TT.svg';
import icon3 from '../../assets/img/TG.svg';
import icon4 from '../../assets/img/IG.svg';
import icon5 from '../../assets/img/VK.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="column-1">
        <div className="column-title">О компании</div>
        <div className="column-item"> Магазины</div>
        <div className="column-item">Контакты</div>
        <div className="column-item">О нас</div>
        <div className="column-item">Политика</div>
        <div className="column-item">Обратная связь</div>
      </div>
      <div className="column-2">
        <div className="column-title">Поддержка</div>
        <div className="column-item"> Оплата товара</div>
        <div className="column-item">Бонусная программа</div>
        <div className="column-item">Где мой заказ?</div>
        <div className="column-item">Доставка товара</div>
        <div className="column-item">Обмен и возврат</div>
        <div className="column-item">Подарочный сертификат</div>
        <div className="column-item">Помощь портного</div>
      </div>
      <div className="column-3">
        <div className="column-title">Магазин</div>
        <div className="column-item"> Коллекции</div>
        <div className="column-item">Смокинги</div>
        <div className="column-item">Пиджаки</div>
        <div className="column-item">Брюки & Штаны</div>
        <div className="column-item">Рубашки</div>
        <div className="column-item">Все товары</div>
      </div>
      <div className="footer-form">
        <div className="footer-form-title">Узнавайте первыми</div>
        <form action="text">
          <input className="footer-form-email" type="text" placeholder="Ваш Email" />
        </form>
        <div className="footer-button">
          <div className="footer-link">Подписаться</div>
        </div>
        <div className="policy">
          Подписываясь на рассылку, вы соглашаетесь с условиями{' '}
          <a href="" class="policy-link">
            оферты
          </a>{' '}
          и <a class="policy-link">политики конфиденциальности</a>{' '}
        </div>
      </div>
      <div className="footer-border">
        <img src="/img/Border.svg" alt="" />
      </div>
      <div className="sigma-corp">© SigmaEllegance, 2023</div>
      <div className="made-by">made by @krupkinmaxim</div>
      <div className="social-networks">
        <img className="pintrest" src={icon1} alt="" />
        <img className="tik-tok" src={icon2} alt="" />
        <img className="telegram" src={icon3} alt="" />
        <img className="instagram" src={icon4} alt="" />
        <img className="vk" src={icon5} alt="" />
      </div>
    </footer>
  );
}
