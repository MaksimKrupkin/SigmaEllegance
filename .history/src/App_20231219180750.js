import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';
import styles from './App.module.css';
import GoodsPage from './Pages/GoodsPage/GoodsPage';
import OpenGoodPage from './Pages/OpenGoodPage/OpenGoodPage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import SearchPage from './Pages/SearchPage/SearchPage';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Contacts from './Pages/Contacts/Contacts';
import Payment from './Pages/Payment/Payment';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const { category, id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/goodspage/" element={<GoodsPage />} />
        <Route path="/goodspage/:category" element={<GoodsPage />} />
        <Route path="/goodspage/:category/:id" element={<OpenGoodPage />} />
        <Route path="/opengoodspage" element={<OpenGoodPage />} />
        <Route path="/opengoodspage/:category/:id" element={<OpenGoodPage />} />
        <Route path="/aboutUsPage" element={<AboutUs />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
