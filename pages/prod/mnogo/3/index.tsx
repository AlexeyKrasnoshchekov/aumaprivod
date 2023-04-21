import styles from './Mnogo3.module.css';
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
        <meta name="keywords" content="Комбинации с редукторами" />
        <title>Комбинации с редукторами</title>
        <meta
          name="description"
          content="Если вал арматуры должен быть под определенным углом к выходному валу привода, или направление смещено на 90 градусов, используются комбинации многооборотных приводов SA ... с цилиндрическими редукторами АУМА GST или коническими редукторами GK. В обоих случаях, выходной момент может быть увеличен в несколько раз."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.middleWrapper}>
          <div className={styles.left80}>
            <h2 className={styles.title}>Комбинации с редукторами</h2>
            <p className={styles.text}>
              Если вал арматуры должен быть под определенным углом к выходному
              валу привода, или направление смещено на 90 градусов, используются
              комбинации многооборотных приводов SA ... с цилиндрическими
              редукторами АУМА GST или коническими редукторами GK. В обоих
              случаях, выходной момент может быть увеличен в несколько раз.
            </p>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around',
              }}
            >
              <Image
                src={'/images/mnogo/6.png'}
                alt="Комбинации с редукторами"
                width={250}
                height={250}
              />
              <Image
                src={'/images/mnogo/2.2.png'}
                alt="Комбинации с редукторами"
                width={250}
                height={280}
              />
            </div>
            <h3 className={styles.title}>Особенности конструкции:</h3>
            <ul className={styles.text}>
              <li>Диапазон моментов от 120 Нм до 16 000 Нм</li>
              <li>Маховик для ручного управления</li>
            </ul>
            <h3 className={styles.title}>Условия окружающей среды:</h3>
            <ul className={styles.text}>
              <li>Высокая степень защиты оболочки</li>
              <li>Высокая степень защиты от коррозии</li>
              <li>Широкий температурный диапазон применения</li>
            </ul>
            <h3 className={styles.title}>Интерфейсы:</h3>
            <ul className={styles.text}>
              <li>
                Электрическое штекерное присоединение АУМА с соединительным
                щитком (подсоединение клеммные разъемы опционально)
              </li>
              <li>Крышка с резьбой для кабельных вводов</li>
              <li>Выходные формы соответствуют стандартам ISO и DIN</li>
            </ul>
          </div>
        </div>

        {/* <div className={styles.gradient}></div> */}
      </div>
    </>
  );
}

export default withLayout(Klin);
