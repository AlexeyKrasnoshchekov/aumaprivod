import styles from './Nepoln3.module.css';
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
          content="Многооборотный привод SA с червячным редуктором GS представляет собой комбинацию, аналогичную неполнооборотному электроприводу с высоким крутящим моментом. Эти комбинации дополняют ряд неполнооборотных приводов SQ, диапазон крутящего момента которого ограничен до 2400Нм."
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
                Многооборотный привод SA с червячным редуктором GS представляет
                собой комбинацию, аналогичную неполнооборотному электроприводу с
                высоким крутящим моментом. Эти комбинации дополняют ряд
                неполнооборотных приводов SQ, диапазон крутящего момента
                которого ограничен до 2400Нм.
              </p>
              <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                <Image
                  src={'/images/nepoln/2.1.png'}
                  alt="Комбинации многооборотных приводов SA с червячным редуктором GS"
                  width={250}
                  height={280}
                />
                <Image
                  src={'/images/nepoln/2.4.png'}
                  alt="Комбинации многооборотных приводов SA с червячным редуктором GS"
                  width={330}
                  height={250}
                />
              </div>
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Диапазон момента от 250Нм до 360000Нм</li>
                <li>Угол поворота до 100°</li>
                <li>Время поворота на 90° от 9сек до 780сек</li>
                <li>Настраиваемые концевые упоры</li>
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
                  Углы поворота свыше 100° или многооборотный (без концевых
                  упоров)
                </li>
              </ul>
              <h3 className={styles.title}>Интерфейсы:</h3>
              <ul className={styles.text}>
                <li>
                  Электрическое присоединение через штепсельный разъем АУМА
                  (клеммы в качестве опции)
                </li>
                <li>Кабельные вводы различных исполнений</li>
                <li>
                  Нормы выходного вала в соответствии со стандартами ISO и DIN
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
