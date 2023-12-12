import React from 'react';
import leftArrow from '../../assets/img/Left Arrow.svg';
import styles from './LeftArrow.module.css';

export default function LeftArrow() {
  return (
    <>
      <img className={styles.leftArrow} src={leftArrow} alt="" />
    </>
  );
}
