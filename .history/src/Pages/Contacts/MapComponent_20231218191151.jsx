import React from 'react';
import { YMaps, Map as YandexMap } from '@pbe/react-yandex-maps'; // Renaming Map to YandexMap
import styles from './Map.module.css';
export default function MapComponent() {
  return (
    <div className={styles.map}>
      <YMaps>
        <YandexMap defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </YMaps>
    </div>
  );
}
