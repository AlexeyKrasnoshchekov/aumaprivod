import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Omsk() {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [54.98154606971653, 73.32319749999995],
          zoom: 15,
        }}
        width="400px"
        height="300px"
      >
        <Placemark geometry={[54.98154606971653, 73.32319749999995]} />
      </Map>
    </YMaps>
  );
}

export default Omsk;
