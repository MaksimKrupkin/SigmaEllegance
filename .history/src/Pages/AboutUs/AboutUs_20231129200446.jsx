import React from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Компания</h1>
      <div className={styles.text}>
        SigmaEllegance — это место, где Вы и успех становится единым целым. Наша цель — предложить
        Вам только самое лучшее качество, и мы гордимся тем, что никогда не обманываем.
        <br />
        <br /> Каждый костюм, который мы продаем, сделан из самых качественных материалов и
        обработан по самым современным технологиям, чтобы обеспечить нашим клиентам максимальный
        комфорт и стиль. Мы предлагаем широкий выбор костюмов для мужчин и женщин различных цветов,
        размеров и стилей. В нашем ассортименте вы найдете офисные и бизнес-костюмы, а также костюмы
        для вечерних мероприятий и свадеб.
        <br />
        <br /> Также мы предлагаем индивидуальные услуги по пошиву костюма на заказ, чтобы
        обеспечить нашим клиентам уникальный внешний вид и идеальную посадку.
        <br />
        <br /> Мы гордимся тем, что наша компания заботится о том, чтобы каждый наш клиент получил
        высокое качество и отличный сервис. Присоединяйтесь к семье SigmaEllegance (SE), чтобы
        убедиться в этом самим!
      </div>
      <img className={styles.image} src="../../assets/img/billboard.png" alt="" />
    </main>
  );
}
