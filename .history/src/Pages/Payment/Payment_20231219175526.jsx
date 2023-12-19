import React from 'react';
import styles from './Payment.module.css';
import checkImg from './checkImg.svg';
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';
import image4 from './4.png';
import image5 from './5.png';
import image6 from './6.png';
import image7 from './7.png';

export default function Payment() {
  return (
    <div className={styles.paymentPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>способы оплаты товара</h1>
        <div className={styles.items_wrapper}>
          <div className={styles.item}>
            <h2 className={styles.subtitle}>Онлайн-оплата</h2>
            <p className={styles.paragraph}>
              Оплата на сайте производится через сервис BePaid или Webpay.
            </p>
            <p className={styles.paragraph}>Оплатить заказ можно:</p>
            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>
                Банковской картой (<b>Visa, MasterCard</b> или <b>Maestro</b>) на сайте
              </p>
            </div>
            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>
                Через интернет-банкинг{' '}
                <b>(Беларусьбанк, Белагропромбанк, ПриорБанк, МТБанк, Оплати, РРБ Банк)</b> в
                мобильном приложении
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <h2 className={styles.subtitle}>Оплата картами рассрочки</h2>
            <p className={styles.paragraph}>
              При первой оплате с вашего счёта спишется 35% стоимости покупки, остальная часть будет
              списана автоматически в зависимости от вашей рассрочки.
            </p>
            <p className={styles.paragraph}>Рассрочка осуществляется по картам:</p>
            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>
                <b>Халва</b> (2 месяца по карте <b>Mix</b> или 4 месяца по карте <b>Max</b>)
              </p>
            </div>
            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>
                <b>Карта Покупок</b> (3 месяца)
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <h2 className={styles.subtitle}>Подарочными сертификатами</h2>
            <p className={styles.paragraph}>
              Оплатить заказ можно <a>Подарочным Сертификатом</a> до 100% покупки:и.
            </p>
            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>При онлайн-оплате на сайте интернет-магазина</p>
            </div>
            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>При оплате на кассе магазина</p>
            </div>
            <p className={styles.paragraph}>
              Если номинал подарочного сертификата больше покупки, то сумма подарочного сертификата
              будет списана полностью.
            </p>
          </div>
          <div className={styles.item}>
            <h2 className={styles.subtitle}>При получении</h2>
            <p className={styles.paragraph}>Оплатить заказ можно:</p>

            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>
                Банковской картой <b>(Visa, MasterCard или Maestro)</b> на кассе магазина или при
                получении у курьера
              </p>
            </div>
            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>
                Наличными на кассе магазина или при получении у курьера
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <h2 className={styles.subtitle}>Оплата гаджетами</h2>
            <p className={styles.paragraph}>
              Оплатить заказ можно смартфоном или часами, которые поддерживают{' '}
              <b>Samsung Pay, Apple Pay</b> или <b>Google Pay.</b>
            </p>
          </div>
          <div className={styles.item}>
            <img className={styles.image1} src={image1} alt="" />
            <img className={styles.image2} src={image2} alt="" />
            <img className={styles.image3} src={image3} alt="" />
            <img className={styles.image4} src={image4} alt="" />
            <img className={styles.image5} src={image5} alt="" />
            <img className={styles.image6} src={image6} alt="" />
            <img className={styles.image7} src={image7} alt="" />
          </div>
        </div>
      </div>
      <Sendings />
    </div>
  );
}
