import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';
import styles from './App.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
