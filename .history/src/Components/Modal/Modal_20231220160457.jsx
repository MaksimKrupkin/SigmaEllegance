import React from 'react';
import styles from './Modal.module.css';

export default function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}></div>
    </div>
  );
}
