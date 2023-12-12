import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';
import styles from './App.module.css';
import GoodsPage from './Pages/GoodsPage/GoodsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<GoodsPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
