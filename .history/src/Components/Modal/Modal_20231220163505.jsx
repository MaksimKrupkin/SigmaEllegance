import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ active, setActive }) {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation}></div>
    </div>
  );
}
