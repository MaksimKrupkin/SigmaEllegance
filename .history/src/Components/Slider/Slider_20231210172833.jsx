import React from 'react';
import styles from './Slider.module.css';
import leftArrow from '../../assets/img/Left Arrow.svg';
import rightArrow from '../../assets/img/Right Arrow.svg';
import SliderCard from '../SliderCard/SliderCard';
import { useEffect } from 'react';
import axios from 'axios';

export default function Slider() {
  useEffect(() => {}, []);

  return (
    <div className={styles.slider_wrapper}>
      <img className={styles.leftArrow} src={leftArrow} alt="" />

      <div className={styles.slider}>
        <SliderCard />
      </div>
      <img className={styles.rightArrow} src={rightArrow} alt="" />
    </div>
  );
}
