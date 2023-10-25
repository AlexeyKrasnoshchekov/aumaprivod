import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Irkutsk() {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [52.280216571867705, 104.33866449999998],
          zoom: 15,
        }}
        width="400px"
        height="300px"
      >
        <Placemark geometry={[52.280216571867705, 104.33866449999998]} />
      </Map>
    </YMaps>
  );
}

export default Irkutsk;
