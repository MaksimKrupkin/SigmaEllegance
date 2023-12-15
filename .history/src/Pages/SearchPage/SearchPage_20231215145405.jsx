import React, { useState, useEffect } from 'react';
import styles from './SearchPage.module.css';
import Popular from './Popular/Popular';
import axios from 'axios';
import lodash from 'lodash';
import GoodsCard from '../../Components/GoodsCard/GoodsCard';

export default function SearchPage() {
  const [goods, setGoods] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [popular, setPopular] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://localhost:3001/pidjac');
        const response2 = await axios.get('http://localhost:3001/kostum');
        const response3 = await axios.get('http://localhost:3001/shirts');
        const response4 = await axios.get('http://localhost:3001/shoes');
        const response5 = await axios.get('http://localhost:3001/bruki');
        const response6 = await axios.get('http://localhost:3001/accessories');

        const data1 = response1.data;
        const data2 = response2.data;
        const data3 = response3.data;
        const data4 = response4.data;
        const data5 = response5.data;
        const data6 = response6.data;

        const allData = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6];
        setGoods(allData);
        console.log(allData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(goods);

  const searchResults = goods.filter((item) =>
    item.type.toLowerCase().includes(searchValue.toLowerCase()),
  );
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
      <div className={styles.container_goods}>
        {searchValue.trim() !== '' &&
          searchResults.map((card, index) => (
            <GoodsCard
              category={cart.category}
              key={index}
              type={card.type}
              price={card.price}
              image={card.image1}
              id={card.id}
            />
          ))}
      </div>
    </main>
  );
}
