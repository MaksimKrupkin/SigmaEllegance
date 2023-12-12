import React from 'react';
import styles from './HomePage.module.css';

import Slider from '../Components/Slider/Slider';
import Styles from '../Components/Styles/Styles';
import Collections from '../Components/Collections/Collections';
import Footer from '../Components/Footer/Footer';
import Sendings from '../Components/Sendings/Sendings';
import MainScreen from '../Components/MainScreen/MainScreen';
import SideBar from '../Components/SideBar/SideBar';

function HomePage() {
  return (
    <>
      <SideBar />
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
