import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function map({city}) {
    console.log('first', city);
  switch (city) {
    case 'Сургут':
      <YMaps>
        <Map
          defaultState={{
            center: [61.24800656236425, 73.4841845],
            zoom: 15,
          }}
          width="400px"
          height="300px"
        >
          <Placemark geometry={[61.24800656236425, 73.4841845]} />
        </Map>
      </YMaps>;

      break;
    case 'Иркутск':
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
      </YMaps>;

      break;
    case 'Омск':
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
      </YMaps>;

      break;
    case 'Тюмень':
      <YMaps>
        <Map
          defaultState={{
            center: [57.14909856754112, 65.54906],
            zoom: 15,
          }}
          width="400px"
          height="300px"
        >
          <Placemark geometry={[57.14909856754112, 65.54906]} />
        </Map>
      </YMaps>;

      break;

    default:
      console.log(`Sorry, we are out of ${city}.`);
  }
}
