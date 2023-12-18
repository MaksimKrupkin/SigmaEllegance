import React from 'react';
import { YMaps, Map as YandexMap } from '@pbe/react-yandex-maps'; // Renaming Map to YandexMap

export default function MapComponent() {
  return (
    <div>
      <YMaps>
        <YandexMap defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </YMaps>
    </div>
  );
}
