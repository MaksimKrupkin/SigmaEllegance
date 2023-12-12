import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';
import styles from './App.module.css';
import GoodsPage from './Pages/GoodsPage/GoodsPage';

function App() {
  return (
    <body>
      <div className={styles.container}>
        <Header />
        {/* <HomePage /> */}
        <GoodsPage />
      </div>
    </body>
  );
}

export default App;
