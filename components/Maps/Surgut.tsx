import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Surgut() {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [61.24800656236425, 73.4841845],
          zoom: 15,
        }}
        width="600px"
        height="300px"
      >
        <Placemark geometry={[61.24800656236425, 73.4841845]} />
      </Map>
    </YMaps>
  );
}

export default Surgut;
