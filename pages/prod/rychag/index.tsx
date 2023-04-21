import styles from './Rychag.module.css';
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
        <meta name="keywords" content="РЫЧАЖНЫЕ ПРИВОДЫ" />
        <title>РЫЧАЖНЫЕ ПРИВОДЫ</title>
        <meta
          name="description"
          content="Рычажные приводы SQF являются оптимальным решением в том случае, если неполнооборотный привод невозможно установить непосредственно на арматуру ввиду недостатка пространства или при необходимости отвода высоких температур и вибраций. Такая арматура может управляться только посредством рычажной сборки."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>РЫЧАЖНЫЕ ПРИВОДЫ</h2>
        <p className={styles.text}>
          Неполнооборотные редукторы АUМА применяются, там, где для работы
          арматуры необходим поворот рабочего органа на 90°.
        </p>
        <p className={styles.text}>
          Если диапазон крутящего момента неполнооборотных приводов с прямой
          установкой недостаточен, решением может быть комбинация
          многооборотного привода SA … и червячного редуктора GS . Таким образом
          можно достигнуть крутящего момента до 360,000 Нм.
        </p>
        {/* <h2 className={styles.title}>Многооборотные приводы SA и SAR</h2> */}
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <h2 className={styles.title}>Червячные редукторы GS</h2>
            <Image
              src={'/images/rychag/1.png'}
              alt="Червячные редукторы GS"
              width={170}
              height={150}
            />
            <p className={styles.text}>
              Червячные редукторы AUMA используются для управления
              неполнооборотной арматурой (например, дисковые затворы, шаровые
              краны).
            </p>
          </div>
          <div className={styles.right50}>
            <h2 className={styles.title}>Индикатор положения арматуры WSG</h2>
            <Image
              src={'/images/rychag/2.png'}
              alt="Индикатор положения арматуры WSG"
              width={170}
              height={150}
            />
            <p className={styles.text}>
              Если сигнал о положении арматуры передается через несколько этапов
              к концевым выключателям многооборотного привода, то накопление
              зазора может привести к гистерезису.
            </p>
          </div>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <h2 className={styles.title}>Червячные редукторы GS</h2>
            <Image
              src={'/images/rychag/1.png'}
              alt="Червячные редукторы GS"
              width={170}
              height={150}
            />
            <p className={styles.text}>
              Червячные редукторы AUMA используются для управления
              неполнооборотной арматурой (например, дисковые затворы, шаровые
              краны).
            </p>
          </div>
          <div className={styles.right50}>
            <h2 className={styles.title}>Индикатор положения арматуры WSG</h2>
            <Image
              src={'/images/rychag/2.png'}
              alt="Индикатор положения арматуры WSG"
              width={170}
              height={150}
            />
            <p className={styles.text}>
              Если сигнал о положении арматуры передается через несколько этапов
              к концевым выключателям многооборотного привода, то накопление
              зазора может привести к гистерезису.
            </p>
          </div>
        </div>

        {/* <div className={styles.gradient}></div> */}
      </div>
    </>
  );
}

export default withLayout(Klin);
