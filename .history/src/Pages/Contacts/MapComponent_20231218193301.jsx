import React from 'react';
import { YMaps, Map as YandexMap, Placemark } from '@pbe/react-yandex-maps'; // Renaming Map to YandexMap
import styles from './Map.module.css';
import { mapKeys } from 'lodash';
export default function MapComponent() {
  return (
    <div className={styles.map}>
      <YMaps>
        <Placemark
          options={{
            iconLayout: 'default#image',
            iconImageHref: 'здесь путь к вашей картинке',
          }}
        />
        <YandexMap
          className={styles.map}
          defaultState={{ center: [53.90917, 27.54866], zoom: 17 }}
        />
      </YMaps>
    </div>
  );
}
