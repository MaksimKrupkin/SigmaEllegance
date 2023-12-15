import React from 'react';
import styles from './SearchPage.module.css';
import { useState } from 'react';
import Popular from './Popular/Popular';
import axios from 'axios';
import { useEffect } from 'react';

export default function SearchPage() {
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/pidjac').then((resp) => {
      const data = resp.data;
      setGoods(data);
    });
  axios.get('http://localhost:3001/pidjac').then();
  axios.get('http://localhost:3001/kostum');
  axios.get('http://localhost:3001/shirts');
  axios.get('http://localhost:3001/shoes');
  axios.get('http://localhost:3001/bruki');
  axios.get('http://localhost:3001/accessories');
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  const [popular, setPopular] = useState(true);

  return (
    <main class={styles.main}>
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
