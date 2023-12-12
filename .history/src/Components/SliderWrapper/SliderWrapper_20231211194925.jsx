import React, { useEffect, useState } from 'react';
import styles from './SliderWrapper.module.css';
import SliderCard from '../SliderCard/SliderCard';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SliderWrapper() {
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

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={styles.customPrevArrow} onClick={onClick}>
        {<LeftArrow />}
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={styles.customNextArrow} onClick={onClick}>
        {<RightArrow />}
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={styles.slider_wrapper}>
      <Slider {...settings} className={styles.slider}>
        {sliderCards.map((card, index) => (
          <SliderCard key={index} type={card.type} image={card.img} />
        ))}
      </Slider>
    </div>
  );
}
