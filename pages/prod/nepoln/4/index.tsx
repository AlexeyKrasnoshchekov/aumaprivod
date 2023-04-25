import styles from './Nepoln4.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Head from 'next/head';
import { Breadcrumb } from 'antd';

function Klin(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Комбинации многооборотных приводов SA с червячным редуктором GS"
        />
        <title>
          Комбинации многооборотных приводов SA с червячным редуктором GS
        </title>
        <meta
          name="description"
          content="Приводы SQEx 05.2 - SQEx 14.2 можно комбинировать с
          взрывозащищенными средствами управления: Электроприводы SQEx
          05.2 - SQEx 14.2 можно комбинировать с различными системами
          управления: от простого управления ОТКРЫТЬ-ЗАКРЫТЬ до версии с
          микроконтроллером с регистрацией рабочих данных или цифровым
          интерфейсом."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Breadcrumb
          items={[
            {
              title: <Link href={'/prod'}>Продукция</Link>,
            },
            {
              title: <Link href={'/prod/nepoln'}>Неполнооборотные приводы</Link>,
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>
                Комбинации многооборотных приводов SA с червячным редуктором GS
              </h2>
              <p className={styles.text}>
                Оглядываясь на 50 летний опыт, AUMA обрела множество
                производственных секретов в области взрывозащиты. С ее системой
                управления качеством, которая была аттестована согласно
                сертификатам ISO 9001 и CD 94/9/EC, AUMA соответствует всем
                требованиям для производства и продажи взрывозащищенной
                продукции.
              </p>
              <p className={styles.text}>
                Приводы SQEx 05.2 - SQEx 14.2 можно комбинировать с
                взрывозащищенными средствами управления: Электроприводы SQEx
                05.2 - SQEx 14.2 можно комбинировать с различными системами
                управления: от простого управления ОТКРЫТЬ-ЗАКРЫТЬ до версии с
                микроконтроллером с регистрацией рабочих данных или цифровым
                интерфейсом.
              </p>
              <p className={styles.text}>
                Если требуется более высокий крутящий момент, то
                взрывозащищенные приводы SAExC могут быть смонтированы с
                червячным редуктором GS.
              </p>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-around',
                }}
              >
                
                <Image
                  src={'/images/nepoln/2.2.png'}
                  alt="Взрывозащищенные неполнооборотные приводы SQEx и комбинации SA с червячными редукторами GS"
                  width={250}
                  height={260}
                />
                <Image
                  src={'/images/nepoln/2.5.png'}
                  alt="Взрывозащищенные неполнооборотные приводы SQEx и комбинации SA с червячными редукторами GS"
                  width={250}
                  height={370}
                />
              </div>
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Диапазон момента от 50Нм до 360000Нм</li>
                <li>Угол поворота от 75° до 105°</li>
                <li>Регулируемые концевые ограничители</li>
                <li>Время поворота на 90° от 4сек до 780сек</li>
                <li>Настройка по концевым и моментным выключателям</li>
                <li>Трехфазные и однофазные электродвигатели</li>
                <li>Самоторможение</li>
                <li>Маховик для ручного управления</li>
              </ul>
              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Оболочка с высокой степенью герметичности</li>
                <li>Высокая степень защиты от коррозии</li>
                <li>Широкий температурный диапазон применения</li>
              </ul>
              <h3 className={styles.title}>Oпции:</h3>
              <ul className={styles.text}>
                <li>
                  Другие углы поворота опционально (15°-45°, 45°-75°, 105°-135°)
                </li>
                <li>Промежуточные выключатели</li>
                <li>Сдвоенные выключатели</li>
                <li>Дистанционный датчик положения момента</li>
                <li>Магнитный датчик положения и момента</li>
                <li>Механический индикатор положения</li>
              </ul>
              <h3 className={styles.title}>Интерфейсы:</h3>
              <p className={styles.text}>
                Электрическое штекерное присоединение AUMA с соединительным
                щитком (подключение через клеммные разъемы в качестве опции)
                Крышка с резьбой для кабельных вводов Формы выходного вала в
                соответствии со стандартами ISO и DIN.
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default withLayout(Klin);
