import styles from './Rychag_red.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Head from 'next/head';

function Klin(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Рычажные редукторы" />
        <title>Рычажные редукторы</title>
        <meta
          name="description"
          content="Рычажные редукторы АУМА используются для управления двигателем задвижек посредством рычажного устройства (например, поворотные дисковые затворы «Баттерфляй», жалюзные задвижки).
          "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.middleWrapper}>
          <div className={styles.left80}>
            <h2 className={styles.title}>
              Рычажные редукторы GF 50.3 - GF 125.3 и GF 160 - GF 250
            </h2>
            <Image
              src={'/images/privod_cards/rychag_red.png'}
              alt="Рычажные редукторы GF 50.3 - GF 125.3 и GF 160 - GF 250"
              width={220}
              height={200}
            />
            <h3 className={styles.title}>Особенности конструкции:</h3>
            <ul className={styles.text}>
              <li>Диапазон моментов до 45,000 Нм</li>
              <li>Угол поворота до 100°</li>
              <li>Поворотный рычаг с 2 или 3 отверстиями для шарового шарнира</li>
              <li>Самоторможение</li>
            </ul>
            <h3 className={styles.title}>Условия окружающей среды:</h3>
            <ul className={styles.text}>
              <li>Высокая защита оболочки</li>
              <li>Высокое качество защиты от коррозии</li>
              <li>Широкий температурный диапазон применимости</li>
            </ul>
            <h3 className={styles.title}>Oпции:</h3>
            <ul className={styles.text}>
              <li>Угол поворота менее 100° или многооборотный (без концевых ограничителей)</li>
              <li>Бронзовое червячное кольцо для модульных систем</li>
              <li>Вращение по часовой стрелке входного вала ведет к вращению против часовой стрелки выходного вала.</li>
            </ul>
            {/* <p className={styles.text}>
              Рычажные редукторы АУМА используются для управления двигателем
              задвижек посредством рычажного устройства (например, поворотные
              дисковые затворы «Баттерфляй», жалюзные задвижки).
            </p>
            <p className={styles.text}>
              Вращение по часовой стрелке входного вала приводит к движению по
              часовой стрелке рычажного.
            </p> */}
          </div>
        </div>

        {/* <div className={styles.gradient}></div> */}
      </div>
    </>
  );
}

export default withLayout(Klin);
