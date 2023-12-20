import React from 'react';
import styles from './Feedback.module.css';

export default function Feedback() {
  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Обратная связь</h1>
        <p className={styles.paragraph}>
          Если хотите поблагодарить наших сотрудников или же обратить внимание на недостатки,
          напишите нам. Мы гарантируем конфиденциальность ваших персональных данных.
        </p>
        <div className={styles.inputs_wrapper}>
          <input placeholder="Ваше имя" className={styles.input} type="text" />
          <input placeholder="Ваша фамилия" className={styles.input} type="text" />
          <input placeholder="Ваш Email" className={styles.input} type="text" />
          <input placeholder="Ваше телефон" className={styles.input} type="text" />
        </div>
        <p className={styles.paragraph}>
          Пожалуйста, укажите один из способов контакта с вами, иначе мы не сможем связаться с вами
          и ответить.
        </p>
        <div className={styles.input_wrapper2}>
          <input type="text" />
          <select type="text" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
