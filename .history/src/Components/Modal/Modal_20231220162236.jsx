import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ active, setActive }) {
  return (
    <div
      className={active ? 'styles.modal active' : 'modal'}
      className={styles.modal}
      onClick={() => setActive(false)}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation}></div>
    </div>
  );
}
