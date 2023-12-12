import React, { useEffect, useState } from 'react';
import styles from './SliderWrapper.module.css';
import SliderCard from '../SliderCard/SliderCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from '../LeftArrow/LeftArrow';
import RightArrow from '../RightArrow/RightArrow';

export default function SliderWrapper() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Показывать 4 карточки одновременно
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
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

  return (
    <div className={styles.slider_wrapper}>
      <div className={styles.arrows}>
        <LeftArrow />
      </div>
      <div className={styles.slider_container}>
        <Slider className={styles.slider} {...settings}>
          {sliderCards.map((card) => (
            <SliderCard key={card.index} type={card.type} image={card.img} />
          ))}
        </Slider>
      </div>
      <div className={styles.arrows}>
        <RightArrow />
      </div>
    </div>
  );
}
