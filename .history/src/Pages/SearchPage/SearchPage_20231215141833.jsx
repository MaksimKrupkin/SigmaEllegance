import React, { useState, useEffect } from 'react';
import styles from './SearchPage.module.css';
import Popular from './Popular/Popular';
import axios from 'axios';
import lodash from 'lodash';

export default function SearchPage() {
  const [goods, setGoods] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [popular, setPopular] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/pidjac')
      .then((resp) => {
        const data1 = resp.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    axios
      .get('http://localhost:3001/kostum')
      .then((resp) => {
        const data2 = resp.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    axios
      .get('http://localhost:3001/shirts')
      .then((resp) => {
        const data3 = resp.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    axios
      .get('http://localhost:3001/shoes')
      .then((resp) => {
        const data4 = resp.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    axios
      .get('http://localhost:3001/bruki')
      .then((resp) => {
        const data5 = resp.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    axios
      .get('http://localhost:3001/accessories')
      .then((resp) => {
        const data6 = resp.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    const allData = _.union(data1, data2, data3, data4, data5, data6);
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
