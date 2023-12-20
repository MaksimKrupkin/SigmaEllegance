import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ active, setActive }) {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.title}>Регистрация</div>
        <form className={styles.input_form} action="">
          <input className={styles.input} type="text" placeholder="Вашe имя" />
          <input className={styles.input} type="telephone" placeholder="Ваш телефон" />
          <input className={styles.input} type="email" placeholder="Ваш Email" />
          <button onClick={() => setActive(false)}>Зарегестрироваться</button>
        </form>
      </div>
    </div>
  );
}
