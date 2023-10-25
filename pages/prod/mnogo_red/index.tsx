import styles from './Mnogo_red.module.css';
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
        <meta name="keywords" content="МНОГООБОРОТНЫЕ РЕДУКТОРЫ" />
        <title>МНОГООБОРОТНЫЕ РЕДУКТОРЫ</title>
        <meta
          name="description"
          content="Mногооборотные приводы SA ... можно комбинировать с коническими и цилиндрическими редукторами AUMA для увеличения крутящего момента или для изменения положения выходного вала. Сами редукторы, разумеется, могут быть использованы для ручного управления арматурой."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>МНОГООБОРОТНЫЕ РЕДУКТОРЫ</h2>
          <p className={styles.text}>
            Mногооборотные приводы SA ... можно комбинировать с коническими и
            цилиндрическими редукторами АУМА для увеличения крутящего момента
            или для изменения положения выходного вала. Сами редукторы,
            разумеется, могут быть использованы для ручного управления
            арматурой.
          </p>
          {/* <h2 className={styles.title}>Многооборотные приводы SA и SAR</h2> */}
          <div className={styles.middleWrapper}>
            <div className={styles.left50}>
              <Link href={'/prod/mnogo_red/1'}>
                <h2 className={styles.title}>Цилиндрические редукторы GST</h2>
              </Link>
              <Image
                src={'/images/mnogo_red/1.png'}
                alt="Цилиндрические редукторы GST"
                width={200}
                height={161}
              />
              <p className={styles.text}>
                Цилиндрические редукторы АУМА используются для управления
                многооборотной арматурой (например, задвижки, клапаны).
              </p>
            </div>
            <div className={styles.right50}>
              <Link href={'/prod/mnogo_red/2'}>
                <h2 className={styles.title}>Конические редукторы GK</h2>
              </Link>
              <Image
                src={'/images/mnogo_red/2.png'}
                alt="Конические редукторы GK"
                width={160}
                height={150}
              />
              <p className={styles.text}>
                Конические редукторы АУМА используются для работы арматуры
                (например, задвижек, клапанов).
              </p>
            </div>
          </div>
          <div className={styles.middleWrapper}>
            <div className={styles.left50}>
              <Link href={'/prod/mnogo_red/3'}>
                <h2 className={styles.title}>Многооборотные редукторы GHT</h2>
              </Link>
              <Image
                src={'/images/mnogo_red/3.png'}
                alt="Многооборотные редукторы GHT"
                width={150}
                height={180}
              />
              <p className={styles.text}>
                Для трубопроводов с высоким давлением необходимы многооборотные
                приводы с высоким крутящим моментом. Многооборотный привод в
                сочетании с многооборотным редуктором GHT создают крутящий
                момент до 80000Нм.
              </p>
            </div>
            <div className={styles.right50}>
              <Link href={'/prod/mnogo_red/4'}>
                <h2 className={styles.title}>Концевые выключатели WSH</h2>
              </Link>
              <Image
                src={'/images/mnogo_red/4.png'}
                alt="Концевые выключатели WSH"
                width={150}
                height={150}
              />
              <p className={styles.text}>
                Для арматуры с ручным управлением может быть необходима
                информация о положении арматуры, которая отображается в
                диспетчерской. Это системы, где, например, клапан может
                находиться в открытом положении только тогда, когда другой
                клапан закрыт. Концевые выключатели WSH для арматуры,
                управляемой вручную, подходят именно для таких случаев.
              </p>
            </div>
          </div>
          <div className={styles.gradient}></div>
        </div>
      </>
    </>
  );
}

export default withLayout(Klin);
