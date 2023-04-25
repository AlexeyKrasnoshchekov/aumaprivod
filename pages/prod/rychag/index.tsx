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
          Рычажные приводы SQF являются оптимальным решением в том случае, если
          неполнооборотный привод невозможно установить непосредственно на
          арматуру ввиду недостатка пространства или при необходимости отвода
          высоких температур и вибраций. Такая арматура может управляться только
          посредством рычажной сборки.
        </p>
        <p className={styles.text}>
          В основе рычажных приводов SQF – неполнооборотные электроприводы SQ.
        </p>
        {/* <h2 className={styles.title}>Многооборотные приводы SA и SAR</h2> */}
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <Link href={'/prod/rychag/1'}>
              <h2 className={styles.title}>
                Рычажные приводы SQF 05.2 - SQF 14.2
              </h2>
            </Link>
            <Image
              src={'/images/rychag/1.png'}
              alt="Рычажные приводы SQF 05.2 - SQF 14.2"
              width={170}
              height={150}
            />
            <p className={styles.text}>
              Рычажные приводы SQF основаны на неполнооборотных SQ и поэтому
              обладают такими же характеристиками.
            </p>
          </div>
          <div className={styles.right50}>
            <Link href={'/prod/rychag/2'}>
              <h2 className={styles.title}>
                Комбинации многооборотных приводов SA и рычажных редукторов GF
              </h2>
            </Link>
            <Image
              src={'/images/rychag/2.png'}
              alt="Комбинации многооборотных приводов SA и рычажных редукторов GF"
              width={170}
              height={150}
            />
            <p className={styles.text}>
              В случае, если необходим более высокий крутящий момент,
              многооборотные приводы семейства SA могут быть скомбинированы с
              рычажными редукторами GF. Рычажные редукторы GF основаны на
              червячных редукторах GS, которые можно модифицировать, установив
              на них основание и рычаг. Это дает значительное преимущество при
              хранении на складе, так как эту процедуру можно сделать позже.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default withLayout(Klin);
