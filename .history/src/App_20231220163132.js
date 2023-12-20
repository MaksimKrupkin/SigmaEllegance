import React, { useState, useEffect, useRef } from 'react';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';
import styles from './App.module.css';
import GoodsPage from './Pages/GoodsPage/GoodsPage';
import OpenGoodPage from './Pages/OpenGoodPage/OpenGoodPage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import SearchPage from './Pages/SearchPage/SearchPage';
import Contacts from './Pages/Contacts/Contacts';
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import Modal from './Components/Modal/Modal';

function App() {
  const { category, id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {};

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={styles.container}>
      <Header handleOpenModal={() => setModalActive(true)} />

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
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Modal active={modalActive} setActive={setModalActive} />
      <Footer />
    </div>
  );
}

export default App;
