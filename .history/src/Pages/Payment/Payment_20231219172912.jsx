import React from 'react';
import styles from './Payment.module.css';
import checkImg from './checkImg.svg';

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
                Банковской картой (Visa, MasterCard или Maestro) на сайте
              </p>
            </div>
            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>
                Через интернет-банкинг (Беларусьбанк, Белагропромбанк, ПриорБанк, МТБанк, Оплати,
                РРБ Банк) в мобильном приложении
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
                Халва (2 месяца по карте Mix или 4 месяца по карте Max)
              </p>
            </div>
            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>Карта Покупок (3 месяца)</p>
            </div>
          </div>
          <div className={styles.item}>
            <h2 className={styles.subtitle}>Подарочными сертификатами</h2>
            <p className={styles.paragraph}>
              Оплатить заказ можно Подарочным Сертификатом до 100% покупки:и.
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
                Банковской картой (Visa, MasterCard или Maestro) на кассе магазина или при получении
                у курьера
              </p>
            </div>
            <div className={styles.paragraphWithCheck}>
              <img className={styles.check} src={checkImg} alt="" />
              <p className={styles.paragraph}>
                Наличными на кассе магазина или при получении у курьера
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
