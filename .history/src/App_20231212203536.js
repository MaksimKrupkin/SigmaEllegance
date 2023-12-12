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
  const [category, setCategory] = useState('');
  const handleCategory = (data) => {
    setCategory(data); // Устанавливаем полученные данные в состояние родительского компонента
  };
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/goodspage/{category}" element={<GoodsPage />} />
        <Route path="/opengoodspage" element={<OpenGoodPage />} />
        <Route path="/aboutUsPage" element={<AboutUs />} />
        <Route path="/searchPage" element={<SearchPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
