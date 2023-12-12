import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';
import styles from './App.module.css';

function App() {
  return (
    <body>
      <div className={styles.container}>
        <Header />
        <HomePage />
      </div>
    </body>
  );
}

export default App;
