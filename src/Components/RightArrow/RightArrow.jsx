import React from 'react';
import rightArrow from '../../assets/img/Right Arrow.svg';
import styles from './RightArrow.module.css';

export default function RightArrow() {
  return (
    <>
      <img className={styles.rightArrow} src={rightArrow} alt="" />
    </>
  );
}
