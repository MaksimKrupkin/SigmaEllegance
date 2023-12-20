import React from 'react';
import icon1 from '../../assets/img/pint.svg';
import icon2 from '../../assets/img/TT.svg';
import icon3 from '../../assets/img/TG.svg';
import icon4 from '../../assets/img/IG.svg';
import icon5 from '../../assets/img/VK.svg';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column_1}>
        <div className={styles.column_title}>О компании</div>
        <Link className={styles.column_item}> Магазины</Link>
        <Link className={styles.column_item}>Контакты</Link>
        <Link className={styles.column_item}>О нас</Link>
        <Link to="/policy" className={styles.column_item}>
          Политика
        </Link>
        <Link to="/feedback" className={styles.column_item}>
          Обратная связь
        </Link>
      </div>
      <div className={styles.column_2}>
        <div className={styles.column_title}>Поддержка</div>
        <Link className={styles.column_item}> Оплата товара</Link>
        <Link className={styles.column_item}>Бонусная программа</Link>
        <Link className={styles.column_item}>Где мой заказ?</Link>
        <Link className={styles.column_item}>Доставка товара</Link>
        <Link className={styles.column_item}>Обмен и возврат</Link>
        <Link className={styles.column_item}>Подарочный сертификат</Link>
        <Link className={styles.column_item}>Помощь портного</Link>
      </div>
      <div className={styles.column_3}>
        <div className={styles.column_title}>Магазин</div>
        <Link className={styles.column_item}> Коллекции</Link>
        <Link className={styles.column_item}>Смокинги</Link>
        <Link className={styles.column_item}>Пиджаки</Link>
        <Link className={styles.column_item}>Брюки & Штаны</Link>
        <Link className={styles.column_item}>Рубашки</Link>
      </div>
      <div className={styles.footer_form}>
        <div className={styles.footer_form_title}>Узнавайте первыми</div>
        <form action={styles.text}>
          <input className={styles.footer_form_email} type="text" placeholder="Ваш Email" />
        </form>
        <div className={styles.footer_button}>
          <div className={styles.footer_link}>Подписаться</div>
        </div>
        <div className={styles.policy}>
          Подписываясь на рассылку, вы соглашаетесь с условиями{' '}
          <Link href="" className={styles.policy_link}>
            оферты
          </Link>{' '}
          и <a className={styles.policy_link}>политики конфиденциальности</a>{' '}
        </div>
      </div>
      <div className={styles.footer_border}>
        <img src="/img/Border.svg" alt="" />
      </div>
      <div className={styles.sigma_corp}>© SigmaEllegance, 2023</div>
      <div className={styles.made_by}>made by @krupkinmaxim</div>
      <div className={styles.social_networks}>
        <img className={styles.pintrest} src={icon1} alt="" />
        <img className={styles.tik_tok} src={icon2} alt="" />
        <img className={styles.telegram} src={icon3} alt="" />
        <img className={styles.instagram} src={icon4} alt="" />
        <img className={styles.vk} src={icon5} alt="" />
      </div>
    </footer>
  );
}
