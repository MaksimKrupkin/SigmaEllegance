import React from 'react';
import styles from './SliderWrapper.module.css';
import leftArrow from '../../assets/img/Left Arrow.svg';
import rightArrow from '../../assets/img/Right Arrow.svg';
import SliderCard from '../SliderCard/SliderCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

export default function SliderWrapper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  const [sliderCards, setSliderCards] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/slider')
      .then((resp) => {
        const slider = resp.data;
        setSliderCards(slider);
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  }, []);
  console.log(sliderCards);
  return (
    <div className={styles.slider_wrapper}>
      <img className={styles.leftArrow} src={leftArrow} alt="" />
      <Slider className={styles.slider} {...settings}>
        <SliderCard type="костюмы" />
        <SliderCard type="костюмы" />
        <SliderCard type="костюмы" />
        <SliderCard type="костюмы" />

        {/* {sliderCards.map((card) => (
          <SliderCard key={card.index} type={card.type} image={card.img} />
        ))} */}
      </Slider>
      <img className={styles.rightArrow} src={rightArrow} alt="" />
    </div>
  );
}
