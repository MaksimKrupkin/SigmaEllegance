import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';
import styles from './App.module.css';
import GoodsPage from './Pages/GoodsPage/GoodsPage';
import OpenGoodPage from './Pages/OpenGoodPage/OpenGoodPage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import SearchPage from './Pages/SearchPage/SearchPage';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/goodspage" element={<GoodsPage />} />
        <Route path="/opengoodspage" element={<OpenGoodPage />} />
        <Route path="/aboutuspage" element={<AboutUs />} />
        <Route path="/searchPage" element={<SearchPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
