import React from 'react';
import styles from './HomePage.module.css';
import mainScreenImage from '../assets/img/background.png';
import Slider from '../Components/Slider/Slider';
import Styles from '../Components/Styles/Styles';
import Collections from '../Components/Collections/Collections';
import Footer from '../Components/Footer/Footer';
import Sendings from '../Components/Sendings/Sendings';
import MainScreen from '../Components/MainScreen/MainScreen';

function HomePage() {
  return (
    <>
      <MainScreen />
      <Slider />
      <Styles />
      <Collections />
      <Sendings />
      <Footer />
    </>
  );
}

export default HomePage;
