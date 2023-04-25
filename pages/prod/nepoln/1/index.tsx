import styles from './Nepoln1.module.css';
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
        <meta name="keywords" content="Неполнооборотные приводы SQ и SQR" />
        <title>Неполнооборотные приводы SQ и SQR</title>
        <meta
          name="description"
          content="Общепромышленные приводы SQ/SQR применяются в водном хозяйстве, энергетике, а также в судостроении, целлюлозно-бумажной и пищевой отраслях промышленности, в системах кондиционирования воздуха."
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
                Неполнооборотные приводы SQ и SQR
              </h2>
              <p className={styles.text}>
                Общепромышленные приводы SQ/SQR применяются в водном хозяйстве,
                энергетике, а также в судостроении, целлюлозно-бумажной и
                пищевой отраслях промышленности, в системах кондиционирования
                воздуха.
              </p>
              <p className={styles.text}>
                Температурный диапазон применения очень широк: от -60 до +80
                градусов. Предлагается также специальное исполнение от 0 до +120
                градусов.
              </p>
              <p className={styles.text}>
              Электроприводы SQ/SQR 07.2 – SQ/SQR 14.2 могут быть оснащены блоками управления АМ и АС.
              </p>
              <Image
              src={'/images/nepoln/1.1.png'}
              alt="Неполнооборотные приводы SQ и SQR"
              width={275}
              height={250}
            />
              <h3 className={styles.title}>Технические характеристики SQ:</h3>
              <ul className={styles.text}>
                <li>Крутящий момент от 50 Нм до 2400 Нм</li>
                <li>Угол поворота от 75° до 105°</li>
                <li>Время поворота на 90° от 4 с до 100 с</li>
                <li>Отключение по пути и по моменту</li>
                <li>Совместимость с 3ф и 1ф электродвигателями переменного тока</li>
                <li>Ручной маховик для ручного управления</li>
                <li>
                Механический указатель положения
                </li>
              </ul>
              <h3 className={styles.title}>Технические характеристики SQR:</h3>
              <ul className={styles.text}>
                <li>Крутящий момент от 50 Нм до 2400 Нм</li>
                <li>Момент регулирования от 75 Нм до 1200 Нм</li>
                <li>Макс. количество пусков - 1500 пусков в час</li>
                <li>Угол поворота от 75° до 105°</li>
                <li>Время поворота на 90° от 8 с до 100 с</li>
                <li>Отключение по пути и по моменту</li>
                <li>Совместимость с 3ф и 1ф электродвигателями переменного тока</li>
                <li>Ручной маховик для ручного управления</li>
              </ul>
              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Высокая защита оболочки</li>
                <li>Высокая степень защиты от коррозии</li>
                <li>Широкий температурный диапазон применимости</li>
              </ul>
              <h3 className={styles.title}>Опции:</h3>
              <ul className={styles.text}>
                <li>Промежуточные выключатели</li>
                <li>Сдвоенные выключатели</li>
                <li>Дистанционный датчик положения</li>
                <li>Магнитный датчик положения и момента</li>
                <li>Функциональная безопасность: До SIL 2 для определенных конфигураций</li>
              </ul>
              <h3 className={styles.title}>Интерфейсы:</h3>
              <ul className={styles.text}>
                <li>Электрический разъем AUMA (клеммы в качестве опции)</li>
                <li>Крышка с резьбой под различные кабельные вводы</li>
                <li>
                  Формы присоединения выходного вала в соответствии со
                  стандартами ISO, DIN
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default withLayout(Klin);
