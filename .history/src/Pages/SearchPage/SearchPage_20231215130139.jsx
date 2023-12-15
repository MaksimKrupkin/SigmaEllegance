import React from 'react';
import styles from './SearchPage.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Popular from './Popular/Popular';

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  const [popular, setPopular] = useState(true);
  const togglePopular = () => {
    if (searchValue != '') {
      setSearchValue = false;
    }
  };
  return (
    <main class={styles.main}>
      <div className={styles.search_box}>
        <input
          type="text"
          placeholder="Что вы ищите?"
          className={styles.search_field}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button className={styles.search_glass}></button>
        <div className={styles.search_button_wrapper}>
          <button className={styles.search_cross}></button>
        </div>
      </div>
      {togglePopular && <Popular />}
      <Popular />
    </main>
  );
}
