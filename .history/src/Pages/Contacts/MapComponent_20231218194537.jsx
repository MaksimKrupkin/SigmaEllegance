import React from 'react';
import { YMaps, Map as YandexMap, Placemark } from '@pbe/react-yandex-maps'; // Renaming Map to YandexMap
import styles from './Map.module.css';
import placemark from './location.svg';

export default function MapComponent() {
  return (
    <div className={styles.map}>
      <YMaps>
        <YandexMap className={styles.map} defaultState={{ center: [53.90917, 27.54866], zoom: 17 }}>
          <Placemark
            geometry={[53.90917, 27.54866]}
            options={{
              iconLayout: 'default#image', // Устанавливаем layout для изображения
              iconImageHref: placemark, // Путь к изображению метки
              iconImageSize: [30, 30], // Размеры изображения
              iconImageOffset: [-15, -15], // Смещение изображения
            }}
          />
        </YandexMap>
      </YMaps>
    </div>
  );
}
