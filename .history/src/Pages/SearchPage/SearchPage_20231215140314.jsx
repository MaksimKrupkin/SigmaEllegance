import React, { useState, useEffect } from 'react';
import styles from './SearchPage.module.css';
import Popular from './Popular/Popular';
import axios from 'axios';

export default function SearchPage() {
  const [goods, setGoods] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [popular, setPopular] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/pidjac')
      .then((resp) => {
        const data = resp.data;
        setGoods(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.search_box}>
        <input
          type="text"
          placeholder="Что вы ищите?"
          className={styles.search_field}
          value={searchValue}
          onChange={(e) => {
            const value = e.target.value;
            setSearchValue(value);
            if (value.trim() === '') {
              setPopular(true);
            } else {
              setPopular(false);
            }
          }}
        />
        <button className={styles.search_glass}></button>
        <div className={styles.search_button_wrapper}>
          <button className={styles.search_cross}></button>
        </div>
      </div>
      {popular && <Popular />}
    </main>
  );
}
